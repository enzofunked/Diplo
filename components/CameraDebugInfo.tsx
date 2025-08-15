"use client"

import { useState } from "react"
import { Eye, EyeOff, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CameraDebugInfoProps {
  lastCapture?: string
  processedImage?: string
  detectionStatus: string
  ocrReady: boolean
  isActive: boolean
}

export default function CameraDebugInfo({
  lastCapture,
  processedImage,
  detectionStatus,
  ocrReady,
  isActive,
}: CameraDebugInfoProps) {
  const [showDebug, setShowDebug] = useState(false)

  if (!showDebug) {
    return (
      <Button variant="outline" size="sm" onClick={() => setShowDebug(true)} className="w-full bg-transparent">
        <Eye className="w-3 h-3 mr-1" />
        Afficher debug
      </Button>
    )
  }

  return (
    <Card className="bg-muted/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm flex items-center justify-between">
          <span className="flex items-center gap-1">
            <Info className="w-3 h-3" />
            Informations de debug
          </span>
          <Button variant="ghost" size="sm" onClick={() => setShowDebug(false)}>
            <EyeOff className="w-3 h-3" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Statut */}
        <div className="space-y-1">
          <p className="text-xs font-medium">Statut:</p>
          <div className="flex gap-1 flex-wrap">
            <Badge variant={ocrReady ? "default" : "secondary"}>OCR: {ocrReady ? "✓" : "⏳"}</Badge>
            <Badge variant={isActive ? "default" : "secondary"}>Caméra: {isActive ? "✓" : "✗"}</Badge>
          </div>
          {detectionStatus && (
            <p className="text-xs text-muted-foreground bg-yellow-50 p-2 rounded">{detectionStatus}</p>
          )}
        </div>

        {/* Images */}
        {lastCapture && (
          <div className="space-y-2">
            <p className="text-xs font-medium">Dernière capture:</p>
            <img
              src={lastCapture || "/placeholder.svg"}
              alt="Capture"
              className="w-full h-16 object-cover rounded border"
            />
          </div>
        )}

        {processedImage && (
          <div className="space-y-2">
            <p className="text-xs font-medium">Zones vertes détectées:</p>
            <img
              src={processedImage || "/placeholder.svg"}
              alt="Zones détectées"
              className="w-full h-16 object-cover rounded border"
            />
          </div>
        )}

        {/* Conseils */}
        <div className="text-xs text-muted-foreground bg-blue-50 p-2 rounded">
          <p className="font-medium text-blue-800 mb-1">💡 Conseils:</p>
          <ul className="space-y-1 text-blue-700">
            <li>• Plaque bien éclairée</li>
            <li>• Distance 20-50cm</li>
            <li>• Éviter les reflets</li>
            <li>• Tenir stable</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
