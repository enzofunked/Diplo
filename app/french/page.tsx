"use client"

import { useState } from "react"
import { ArrowLeft, Info, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { validateDiplomaticPlate } from "../../utils/plateValidator"
import FrenchPlateResult from "../../components/FrenchPlateResult"
import type { FrenchPlateMatch } from "../../utils/french-plate-validator"
import { useHistory } from "../../hooks/useHistory"
import EnhancedFrenchScanner from "../../components/EnhancedFrenchScanner"

export default function FrenchPage() {
  const [scanResult, setScanResult] = useState<FrenchPlateMatch | null>(null)
  const [scannedPlate, setScannedPlate] = useState("")
  const [isScanning, setIsScanning] = useState(false)
  const { addToHistory } = useHistory()

  const handleScan = async (plateText: string) => {
    setIsScanning(true)
    setScannedPlate(plateText)

    try {
      const result = validateDiplomaticPlate(plateText, "french") as FrenchPlateMatch

      if (result) {
        setScanResult(result)
        addToHistory(plateText, result, "french")
      } else {
        alert(`Plaque non reconnue: "${plateText}"\n\nVérifiez le format.`)
        addToHistory(plateText, null, "french")
      }
    } catch (error) {
      console.error("Erreur validation:", error)
      alert("Erreur lors de l'analyse. Réessayez.")
    } finally {
      setIsScanning(false)
    }
  }

  if (scanResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container max-w-md mx-auto p-4">
          <div className="text-center mb-8 pt-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="text-3xl">🌍</div>
              <h1 className="text-3xl font-bold text-blue-900">Diplo Scanner</h1>
            </div>
            <p className="text-blue-700">Plaques diplomatiques France & Suisse</p>
          </div>
          <div className="pb-8">
            <FrenchPlateResult result={scanResult} scannedPlate={scannedPlate} onBack={() => setScanResult(null)} />
          </div>
        </div>
        <footer className="bg-white/60 border-t border-gray-200 py-4 w-full">
          <div className="text-center space-y-2">
            <p className="text-xs text-gray-500">Fait avec ❤️</p>
            <div className="flex justify-center gap-4">
              <Link href="/terms">
                <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors underline">
                  Conditions d'Utilisation
                </button>
              </Link>
              <Link href="/about">
                <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors underline">
                  À propos
                </button>
              </Link>
              <Link href="/help">
                <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors underline">Aide</button>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container max-w-md mx-auto p-4">
        <div className="text-center mb-8 pt-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="text-3xl">🌍</div>
            <h1 className="text-3xl font-bold text-blue-900">Diplo Scanner</h1>
          </div>
          <p className="text-blue-700">Plaques diplomatiques France & Suisse</p>
        </div>

        <div className="pb-8 space-y-6">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇫🇷</span>
              <h2 className="text-lg font-semibold">Identifier plaque française</h2>
            </div>
          </div>

          <EnhancedFrenchScanner onScan={handleScan} isScanning={isScanning} />

          <div className="grid grid-cols-2 gap-3">
            <Link href="/french/guide">
              <Button
                id="french-decode-button"
                variant="outline"
                className="w-full flex items-center gap-2 border-green-200 hover:bg-green-50 bg-white"
              >
                <Info className="w-4 h-4" /> Décoder les plaques
              </Button>
            </Link>
            <Link href="/french/codes">
              <Button
                id="french-codes-button"
                variant="outline"
                className="w-full flex items-center gap-2 border-green-200 hover:bg-green-50 bg-white"
              >
                <BookOpen className="w-4 h-4" /> Tous les codes
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <footer className="bg-white/60 border-t border-gray-200 py-4 w-full">
        <div className="text-center space-y-2">
          <p className="text-xs text-gray-500">Fait avec ❤️</p>
          <div className="flex justify-center gap-4">
            <Link href="/terms">
              <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors underline">
                Conditions d'Utilisation
              </button>
            </Link>
            <Link href="/about">
              <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors underline">
                À propos
              </button>
            </Link>
            <Link href="/help">
              <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors underline">Aide</button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
