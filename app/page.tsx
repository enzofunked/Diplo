"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Camera, Search, History, BookOpen, Globe, Users, ExternalLink } from "lucide-react"
import SystemSelector from "../components/SystemSelector"
import CameraScanner from "../components/CameraScanner"
import HistoryView from "../components/HistoryView"
import FrenchPlateResult from "../components/FrenchPlateResult"
import SwissPlateResult from "../components/SwissPlateResult"
import { validateFrenchPlate } from "../utils/french-plate-validator"
import { validateSwissPlate } from "../utils/swiss-plate-validator"
import { useHistory } from "../hooks/useHistory"
import { useFavorites } from "../hooks/useFavorites"
import Link from "next/link"

type SystemType = "french" | "swiss"
type ViewType = "scanner" | "history" | "camera"

export default function HomePage() {
  const [selectedSystem, setSelectedSystem] = useState<SystemType>("french")
  const [currentView, setCurrentView] = useState<ViewType>("scanner")
  const [plateNumber, setPlateNumber] = useState("")
  const [scannedPlate, setScannedPlate] = useState<any>(null)
  const [scanError, setScanError] = useState<string | null>(null)

  const { addEntry, history } = useHistory()
  const { addFavorite, removeFavorite, isFavorite } = useFavorites()

  const handleScan = () => {
    if (!plateNumber.trim()) {
      setScanError("Veuillez saisir un numéro de plaque")
      return
    }

    setScanError(null)
    let result

    if (selectedSystem === "french") {
      result = validateFrenchPlate(plateNumber.trim())
    } else {
      result = validateSwissPlate(plateNumber.trim())
    }

    if (result.isValid) {
      const entry = {
        id: Date.now().toString(),
        plateNumber: plateNumber.trim(),
        system: selectedSystem,
        result,
        timestamp: new Date(),
      }

      setScannedPlate(entry)
      addEntry(entry)
      setPlateNumber("")
    } else {
      setScanError(result.error || "Format de plaque invalide")
    }
  }

  const handleCameraResult = (result: any, plateText: string) => {
    const entry = {
      id: Date.now().toString(),
      plateNumber: plateText,
      system: selectedSystem,
      result,
      timestamp: new Date(),
    }

    setScannedPlate(entry)
    addEntry(entry)
    setCurrentView("scanner")
  }

  const handleToggleFavorite = (entry: any) => {
    if (isFavorite(entry.id)) {
      removeFavorite(entry.id)
    } else {
      addFavorite(entry)
    }
  }

  const handleRescan = (entry: any) => {
    setPlateNumber(entry.plateNumber)
    setSelectedSystem(entry.system)
    setScannedPlate(entry)
    setCurrentView("scanner")
  }

  if (currentView === "camera") {
    return (
      <CameraScanner system={selectedSystem} onResult={handleCameraResult} onBack={() => setCurrentView("scanner")} />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🔍 Diplo Scanner</h1>
          <p className="text-lg text-gray-600 mb-6">Scanner de plaques diplomatiques France & Suisse</p>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mb-6">
            <Button
              variant={currentView === "scanner" ? "default" : "outline"}
              onClick={() => setCurrentView("scanner")}
              className="flex items-center gap-2"
            >
              <Search className="h-4 w-4" />
              Scanner
            </Button>
            <Button
              variant={currentView === "history" ? "default" : "outline"}
              onClick={() => setCurrentView("history")}
              className="flex items-center gap-2"
            >
              <History className="h-4 w-4" />
              Historique ({history.length})
            </Button>
          </div>
        </div>

        {currentView === "scanner" ? (
          <div className="max-w-4xl mx-auto">
            {/* System Selector */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Système de plaques
                </CardTitle>
                <CardDescription>Sélectionnez le pays pour analyser la plaque diplomatique</CardDescription>
              </CardHeader>
              <CardContent>
                <SystemSelector selectedSystem={selectedSystem} onSystemChange={setSelectedSystem} />
              </CardContent>
            </Card>

            {/* Scanner */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Scanner une plaque
                </CardTitle>
                <CardDescription>Saisissez le numéro ou utilisez la caméra pour scanner</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder={
                      selectedSystem === "french" ? "Ex: 5 CD 1234 ou 45 C 123.75" : "Ex: 001 123 ou 032 456"
                    }
                    value={plateNumber}
                    onChange={(e) => setPlateNumber(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleScan()}
                    className="flex-1"
                  />
                  <Button onClick={handleScan} className="px-6">
                    <Search className="h-4 w-4 mr-2" />
                    Scanner
                  </Button>
                </div>

                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentView("camera")}
                    className="flex items-center gap-2"
                  >
                    <Camera className="h-4 w-4" />
                    Scanner avec caméra
                  </Button>
                </div>

                {scanError && <div className="text-red-600 text-sm mt-2">{scanError}</div>}
              </CardContent>
            </Card>

            {/* Results */}
            {scannedPlate && (
              <div className="mb-6">
                {selectedSystem === "french" ? (
                  <FrenchPlateResult
                    result={scannedPlate.result.match}
                    scannedPlate={scannedPlate.plateNumber}
                    onBack={() => setScannedPlate(null)}
                  />
                ) : (
                  <SwissPlateResult
                    result={scannedPlate.result.match}
                    scannedPlate={scannedPlate.plateNumber}
                    onBack={() => setScannedPlate(null)}
                  />
                )}
              </div>
            )}

            {/* Quick Links */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BookOpen className="h-5 w-5" />
                    Guides et informations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                    <Link href="/french/guide" className="flex items-center justify-between w-full">
                      <div>
                        <div className="font-medium">🇫🇷 Guide France</div>
                        <div className="text-sm text-gray-600">Système français</div>
                      </div>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSelectedSystem("french")
                        setCurrentView("camera")
                      }}
                      className="ml-2 p-2"
                      title="Scanner une plaque française avec la caméra"
                    >
                      📸
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-red-50 hover:bg-red-100 transition-colors">
                    <Link href="/swiss/guide" className="flex items-center justify-between w-full">
                      <div>
                        <div className="font-medium">🇨🇭 Guide Suisse</div>
                        <div className="text-sm text-gray-600">Système suisse</div>
                      </div>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSelectedSystem("swiss")
                        setCurrentView("camera")
                      }}
                      className="ml-2 p-2"
                      title="Scanner une plaque suisse avec la caméra"
                    >
                      📸
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="h-5 w-5" />
                    Codes pays
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link
                    href="/french/codes"
                    className="flex items-center justify-between p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                  >
                    <div>
                      <div className="font-medium">🇫🇷 Codes français</div>
                      <div className="text-sm text-gray-600">Liste complète</div>
                    </div>
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/swiss/codes"
                    className="flex items-center justify-between p-3 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors"
                  >
                    <div>
                      <div className="font-medium">🇨🇭 Codes suisses</div>
                      <div className="text-sm text-gray-600">Liste complète</div>
                    </div>
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <HistoryView
            history={history}
            onRescan={handleRescan}
            onToggleFavorite={handleToggleFavorite}
            isFavorite={isFavorite}
          />
        )}

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center text-gray-600">
            <div className="flex justify-center gap-6 mb-4">
              <Link href="/help" className="hover:text-blue-600 transition-colors">
                Aide
              </Link>
              <Link href="/terms" className="hover:text-blue-600 transition-colors">
                Conditions
              </Link>
              <Link href="/cookies" className="hover:text-blue-600 transition-colors">
                Cookies
              </Link>
              <Link href="/faq-plaques-diplomatiques" className="hover:text-blue-600 transition-colors">
                FAQ
              </Link>
            </div>
            <p className="text-sm">© 2024 🔍 Diplo Scanner - Scanner de plaques diplomatiques</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
