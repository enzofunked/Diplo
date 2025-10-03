import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, MapPin, Users, Calendar, Eye, BookOpen, ArrowRight, Info, Flag, Car } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Comment lire une plaque diplomatique suisse ? Guide complet 2024",
  description:
    "Apprenez à décoder les plaques diplomatiques suisses : couleurs, codes pays, format et signification. Guide détaillé avec exemples concrets.",
  keywords: [
    "plaque diplomatique suisse",
    "code diplomatique suisse",
    "plaque immatriculation diplomatique",
    "corps diplomatique suisse",
    "genève diplomatique",
    "mission diplomatique suisse",
    "consulat suisse",
    "ambassade suisse",
    "immunité diplomatique",
    "privilège diplomatique",
  ],
  openGraph: {
    title: "Comment lire une plaque diplomatique suisse ? Guide complet",
    description: "Guide détaillé pour comprendre et décoder les plaques diplomatiques suisses avec exemples pratiques.",
    type: "article",
    url: "https://diplo-scanner.com/comment-lire-une-plaque-diplomatique-suisse",
    images: [
      {
        url: "/images/plaque-diplomatique-suisse-geneve.png",
        width: 1200,
        height: 630,
        alt: "Exemple de plaque diplomatique suisse de Genève",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comment lire une plaque diplomatique suisse ?",
    description: "Guide complet pour décoder les plaques diplomatiques suisses",
    images: ["/images/plaque-diplomatique-suisse-geneve.png"],
  },
  alternates: {
    canonical: "https://diplo-scanner.com/comment-lire-une-plaque-diplomatique-suisse",
  },
}

export default function CommentLireUnePlaqueDiplomatiqueSuissePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Comment lire une plaque diplomatique suisse ?</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Guide complet pour décoder les plaques diplomatiques suisses avec exemples pratiques
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/swiss">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Car className="mr-2 h-5 w-5" />
                  Scanner une plaque suisse
                </Button>
              </Link>
              <Link href="/codes-diplomatiques-suisses">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Liste des codes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-blue-600" />
                Introduction aux plaques diplomatiques suisses
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-gray-700">
                La Suisse, en tant que pays hôte de nombreuses organisations internationales, utilise un système
                spécifique de plaques d'immatriculation pour identifier les véhicules diplomatiques et consulaires.
              </p>
              <p className="text-gray-600">
                Ces plaques permettent d'identifier immédiatement le statut diplomatique du véhicule et le pays ou
                l'organisation qu'il représente.
              </p>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-800 mb-2">Points clés à retenir :</h3>
                <ul className="space-y-1 text-blue-700">
                  <li>• La couleur révèle immédiatement le type de mission</li>
                  <li>• Les codes numériques identifient le pays ou l'organisation</li>
                  <li>• Le format varie selon le canton (principalement Genève et Berne)</li>
                  <li>• Chaque plaque confère des privilèges et immunités spécifiques</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Format et structure */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-6 w-6 text-green-600" />
                Format et structure des plaques suisses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Structure générale</h3>

                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-center text-xl">GE 123-456</div>

                  <p className="text-sm text-gray-600">Format typique d'une plaque diplomatique genevoise</p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-green-600">Éléments :</h4>
                      <ul className="space-y-1 text-sm text-gray-600 ml-4">
                        <li>
                          • <strong>GE</strong> : Canton (Genève)
                        </li>
                        <li>
                          • <strong>123</strong> : Code pays/organisation
                        </li>
                        <li>
                          • <strong>456</strong> : Numéro séquentiel
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Types de plaques</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                      <div className="w-4 h-4 bg-red-500 rounded"></div>
                      <div>
                        <div className="font-semibold">Rouge</div>
                        <div className="text-sm text-gray-600">Corps diplomatique</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="w-4 h-4 bg-blue-500 rounded"></div>
                      <div>
                        <div className="font-semibold">Bleue</div>
                        <div className="text-sm text-gray-600">Personnel consulaire</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <div>
                        <div className="font-semibold">Verte</div>
                        <div className="text-sm text-gray-600">Organisations internationales</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Image exemple */}
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <Image
                  src="/images/plaque-diplomatique-suisse-geneve.png"
                  alt="Exemple de plaque diplomatique suisse de Genève avec code pays et format typique"
                  width={600}
                  height={200}
                  className="mx-auto rounded-lg shadow-md"
                  priority
                />
                <p className="text-sm text-gray-600 mt-2">
                  Exemple typique d'une plaque diplomatique suisse du canton de Genève
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Exemples pratiques */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Flag className="h-6 w-6 text-red-600" />
                Exemples pratiques de décodage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50">
                  <div className="font-mono text-lg font-bold">GE 001-234</div>
                  <p className="text-sm text-gray-700 mt-1">
                    <strong>Décodage :</strong> Véhicule diplomatique français (001) immatriculé à Genève
                  </p>
                  <p className="text-xs text-gray-600">Plaque rouge = Corps diplomatique</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
                  <div className="font-mono text-lg font-bold">GE 076-567</div>
                  <p className="text-sm text-gray-700 mt-1">
                    <strong>Décodage :</strong> Véhicule consulaire allemand (076) immatriculé à Genève
                  </p>
                  <p className="text-xs text-gray-600">Plaque bleue = Personnel consulaire</p>
                </div>

                <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50">
                  <div className="font-mono text-lg font-bold">GE 800-123</div>
                  <p className="text-sm text-gray-700 mt-1">
                    <strong>Décodage :</strong> Véhicule d'organisation internationale (800+) à Genève
                  </p>
                  <p className="text-xs text-gray-600">Plaque verte = Organisation internationale</p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link href="/swiss">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Car className="mr-2 h-4 w-4" />
                    Tester avec notre scanner
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Historique et évolution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-6 w-6 text-purple-600" />
                Historique et évolution du système suisse
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">1945 - Création du système</h3>
                    <p className="text-gray-600">
                      Mise en place du premier système de plaques diplomatiques suisses avec l'installation des
                      organisations internationales à Genève.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">1960 - Standardisation</h3>
                    <p className="text-gray-600">
                      Harmonisation du système entre les cantons de Genève et Berne, principaux centres diplomatiques
                      suisses.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">1990 - Extension</h3>
                    <p className="text-gray-600">
                      Extension du système aux organisations internationales avec l'introduction des plaques vertes
                      spécifiques.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">2000 - Modernisation</h3>
                    <p className="text-gray-600">
                      Modernisation du système avec l'introduction de nouvelles technologies et l'harmonisation
                      européenne.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
            <CardContent className="p-8 text-center">
              <Shield className="h-16 w-16 mx-auto mb-4 text-blue-200" />
              <h2 className="text-2xl font-bold mb-4">Prêt à décoder des plaques diplomatiques suisses ?</h2>
              <p className="text-lg mb-6 text-blue-100">
                Utilisez notre scanner intelligent pour identifier instantanément n'importe quelle plaque diplomatique
                suisse.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/swiss">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                    <Car className="mr-2 h-5 w-5" />
                    Scanner maintenant
                  </Button>
                </Link>
                <Link href="/codes-diplomatiques-suisses">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                  >
                    <BookOpen className="mr-2 h-5 w-5" />
                    Voir tous les codes
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Navigation vers autres guides */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Flag className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Guide français</h3>
                <p className="text-gray-600 mb-4">
                  Apprenez à décoder les plaques diplomatiques françaises avec notre guide détaillé.
                </p>
                <Link href="/comment-lire-une-plaque-diplomatique-francaise">
                  <Button variant="outline" className="w-full bg-transparent">
                    Lire le guide français
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Info className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Qu'est-ce qu'une plaque diplomatique ?</h3>
                <p className="text-gray-600 mb-4">Découvrez les bases des plaques diplomatiques et leur importance.</p>
                <Link href="/qu-est-ce-qu-une-plaque-diplomatique">
                  <Button variant="outline" className="w-full bg-transparent">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
