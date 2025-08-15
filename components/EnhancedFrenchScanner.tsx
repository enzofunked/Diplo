"use client"

import { useState } from "react"
import { Type } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

interface EnhancedFrenchScannerProps {
  onScan: (plateText: string) => void
  isScanning: boolean
}

export default function EnhancedFrenchScanner({ onScan, isScanning }: EnhancedFrenchScannerProps) {
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

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6 space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block flex items-center gap-2">
              <Type className="w-4 h-4" />
              Saisir la plaque manuellement
            </label>
            <Input
              value={manualInput}
              onChange={(e) => setManualInput(e.target.value)}
              placeholder="Ex: 200 CD 13 ou 200cd13"
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

          <div className="text-xs text-muted-foreground pt-2">
            <p className="font-medium mb-2 flex items-center gap-1">💡 Exemples :</p>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {["319 CD 13", "5 CMD 1234 Z", "E 205 CD 456"].map((example) => (
                <Button
                  key={example}
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
