"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ExternalLink,
  Camera,
  Flag,
  Building2,
  Globe,
  AlertTriangle,
  CheckCircle,
  Info,
  Hash,
  Search,
  X,
  MapPin,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { swissDiplomaticCodes } from "../../data/swiss-diplomatic-codes"

export default function SwissCodesPageClient() {
  const [searchTerm, setSearchTerm] = useState("")

  const sortedCodes = [...swissDiplomaticCodes].sort((a, b) => a.countryName.localeCompare(b.countryName))

  const filteredCodes = sortedCodes.filter(
    (code) =>
      code.countryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      code.code.toString().includes(searchTerm) ||
      (code.type && code.type.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const groupedCodes = filteredCodes.reduce(
    (acc, code) => {
      const type = code.type === "country" ? "Pays et territoires" : "Organisations internationales"
      if (!acc[type]) {
        acc[type] = []
      }
      acc[type].push(code)
      return acc
    },
    {} as Record<string, typeof swissDiplomaticCodes>,
  )

  const countryCount = swissDiplomaticCodes.filter((c) => c.type === "country").length
  const orgCount = swissDiplomaticCodes.filter((c) => c.type === "organization").length

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-red-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Retour au scanner</span>
            </Link>
            <Link href="/swiss">
              <Button
                variant="outline"
                size="sm"
                className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
              >
                <Camera className="w-4 h-4 mr-2" />
                Scanner suisse
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Flag className="w-4 h-4" />
            Guide Suisse
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Liste complète des codes <span className="text-red-600">diplomatiques suisses</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Base de données exhaustive de tous les {swissDiplomaticCodes.length} codes diplomatiques utilisés en Suisse
            :{countryCount} pays et territoires, {orgCount} organisations internationales basées à Genève et Berne.
          </p>
        </div>

        {/* Système suisse - Info rapide */}
        <Card className="mb-8 border-red-100">
          <CardHeader className="bg-red-50">
            <CardTitle className="flex items-center gap-2 text-red-700">
              <Hash className="w-5 h-5" />
              Système diplomatique suisse
            </CardTitle>
            <CardDescription>Comprendre les codes diplomatiques en Suisse</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Alert className="border-red-200 bg-red-50">
              <Info className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-700">
                <strong>Particularité suisse :</strong> La Suisse héberge de nombreuses organisations internationales
                (ONU, OMS, CICR, etc.) qui bénéficient de codes spéciaux. Les codes pays suivent l'ordre alphabétique
                international, tandis que les organisations ont des codes dédiés (400+).
                <br />
                <br />
                <strong>Deux centres diplomatiques :</strong> Genève (organisations internationales) et Berne
                (ambassades bilatérales).
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Statistiques */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-red-100">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">{countryCount}</div>
                <div className="text-sm text-red-700 font-medium">Pays et territoires</div>
                <div className="text-xs text-red-600 mt-1">Ambassades et consulats</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{orgCount}</div>
                <div className="text-sm text-blue-700 font-medium">Organisations</div>
                <div className="text-xs text-blue-600 mt-1">ONU, OMS, CICR, etc.</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-100">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">2</div>
                <div className="text-sm text-green-700 font-medium">Centres diplomatiques</div>
                <div className="text-xs text-green-600 mt-1">Genève et Berne</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Barre de recherche */}
        <Card className="mb-8 border-red-100">
          <CardHeader className="bg-red-50">
            <CardTitle className="flex items-center gap-2 text-red-700">
              <Search className="w-5 h-5" />
              Recherche dans {swissDiplomaticCodes.length} codes diplomatiques
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Rechercher un pays, organisation ou code..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-red-200 focus:border-red-400"
              />
              {searchTerm && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
                  onClick={() => setSearchTerm("")}
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
            {searchTerm && (
              <div className="mt-4 text-sm text-red-600">
                {filteredCodes.length} résultat{filteredCodes.length > 1 ? "s" : ""} trouvé
                {filteredCodes.length > 1 ? "s" : ""} sur {swissDiplomaticCodes.length} codes
              </div>
            )}
          </CardContent>
        </Card>

        {/* Liste complète des codes */}
        <Card className="mb-8 border-red-100">
          <CardHeader className="bg-red-50">
            <CardTitle className="flex items-center gap-2 text-red-700">
              <Globe className="w-5 h-5" />
              {searchTerm ? `Résultats de recherche (${filteredCodes.length})` : "Tous les codes diplomatiques suisses"}
            </CardTitle>
            <CardDescription>
              {searchTerm
                ? `Codes correspondant à "${searchTerm}"`
                : "Liste exhaustive des pays et organisations internationales"}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {Object.keys(groupedCodes).length > 0 ? (
                Object.entries(groupedCodes).map(([group, codes]) => (
                  <div key={group}>
                    <h3 className="font-semibold text-red-600 mb-4 text-lg border-b border-red-200 pb-2">
                      {group} ({codes.length} {codes.length > 1 ? "codes" : "code"})
                    </h3>
                    <div className="grid gap-3">
                      {codes.map((code) => (
                        <div
                          key={code.code}
                          className="flex items-center justify-between p-3 rounded-lg border bg-red-50 border-red-200 hover:bg-red-100 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{code.flagEmoji}</span>
                            <div>
                              <div className="font-medium text-gray-900">{code.countryName}</div>
                              <div className="text-sm text-gray-600">
                                {code.type === "country" ? "Ambassade/Consulat" : "Organisation internationale"}
                              </div>
                            </div>
                          </div>
                          <Badge variant="secondary" className="font-mono bg-red-600 text-white">
                            {code.code}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <Search className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <p className="text-lg font-medium">Aucun résultat trouvé pour "{searchTerm}"</p>
                  <p className="text-sm mt-2">Essayez avec un nom de pays, d'organisation ou un code numérique</p>
                  <Button
                    variant="outline"
                    onClick={() => setSearchTerm("")}
                    className="mt-4 border-red-200 text-red-600 hover:bg-red-50"
                  >
                    Voir tous les codes
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Spécificités suisses */}
        <Card className="mb-8 border-red-100">
          <CardHeader className="bg-red-50">
            <CardTitle className="flex items-center gap-2 text-red-700">
              <MapPin className="w-5 h-5" />
              Spécificités du système suisse
            </CardTitle>
            <CardDescription>Ce qui rend les plaques diplomatiques suisses uniques</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">🏛️ Genève - Hub international</h3>
                <div className="space-y-3">
                  <div className="border border-blue-200 rounded-lg p-3 bg-blue-50">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-blue-600 text-white">400+</Badge>
                      <span className="font-medium text-blue-700">ONU et agences</span>
                    </div>
                    <p className="text-xs text-blue-600">Organisation des Nations Unies, OMS, UNHCR, OMPI, etc.</p>
                  </div>
                  <div className="border border-green-200 rounded-lg p-3 bg-green-50">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-green-600 text-white">500+</Badge>
                      <span className="font-medium text-green-700">Organisations spécialisées</span>
                    </div>
                    <p className="text-xs text-green-600">CICR, OMC, CERN, organisations non-gouvernementales</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">🏛️ Berne - Capitale fédérale</h3>
                <div className="space-y-3">
                  <div className="border border-purple-200 rounded-lg p-3 bg-purple-50">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-purple-600 text-white">1-199</Badge>
                      <span className="font-medium text-purple-700">Ambassades bilatérales</span>
                    </div>
                    <p className="text-xs text-purple-600">Relations diplomatiques directes avec les pays</p>
                  </div>
                  <div className="border border-orange-200 rounded-lg p-3 bg-orange-50">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-orange-600 text-white">200+</Badge>
                      <span className="font-medium text-orange-700">Consulats</span>
                    </div>
                    <p className="text-xs text-orange-600">Services consulaires dans les grandes villes</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Exemples pratiques */}
        <Card className="mb-8 border-red-100">
          <CardHeader className="bg-red-50">
            <CardTitle className="flex items-center gap-2 text-red-700">
              <Building2 className="w-5 h-5" />
              Exemples de plaques diplomatiques suisses
            </CardTitle>
            <CardDescription>Comment interpréter une plaque diplomatique suisse</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                <div className="text-center mb-3">
                  <div className="text-xl font-bold text-blue-600 font-mono">GE 400-123</div>
                </div>
                <div className="text-sm space-y-1">
                  <div>
                    <strong>GE</strong> = Genève (Canton)
                  </div>
                  <div>
                    <strong>400</strong> = Organisation internationale (ONU)
                  </div>
                  <div>
                    <strong>123</strong> = Numéro séquentiel
                  </div>
                </div>
                <div className="text-blue-700 font-medium mt-3 text-sm border-t border-blue-200 pt-2">
                  → Véhicule d'une organisation internationale à Genève
                </div>
              </div>

              <div className="border border-purple-200 rounded-lg p-4 bg-purple-50">
                <div className="text-center mb-3">
                  <div className="text-xl font-bold text-purple-600 font-mono">BE 5-456</div>
                </div>
                <div className="text-sm space-y-1">
                  <div>
                    <strong>BE</strong> = Berne (Canton)
                  </div>
                  <div>
                    <strong>5</strong> = Allemagne (Code pays)
                  </div>
                  <div>
                    <strong>456</strong> = Numéro séquentiel
                  </div>
                </div>
                <div className="text-purple-700 font-medium mt-3 text-sm border-t border-purple-200 pt-2">
                  → Véhicule de l'ambassade d'Allemagne à Berne
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Guide d'utilisation */}
        <Card className="mb-8 border-red-100">
          <CardHeader className="bg-red-50">
            <CardTitle className="flex items-center gap-2 text-red-700">
              <AlertTriangle className="w-5 h-5" />
              Guide de lecture des plaques suisses
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  Format standard
                </h4>
                <ul className="text-sm space-y-1 text-green-700">
                  <li>• [Canton] [Code]-[Numéro]</li>
                  <li>• GE = Genève</li>
                  <li>• BE = Berne</li>
                  <li>• ZH = Zurich (consulats)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-2 flex items-center gap-1">
                  <Info className="w-4 h-4" />
                  Codes spéciaux
                </h4>
                <ul className="text-sm space-y-1 text-blue-700">
                  <li>• 400+ = ONU et agences</li>
                  <li>• 500+ = Autres organisations</li>
                  <li>• 1-199 = Pays (ordre alphabétique)</li>
                  <li>• 200+ = Consulats</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  Privilèges
                </h4>
                <ul className="text-sm space-y-1 text-red-700">
                  <li>• Immunité diplomatique</li>
                  <li>• Exemption fiscale</li>
                  <li>• Stationnement privilégié</li>
                  <li>• Passage frontières facilité</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="mb-8 border-red-200 bg-gradient-to-br from-red-50 to-red-100">
          <CardContent className="pt-8 pb-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-red-700 mb-4">Identifier une plaque diplomatique suisse</h2>
              <p className="text-red-600 mb-6">
                Utilisez notre scanner intelligent pour identifier instantanément n'importe quelle plaque diplomatique
                suisse.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/swiss">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    <Camera className="w-5 h-5 mr-2" />
                    Scanner suisse
                  </Button>
                </Link>
                <Link href="/comment-lire-une-plaque-diplomatique-suisse">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-red-300 text-red-600 hover:bg-red-50 bg-transparent"
                  >
                    <Info className="w-5 h-5 mr-2" />
                    Guide de lecture
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <Card className="border-red-100">
          <CardHeader className="bg-red-50">
            <CardTitle className="text-red-700">Guides connexes</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/comment-lire-une-plaque-diplomatique-suisse" className="block">
                <div className="p-4 border border-red-200 rounded-lg hover:bg-red-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Flag className="w-6 h-6 text-red-600" />
                    <div>
                      <div className="font-semibold text-red-700">Guide de lecture suisse</div>
                      <div className="text-sm text-red-600">Comment déchiffrer une plaque suisse complète</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-red-500 ml-auto" />
                  </div>
                </div>
              </Link>

              <Link href="/liste-codes-pays-plaques-diplomatiques-francaises" className="block">
                <div className="p-4 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Flag className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="font-semibold text-blue-700">Codes français</div>
                      <div className="text-sm text-blue-600">Liste des codes diplomatiques français</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-blue-500 ml-auto" />
                  </div>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-red-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-red-600 mb-4">
            <Flag className="w-5 h-5" />
            <span className="font-semibold">Diplo Scanner</span>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Scanner et identifier les plaques diplomatiques françaises et suisses
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <Link href="/terms" className="hover:text-red-600 transition-colors">
              Conditions d'utilisation
            </Link>
            <Link href="/help" className="hover:text-red-600 transition-colors">
              Aide
            </Link>
            <Link href="/about" className="hover:text-red-600 transition-colors">
              À propos
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
