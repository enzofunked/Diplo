"use client"

import { useState } from "react"
import { Camera, Type, Scan, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { generateFrenchPlateExamples } from "../utils/french-plate-validator"

interface FrenchScannerProps {
  onScan: (plateText: string) => void
  isScanning: boolean
}

export default function FrenchScanner({ onScan, isScanning }: FrenchScannerProps) {
  const [manualInput, setManualInput] = useState("")
  const [scanMode, setScanMode] = useState<"camera" | "manual">("camera")

  const handleManualSubmit = () => {
    if (manualInput.trim()) {
      onScan(manualInput.trim())
      setManualInput("")
    }
  }

  const simulateCamera = () => {
    const examples = generateFrenchPlateExamples()
    const randomExample = examples[Math.floor(Math.random() * examples.length)]
    onScan(randomExample)
  }

  return (
    <div id="french-scanner" className="space-y-6">
      {/* Mode Toggle */}
      <div id="french-mode-toggle" className="flex gap-2 p-1 bg-muted rounded-lg">
        <Button
          id="french-camera-mode-button"
          variant={scanMode === "camera" ? "default" : "ghost"}
          size="sm"
          onClick={() => setScanMode("camera")}
          className="flex-1"
        >
          <Camera className="w-4 h-4 mr-2" />
          Scanner
        </Button>
        <Button
          id="french-manual-mode-button"
          variant={scanMode === "manual" ? "default" : "ghost"}
          size="sm"
          onClick={() => setScanMode("manual")}
          className="flex-1"
        >
          <Type className="w-4 h-4 mr-2" />
          Manuel
        </Button>
      </div>

      {scanMode === "camera" ? (
        <Card
          id="french-camera-card"
          className="aspect-square bg-gradient-to-br from-green-50 to-green-100 border-2 border-dashed border-green-300"
        >
          <CardContent className="flex flex-col items-center justify-center h-full p-6">
            <div
              id="french-scan-frame"
              className="w-64 h-32 border-2 border-green-500 rounded-lg mb-4 flex items-center justify-center bg-white/50"
            >
              <div id="french-scan-content" className="text-green-600 text-center">
                <Scan className="w-8 h-8 mx-auto mb-2" />
                <p id="french-scan-label" className="text-sm">
                  Cadre de scan
                </p>
                <p id="french-scan-hint" className="text-xs text-muted-foreground">
                  Plaque verte
                </p>
              </div>
            </div>
            <p id="french-scan-instruction" className="text-sm text-muted-foreground mb-4 text-center">
              Positionnez la plaque diplomatique verte dans le cadre
            </p>
            <Button
              id="french-simulate-scan-button"
              onClick={simulateCamera}
              disabled={isScanning}
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700"
            >
              {isScanning ? "Analyse en cours..." : "Simuler scan"}
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card id="french-manual-card">
          <CardContent className="p-6 space-y-4">
            <div>
              <label id="french-manual-label" className="text-sm font-medium mb-2 block">
                Saisir la plaque manuellement
              </label>
              <Input
                id="french-manual-input"
                value={manualInput}
                onChange={(e) => setManualInput(e.target.value)}
                placeholder="Ex: 5 CD 1234 ou E 205 CMD 12 Z"
                className="text-center text-lg font-mono"
                onKeyPress={(e) => e.key === "Enter" && handleManualSubmit()}
              />
            </div>
            <Button
              id="french-manual-submit-button"
              onClick={handleManualSubmit}
              disabled={!manualInput.trim() || isScanning}
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700"
            >
              {isScanning ? "Analyse..." : "Identifier"}
            </Button>

            <div id="french-help-section" className="text-xs text-muted-foreground">
              <p id="french-help-title" className="font-medium mb-2 flex items-center gap-1">
                <Info className="w-3 h-3" />
                Comment ça marche :
              </p>
              <div id="french-help-content" className="space-y-2 text-xs bg-green-50 p-3 rounded">
                <p id="french-help-structure" className="font-medium text-green-800">
                  3 parties principales : PAYS + STATUT + NUMÉRO
                </p>
                <div id="french-examples-list" className="grid grid-cols-1 gap-1 mt-2">
                  <div id="french-example-cd" className="flex items-center gap-2">
                    <span className="font-mono bg-white px-2 py-1 rounded">5 CD 1234</span>
                    <span>→ Allemagne, Diplomate</span>
                  </div>
                  <div id="french-example-cmd" className="flex items-center gap-2">
                    <span className="font-mono bg-white px-2 py-1 rounded">6 CMD 12</span>
                    <span>→ États-Unis, Ambassadeur</span>
                  </div>
                  <div id="french-example-c" className="flex items-center gap-2">
                    <span className="font-mono bg-white px-2 py-1 rounded">45 C 123</span>
                    <span>→ Grande-Bretagne, Consul</span>
                  </div>
                </div>
                <p id="french-help-tip" className="text-xs text-green-600 mt-2">
                  💡 Parfois il y a des lettres avant (E, U, S) ou après (Z, X)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
