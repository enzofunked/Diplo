"use client"

import { useState } from "react"
import { Camera, ArrowLeft, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import CameraCapture from "./CameraCapture"

interface CameraScannerProps {
  system: "french" | "swiss"
  onResult: (result: any, plateText: string) => void
  onBack: () => void
}

export default function CameraScanner({ system, onResult, onBack }: CameraScannerProps) {
  const [isScanning, setIsScanning] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleStartScan = () => {
    setError(null)
    setIsScanning(true)
  }

  const handleScanResult = (result: any, plateText: string) => {
    setIsScanning(false)
    onResult(result, plateText)
  }

  const handleScanError = (errorMessage: string) => {
    setError(errorMessage)
    setIsScanning(false)
  }

  const handleBack = () => {
    setIsScanning(false)
    onBack()
  }

  if (isScanning) {
    return <CameraCapture system={system} onResult={handleScanResult} onError={handleScanError} onBack={handleBack} />
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h2 className="text-lg font-semibold">Scanner {system === "french" ? "français" : "suisse"}</h2>
      </div>

      <Card>
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Camera className="w-8 h-8 text-blue-600" />
          </div>
          <CardTitle>Reconnaissance par caméra</CardTitle>
          <p className="text-muted-foreground">
            Utilisez votre caméra pour scanner automatiquement une plaque diplomatique
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              Conseils pour un bon scan
            </h3>

            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Positionnez la plaque dans le cadre de visée</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Assurez-vous que l'éclairage est suffisant</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Tenez l'appareil stable pendant la capture</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>La plaque doit être nette et lisible</span>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Format attendu ({system === "french" ? "français" : "suisse"}) :</h4>
            <div className="font-mono text-sm bg-white p-2 rounded border">
              {system === "french" ? (
                <div className="space-y-1">
                  <div>• CD 123 456 (Corps diplomatique)</div>
                  <div>• C 45 123.75 (Consulat)</div>
                  <div>• CMD 001 12 (Ambassadeur)</div>
                </div>
              ) : (
                <div className="space-y-1">
                  <div>• 001 123 (Allemagne)</div>
                  <div>• 032 456 (France)</div>
                  <div>• 107 789 (Italie)</div>
                </div>
              )}
            </div>
          </div>

          <Button onClick={handleStartScan} className="w-full" size="lg">
            <Camera className="w-5 h-5 mr-2" />
            Démarrer le scan
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
