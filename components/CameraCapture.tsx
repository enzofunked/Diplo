"use client"

import { useState, useEffect } from "react"
import { Camera, Square, RotateCcw, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCamera } from "../hooks/useCamera"
import { ocrService } from "../utils/ocr-service"
import { detectGreenPlates, preprocessImageForOCR } from "../utils/image-processing"
import CameraDebugInfo from "./CameraDebugInfo"

interface CameraCaptureProps {
  onTextDetected: (text: string, confidence: number) => void
  onError: (error: string) => void
  isProcessing: boolean
}

export default function CameraCapture({ onTextDetected, onError, isProcessing }: CameraCaptureProps) {
  const { isSupported, hasPermission, isActive, error, videoRef, canvasRef, startCamera, stopCamera, captureImage } =
    useCamera()

  const [isInitializingOCR, setIsInitializingOCR] = useState(false)
  const [ocrReady, setOcrReady] = useState(false)
  const [lastCapture, setLastCapture] = useState<string | null>(null)
  const [detectionStatus, setDetectionStatus] = useState<string>("")
  const [processedImage, setProcessedImage] = useState<string>("")

  // Initialiser l'OCR au montage
  useEffect(() => {
    const initOCR = async () => {
      setIsInitializingOCR(true)
      try {
        await ocrService.initialize()
        setOcrReady(true)
        setDetectionStatus("OCR prêt")
      } catch (error) {
        console.error("Erreur initialisation OCR:", error)
        onError("Erreur d'initialisation de la reconnaissance de texte")
      } finally {
        setIsInitializingOCR(false)
      }
    }

    initOCR()

    return () => {
      ocrService.terminate()
    }
  }, [onError])

  const handleStartCamera = async () => {
    const success = await startCamera()
    if (success) {
      setDetectionStatus("Caméra active - Positionnez une plaque verte")
    }
  }

  const handleCapture = async () => {
    if (!ocrReady) {
      onError("OCR non initialisé")
      return
    }

    const imageData = captureImage()
    if (!imageData) {
      onError("Impossible de capturer l'image")
      return
    }

    setLastCapture(imageData)
    setDetectionStatus("Analyse de l'image...")

    try {
      // 1. Détecter les zones vertes (plaques diplomatiques)
      const colorDetection = await detectGreenPlates(imageData)
      setProcessedImage(colorDetection.processedImage || "")

      console.log("🔍 Résultat détection couleur:", colorDetection)

      let regionsToProcess: Array<{ x: number; y: number; width: number; height: number }> = []

      if (colorDetection.hasGreenPlate && colorDetection.greenRegions.length > 0) {
        setDetectionStatus(`${colorDetection.greenRegions.length} zone(s) verte(s) détectée(s)`)
        regionsToProcess = colorDetection.greenRegions
      } else {
        // FALLBACK: Si aucune zone verte détectée, analyser l'image entière
        setDetectionStatus("Aucune zone verte spécifique - analyse complète")
        regionsToProcess = [
          {
            x: 0,
            y: Math.floor(imageData.length * 0.3), // Zone centrale
            width: Math.floor(imageData.length * 0.8),
            height: Math.floor(imageData.length * 0.4),
          },
        ]
        console.log("⚠️ Fallback: analyse de l'image complète")
      }

      // 2. Traiter les régions (détectées ou fallback)
      let bestResult = { text: "", confidence: 0 }

      for (const region of regionsToProcess) {
        const regionIndex = regionsToProcess.indexOf(region) + 1
        setDetectionStatus(`Analyse région ${regionIndex}/${regionsToProcess.length}...`)

        try {
          // Préprocesser l'image pour l'OCR
          const processedImage = await preprocessImageForOCR(imageData, region)

          // Reconnaissance OCR
          const ocrResult = await ocrService.recognizeText(processedImage)

          console.log(`📝 OCR région ${regionIndex}:`, {
            text: ocrResult.text,
            confidence: ocrResult.confidence,
          })

          if (ocrResult.confidence > bestResult.confidence) {
            bestResult = ocrResult
          }
        } catch (regionError) {
          console.warn(`⚠️ Erreur région ${regionIndex}:`, regionError)
          // Continuer avec les autres régions
        }
      }

      // 3. Évaluer le résultat
      if (bestResult.text && bestResult.confidence > 0.2) {
        // Seuil réduit de 0.3 à 0.2
        setDetectionStatus(`Texte détecté: ${bestResult.text} (${Math.round(bestResult.confidence * 100)}%)`)
        onTextDetected(bestResult.text, bestResult.confidence)
      } else {
        setDetectionStatus("Texte non lisible - essayez de vous rapprocher")

        // Donner des conseils spécifiques
        const advice = !colorDetection.hasGreenPlate
          ? "Conseil: Assurez-vous que la plaque est bien verte et visible"
          : "Conseil: Rapprochez-vous ou améliorez l'éclairage"

        onError(`Texte non lisible. ${advice}`)
      }
    } catch (error) {
      console.error("❌ Erreur lors de l'analyse:", error)
      setDetectionStatus("Erreur d'analyse")
      onError("Erreur lors de l'analyse de l'image. Réessayez.")
    }
  }

  if (!isSupported) {
    return (
      <Card className="bg-red-50 border-red-200">
        <CardContent className="p-6 text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="font-medium text-red-800 mb-2">Caméra non supportée</h3>
          <p className="text-sm text-red-600">Votre navigateur ne supporte pas l'accès à la caméra.</p>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="bg-red-50 border-red-200">
        <CardContent className="p-6 text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="font-medium text-red-800 mb-2">Erreur caméra</h3>
          <p className="text-sm text-red-600 mb-4">{error}</p>
          <Button onClick={handleStartCamera} variant="outline" size="sm">
            <RotateCcw className="w-4 h-4 mr-2" />
            Réessayer
          </Button>
        </CardContent>
      </Card>
    )
  }

  if (!isActive) {
    return (
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6 text-center">
          <Camera className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h3 className="font-medium text-blue-800 mb-2">Caméra prête</h3>
          <p className="text-sm text-blue-600 mb-4">
            {isInitializingOCR ? "Initialisation de la reconnaissance..." : "Appuyez pour activer la caméra"}
          </p>

          <div className="space-y-2">
            <Button
              onClick={handleStartCamera}
              disabled={isInitializingOCR || !ocrReady}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              {isInitializingOCR ? (
                <>
                  <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                  Initialisation...
                </>
              ) : (
                <>
                  <Camera className="w-4 h-4 mr-2" />
                  Activer la caméra
                </>
              )}
            </Button>

            <div className="flex items-center justify-center gap-2">
              {ocrReady ? (
                <Badge className="bg-green-100 text-green-800">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  OCR prêt
                </Badge>
              ) : (
                <Badge className="bg-yellow-100 text-yellow-800">
                  <div className="animate-spin w-3 h-3 border border-yellow-600 border-t-transparent rounded-full mr-1" />
                  OCR en cours...
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {/* Flux vidéo */}
      <Card className="relative overflow-hidden">
        <CardContent className="p-0">
          <div className="relative">
            <video
              ref={videoRef}
              className="w-full h-64 object-cover bg-black"
              playsInline
              muted
              style={{ transform: "scaleX(-1)" }} // Effet miroir
            />

            {/* Overlay de guidage */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="border-2 border-green-400 border-dashed rounded-lg w-48 h-20 flex items-center justify-center bg-green-400/10">
                <span className="text-green-600 text-xs font-medium">Plaque verte ici</span>
              </div>
            </div>

            {/* Statut de détection */}
            {detectionStatus && (
              <div className="absolute bottom-2 left-2 right-2">
                <Badge className="bg-black/70 text-white text-xs w-full justify-center py-1">{detectionStatus}</Badge>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Contrôles */}
      <div className="flex gap-3">
        <Button
          onClick={handleCapture}
          disabled={!ocrReady || isProcessing}
          className="flex-1 bg-green-600 hover:bg-green-700"
          size="lg"
        >
          {isProcessing ? (
            <>
              <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />
              Analyse...
            </>
          ) : (
            <>
              <Square className="w-4 h-4 mr-2" />
              Capturer et analyser
            </>
          )}
        </Button>

        <Button onClick={stopCamera} variant="outline" size="lg">
          <Camera className="w-4 h-4" />
        </Button>
      </div>

      {/* Debug Info */}
      <CameraDebugInfo
        lastCapture={lastCapture}
        processedImage={processedImage}
        detectionStatus={detectionStatus}
        ocrReady={ocrReady}
        isActive={isActive}
      />

      {/* Dernière capture (debug) */}
      {lastCapture && (
        <Card className="bg-muted/50">
          <CardContent className="p-3">
            <p className="text-xs text-muted-foreground mb-2">Dernière capture :</p>
            <img
              src={lastCapture || "/placeholder.svg"}
              alt="Dernière capture"
              className="w-full h-20 object-cover rounded"
            />
          </CardContent>
        </Card>
      )}

      {/* Canvas caché pour les captures */}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  )
}
