"use client"

import { useState } from "react"
import { ArrowLeft, BookOpen, Palette, Flag, Building, Shield, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { validateDiplomaticPlate } from "../../utils/plateValidator"
import FrenchPlateResult from "../../components/FrenchPlateResult"
import type { FrenchPlateMatch } from "../../utils/french-plate-validator"
import { useHistory } from "../../hooks/useHistory"
import EnhancedFrenchScanner from "../../components/EnhancedFrenchScanner"
import PlateScanner from "../../components/PlateScanner"
import { frenchDiplomaticCodes } from "../../data/french-diplomatic-codes"

export default function FrenchPage() {
  const [scanResult, setScanResult] = useState<FrenchPlateMatch | null>(null)
  const [scannedPlate, setScannedPlate] = useState("")
  const [isScanning, setIsScanning] = useState(false)
  const [showCameraModal, setShowCameraModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const { addToHistory } = useHistory()

  const filteredCodes = frenchDiplomaticCodes.filter((code) => {
    const searchLower = searchTerm.toLowerCase()
    return (
      code.country?.toLowerCase().includes(searchLower) ||
      code.code.toString().includes(searchTerm) ||
      (code.organization && code.organization?.toLowerCase().includes(searchLower)) ||
      code.flag?.includes(searchTerm)
    )
  })

  const handleScan = async (plateText: string) => {
    setIsScanning(true)
    setScannedPlate(plateText)

    try {
      const result = validateDiplomaticPlate(plateText, "french") as FrenchPlateMatch

      if (result) {
        setScanResult(result)
        addToHistory(plateText, result, "french")
      } else {
        alert(`Plaque non reconnue: "${plateText}"\n\nVérifiez le format.`)
        addToHistory(plateText, null, "french")
      }
    } catch (error) {
      console.error("Erreur validation:", error)
      alert("Erreur lors de l'analyse. Réessayez.")
    } finally {
      setIsScanning(false)
    }
  }

  const handleCameraResult = (plateText: string, result: FrenchPlateMatch) => {
    setShowCameraModal(false)
    setScanResult(result)
    setScannedPlate(plateText)
    addToHistory(plateText, result, "french")
  }

  if (scanResult) {
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
          <div className="pb-8">
            <FrenchPlateResult result={scanResult} scannedPlate={scannedPlate} onBack={() => setScanResult(null)} />
          </div>
        </div>
        <footer className="bg-white/60 border-t border-gray-200 py-4 w-full">
          <div className="text-center space-y-2">
            <p className="text-xs text-gray-500">Fait avec ❤️</p>
            <div className="flex justify-center gap-4">
              <Link href="/terms">
                <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors underline">
                  Conditions d'Utilisation
                </button>
              </Link>
              <Link href="/about">
                <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors underline">
                  À propos
                </button>
              </Link>
              <Link href="/help">
                <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors underline">Aide</button>
              </Link>
              <Link href="/faq-plaques-diplomatiques">
                <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors underline">FAQ</button>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container max-w-md mx-auto p-4">
        <div className="text-center mb-8 pt-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="text-3xl">🌍</div>
            <p className="text-3xl font-bold text-blue-900">Diplo Scanner</p>
          </div>
          <p className="text-blue-700">Plaques diplomatiques France & Suisse</p>
        </div>

        <div className="pb-8 space-y-6">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇫🇷</span>
              <h1 className="text-lg font-semibold">Plaque diplomatique france</h1>
            </div>
          </div>

          <div className="space-y-4">
            <EnhancedFrenchScanner
              onScan={handleScan}
              isScanning={isScanning}
              onCameraClick={() => setShowCameraModal(true)}
            />
          </div>

          {/* Guide Section - Décoder les plaques */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flag className="w-5 h-5 text-green-600" />
                  Plaques diplomatiques françaises
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm">
                  Les véhicules officiels des ambassades, consulats et organisations internationales en France utilisent
                  des plaques vertes spéciales. Ces plaques identifient le pays ou l'organisation du détenteur et son
                  statut.
                </p>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Autorité :</strong> Ministère des Affaires étrangères
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-blue-600" />
                  Format des plaques
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="font-mono text-center text-xl font-bold text-blue-800 mb-2">5 CD 1234</p>
                  <p className="text-sm text-blue-700 text-center">Exemple simple d'une plaque française</p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Comment lire une plaque :</h4>
                  <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 bg-red-50 rounded">
                        <div className="font-mono text-lg font-bold text-red-600">5</div>
                        <div className="text-xs text-red-600">Pays</div>
                      </div>
                      <div className="p-2 bg-blue-50 rounded">
                        <div className="font-mono text-lg font-bold text-blue-600">CD</div>
                        <div className="text-xs text-blue-600">Statut</div>
                      </div>
                      <div className="p-2 bg-green-50 rounded">
                        <div className="font-mono text-lg font-bold text-green-600">1234</div>
                        <div className="text-xs text-green-600">Numéro</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-green-600" />
                  Couleurs réglementaires
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 rounded-lg text-center">
                  <p className="text-white font-medium mb-2">Fond vert "jaspe" (strié)</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-orange-50 rounded-lg text-center">
                    <div className="w-8 h-8 bg-orange-500 rounded mx-auto mb-2"></div>
                    <p className="text-sm font-medium">Caractères orange</p>
                    <p className="text-xs text-muted-foreground">Corps diplomatique</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg text-center">
                    <div className="w-8 h-8 bg-white border-2 border-gray-300 rounded mx-auto mb-2"></div>
                    <p className="text-sm font-medium">Caractères blancs</p>
                    <p className="text-xs text-muted-foreground">Corps consulaire</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-purple-600" />
                  Statuts diplomatiques
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-1 gap-3">
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-red-100 text-red-800">CMD</Badge>
                      <span className="font-medium text-sm">Chef de Mission Diplomatique</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Ambassadeur - Rang le plus élevé</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-blue-100 text-blue-800">CD</Badge>
                      <span className="font-medium text-sm">Corps Diplomatique</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Diplomates et membres d'ambassade</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-green-100 text-green-800">C</Badge>
                      <span className="font-medium text-sm">Corps Consulaire</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Personnel d'un consulat</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-yellow-100 text-yellow-800">K</Badge>
                      <span className="font-medium text-sm">Personnel Technique</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Personnel administratif non diplomatique</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Exemples de plaques diplomatiques */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-green-600" />
                Exemples de plaques diplomatiques françaises
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">
                Découvrez des exemples réels de plaques diplomatiques françaises photographiées sur le terrain.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/plaque-454-k.jpg"
                      alt="Plaque diplomatique 454 K"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-center font-mono font-bold text-green-700">454 K</p>
                </div>

                <div className="space-y-2">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/plaque-454-k-bmw.jpg"
                      alt="Plaque diplomatique 454 K sur BMW"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-center font-mono font-bold text-green-700">454 K</p>
                </div>

                <div className="space-y-2">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/plaque-u-344-cd.jpg"
                      alt="Plaque diplomatique U 344 CD"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-center font-mono font-bold text-green-700">U 344 CD</p>
                </div>

                <div className="space-y-2">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/plaque-500-cd.jpg"
                      alt="Plaque diplomatique 500 CD"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-center font-mono font-bold text-green-700">500 CD</p>
                </div>

                <div className="space-y-2">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/plaque-691-cd.jpg"
                      alt="Plaque diplomatique 691 CD"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-center font-mono font-bold text-green-700">431 CD</p>
                </div>

                <div className="space-y-2">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/plaque-u315-k.jpg"
                      alt="Plaque diplomatique U315 K"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-center font-mono font-bold text-green-700">U 315 K</p>
                </div>

                <div className="space-y-2">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image src="/images/plaque-3-cd.jpg" alt="Plaque diplomatique 3 CD" fill className="object-cover" />
                  </div>
                  <p className="text-xs text-center font-mono font-bold text-green-700">8 CD</p>
                </div>

                <div className="space-y-2">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/images/plaque-401-cd.jpg"
                      alt="Plaque diplomatique 401 CD"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-center font-mono font-bold text-green-700">401 CD</p>
                </div>
              </div>

              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-xs text-green-800">
                  <strong>Note :</strong> Ces photos montrent la diversité des formats et des véhicules utilisés par les pays pour leurs
                  missions diplomatiques en France.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Codes Section - Tous les codes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                Liste complète des codes pays
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  Consultez la liste complète des codes diplomatiques français pour identifier tous les pays et
                  organisations internationales.
                </p>

                <Link href="/liste-codes-pays-plaques-diplomatiques-francaises">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Voir tous les codes pays
                  </Button>
                </Link>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Dans cette liste vous trouverez :</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Plus de 200 codes pays diplomatiques</li>
                    <li>• Organisations internationales (ONU, UE, etc.)</li>
                    <li>• Fonction de recherche avancée</li>
                    <li>• Drapeaux et informations détaillées</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SEO Content Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mt-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Scanner de Plaques Diplomatiques Françaises</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <p>
                Notre scanner de plaques diplomatiques françaises vous permet d'identifier instantanément les véhicules
                diplomatiques circulant en France. Grâce à notre technologie de reconnaissance optique avancée, analysez
                facilement les plaques CD (Corps Diplomatique) et CMD (Chef de Mission Diplomatique).
              </p>
              <p>
                Les plaques diplomatiques françaises suivent un système de codification spécifique établi par le
                Ministère des Affaires Étrangères. Chaque plaque contient des informations précieuses sur le pays
                d'origine, le statut diplomatique et la mission représentée.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-800 mb-2">Fonctionnalités de notre scanner :</h3>
                <ul className="list-disc list-inside space-y-1 text-blue-700">
                  <li>Saisie manuelle pour vérification</li>
                  <li>Base de données complète des codes pays</li>
                  <li>Historique des recherches</li>
                  <li>Interface optimisée mobile</li>
                </ul>
              </div>
              <p>
                Que vous soyez professionnel de la sécurité, étudiant en relations internationales, ou simplement
                curieux des véhicules diplomatiques, notre outil vous fournit des informations précises et actualisées
                sur les plaques d'immatriculation diplomatiques françaises.
              </p>
            </div>
          </div>
        </div>
      </div>

      {showCameraModal && (
        <PlateScanner onResult={handleCameraResult} onClose={() => setShowCameraModal(false)} system="french" />
      )}

      <footer className="bg-white/60 border-t border-gray-200 py-4 w-full">
        <div className="text-center space-y-2">
          <p className="text-xs text-gray-500">Fait avec ❤️</p>
          <div className="flex justify-center gap-4">
            <Link href="/terms">
              <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors underline">
                Conditions d'Utilisation
              </button>
            </Link>
            <Link href="/about">
              <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors underline">
                À propos
              </button>
            </Link>
            <Link href="/help">
              <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors underline">Aide</button>
            </Link>
            <Link href="/faq-plaques-diplomatiques">
              <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors underline">FAQ</button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
