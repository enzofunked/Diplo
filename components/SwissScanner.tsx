"use client"

import { useState } from "react"
import { Type } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { generateSwissPlateExamples } from "../utils/swiss-plate-validator"

interface SwissScannerProps {
  onScan: (plateText: string) => void
  isScanning: boolean
}

export default function SwissScanner({ onScan, isScanning }: SwissScannerProps) {
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
            <Input
              id="swiss-manual-input"
              value={manualInput}
              onChange={(e) => setManualInput(e.target.value.toUpperCase())}
              placeholder="Ex: CD GE 9 • 32 ou cd ge 9 32"
              className="text-center text-lg font-mono"
              onKeyPress={(e) => e.key === "Enter" && handleManualSubmit()}
              disabled={isScanning}
            />
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
              {examples.slice(0, 3).map((example, index) => (
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
