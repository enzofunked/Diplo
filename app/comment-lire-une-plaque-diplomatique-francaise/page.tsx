import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Eye, Globe, Info, MapPin, Search, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Comment lire une plaque diplomatique française ? | Guide détaillé 2024",
  description:
    "Apprenez à déchiffrer une plaque diplomatique française : codes pays, statuts diplomatiques, numérotation. Guide complet avec exemples pratiques et explications détaillées.",
  keywords: [
    "lire plaque diplomatique française",
    "déchiffrer plaque diplomatique",
    "codes pays diplomatiques France",
    "plaque CD France",
    "plaque CMD France",
    "statut diplomatique France",
    "ambassade France",
    "consulat France",
    "corps diplomatique français",
    "immatriculation diplomatique française",
  ],
  openGraph: {
    title: "Comment lire une plaque diplomatique française ? | Guide détaillé",
    description:
      "Guide complet pour déchiffrer les plaques diplomatiques françaises : codes pays, statuts et significations.",
    type: "article",
    url: "https://diplo-scanner.com/comment-lire-une-plaque-diplomatique-francaise",
    images: [
      {
        url: "/images/exemple-plaque-diplomatique-francaise.png",
        width: 1200,
        height: 630,
        alt: "Exemple de plaque diplomatique française avec explications détaillées - 5 CD 1234 Allemagne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comment lire une plaque diplomatique française ? | Guide détaillé",
    description: "Apprenez à déchiffrer facilement les plaques diplomatiques françaises avec notre guide complet.",
    images: ["/images/exemple-plaque-diplomatique-francaise.png"],
  },
  alternates: {
    canonical: "/comment-lire-une-plaque-diplomatique-francaise",
  },
}

export default function FrenchDiplomaticGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-teal-600 hover:text-teal-700">
              Diplo Scanner
            </Link>
            <div className="flex gap-2">
              <Link href="/qu-est-ce-qu-une-plaque-diplomatique">
                <Button variant="outline" size="sm">
                  Qu'est-ce qu'une plaque diplomatique ?
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" size="sm">
                  Retour à l'accueil
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comment lire une plaque diplomatique française ?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Maîtrisez l'art de déchiffrer les plaques diplomatiques françaises grâce à notre guide complet. Découvrez la
            signification de chaque élément et identifiez instantanément le pays d'origine et le statut diplomatique.
          </p>
        </div>

        {/* Featured Image - Optimized for SEO */}
        <section className="mb-12">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <figure className="relative">
                <Image
                  src="/images/exemple-plaque-diplomatique-francaise.png"
                  alt="Exemple détaillé d'une plaque diplomatique française 5 CD 1234 avec explications : 5 = code Allemagne, CD = Corps Diplomatique, 1234 = numéro véhicule"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
                <figcaption className="p-4 bg-gray-50 text-sm text-gray-700 text-center">
                  <strong>Exemple pratique :</strong> Plaque diplomatique française 5 CD 1234 - Véhicule du corps
                  diplomatique allemand (code pays 5)
                </figcaption>
              </figure>
            </CardContent>
          </Card>
        </section>

        {/* CTA Banner */}
        <Card className="mb-12 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Identifiez une plaque diplomatique avec notre scanner</h2>
            <p className="text-lg mb-6 opacity-90">
              Utilisez notre outil gratuit pour identifier instantanément les plaques diplomatiques françaises
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/french">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  <Search className="mr-2 h-5 w-5" />
                  Scanner une plaque française
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/french/codes">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
                >
                  Liste des codes pays
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Premier texte */}
        <section className="mb-12">
          <h2 className="flex items-center text-3xl font-bold text-gray-900 mb-6">
            <Globe className="mr-3 h-6 w-6 text-orange-600" />
            Comprendre les plaques d'immatriculation vertes : comment rechercher un code diplomatique
          </h2>
          <Card>
            <CardContent className="prose prose-orange max-w-none">
              <p>
                Les <strong>plaques d'immatriculation vertes</strong> suscitent souvent la curiosité auprès des
                automobilistes et professionnels de la route. Inhabituelles sur nos routes, elles signalent pourtant un{" "}
                <strong>statut précis</strong> et confèrent à leur détenteur des <strong>privilèges singuliers</strong>.
                Pour toute personne amenée à croiser ou identifier ce type de plaque, bien comprendre son codage et sa
                signification représente un véritable atout, notamment lorsqu'il s'agit de{" "}
                <strong>rechercher un code diplomatique</strong> associé à un véhicule.
              </p>
              <p>
                Voyons quels sont les <strong>codes visibles</strong> sur ces plaques, quelles informations ils livrent
                sur l'origine du véhicule et ses utilisateurs, ainsi que les avantages liés à ce type d'immatriculation.
                Ce guide vous aidera à reconnaître facilement une <strong>plaque diplomatique</strong> et à décoder ses
                éléments clés lors d'une recherche.
              </p>

              <h3>Caractéristiques des plaques diplomatiques vertes</h3>
              <p>
                Les <strong>plaques d'immatriculation vertes</strong> sont principalement réservées aux véhicules
                utilisés dans le cadre <strong>diplomatique</strong> ou <strong>consulaire</strong>. Ce format
                particulier permet aux autorités comme au grand public de distinguer rapidement ce type de voiture des
                autres grâce à une couleur spécifique et à des inscriptions distinctives.
              </p>
              <p>
                En France, par exemple, la couleur <strong>verte jaspe</strong> est associée aux véhicules engageant une{" "}
                <strong>représentation internationale</strong>. Les inscriptions varient selon le statut du propriétaire
                : <strong>lettres orange</strong> pour les membres du <strong>corps diplomatique</strong>,{" "}
                <strong>lettres blanches</strong> pour les membres du personnel consulaire ou administratif. Ce
                contraste facilite une identification efficace en toutes circonstances.
              </p>

              <h3>Organisation et signification des codes</h3>
              <p>
                Chaque <strong>plaque verte</strong> comporte une <strong>structure normalisée</strong>, pensée pour
                délivrer plusieurs types d'informations essentielles. Apprendre à lire cette composition constitue la
                base pour retrouver un <strong>code pays</strong> ou distinguer le <strong>statut exact</strong> du
                porteur de la plaque.
              </p>
              <p>La plupart des plaques comprennent trois parties essentielles :</p>
              <ul>
                <li>
                  <strong>Un préfixe</strong> indiquant la nature du <strong>statut diplomatique</strong> (par exemple :
                  CD pour Corps Diplomatique, C pour Consulaire, CMD pour Chef de Mission Diplomatique).
                </li>
                <li>
                  <strong>Un code pays</strong> composé généralement de deux lettres désignant l'État ou l'
                  <strong>organisation internationale</strong> représenté.
                </li>
                <li>
                  <strong>Un numéro séquentiel</strong> attribué individuellement à chaque véhicule.
                </li>
              </ul>

              <h4>Variations et exemples courants</h4>
              <p>
                Il existe plusieurs dérivés selon la mission ou la fonction du titulaire. Par exemple, la lettre{" "}
                <strong>K</strong> indique un membre du <strong>personnel technique</strong>, tandis que des codes
                spécifiques comme <strong>E</strong>, <strong>N</strong>, <strong>S</strong> ou <strong>U</strong>{" "}
                informent sur l'appartenance à une <strong>organisation internationale</strong> (OCDE, OTAN, Conseil de
                l'Europe ou UNESCO).
              </p>
              <p>
                Voici une configuration typique : « <strong>1234 CD XX</strong> ». Ici, 1234 fait référence au pays
                accréditant,
                <strong>CD</strong> évoque le Corps Diplomatique, <strong>XX</strong> identifie le véhicule. Un autre
                exemple : « 5 CMD 789 Z », le{" "}
                <Link
                  href="https://www.diplo-scanner.com/liste-codes-pays-plaques-diplomatiques-francaises"
                  className="text-green-600 underline hover:text-blue-800"
                >
                  code diplomatique
                </Link>{" "}
                <strong>5</strong> signifie que le véhicule est rattaché à l'Allemagne. Le <strong>CMD</strong> marque
                le chef de mission diplomatique (ambassadeur), 789 correspond à l'identification individuelle du
                véhicule et <strong>Z</strong> précise une exonération fiscale.
              </p>

              <h4>Différences avec d'autres systèmes de plaques</h4>
              <p>
                Contrairement aux <strong>plaques blanches classiques</strong>, qui n'indiquent ni fonction ni
                provenance spécifique, les <strong>plaques vertes</strong> transmettent systématiquement ces deux
                informations. Elles se démarquent aussi des <strong>plaques rouges</strong> (véhicules étrangers
                temporaires) ou des nouvelles plaques dédiées aux <strong>voitures électriques</strong>, désormais
                répandues dans certains pays européens.
              </p>
              <p>
                Cette structuration spécialisée participe à la <strong>sécurité</strong> et à la{" "}
                <strong>transparence</strong> des déplacements internationaux sur le territoire hôte, tout en
                garantissant certains droits liés à la mission confiée.
              </p>

              <h3>Démarches et intérêts pratiques de la recherche d'un code diplomatique</h3>
              <p>
                Rechercher à qui appartient une <strong>plaque verte</strong> implique généralement d'identifier le{" "}
                <strong>code pays</strong> ou l'<strong>organisme international</strong> lié au véhicule. Cette étape
                s'avère essentielle pour les <strong>agents de sécurité</strong> ou les professionnels du stationnement,
                mais elle intéresse aussi le citoyen curieux ou l'étudiant en droit international.
              </p>
              <p>
                L'identification commence toujours par la lecture attentive du <strong>préfixe</strong>, puis du{" "}
                <strong>code géographique/isopays</strong> figurant à la fin de la combinaison alphanumérique. Plusieurs
                listes officielles, mises à jour par le <strong>Ministère des Affaires étrangères</strong>, répertorient
                la correspondance complète entre les lettres présentes sur la plaque et les États ou organismes
                concernés.
              </p>

              <h4>Bénéfices liés au statut diplomatique</h4>
              <ul>
                <li>
                  <strong>L'immunité diplomatique</strong> limitant la juridiction locale sur le véhicule.
                </li>
                <li>
                  <strong>L'exemption de certaines taxes</strong>, dont la TVA et les droits d'importation.
                </li>
                <li>
                  <strong>La reconnaissance instantanée</strong> par les forces de l'ordre lors de contrôles.
                </li>
              </ul>
              <p>
                Néanmoins, ces privilèges peuvent être suspendus ou retirés en cas de non-respect des règles, de vol,
                d'accidents graves ou de transfert de véhicule hors du cercle consulaire ou diplomatique autorisé.
              </p>

              <h4>Qui peut obtenir ce type de plaque ?</h4>
              <p>
                Outre les <strong>ambassadeurs</strong> et les <strong>diplomates traditionnels</strong>, les membres de
                délégations permanentes auprès d'organisations internationales, des personnels administratifs attachés
                et parfois des <strong>organisations non gouvernementales</strong> dotées de missions officielles ont
                accès à ces plaques. Le processus d'enregistrement mobilise obligatoirement le{" "}
                <strong>Ministère des Affaires étrangères</strong> afin d'assurer la validité du statut.
              </p>
              <p>
                Dans certains cas, des véhicules liés à des activités <strong>commerciales internationales</strong>{" "}
                peuvent également y prétendre, à condition que leur usage principal soit reconnu conforme à la mission
                diplomatique définie.
              </p>

              <h3>Évolution, innovations et tendances récentes</h3>
              <p>
                Le système d'attribution des <strong>plaques vertes</strong> connaît des évolutions régulières. À mesure
                que la <strong>mobilité internationale</strong> se complexifie et que la sécurité doit s'adapter à de
                nouveaux risques, le <strong>codage des plaques</strong> devient plus réfléchi. On observe l'émergence
                de <strong>nouveaux préfixes</strong>, notamment pour mieux distinguer des institutions internationales
                en expansion.
              </p>
              <p>
                Avec le développement des <strong>technologies numériques</strong>, il est de plus en plus courant
                d'utiliser des outils ou bases de données en ligne pour vérifier instantanément à quelle entité
                appartiennent certains codes. Cela facilite la gestion de la circulation, optimise la lutte contre la
                fraude et anticipe les adaptations futures nécessaires dans la pratique diplomatique mondiale.
              </p>

              <h3>Questions fréquentes</h3>
              <div itemScope itemType="https://schema.org/FAQPage">
                <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h4 itemProp="name">Comment identifier l'origine d'une plaque diplomatique verte ?</h4>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text">
                      Pour trouver l'origine d'une <strong>plaque diplomatique verte</strong>, il faut analyser le{" "}
                      <strong>code de deux lettres</strong> situé généralement à la fin de la plaque.
                      <ul>
                        <li>
                          Lire attentivement toutes les parties de la plaque : <strong>préfixe</strong>,{" "}
                          <strong>numéro individuel</strong>, <strong>suffixe pays/organisation</strong>.
                        </li>
                        <li>
                          Comparer le code vu avec des <strong>listes officielles</strong> publiées par les autorités
                          compétentes.
                        </li>
                      </ul>
                      <table>
                        <tr>
                          <th>Code</th>
                          <th>Signification</th>
                        </tr>
                        <tr>
                          <td>CD</td>
                          <td>Corps Diplomatique</td>
                        </tr>
                        <tr>
                          <td>C</td>
                          <td>Corps consulaire</td>
                        </tr>
                        <tr>
                          <td>E</td>
                          <td>OCDE</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                <strong>À retenir :</strong> Pour rester informé des évolutions concernant les{" "}
                <strong>codes diplomatiques</strong> et l'<strong>immatriculation</strong> des véhicules officiels, il
                est recommandé de consulter régulièrement les listes officielles éditées par les autorités nationales
                compétentes.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Structure Overview */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Eye className="mr-3 h-6 w-6 text-green-600" />
                Structure d'une plaque diplomatique française
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-green-600 text-orange-400 p-8 rounded-lg font-mono text-center text-4xl font-bold mb-6 shadow-lg">
                5 CD 1234
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Code Pays</h3>
                  <p className="text-gray-700 text-sm">
                    Identifie le pays d'origine de la mission diplomatique (ici : Allemagne)
                  </p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg border-2 border-green-200">
                  <div className="text-3xl font-bold text-green-600 mb-2">CD</div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Statut</h3>
                  <p className="text-gray-700 text-sm">Indique le type de mission diplomatique (Corps Diplomatique)</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg border-2 border-purple-200">
                  <div className="text-3xl font-bold text-purple-600 mb-2">1234</div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Numéro</h3>
                  <p className="text-gray-700 text-sm">Numéro séquentiel unique attribué au véhicule</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Éléments optionnels</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                      <h4 className="font-semibold text-orange-900 mb-2">Préfixes organisationnels</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="font-mono bg-orange-200 px-2 py-1 rounded">E</span>
                          <span className="text-orange-800">OCDE</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-mono bg-orange-200 px-2 py-1 rounded">U</span>
                          <span className="text-orange-800">UNESCO</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-mono bg-orange-200 px-2 py-1 rounded">S</span>
                          <span className="text-orange-800">Conseil de l'Europe</span>
                        </div>
                      </div>
                      <p className="text-xs text-orange-700 mt-2">
                        Exemple : <span className="font-mono">E 5 CD 123</span> = Allemagne rattaché à l'OCDE
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                      <h4 className="font-semibold text-indigo-900 mb-2">Suffixes fiscaux</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="font-mono bg-indigo-200 px-2 py-1 rounded">Z</span>
                          <span className="text-indigo-800">Exonéré de taxes</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-mono bg-indigo-200 px-2 py-1 rounded">X</span>
                          <span className="text-indigo-800">Non exonéré</span>
                        </div>
                      </div>
                      <p className="text-xs text-indigo-700 mt-2">
                        Exemple : <span className="font-mono">5 CD 123 Z</span> = Véhicule exonéré
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold text-green-900 mb-3">Caractéristiques visuelles</h3>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Fond vert foncé</strong> : Couleur distinctive des plaques diplomatiques françaises
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Caractères orange</strong> : Contraste élevé pour une meilleure lisibilité
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Format rectangulaire</strong> : Dimensions standardisées européennes
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Status Codes */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Users className="mr-3 h-6 w-6 text-blue-600" />
                Codes de statut diplomatique
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        CD
                      </Badge>
                      <span className="text-sm text-gray-600">Le plus courant</span>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900">Corps Diplomatique</h3>
                    <p className="text-gray-700 text-sm">
                      Personnel diplomatique des ambassades : ambassadeurs, conseillers, attachés diplomatiques, etc.
                    </p>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        CMD
                      </Badge>
                      <span className="text-sm text-gray-600">Très rare</span>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900">Chef de Mission Diplomatique</h3>
                    <p className="text-gray-700 text-sm">
                      Réservé aux ambassadeurs et chefs de mission diplomatique de très haut rang.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        C
                      </Badge>
                      <span className="text-sm text-gray-600">Consulaire</span>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900">Corps Consulaire</h3>
                    <p className="text-gray-700 text-sm">
                      Personnel consulaire : consuls, vice-consuls, agents consulaires dans les consulats.
                    </p>
                  </div>

                  <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        CC
                      </Badge>
                      <span className="text-sm text-gray-600">Chef consulaire</span>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900">Chef Consulaire</h3>
                    <p className="text-gray-700 text-sm">
                      Consuls généraux et chefs de poste consulaire de rang élevé.
                    </p>
                  </div>

                  <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        K
                      </Badge>
                      <span className="text-sm text-gray-600">Technique</span>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900">Personnel technique</h3>
                    <p className="text-gray-700 text-sm">Personnel technique ou administratif non diplomatique</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Hiérarchie diplomatique</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-600">CMD</Badge>
                  <ArrowRight className="h-4 w-4 text-gray-400 mt-1" />
                  <Badge className="bg-blue-600">CD</Badge>
                  <ArrowRight className="h-4 w-4 text-gray-400 mt-1" />
                  <Badge className="bg-amber-600">CC</Badge>
                  <ArrowRight className="h-4 w-4 text-gray-400 mt-1" />
                  <Badge className="bg-green-600">C</Badge>
                  <ArrowRight className="h-4 w-4 text-gray-400 mt-1" />
                  <Badge className="bg-red-600">K</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Country Codes */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Globe className="mr-3 h-6 w-6 text-teal-600" />
                Codes des pays les plus fréquents
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-white border rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-teal-600">1</span>
                    <MapPin className="h-4 w-4 text-gray-400" />
                  </div>
                  <h3 className="font-semibold">États-Unis</h3>
                  <p className="text-sm text-gray-600">Ambassade des USA</p>
                </div>

                <div className="p-4 bg-white border rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-teal-600">2</span>
                    <MapPin className="h-4 w-4 text-gray-400" />
                  </div>
                  <h3 className="font-semibold">Royaume-Uni</h3>
                  <p className="text-sm text-gray-600">Ambassade britannique</p>
                </div>

                <div className="p-4 bg-white border rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-teal-600">3</span>
                    <MapPin className="h-4 w-4 text-gray-400" />
                  </div>
                  <h3 className="font-semibold">Italie</h3>
                  <p className="text-sm text-gray-600">Ambassade d'Italie</p>
                </div>

                <div className="p-4 bg-white border rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-teal-600">4</span>
                    <MapPin className="h-4 w-4 text-gray-400" />
                  </div>
                  <h3 className="font-semibold">Espagne</h3>
                  <p className="text-sm text-gray-600">Ambassade d'Espagne</p>
                </div>

                <div className="p-4 bg-white border rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-teal-600">5</span>
                    <MapPin className="h-4 w-4 text-gray-400" />
                  </div>
                  <h3 className="font-semibold">Allemagne</h3>
                  <p className="text-sm text-gray-600">Ambassade d'Allemagne</p>
                </div>

                <div className="p-4 bg-white border rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-teal-600">6</span>
                    <MapPin className="h-4 w-4 text-gray-400" />
                  </div>
                  <h3 className="font-semibold">Russie</h3>
                  <p className="text-sm text-gray-600">Ambassade de Russie</p>
                </div>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
                <h3 className="font-semibold text-teal-900 mb-3">💡 Astuce de lecture</h3>
                <p className="text-teal-800 mb-3">
                  Les codes pays sont attribués par ordre chronologique d'établissement des relations diplomatiques avec
                  la France. Plus le numéro est bas, plus ancienne est la relation diplomatique.
                </p>
                <Link href="/french/codes">
                  <Button variant="outline" size="sm" className="bg-transparent border-teal-600 text-teal-700">
                    Voir la liste complète des codes
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Double Codes System */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Info className="mr-3 h-6 w-6 text-purple-600" />
                Système des doubles codes français
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-semibold text-purple-900 mb-3">Pourquoi deux systèmes de numérotation ?</h3>
                <p className="text-purple-800 mb-4">
                  La France utilise un système unique au monde avec deux codes par pays : un code historique (1-199) et
                  un code moderne (200+). Cette dualité s'explique par l'évolution du système diplomatique français.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">📜 Codes historiques (1-199)</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Attribués chronologiquement depuis 1920</li>
                      <li>• Basés sur l'ancienneté des relations</li>
                      <li>• Encore utilisés aujourd'hui</li>
                      <li>• Exemple : 5 = Allemagne</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">🔄 Codes modernes (200+)</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Code historique + 200</li>
                      <li>• Système informatisé depuis 1990</li>
                      <li>• Facilite la gestion moderne</li>
                      <li>• Exemple : 205 = Allemagne (5+200)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Exemples de correspondances</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-white border-2 border-blue-200 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-2xl font-bold text-blue-600">1 ↔ 201</span>
                      <span className="text-xs bg-blue-100 px-2 py-1 rounded">USA</span>
                    </div>
                    <p className="text-sm text-gray-600">États-Unis d'Amérique</p>
                  </div>

                  <div className="p-4 bg-white border-2 border-green-200 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-2xl font-bold text-green-600">5 ↔ 205</span>
                      <span className="text-xs bg-green-100 px-2 py-1 rounded">DE</span>
                    </div>
                    <p className="text-sm text-gray-600">Allemagne</p>
                  </div>

                  <div className="p-4 bg-white border-2 border-red-200 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-2xl font-bold text-red-600">26 ↔ 226</span>
                      <span className="text-xs bg-red-100 px-2 py-1 rounded">CN</span>
                    </div>
                    <p className="text-sm text-gray-600">Chine</p>
                  </div>

                  <div className="p-4 bg-white border-2 border-yellow-200 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-2xl font-bold text-yellow-600">45 ↔ 245</span>
                      <span className="text-xs bg-yellow-100 px-2 py-1 rounded">GB</span>
                    </div>
                    <p className="text-sm text-gray-600">Royaume-Uni</p>
                  </div>

                  <div className="p-4 bg-white border-2 border-purple-200 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-2xl font-bold text-purple-600">62 ↔ 262</span>
                      <span className="text-xs bg-purple-100 px-2 py-1 rounded">JP</span>
                    </div>
                    <p className="text-sm text-gray-600">Japon</p>
                  </div>

                  <div className="p-4 bg-white border-2 border-teal-200 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-2xl font-bold text-teal-600">105 ↔ 305</span>
                      <span className="text-xs bg-teal-100 px-2 py-1 rounded">CH</span>
                    </div>
                    <p className="text-sm text-gray-600">Suisse</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                <h3 className="font-semibold text-amber-900 mb-3">🎯 Impact pratique</h3>
                <div className="grid md:grid-cols-2 gap-4 text-amber-800">
                  <div>
                    <h4 className="font-semibold mb-2">Pour l'identification :</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Les deux codes désignent le même pays</li>
                      <li>• Aucune différence de statut ou privilège</li>
                      <li>• Scanner automatique reconnaît les deux</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Usage moderne :</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Codes 200+ plus fréquents aujourd'hui</li>
                      <li>• Codes historiques encore valides</li>
                      <li>• Transition progressive en cours</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Prefixes and Suffixes */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Globe className="mr-3 h-6 w-6 text-orange-600" />
                Préfixes et suffixes spéciaux
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                    <h3 className="font-semibold text-orange-900 mb-4 text-xl">Préfixes organisationnels</h3>
                    <p className="text-orange-800 mb-4 text-sm">
                      Certaines plaques portent un préfixe indiquant l'appartenance à une organisation internationale
                      basée en France.
                    </p>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border border-orange-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-2xl font-bold text-orange-600">E</span>
                          <Badge className="bg-orange-600">OCDE</Badge>
                        </div>
                        <h4 className="font-semibold text-gray-900">
                          Organisation de Coopération et de Développement Économiques
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">Siège : Paris, 16ème arrondissement</p>
                        <p className="text-xs text-orange-700 mt-2 font-mono bg-orange-100 p-2 rounded">
                          Exemple : E 5 CD 123 = Allemagne rattaché à l'OCDE
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-orange-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-2xl font-bold text-orange-600">U</span>
                          <Badge className="bg-orange-600">UNESCO</Badge>
                        </div>
                        <h4 className="font-semibold text-gray-900">Organisation des Nations Unies pour l'Éducation</h4>
                        <p className="text-sm text-gray-600 mt-1">Siège : Paris, 7ème arrondissement</p>
                        <p className="text-xs text-orange-700 mt-2 font-mono bg-orange-100 p-2 rounded">
                          Exemple : U 104 CMD 7 = Ambassadeur suédois à l'UNESCO
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-orange-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-2xl font-bold text-orange-600">S</span>
                          <Badge className="bg-orange-600">Conseil UE</Badge>
                        </div>
                        <h4 className="font-semibold text-gray-900">Conseil de l'Europe</h4>
                        <p className="text-sm text-gray-600 mt-1">Bureau de liaison à Paris</p>
                        <p className="text-xs text-orange-700 mt-2 font-mono bg-orange-100 p-2 rounded">
                          Exemple : S 60 CD 89 = Personnel italien au Conseil
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                    <h3 className="font-semibold text-indigo-900 mb-4 text-xl">Suffixes fiscaux</h3>
                    <p className="text-indigo-800 mb-4 text-sm">
                      Les suffixes indiquent le statut fiscal du véhicule concernant les taxes françaises.
                    </p>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border border-indigo-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-2xl font-bold text-indigo-600">Z</span>
                          <Badge className="bg-green-600">Exonéré</Badge>
                        </div>
                        <h4 className="font-semibold text-gray-900">Exonération fiscale totale</h4>
                        <ul className="text-sm text-gray-600 mt-2 space-y-1">
                          <li>• Pas de TVA sur l'achat</li>
                          <li>• Exonération de taxe sur les carburants</li>
                          <li>• Statut diplomatique complet</li>
                        </ul>
                        <p className="text-xs text-indigo-700 mt-2 font-mono bg-indigo-100 p-2 rounded">
                          Exemple : 1 CMD 001 Z = Ambassadeur US exonéré
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-indigo-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-2xl font-bold text-indigo-600">X</span>
                          <Badge className="bg-red-600">Non exonéré</Badge>
                        </div>
                        <h4 className="font-semibold text-gray-900">Soumis aux taxes françaises</h4>
                        <ul className="text-sm text-gray-600 mt-2 space-y-1">
                          <li>• TVA applicable</li>
                          <li>• Taxes sur carburants dues</li>
                          <li>• Personnel technique/administratif</li>
                        </ul>
                        <p className="text-xs text-indigo-700 mt-2 font-mono bg-indigo-100 p-2 rounded">
                          Exemple : 5 K 234 X = Personnel technique allemand
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">💡 Bon à savoir</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Les suffixes ne sont pas toujours présents</li>
                      <li>• L'absence de suffixe = statut standard</li>
                      <li>• Les préfixes sont rares (organisations spéciales)</li>
                      <li>• Combinaisons possibles : préfixe + code + statut + numéro + suffixe</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-indigo-100 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4 text-xl">
                  Exemples complets avec préfixes et suffixes
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-center mb-3">
                      <div className="bg-green-600 text-orange-400 p-3 rounded font-mono text-2xl font-bold inline-block">
                        E 205 CD 456 Z
                      </div>
                    </div>
                    <div className="text-sm space-y-1">
                      <p>
                        <strong>E</strong> = OCDE
                      </p>
                      <p>
                        <strong>205</strong> = Allemagne (code moderne)
                      </p>
                      <p>
                        <strong>CD</strong> = Corps Diplomatique
                      </p>
                      <p>
                        <strong>456</strong> = Véhicule n°456
                      </p>
                      <p>
                        <strong>Z</strong> = Exonéré de taxes
                      </p>
                    </div>
                    <p className="text-xs text-gray-600 mt-2 italic">
                      Diplomate allemand à l'OCDE avec exonération fiscale
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-center mb-3">
                      <div className="bg-green-600 text-orange-400 p-3 rounded font-mono text-2xl font-bold inline-block">
                        U 304 CMD 7
                      </div>
                    </div>
                    <div className="text-sm space-y-1">
                      <p>
                        <strong>U</strong> = UNESCO
                      </p>
                      <p>
                        <strong>304</strong> = Suède (code moderne)
                      </p>
                      <p>
                        <strong>CMD</strong> = Chef de Mission
                      </p>
                      <p>
                        <strong>7</strong> = Véhicule n°7
                      </p>
                      <p>
                        <em>Pas de suffixe</em> = Statut standard
                      </p>
                    </div>
                    <p className="text-xs text-gray-600 mt-2 italic">Ambassadeur suédois à l'UNESCO</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Practical Examples */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Info className="mr-3 h-6 w-6 text-amber-600" />
                Exemples pratiques de déchiffrage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-green-600 to-green-700 rounded-lg">
                  <div className="text-center mb-4">
                    <div className="bg-green-600 text-orange-400 p-4 rounded font-mono text-3xl font-bold inline-block shadow-lg">
                      1 CMD 001
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Déchiffrage :</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        <strong>1</strong> = États-Unis d'Amérique
                      </li>
                      <li>
                        <strong>CMD</strong> = Chef de Mission Diplomatique (Ambassadeur)
                      </li>
                      <li>
                        <strong>001</strong> = Premier véhicule de l'ambassadeur américain
                      </li>
                    </ul>
                    <p className="mt-3 text-sm text-gray-600 italic">
                      Cette plaque appartient très probablement au véhicule officiel de l'Ambassadeur des États-Unis en
                      France.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg">
                  <div className="text-center mb-4">
                    <div className="bg-green-600 text-orange-400 p-4 rounded font-mono text-3xl font-bold inline-block shadow-lg">
                      15 CD 2847
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Déchiffrage :</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        <strong>15</strong> = Japon
                      </li>
                      <li>
                        <strong>CD</strong> = Corps Diplomatique
                      </li>
                      <li>
                        <strong>2847</strong> = Véhicule n°2847 de l'ambassade
                      </li>
                    </ul>
                    <p className="mt-3 text-sm text-gray-600 italic">
                      Véhicule du personnel diplomatique de l'Ambassade du Japon en France.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg">
                  <div className="text-center mb-4">
                    <div className="bg-green-600 text-orange-400 p-4 rounded font-mono text-3xl font-bold inline-block shadow-lg">
                      E 205 CD 89 Z
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Déchiffrage complet :</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        <strong>E</strong> = Organisation OCDE
                      </li>
                      <li>
                        <strong>205</strong> = Allemagne (code moderne, équivalent au code 5)
                      </li>
                      <li>
                        <strong>CD</strong> = Corps Diplomatique
                      </li>
                      <li>
                        <strong>89</strong> = Véhicule n°89
                      </li>
                      <li>
                        <strong>Z</strong> = Exonéré de taxes françaises
                      </li>
                    </ul>
                    <p className="mt-3 text-sm text-gray-600 italic">
                      Véhicule du personnel diplomatique allemand travaillant à l'OCDE à Paris, avec exonération fiscale
                      complète.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tips Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Conseils pour une identification rapide</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-700">✅ À retenir</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Le code pays est toujours en première position
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      CMD est réservé aux ambassadeurs
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Les numéros bas (1-10) sont les pays historiques
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Fond vert = toujours diplomatique en France
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Les codes 200+ sont équivalents aux codes 1-199
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Préfixes E/U/S = organisations internationales
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Suffixe Z = exonération fiscale, X = taxes dues
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-700">⚠️ Attention</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Ne pas confondre avec les plaques militaires
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Certains codes peuvent être réattribués
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Les plaques temporaires existent
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Respecter l'immunité diplomatique
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Double codes : 5 = 205 (même pays, Allemagne)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Préfixes rares : seulement OCDE, UNESCO, Conseil UE
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-600 to-teal-700 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Prêt à identifier des plaques françaises ?</h2>
              <p className="text-xl mb-6 opacity-90">
                Mettez en pratique vos nouvelles connaissances avec notre scanner automatique
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/french">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    <Search className="mr-2 h-5 w-5" />
                    Tester le scanner
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/french/guide">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
                  >
                    Guide complet français
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
              <CardTitle>Guides connexes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link
                  href="/qu-est-ce-qu-une-plaque-diplomatique"
                  className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-blue-600 mb-2">Qu'est-ce qu'une plaque diplomatique ?</h3>
                  <p className="text-sm text-gray-600">Découvrez les bases des plaques diplomatiques</p>
                </Link>
                <Link href="/french/codes" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold text-green-600 mb-2">Codes pays français</h3>
                  <p className="text-sm text-gray-600">Liste complète des codes diplomatiques</p>
                </Link>
                <Link href="/swiss" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold text-red-600 mb-2">Système suisse</h3>
                  <p className="text-sm text-gray-600">Découvrez les plaques diplomatiques suisses</p>
                </Link>
                <Link href="/history" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold text-purple-600 mb-2">Historique</h3>
                  <p className="text-sm text-gray-600">Vos recherches sauvegardées</p>
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
            © 2024 Diplo Scanner. Guide gratuit pour identifier les plaques diplomatiques françaises.
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
