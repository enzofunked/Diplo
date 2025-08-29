"use client"

import { useState } from "react"
import { Info, History, BookOpen, ArrowLeft, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import EnhancedFrenchScanner from "../components/EnhancedFrenchScanner"
import FrenchPlateResult from "../components/FrenchPlateResult"
import FrenchSystemInfo from "../components/FrenchSystemInfo"
import TermsOfService from "../components/TermsOfService"
import type { FrenchPlateMatch } from "../utils/french-plate-validator"
import HistoryView from "../components/HistoryView"
import FavoritesView from "../components/FavoritesView"
import { useHistory, type HistoryEntry } from "../hooks/useHistory"
import { useFavorites, type FavoriteEntry } from "../hooks/useFavorites"
import SwissScanner from "../components/SwissScanner"
import SwissPlateResult from "../components/SwissPlateResult"
import SystemSelector from "../components/SystemSelector"
import { validateDiplomaticPlate, isSwissPlate } from "../utils/plateValidator"
import type { SwissPlateMatch } from "../utils/swiss-plate-validator"
import SwissSystemInfo from "../components/SwissSystemInfo"
import SwissCodeList from "../components/SwissCodeList"
import FrenchCodeList from "../components/FrenchCodeList"
import Link from "next/link"

type AppState =
  | "home"
  | "french"
  | "swiss"
  | "result"
  | "about"
  | "system-info"
  | "history"
  | "favorites"
  | "terms"
  | "swiss-system-info"
  | "swiss-codes"
  | "french-codes"

// Fonction pour envoyer des événements à Google Tag Manager
const sendGTMEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...parameters,
    })
  }
}

export default function DiploScanner() {
  const [currentState, setCurrentState] = useState<AppState>("home")
  const [selectedSystem, setSelectedSystem] = useState<"french" | "swiss" | null>(null)
  const [scanResult, setScanResult] = useState<FrenchPlateMatch | SwissPlateMatch | null>(null)
  const [scannedPlate, setScannedPlate] = useState("")
  const [isScanning, setIsScanning] = useState(false)
  const { addToHistory } = useHistory()
  const { favorites } = useFavorites()

  const handleSystemSelect = (system: "french" | "swiss") => {
    setSelectedSystem(system)
    setCurrentState(system)

    // Envoyer événement GTM
    sendGTMEvent("system_selected", {
      system_type: system,
      timestamp: new Date().toISOString(),
    })
  }

  const handleScan = async (plateText: string) => {
    if (!selectedSystem) return
    setIsScanning(true)
    setScannedPlate(plateText)

    // Envoyer événement GTM pour le scan
    sendGTMEvent("plate_scan_attempt", {
      system_type: selectedSystem,
      plate_text: plateText,
      timestamp: new Date().toISOString(),
    })

    try {
      // @ts-ignore
      const result = validateDiplomaticPlate(plateText, selectedSystem)

      if (result) {
        setScanResult(result)
        setCurrentState("result")
        addToHistory(plateText, result, selectedSystem)

        // Envoyer événement GTM pour le succès
        sendGTMEvent("plate_scan_success", {
          system_type: selectedSystem,
          plate_text: plateText,
          country_code: result.country?.code,
          country_name: result.country?.name,
          timestamp: new Date().toISOString(),
        })
      } else {
        alert(`Plaque non reconnue: "${plateText}"\n\nVérifiez le format.`)
        addToHistory(plateText, null, selectedSystem)

        // Envoyer événement GTM pour l'échec
        sendGTMEvent("plate_scan_failure", {
          system_type: selectedSystem,
          plate_text: plateText,
          error_type: "not_recognized",
          timestamp: new Date().toISOString(),
        })
      }
    } catch (error) {
      console.error("Erreur validation:", error)
      alert("Erreur lors de l'analyse. Réessayez.")

      // Envoyer événement GTM pour l'erreur
      sendGTMEvent("plate_scan_error", {
        system_type: selectedSystem,
        plate_text: plateText,
        error_type: "validation_error",
        error_message: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      })
    } finally {
      setIsScanning(false)
    }
  }

  const handleBack = () => {
    const previousState = currentState

    if (
      [
        "about",
        "system-info",
        "history",
        "favorites",
        "terms",
        "swiss-system-info",
        "swiss-codes",
        "french-codes",
      ].includes(currentState) &&
      selectedSystem
    ) {
      setCurrentState(selectedSystem)
    } else if (currentState === "result" && selectedSystem) {
      setCurrentState(selectedSystem)
    } else {
      setCurrentState("home")
      setSelectedSystem(null)
    }
    setScanResult(null)
    setScannedPlate("")

    // Envoyer événement GTM pour la navigation
    sendGTMEvent("navigation_back", {
      from_state: previousState,
      to_state: selectedSystem || "home",
      timestamp: new Date().toISOString(),
    })
  }

  const handleHistoryEntrySelect = (entry: HistoryEntry) => {
    if (entry.result) {
      setScanResult(entry.result)
      setScannedPlate(entry.plateText)
      setSelectedSystem(entry.system)
      setCurrentState("result")

      // Envoyer événement GTM
      sendGTMEvent("history_entry_selected", {
        system_type: entry.system,
        plate_text: entry.plateText,
        timestamp: new Date().toISOString(),
      })
    } else {
      alert(`La plaque "${entry.plateText}" n'a pas été reconnue.`)
    }
  }

  const handleFavoriteEntrySelect = (entry: FavoriteEntry) => {
    setScanResult(entry.result)
    setScannedPlate(entry.plateText)
    setSelectedSystem(entry.system)
    setCurrentState("result")

    // Envoyer événement GTM
    sendGTMEvent("favorite_entry_selected", {
      system_type: entry.system,
      plate_text: entry.plateText,
      timestamp: new Date().toISOString(),
    })
  }

  const handleStateChange = (newState: AppState) => {
    const previousState = currentState
    setCurrentState(newState)

    // Envoyer événement GTM pour le changement d'état
    sendGTMEvent("state_change", {
      from_state: previousState,
      to_state: newState,
      system_type: selectedSystem,
      timestamp: new Date().toISOString(),
    })
  }

  const renderContent = () => {
    switch (currentState) {
      case "home":
        return (
          <div id="home-container" className="space-y-6">
            <SystemSelector onSelectSystem={handleSystemSelect} />

            <div id="navigation-buttons" className="grid grid-cols-2 gap-3">
              <Link href="/history">
                <Button
                  id="history-button"
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2 border-gray-300 hover:bg-gray-100 bg-white"
                >
                  <History className="w-4 h-4" />
                  Historique
                </Button>
              </Link>
              <Button
                id="favorites-button"
                variant="outline"
                onClick={() => handleStateChange("favorites")}
                className="w-full flex items-center justify-center gap-2 border-yellow-300 hover:bg-yellow-50 bg-white"
              >
                <Star className="w-4 h-4" />
                Favoris
              </Button>
            </div>
            <div id="offline-indicator" className="text-center">
              <div
                id="offline-badge"
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 border border-blue-300 rounded-md text-sm text-blue-800"
              >
                📱 Fonctionne sans internet
              </div>
            </div>
            <div className="mt-6 px-4 py-4 bg-white/80 rounded-lg border border-blue-200">
              <h2 className="text-lg font-semibold text-blue-900 mb-3 text-center">
                Scanner de Plaque Diplomatique France & Suisse
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed text-center">
                <strong>Identifiez instantanément les plaques diplomatiques françaises et suisses</strong> avec notre
                scanner gratuit. Découvrez le pays d'origine, le code diplomatique et les informations détaillées de
                chaque plaque CD. Notre outil reconnaît automatiquement les{" "}
                <strong>plaques diplomatiques françaises</strong> (format CD + numéro) et les{" "}
                <strong>plaques diplomatiques suisses</strong> de Genève et Berne. Scanner plaque diplomatique en ligne,
                identification pays plaque CD, décodage plaque corps diplomatique - tout en un seul clic ! Fonctionne
                sans internet une fois chargé.
              </p>
            </div>
          </div>
        )

      case "french":
        return (
          <div id="french-scanner-container" className="space-y-6">
            <div id="french-header" className="flex items-center gap-2">
              <Button id="french-back-button" variant="ghost" size="sm" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇫🇷</span>
                <h2 id="french-title" className="text-lg font-semibold">
                  Scanner français
                </h2>
              </div>
            </div>
            <EnhancedFrenchScanner onScan={handleScan} isScanning={isScanning} />
            <div id="french-actions" className="grid grid-cols-2 gap-3">
              <Button
                id="french-decode-button"
                variant="outline"
                onClick={() => handleStateChange("system-info")}
                className="flex items-center gap-2 border-green-200 hover:bg-green-50"
              >
                <Info className="w-4 h-4" /> Décoder les plaques
              </Button>
              <Button
                id="french-codes-button"
                variant="outline"
                onClick={() => handleStateChange("french-codes")}
                className="flex items-center gap-2 border-green-200 hover:bg-green-50"
              >
                <BookOpen className="w-4 h-4" /> Tous les codes
              </Button>
            </div>
          </div>
        )

      case "swiss":
        return (
          <div id="swiss-scanner-container" className="space-y-6">
            <div id="swiss-header" className="flex items-center gap-2">
              <Button id="swiss-back-button" variant="ghost" size="sm" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇨🇭</span>
                <h2 id="swiss-title" className="text-lg font-semibold">
                  Scanner suisse
                </h2>
              </div>
            </div>
            <SwissScanner onScan={handleScan} isScanning={isScanning} />
            <div id="swiss-actions" className="grid grid-cols-2 gap-3">
              <Button
                id="swiss-decode-button"
                variant="outline"
                onClick={() => handleStateChange("swiss-system-info")}
                className="flex items-center gap-2 border-red-200 hover:bg-red-50"
              >
                <Info className="w-4 h-4" /> Décoder les plaques
              </Button>
              <Button
                id="swiss-codes-button"
                variant="outline"
                onClick={() => handleStateChange("swiss-codes")}
                className="flex items-center gap-2 border-red-200 hover:bg-red-50"
              >
                <BookOpen className="w-4 h-4" /> Tous les codes
              </Button>
            </div>
          </div>
        )
      case "result":
        return scanResult ? (
          <div id="result-container">
            {isSwissPlate(scanResult) ? (
              <SwissPlateResult result={scanResult} scannedPlate={scannedPlate} onBack={handleBack} />
            ) : (
              <FrenchPlateResult
                result={scanResult as FrenchPlateMatch}
                scannedPlate={scannedPlate}
                onBack={handleBack}
              />
            )}
          </div>
        ) : null
      case "system-info":
        return <FrenchSystemInfo onBack={handleBack} />
      case "swiss-system-info":
        return <SwissSystemInfo onBack={handleBack} />
      case "swiss-codes":
        return <SwissCodeList onBack={handleBack} />
      case "french-codes":
        return <FrenchCodeList onBack={handleBack} />
      case "terms":
        return <TermsOfService onBack={handleBack} />
      case "about":
        return <FrenchCodeList onBack={handleBack} />
      case "history":
        return <HistoryView onBack={handleBack} onSelectEntry={handleHistoryEntrySelect} />
      case "favorites":
        return <FavoritesView onBack={handleBack} onSelectEntry={handleFavoriteEntrySelect} />

      default:
        return null
    }
  }

  return (
    <div id="app-container" className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div id="main-container" className="container max-w-md mx-auto p-4">
        <div id="header" className="text-center mb-8 pt-8">
          <div id="logo-container" className="flex items-center justify-center gap-2 mb-2">
            <div id="logo-icon" className="text-3xl">
              🌍
            </div>
            <h1 id="app-title" className="text-3xl font-bold text-blue-900">
              Diplo Scanner
            </h1>
          </div>
          <p id="app-subtitle" className="text-blue-700">
            Plaques diplomatiques France & Suisse
          </p>
        </div>
        <div id="content-container" className="pb-8">
          {renderContent()}
        </div>
      </div>

      <footer id="footer" className="bg-white/60 border-t border-gray-200 py-4 mt-auto">
        <div id="footer-content" className="text-center space-y-2">
          <p id="footer-tagline" className="text-xs text-gray-500">
            Fait avec ❤️
          </p>
          <div id="footer-links" className="flex justify-center gap-4">
            <Link href="/terms">
              <button
                id="footer-terms-link"
                className="text-xs text-gray-500 hover:text-gray-700 transition-colors underline"
              >
                Conditions d'Utilisation
              </button>
            </Link>
            <Link href="/about">
              <button
                id="footer-about-link"
                className="text-xs text-gray-500 hover:text-gray-700 transition-colors underline"
              >
                À propos
              </button>
            </Link>
            <Link href="/help">
              <button
                id="footer-help-link"
                className="text-xs text-gray-500 hover:text-gray-700 transition-colors underline"
              >
                Aide
              </button>
            </Link>
            <Link href="/faq-plaques-diplomatiques">
              <button
                id="footer-faq-link"
                className="text-xs text-gray-500 hover:text-gray-700 transition-colors underline"
              >
                FAQ
              </button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Déclaration TypeScript pour window.dataLayer
declare global {
  interface Window {
    dataLayer: any[]
  }
}
