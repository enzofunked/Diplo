"use client"

import { useState } from "react"
import { Camera, Type, Scan } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

interface ScannerProps {
  onScan: (plateText: string) => void
  isScanning: boolean
}

export default function Scanner({ onScan, isScanning }: ScannerProps) {
  const [manualInput, setManualInput] = useState("")
  const [scanMode, setScanMode] = useState<"camera" | "manual">("camera")

  const handleManualSubmit = () => {
    if (manualInput.trim()) {
      onScan(manualInput.trim())
      setManualInput("")
    }
  }

  const simulateCamera = () => {
    // Simulate camera scanning with example plates including French codes
    const examples = [
      // French diplomatic codes
      "CD 5 45", // Allemagne
      "CMD 6 12", // États-Unis
      "CD 26 78", // Chine
      "CD 62 34", // Japon
      "CD 45 56", // Grande-Bretagne
      "CC 60 89", // Italie
      "CD 105 23", // Suisse
      // International formats
      "CMD 123 45", // France - Ambassador
      "D 12345", // USA - Diplomatic
      "CDJ 12-34", // Netherlands - Diplomatic
      "0-789-12", // Germany - Diplomatic
      "使 12345", // China - Diplomatic
      "EUR 1234", // European Union
    ]
    const randomExample = examples[Math.floor(Math.random() * examples.length)]
    onScan(randomExample)
  }

  return (
    <div className="space-y-6">
      {/* Mode Toggle */}
      <div className="flex gap-2 p-1 bg-muted rounded-lg">
        <Button
          variant={scanMode === "camera" ? "default" : "ghost"}
          size="sm"
          onClick={() => setScanMode("camera")}
          className="flex-1"
        >
          <Camera className="w-4 h-4 mr-2" />
          Scanner
        </Button>
        <Button
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
        <Card className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-dashed border-blue-300">
          <CardContent className="flex flex-col items-center justify-center h-full p-6">
            <div className="w-64 h-32 border-2 border-blue-500 rounded-lg mb-4 flex items-center justify-center bg-white/50">
              <div className="text-blue-600 text-center">
                <Scan className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">Cadre de scan</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4 text-center">Positionnez la plaque dans le cadre</p>
            <Button onClick={simulateCamera} disabled={isScanning} size="lg" className="w-full">
              {isScanning ? "Analyse en cours..." : "Simuler scan"}
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-6 space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Saisir la plaque manuellement</label>
              <Input
                value={manualInput}
                onChange={(e) => setManualInput(e.target.value)}
                placeholder="Ex: CD 5 45 ou CMD 123 45"
                className="text-center text-lg font-mono"
                onKeyPress={(e) => e.key === "Enter" && handleManualSubmit()}
              />
            </div>
            <Button
              onClick={handleManualSubmit}
              disabled={!manualInput.trim() || isScanning}
              size="lg"
              className="w-full"
            >
              {isScanning ? "Analyse..." : "Identifier"}
            </Button>

            <div className="text-xs text-muted-foreground">
              <p className="font-medium mb-1">Exemples de formats :</p>
              <div className="grid grid-cols-1 gap-1 text-xs">
                <span className="text-blue-600 font-medium">🇫🇷 Codes français :</span>
                <span>• CD 5 45 (Allemagne)</span>
                <span>• CMD 6 12 (États-Unis)</span>
                <span>• CD 26 78 (Chine)</span>
                <span className="text-gray-600 font-medium mt-1">🌍 Formats internationaux :</span>
                <span>• CMD 123 45 (France)</span>
                <span>• D 12345 (USA)</span>
                <span>• 使 12345 (Chine)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
