"use client"

import { ArrowLeft, Flag, Info, Palette, Shield, Building, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { FrenchPlateMatch } from "../utils/french-plate-validator"
import { getPlateColorInfo } from "../utils/french-plate-validator"
import { useFavorites } from "../hooks/useFavorites"
import { useState } from "react"

interface FrenchPlateResultProps {
  result: FrenchPlateMatch
  scannedPlate: string
  onBack: () => void
}

// ==================================================================
// COMPOSANT RÉUTILISABLE : Affichage de la Plaque
// ==================================================================
const PlateDisplay = ({ result, plateText }: { result: FrenchPlateMatch; plateText: string }) => {
  // Fonction pour formater le texte de la plaque avec des espaces
  const formatPlateText = () => {
    if (result?.plateComponents) {
      const { countryCode, status, serialNumber, prefix, suffix, departmentCode } = result.plateComponents
      const parts = []
      if (prefix) parts.push(prefix)
      if (countryCode) parts.push(countryCode)
      if (status) parts.push(status)
      if (serialNumber) {
        let serial = serialNumber
        if (departmentCode) serial += `.${departmentCode}`
        parts.push(serial)
      }
      if (suffix) parts.push(suffix)
      return parts.join(" ")
    }
    return plateText
  }

  const { colorScheme } = result.plateInfo
  const textColor = colorScheme === "orange" ? "text-orange-300" : "text-white"
  const borderColor = colorScheme === "orange" ? "border-orange-400" : "border-slate-200"

  return (
    <div
      className={`bg-gradient-to-r from-green-600 to-green-700 p-4 rounded-lg text-center border-2 ${borderColor} shadow-lg`}
    >
      <div className={`font-mono text-3xl font-bold ${textColor}`}>{formatPlateText()}</div>
    </div>
  )
}

export default function FrenchPlateResult({ result, scannedPlate, onBack }: FrenchPlateResultProps) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()
  const [isAddingToFavorites, setIsAddingToFavorites] = useState(false)
  const favoriteStatus = isFavorite(scannedPlate)

  const { country, plateComponents, plateInfo, confidence } = result

  // Protection contre les valeurs undefined
  const statusDescription = plateInfo?.statusDescription || "Statut inconnu"
  const colorScheme = plateInfo?.colorScheme || "white"
  const colorInfo = getPlateColorInfo(colorScheme)

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
      const success = addToFavorites(scannedPlate, result, "french")
      if (!success) {
        alert("Cette plaque est déjà dans vos favoris")
      }
    }
    setIsAddingToFavorites(false)
  }

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "CMD":
        return "bg-red-100 text-red-800"
      case "CD":
        return "bg-blue-100 text-blue-800"
      case "C":
        return "bg-green-100 text-green-800"
      case "K":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h2 className="text-lg font-semibold">Plaque diplomatique française</h2>
      </div>

      <Card>
        <CardHeader className="text-center pb-4">
          <div className="text-6xl mb-2">{country.flagEmoji}</div>
          <CardTitle className="text-2xl">{country.countryName}</CardTitle>
          <p className="text-muted-foreground">Capitale: {country.capital}</p>
          <Badge variant="secondary" className="bg-green-100 text-green-800 mt-2">
            <Flag className="w-3 h-3 mr-1" />
            Plaque diplomatique française
          </Badge>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* ======================================================= */}
          {/* MODIFICATION : Remplacement par le nouveau composant    */}
          {/* ======================================================= */}
          <PlateDisplay result={result} plateText={scannedPlate} />

          {/* Analyse de la plaque */}
          <Card className="bg-muted/50">
            <CardContent className="p-4 space-y-3">
              <h3 className="font-semibold flex items-center gap-2">
                <Info className="w-4 h-4" />
                Décomposition simple
              </h3>

              <div className="bg-white p-3 rounded-lg">
                <div className="grid grid-cols-3 gap-2 text-center mb-3">
                  <div className="p-2 bg-red-50 rounded">
                    <div className="font-mono text-lg font-bold text-red-600">{plateComponents.countryCode}</div>
                    <div className="text-xs text-red-600">Pays</div>
                  </div>
                  <div className="p-2 bg-blue-50 rounded">
                    <div className="font-mono text-lg font-bold text-blue-600">{plateComponents.status}</div>
                    <div className="text-xs text-blue-600">Statut</div>
                  </div>
                  <div className="p-2 bg-green-50 rounded">
                    <div className="font-mono text-lg font-bold text-green-600">{plateComponents.serialNumber}</div>
                    <div className="text-xs text-green-600">Numéro</div>
                  </div>
                </div>

                <div className="text-center text-sm">
                  <p>
                    <strong>{country.countryName}</strong> - {statusDescription.split(" (")[0]}
                  </p>
                </div>
              </div>

              {/* Éléments supplémentaires s'ils existent */}
              {(plateComponents.prefix || plateComponents.suffix || plateComponents.departmentCode) && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-600">Éléments supplémentaires :</h4>

                  {plateComponents.prefix && (
                    <div className="flex items-center gap-2 text-sm">
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                        {plateComponents.prefix}
                      </Badge>
                      <span>Délégation {plateInfo.organization || "internationale"}</span>
                    </div>
                  )}

                  {plateComponents.departmentCode && (
                    <div className="flex items-center gap-2 text-sm">
                      <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                        .{plateComponents.departmentCode}
                      </Badge>
                      <span>Consulat (département {plateComponents.departmentCode})</span>
                    </div>
                  )}

                  {plateComponents.suffix && (
                    <div className="flex items-center gap-2 text-sm">
                      <Badge
                        variant="secondary"
                        className={
                          plateComponents.suffix === "Z" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }
                      >
                        {plateComponents.suffix}
                      </Badge>
                      <span>{plateInfo.taxExemption === "exempt" ? "Exonéré de taxes" : "Non exonéré de taxes"}</span>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Informations sur le statut */}
          <div className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <Building className="w-4 h-4" />
              Statut diplomatique
            </h3>

            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="font-medium text-blue-800 mb-1">{statusDescription}</p>
              <div className="text-sm text-blue-700 space-y-1">
                {plateInfo.isDiplomatic && <p>• Véhicule d'ambassade ou de mission diplomatique</p>}
                {plateInfo.isConsular && (
                  <p>
                    • Véhicule de consulat{" "}
                    {plateComponents.departmentCode ? `(département ${plateComponents.departmentCode})` : ""}
                  </p>
                )}
                {plateInfo.organization && <p>• Délégation permanente auprès de {plateInfo.organization}</p>}
                {plateInfo.taxExemption === "exempt" && <p>• Exonéré de TVA, douanes et péages</p>}
              </div>
            </div>
          </div>

          {/* Informations sur les couleurs */}
          <div className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <Palette className="w-4 h-4" />
              Couleurs réglementaires
            </h3>

            <div className="grid grid-cols-1 gap-2 text-sm">
              <div className="flex items-center gap-2 p-2 bg-green-100 rounded">
                <div className="w-4 h-4 bg-green-600 rounded"></div>
                <span>{colorInfo.background}</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                <div
                  className={`w-4 h-4 rounded ${colorScheme === "orange" ? "bg-orange-500" : "bg-white border"}`}
                ></div>
                <span>{colorInfo.textColor}</span>
              </div>
              <p className="text-xs text-muted-foreground italic">{colorInfo.description}</p>
            </div>
          </div>

          {/* Confidence */}
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Fiabilité de l'analyse</span>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Shield className="w-3 h-3 mr-1" />
              {Math.round(confidence * 100)}%
            </Badge>
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
