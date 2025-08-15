import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search, Shield, Globe, Car, Users, Building, Info, Eye } from "lucide-react"

export const metadata: Metadata = {
  title: "Plaque immatriculation verte : Guide complet 2024 | Diplomatique, Transit, Temporaire",
  description:
    "Tout savoir sur les plaques d'immatriculation vertes : plaques diplomatiques, plaques de transit, plaques temporaires. Guide complet avec exemples et significations.",
  keywords: [
    "plaque immatriculation verte",
    "plaque d'immatriculation verte",
    "plaque verte voiture",
    "plaque verte",
    "plaques vertes",
    "plaque vert voiture",
    "plaque verte et orange",
    "plaques vertes et orange",
    "plaque diplomatique verte",
    "plaque transit verte",
    "plaque temporaire verte",
    "signification plaque verte",
    "pourquoi plaque verte",
    "types plaques vertes",
    "plaque verte france",
    "plaque verte suisse",
    "immatriculation verte diplomatique",
    "plaque verte corps diplomatique",
    "plaque verte ambassade",
    "plaque verte consulat",
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
    title: "Plaque immatriculation verte : Guide complet 2024",
    description:
      "Guide complet des plaques d'immatriculation vertes : diplomatiques, transit, temporaires avec exemples.",
    type: "article",
    url: "https://diplo-scanner.com/plaque-immatriculation-verte",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=Plaque+immatriculation+verte+guide",
        width: 1200,
        height: 630,
        alt: "Guide complet des plaques d'immatriculation vertes",
      },
    ],
  },
  alternates: {
    canonical: "https://diplo-scanner.com/plaque-immatriculation-verte",
  },
}

export default function PlaqueImmatriculationVertePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-green-600 hover:text-green-700">
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
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Car className="w-4 h-4" />
            <span>Guide complet</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Plaque d'immatriculation verte : tout comprendre
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Découvrez tous les types de <strong>plaques d'immatriculation vertes</strong> : diplomatiques, de transit,
            temporaires. Guide complet avec exemples, significations et privilèges associés.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-600">4</div>
              <div className="text-sm text-gray-600">Types principaux</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600">2</div>
              <div className="text-sm text-gray-600">Pays couverts</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-purple-600">200+</div>
              <div className="text-sm text-gray-600">Codes pays</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-orange-600">100%</div>
              <div className="text-sm text-gray-600">Identification</div>
            </div>
          </div>
        </div>

        {/* CTA Scanner */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Scanner automatique de plaques vertes</h2>
              <p className="text-lg mb-6 opacity-90">
                Identifiez instantanément n'importe quelle plaque verte avec notre scanner IA
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
                    className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
                  >
                    <Search className="mr-2 h-5 w-5" />
                    Scanner Suisse 🇨🇭
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Types de plaques vertes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Les différents types de plaques vertes</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Plaques diplomatiques */}
            <Card className="border-2 border-green-200 hover:border-green-400 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-800">🌍 Plaques diplomatiques</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center mb-4">
                  <Badge className="bg-green-600 text-white text-lg px-4 py-2 mb-2">CMD • CD • CC</Badge>
                  <p className="text-gray-600">Ambassades, consulats, organisations internationales</p>
                </div>

                <div className="bg-green-600 text-orange-400 p-4 rounded font-mono text-2xl font-bold text-center mb-4">
                  5 CD 1234
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                    <span className="font-semibold">Couleur :</span>
                    <span className="text-green-700">Vert foncé + orange</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                    <span className="font-semibold">Privilèges :</span>
                    <span className="text-green-700">Immunité diplomatique</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                    <span className="font-semibold">Pays :</span>
                    <span className="text-green-700">France principalement</span>
                  </div>
                </div>

                <Link href="/comment-lire-une-plaque-diplomatique-francaise">
                  <Button variant="outline" className="w-full border-green-200 hover:bg-green-50 bg-transparent">
                    <Info className="mr-2 h-4 w-4" />
                    Guide complet diplomatique
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Plaques de transit */}
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-800">🚗 Plaques de transit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center mb-4">
                  <Badge className="bg-blue-600 text-white text-lg px-4 py-2 mb-2">TT • TRANSIT</Badge>
                  <p className="text-gray-600">Véhicules en transit temporaire</p>
                </div>

                <div className="bg-green-600 text-white p-4 rounded font-mono text-2xl font-bold text-center mb-4">
                  TT 1234 AB
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                    <span className="font-semibold">Couleur :</span>
                    <span className="text-blue-700">Vert + blanc</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                    <span className="font-semibold">Durée :</span>
                    <span className="text-blue-700">Temporaire (1-6 mois)</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                    <span className="font-semibold">Usage :</span>
                    <span className="text-blue-700">Import/Export</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full border-blue-200 hover:bg-blue-50 bg-transparent" disabled>
                  <Info className="mr-2 h-4 w-4" />
                  Guide transit (bientôt)
                </Button>
              </CardContent>
            </Card>

            {/* Plaques temporaires */}
            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl text-purple-800">⏰ Plaques temporaires</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center mb-4">
                  <Badge className="bg-purple-600 text-white text-lg px-4 py-2 mb-2">TEMP • WW</Badge>
                  <p className="text-gray-600">Immatriculations provisoires</p>
                </div>

                <div className="bg-green-600 text-white p-4 rounded font-mono text-2xl font-bold text-center mb-4">
                  WW 123 AB
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded">
                    <span className="font-semibold">Couleur :</span>
                    <span className="text-purple-700">Vert + blanc</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded">
                    <span className="font-semibold">Durée :</span>
                    <span className="text-purple-700">1-4 mois</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded">
                    <span className="font-semibold">Usage :</span>
                    <span className="text-purple-700">Attente immat. définitive</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-purple-200 hover:bg-purple-50 bg-transparent"
                  disabled
                >
                  <Info className="mr-2 h-4 w-4" />
                  Guide temporaire (bientôt)
                </Button>
              </CardContent>
            </Card>

            {/* Plaques spéciales */}
            <Card className="border-2 border-orange-200 hover:border-orange-400 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl text-orange-800">⭐ Plaques spéciales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center mb-4">
                  <Badge className="bg-orange-600 text-white text-lg px-4 py-2 mb-2">SPEC • ADMIN</Badge>
                  <p className="text-gray-600">Administrations, services spéciaux</p>
                </div>

                <div className="bg-green-600 text-white p-4 rounded font-mono text-2xl font-bold text-center mb-4">
                  ADMIN 123
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded">
                    <span className="font-semibold">Couleur :</span>
                    <span className="text-orange-700">Vert + blanc</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded">
                    <span className="font-semibold">Usage :</span>
                    <span className="text-orange-700">Services publics</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded">
                    <span className="font-semibold">Statut :</span>
                    <span className="text-orange-700">Privilèges limités</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-orange-200 hover:bg-orange-50 bg-transparent"
                  disabled
                >
                  <Info className="mr-2 h-4 w-4" />
                  Guide spéciales (bientôt)
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pourquoi les plaques sont vertes */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Eye className="mr-3 h-6 w-6 text-green-600" />
                Pourquoi certaines plaques sont-elles vertes ?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-700">🎯 Raisons historiques</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Distinction visuelle :</strong> Séparer les véhicules spéciaux des véhicules civils
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Tradition diplomatique :</strong> Couleur choisie dans les années 1960
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Reconnaissance internationale :</strong> Standard adopté par plusieurs pays
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-700">🔍 Avantages pratiques</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Identification rapide :</strong> Forces de l'ordre reconnaissent immédiatement
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Contrôles facilités :</strong> Statut spécial visible de loin
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Sécurité renforcée :</strong> Protection des personnalités diplomatiques
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-3">🌍 Le vert dans le monde</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl mb-2">🇫🇷</div>
                    <h5 className="font-semibold text-green-800">France</h5>
                    <p className="text-sm text-gray-600">Vert foncé + orange</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl mb-2">🇨🇭</div>
                    <h5 className="font-semibold text-green-800">Suisse</h5>
                    <p className="text-sm text-gray-600">Vert pour ambassades</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl mb-2">🇪🇺</div>
                    <h5 className="font-semibold text-green-800">Europe</h5>
                    <p className="text-sm text-gray-600">Diverses nuances</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Comment reconnaître */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Comment reconnaître une plaque verte ?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-700">✅ Signes distinctifs</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-2">🎨 Couleur</h4>
                      <p className="text-green-800">
                        Fond <strong>vert foncé</strong> ou <strong>vert clair</strong> selon le type
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-2">🔤 Caractères</h4>
                      <p className="text-green-800">
                        Lettres et chiffres en <strong>blanc</strong> ou <strong>orange</strong>
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-2">📝 Format</h4>
                      <p className="text-green-800">
                        Codes spéciaux : <strong>CD</strong>, <strong>CC</strong>, <strong>CMD</strong>,{" "}
                        <strong>TT</strong>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-700">❌ À ne pas confondre</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-900 mb-2">🚗 Plaques normales</h4>
                      <p className="text-red-800">
                        Plaques civiles <strong>blanches</strong> avec bande bleue européenne
                      </p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-900 mb-2">🚛 Plaques commerciales</h4>
                      <p className="text-red-800">
                        Plaques professionnelles <strong>jaunes</strong> ou <strong>blanches</strong>
                      </p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-900 mb-2">🏍️ Plaques motos</h4>
                      <p className="text-red-800">
                        Format plus petit, généralement <strong>blanches</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Privilèges et droits */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Shield className="mr-3 h-6 w-6 text-purple-600" />
                Privilèges associés aux plaques vertes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-center mb-4">
                    <Globe className="w-12 h-12 text-green-600 mx-auto mb-2" />
                    <h3 className="text-lg font-semibold text-green-900">Plaques diplomatiques</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Immunité diplomatique complète
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Exemption taxes et amendes
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Inviolabilité du véhicule
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Libre circulation
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-center mb-4">
                    <Car className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <h3 className="text-lg font-semibold text-blue-900">Plaques de transit</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Circulation temporaire autorisée
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Exemption contrôle technique
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Durée limitée (1-6 mois)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Usage spécifique défini
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-center mb-4">
                    <Shield className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                    <h3 className="text-lg font-semibold text-purple-900">Plaques temporaires</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-purple-800">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Immatriculation provisoire
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Assurance obligatoire
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Contrôles normaux applicables
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Validité courte durée
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-start space-x-3">
                  <Info className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Important à retenir</h4>
                    <p className="text-yellow-800">
                      Les privilèges varient selon le type de plaque verte. Seules les{" "}
                      <strong>plaques diplomatiques</strong> bénéficient de l'immunité complète. Les autres types ont
                      des privilèges limités et spécifiques à leur usage.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Guides spécialisés */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Guides spécialisés par type</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/comment-lire-une-plaque-diplomatique-francaise">
              <Card className="border-green-200 hover:bg-green-50 transition-colors cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-green-800 mb-2">Guide diplomatique France</h3>
                  <p className="text-sm text-gray-600">Décoder les plaques CD, CC, CMD</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/comment-lire-une-plaque-diplomatique-suisse">
              <Card className="border-red-200 hover:bg-red-50 transition-colors cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Building className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-red-800 mb-2">Guide diplomatique Suisse</h3>
                  <p className="text-sm text-gray-600">Système couleurs unique</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/couleur-des-plaques-diplomatiques">
              <Card className="border-purple-200 hover:bg-purple-50 transition-colors cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-purple-800 mb-2">Guide des couleurs</h3>
                  <p className="text-sm text-gray-600">Signification des couleurs</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/privileges-immunites-plaques-diplomatiques">
              <Card className="border-orange-200 hover:bg-orange-50 transition-colors cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-orange-800 mb-2">Privilèges & Immunités</h3>
                  <p className="text-sm text-gray-600">Droits et protections</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* CTA Final */}
        <section>
          <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Identifiez n'importe quelle plaque verte !</h2>
              <p className="text-xl mb-6 opacity-90">
                Scanner IA qui reconnaît tous les types de plaques vertes : diplomatiques, transit, temporaires
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/french">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    <Search className="mr-2 h-5 w-5" />
                    Scanner maintenant
                  </Button>
                </Link>
                <Link href="/plaques-diplomatiques-liste-complete">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
                  >
                    <Building className="mr-2 h-5 w-5" />
                    Voir toutes les listes
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
            © 2024 Diplo Scanner. Guide complet des plaques d'immatriculation vertes.
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
