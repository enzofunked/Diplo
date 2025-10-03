"use client"
import { useState } from "react"
import type React from "react"

import { ArrowLeft, Search, Trash2, AlertCircle, BarChart3, Filter, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useHistory, type HistoryEntry } from "../hooks/useHistory"
import { useFavorites } from "../hooks/useFavorites"
import { isSwissPlate } from "../utils/plateValidator"
import type { FrenchPlateMatch } from "@/utils/french-plate-validator"
import type { SwissPlateMatch } from "@/utils/swiss-plate-validator"

const MiniPlate = ({ entry }: { entry: HistoryEntry }) => {
  if (!entry.result) {
    return (
      <div
        id={`mini-plate-failed-${entry.id}`}
        className="bg-gray-300 py-1 px-3 rounded-md text-center border-2 border-gray-400 shadow-sm mb-2 inline-block"
      >
        <div className="font-mono text-lg font-bold text-gray-500 line-through">{entry.plateText}</div>
      </div>
    )
  }

  if (entry.system === "swiss") {
    const result = entry.result as SwissPlateMatch
    const { statusPrefix, canton, serialNumber, identificationCode } = result.plateComponents
    const prefixStyle = {
      CD: "bg-blue-600 text-white",
      AT: "bg-green-600 text-white",
      CC: "bg-gray-700 text-white",
    }[statusPrefix]
    return (
      <div
        id={`mini-plate-swiss-${entry.id}`}
        className="inline-flex items-stretch bg-white border border-black rounded-md p-0 font-mono text-black shadow-sm text-lg whitespace-nowrap"
      >
        <div className={`px-1.5 flex items-center rounded-l-md ${prefixStyle}`}>{statusPrefix}</div>
        {canton && (
          <div className="flex flex-col items-center justify-center border-l border-r border-gray-300 px-1.5 mx-0.5">
            <span className="text-sm font-bold leading-none">{canton}</span>
          </div>
        )}
        <div className="px-1.5 py-1">
          <span className="font-bold">{serialNumber}</span>
          <span className="mx-0.5"> • </span>
          <span className="font-bold">{identificationCode}</span>
        </div>
      </div>
    )
  }

  const result = entry.result as FrenchPlateMatch
  const { colorScheme } = result.plateInfo
  const textColor = colorScheme === "orange" ? "text-orange-300" : "text-white"
  const borderColor = colorScheme === "orange" ? "border-orange-400" : "border-slate-200"
  return (
    <div
      id={`mini-plate-french-${entry.id}`}
      className={`bg-gradient-to-r from-green-600 to-green-700 py-1 px-3 rounded-lg text-center border-2 ${borderColor} shadow-sm mb-2 inline-block`}
    >
      <div className={`font-mono text-lg font-bold ${textColor}`}>{entry.plateText}</div>
    </div>
  )
}

interface HistoryViewProps {
  onBack: () => void
  onSelectEntry: (entry: HistoryEntry) => void
}

export default function HistoryView({ onBack, onSelectEntry }: HistoryViewProps) {
  const { history, removeFromHistory, clearHistory, filterHistory, getHistoryStats } = useHistory()
  const { addToFavorites, isFavorite } = useFavorites()
  const [searchTerm, setSearchTerm] = useState("")
  const [showOnlySuccessful, setShowOnlySuccessful] = useState(false)
  const filteredHistory = filterHistory(searchTerm, showOnlySuccessful)
  const stats = getHistoryStats()

  const formatDate = (date: Date) => {
    try {
      const now = new Date()
      const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60)
      if (diffInHours < 24) {
        const diffInMinutes = Math.floor(diffInHours * 60)
        if (diffInMinutes < 1) return "À l'instant"
        return diffInMinutes < 60 ? `Il y a ${diffInMinutes} min` : `Il y a ${Math.floor(diffInHours)}h`
      } else {
        return date.toLocaleDateString("fr-FR", { day: "numeric", month: "short" })
      }
    } catch (error) {
      return "Date inconnue"
    }
  }

  const handleAddToFavorites = (entry: HistoryEntry, e: React.MouseEvent) => {
    e.stopPropagation()
    if (entry.result) {
      const success = addToFavorites(entry.plateText, entry.result, entry.system)
      if (!success) {
        alert("Cette plaque est déjà dans vos favoris")
      }
    }
  }

  return (
    <div id="history-view" className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-4">
          <div id="history-header" className="flex items-center gap-2">
            <Button id="history-back-button" variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <h2 id="history-title" className="text-lg font-semibold">
              Historique des scans
            </h2>
          </div>

          <Card id="history-stats-card">
            <CardHeader className="pb-3">
              <CardTitle id="history-stats-title" className="flex items-center gap-2 text-base">
                <BarChart3 className="w-4 h-4" />
                Statistiques
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div id="history-stats-grid" className="grid grid-cols-3 gap-2 text-center">
                <div id="history-stats-total" className="p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
                  <div className="text-xs text-blue-600">Scans Total</div>
                </div>
                <div id="history-stats-french" className="p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{stats.frenchScans}</div>
                  <div className="text-xs text-green-600">Plaques FR</div>
                </div>
                <div id="history-stats-swiss" className="p-3 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">{stats.swissScans}</div>
                  <div className="text-xs text-red-600">Plaques CH</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card id="history-controls-card">
            <CardContent className="p-4 space-y-3">
              <div className="relative">
                <Search
                  id="history-search-icon"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4"
                />
                <Input
                  id="history-search-input"
                  placeholder="Rechercher..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center justify-between">
                <Button
                  id="history-filter-button"
                  variant={showOnlySuccessful ? "default" : "outline"}
                  size="sm"
                  onClick={() => setShowOnlySuccessful(!showOnlySuccessful)}
                >
                  <Filter className="w-3 h-3 mr-1" />
                  {showOnlySuccessful ? "Tous" : "Réussis"}
                </Button>
                {history.length > 0 && (
                  <Button
                    id="history-clear-button"
                    variant="outline"
                    size="sm"
                    onClick={clearHistory}
                    className="text-red-600 bg-transparent"
                  >
                    <Trash2 className="w-3 h-3 mr-1" />
                    Vider
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          <div id="history-entries" className="space-y-3">
            {filteredHistory.length === 0 ? (
              <Card id="history-empty-card">
                <CardContent className="p-8 text-center">
                  <h3 className="font-medium">Aucun scan</h3>
                  <p className="text-sm text-muted-foreground">L'historique est vide.</p>
                </CardContent>
              </Card>
            ) : (
              filteredHistory.map((entry) => (
                <Card
                  key={entry.id}
                  id={`history-entry-${entry.id}`}
                  className="cursor-pointer hover:shadow-md"
                  onClick={() => onSelectEntry(entry)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 space-y-2">
                        <MiniPlate entry={entry} />
                        <div className="flex items-center gap-2">
                          {entry.result ? (
                            <>
                              <span className="text-xl">
                                {isSwissPlate(entry.result)
                                  ? entry.result.country.flagEmoji
                                  : (entry.result as FrenchPlateMatch).country.flagEmoji}
                              </span>
                              <div>
                                <p className="font-medium text-sm">
                                  {isSwissPlate(entry.result)
                                    ? entry.result.country.countryName
                                    : (entry.result as FrenchPlateMatch).country.countryName}
                                </p>
                                <p className="text-xs text-muted-foreground">{formatDate(entry.timestamp)}</p>
                              </div>
                            </>
                          ) : (
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <AlertCircle className="w-4 h-4" />
                              <span className="text-sm">Non reconnu</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        {entry.result ? (
                          <Badge
                            id={`history-badge-success-${entry.id}`}
                            variant="secondary"
                            className="bg-green-100 text-green-800"
                          >
                            ✓ Identifiée
                          </Badge>
                        ) : (
                          <Badge
                            id={`history-badge-failed-${entry.id}`}
                            variant="destructive"
                            className="bg-red-100 text-red-800"
                          >
                            ✗ Échec
                          </Badge>
                        )}
                        <div className="flex gap-1">
                          {entry.result && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className={`h-8 w-8 ${isFavorite(entry.plateText) ? "text-yellow-600" : "text-muted-foreground"}`}
                              onClick={(e) => handleAddToFavorites(entry, e)}
                              disabled={isFavorite(entry.plateText)}
                            >
                              <Star className={`w-4 h-4 ${isFavorite(entry.plateText) ? "fill-current" : ""}`} />
                            </Button>
                          )}
                          <Button
                            id={`history-delete-${entry.id}`}
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground"
                            onClick={(e) => {
                              e.stopPropagation()
                              removeFromHistory(entry.id)
                            }}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
