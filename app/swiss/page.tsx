"use client"

import { useState } from "react"
import { ArrowLeft, BookOpen, Flag, Building, Shield, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { validateDiplomaticPlate } from "../../utils/plateValidator"
import SwissPlateResult from "../../components/SwissPlateResult"
import type { SwissPlateMatch } from "../../utils/swiss-plate-validator"
import { useHistory } from "../../hooks/useHistory"
import SwissScanner from "../../components/SwissScanner"
import PlateScanner from "../../components/PlateScanner"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SwissPage() {
  const [scanResult, setScanResult] = useState<SwissPlateMatch | null>(null)
  const [scannedPlate, setScannedPlate] = useState("")
  const [isScanning, setIsScanning] = useState(false)
  const [showCameraModal, setShowCameraModal] = useState(false)
  const { addToHistory } = useHistory()

  const handleScan = async (plateText: string) => {
    setIsScanning(true)
    setScannedPlate(plateText)

    try {
      const result = validateDiplomaticPlate(plateText, "swiss") as SwissPlateMatch

      if (result) {
        setScanResult(result)
        addToHistory(plateText, result, "swiss")
      } else {
        alert(`Plaque non reconnue: "${plateText}"\n\nVérifiez le format.`)
        addToHistory(plateText, null, "swiss")
      }
    } catch (error) {
      console.error("Erreur validation:", error)
      alert("Erreur lors de l'analyse. Réessayez.")
    } finally {
      setIsScanning(false)
    }
  }

  const handleCameraResult = (plateText: string, result: SwissPlateMatch) => {
    setShowCameraModal(false)
    setScanResult(result)
    setScannedPlate(plateText)
    addToHistory(plateText, result, "swiss")
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
            <SwissPlateResult result={scanResult} scannedPlate={scannedPlate} onBack={() => setScanResult(null)} />
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
            <h1 className="text-3xl font-bold text-blue-900">Diplo Scanner</h1>
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
              <span className="text-2xl">🇨🇭</span>
              <h2 className="text-lg font-semibold">Identifier plaque suisse</h2>
            </div>
          </div>

          <div className="space-y-4">
            <SwissScanner onScan={handleScan} isScanning={isScanning} onCameraClick={() => setShowCameraModal(true)} />
          </div>

          {/* Guide Section - Décoder les plaques */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flag className="w-5 h-5 text-red-600" />
                  Plaques diplomatiques suisses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm">
                  Les véhicules officiels des missions diplomatiques et organisations internationales en Suisse
                  utilisent des plaques spéciales. Ces plaques identifient le pays ou l'organisation du détenteur et son
                  statut.
                </p>
                <div className="bg-red-50 p-3 rounded-lg">
                  <p className="text-sm text-red-800">
                    <strong>Autorité :</strong> Département fédéral des affaires étrangères (DFAE)
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
                  <p className="font-mono text-center text-xl font-bold text-blue-800 mb-2">CD GE XX·12345</p>
                  <p className="text-sm text-blue-700 text-center">Exemple d'une plaque suisse</p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Comment lire une plaque :</h4>
                  <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 bg-red-50 rounded">
                        <div className="font-mono text-lg font-bold text-red-600">CD</div>
                        <div className="text-xs text-red-600">Statut</div>
                      </div>
                      <div className="p-2 bg-blue-50 rounded">
                        <div className="font-mono text-lg font-bold text-blue-600">GE</div>
                        <div className="text-xs text-blue-600">Canton</div>
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
                  <Palette className="w-5 h-5 text-red-600" />
                  Couleurs et cantons
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-blue-50 rounded-lg text-center">
                    <div className="font-mono text-lg font-bold text-blue-600">GE</div>
                    <p className="text-sm font-medium">Genève</p>
                    
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg text-center">
                    <div className="font-mono text-lg font-bold text-green-600">BE</div>
                    <p className="text-sm font-medium">Berne</p>
                    
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
                      <Badge className="bg-red-100 text-red-800">CD</Badge>
                      <span className="font-medium text-sm">Corps Diplomatique</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Diplomates et personnel d'ambassade</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-blue-100 text-blue-800">CC</Badge>
                      <span className="font-medium text-sm">Corps Consulaire</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Personnel consulaire</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-green-100 text-green-800">AT</Badge>
                      <span className="font-medium text-sm">Personnel Administratif</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Personnel technique et administratif</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-purple-100 text-purple-800">OI</Badge>
                      <span className="font-medium text-sm">Organisations Internationales</span>
                    </div>
                    <p className="text-xs text-muted-foreground">ONU, OMS, CICR, etc.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

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
                  Consultez la liste complète des codes diplomatiques suisses pour identifier tous les pays et
                  organisations internationales.
                </p>

                <Link href="/codes-diplomatiques-suisses">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Voir tous les codes pays
                  </Button>
                </Link>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-medium text-red-800 mb-2">Dans cette liste vous trouverez :</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Plus de 190 codes pays diplomatiques</li>
                    <li>• Organisations internationales (ONU, OMS, etc.)</li>
                    <li>• Fonction de recherche avancée</li>
                    <li>• Drapeaux et informations détaillées</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SEO Content Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              Identification des Plaques Diplomatiques Suisses
            </h2>
            <div className="space-y-4 text-sm text-gray-700">
              <p>
                Découvrez l'origine des <strong>véhicules diplomatiques suisses</strong> grâce à notre outil de
                reconnaissance avancé. Identifiez instantanément les missions diplomatiques présentes en Suisse en
                analysant leurs plaques d'immatriculation spéciales.
              </p>

              <h3 className="text-lg font-medium text-blue-800 mt-6 mb-3">Le système diplomatique suisse expliqué</h3>
              <p>
                La Suisse, en tant que siège de nombreuses organisations internationales, utilise un système de
                <strong> plaques diplomatiques</strong> très structuré. Chaque plaque commence par "CD" (Corps
                Diplomatique), indique le canton d'enregistrement (GE pour Genève, BE pour Berne), puis affiche un
                numéro unique et un code pays spécifique.
              </p>

              <h3 className="text-lg font-medium text-blue-800 mt-6 mb-3">Utilisation pratique</h3>
              <p>
                Notre outil est parfait pour les professionnels du secteur diplomatique, les journalistes, les étudiants
                en relations internationales, ou simplement les curieux souhaitant comprendre la présence diplomatique
                en Suisse. L'identification se fait en toute discrétion et dans le respect des protocoles.
              </p>
            </div>
          </div>
        </div>
      </div>

      {showCameraModal && (
        <PlateScanner onResult={handleCameraResult} onClose={() => setShowCameraModal(false)} system="swiss" />
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
