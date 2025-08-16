"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Search, History, HelpCircle, Shield, Globe, ExternalLink, Info } from "lucide-react"
import Link from "next/link"
import CookieConsent from "../components/CookieConsent"
import OfflineIndicator from "../components/OfflineIndicator"

import SystemSelector from "../components/SystemSelector"
import EnhancedFrenchScanner from "../components/EnhancedFrenchScanner"
import SwissScanner from "../components/SwissScanner"
import CameraScanner from "../components/CameraScanner"
import FrenchPlateResult from "../components/FrenchPlateResult"
import SwissPlateResult from "../components/SwissPlateResult"
import HistoryView from "../components/HistoryView"
import { useHistory } from "../hooks/useHistory"
import { useFavorites } from "../hooks/useFavorites"
import { validateFrenchPlate } from "../utils/french-plate-validator"
import { validateSwissPlate } from "../utils/swiss-plate-validator"

type System = "french" | "swiss" | null
type View = "scanner" | "camera" | "history"

export default function HomePage() {
  const [selectedSystem, setSelectedSystem] = useState<System>(null)
  const [currentView, setCurrentView] = useState<View>("scanner")
  const [isScanning, setIsScanning] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [scannedPlate, setScannedPlate] = useState("")

  const { addToHistory } = useHistory()
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites()

  const handleScan = async (plateText: string) => {
    setIsScanning(true)
    setResult(null)
    setScannedPlate(plateText)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      let scanResult
      if (selectedSystem === "french") {
        scanResult = validateFrenchPlate(plateText)
      } else if (selectedSystem === "swiss") {
        scanResult = validateSwissPlate(plateText)
      }

      if (scanResult) {
        const historyEntry = {
          id: Date.now().toString(),
          plateText: plateText.toUpperCase(),
          result: scanResult,
          timestamp: new Date(),
          system: selectedSystem,
        }

        addToHistory(historyEntry)
        setResult(scanResult)
      } else {
        setResult({
          isValid: false,
          error: `Format de plaque ${selectedSystem === "french" ? "française" : "suisse"} non reconnu`,
        })
      }
    } catch (error) {
      setResult({
        isValid: false,
        error: "Erreur lors de l'analyse de la plaque",
      })
    } finally {
      setIsScanning(false)
    }
  }

  const handleSystemSelect = (system: System) => {
    setSelectedSystem(system)
  }

  const handleBack = () => {
    setSelectedSystem(null)
    setResult(null)
  }

  const handleViewChange = (view: View) => {
    setCurrentView(view)
    setResult(null)
  }

  const handleCameraResult = (result: any, plateText: string) => {
    const historyEntry = {
      id: Date.now().toString(),
      plateText: plateText.toUpperCase(),
      result: result,
      timestamp: new Date(),
      system: selectedSystem,
    }

    addToHistory(historyEntry)
    setResult(result)
    setScannedPlate(plateText)
    setCurrentView("scanner")
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case "camera":
        return (
          <CameraScanner
            system={selectedSystem!}
            onResult={handleCameraResult}
            onBack={() => setCurrentView("scanner")}
          />
        )
      case "history":
        return <HistoryView onScan={handleScan} />
      default:
        return selectedSystem === "french" ? (
          <EnhancedFrenchScanner
            onScan={handleScan}
            isScanning={isScanning}
            onSwitchToCamera={() => setCurrentView("camera")}
          />
        ) : (
          <SwissScanner onScan={handleScan} isScanning={isScanning} onSwitchToCamera={() => setCurrentView("camera")} />
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl">
              <Search className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Diplo Scanner
              </h1>
              <p className="text-gray-600 text-sm">Scanner de plaques diplomatiques</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Globe className="w-4 h-4" />
            <span>France & Suisse</span>
            <Badge variant="secondary" className="text-xs">
              Gratuit
            </Badge>
          </div>
        </div>

        {/* Navigation */}
        {currentView !== "camera" && (
          <div className="flex justify-center mb-6">
            <div className="flex gap-1 p-1 bg-gray-100 rounded-lg">
              <Button
                variant={currentView === "scanner" ? "default" : "ghost"}
                size="sm"
                onClick={() => handleViewChange("scanner")}
                className="flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                Scanner
              </Button>
              <Button
                variant={currentView === "history" ? "default" : "ghost"}
                size="sm"
                onClick={() => handleViewChange("history")}
                className="flex items-center gap-2"
              >
                <History className="w-4 h-4" />
                Historique
              </Button>
            </div>
          </div>
        )}

        {/* System Selector */}
        {!selectedSystem && currentView === "scanner" && (
          <div className="mb-6">
            <SystemSelector onSystemSelect={handleSystemSelect} />
          </div>
        )}

        {/* Main Content */}
        {selectedSystem && (
          <div className="space-y-6">
            {renderCurrentView()}

            {/* Results */}
            {result && result.isValid !== false && (
              <div className="space-y-4">
                {selectedSystem === "french" ? (
                  <FrenchPlateResult result={result} scannedPlate={scannedPlate} onBack={handleBack} />
                ) : (
                  <SwissPlateResult result={result} scannedPlate={scannedPlate} onBack={handleBack} />
                )}
              </div>
            )}

            {/* Error Results */}
            {result && result.isValid === false && (
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-red-600 font-medium mb-2">Plaque non reconnue</div>
                    <p className="text-red-700 text-sm">{result.error}</p>
                    <Button onClick={handleBack} className="mt-4 bg-transparent" variant="outline">
                      Essayer à nouveau
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Quick Links */}
        {currentView === "scanner" && !result && (
          <div className="mt-12 space-y-6">
            <Separator />

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 flex items-center justify-center gap-2">
                <Info className="w-5 h-5" />
                Guides et informations
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/qu-est-ce-qu-une-plaque-diplomatique">
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <HelpCircle className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="text-left">
                          <h4 className="font-medium">Qu'est-ce qu'une plaque diplomatique ?</h4>
                          <p className="text-sm text-gray-600">Guide complet</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/privileges-immunites-plaques-diplomatiques">
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <Shield className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="text-left">
                          <h4 className="font-medium">Privilèges et immunités</h4>
                          <p className="text-sm text-gray-600">Droits diplomatiques</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center space-y-4">
            <div className="flex justify-center gap-6 text-sm">
              <Link href="/help" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
                <HelpCircle className="w-4 h-4" />
                Aide
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                À propos
              </Link>
              <Link href="/faq-plaques-diplomatiques" className="text-gray-600 hover:text-gray-900">
                FAQ
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-gray-900">
                CGU
              </Link>
              <Link href="/cookies" className="text-gray-600 hover:text-gray-900">
                Cookies
              </Link>
            </div>

            <div className="text-xs text-gray-500">
              <p>© 2024 Diplo Scanner. Outil éducatif basé sur des sources officielles.</p>
              <p className="mt-1">Données issues du Ministère des Affaires étrangères français et du DFAE suisse.</p>
            </div>
          </div>
        </footer>
      </div>
      <CookieConsent />
      <OfflineIndicator />
    </div>
  )
}
