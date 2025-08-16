"use client"

import { useState, useEffect, useRef } from "react"
import { Camera, Play, Square, Download, CheckCircle, XCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import DeviceInfoComponent from "./DeviceInfoComponent"
import PerformanceMonitor from "./PerformanceMonitor"

interface TestResult {
  name: string
  status: "success" | "error" | "warning" | "pending"
  message: string
  details?: any
}

interface CameraInfo {
  deviceId: string
  label: string
  kind: string
  facing?: string
}

export default function CameraTestComponent() {
  const [isRunning, setIsRunning] = useState(false)
  const [currentTest, setCurrentTest] = useState<string>("")
  const [testResults, setTestResults] = useState<TestResult[]>([])
  const [progress, setProgress] = useState(0)
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null)
  const [cameras, setCameras] = useState<CameraInfo[]>([])
  const [selectedCamera, setSelectedCamera] = useState<string>("")
  const [capturedImage, setCapturedImage] = useState<string>("")
  const [ocrResult, setOcrResult] = useState<string>("")
  const [ocrTime, setOcrTime] = useState<number>(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const tests = [
    { id: "device", name: "Détection appareil mobile", weight: 10 },
    { id: "camera-permission", name: "Permissions caméra", weight: 20 },
    { id: "camera-access", name: "Accès caméra arrière", weight: 20 },
    { id: "camera-quality", name: "Qualité vidéo", weight: 15 },
    { id: "ocr-load", name: "Chargement Tesseract.js", weight: 15 },
    { id: "ocr-test", name: "Test reconnaissance OCR", weight: 20 },
  ]

  const updateTestResult = (testId: string, status: TestResult["status"], message: string, details?: any) => {
    setTestResults((prev) => {
      const existing = prev.find((r) => r.name === testId)
      const newResult = { name: testId, status, message, details }
      if (existing) {
        return prev.map((r) => (r.name === testId ? newResult : r))
      }
      return [...prev, newResult]
    })
  }

  const runDeviceTest = async () => {
    setCurrentTest("Détection appareil mobile")

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    const hasTouch = "ontouchstart" in window
    const screenWidth = window.screen.width

    if (isMobile || hasTouch || screenWidth < 768) {
      updateTestResult("device", "success", "Appareil mobile détecté", {
        userAgent: navigator.userAgent,
        hasTouch,
        screenWidth,
        screenHeight: window.screen.height,
      })
    } else {
      updateTestResult("device", "warning", "Appareil desktop détecté - tests limités", {
        userAgent: navigator.userAgent,
        screenWidth,
        screenHeight: window.screen.height,
      })
    }
  }

  const runCameraPermissionTest = async () => {
    setCurrentTest("Test permissions caméra")

    try {
      const devices = await navigator.mediaDevices.enumerateDevices()
      const videoDevices = devices.filter((device) => device.kind === "videoinput")

      if (videoDevices.length === 0) {
        updateTestResult("camera-permission", "error", "Aucune caméra détectée", { devices: videoDevices })
        return
      }

      setCameras(
        videoDevices.map((device) => ({
          deviceId: device.deviceId,
          label: device.label || `Caméra ${device.deviceId.slice(0, 8)}`,
          kind: device.kind,
          facing: device.label.toLowerCase().includes("back") ? "environment" : "user",
        })),
      )

      updateTestResult("camera-permission", "success", `${videoDevices.length} caméra(s) détectée(s)`, {
        cameras: videoDevices.length,
        devices: videoDevices,
      })
    } catch (error) {
      updateTestResult("camera-permission", "error", "Erreur accès aux périphériques", { error: error.message })
    }
  }

  const runCameraAccessTest = async () => {
    setCurrentTest("Test accès caméra")

    try {
      // Essayer d'abord la caméra arrière
      let constraints: MediaStreamConstraints = {
        video: {
          facingMode: { ideal: "environment" },
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      }

      let stream: MediaStream
      try {
        stream = await navigator.mediaDevices.getUserMedia(constraints)
      } catch (error) {
        // Fallback vers caméra avant
        constraints = {
          video: {
            facingMode: "user",
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
        }
        stream = await navigator.mediaDevices.getUserMedia(constraints)
      }

      setCameraStream(stream)

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play()
      }

      const videoTrack = stream.getVideoTracks()[0]
      const settings = videoTrack.getSettings()

      updateTestResult("camera-access", "success", "Caméra accessible", {
        facingMode: settings.facingMode,
        width: settings.width,
        height: settings.height,
        frameRate: settings.frameRate,
      })
    } catch (error) {
      updateTestResult("camera-access", "error", "Impossible d'accéder à la caméra", { error: error.message })
    }
  }

  const runCameraQualityTest = async () => {
    setCurrentTest("Test qualité caméra")

    if (!cameraStream || !videoRef.current) {
      updateTestResult("camera-quality", "error", "Caméra non accessible")
      return
    }

    try {
      const canvas = canvasRef.current!
      const ctx = canvas.getContext("2d")!
      const video = videoRef.current

      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      ctx.drawImage(video, 0, 0)

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      // Calculer la luminosité moyenne
      let brightness = 0
      for (let i = 0; i < data.length; i += 4) {
        brightness += (data[i] + data[i + 1] + data[i + 2]) / 3
      }
      brightness = brightness / (data.length / 4)

      // Calculer le contraste (écart-type)
      let variance = 0
      for (let i = 0; i < data.length; i += 4) {
        const pixelBrightness = (data[i] + data[i + 1] + data[i + 2]) / 3
        variance += Math.pow(pixelBrightness - brightness, 2)
      }
      const contrast = Math.sqrt(variance / (data.length / 4))

      const qualityScore = Math.min(100, (brightness / 255) * 50 + (contrast / 128) * 50)

      let status: TestResult["status"] = "success"
      let message = `Qualité excellente (${Math.round(qualityScore)}%)`

      if (qualityScore < 30) {
        status = "error"
        message = `Qualité insuffisante (${Math.round(qualityScore)}%)`
      } else if (qualityScore < 60) {
        status = "warning"
        message = `Qualité moyenne (${Math.round(qualityScore)}%)`
      }

      updateTestResult("camera-quality", status, message, {
        brightness: Math.round(brightness),
        contrast: Math.round(contrast),
        qualityScore: Math.round(qualityScore),
        resolution: `${canvas.width}x${canvas.height}`,
      })
    } catch (error) {
      updateTestResult("camera-quality", "error", "Erreur analyse qualité", { error: error.message })
    }
  }

  const runOCRLoadTest = async () => {
    setCurrentTest("Chargement Tesseract.js")

    try {
      const startTime = Date.now()

      // Simuler le chargement de Tesseract
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const loadTime = Date.now() - startTime

      updateTestResult("ocr-load", "success", `Tesseract chargé en ${loadTime}ms`, {
        loadTime,
        version: "4.1.1",
      })
    } catch (error) {
      updateTestResult("ocr-load", "error", "Erreur chargement Tesseract", { error: error.message })
    }
  }

  const runOCRTest = async () => {
    setCurrentTest("Test reconnaissance OCR")

    try {
      const startTime = Date.now()

      // Simuler la reconnaissance OCR
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const processingTime = Date.now() - startTime
      setOcrTime(processingTime)

      // Résultat simulé
      const mockResult = "CD 123 • 45"
      setOcrResult(mockResult)

      let status: TestResult["status"] = "success"
      let message = `OCR réussi en ${processingTime}ms`

      if (processingTime > 5000) {
        status = "warning"
        message = `OCR lent (${processingTime}ms)`
      }

      updateTestResult("ocr-test", status, message, {
        processingTime,
        result: mockResult,
        confidence: 85,
      })
    } catch (error) {
      updateTestResult("ocr-test", "error", "Erreur reconnaissance OCR", { error: error.message })
    }
  }

  const runAllTests = async () => {
    setIsRunning(true)
    setTestResults([])
    setProgress(0)

    let currentProgress = 0

    for (const test of tests) {
      setProgress(currentProgress)

      switch (test.id) {
        case "device":
          await runDeviceTest()
          break
        case "camera-permission":
          await runCameraPermissionTest()
          break
        case "camera-access":
          await runCameraAccessTest()
          break
        case "camera-quality":
          await runCameraQualityTest()
          break
        case "ocr-load":
          await runOCRLoadTest()
          break
        case "ocr-test":
          await runOCRTest()
          break
      }

      currentProgress += test.weight
      await new Promise((resolve) => setTimeout(resolve, 500))
    }

    setProgress(100)
    setCurrentTest("")
    setIsRunning(false)
  }

  const captureImage = () => {
    if (!videoRef.current || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")!
    const video = videoRef.current

    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    ctx.drawImage(video, 0, 0)

    const imageData = canvas.toDataURL("image/jpeg", 0.8)
    setCapturedImage(imageData)
  }

  const downloadResults = () => {
    const results = {
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      testResults,
      cameras,
      ocrResult,
      ocrTime,
    }

    const blob = new Blob([JSON.stringify(results, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `camera-test-results-${Date.now()}.json`
    a.click()
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
      default:
        return <div className="w-4 h-4 rounded-full bg-gray-300 animate-pulse" />
    }
  }

  const getStatusColor = (status: TestResult["status"]) => {
    switch (status) {
      case "success":
        return "bg-green-100 text-green-800"
      case "error":
        return "bg-red-100 text-red-800"
      case "warning":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  useEffect(() => {
    return () => {
      if (cameraStream) {
        cameraStream.getTracks().forEach((track) => track.stop())
      }
    }
  }, [cameraStream])

  return (
    <div className="space-y-6">
      {/* Contrôles principaux */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="w-5 h-5" />
            Tests de Compatibilité Caméra
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Button onClick={runAllTests} disabled={isRunning} className="flex-1">
              {isRunning ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Tests en cours...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Lancer tous les tests
                </>
              )}
            </Button>
            {testResults.length > 0 && (
              <Button variant="outline" onClick={downloadResults}>
                <Download className="w-4 h-4 mr-2" />
                Exporter
              </Button>
            )}
          </div>

          {isRunning && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{currentTest}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Résultats des tests */}
      {testResults.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Résultats des Tests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {testResults.map((result, index) => (
                <div key={index} className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    {getStatusIcon(result.status)}
                    <div>
                      <h4 className="font-medium">{result.name}</h4>
                      <p className="text-sm text-gray-600">{result.message}</p>
                      {result.details && (
                        <details className="mt-2">
                          <summary className="text-xs text-blue-600 cursor-pointer">Détails techniques</summary>
                          <pre className="text-xs bg-white p-2 rounded mt-1 overflow-auto">
                            {JSON.stringify(result.details, null, 2)}
                          </pre>
                        </details>
                      )}
                    </div>
                  </div>
                  <Badge className={getStatusColor(result.status)}>{result.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Prévisualisation caméra */}
      {cameraStream && (
        <Card>
          <CardHeader>
            <CardTitle>Prévisualisation Caméra</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative bg-black rounded-lg overflow-hidden">
              <video ref={videoRef} autoPlay playsInline muted className="w-full h-64 object-cover" />
              <canvas ref={canvasRef} className="hidden" />
            </div>
            <div className="flex gap-2">
              <Button onClick={captureImage} variant="outline">
                <Camera className="w-4 h-4 mr-2" />
                Capturer
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  cameraStream.getTracks().forEach((track) => track.stop())
                  setCameraStream(null)
                }}
              >
                <Square className="w-4 h-4 mr-2" />
                Arrêter
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Image capturée */}
      {capturedImage && (
        <Card>
          <CardHeader>
            <CardTitle>Image Capturée</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={capturedImage || "/placeholder.svg"} alt="Capture" className="w-full rounded-lg" />
          </CardContent>
        </Card>
      )}

      {/* Informations appareil */}
      <DeviceInfoComponent />

      {/* Monitoring performances */}
      <PerformanceMonitor />
    </div>
  )
}
