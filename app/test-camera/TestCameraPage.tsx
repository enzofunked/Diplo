"use client"

import { useState, useEffect, useRef } from "react"
import { Camera, Smartphone, CheckCircle, XCircle, AlertCircle, ArrowLeft, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"

interface TestResult {
  name: string
  status: "success" | "error" | "warning"
  message: string
  details?: any
  timestamp: Date
}

export default function TestCameraPage() {
  const [testResults, setTestResults] = useState<TestResult[]>([])
  const [isRunning, setIsRunning] = useState(false)
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null)
  const [capturedImage, setCapturedImage] = useState<string>("")
  const [deviceInfo, setDeviceInfo] = useState<any>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    collectDeviceInfo()
    return () => {
      if (cameraStream) {
        cameraStream.getTracks().forEach((track) => track.stop())
      }
    }
  }, [cameraStream])

  const collectDeviceInfo = () => {
    const info = {
      userAgent: navigator.userAgent,
      isMobile: /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      screen: {
        width: window.screen.width,
        height: window.screen.height,
        pixelRatio: window.devicePixelRatio,
      },
      hasMediaDevices: !!navigator.mediaDevices,
      hasGetUserMedia: !!navigator.mediaDevices?.getUserMedia,
      language: navigator.language,
      platform: navigator.platform,
      onLine: navigator.onLine,
    }
    setDeviceInfo(info)

    addTestResult(
      "Détection Appareil",
      info.isMobile ? "success" : "warning",
      info.isMobile ? "Appareil mobile détecté" : "Appareil desktop détecté",
      info,
    )
  }

  const addTestResult = (name: string, status: TestResult["status"], message: string, details?: any) => {
    const result: TestResult = {
      name,
      status,
      message,
      details,
      timestamp: new Date(),
    }
    setTestResults((prev) => [...prev, result])
  }

  const testCameraAccess = async () => {
    setIsRunning(true)

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        addTestResult("Accès Caméra", "error", "getUserMedia non supporté", null)
        return
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: "environment" },
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      })

      setCameraStream(stream)

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play()
      }

      const videoTrack = stream.getVideoTracks()[0]
      const settings = videoTrack.getSettings()

      addTestResult("Accès Caméra", "success", "Caméra accessible avec succès", {
        label: videoTrack.label,
        facingMode: settings.facingMode,
        width: settings.width,
        height: settings.height,
        frameRate: settings.frameRate,
      })
    } catch (error: any) {
      addTestResult("Accès Caméra", "error", `Erreur d'accès à la caméra: ${error.message}`, {
        error: error.message,
        code: error.name,
      })
    } finally {
      setIsRunning(false)
    }
  }

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return

    const video = videoRef.current
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    if (!ctx) return

    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    ctx.drawImage(video, 0, 0)

    const imageData = canvas.toDataURL("image/jpeg", 0.8)
    setCapturedImage(imageData)

    addTestResult("Capture Photo", "success", `Photo capturée ${canvas.width}x${canvas.height}`, {
      width: canvas.width,
      height: canvas.height,
      size: imageData.length,
    })
  }

  const testOCR = async () => {
    if (!capturedImage) {
      addTestResult("Test OCR", "error", "Aucune image à analyser", null)
      return
    }

    setIsRunning(true)

    try {
      addTestResult("Test OCR", "warning", "Chargement de Tesseract.js...", null)

      const { createWorker } = await import("tesseract.js")
      const worker = await createWorker("fra")

      const startTime = Date.now()
      const {
        data: { text, confidence },
      } = await worker.recognize(capturedImage)
      const processingTime = Date.now() - startTime

      await worker.terminate()

      addTestResult(
        "Test OCR",
        confidence > 50 ? "success" : "warning",
        `Texte reconnu: "${text.trim()}" (${Math.round(confidence)}% confiance)`,
        {
          text: text.trim(),
          confidence: Math.round(confidence),
          processingTime,
        },
      )
    } catch (error: any) {
      addTestResult("Test OCR", "error", `Erreur OCR: ${error.message}`, { error: error.message })
    } finally {
      setIsRunning(false)
    }
  }

  const stopCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach((track) => track.stop())
      setCameraStream(null)
    }
  }

  const downloadResults = () => {
    const results = {
      timestamp: new Date().toISOString(),
      deviceInfo,
      testResults,
      userAgent: navigator.userAgent,
    }

    const blob = new Blob([JSON.stringify(results, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `camera-test-${Date.now()}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const getStatusIcon = (status: TestResult["status"]) => {
    switch (status) {
      case "success":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "error":
        return <XCircle className="w-4 h-4 text-red-600" />
      case "warning":
        return <AlertCircle className="w-4 h-4 text-yellow-600" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-4xl mx-auto p-4">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-2">
                <Camera className="w-6 h-6" />
                Test Caméra Mobile
              </h1>
              <p className="text-gray-600">Diagnostic de la reconnaissance par caméra</p>
            </div>
          </div>
        </div>

        {/* Device Info */}
        {deviceInfo && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                Informations Appareil
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Type:</span>{" "}
                  <Badge variant={deviceInfo.isMobile ? "default" : "secondary"}>
                    {deviceInfo.isMobile ? "Mobile" : "Desktop"}
                  </Badge>
                </div>
                <div>
                  <span className="font-medium">Écran:</span> {deviceInfo.screen.width}×{deviceInfo.screen.height}
                </div>
                <div>
                  <span className="font-medium">MediaDevices:</span>{" "}
                  <Badge variant={deviceInfo.hasMediaDevices ? "default" : "destructive"}>
                    {deviceInfo.hasMediaDevices ? "Supporté" : "Non supporté"}
                  </Badge>
                </div>
                <div>
                  <span className="font-medium">getUserMedia:</span>{" "}
                  <Badge variant={deviceInfo.hasGetUserMedia ? "default" : "destructive"}>
                    {deviceInfo.hasGetUserMedia ? "Supporté" : "Non supporté"}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Test Controls */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Tests de Compatibilité</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Button onClick={testCameraAccess} disabled={isRunning} className="w-full">
                <Camera className="w-4 h-4 mr-2" />
                {isRunning ? "Test en cours..." : "Tester Caméra"}
              </Button>

              <Button
                onClick={capturePhoto}
                disabled={!cameraStream}
                variant="outline"
                className="w-full bg-transparent"
              >
                Capturer Photo
              </Button>

              <Button
                onClick={testOCR}
                disabled={!capturedImage || isRunning}
                variant="outline"
                className="w-full bg-transparent"
              >
                {isRunning ? "OCR en cours..." : "Tester OCR"}
              </Button>
            </div>

            {cameraStream && (
              <div className="flex gap-2">
                <Button onClick={stopCamera} variant="destructive" size="sm">
                  Arrêter Caméra
                </Button>
                {testResults.length > 0 && (
                  <Button onClick={downloadResults} variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger Résultats
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Camera Preview */}
        {cameraStream && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Prévisualisation Caméra</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative bg-black rounded-lg overflow-hidden">
                <video ref={videoRef} autoPlay playsInline muted className="w-full aspect-video object-cover" />
                <canvas ref={canvasRef} className="hidden" />

                {/* Overlay guide */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="border-2 border-white border-dashed rounded-lg w-80 h-20 flex items-center justify-center bg-black/20">
                    <span className="text-white text-sm">Placez une plaque ici</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Captured Image */}
        {capturedImage && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Image Capturée</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={capturedImage || "/placeholder.svg"}
                alt="Photo capturée"
                className="w-full max-w-md mx-auto rounded-lg border"
              />
            </CardContent>
          </Card>
        )}

        {/* Test Results */}
        {testResults.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Résultats des Tests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {testResults.map((result, index) => (
                  <Alert key={index} className="border-l-4 border-l-current">
                    <div className="flex items-start gap-3">
                      {getStatusIcon(result.status)}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium">{result.name}</span>
                          <span className="text-xs text-gray-500">{result.timestamp.toLocaleTimeString()}</span>
                        </div>
                        <AlertDescription>{result.message}</AlertDescription>
                        {result.details && (
                          <details className="mt-2">
                            <summary className="text-xs cursor-pointer text-blue-600 hover:text-blue-800">
                              Voir les détails
                            </summary>
                            <pre className="text-xs mt-2 p-2 bg-gray-100 rounded overflow-auto">
                              {JSON.stringify(result.details, null, 2)}
                            </pre>
                          </details>
                        )}
                      </div>
                    </div>
                  </Alert>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Instructions */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p>
                <strong>1. Tester Caméra:</strong> Vérifiez l'accès à la caméra de votre appareil
              </p>
              <p>
                <strong>2. Capturer Photo:</strong> Prenez une photo d'une plaque diplomatique
              </p>
              <p>
                <strong>3. Tester OCR:</strong> Testez la reconnaissance de texte sur l'image capturée
              </p>
              <p>
                <strong>4. Analyser:</strong> Consultez les résultats pour identifier les problèmes
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
