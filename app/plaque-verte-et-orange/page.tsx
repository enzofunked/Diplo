import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search, Palette, Globe, Flag, Eye, Info, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Plaque verte et orange : Guide complet plaques diplomatiques françaises 2024",
  description:
    "Tout savoir sur les plaques vertes et orange : plaques diplomatiques françaises (CD, CC, CMD). Signification, codes pays, privilèges et exemples concrets.",
  keywords: [
    "plaque verte et orange",
    "plaques vertes et orange",
    "plaque verte orange",
    "plaque diplomatique verte orange",
    "plaque immatriculation vert et orange",
    "plaque immat verte et orange",
    "signification plaque verte orange",
    "plaque CD verte orange",
    "plaque CC verte orange",
    "plaque CMD verte orange",
    "plaque diplomatique france",
    "couleur plaque diplomatique",
    "plaque ambassade verte orange",
    "plaque consulat verte orange",
    "codes pays plaque verte orange",
    "privilèges plaque verte orange",
    "immunité plaque verte orange",
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
    title: "Plaque verte et orange : Guide complet diplomatique français",
    description:
      "Guide complet des plaques vertes et orange : plaques diplomatiques françaises avec codes, privilèges et exemples.",
    type: "article",
    url: "https://diplo-scanner.com/plaque-verte-et-orange",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=Plaque+verte+et+orange+guide",
        width: 1200,
        height: 630,
        alt: "Guide des plaques vertes et orange diplomatiques françaises",
      },
    ],
  },
  alternates: {
    canonical: "https://diplo-scanner.com/plaque-verte-et-orange",
  },
}

export default function PlaqueVerteEtOrangePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
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
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-orange-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Palette className="w-4 h-4" />
            <span>Couleurs diplomatiques</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Plaque verte et orange</h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Découvrez tout sur les <strong>plaques vertes et orange</strong> : les plaques diplomatiques françaises
            exclusives. Guide complet avec codes pays, privilèges et exemples concrets.
          </p>

          {/* Exemple visuel */}
          <div className="max-w-md mx-auto mb-8">
            <div className="bg-green-600 text-orange-400 p-6 rounded-lg font-mono text-3xl font-bold text-center border-4 border-gray-300 shadow-lg">
              5 CD 1234
            </div>
            <p className="text-sm text-gray-600 mt-2">Exemple typique : plaque diplomatique française</p>
          </div>
        </div>

        {/* CTA Scanner */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-600 to-orange-600 text-white border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Scanner automatique de plaques vertes et orange</h2>
              <p className="text-lg mb-6 opacity-90">
                Identifiez instantanément toutes les plaques diplomatiques françaises
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/french">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    <Search className="mr-2 h-5 w-5" />
                    Scanner France 🇫🇷
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/comment-lire-une-plaque-diplomatique-francaise">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
                  >
                    <Info className="mr-2 h-5 w-5" />
                    Guide complet
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Spécificité française */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Flag className="mr-3 h-6 w-6 text-green-600" />
                🇫🇷 Spécificité française unique
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-orange-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold text-green-900 mb-3">Pourquoi vert et orange ?</h3>
                <p className="text-green-800 mb-4">
                  La France est le <strong>seul pays au monde</strong> à utiliser cette combinaison de couleurs pour ses
                  plaques diplomatiques. Cette signature visuelle unique permet une identification immédiate.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-700">🎨 Choix des couleurs</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-green-100 rounded">
                      <div className="w-6 h-6 bg-green-600 rounded"></div>
                      <div>
                        <h4 className="font-semibold text-green-900">Vert foncé</h4>
                        <p className="text-sm text-green-700">Fond de la plaque, couleur principale</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-orange-100 rounded">
                      <div className="w-6 h-6 bg-orange-500 rounded"></div>
                      <div>
                        <h4 className="font-semibold text-orange-900">Orange vif</h4>
                        <p className="text-sm text-orange-700">Caractères, excellent contraste</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-700">🎯 Avantages pratiques</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Visibilité maximale :</strong> Contraste élevé jour et nuit
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Reconnaissance immédiate :</strong> Couleurs uniques au monde
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Sécurité renforcée :</strong> Impossible à imiter facilement
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Types de plaques vertes et orange */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Types de plaques vertes et orange</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {/* CMD */}
                <div className="p-6 bg-white border-2 border-green-200 rounded-lg">
                  <div className="text-center mb-4">
                    <Badge className="bg-green-600 text-white text-lg px-4 py-2 mb-3">CMD</Badge>
                    <h3 className="text-lg font-semibold text-green-900">Chef de Mission</h3>
                  </div>

                  <div className="bg-green-600 text-orange-400 p-3 rounded font-mono text-xl font-bold text-center mb-4">
                    1 CMD 001
                  </div>

                  <div className="space-y-3">
                    <div className="text-center p-3 bg-green-50 rounded">
                      <h4 className="font-semibold text-green-900 mb-1">Ambassadeurs</h4>
                      <p className="text-sm text-green-700">Plus haut rang diplomatique</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded">
                      <h4 className="font-semibold text-green-900 mb-1">Codes 1-199</h4>
                      <p className="text-sm text-green-700">Selon ordre alphabétique</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded">
                      <h4 className="font-semibold text-green-900 mb-1">Immunité totale</h4>
                      <p className="text-sm text-green-700">Protection maximale</p>
                    </div>
                  </div>
                </div>

                {/* CD */}
                <div className="p-6 bg-white border-2 border-blue-200 rounded-lg">
                  <div className="text-center mb-4">
                    <Badge className="bg-blue-600 text-white text-lg px-4 py-2 mb-3">CD</Badge>
                    <h3 className="text-lg font-semibold text-blue-900">Corps Diplomatique</h3>
                  </div>

                  <div className="bg-green-600 text-orange-400 p-3 rounded font-mono text-xl font-bold text-center mb-4">
                    5 CD 1234
                  </div>

                  <div className="space-y-3">
                    <div className="text-center p-3 bg-blue-50 rounded">
                      <h4 className="font-semibold text-blue-900 mb-1">Personnel diplomatique</h4>
                      <p className="text-sm text-blue-700">Conseillers, attachés</p>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded">
                      <h4 className="font-semibold text-blue-900 mb-1">Codes 1-199</h4>
                      <p className="text-sm text-blue-700">Même système que CMD</p>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded">
                      <h4 className="font-semibold text-blue-900 mb-1">Immunité diplomatique</h4>
                      <p className="text-sm text-blue-700">Protection complète</p>
                    </div>
                  </div>
                </div>

                {/* CC */}
                <div className="p-6 bg-white border-2 border-purple-200 rounded-lg">
                  <div className="text-center mb-4">
                    <Badge className="bg-purple-600 text-white text-lg px-4 py-2 mb-3">CC</Badge>
                    <h3 className="text-lg font-semibold text-purple-900">Corps Consulaire</h3>
                  </div>

                  <div className="bg-green-600 text-orange-400 p-3 rounded font-mono text-xl font-bold text-center mb-4">
                    12 CC 567
                  </div>

                  <div className="space-y-3">
                    <div className="text-center p-3 bg-purple-50 rounded">
                      <h4 className="font-semibold text-purple-900 mb-1">Personnel consulaire</h4>
                      <p className="text-sm text-purple-700">Consuls, vice-consuls</p>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded">
                      <h4 className="font-semibold text-purple-900 mb-1">Codes 1-199</h4>
                      <p className="text-sm text-purple-700">Classification identique</p>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded">
                      <h4 className="font-semibold text-purple-900 mb-1">Immunité consulaire</h4>
                      <p className="text-sm text-purple-700">Protection limitée</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Codes pays populaires */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Globe className="mr-3 h-6 w-6 text-blue-600" />
                Codes pays les plus fréquents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">🇺🇸</span>
                    <Badge className="bg-blue-600 text-white">Code 1</Badge>
                  </div>
                  <h4 className="font-semibold text-blue-900 mb-1">États-Unis</h4>
                  <div className="text-xs space-y-1">
                    <div>
                      <span className="font-mono bg-green-600 text-orange-400 px-1 rounded">1 CMD 001</span> Ambassadeur
                    </div>
                    <div>
                      <span className="font-mono bg-green-600 text-orange-400 px-1 rounded">1 CD 1234</span> Personnel
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">🇩🇪</span>
                    <Badge className="bg-green-600 text-white">Code 5</Badge>
                  </div>
                  <h4 className="font-semibold text-green-900 mb-1">Allemagne</h4>
                  <div className="text-xs space-y-1">
                    <div>
                      <span className="font-mono bg-green-600 text-orange-400 px-1 rounded">5 CMD 001</span> Ambassadeur
                    </div>
                    <div>
                      <span className="font-mono bg-green-600 text-orange-400 px-1 rounded">5 CD 1234</span> Personnel
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">🇬🇧</span>
                    <Badge className="bg-red-600 text-white">Code 9</Badge>
                  </div>
                  <h4 className="font-semibold text-red-900 mb-1">Royaume-Uni</h4>
                  <div className="text-xs space-y-1">
                    <div>
                      <span className="font-mono bg-green-600 text-orange-400 px-1 rounded">9 CMD 001</span> Ambassadeur
                    </div>
                    <div>
                      <span className="font-mono bg-green-600 text-orange-400 px-1 rounded">9 CD 1234</span> Personnel
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">🇪🇸</span>
                    <Badge className="bg-yellow-600 text-white">Code 12</Badge>
                  </div>
                  <h4 className="font-semibold text-yellow-900 mb-1">Espagne</h4>
                  <div className="text-xs space-y-1">
                    <div>
                      <span className="font-mono bg-green-600 text-orange-400 px-1 rounded">12 CMD 001</span>{" "}
                      Ambassadeur
                    </div>
                    <div>
                      <span className="font-mono bg-green-600 text-orange-400 px-1 rounded">12 CC 567</span> Consulaire
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">🇮🇹</span>
                    <Badge className="bg-purple-600 text-white">Code 15</Badge>
                  </div>
                  <h4 className="font-semibold text-purple-900 mb-1">Italie</h4>
                  <div className="text-xs space-y-1">
                    <div>
                      <span className="font-mono bg-green-600 text-orange-400 px-1 rounded">15 CMD 001</span>{" "}
                      Ambassadeur
                    </div>
                    <div>
                      <span className="font-mono bg-green-600 text-orange-400 px-1 rounded">15 CD 1234</span> Personnel
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">🇯🇵</span>
                    <Badge className="bg-teal-600 text-white">Code 62</Badge>
                  </div>
                  <h4 className="font-semibold text-teal-900 mb-1">Japon</h4>
                  <div className="text-xs space-y-1">
                    <div>
                      <span className="font-mono bg-green-600 text-orange-400 px-1 rounded">62 CMD 001</span>{" "}
                      Ambassadeur
                    </div>
                    <div>
                      <span className="font-mono bg-green-600 text-orange-400 px-1 rounded">62 CD 1234</span> Personnel
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">💡 Comment lire les codes</h4>
                    <p className="text-gray-700 text-sm">
                      Le <strong>premier chiffre</strong> indique le pays selon l'ordre alphabétique international. Plus
                      le chiffre est bas, plus le pays est proche du début de l'alphabet (USA = 1, Allemagne = 5, etc.).
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Privilèges spécifiques */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Users className="mr-3 h-6 w-6 text-purple-600" />
                Privilèges des plaques vertes et orange
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-700">✅ Droits accordés</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-2">🚫 Immunité juridique</h4>
                      <p className="text-green-800 text-sm">
                        Impossibilité d'être poursuivi devant les tribunaux français (sauf levée d'immunité)
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-2">💰 Exemptions fiscales</h4>
                      <p className="text-green-800 text-sm">
                        Pas de taxes, TVA, droits de douane sur les achats personnels et professionnels
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-2">🚗 Circulation libre</h4>
                      <p className="text-green-800 text-sm">
                        Stationnement privilégié, pas d'amendes de circulation, contrôles facilités
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-2">🔒 Inviolabilité</h4>
                      <p className="text-green-800 text-sm">
                        Véhicule diplomatique inviolable, fouilles interdites sauf accord
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-700">⚠️ Limites importantes</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-900 mb-2">👤 Usage personnel uniquement</h4>
                      <p className="text-red-800 text-sm">
                        Les privilèges ne s'appliquent qu'au titulaire diplomatique, pas aux tiers
                      </p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-900 mb-2">🚨 Crimes graves</h4>
                      <p className="text-red-800 text-sm">
                        L'immunité peut être levée pour les crimes les plus graves (avec accord du pays d'origine)
                      </p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-900 mb-2">📋 Obligations légales</h4>
                      <p className="text-red-800 text-sm">
                        Respect du code de la route recommandé, assurance obligatoire maintenue
                      </p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-900 mb-2">⏰ Durée limitée</h4>
                      <p className="text-red-800 text-sm">
                        Privilèges valables uniquement pendant la mission diplomatique
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Comment les reconnaître */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Eye className="mr-3 h-6 w-6 text-orange-600" />
                Comment reconnaître une plaque verte et orange ?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-700">🎯 Signes distinctifs</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-600 rounded flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-green-900 mb-1">Fond vert foncé</h4>
                        <p className="text-green-800 text-sm">Couleur verte mate, uniforme sur toute la plaque</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg">
                      <div className="w-8 h-8 bg-orange-500 rounded flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-orange-900 mb-1">Caractères orange vif</h4>
                        <p className="text-orange-800 text-sm">
                          Lettres et chiffres en orange fluorescent, très visible
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-600 rounded flex-shrink-0 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">CD</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-1">Codes spéciaux</h4>
                        <p className="text-blue-800 text-sm">
                          Présence obligatoire de CMD, CD ou CC dans l'immatriculation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-700">📋 Format type</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-white border-2 border-gray-300 rounded-lg">
                      <div className="bg-green-600 text-orange-400 p-3 rounded font-mono text-2xl font-bold text-center mb-3">
                        XX YYY ZZZ
                      </div>
                      <div className="text-sm space-y-2">
                        <div className="flex justify-between">
                          <span className="font-semibold">XX :</span>
                          <span>Code pays (1-199)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">YYY :</span>
                          <span>Type (CMD/CD/CC)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">ZZZ :</span>
                          <span>Numéro séquentiel</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Exemples concrets :</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="font-mono bg-green-600 text-orange-400 px-2 py-1 rounded">1 CMD 001</span>
                          <span className="text-gray-700">Ambassadeur USA</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-mono bg-green-600 text-orange-400 px-2 py-1 rounded">5 CD 1234</span>
                          <span className="text-gray-700">Diplomate allemand</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-mono bg-green-600 text-orange-400 px-2 py-1 rounded">12 CC 567</span>
                          <span className="text-gray-700">Consul espagnol</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Guides connexes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Guides connexes</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/comment-lire-une-plaque-diplomatique-francaise">
              <Card className="border-green-200 hover:bg-green-50 transition-colors cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Info className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-green-800 mb-2">Guide complet France</h3>
                  <p className="text-sm text-gray-600">Décoder toutes les plaques françaises</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/liste-codes-pays-plaques-diplomatiques-francaises">
              <Card className="border-blue-200 hover:bg-blue-50 transition-colors cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-blue-800 mb-2">Liste codes pays</h3>
                  <p className="text-sm text-gray-600">Tous les codes diplomatiques</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/couleur-des-plaques-diplomatiques">
              <Card className="border-purple-200 hover:bg-purple-50 transition-colors cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Palette className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-purple-800 mb-2">Guide des couleurs</h3>
                  <p className="text-sm text-gray-600">Toutes les couleurs diplomatiques</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/privileges-immunites-plaques-diplomatiques">
              <Card className="border-orange-200 hover:bg-orange-50 transition-colors cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-orange-600" />
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
          <Card className="bg-gradient-to-r from-green-600 to-orange-600 text-white border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Testez vos connaissances !</h2>
              <p className="text-xl mb-6 opacity-90">
                Utilisez notre scanner pour identifier toutes les plaques vertes et orange
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
                    <Globe className="mr-2 h-5 w-5" />
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
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">
            © 2024 Diplo Scanner. Guide complet des plaques vertes et orange diplomatiques françaises.
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
