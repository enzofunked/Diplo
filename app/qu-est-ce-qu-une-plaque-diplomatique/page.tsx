import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Car, Globe, History, Shield, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Qu'est-ce qu'une plaque diplomatique ? | Guide complet 2024",
  description:
    "Découvrez tout sur les plaques diplomatiques : définition, utilité, histoire et évolution. Guide complet pour comprendre l'immatriculation diplomatique en France et Suisse.",
  keywords: [
    "plaque diplomatique",
    "définition plaque diplomatique",
    "immatriculation diplomatique",
    "histoire plaques diplomatiques",
    "corps diplomatique",
    "ambassade",
    "consulat",
    "immunité diplomatique",
    "privilèges diplomatiques",
    "France",
    "Suisse",
  ],
  openGraph: {
    title: "Qu'est-ce qu'une plaque diplomatique ? | Guide complet",
    description:
      "Guide complet sur les plaques diplomatiques : définition, utilité dans le contexte diplomatique et aperçu historique de leur évolution.",
    type: "article",
    url: "https://diplo-scanner.com/qu-est-ce-qu-une-plaque-diplomatique",
    images: [
      {
        url: "/diplomatic-plate-guide.png",
        width: 1200,
        height: 630,
        alt: "Guide des plaques diplomatiques",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qu'est-ce qu'une plaque diplomatique ? | Guide complet",
    description: "Découvrez tout sur les plaques diplomatiques : définition, utilité et histoire complète.",
    images: ["/diplomatic-plate-guide.png"],
  },
  alternates: {
    canonical: "/qu-est-ce-qu-une-plaque-diplomatique",
  },
}

export default function DiplomaticPlatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-teal-600 hover:text-teal-700">
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Qu'est-ce qu'une plaque diplomatique ?</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez l'univers fascinant des plaques d'immatriculation diplomatiques, leur rôle essentiel dans les
            relations internationales et leur évolution à travers l'histoire.
          </p>
        </div>

        {/* CTA Banner */}
        <Card className="mb-12 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Identifiez instantanément une plaque diplomatique</h2>
            <p className="text-lg mb-6 opacity-90">
              Utilisez notre scanner gratuit pour décoder les plaques françaises et suisses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/french">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Scanner Français <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/swiss">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Scanner Suisse <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Definition Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Shield className="mr-3 h-6 w-6 text-teal-600" />
                Définition d'une plaque diplomatique
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
                <p className="text-lg font-medium text-gray-900 mb-3">
                  Une plaque diplomatique est une plaque d'immatriculation spéciale attribuée aux véhicules utilisés par
                  le personnel diplomatique et consulaire.
                </p>
                <p className="text-gray-700">
                  Ces plaques permettent d'identifier immédiatement les véhicules bénéficiant d'un statut diplomatique
                  particulier et des privilèges qui y sont associés, notamment l'immunité diplomatique dans certaines
                  circonstances.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Caractéristiques principales</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Couleurs distinctives (vert, bleu, blanc selon le pays)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Codes numériques identifiant le pays d'origine
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Lettres indiquant le statut diplomatique (CD, CMD, C, CC)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Numérotation séquentielle unique
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Types de statuts</h3>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="mr-2">
                      CD - Corps Diplomatique
                    </Badge>
                    <Badge variant="secondary" className="mr-2">
                      CMD - Chef de Mission
                    </Badge>
                    <Badge variant="secondary" className="mr-2">
                      C - Corps Consulaire
                    </Badge>
                    <Badge variant="secondary" className="mr-2">
                      CC - Chef Consulaire
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Utility Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Users className="mr-3 h-6 w-6 text-blue-600" />
                Utilité dans le contexte diplomatique
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Identification rapide</h3>
                  <p className="text-gray-600 text-sm">
                    Permet aux autorités d'identifier immédiatement les véhicules diplomatiques
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Privilèges diplomatiques</h3>
                  <p className="text-gray-600 text-sm">
                    Facilite l'application des immunités et privilèges diplomatiques
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Car className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Sécurité renforcée</h3>
                  <p className="text-gray-600 text-sm">Améliore la sécurité du personnel diplomatique en déplacement</p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Avantages pratiques</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Exemption de certaines taxes et redevances</li>
                    <li>• Facilitation des contrôles douaniers</li>
                    <li>• Stationnement privilégié dans certaines zones</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Protection contre certaines infractions routières</li>
                    <li>• Reconnaissance internationale du statut</li>
                    <li>• Facilitation des déplacements officiels</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Historical Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <History className="mr-3 h-6 w-6 text-amber-600" />
                Aperçu historique et évolution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-amber-200"></div>

                <div className="relative pl-12 pb-8">
                  <div className="absolute left-2 w-4 h-4 bg-amber-500 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">XVIIe - XVIIIe siècles</h3>
                  <p className="text-gray-700">
                    Les premiers privilèges diplomatiques concernaient les carrosses et équipages des ambassadeurs. Des
                    marques distinctives étaient déjà utilisées pour identifier les véhicules diplomatiques.
                  </p>
                </div>

                <div className="relative pl-12 pb-8">
                  <div className="absolute left-2 w-4 h-4 bg-amber-500 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Début XXe siècle</h3>
                  <p className="text-gray-700">
                    Avec l'avènement de l'automobile, les premiers systèmes de plaques diplomatiques sont mis en place.
                    La Convention de Vienne de 1961 standardise les privilèges diplomatiques.
                  </p>
                </div>

                <div className="relative pl-12 pb-8">
                  <div className="absolute left-2 w-4 h-4 bg-amber-500 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Années 1960-1980</h3>
                  <p className="text-gray-700">
                    Harmonisation progressive des systèmes européens. Introduction des codes pays et des lettres de
                    statut pour une identification plus précise.
                  </p>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-2 w-4 h-4 bg-amber-500 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Époque moderne</h3>
                  <p className="text-gray-700">
                    Digitalisation des systèmes d'enregistrement, amélioration de la sécurité avec des technologies
                    anti-contrefaçon, et harmonisation internationale accrue.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Évolutions récentes</h3>
                <p className="text-gray-700 mb-3">
                  Les plaques diplomatiques modernes intègrent des technologies avancées :
                </p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Matériaux réfléchissants pour une meilleure visibilité</li>
                  <li>• Systèmes de sécurité anti-contrefaçon</li>
                  <li>• Bases de données numériques centralisées</li>
                  <li>• Harmonisation des formats au niveau européen</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Examples Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Exemples de plaques diplomatiques</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Système français</h3>
                  <div className="bg-green-600 text-orange-400 p-4 rounded-lg font-mono text-center text-2xl font-bold mb-4">
                    5 CD 1234
                  </div>
                  <p className="text-gray-700 mb-3">
                    <strong>5</strong> = Code pays (Allemagne)
                    <br />
                    <strong>CD</strong> = Corps Diplomatique
                    <br />
                    <strong>1234</strong> = Numéro séquentiel
                  </p>
                  <Link href="/french">
                    <Button variant="outline" className="w-full bg-transparent">
                      Tester le scanner français
                    </Button>
                  </Link>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Système suisse</h3>
                  <div className="bg-blue-600 text-white p-4 rounded-lg font-mono text-center text-2xl font-bold mb-4">
                    CD BE 9 • 1
                  </div>
                  <p className="text-gray-700 mb-3">
                    <strong>CD</strong> = Corps Diplomatique
                    <br />
                    <strong>BE</strong> = Canton de Berne
                    <br />
                    <strong>9 • 1</strong> = Série et code pays (USA)
                  </p>
                  <Link href="/swiss">
                    <Button variant="outline" className="w-full bg-transparent">
                      Tester le scanner suisse
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-teal-600 to-blue-700 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Prêt à identifier des plaques diplomatiques ?</h2>
              <p className="text-xl mb-6 opacity-90">
                Utilisez notre outil gratuit pour décoder instantanément les plaques françaises et suisses
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Commencer maintenant
                  </Button>
                </Link>
                <Link href="/french/guide">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
                  >
                    Guide détaillé
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Related Links */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Liens utiles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/french/codes" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold text-teal-600 mb-2">Codes français</h3>
                  <p className="text-sm text-gray-600">Liste complète des codes diplomatiques français</p>
                </Link>
                <Link href="/swiss/codes" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold text-blue-600 mb-2">Codes suisses</h3>
                  <p className="text-sm text-gray-600">Répertoire des codes diplomatiques suisses</p>
                </Link>
                <Link href="/history" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold text-purple-600 mb-2">Historique</h3>
                  <p className="text-sm text-gray-600">Vos recherches précédentes sauvegardées</p>
                </Link>
                <Link href="/help" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold text-amber-600 mb-2">Aide</h3>
                  <p className="text-sm text-gray-600">Questions fréquentes et support</p>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Diplo Scanner. Outil gratuit d'identification des plaques diplomatiques.
          </p>
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
