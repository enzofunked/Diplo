"use client"

import { ExternalLink, MapPin, Phone, Globe, Share2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FrenchPlateResult from "./FrenchPlateResult"
import SwissPlateResult from "./SwissPlateResult"
import { isSwissPlate, isFrenchPlate, type PlateMatch } from "../utils/plateValidator"
import type { SwissPlateMatch } from "../utils/swiss-plate-validator"

interface ResultCardProps {
  result: PlateMatch
  scannedPlate: string
  onBack: () => void
}

export default function ResultCard({ result, scannedPlate, onBack }: ResultCardProps) {
  if (isSwissPlate(result)) {
    // Convertir le résultat en format SwissPlateMatch
    const swissResult: SwissPlateMatch = {
      country: result.country as any,
      plateComponents: {
        statusPrefix: result.plateFormat.format.split(/\d/)[0],
        serialNumber: result.plateFormat.format.match(/\d+/)?.[0] || "",
        identificationCode: result.plateFormat.format.split("• ")[1] || "",
      },
      plateInfo: {
        statusDescription: result.plateFormat.type,
        plateColor: result.plateFormat.description.includes("Organisation")
          ? "blue"
          : result.plateFormat.description.includes("ambassade")
            ? "green"
            : "white",
        missionType: result.plateFormat.description,
        location: result.plateFormat.description.includes("Organisation")
          ? "Principalement à Genève"
          : result.plateFormat.description.includes("ambassade")
            ? "Principalement à Berne"
            : "Diverses villes suisses",
        privileges: ["Privilèges diplomatiques selon le statut"],
      },
      confidence: result.confidence,
    }

    return <SwissPlateResult result={swissResult} scannedPlate={scannedPlate} onBack={onBack} />
  }

  if (isFrenchPlate(result)) {
    return <FrenchPlateResult result={result} scannedPlate={scannedPlate} onBack={onBack} />
  }

  const { country, plateFormat, confidence } = result

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Plaque diplomatique identifiée`,
        text: `J'ai identifié une plaque diplomatique ${country.countryName} : ${scannedPlate}`,
      })
    }
  }

  const getConfidenceColor = (conf: number) => {
    if (conf >= 0.9) return "bg-green-500"
    if (conf >= 0.7) return "bg-yellow-500"
    return "bg-red-500"
  }

  // Handle both standard diplomatic plates and French codes
  const embassyInfo =
    "embassyInfo" in country
      ? country.embassyInfo
      : {
          address: "Information non disponible",
          phone: "Information non disponible",
          website: "diplomatie.gouv.fr",
        }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h2 className="text-lg font-semibold">Résultat de l'analyse</h2>
      </div>

      <Card>
        <CardHeader className="text-center pb-4">
          <div className="text-6xl mb-2">{country.flagEmoji}</div>
          <CardTitle className="text-2xl">{country.countryName}</CardTitle>
          <p className="text-muted-foreground">Capitale: {country.capital}</p>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Plate Information */}
          <div className="bg-muted p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-lg font-bold">{scannedPlate}</span>
              <Badge variant="secondary" className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${getConfidenceColor(confidence)}`} />
                {Math.round(confidence * 100)}%
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>{plateFormat.type}</strong> - {plateFormat.description}
            </p>
            <p className="text-xs text-muted-foreground mt-1">Format: {plateFormat.format}</p>
          </div>

          {/* Embassy Information */}
          <div className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Informations diplomatiques
            </h3>

            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-muted-foreground" />
                <span>{embassyInfo.address}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <a href={`tel:${embassyInfo.phone}`} className="hover:underline">
                  {embassyInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-muted-foreground" />
                <a
                  href={`https://${embassyInfo.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  {embassyInfo.website}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-4">
            <Button onClick={handleShare} variant="outline" className="flex-1 bg-transparent">
              <Share2 className="w-4 h-4 mr-2" />
              Partager
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
