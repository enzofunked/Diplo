"use client"

import { useState, useEffect } from "react"
import { Camera, Smartphone, Battery, Signal, CheckCircle, XCircle, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import CameraTestComponent from "../../components/CameraTestComponent"
import DeviceInfoComponent from "../../components/DeviceInfoComponent"
import PerformanceMonitor from "../../components/PerformanceMonitor"

type TestPhase = "device-check" | "camera-access" | "ocr-test" | "performance" | "results"

interface TestResult {
  phase: string
  success: boolean
  message: string
  details?: any
  timestamp: Date
}

export default function TestCameraClientPage() {
  const [currentPhase, setCurrentPhase] = useState<TestPhase>("device-check")
  const [testResults, setTestResults] = useState<TestResult[]>([])
  const [isRunning, setIsRunning] = useState(false)
  const [deviceInfo, setDeviceInfo] = useState<any>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Collecter les informations de l'appareil au chargement
    collectDeviceInfo()
  }, [])

  const collectDeviceInfo = () => {
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      cookieEnabled: navigator.cookieEnabled,
      onLine: navigator.onLine,
      screen: {
        width: screen.width,
        height: screen.height,
        pixelRatio: window.devicePixelRatio,
        orientation: screen.orientation?.type || "unknown",
      },
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      mediaDevices: !!navigator.mediaDevices,
      getUserMedia: !!navigator.mediaDevices?.getUserMedia,
      permissions: !!navigator.permissions,
    }

    setDeviceInfo(info)
    addTestResult("device-check", true, "Informations de l'appareil collectées", info)
  }

  const addTestResult = (phase: string, success: boolean, message: string, details?: any) => {
    const result: TestResult = {
      phase,
      success,
      message,
      details,
      timestamp: new Date(),
    }
    setTestResults((prev) => [...prev, result])
  }

  const runFullTest = async () => {
    setIsRunning(true)
    setTestResults([])
    setProgress(0)

    try {
      // Phase 1: Vérification de l'appareil
      setCurrentPhase("device-check")
      setProgress(20)
      await testDeviceCapabilities()

      // Phase 2: Test d'accès caméra
      setCurrentPhase("camera-access")
      setProgress(40)
      await testCameraAccess()

      // Phase 3: Test OCR
      setCurrentPhase("ocr-test")
      setProgress(60)
      await testOCRCapabilities()

      // Phase 4: Test de performance
      setCurrentPhase("performance")
      setProgress(80)
      await testPerformance()

      // Phase 5: Résultats
      setCurrentPhase("results")
      setProgress(100)
    } catch (error) {
      addTestResult("error", false, `Erreur durant les tests: ${error}`)
    } finally {
      setIsRunning(false)
    }
  }

  const testDeviceCapabilities = async () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        const hasCamera = !!navigator.mediaDevices?.getUserMedia
        const hasPermissionsAPI = !!navigator.permissions

        addTestResult(
          "device-check",
          isMobile && hasCamera,
          `Appareil mobile: ${isMobile ? "✓" : "✗"}, Caméra: ${hasCamera ? "✓" : "✗"}`,
          { isMobile, hasCamera, hasPermissionsAPI },
        )
        resolve()
      }, 1000)
    })
  }

  const testCameraAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: "environment" },
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        },
      })

      const videoTrack = stream.getVideoTracks()[0]
      const settings = videoTrack.getSettings()

      addTestResult("camera-access", true, "Accès caméra réussi", {
        label: videoTrack.label,
        settings: settings,
        facingMode: settings.facingMode,
        resolution: `${settings.width}x${settings.height}`,
      })

      // Arrêter le stream
      stream.getTracks().forEach((track) => track.stop())
    } catch (error) {
      addTestResult("camera-access", false, `Échec d'accès caméra: ${error}`)
    }
  }

  const testOCRCapabilities = async () => {
    try {
      // Test de chargement de Tesseract
      const { createWorker } = await import("tesseract.js")
      const worker = await createWorker("fra")

      // Test avec une image simple
      const testCanvas = document.createElement("canvas")
      testCanvas.width = 200
      testCanvas.height = 50
      const ctx = testCanvas.getContext("2d")!

      ctx.fillStyle = "white"
      ctx.fillRect(0, 0, 200, 50)
      ctx.fillStyle = "black"
      ctx.font = "20px Arial"
      ctx.fillText("CD 123 456", 10, 30)

      const testImage = testCanvas.toDataURL()

      const startTime = performance.now()
      const {
        data: { text },
      } = await worker.recognize(testImage)
      const endTime = performance.now()

      await worker.terminate()

      const processingTime = Math.round(endTime - startTime)
      const success = text.includes("CD") && text.includes("123")

      addTestResult("ocr-test", success, `OCR ${success ? "réussi" : "échoué"} en ${processingTime}ms`, {
        recognizedText: text.trim(),
        processingTime,
        expectedText: "CD 123 456",
      })
    } catch (error) {
      addTestResult("ocr-test", false, `Erreur OCR: ${error}`)
    }
  }

  const testPerformance = async () => {
    const startTime = performance.now()

    // Test de performance de traitement d'image
    const canvas = document.createElement("canvas")
    canvas.width = 1920
    canvas.height = 1080
    const ctx = canvas.getContext("2d")!

    // Simuler un traitement d'image
    const imageData = ctx.createImageData(canvas.width, canvas.height)
    for (let i = 0; i < imageData.data.length; i += 4) {
      imageData.data[i] = Math.random() * 255 // R
      imageData.data[i + 1] = Math.random() * 255 // G
      imageData.data[i + 2] = Math.random() * 255 // B
      imageData.data[i + 3] = 255 // A
    }

    ctx.putImageData(imageData, 0, 0)
    const processedImage = canvas.toDataURL("image/jpeg", 0.8)

    const endTime = performance.now()
    const processingTime = Math.round(endTime - startTime)

    const memoryInfo = (performance as any).memory
    const memoryUsage = memoryInfo
      ? {
          used: Math.round(memoryInfo.usedJSHeapSize / 1024 / 1024),
          total: Math.round(memoryInfo.totalJSHeapSize / 1024 / 1024),
          limit: Math.round(memoryInfo.jsHeapSizeLimit / 1024 / 1024),
        }
      : null

    addTestResult("performance", processingTime < 2000, `Traitement d'image en ${processingTime}ms`, {
      processingTime,
      imageSize: processedImage.length,
      memoryUsage,
    })
  }

  const getPhaseIcon = (phase: TestPhase) => {
    switch (phase) {
      case "device-check":
        return <Smartphone className="w-5 h-5" />
      case "camera-access":
        return <Camera className="w-5 h-5" />
      case "ocr-test":
        return <CheckCircle className="w-5 h-5" />
      case "performance":
        return <Signal className="w-5 h-5" />
      case "results":
        return <Battery className="w-5 h-5" />
    }
  }

  const getPhaseTitle = (phase: TestPhase) => {
    switch (phase) {
      case "device-check":
        return "Vérification de l'appareil"
      case "camera-access":
        return "Test d'accès caméra"
      case "ocr-test":
        return "Test de reconnaissance OCR"
      case "performance":
        return "Test de performance"
      case "results":
        return "Résultats des tests"
    }
  }

  const successCount = testResults.filter((r) => r.success).length
  const totalTests = testResults.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container max-w-4xl mx-auto p-4">
        <div className="text-center mb-8 pt-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="text-3xl">📱</div>
            <h1 className="text-3xl font-bold text-blue-900">Test Caméra Mobile</h1>
          </div>
          <p className="text-blue-700">Diagnostic de la reconnaissance par caméra</p>
        </div>

        {/* Progress */}
        {isRunning && (
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getPhaseIcon(currentPhase)}
                    <span className="font-medium">{getPhaseTitle(currentPhase)}</span>
                  </div>
                  <Badge variant="outline">{progress}%</Badge>
                </div>
                <Progress value={progress} className="w-full" />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Device Info */}
        {deviceInfo && <DeviceInfoComponent deviceInfo={deviceInfo} />}

        {/* Test Controls */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Tests de Compatibilité
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button onClick={runFullTest} disabled={isRunning} className="w-full" size="lg">
                {isRunning ? "Tests en cours..." : "Lancer tous les tests"}
              </Button>
              <Button variant="outline" onClick={() => setCurrentPhase("camera-access")} className="w-full" size="lg">
                Test caméra uniquement
              </Button>
            </div>

            {totalTests > 0 && (
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <span className="font-medium">Résultats des tests</span>
                <Badge variant={successCount === totalTests ? "default" : "destructive"}>
                  {successCount}/{totalTests} réussis
                </Badge>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Test Results */}
        {testResults.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Résultats Détaillés</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {testResults.map((result, index) => (
                <Alert key={index} variant={result.success ? "default" : "destructive"}>
                  <div className="flex items-start gap-3">
                    {result.success ? (
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium capitalize">{result.phase.replace("-", " ")}</span>
                        <span className="text-xs text-muted-foreground">{result.timestamp.toLocaleTimeString()}</span>
                      </div>
                      <AlertDescription className="mt-1">{result.message}</AlertDescription>
                      {result.details && (
                        <details className="mt-2">
                          <summary className="text-xs cursor-pointer text-muted-foreground">Voir les détails</summary>
                          <pre className="text-xs mt-2 p-2 bg-muted rounded overflow-auto">
                            {JSON.stringify(result.details, null, 2)}
                          </pre>
                        </details>
                      )}
                    </div>
                  </div>
                </Alert>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Camera Test Component */}
        {currentPhase === "camera-access" && (
          <CameraTestComponent
            onResult={(success, message, details) => {
              addTestResult("camera-test", success, message, details)
            }}
          />
        )}

        {/* Performance Monitor */}
        <PerformanceMonitor />

        {/* Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Recommandations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Pour une meilleure reconnaissance :</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Utilisez un éclairage naturel</li>
                  <li>• Tenez l'appareil stable</li>
                  <li>• Nettoyez l'objectif de la caméra</li>
                  <li>• Positionnez la plaque bien droite</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Optimisations techniques :</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Fermez les autres applications</li>
                  <li>• Utilisez une connexion WiFi stable</li>
                  <li>• Assurez-vous d'avoir suffisamment de batterie</li>
                  <li>• Utilisez la caméra arrière si possible</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <CameraTestComponent />
      </div>
    </div>
  )
}
