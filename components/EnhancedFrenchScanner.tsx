"use client"

import { useState } from "react"
import { Type, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { generateFrenchPlateExamples } from "../utils/french-plate-validator"

interface EnhancedFrenchScannerProps {
  onScan: (plateText: string) => void
  isScanning: boolean
  onSwitchToCamera?: () => void
}

export default function EnhancedFrenchScanner({ onScan, isScanning, onSwitchToCamera }: EnhancedFrenchScannerProps) {
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

  const examples = generateFrenchPlateExamples()

  return (
    <div id="french-scanner" className="space-y-6">
      <Card id="french-manual-card">
        <CardContent className="p-6 space-y-4">
          <div>
            <label id="french-manual-label" className="text-sm font-medium mb-2 block flex items-center gap-2">
              <Type className="w-4 h-4" />
              Saisir la plaque manuellement
            </label>
            <Input
              id="french-manual-input"
              value={manualInput}
              onChange={(e) => setManualInput(e.target.value.toUpperCase())}
              placeholder="Ex: CD 001 123 ou CC 032 456"
              className="text-center text-lg font-mono"
              onKeyPress={(e) => e.key === "Enter" && handleManualSubmit()}
              disabled={isScanning}
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

          {/* Bouton caméra */}
          {onSwitchToCamera && (
            <Button
              onClick={onSwitchToCamera}
              variant="outline"
              className="w-full flex items-center gap-2 border-green-200 hover:bg-green-50 bg-transparent"
            >
              <Camera className="w-4 h-4" />
              Scanner avec caméra
            </Button>
          )}

          <div id="french-examples-section" className="text-xs text-muted-foreground pt-2">
            <p id="french-examples-title" className="font-medium mb-2 flex items-center gap-1">
              💡 Exemples :
            </p>
            <div id="french-examples-buttons" className="flex gap-2 overflow-x-auto pb-1">
              {examples.slice(0, 3).map((example, index) => (
                <Button
                  key={example}
                  id={`french-example-button-${index}`}
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
