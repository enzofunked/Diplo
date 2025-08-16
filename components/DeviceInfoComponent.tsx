"use client"

import { useState, useEffect } from "react"
import { Smartphone, Monitor, Wifi, Battery, Cpu, HardDrive, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface DeviceInfo {
  userAgent: string
  platform: string
  language: string
  cookieEnabled: boolean
  onLine: boolean
  screenWidth: number
  screenHeight: number
  colorDepth: number
  pixelRatio: number
  timezone: string
  memory?: number
  cores?: number
  connection?: any
}

export default function DeviceInfoComponent() {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null)
  const [batteryInfo, setBatteryInfo] = useState<any>(null)

  useEffect(() => {
    const getDeviceInfo = async () => {
      const info: DeviceInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        cookieEnabled: navigator.cookieEnabled,
        onLine: navigator.onLine,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        colorDepth: window.screen.colorDepth,
        pixelRatio: window.devicePixelRatio,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      }

      // Informations mémoire (si disponible)
      if ("deviceMemory" in navigator) {
        info.memory = (navigator as any).deviceMemory
      }

      // Nombre de cœurs CPU (si disponible)
      if ("hardwareConcurrency" in navigator) {
        info.cores = navigator.hardwareConcurrency
      }

      // Informations de connexion (si disponible)
      if ("connection" in navigator) {
        info.connection = (navigator as any).connection
      }

      setDeviceInfo(info)

      // Informations batterie (si disponible)
      if ("getBattery" in navigator) {
        try {
          const battery = await (navigator as any).getBattery()
          setBatteryInfo({
            charging: battery.charging,
            level: Math.round(battery.level * 100),
            chargingTime: battery.chargingTime,
            dischargingTime: battery.dischargingTime,
          })
        } catch (error) {
          console.log("Battery API not available")
        }
      }
    }

    getDeviceInfo()
  }, [])

  const detectDeviceType = () => {
    if (!deviceInfo) return "unknown"

    const ua = deviceInfo.userAgent.toLowerCase()
    if (/android/.test(ua)) return "Android"
    if (/iphone|ipad|ipod/.test(ua)) return "iOS"
    if (/windows phone/.test(ua)) return "Windows Phone"
    if (/mobile/.test(ua)) return "Mobile"
    return "Desktop"
  }

  const detectBrowser = () => {
    if (!deviceInfo) return "unknown"

    const ua = deviceInfo.userAgent
    if (ua.includes("Chrome") && !ua.includes("Edg")) return "Chrome"
    if (ua.includes("Firefox")) return "Firefox"
    if (ua.includes("Safari") && !ua.includes("Chrome")) return "Safari"
    if (ua.includes("Edg")) return "Edge"
    return "Autre"
  }

  const getConnectionType = () => {
    if (!deviceInfo?.connection) return "Inconnue"

    const conn = deviceInfo.connection
    return conn.effectiveType || conn.type || "Inconnue"
  }

  const getConnectionSpeed = () => {
    if (!deviceInfo?.connection) return null

    const conn = deviceInfo.connection
    return conn.downlink ? `${conn.downlink} Mbps` : null
  }

  if (!deviceInfo) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Smartphone className="w-5 h-5" />
            Informations Appareil
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center p-8">
            <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Smartphone className="w-5 h-5" />
          Informations Appareil
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Type d'appareil et navigateur */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              {detectDeviceType().includes("Desktop") ? (
                <Monitor className="w-4 h-4 text-blue-600" />
              ) : (
                <Smartphone className="w-4 h-4 text-green-600" />
              )}
              <span className="font-medium">Type</span>
            </div>
            <Badge variant="outline">{detectDeviceType()}</Badge>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-purple-600" />
              <span className="font-medium">Navigateur</span>
            </div>
            <Badge variant="outline">{detectBrowser()}</Badge>
          </div>
        </div>

        {/* Écran */}
        <div className="space-y-2">
          <h4 className="font-medium flex items-center gap-2">
            <Monitor className="w-4 h-4" />
            Écran
          </h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              Résolution: {deviceInfo.screenWidth}×{deviceInfo.screenHeight}
            </div>
            <div>Ratio: {deviceInfo.pixelRatio}x</div>
            <div>Couleurs: {deviceInfo.colorDepth} bits</div>
            <div>Langue: {deviceInfo.language}</div>
          </div>
        </div>

        {/* Performance */}
        <div className="space-y-2">
          <h4 className="font-medium flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            Performance
          </h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {deviceInfo.cores && <div>CPU: {deviceInfo.cores} cœurs</div>}
            {deviceInfo.memory && (
              <div className="flex items-center gap-1">
                <HardDrive className="w-3 h-3" />
                RAM: {deviceInfo.memory} GB
              </div>
            )}
          </div>
        </div>

        {/* Connexion */}
        <div className="space-y-2">
          <h4 className="font-medium flex items-center gap-2">
            <Wifi className="w-4 h-4" />
            Connexion
          </h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              Statut:{" "}
              {deviceInfo.onLine ? (
                <Badge className="bg-green-100 text-green-800">En ligne</Badge>
              ) : (
                <Badge className="bg-red-100 text-red-800">Hors ligne</Badge>
              )}
            </div>
            <div>Type: {getConnectionType()}</div>
            {getConnectionSpeed() && <div>Vitesse: {getConnectionSpeed()}</div>}
          </div>
        </div>

        {/* Batterie */}
        {batteryInfo && (
          <div className="space-y-2">
            <h4 className="font-medium flex items-center gap-2">
              <Battery className="w-4 h-4" />
              Batterie
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>Niveau: {batteryInfo.level}%</div>
              <div>
                Statut:{" "}
                {batteryInfo.charging ? (
                  <Badge className="bg-green-100 text-green-800">En charge</Badge>
                ) : (
                  <Badge className="bg-yellow-100 text-yellow-800">Sur batterie</Badge>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Fuseau horaire */}
        <div className="space-y-2">
          <h4 className="font-medium">Localisation</h4>
          <div className="text-sm">Fuseau: {deviceInfo.timezone}</div>
        </div>

        {/* User Agent (collapsible) */}
        <details className="space-y-2">
          <summary className="font-medium cursor-pointer text-sm text-blue-600">User Agent (cliquer pour voir)</summary>
          <div className="text-xs bg-gray-50 p-2 rounded break-all">{deviceInfo.userAgent}</div>
        </details>
      </CardContent>
    </Card>
  )
}
