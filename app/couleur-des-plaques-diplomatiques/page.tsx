import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Palette, Eye, Info, Globe, Flag } from "lucide-react"

export const metadata: Metadata = {
  title: "Couleur des plaques diplomatiques : Guide complet France & Suisse 2024",
  description:
    "Découvrez la signification des couleurs des plaques diplomatiques : vert France, bleu/vert/blanc Suisse. Guide complet des codes couleurs diplomatiques par pays et statut.",
  keywords: [
    "couleur des plaques diplomatiques",
    "couleur plaque diplomatique",
    "plaques diplomatiques couleurs",
    "plaque diplomatique verte",
    "plaque diplomatique bleue",
    "plaque diplomatique blanche",
    "couleurs plaques CD",
    "couleurs plaques CC",
    "couleurs plaques CMD",
    "système couleurs diplomatiques",
    "identification couleur diplomatique",
    "signification couleurs diplomatiques",
    "plaques diplomatiques france couleur",
    "plaques diplomatiques suisse couleur",
    "code couleur diplomatique",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Couleur des plaques diplomatiques : Guide complet",
    description:
      "Guide complet des couleurs des plaques diplomatiques France & Suisse avec significations et exemples.",
    type: "article",
    url: "https://diplo-scanner.com/couleur-des-plaques-diplomatiques",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=Couleurs+plaques+diplomatiques",
        width: 1200,
        height: 630,
        alt: "Guide des couleurs des plaques diplomatiques",
      },
    ],
  },
  alternates: {
    canonical: "https://diplo-scanner.com/couleur-des-plaques-diplomatiques",
  },
}

export default function CouleurPlaquesDiplomatiquesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
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
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Palette className="w-4 h-4" />
            <span>Guide des couleurs</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Couleur des plaques diplomatiques</h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez la <strong>signification des couleurs des plaques diplomatiques</strong> en France et en Suisse.
            Chaque couleur révèle le statut et le type de mission diplomatique.
          </p>
        </div>

        {/* CTA Scanner */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Identifiez les couleurs avec notre scanner</h2>
              <p className="text-lg mb-6 opacity-90">
                Scanner automatique qui reconnaît les couleurs et identifie le statut diplomatique
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/french">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    <Eye className="mr-2 h-5 w-5" />
                    Scanner France 🇫🇷
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/swiss">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
                  >
                    <Eye className="mr-2 h-5 w-5" />
                    Scanner Suisse 🇨🇭
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Système français */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Flag className="mr-3 h-6 w-6 text-green-600" />
                🇫🇷 Couleurs des plaques diplomatiques françaises
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold text-green-900 mb-3">Système uniforme français</h3>
                <p className="text-green-800 mb-4">
                  La France utilise un <strong>système de couleur unique</strong> pour toutes ses plaques diplomatiques,
                  quelle que soit le statut (CMD, CD, CC).
                </p>
              </div>

              <div className="grid md:grid-cols-1 gap-6">
                <div className="p-6 bg-white border-2 border-green-200 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-600 rounded border-2 border-gray-300"></div>
                      <h3 className="text-xl font-bold text-gray-900">Vert foncé avec caractères orange</h3>
                    </div>
                    <Badge className="bg-green-600 text-white">Unique</Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-green-600 text-orange-400 p-4 rounded font-mono text-2xl font-bold text-center">
                      5 CD 1234
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-green-50 rounded">
                        <Badge className="bg-green-600 text-white mb-2">CMD</Badge>
                        <p className="text-sm text-green-800">Chef de Mission Diplomatique</p>
                        <p className="text-xs text-gray-600 mt-1">Même couleur verte</p>
                      </div>

                      <div className="text-center p-4 bg-green-50 rounded">
                        <Badge className="bg-green-600 text-white mb-2">CD</Badge>
                        <p className="text-sm text-green-800">Corps Diplomatique</p>
                        <p className="text-xs text-gray-600 mt-1">Même couleur verte</p>
                      </div>

                      <div className="text-center p-4 bg-green-50 rounded">
                        <Badge className="bg-green-600 text-white mb-2">CC</Badge>
                        <p className="text-sm text-green-800">Corps Consulaire</p>
                        <p className="text-xs text-gray-600 mt-1">Même couleur verte</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-3">💡 Pourquoi cette couleur unique ?</h4>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Simplicité d'identification :</strong> Une seule couleur pour tous les diplomates
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Tradition historique :</strong> Couleur choisie dans les années 1960
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Visibilité optimale :</strong> Contraste élevé vert/orange
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Système suisse */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Globe className="mr-3 h-6 w-6 text-red-600" />
                🇨🇭 Couleurs des plaques diplomatiques suisses
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="font-semibold text-red-900 mb-3">Système révolutionnaire suisse</h3>
                <p className="text-red-800 mb-4">
                  La Suisse utilise un <strong>système de couleurs unique au monde</strong> qui permet d'identifier
                  instantanément le type de mission diplomatique grâce à la couleur.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Plaques bleues */}
                <div className="p-6 bg-white border-2 border-blue-200 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-600 rounded border-2 border-gray-300"></div>
                      <h3 className="text-lg font-bold text-gray-900">Bleues</h3>
                    </div>
                    <Badge className="bg-blue-600 text-white">OI</Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-blue-600 text-white p-3 rounded font-mono text-lg font-bold text-center">
                      AT GE 8 • 150
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Organisations Internationales</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• ONU (Nations Unies)</li>
                        <li>• OMS (Organisation Mondiale Santé)</li>
                        <li>• CICR (Croix-Rouge)</li>
                        <li>• CERN (Recherche nucléaire)</li>
                        <li>• OMC (Organisation Mondiale Commerce)</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-3 rounded">
                      <p className="text-xs text-blue-700">
                        <strong>Localisation :</strong> Principalement Genève (siège européen ONU)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Plaques vertes */}
                <div className="p-6 bg-white border-2 border-green-200 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-600 rounded border-2 border-gray-300"></div>
                      <h3 className="text-lg font-bold text-gray-900">Vertes</h3>
                    </div>
                    <Badge className="bg-green-600 text-white">CD</Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-green-600 text-white p-3 rounded font-mono text-lg font-bold text-center">
                      CD BE 9 • 1
                    </div>

                    <div>
                      <h4 className="font-semibold text-green-900 mb-2">Ambassades Bilatérales</h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• Corps Diplomatique (CD)</li>
                        <li>• Ambassadeurs</li>
                        <li>• Personnel diplomatique</li>
                        <li>• Relations bilatérales</li>
                        <li>• Missions permanentes</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-xs text-green-700">
                        <strong>Localisation :</strong> Principalement Berne (capitale fédérale)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Plaques blanches */}
                <div className="p-6 bg-white border-2 border-gray-300 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-100 rounded border-2 border-gray-400"></div>
                      <h3 className="text-lg font-bold text-gray-900">Blanches</h3>
                    </div>
                    <Badge className="bg-gray-600 text-white">CC</Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-100 text-gray-800 p-3 rounded font-mono text-lg font-bold text-center border-2 border-gray-300">
                      CC ZH 25 • 4
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Corps Consulaire</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Consulats généraux</li>
                        <li>• Vice-consulats</li>
                        <li>• Agents consulaires</li>
                        <li>• Services consulaires</li>
                        <li>• Représentations locales</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-xs text-gray-600">
                        <strong>Localisation :</strong> Toutes les villes suisses (Zurich, Bâle, etc.)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-3">🎯 Avantages du système suisse</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-purple-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Identification instantanée</strong> du type de mission
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Facilite les contrôles</strong> des forces de l'ordre
                    </li>
                  </ul>
                  <ul className="space-y-2 text-purple-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Améliore la sécurité</strong> diplomatique
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Système unique</strong> au monde
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Comparaison */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Info className="mr-3 h-6 w-6 text-orange-600" />
                Comparaison des systèmes de couleurs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left p-4 font-semibold">Critère</th>
                      <th className="text-center p-4 font-semibold">🇫🇷 France</th>
                      <th className="text-center p-4 font-semibold">🇨🇭 Suisse</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-medium">Nombre de couleurs</td>
                      <td className="p-4 text-center">
                        <Badge className="bg-green-600">1 couleur</Badge>
                      </td>
                      <td className="p-4 text-center">
                        <Badge className="bg-blue-600 mr-1">3</Badge>
                        <Badge className="bg-green-600 mr-1">couleurs</Badge>
                        <Badge className="bg-gray-600">principales</Badge>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-medium">Identification</td>
                      <td className="p-4 text-center text-green-700">Par codes (CMD/CD/CC)</td>
                      <td className="p-4 text-center text-blue-700">Par couleur + codes</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-medium">Simplicité</td>
                      <td className="p-4 text-center">⭐⭐⭐⭐⭐</td>
                      <td className="p-4 text-center">⭐⭐⭐</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-medium">Information visuelle</td>
                      <td className="p-4 text-center">⭐⭐</td>
                      <td className="p-4 text-center">⭐⭐⭐⭐⭐</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Unicité mondiale</td>
                      <td className="p-4 text-center">Standard</td>
                      <td className="p-4 text-center">
                        <Badge className="bg-purple-600">Unique</Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Conseils pratiques */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Conseils pour reconnaître les couleurs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-700">✅ France : Reconnaissance facile</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Vert foncé</strong> = toujours diplomatique
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Caractères orange</strong> = signature française
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Lire les <strong>codes</strong> pour le statut exact
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-700">🎯 Suisse : Système couleurs</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Bleu</strong> = Organisations internationales
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Vert</strong> = Ambassades bilatérales
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Blanc</strong> = Corps consulaire
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Final */}
        <section>
          <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Testez vos connaissances !</h2>
              <p className="text-xl mb-6 opacity-90">
                Utilisez notre scanner pour identifier les couleurs et statuts diplomatiques
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/french">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    <Palette className="mr-2 h-5 w-5" />
                    Tester système français
                  </Button>
                </Link>
                <Link href="/swiss">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
                  >
                    <Palette className="mr-2 h-5 w-5" />
                    Tester système suisse
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
          <p className="text-gray-400">© 2024 Diplo Scanner. Guide complet des couleurs des plaques diplomatiques.</p>
          <div className="flex justify-center space-x-6 mt-4">
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
