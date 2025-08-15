"use client"

import { useState, useEffect } from "react"
import { AlertCircle, Wifi, WifiOff, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { swManager } from "@/utils/sw-registration"

export function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(true)
  const [showUpdateNotification, setShowUpdateNotification] = useState(false)
  const [isInstallable, setIsInstallable] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)

  useEffect(() => {
    // Vérifier si on est côté client
    if (typeof window === "undefined") return

    // État initial
    setIsOnline(navigator.onLine)

    // Écouter les changements de connexion
    const handleConnectionChange = (event: CustomEvent) => {
      setIsOnline(event.detail.online)
    }

    // Écouter les mises à jour du Service Worker
    const handleUpdateAvailable = () => {
      setShowUpdateNotification(true)
    }

    // Écouter l'événement d'installation PWA
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setIsInstallable(true)
    }

    window.addEventListener("connection-change", handleConnectionChange as EventListener)
    window.addEventListener("sw-update-available", handleUpdateAvailable)
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener("connection-change", handleConnectionChange as EventListener)
      window.removeEventListener("sw-update-available", handleUpdateAvailable)
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    }
  }, [])

  const handleUpdateApp = async () => {
    if (swManager) {
      await swManager.activateUpdate()
      setShowUpdateNotification(false)
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

      {/* Notification de mise à jour */}
      {showUpdateNotification && (
        <Alert className="bg-blue-50 border-blue-200">
          <AlertCircle className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-800">
            <div className="flex items-center justify-between">
              <span>Une nouvelle version est disponible</span>
              <Button size="sm" onClick={handleUpdateApp} className="ml-2 h-6 text-xs">
                Mettre à jour
              </Button>
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
              <Button size="sm" onClick={handleInstallApp} className="ml-2 h-6 text-xs">
                Installer
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}
