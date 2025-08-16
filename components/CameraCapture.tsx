"use client"

import { useEffect, useRef, useState } from "react"
import { Camera, X, RotateCcw, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { validateFrenchPlate } from "../utils/french-plate-validator"
import { validateSwissPlate } from "../utils/swiss-plate-validator"

interface CameraCaptureProps {
  system: "french" | "swiss"
  onResult: (result: any, plateText: string) => void
  onError: (error: string) => void
  onBack: () => void
}

export default function CameraCapture({ system, onResult, onError, onBack }: CameraCaptureProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [isCapturing, setIsCapturing] = useState(false)
  const [facingMode, setFacingMode] = useState<"user" | "environment">("environment")
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)

  useEffect(() => {
    startCamera()
    return () => {
      stopCamera()
    }
  }, [facingMode])

  const startCamera = async () => {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error("Caméra non supportée par ce navigateur")
      }

      const constraints = {
        video: {
          facingMode: facingMode,
          width: { ideal: 1280, max: 1920 },
          height: { ideal: 720, max: 1080 },
        },
      }

      const mediaStream = await navigator.mediaDevices.getUserMedia(constraints)
      setStream(mediaStream)
      setHasPermission(true)

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream
        videoRef.current.play()
      }
    } catch (err: any) {
      console.error("Erreur caméra:", err)
      setHasPermission(false)

      let errorMessage = "Impossible d'accéder à la caméra"

      if (err.name === "NotAllowedError") {
        errorMessage = "Accès à la caméra refusé. Veuillez autoriser l'accès dans les paramètres du navigateur."
      } else if (err.name === "NotFoundError") {
        errorMessage = "Aucune caméra trouvée sur cet appareil."
      } else if (err.name === "NotSupportedError") {
        errorMessage = "Caméra non supportée par ce navigateur."
      } else if (err.name === "OverconstrainedError") {
        errorMessage = "Impossible d'utiliser la caméra avec les paramètres demandés."
      }

      onError(errorMessage)
    }
  }

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop())
      setStream(null)
    }
  }

  const captureAndAnalyze = async () => {
    if (!videoRef.current || !canvasRef.current || !stream) return

    setIsCapturing(true)

    try {
      const video = videoRef.current
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")

      if (!ctx) {
        throw new Error("Impossible de créer le contexte canvas")
      }

      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

      // Simuler l'analyse OCR (2 secondes)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      let plateText: string
      let validationResult: any

      if (system === "french") {
        const frenchExamples = [
          "5 CD 1234", // Allemagne
          "6 CMD 12", // États-Unis (Ambassadeur)
          "26 CD 5678", // Chine
          "45 C 123.75", // Grande-Bretagne (Consulat)
          "32 CD 9876", // France
          "107 CD 4567", // Italie
          "1 CMD 01", // Vatican (Ambassadeur)
          "78 C 456.12", // Espagne (Consulat)
        ]
        plateText = frenchExamples[Math.floor(Math.random() * frenchExamples.length)]
        validationResult = validateFrenchPlate(plateText)
      } else {
        const swissExamples = [
          "001 123", // Allemagne
          "032 456", // France
          "107 789", // Italie
          "006 234", // États-Unis
          "026 567", // Chine
          "076 890", // Espagne
          "039 345", // Grande-Bretagne
          "015 678", // Autriche
        ]
        plateText = swissExamples[Math.floor(Math.random() * swissExamples.length)]
        validationResult = validateSwissPlate(plateText)
      }

      if (validationResult && validationResult.isValid && validationResult.match) {
        onResult(validationResult.match, plateText)
      } else {
        onError("Aucune plaque diplomatique détectée sur l'image")
      }
    } catch (error) {
      console.error("Erreur capture:", error)
      onError("Erreur lors de l'analyse de l'image")
    } finally {
      setIsCapturing(false)
    }
  }

  const switchCamera = () => {
    setFacingMode((prev) => (prev === "user" ? "environment" : "user"))
  }

  if (hasPermission === false) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={onBack}>
                  <X className="w-4 h-4" />
                </Button>
                <h2 className="font-semibold">Erreur caméra</h2>
              </div>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-red-600 mb-4">
                    <Camera className="w-12 h-12 mx-auto mb-2" />
                    <h3 className="font-semibold">Accès caméra requis</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Pour scanner une plaque, nous avons besoin d'accéder à votre caméra.
                  </p>
                  <div className="space-y-2 text-sm text-left bg-muted/50 p-4 rounded-lg">
                    <p>
                      <strong>Pour autoriser l'accès :</strong>
                    </p>
                    <p>1. Cliquez sur l'icône de caméra dans la barre d'adresse</p>
                    <p>2. Sélectionnez "Autoriser"</p>
                    <p>3. Rechargez la page</p>
                  </div>
                  <Button onClick={startCamera} className="mt-4">
                    Réessayer
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Button variant="ghost" size="sm" onClick={onBack}>
                <X className="w-4 h-4 mr-2" />
                Fermer
              </Button>
              <h2 className="font-semibold">Scanner {system === "french" ? "français" : "suisse"}</h2>
              <Button variant="ghost" size="sm" onClick={switchCamera} disabled={!stream}>
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>

            <Card>
              <CardContent className="p-4">
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                  {stream ? (
                    <>
                      <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className={`border-2 ${
                            system === "french" ? "border-green-400" : "border-red-400"
                          } rounded-lg bg-transparent`}
                          style={{ width: "80%", height: "40%" }}
                        >
                          <div className="w-full h-full border border-white/30 rounded-lg flex items-center justify-center">
                            <span className="text-white text-sm bg-black/70 px-3 py-1 rounded">
                              Positionnez la plaque ici
                            </span>
                          </div>

                          <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-white"></div>
                          <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-white"></div>
                          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-white"></div>
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-white"></div>
                        </div>
                      </div>

                      {isCapturing && (
                        <div className="absolute inset-0 bg-white/20 flex items-center justify-center">
                          <div className="bg-black/80 text-white px-6 py-3 rounded-lg flex items-center gap-3">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Analyse en cours...</span>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-white text-center">
                        <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2" />
                        <p>Chargement de la caméra...</p>
                      </div>
                    </div>
                  )}
                </div>

                <canvas ref={canvasRef} className="hidden" />

                <div className="mt-4 text-center">
                  <Button
                    onClick={captureAndAnalyze}
                    disabled={isCapturing || !stream}
                    size="lg"
                    className={`${
                      system === "french" ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"
                    } min-w-[200px]`}
                  >
                    {isCapturing ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Analyse...
                      </>
                    ) : (
                      <>
                        <Camera className="w-5 h-5 mr-2" />
                        Capturer
                      </>
                    )}
                  </Button>
                </div>

                <div className="mt-4 text-xs text-muted-foreground text-center space-y-1">
                  <p>• Assurez-vous que la plaque est bien éclairée</p>
                  <p>• Positionnez la plaque dans le cadre {system === "french" ? "vert" : "rouge"}</p>
                  <p>• Tenez l'appareil stable pendant la capture</p>
                  <p>• La plaque doit être nette et lisible</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
