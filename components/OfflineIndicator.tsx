"use client"

import { useState, useEffect } from "react"
import { AlertCircle, Wifi, WifiOff, Download, RefreshCw, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card, CardContent } from "@/components/ui/card"
import { swManager } from "@/utils/sw-registration"

export default function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(true)
  const [showUpdateNotification, setShowUpdateNotification] = useState(false)
  const [updateVersion, setUpdateVersion] = useState<string>("")
  const [isInstallable, setIsInstallable] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showOfflineReady, setShowOfflineReady] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)
  const [showIndicator, setShowIndicator] = useState(false)

  useEffect(() => {
    // Vérifier si on est côté client
    if (typeof window === "undefined") return

    // État initial
    setIsOnline(navigator.onLine)
    setShowIndicator(!navigator.onLine)

    // Écouter les changements de connexion
    const handleConnectionChange = (event: CustomEvent) => {
      setIsOnline(event.detail.online)
      setShowIndicator(!event.detail.online)
    }

    // Écouter les mises à jour du Service Worker
    const handleUpdateAvailable = (event: CustomEvent) => {
      console.log("🎉 Update available:", event.detail)
      setShowUpdateNotification(true)
      setUpdateVersion(event.detail?.version || "")
    }

    // Écouter quand l'app est prête hors ligne
    const handleOfflineReady = () => {
      setShowOfflineReady(true)
      // Masquer après 5 secondes
      setTimeout(() => setShowOfflineReady(false), 5000)
    }

    // Écouter l'événement d'installation PWA
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setIsInstallable(true)
    }

    const handleOnline = () => {
      setIsOnline(true)
      setShowIndicator(true)
      setTimeout(() => setShowIndicator(false), 3000)
    }

    const handleOffline = () => {
      setIsOnline(false)
      setShowIndicator(true)
    }

    window.addEventListener("connection-change", handleConnectionChange as EventListener)
    window.addEventListener("sw-update-available", handleUpdateAvailable as EventListener)
    window.addEventListener("sw-offline-ready", handleOfflineReady)
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("connection-change", handleConnectionChange as EventListener)
      window.removeEventListener("sw-update-available", handleUpdateAvailable as EventListener)
      window.removeEventListener("sw-offline-ready", handleOfflineReady)
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  const handleUpdateApp = async () => {
    if (!swManager) return

    setIsUpdating(true)
    try {
      await swManager.activateUpdate()
      setShowUpdateNotification(false)
    } catch (error) {
      console.error("Update failed:", error)
      setIsUpdating(false)
    }
  }

  const handleForceUpdate = async () => {
    if (!swManager) return

    setIsUpdating(true)
    try {
      await swManager.clearCacheAndReload()
    } catch (error) {
      console.error("Force update failed:", error)
      window.location.reload()
    }
  }

  const handleCheckUpdate = async () => {
    if (!swManager) return

    try {
      await swManager.checkForUpdates()
    } catch (error) {
      console.error("Manual update check failed:", error)
    }
  }

  const handleInstallApp = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === "accepted") {
      setIsInstallable(false)
      setDeferredPrompt(null)
    }
  }

  const dismissUpdate = () => {
    setShowUpdateNotification(false)
  }

  if (!showIndicator && isOnline) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 space-y-2 p-2">
      {/* Indicateur de connexion */}
      {!isOnline && (
        <Alert className="bg-orange-50 border-orange-200">
          <WifiOff className="h-4 w-4 text-orange-600" />
          <AlertDescription className="text-orange-800">
            <div className="flex items-center justify-between">
              <span>Mode hors ligne - Fonctionnalités limitées</span>
              <Wifi className="h-4 w-4 ml-2" />
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* App prête hors ligne */}
      {showOfflineReady && (
        <Alert className="bg-green-50 border-green-200">
          <Download className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            <div className="flex items-center justify-between">
              <span>📱 Application disponible hors ligne !</span>
              <Button size="sm" variant="ghost" onClick={() => setShowOfflineReady(false)} className="ml-2 h-6 w-6 p-0">
                <X className="h-3 w-3" />
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Notification de mise à jour */}
      {showUpdateNotification && (
        <Alert className="bg-blue-50 border-blue-200">
          <AlertCircle className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-800">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-medium">Nouvelle version disponible {updateVersion && `(${updateVersion})`}</span>
                <span className="text-xs text-blue-600">Mettez à jour pour les dernières fonctionnalités</span>
              </div>
              <div className="flex gap-1 ml-2">
                <Button size="sm" onClick={handleUpdateApp} disabled={isUpdating} className="h-6 text-xs">
                  {isUpdating ? <RefreshCw className="h-3 w-3 animate-spin" /> : "Mettre à jour"}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleForceUpdate}
                  disabled={isUpdating}
                  className="h-6 text-xs bg-transparent"
                >
                  Forcer
                </Button>
                <Button size="sm" variant="ghost" onClick={dismissUpdate} className="h-6 w-6 p-0">
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Notification d'installation PWA */}
      {isInstallable && (
        <Alert className="bg-green-50 border-green-200">
          <Download className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            <div className="flex items-center justify-between">
              <span>Installer l'application sur votre appareil</span>
              <div className="flex gap-1 ml-2">
                <Button size="sm" onClick={handleInstallApp} className="h-6 text-xs">
                  Installer
                </Button>
                <Button size="sm" variant="ghost" onClick={() => setIsInstallable(false)} className="h-6 w-6 p-0">
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Bouton de vérification manuelle des mises à jour (seulement en développement) */}
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-4 right-4">
          <Button size="sm" variant="outline" onClick={handleCheckUpdate} className="text-xs bg-transparent">
            <RefreshCw className="h-3 w-3 mr-1" />
            Vérifier MAJ
          </Button>
        </div>
      )}

      {/* Offline Alert */}
      <div className="fixed top-4 right-4 z-50">
        <Card className={`shadow-lg ${isOnline ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
          <CardContent className="p-3">
            <div className="flex items-center gap-2">
              {isOnline ? (
                <>
                  <Wifi className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-700 font-medium">Connexion rétablie</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-4 h-4 text-red-600" />
                  <span className="text-sm text-red-700 font-medium">Hors ligne</span>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
