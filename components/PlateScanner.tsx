"use client"

import { useState, useRef, useEffect } from "react"
import { Camera, X, RotateCcw, Star, Eye, Keyboard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { validateDiplomaticPlate } from "../utils/plateValidator"
import type { FrenchPlateMatch } from "../utils/french-plate-validator"
import type { SwissPlateMatch } from "../utils/swiss-plate-validator"
import { useFavorites } from "../hooks/useFavorites"

interface PlateScannerProps {
  onResult: (plateText: string, result: FrenchPlateMatch | SwissPlateMatch) => void
  onClose: () => void
  system: "french" | "swiss"
}

export default function PlateScanner({ onResult, onClose, system }: PlateScannerProps) {
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [isCapturing, setIsCapturing] = useState(false)
  const [capturedImage, setCapturedImage] = useState<string | null>(null)
  const [ocrResult, setOcrResult] = useState<string>("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [showManualInput, setShowManualInput] = useState(false)
  const [manualInput, setManualInput] = useState("")
  const [scanResult, setScanResult] = useState<FrenchPlateMatch | SwissPlateMatch | null>(null)
  const [error, setError] = useState<string>("")

  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { addToFavorites } = useFavorites()

  useEffect(() => {
    startCamera()
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop())
      }
    }
  }, [])

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment", // Caméra arrière
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      })
      setStream(mediaStream)
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream
      }
      setError("")
    } catch (err) {
      console.error("Erreur accès caméra:", err)
      setError("Impossible d'accéder à la caméra. Utilisez la saisie manuelle.")
      setShowManualInput(true)
    }
  }

  const captureImage = () => {
    if (!videoRef.current || !canvasRef.current) return

    setIsCapturing(true)
    const video = videoRef.current
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")

    if (context) {
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      context.drawImage(video, 0, 0)

      const imageData = canvas.toDataURL("image/jpeg", 0.8)
      setCapturedImage(imageData)
      processImage(imageData)
    }
  }

  const processImage = async (imageData: string) => {
    setIsProcessing(true)

    try {
      // Simulation OCR - En production, utiliser Tesseract.js
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Exemples de plaques pour simulation
      const frenchExamples = ["6 CMD 1", "U 401 CD 123", "5 CD 234", "26 CD 5678", "45 C 123"]
      const swissExamples = ["CD BE 9 • 1", "AT GE 39 • 107", "CC ZH 12 • 45", "CD VD 8 • 23"]

      const examples = system === "french" ? frenchExamples : swissExamples
      const randomResult = examples[Math.floor(Math.random() * examples.length)]

      setOcrResult(randomResult)
      validatePlate(randomResult)
    } catch (error) {
      console.error("Erreur OCR:", error)
      setError("Erreur lors de la lecture. Essayez la saisie manuelle.")
      setShowManualInput(true)
    } finally {
      setIsProcessing(false)
      setIsCapturing(false)
    }
  }

  const validatePlate = (plateText: string) => {
    const result = validateDiplomaticPlate(plateText, system)

    if (result) {
      setScanResult(result)
      setError("")
      // Remplir automatiquement et déclencher la recherche
      setTimeout(() => {
        onResult(plateText, result as any)
      }, 1000)
    } else {
      setError(`Plaque "${plateText}" non reconnue. Vérifiez le format.`)
      setManualInput(plateText)
      setShowManualInput(true)
    }
  }

  const handleManualSubmit = () => {
    if (manualInput.trim()) {
      setOcrResult(manualInput.trim())
      validatePlate(manualInput.trim())
    }
  }

  const handleAddToFavorites = () => {
    if (scanResult && ocrResult) {
      addToFavorites(ocrResult, scanResult, system)
      alert("Ajouté aux favoris !")
    }
  }

  const handleViewDetails = () => {
    if (scanResult && ocrResult) {
      onResult(ocrResult, scanResult)
    }
  }

  const resetScan = () => {
    setCapturedImage(null)
    setOcrResult("")
    setScanResult(null)
    setError("")
    setShowManualInput(false)
    setManualInput("")
    setIsCapturing(false)
    setIsProcessing(false)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold">Scanner une plaque</h2>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="p-4 space-y-4">
          {/* Instructions */}
          {!capturedImage && !scanResult && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <h3 className="font-medium text-blue-900 mb-2">Instructions :</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Placez la plaque au centre du cadre</li>
                <li>• Assurez-vous d'avoir une bonne lumière</li>
                <li>• Tenez le téléphone stable</li>
                <li>• La plaque doit être bien lisible</li>
              </ul>
            </div>
          )}

          {/* Caméra ou Image capturée */}
          {!error && !showManualInput && (
            <div className="relative bg-black rounded-lg overflow-hidden">
              {!capturedImage ? (
                <>
                  <video ref={videoRef} autoPlay playsInline muted className="w-full h-64 object-cover" />
                  {/* Overlay de visée */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="border-2 border-white border-dashed w-3/4 h-32 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                        Placez la plaque ici
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <img
                  src={capturedImage || "/placeholder.svg"}
                  alt="Plaque capturée"
                  className="w-full h-64 object-cover"
                />
              )}
            </div>
          )}

          {/* Canvas caché pour la capture */}
          <canvas ref={canvasRef} className="hidden" />

          {/* Boutons de capture */}
          {!capturedImage && !error && !showManualInput && (
            <div className="flex gap-2">
              <Button
                onClick={captureImage}
                disabled={isCapturing || !stream}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                <Camera className="w-4 h-4 mr-2" />
                {isCapturing ? "Capture..." : "Capturer"}
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowManualInput(true)}
                className="border-blue-200 hover:bg-blue-50"
              >
                <Keyboard className="w-4 h-4" />
              </Button>
            </div>
          )}

          {/* Traitement OCR */}
          {isProcessing && (
            <div className="text-center py-4">
              <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-2"></div>
              <p className="text-sm text-gray-600">Lecture de la plaque en cours...</p>
            </div>
          )}

          {/* Résultat OCR */}
          {ocrResult && !isProcessing && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <h3 className="font-medium text-gray-900 mb-2">Texte détecté :</h3>
              <p className="text-lg font-mono bg-white border rounded px-2 py-1">{ocrResult}</p>
            </div>
          )}

          {/* Saisie manuelle */}
          {showManualInput && (
            <div className="space-y-3">
              <h3 className="font-medium text-gray-900">Saisie manuelle :</h3>
              <div className="flex gap-2">
                <Input
                  value={manualInput}
                  onChange={(e) => setManualInput(e.target.value)}
                  placeholder={system === "french" ? "Ex: 6 CMD 1" : "Ex: CD BE 9 • 1"}
                  className="flex-1"
                  onKeyPress={(e) => e.key === "Enter" && handleManualSubmit()}
                />
                <Button onClick={handleManualSubmit} className="bg-blue-600 hover:bg-blue-700">
                  Valider
                </Button>
              </div>
            </div>
          )}

          {/* Résultat de validation */}
          {scanResult && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-medium text-green-900 mb-3">✅ Plaque reconnue !</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Pays :</span>
                  <span className="font-medium">{scanResult.country?.countryName || scanResult.country?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Code :</span>
                  <span className="font-medium">{scanResult.country?.code}</span>
                </div>
                {(scanResult as any).canton && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Canton :</span>
                    <span className="font-medium">{(scanResult as any).canton}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Type :</span>
                  <span className="font-medium">{scanResult.type}</span>
                </div>
              </div>
            </div>
          )}

          {/* Erreur */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-red-800 text-sm">{error}</p>
            </div>
          )}

          {/* Boutons d'action */}
          <div className="flex gap-2 pt-2">
            {scanResult ? (
              <>
                <Button onClick={handleViewDetails} className="flex-1 bg-blue-600 hover:bg-blue-700">
                  <Eye className="w-4 h-4 mr-2" />
                  Voir détails
                </Button>
                <Button
                  variant="outline"
                  onClick={handleAddToFavorites}
                  className="border-yellow-300 hover:bg-yellow-50 bg-transparent"
                >
                  <Star className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={resetScan}
                  className="border-gray-300 hover:bg-gray-50 bg-transparent"
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </>
            ) : (
              <Button
                variant="outline"
                onClick={resetScan}
                className="w-full border-gray-300 hover:bg-gray-50 bg-transparent"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Recommencer
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
