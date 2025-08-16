"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Camera, Zap } from "lucide-react"

interface CameraDebugInfoProps {
  lastCapture: string | null
  processedImage: string
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
  // Ne pas afficher en production
  if (process.env.NODE_ENV === "production") {
    return null
  }

  return (
    <Card className="bg-gray-50 border-gray-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-gray-700 flex items-center gap-2">
          <Eye className="w-4 h-4" />
          Debug Info
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 space-y-3">
        {/* Status */}
        <div className="flex flex-wrap gap-2">
          <Badge variant={isActive ? "default" : "secondary"} className="text-xs">
            <Camera className="w-3 h-3 mr-1" />
            {isActive ? "Caméra active" : "Caméra inactive"}
          </Badge>
          <Badge variant={ocrReady ? "default" : "secondary"} className="text-xs">
            <Zap className="w-3 h-3 mr-1" />
            {ocrReady ? "OCR prêt" : "OCR non prêt"}
          </Badge>
        </div>

        {/* Detection Status */}
        {detectionStatus && (
          <div>
            <p className="text-xs font-medium text-gray-600 mb-1">Statut de détection :</p>
            <p className="text-xs text-gray-500 bg-white p-2 rounded border">{detectionStatus}</p>
          </div>
        )}

        {/* Images */}
        <div className="grid grid-cols-2 gap-2">
          {lastCapture && (
            <div>
              <p className="text-xs font-medium text-gray-600 mb-1">Capture originale :</p>
              <img
                src={lastCapture || "/placeholder.svg"}
                alt="Capture originale"
                className="w-full h-16 object-cover rounded border"
              />
            </div>
          )}

          {processedImage && (
            <div>
              <p className="text-xs font-medium text-gray-600 mb-1">Image traitée :</p>
              <img
                src={processedImage || "/placeholder.svg"}
                alt="Image traitée"
                className="w-full h-16 object-cover rounded border"
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
