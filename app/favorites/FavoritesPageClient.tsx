"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Trash2, Search, Camera, History } from "lucide-react"
import { useFavorites } from "@/hooks/useFavorites"
import { useHistory } from "@/hooks/useHistory"
import Link from "next/link"

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

export default function FavoritesPageClient() {
  const { favorites, removeFavorite } = useFavorites()
  const { addToHistory } = useHistory()
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

  const handleViewDetails = (favorite: FavoriteItem) => {
    // Ajouter à l'historique quand on consulte les détails
    addToHistory({
      plateNumber: favorite.plateNumber,
      country: favorite.country,
      system: favorite.system,
      timestamp: Date.now(),
      diplomaticInfo: favorite.diplomaticInfo,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-8 h-8 text-red-500" />
            <h1 className="text-3xl font-bold text-gray-800">Mes Favoris</h1>
          </div>
          <p className="text-gray-600">Retrouvez toutes vos plaques diplomatiques favorites</p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 mb-6 justify-center">
          <Link href="/">
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <Camera className="w-4 h-4" />
              Scanner
            </Button>
          </Link>
          <Link href="/history">
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <History className="w-4 h-4" />
              Historique
            </Button>
          </Link>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Rechercher dans les favoris..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Favorites List */}
        {filteredFavorites.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                {searchTerm ? "Aucun résultat trouvé" : "Aucun favori enregistré"}
              </h3>
              <p className="text-gray-500 mb-6">
                {searchTerm
                  ? "Essayez avec d'autres termes de recherche"
                  : "Commencez à scanner des plaques pour les ajouter à vos favoris"}
              </p>
              {!searchTerm && (
                <Link href="/">
                  <Button className="flex items-center gap-2 mx-auto">
                    <Camera className="w-4 h-4" />
                    Commencer à scanner
                  </Button>
                </Link>
              )}
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

                  <Button
                    className="w-full mt-4 bg-transparent"
                    variant="outline"
                    onClick={() => handleViewDetails(favorite)}
                  >
                    Voir les détails
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Stats */}
        {favorites.length > 0 && (
          <Card className="mt-8">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Statistiques</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{favorites.length}</div>
                    <div className="text-sm text-gray-600">Total favoris</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">
                      {favorites.filter((f: FavoriteItem) => f.system === "french").length}
                    </div>
                    <div className="text-sm text-gray-600">Plaques françaises</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-600">
                      {favorites.filter((f: FavoriteItem) => f.system === "swiss").length}
                    </div>
                    <div className="text-sm text-gray-600">Plaques suisses</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">
                      {new Set(favorites.map((f: FavoriteItem) => f.diplomaticInfo?.country).filter(Boolean)).size}
                    </div>
                    <div className="text-sm text-gray-600">Pays différents</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
