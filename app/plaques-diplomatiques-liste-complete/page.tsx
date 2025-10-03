import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search, List, Globe, Flag, Users, Building } from "lucide-react"

export const metadata: Metadata = {
  title: "Plaques diplomatiques liste complète 2024 | Tous les codes France & Suisse",
  description:
    "Liste exhaustive des plaques diplomatiques : codes pays France (CD, CC, CMD), codes Suisse (CD, CC, AT), organisations internationales. Base de données complète mise à jour.",
  keywords: [
    "plaques diplomatiques liste",
    "liste plaques diplomatiques",
    "plaques diplomatiques liste complète",
    "codes plaques diplomatiques",
    "répertoire plaques diplomatiques",
    "plaques diplomatiques france liste",
    "plaques diplomatiques suisse liste",
    "codes pays diplomatiques",
    "liste codes CD",
    "liste codes CC",
    "liste codes CMD",
    "organisations internationales plaques",
    "ambassades codes",
    "consulats codes",
    "plaques diplomatiques répertoire",
    "base données plaques diplomatiques",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Plaques diplomatiques liste complète 2024 | Tous les codes",
    description:
      "Liste exhaustive des plaques diplomatiques France & Suisse avec tous les codes pays et organisations.",
    type: "article",
    url: "https://diplo-scanner.com/plaques-diplomatiques-liste-complete",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=Liste+complète+plaques+diplomatiques",
        width: 1200,
        height: 630,
        alt: "Liste complète des plaques diplomatiques France et Suisse",
      },
    ],
  },
  alternates: {
    canonical: "https://diplo-scanner.com/plaques-diplomatiques-liste-complete",
  },
}

export default function PlatesDiplomatiquesListePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
              Diplo Scanner
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm">
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <List className="w-4 h-4" />
            <span>Base de données complète</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Plaques diplomatiques : liste complète 2024
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            <strong>Liste exhaustive des plaques diplomatiques</strong> France et Suisse : tous les codes pays, statuts
            diplomatiques (CD, CC, CMD, AT) et organisations internationales. Base de données officielle mise à jour
            quotidiennement.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600">200+</div>
              <div className="text-sm text-gray-600">Codes pays</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-600">50+</div>
              <div className="text-sm text-gray-600">Organisations</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-purple-600">2</div>
              <div className="text-sm text-gray-600">Systèmes</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-orange-600">100%</div>
              <div className="text-sm text-gray-600">À jour</div>
            </div>
          </div>
        </div>

        {/* CTA Scanner */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Scanner automatique de plaques diplomatiques</h2>
              <p className="text-lg mb-6 opacity-90">
                Identifiez instantanément n'importe quelle plaque diplomatique avec notre scanner IA
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/french">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    <Search className="mr-2 h-5 w-5" />
                    Scanner France 🇫🇷
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/swiss">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                  >
                    <Search className="mr-2 h-5 w-5" />
                    Scanner Suisse 🇨🇭
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navigation par système */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Accès rapide aux listes par pays</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* France */}
            <Card className="border-2 border-green-200 hover:border-green-400 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Flag className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-800">🇫🇷 Système français</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center mb-4">
                  <Badge className="bg-green-600 text-white text-lg px-4 py-2 mb-2">CMD • CD • CC</Badge>
                  <p className="text-gray-600">Codes 1-199 et 200+ • Préfixes E/U/S • Suffixes Z/X</p>
                </div>

                <div className="space-y-2">
                  <Link href="/liste-codes-pays-plaques-diplomatiques-francaises">
                    <Button
                      variant="outline"
                      className="w-full justify-between bg-transparent border-green-200 hover:bg-green-50"
                    >
                      <span>📋 Liste complète codes France</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>

                  <Link href="/comment-lire-une-plaque-diplomatique-francaise">
                    <Button
                      variant="outline"
                      className="w-full justify-between bg-transparent border-green-200 hover:bg-green-50"
                    >
                      <span>📖 Guide de lecture France</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Exemples français :</h4>
                  <div className="space-y-1 text-sm">
                    <div className="font-mono bg-green-600 text-orange-400 px-2 py-1 rounded inline-block mr-2">
                      1 CMD 001
                    </div>
                    <span className="text-green-800">Ambassadeur USA</span>
                  </div>
                  <div className="space-y-1 text-sm mt-1">
                    <div className="font-mono bg-green-600 text-orange-400 px-2 py-1 rounded inline-block mr-2">
                      5 CD 1234
                    </div>
                    <span className="text-green-800">Personnel allemand</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Suisse */}
            <Card className="border-2 border-red-200 hover:border-red-400 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-2xl text-red-800">🇨🇭 Système suisse</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center mb-4">
                  <Badge className="bg-red-600 text-white text-lg px-4 py-2 mb-2">CD • CC • AT</Badge>
                  <p className="text-gray-600">Cantons BE/GE/ZH • Couleurs spéciales • Organisations</p>
                </div>

                <div className="space-y-2">
                  <Link href="/codes-diplomatiques-suisses">
                    <Button
                      variant="outline"
                      className="w-full justify-between bg-transparent border-red-200 hover:bg-red-50"
                    >
                      <span>📋 Liste complète codes Suisse</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>

                  <Link href="/comment-lire-une-plaque-diplomatique-suisse">
                    <Button
                      variant="outline"
                      className="w-full justify-between bg-transparent border-red-200 hover:bg-red-50"
                    >
                      <span>📖 Guide de lecture Suisse</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">Exemples suisses :</h4>
                  <div className="space-y-1 text-sm">
                    <div className="font-mono bg-red-600 text-white px-2 py-1 rounded inline-block mr-2">
                      CD GE 1 • 1
                    </div>
                    <span className="text-red-800">Ambassadeur USA ONU</span>
                  </div>
                  <div className="space-y-1 text-sm mt-1">
                    <div className="font-mono bg-blue-600 text-white px-2 py-1 rounded inline-block mr-2">
                      AT GE 8 • 150
                    </div>
                    <span className="text-red-800">Personnel OMS</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Organisations internationales */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Building className="mr-3 h-6 w-6 text-purple-600" />
                Organisations internationales principales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">🇺🇳 Nations Unies</h4>
                  <p className="text-sm text-blue-800 mb-2">Genève, New York, Vienne</p>
                  <div className="text-xs space-y-1">
                    <div>
                      <span className="font-mono bg-blue-600 text-white px-1 rounded">AT GE • 100</span> ONU Genève
                    </div>
                    <div>
                      <span className="font-mono bg-blue-600 text-white px-1 rounded">UN 001</span> ONU New York
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">🏥 OMS</h4>
                  <p className="text-sm text-green-800 mb-2">Organisation Mondiale Santé</p>
                  <div className="text-xs space-y-1">
                    <div>
                      <span className="font-mono bg-green-600 text-white px-1 rounded">AT GE • 150</span> OMS Genève
                    </div>
                    <div>
                      <span className="font-mono bg-green-600 text-orange-400 px-1 rounded">U 150 CD</span> OMS Paris
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-900 mb-2">🏛️ OCDE</h4>
                  <p className="text-sm text-red-800 mb-2">Organisation Coopération Développement</p>
                  <div className="text-xs space-y-1">
                    <div>
                      <span className="font-mono bg-green-600 text-orange-400 px-1 rounded">E 5 CD 123</span> Allemagne
                      OCDE
                    </div>
                    <div>
                      <span className="font-mono bg-green-600 text-orange-400 px-1 rounded">E 1 CMD 1</span> USA OCDE
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-2">📚 UNESCO</h4>
                  <p className="text-sm text-purple-800 mb-2">Éducation, Science, Culture</p>
                  <div className="text-xs space-y-1">
                    <div>
                      <span className="font-mono bg-green-600 text-orange-400 px-1 rounded">U 104 CD 89</span> Suède
                      UNESCO
                    </div>
                    <div>
                      <span className="font-mono bg-green-600 text-orange-400 px-1 rounded">U 62 CMD 3</span> Japon
                      UNESCO
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-900 mb-2">⚕️ CICR</h4>
                  <p className="text-sm text-orange-800 mb-2">Comité International Croix-Rouge</p>
                  <div className="text-xs space-y-1">
                    <div>
                      <span className="font-mono bg-red-600 text-white px-1 rounded">CD GE 1 • 15</span> CICR Genève
                    </div>
                    <div>
                      <span className="font-mono bg-red-600 text-white px-1 rounded">AT GE 5 • 15</span> Personnel CICR
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                  <h4 className="font-semibold text-teal-900 mb-2">🔬 CERN</h4>
                  <p className="text-sm text-teal-800 mb-2">Organisation Européenne Recherche</p>
                  <div className="text-xs space-y-1">
                    <div>
                      <span className="font-mono bg-red-600 text-white px-1 rounded">AT GE 12 • 200</span> CERN
                    </div>
                    <div>
                      <span className="font-mono bg-red-600 text-white px-1 rounded">CD GE 3 • 200</span> Directeur CERN
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Guides et ressources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Guides et ressources</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/qu-est-ce-qu-une-plaque-diplomatique">
              <Card className="border-blue-200 hover:bg-blue-50 transition-colors cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-blue-800 mb-2">Qu'est-ce qu'une plaque diplomatique ?</h3>
                  <p className="text-sm text-gray-600">Définition, utilité et histoire</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/privileges-immunites-plaques-diplomatiques">
              <Card className="border-green-200 hover:bg-green-50 transition-colors cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Badge className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-green-800 mb-2">Privilèges & Immunités</h3>
                  <p className="text-sm text-gray-600">Droits et protections diplomatiques</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/faq-plaques-diplomatiques">
              <Card className="border-purple-200 hover:bg-purple-50 transition-colors cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <List className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-purple-800 mb-2">FAQ Complète</h3>
                  <p className="text-sm text-gray-600">Questions fréquentes</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/history">
              <Card className="border-orange-200 hover:bg-orange-50 transition-colors cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Search className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-orange-800 mb-2">Historique Scans</h3>
                  <p className="text-sm text-gray-600">Vos recherches sauvegardées</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* CTA Final */}
        <section>
          <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Prêt à identifier des plaques diplomatiques ?</h2>
              <p className="text-xl mb-6 opacity-90">
                Utilisez notre scanner IA pour identifier instantanément n'importe quelle plaque diplomatique
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/french">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    <Search className="mr-2 h-5 w-5" />
                    Commencer avec la France
                  </Button>
                </Link>
                <Link href="/swiss">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                  >
                    <Search className="mr-2 h-5 w-5" />
                    Commencer avec la Suisse
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">
            © 2024 Diplo Scanner. Liste complète des plaques diplomatiques France & Suisse.
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
              Conditions d'utilisation
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white text-sm">
              Cookies
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white text-sm">
              À propos
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
