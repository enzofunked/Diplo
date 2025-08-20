"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import FavoritesView from "../../components/FavoritesView"
import FrenchPlateResult from "../../components/FrenchPlateResult"
import SwissPlateResult from "../../components/SwissPlateResult"
import type { FavoriteEntry } from "../../hooks/useFavorites"
import { isSwissPlate } from "../../utils/plateValidator"
import type { FrenchPlateMatch } from "../../utils/french-plate-validator"
import type { SwissPlateMatch } from "../../utils/swiss-plate-validator"
import Link from "next/link"

type ViewState = "list" | "result"

export default function FavoritesPageClient() {
  const [currentView, setCurrentView] = useState<ViewState>("list")
  const [selectedEntry, setSelectedEntry] = useState<FavoriteEntry | null>(null)

  const handleSelectEntry = (entry: FavoriteEntry) => {
    setSelectedEntry(entry)
    setCurrentView("result")
  }

  const handleBack = () => {
    if (currentView === "result") {
      setCurrentView("list")
      setSelectedEntry(null)
    }
  }

  const renderContent = () => {
    switch (currentView) {
      case "result":
        return selectedEntry ? (
          <div>
            {isSwissPlate(selectedEntry.result) ? (
              <SwissPlateResult
                result={selectedEntry.result as SwissPlateMatch}
                scannedPlate={selectedEntry.plateText}
                onBack={handleBack}
              />
            ) : (
              <FrenchPlateResult
                result={selectedEntry.result as FrenchPlateMatch}
                scannedPlate={selectedEntry.plateText}
                onBack={handleBack}
              />
            )}
          </div>
        ) : null

      default:
        return <FavoritesView onBack={() => {}} onSelectEntry={handleSelectEntry} />
    }
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

        {currentView === "list" && (
          <div className="mb-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        )}

        <div className="pb-8">{renderContent()}</div>
      </div>
    </div>
  )
}
