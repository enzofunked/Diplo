import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Users, FileText, AlertTriangle, Car, Globe } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Différences plaques consulaires vs diplomatiques | Guide complet 2024",
  description:
    "Découvrez les différences clés entre plaques consulaires et diplomatiques : codes CD/CC, privilèges, immunités et identification des véhicules officiels étrangers.",
  keywords:
    "plaque consulaire, plaque diplomatique, différences, CD, CC, CMD, corps diplomatique, corps consulaire, immunité diplomatique, véhicules officiels",
  openGraph: {
    title: "Différences plaques consulaires vs diplomatiques | Guide complet",
    description:
      "Guide détaillé sur les différences entre plaques consulaires et diplomatiques : codes, privilèges et identification.",
    type: "article",
    url: "https://diplo-scanner.com/differences-plaques-consulaires-diplomatiques",
  },
  alternates: {
    canonical: "https://diplo-scanner.com/differences-plaques-consulaires-diplomatiques",
  },
}

export default function DifferencesPlaquesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Button>
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Différences clés entre plaques consulaires et plaques diplomatiques
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Comprendre leur rôle et leurs spécificités pour identifier correctement les véhicules officiels étrangers
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              Les <strong>véhicules officiels étrangers</strong> attirent régulièrement l'attention grâce à leurs{" "}
              <strong>plaques d'immatriculation</strong> si particulières. Parmi ces identifiants spéciaux, les{" "}
              <strong>plaques diplomatiques</strong> et les <strong>plaques consulaires</strong> occupent une place
              singulière sur nos routes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Elles ne servent pas uniquement à distinguer le <strong>corps diplomatique</strong> du{" "}
              <strong>corps consulaire</strong> ; elles impliquent aussi des règles, des{" "}
              <strong>codes spécifiques</strong> et des avantages particuliers. Comprendre ces différences permet de
              mieux identifier la mission de chaque véhicule et d'en saisir les implications dans la vie courante.
            </p>
          </CardContent>
        </Card>

        {/* Plaques diplomatiques */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              Identification et signification des plaques diplomatiques
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              La <strong>plaque diplomatique</strong> a avant tout pour fonction d'assurer la reconnaissance immédiate
              des <strong>missions diplomatiques</strong> présentes sur le territoire national. Sa{" "}
              <strong>couleur verte</strong> caractéristique, parfois agrémentée de caractères blancs ou orange, en fait
              un symbole clair d'<strong>immunité</strong> et de fonctions officielles.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Les véhicules arborant ce type de plaques appartiennent généralement aux <strong>ambassades</strong>,
              chancelleries, <strong>délégations permanentes</strong> ou encore organisations internationales. Cette
              signalétique facilite l'identification par les autorités et permet une gestion efficace des{" "}
              <strong>privilèges accordés au corps diplomatique</strong>.
            </p>
          </CardContent>
        </Card>

        {/* Plaques consulaires */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              Caractéristiques des plaques consulaires
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              Contrairement aux plaques diplomatiques, les <strong>plaques consulaires</strong> sont réservées à
              l'identification des membres du <strong>corps consulaire</strong>. Elles offrent également une
              reconnaissance officielle dans le cadre des <strong>missions consulaires</strong> comme les consulats
              généraux, consulats honoraires ou vice-consulats.
            </p>
            <p className="text-gray-700 leading-relaxed">
              La <strong>couleur</strong> et l'<strong>apparence des plaques consulaires</strong> varient selon les pays
              ou les administrations locales, mais elles restent souvent proches du vert classique, sauf si un autre
              code couleur est adopté. La signalétique propre aux plaques consulaires aide les autorités à{" "}
              <strong>identifier rapidement la nature des fonctions du conducteur</strong>.
            </p>
          </CardContent>
        </Card>

        {/* Codes et abréviations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-600" />
              Décoder les lettres et abréviations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold mb-4">Principaux codes utilisés</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Distinguer une <strong>plaque consulaire</strong> d'une <strong>plaque diplomatique</strong> repose
              largement sur la lecture de certains <strong>codes et abréviations</strong> :
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <Badge variant="destructive" className="mb-2 text-sm">
                  CD
                </Badge>
                <p className="text-sm text-gray-600">Corps Diplomatique ou Chef de Mission Diplomatique</p>
              </div>
              <div className="text-center">
                <Badge variant="secondary" className="mb-2 text-sm">
                  CC
                </Badge>
                <p className="text-sm text-gray-600">Corps Consulaire, dédié aux fonctions consulaires</p>
              </div>
              <div className="text-center">
                <Badge className="mb-2 text-sm">CMD</Badge>
                <p className="text-sm text-gray-600">Chef de Mission Diplomatique (variantes locales)</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-4">Pourquoi utiliser des couleurs différentes ?</h3>
            <p className="text-gray-700 leading-relaxed">
              L'utilisation de <strong>couleurs variées</strong> sur les plaques d'immatriculation simplifie la tâche
              des forces de l'ordre et permet à chacun d'associer immédiatement le <strong>statut du véhicule</strong>{" "}
              observé. La <strong>plaque d'immatriculation verte</strong> est notamment synonyme de protection accrue et
              d'immunités diplomatiques.
            </p>
          </CardContent>
        </Card>

        {/* Différences pratiques */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Car className="w-5 h-5 text-orange-600" />
              Différences pratiques entre les deux types de plaques
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold mb-4">Statut juridique et protection des véhicules</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Un véhicule doté d'une <strong>plaque diplomatique</strong> bénéficie le plus souvent d'une vaste{" "}
              <strong>immunité</strong>, couvrant à la fois le propriétaire et parfois les passagers, lorsque le
              véhicule appartient officiellement à une <strong>ambassade</strong> ou une mission étrangère reconnue.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              À l'opposé, une <strong>plaque consulaire</strong> octroie une reconnaissance professionnelle sans
              garantir de privilèges aussi larges. Si une protection existe, elle concerne essentiellement l'exercice de
              la <strong>fonction consulaire</strong> elle-même.
            </p>

            <h3 className="text-lg font-semibold mb-4">Catégories de véhicules concernés</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Véhicules éligibles :</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Véhicules d'ambassadeurs et de ministres plénipotentiaires</li>
                <li>Automobiles de consuls généraux et honoraires</li>
                <li>Voitures de service des organisations internationales</li>
                <li>Parc automobile lié à la sécurité ou à la logistique des missions étrangères</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-indigo-600" />
              Questions fréquentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div itemScope itemType="https://schema.org/FAQPage">
              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-6">
                <h3 itemProp="name" className="text-lg font-semibold mb-2">
                  À quoi sert une plaque diplomatique par rapport à une plaque consulaire ?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-gray-700 leading-relaxed">
                    <p className="mb-3">
                      Une <strong>plaque diplomatique</strong> identifie le véhicule appartenant à une{" "}
                      <strong>mission diplomatique</strong>, conférant des privilèges issus des traités internationaux
                      comme l'immunité. À l'inverse, la <strong>plaque consulaire</strong> concerne le personnel du
                      corps consulaire, offrant une reconnaissance et certaines facilités, mais rarement l'immunité
                      complète.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-3 rounded">
                        <strong>Plaque diplomatique :</strong> ambassade, organisation internationale
                      </div>
                      <div className="bg-blue-50 p-3 rounded">
                        <strong>Plaque consulaire :</strong> consulat, bureau annexe
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-6">
                <h3 itemProp="name" className="text-lg font-semibold mb-2">
                  Comment reconnaître visuellement une plaque d'immatriculation verte ?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-gray-700 leading-relaxed">
                    <p className="mb-3">
                      La <strong>plaque d'immatriculation verte</strong> est très utilisée pour les{" "}
                      <strong>véhicules diplomatiques</strong> et ceux de certaines institutions internationales. Elle
                      se reconnaît à sa teinte distinctive associée à des caractères blancs ou jaunes et à des
                      abréviations telles que <strong>CD</strong> ou <strong>CMD</strong>.
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Lettrage blanc/orange sur fond vert (diplomaties)</li>
                      <li>Sigle visible en début ou fin de numéro</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-6">
                <h3 itemProp="name" className="text-lg font-semibold mb-2">
                  Quels privilèges accorde une plaque diplomatique au conducteur ?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-gray-700 leading-relaxed">
                    <p className="mb-4">
                      Détenir une <strong>plaque diplomatique</strong> offre une gamme de privilèges, dont l'
                      <strong>immunité de juridiction civile et pénale</strong> selon les conventions applicables. La{" "}
                      <strong>plaque consulaire</strong> n'accorde pas systématiquement d'immunité, mais assure une
                      protection relative dans le cadre du travail consulaire.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-2 text-left">Type de plaque</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Immunité totale</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Reconnaissance officielle</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">Diplomatique</td>
                            <td className="border border-gray-300 px-4 py-2">Oui (sous conditions)</td>
                            <td className="border border-gray-300 px-4 py-2">Oui</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">Consulaire</td>
                            <td className="border border-gray-300 px-4 py-2">Limitée/Non</td>
                            <td className="border border-gray-300 px-4 py-2">Oui</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 itemProp="name" className="text-lg font-semibold mb-2">
                  Quelles sanctions si une plaque diplomatique ou consulaire est utilisée abusivement ?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-gray-700 leading-relaxed">
                    <p className="mb-3">
                      L'utilisation frauduleuse de <strong>plaques diplomatiques</strong> ou{" "}
                      <strong>consulaires</strong> expose à des peines prévues par le code de la route et par des textes
                      internationaux. Des enquêtes administratives entraînent la levée des privilèges et peuvent
                      conduire à l'expulsion ou au rapatriement des contrevenants.
                    </p>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-red-800 mb-2">Sanctions possibles :</h4>
                          <ul className="list-disc list-inside space-y-1 text-red-700">
                            <li>Retrait temporaire ou définitif de la plaque spéciale</li>
                            <li>Procédure judiciaire si la fraude est avérée</li>
                            <li>Confiscation du véhicule et sanctions pécuniaires</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Scanner Links Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Car className="w-5 h-5 text-green-600" />
              Scannez vos plaques diplomatiques
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-6">
              Maintenant que vous connaissez les différences entre plaques consulaires et diplomatiques, utilisez nos
              scanners spécialisés pour identifier précisément les plaques que vous rencontrez :
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/" className="block">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200 hover:border-green-300 transition-all hover:shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                      <Car className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-green-800">Scanner universel</h3>
                  </div>
                  <p className="text-sm text-green-700 mb-3">
                    Identifiez automatiquement les plaques françaises et suisses avec notre IA avancée
                  </p>
                  <Badge className="bg-green-600 text-white">Recommandé</Badge>
                </div>
              </Link>

              <Link href="/french" className="block">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 hover:border-blue-300 transition-all hover:shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-blue-800">Plaques françaises</h3>
                  </div>
                  <p className="text-sm text-blue-700 mb-3">
                    Scanner spécialisé pour les plaques diplomatiques françaises (CD, CMD, CC)
                  </p>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Spécialisé France
                  </Badge>
                </div>
              </Link>

              <Link href="/swiss" className="block">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border border-red-200 hover:border-red-300 transition-all hover:shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-red-800">Plaques suisses</h3>
                  </div>
                  <p className="text-sm text-red-700 mb-3">
                    Scanner dédié aux plaques diplomatiques suisses (CD GE, CD ZH, etc.)
                  </p>
                  <Badge variant="secondary" className="bg-red-100 text-red-800">
                    Spécialisé Suisse
                  </Badge>
                </div>
              </Link>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-gray-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Fonctionnalités des scanners :</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Reconnaissance automatique par caméra ou upload d'image</li>
                    <li>• Identification des codes pays et types de missions</li>
                    <li>• Historique des scans et système de favoris</li>
                    <li>• Base de données complète des codes diplomatiques</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation footer */}
        <div className="text-center">
          <Link href="/">
            <Button className="bg-green-600 hover:bg-green-700">Retour au scanner de plaques</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
