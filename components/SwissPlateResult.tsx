"use client"

import { ArrowLeft, Shield, Info, MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { SwissPlateMatch, SwissPlateComponents } from "../utils/swiss-plate-validator"
import { useFavorites } from "../hooks/useFavorites"
import { useState } from "react"

interface SwissPlateResultProps {
  result: SwissPlateMatch
  scannedPlate: string
  onBack: () => void
}

// ==================================================================
// SOUS-COMPOSANT : Plaque Suisse Stylisée
// ==================================================================
const StylizedSwissPlate = ({ components }: { components: SwissPlateComponents }) => {
  const { statusPrefix, canton, serialNumber, identificationCode } = components

  const prefixStyle = {
    CD: "bg-blue-600 text-white",
    AT: "bg-green-600 text-white",
    CC: "bg-gray-700 text-white",
  }[statusPrefix]

  return (
    // =======================================================
    // MODIFICATION : Hauteur et espacements réduits
    // =======================================================
    <div className="flex justify-center items-center my-4">
      <div className="inline-flex items-stretch bg-white border-2 border-black rounded-lg p-1 font-mono text-black shadow-lg text-3xl h-16">
        <div className={`px-3 flex items-center justify-center rounded-l-md ${prefixStyle}`}>{statusPrefix}</div>

        {canton && (
          <div className="flex flex-col items-center justify-center border-l-2 border-r-2 border-gray-400 px-3 mx-1">
            <span className="font-bold">{canton}</span>
          </div>
        )}

        <div className={`flex items-center px-3 ${!canton ? "border-l-2 border-gray-400" : ""}`}>
          <span className="font-bold tracking-wide">{serialNumber}</span>
          <span className="mx-1.5 text-gray-400 font-sans text-4xl"> • </span>
          <span className="font-bold tracking-wide">{identificationCode}</span>
        </div>
      </div>
    </div>
  )
}

export default function SwissPlateResult({ result, scannedPlate, onBack }: SwissPlateResultProps) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()
  const [isAddingToFavorites, setIsAddingToFavorites] = useState(false)
  const favoriteStatus = isFavorite(scannedPlate)

  const handleToggleFavorite = () => {
    setIsAddingToFavorites(true)
    if (favoriteStatus) {
      // Trouver et supprimer des favoris
      const favorites = JSON.parse(localStorage.getItem("diplo-scanner-favorites") || "[]")
      const favoriteToRemove = favorites.find((fav: any) => fav.plateText === scannedPlate.trim().toUpperCase())
      if (favoriteToRemove) {
        removeFromFavorites(favoriteToRemove.id)
      }
    } else {
      const success = addToFavorites(scannedPlate, result, "swiss")
      if (!success) {
        alert("Cette plaque est déjà dans vos favoris")
      }
    }
    setIsAddingToFavorites(false)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h2 className="text-lg font-semibold">Résultat - Plaque suisse</h2>
      </div>

      <StylizedSwissPlate components={result.plateComponents} />

      {/* Informations du pays/organisation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">{result.country.flagEmoji}</span>
            <div>
              <h3 className="text-lg">{result.country.countryName}</h3>
              <p className="text-sm text-muted-foreground font-normal">{result.plateInfo.missionType}</p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Statut</p>
              <p className="font-medium">{result.plateInfo.statusDescription}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Code</p>
              <Badge className="font-mono">{result.country.code}</Badge>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">Région</p>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span>{result.country.region}</span>
              <Badge variant="outline" className="text-xs">
                {result.country.type === "country"
                  ? "Pays"
                  : result.country.type === "organization"
                    ? "Organisation"
                    : "Spécial"}
              </Badge>
            </div>
          </div>

          {/* Décomposition de la plaque */}
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-medium text-red-800 mb-2 flex items-center gap-2">
              <Info className="w-4 h-4" />
              Décomposition de la plaque
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-red-700">Préfixe de statut:</span>
                <span className="font-mono bg-white px-2 py-1 rounded">{result.plateComponents.statusPrefix}</span>
              </div>
              {result.plateComponents.canton && (
                <div className="flex justify-between">
                  <span className="text-red-700">Canton:</span>
                  <span className="font-mono bg-white px-2 py-1 rounded">{result.plateComponents.canton}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-red-700">Numéro de série:</span>
                <span className="font-mono bg-white px-2 py-1 rounded">{result.plateComponents.serialNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-red-700">Code d'identification:</span>
                <span className="font-mono bg-white px-2 py-1 rounded">
                  {result.plateComponents.identificationCode}
                </span>
              </div>
            </div>
          </div>

          {/* Privilèges et immunités */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2 flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Privilèges et immunités
            </h4>
            <ul className="space-y-1 text-sm text-blue-700">
              {result.plateInfo.privileges.map((privilege, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{privilege}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          {/* Actions avec bouton favoris */}
          <div className="flex gap-2">
            <Button
              onClick={handleToggleFavorite}
              variant="outline"
              className={`flex-1 ${favoriteStatus ? "bg-yellow-50 border-yellow-300 text-yellow-700" : ""}`}
              disabled={isAddingToFavorites}
            >
              <Star className={`w-4 h-4 mr-2 ${favoriteStatus ? "fill-current" : ""}`} />
              {favoriteStatus ? "Retirer des favoris" : "Ajouter aux favoris"}
            </Button>
            <Button onClick={onBack} className="flex-1">
              Nouveau scan
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
