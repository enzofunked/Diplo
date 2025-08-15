"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ExternalLink,
  Camera,
  Flag,
  Users,
  Building2,
  Globe,
  AlertTriangle,
  CheckCircle,
  Info,
  Hash,
  Search,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { frenchDiplomaticCodes } from "../../data/french-diplomatic-codes"

export default function FrenchDiplomaticCodesListPageClient() {
  const [searchTerm, setSearchTerm] = useState("")

  const sortedCodes = [...frenchDiplomaticCodes].sort((a, b) => a.countryName.localeCompare(b.countryName))

  const filteredCodes = sortedCodes.filter(
    (code) =>
      code.countryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      code.code.toString().includes(searchTerm) ||
      (code.alternativeCode && code.alternativeCode.toString().includes(searchTerm)) ||
      code.region.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const groupedCodes = filteredCodes.reduce(
    (acc, code) => {
      const region = code.region || "Autres"
      if (!acc[region]) {
        acc[region] = []
      }
      acc[region].push(code)
      return acc
    },
    {} as Record<string, typeof frenchDiplomaticCodes>,
  )

  const regionOrder = [
    "Europe",
    "Africa",
    "Americas",
    "Asia",
    "Middle East",
    "Oceania",
    "International",
    "Europe/Asia",
    "Autres",
  ]
  const sortedGroupedCodes = Object.entries(groupedCodes).sort(([regionA], [regionB]) => {
    const indexA = regionOrder.indexOf(regionA)
    const indexB = regionOrder.indexOf(regionB)
    if (indexA === -1) return 1
    if (indexB === -1) return -1
    return indexA - indexB
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Retour au scanner</span>
            </Link>
            <Link href="/french">
              <Button
                variant="outline"
                size="sm"
                className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                <Camera className="w-4 h-4 mr-2" />
                Scanner français
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Flag className="w-4 h-4" />
            Guide France
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Liste complète des codes pays sur les plaques{" "}
            <span className="text-blue-600">diplomatiques françaises</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Référence exhaustive de tous les codes pays utilisés sur les plaques diplomatiques françaises : système
            1-199, codes étendus 200+, organisations internationales et codes spéciaux.
          </p>
        </div>

        {/* Système double - Info rapide */}
        <Card className="mb-8 border-blue-100">
          <CardHeader className="bg-blue-50">
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Hash className="w-5 h-5" />
              Système double français
            </CardTitle>
            <CardDescription>Comprendre les deux systèmes de codes</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Alert className="border-blue-200 bg-blue-50">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-700">
                <strong>Règle simple :</strong> Code étendu = Code original + 200. Exemple : Allemagne = 5 ou 205 (même
                pays, deux codes valides).
                <br />
                <br />
                <strong>Pourquoi deux systèmes ?</strong> Le système original (1-199) créé en 1920 était saturé. Avec la
                décolonisation des années 1960-80 et l'indépendance de nombreux pays, la France a créé le système étendu
                (200+) pour les nouveaux États tout en conservant les codes historiques.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Barre de recherche */}
        <Card className="mb-8 border-blue-100">
          <CardHeader className="bg-blue-50">
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Search className="w-5 h-5" />
              Recherche dans {frenchDiplomaticCodes.length} codes
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Rechercher un pays, code ou région..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-blue-200 focus:border-blue-400"
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
              <div className="mt-4 text-sm text-blue-600">
                {filteredCodes.length} résultat{filteredCodes.length > 1 ? "s" : ""} trouvé
                {filteredCodes.length > 1 ? "s" : ""} sur {frenchDiplomaticCodes.length} codes
              </div>
            )}
          </CardContent>
        </Card>

        {/* Liste complète des codes */}
        <Card className="mb-8 border-blue-100">
          <CardHeader className="bg-blue-50">
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Globe className="w-5 h-5" />
              {searchTerm
                ? `Résultats de recherche (${filteredCodes.length})`
                : "Tous les codes diplomatiques français"}
            </CardTitle>
            <CardDescription>
              {searchTerm
                ? `Codes correspondant à "${searchTerm}"`
                : "Liste exhaustive par région avec codes originaux et étendus"}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {sortedGroupedCodes.length > 0 ? (
                sortedGroupedCodes.map(([region, codes]) => (
                  <div key={region}>
                    <h3 className="font-semibold text-blue-600 mb-4 text-lg border-b border-blue-200 pb-2">
                      {region} ({codes.length} {codes.length > 1 ? "codes" : "code"})
                    </h3>
                    <div className="grid gap-3">
                      {codes.map((code) => (
                        <div
                          key={code.code}
                          className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
                            code.status === "obsolete"
                              ? "bg-gray-50 border-gray-200 opacity-75"
                              : "bg-blue-50 border-blue-200 hover:bg-blue-100"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{code.flagEmoji}</span>
                            <div>
                              <div className="font-medium text-gray-900">
                                {code.countryName}
                                {code.status === "obsolete" && (
                                  <Badge variant="outline" className="ml-2 text-xs bg-gray-100">
                                    Obsolète
                                  </Badge>
                                )}
                              </div>
                              <div className="text-sm text-gray-600">
                                {code.capital} • {code.region}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {code.alternativeCode && (
                              <Badge variant="outline" className="font-mono bg-white border-blue-300 text-blue-700">
                                {code.alternativeCode}
                              </Badge>
                            )}
                            <Badge variant="secondary" className="font-mono bg-blue-600 text-white">
                              {code.code}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <Search className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <p className="text-lg font-medium">Aucun résultat trouvé pour "{searchTerm}"</p>
                  <p className="text-sm mt-2">Essayez avec un nom de pays, un code numérique ou une région</p>
                  <Button
                    variant="outline"
                    onClick={() => setSearchTerm("")}
                    className="mt-4 border-blue-200 text-blue-600 hover:bg-blue-50"
                  >
                    Voir tous les codes
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Préfixes et suffixes */}
        <Card className="mb-8 border-blue-100">
          <CardHeader className="bg-blue-50">
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Users className="w-5 h-5" />
              Préfixes et suffixes spéciaux
            </CardTitle>
            <CardDescription>Codes additionnels pour organisations et statuts fiscaux</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Préfixes (Organisations)</h3>
                <div className="space-y-3">
                  <div className="border border-green-200 rounded-lg p-3 bg-green-50">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-green-600 text-white">E</Badge>
                      <span className="font-medium text-green-700">OCDE</span>
                    </div>
                    <p className="text-xs text-green-600">
                      Organisation de Coopération et de Développement Économiques
                    </p>
                  </div>
                  <div className="border border-blue-200 rounded-lg p-3 bg-blue-50">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-blue-600 text-white">U</Badge>
                      <span className="font-medium text-blue-700">UNESCO</span>
                    </div>
                    <p className="text-xs text-blue-600">Organisation des Nations Unies pour l'Éducation</p>
                  </div>
                  <div className="border border-purple-200 rounded-lg p-3 bg-purple-50">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-purple-600 text-white">S</Badge>
                      <span className="font-medium text-purple-700">Conseil de l'Europe</span>
                    </div>
                    <p className="text-xs text-purple-600">Organisation européenne de défense des droits de l'homme</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Suffixes (Statut fiscal)</h3>
                <div className="space-y-3">
                  <div className="border border-red-200 rounded-lg p-3 bg-red-50">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-red-600 text-white">Z</Badge>
                      <span className="font-medium text-red-700">Exonération totale</span>
                    </div>
                    <p className="text-xs text-red-600">
                      Personnel diplomatique de haut rang (ambassadeurs, ministres)
                    </p>
                  </div>
                  <div className="border border-orange-200 rounded-lg p-3 bg-orange-50">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-orange-600 text-white">X</Badge>
                      <span className="font-medium text-orange-700">Taxes françaises</span>
                    </div>
                    <p className="text-xs text-orange-600">Personnel administratif et technique (soumis aux taxes)</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Exemples pratiques */}
        <Card className="mb-8 border-blue-100">
          <CardHeader className="bg-blue-50">
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Building2 className="w-5 h-5" />
              Exemples de plaques complètes
            </CardTitle>
            <CardDescription>Comment interpréter une plaque diplomatique française</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                <div className="text-center mb-3">
                  <div className="text-xl font-bold text-green-600 font-mono">E 205 CD 75 Z</div>
                </div>
                <div className="text-sm space-y-1">
                  <div>
                    <strong>E</strong> = OCDE (Organisation)
                  </div>
                  <div>
                    <strong>205</strong> = Allemagne (Code pays)
                  </div>
                  <div>
                    <strong>CD</strong> = Corps Diplomatique
                  </div>
                  <div>
                    <strong>75</strong> = Paris (Département)
                  </div>
                  <div>
                    <strong>Z</strong> = Exonération fiscale totale
                  </div>
                </div>
                <div className="text-green-700 font-medium mt-3 text-sm border-t border-green-200 pt-2">
                  → Représentant allemand à l'OCDE avec statut diplomatique
                </div>
              </div>

              <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                <div className="text-center mb-3">
                  <div className="text-xl font-bold text-blue-600 font-mono">5 CD 75 X</div>
                </div>
                <div className="text-sm space-y-1">
                  <div>
                    <strong>5</strong> = Allemagne (Code original)
                  </div>
                  <div>
                    <strong>CD</strong> = Corps Diplomatique
                  </div>
                  <div>
                    <strong>75</strong> = Paris (Département)
                  </div>
                  <div>
                    <strong>X</strong> = Soumis aux taxes françaises
                  </div>
                </div>
                <div className="text-blue-700 font-medium mt-3 text-sm border-t border-blue-200 pt-2">
                  → Personnel administratif de l'ambassade d'Allemagne
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conseils d'utilisation */}
        <Card className="mb-8 border-blue-100">
          <CardHeader className="bg-blue-50">
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <AlertTriangle className="w-5 h-5" />
              Guide d'utilisation
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  Équivalences
                </h4>
                <ul className="text-sm space-y-1 text-green-700">
                  <li>• 5 = 205 (Allemagne)</li>
                  <li>• 1 = 201 (États-Unis)</li>
                  <li>• 45 = 245 (Royaume-Uni)</li>
                  <li>• Code + 200 = équivalent</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-2 flex items-center gap-1">
                  <Info className="w-4 h-4" />
                  Préfixes rares
                </h4>
                <ul className="text-sm space-y-1 text-blue-700">
                  <li>• E = OCDE (très rare)</li>
                  <li>• U = UNESCO (rare)</li>
                  <li>• S = Conseil Europe (rare)</li>
                  <li>• Toujours avant le code pays</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-1">
                  <AlertTriangle className="w-4 h-4" />
                  Points d'attention
                </h4>
                <ul className="text-sm space-y-1 text-red-700">
                  <li>• Z = Zéro taxe (diplomates)</li>
                  <li>• X = eXception (taxes dues)</li>
                  <li>• Codes obsolètes = pays disparus</li>
                  <li>• 400+ = organisations internationales</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="mb-8 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="pt-8 pb-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">Identifier une plaque diplomatique française</h2>
              <p className="text-blue-600 mb-6">
                Utilisez notre scanner intelligent pour identifier instantanément n'importe quelle plaque diplomatique
                française.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/french">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Camera className="w-5 h-5 mr-2" />
                    Scanner français
                  </Button>
                </Link>
                <Link href="/comment-lire-une-plaque-diplomatique-francaise">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent"
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
        <Card className="border-blue-100">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-700">Guides connexes</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/comment-lire-une-plaque-diplomatique-francaise" className="block">
                <div className="p-4 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Flag className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="font-semibold text-blue-700">Guide de lecture français</div>
                      <div className="text-sm text-blue-600">Comment déchiffrer une plaque française complète</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-blue-500 ml-auto" />
                  </div>
                </div>
              </Link>

              <Link href="/liste-codes-pays-plaques-diplomatiques-suisses" className="block">
                <div className="p-4 border border-red-200 rounded-lg hover:bg-red-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Flag className="w-6 h-6 text-red-600" />
                    <div>
                      <div className="font-semibold text-red-700">Codes suisses</div>
                      <div className="text-sm text-red-600">Liste des codes diplomatiques suisses</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-red-500 ml-auto" />
                  </div>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-blue-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-blue-600 mb-4">
            <Flag className="w-5 h-5" />
            <span className="font-semibold">Diplo Scanner</span>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Scanner et identifier les plaques diplomatiques françaises et suisses
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <Link href="/terms" className="hover:text-blue-600 transition-colors">
              Conditions d'utilisation
            </Link>
            <Link href="/help" className="hover:text-blue-600 transition-colors">
              Aide
            </Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">
              À propos
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
