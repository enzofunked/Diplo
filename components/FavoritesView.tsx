"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Trash2, Search, ArrowLeft } from "lucide-react"
import { useFavorites } from "@/hooks/useFavorites"

interface FavoriteItem {
  id: string
  plateNumber: string
  country: string
  system: "french" | "swiss"
  timestamp: number
  diplomaticInfo?: {
    country: string
    status: string
    code: string
  }
}

interface FavoritesViewProps {
  onBack: () => void
}

export default function FavoritesView({ onBack }: FavoritesViewProps) {
  const { favorites, removeFavorite } = useFavorites()
  const [searchTerm, setSearchTerm] = useState("")

  const filteredFavorites = favorites.filter(
    (favorite: FavoriteItem) =>
      favorite.plateNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      favorite.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      favorite.diplomaticInfo?.country.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleRemoveFavorite = (id: string) => {
    removeFavorite(id)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour
        </Button>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Heart className="w-6 h-6 text-red-500" />
            Mes Favoris
          </h2>
          <p className="text-gray-600">
            {favorites.length} plaque{favorites.length !== 1 ? "s" : ""} favorite{favorites.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Rechercher dans les favoris..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Favorites List */}
      {filteredFavorites.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              {searchTerm ? "Aucun résultat trouvé" : "Aucun favori enregistré"}
            </h3>
            <p className="text-gray-500">
              {searchTerm
                ? "Essayez avec d'autres termes de recherche"
                : "Commencez à scanner des plaques pour les ajouter à vos favoris"}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredFavorites.map((favorite: FavoriteItem) => (
            <Card key={favorite.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-bold text-blue-600">{favorite.plateNumber}</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveFavorite(favorite.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Système:</span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        favorite.system === "french" ? "bg-blue-100 text-blue-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {favorite.system === "french" ? "Français" : "Suisse"}
                    </span>
                  </div>

                  {favorite.diplomaticInfo && (
                    <>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Pays:</span>
                        <span className="text-sm font-medium">{favorite.diplomaticInfo.country}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Statut:</span>
                        <span className="text-sm font-medium">{favorite.diplomaticInfo.status}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Code:</span>
                        <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                          {favorite.diplomaticInfo.code}
                        </span>
                      </div>
                    </>
                  )}

                  <div className="text-xs text-gray-500 pt-2 border-t">
                    Ajouté le {new Date(favorite.timestamp).toLocaleDateString("fr-FR")}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
