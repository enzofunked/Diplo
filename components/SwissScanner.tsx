"use client"

import { useState } from "react"
import { Type, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

interface SwissScannerProps {
  onScan: (plateText: string) => void
  isScanning: boolean
  onCameraClick?: () => void
}

// Fonction pour générer des exemples de plaques suisses
const generateSwissPlateExamples = () => {
  return ["CD GE 12 • 34", "CD BE 56 • 78", "CD BE 51 • 62"]
}

export default function SwissScanner({ onScan, isScanning, onCameraClick }: SwissScannerProps) {
  const [manualInput, setManualInput] = useState("")

  const handleManualSubmit = () => {
    if (manualInput.trim()) {
      onScan(manualInput.trim())
      setManualInput("")
    }
  }

  const handleExampleClick = (example: string) => {
    setManualInput(example)
  }

  const examples = generateSwissPlateExamples()

  return (
    <div id="swiss-scanner" className="space-y-6">
      <Card id="swiss-manual-card">
        <CardContent className="p-6 space-y-4">
          <div>
            <label id="swiss-manual-label" className="text-sm font-medium mb-2 block flex items-center gap-2">
              <Type className="w-4 h-4" />
              Saisir la plaque manuellement
            </label>
            <div className="flex gap-2">
              <Input
                id="swiss-manual-input"
                value={manualInput}
                onChange={(e) => setManualInput(e.target.value.toUpperCase())}
                placeholder="Ex: CD GE 9 • 32 ou cd ge 9 32"
                className="text-center text-lg font-mono flex-1"
                onKeyPress={(e) => e.key === "Enter" && handleManualSubmit()}
                disabled={isScanning}
              />
              {onCameraClick && (
                <Button
                  variant="outline"
                  disabled={true}
                  className="border-red-200 bg-gray-100 text-gray-400 text-sm px-3 cursor-not-allowed"
                  title="Bientôt disponible"
                >
                  <Camera className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
          <Button
            id="swiss-manual-submit-button"
            onClick={handleManualSubmit}
            disabled={!manualInput.trim() || isScanning}
            size="lg"
            className="w-full bg-red-600 hover:bg-red-700"
          >
            {isScanning ? "Analyse..." : "Identifier"}
          </Button>

          <div id="swiss-examples-section" className="text-xs text-muted-foreground pt-2">
            <p id="swiss-examples-title" className="font-medium mb-2 flex items-center gap-1">
              💡 Exemples :
            </p>
            <div id="swiss-examples-buttons" className="flex gap-2 overflow-x-auto pb-1">
              {examples.map((example, index) => (
                <Button
                  key={example}
                  id={`swiss-example-button-${index}`}
                  variant="outline"
                  size="sm"
                  className="text-xs h-7 px-2 font-mono whitespace-nowrap bg-white/50 hover:bg-white"
                  onClick={() => handleExampleClick(example)}
                >
                  {example}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
