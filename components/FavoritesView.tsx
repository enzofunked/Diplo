"use client"

import { useState } from "react"
import { ArrowLeft, Search, Trash2, Star, Edit3, Save, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { useFavorites, type FavoriteEntry } from "../hooks/useFavorites"
import { isSwissPlate } from "../utils/plateValidator"
import type { FrenchPlateMatch } from "@/utils/french-plate-validator"
import type { SwissPlateMatch } from "@/utils/swiss-plate-validator"

const MiniPlate = ({ entry }: { entry: FavoriteEntry }) => {
  if (entry.system === "swiss") {
    const result = entry.result as SwissPlateMatch
    const { statusPrefix, canton, serialNumber, identificationCode } = result.plateComponents
    const prefixStyle = {
      CD: "bg-blue-600 text-white",
      AT: "bg-green-600 text-white",
      CC: "bg-gray-700 text-white",
    }[statusPrefix]
    return (
      <div className="inline-flex items-stretch bg-white border border-black rounded-md p-0 font-mono text-black shadow-sm text-lg whitespace-nowrap">
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
      className={`bg-gradient-to-r from-green-600 to-green-700 py-1 px-3 rounded-lg text-center border-2 ${borderColor} shadow-sm mb-2 inline-block`}
    >
      <div className={`font-mono text-lg font-bold ${textColor}`}>{entry.plateText}</div>
    </div>
  )
}

interface FavoritesViewProps {
  onBack: () => void
  onSelectEntry: (entry: FavoriteEntry) => void
}

export default function FavoritesView({ onBack, onSelectEntry }: FavoritesViewProps) {
  const { favorites, removeFromFavorites, clearFavorites, filterFavorites, updateFavoriteNote } = useFavorites()
  const [searchTerm, setSearchTerm] = useState("")
  const [editingNote, setEditingNote] = useState<string | null>(null)
  const [noteText, setNoteText] = useState("")
  const filteredFavorites = filterFavorites(searchTerm)

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

  const handleEditNote = (favoriteId: string, currentNote?: string) => {
    setEditingNote(favoriteId)
    setNoteText(currentNote || "")
  }

  const handleSaveNote = (favoriteId: string) => {
    updateFavoriteNote(favoriteId, noteText.trim())
    setEditingNote(null)
    setNoteText("")
  }

  const handleCancelEdit = () => {
    setEditingNote(null)
    setNoteText("")
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <h2 className="text-lg font-semibold">Favoris</h2>
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
              <Star className="w-3 h-3 mr-1 fill-current" />
              {favorites.length}
            </Badge>
          </div>

          <Card>
            <CardContent className="p-4 space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Rechercher dans les favoris..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              {favorites.length > 0 && (
                <div className="flex justify-end">
                  <Button variant="outline" size="sm" onClick={clearFavorites} className="text-red-600 bg-transparent">
                    <Trash2 className="w-3 h-3 mr-1" />
                    Vider les favoris
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="space-y-3">
            {filteredFavorites.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <Star className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <h3 className="font-medium">Aucun favori</h3>
                  <p className="text-sm text-muted-foreground">
                    {favorites.length === 0
                      ? "Ajoutez des plaques à vos favoris depuis les résultats de scan."
                      : "Aucun favori ne correspond à votre recherche."}
                  </p>
                </CardContent>
              </Card>
            ) : (
              filteredFavorites.map((entry) => (
                <Card key={entry.id} className="cursor-pointer hover:shadow-md" onClick={() => onSelectEntry(entry)}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 space-y-2">
                        <MiniPlate entry={entry} />
                        <div className="flex items-center gap-2">
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
                        </div>

                        {/* Note section */}
                        <div className="mt-2">
                          {editingNote === entry.id ? (
                            <div className="space-y-2" onClick={(e) => e.stopPropagation()}>
                              <Textarea
                                value={noteText}
                                onChange={(e) => setNoteText(e.target.value)}
                                placeholder="Ajouter une note..."
                                className="text-sm"
                                rows={2}
                              />
                              <div className="flex gap-2">
                                <Button size="sm" onClick={() => handleSaveNote(entry.id)} className="h-7">
                                  <Save className="w-3 h-3 mr-1" />
                                  Sauver
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={handleCancelEdit}
                                  className="h-7 bg-transparent"
                                >
                                  <X className="w-3 h-3 mr-1" />
                                  Annuler
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <div className="flex items-start gap-2">
                              {entry.note ? (
                                <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded flex-1">{entry.note}</p>
                              ) : (
                                <p className="text-sm text-gray-400 italic flex-1">Aucune note</p>
                              )}
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  handleEditNote(entry.id, entry.note)
                                }}
                                className="h-7 w-7 p-0"
                              >
                                <Edit3 className="w-3 h-3" />
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                          <Star className="w-3 h-3 mr-1 fill-current" />
                          Favori
                        </Badge>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground"
                          onClick={(e) => {
                            e.stopPropagation()
                            removeFromFavorites(entry.id)
                          }}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
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
