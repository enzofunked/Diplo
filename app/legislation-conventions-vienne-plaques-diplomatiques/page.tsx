import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Scale, Shield, Globe, BookOpen, Users, FileText, Camera, Search, Zap } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Législation et Conventions de Vienne : Cadre Juridique des Plaques Diplomatiques | Guide Complet 2024",
  description:
    "Découvrez le cadre juridique complet des plaques diplomatiques : Convention de Vienne 1961, immunités diplomatiques, privilèges, législation internationale et droits des missions diplomatiques.",
  keywords: [
    "convention de vienne",
    "législation plaques diplomatiques",
    "immunités diplomatiques",
    "privilèges diplomatiques",
    "droit international",
    "missions diplomatiques",
    "traités internationaux",
    "cadre juridique diplomatique",
    "relations diplomatiques",
    "personnel diplomatique",
  ],
  openGraph: {
    title: "Législation et Conventions de Vienne : Cadre Juridique des Plaques Diplomatiques",
    description:
      "Guide complet sur le cadre juridique des plaques diplomatiques, la Convention de Vienne et les immunités diplomatiques internationales.",
    type: "article",
    url: "https://diplo-scanner.com/legislation-conventions-vienne-plaques-diplomatiques",
    images: [
      {
        url: "/images/legislation-conventions-vienne-og.png",
        width: 1200,
        height: 630,
        alt: "Législation et Conventions de Vienne sur les plaques diplomatiques",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Législation et Conventions de Vienne : Cadre Juridique des Plaques Diplomatiques",
    description: "Guide complet sur le cadre juridique des plaques diplomatiques et la Convention de Vienne 1961.",
    images: ["/images/legislation-conventions-vienne-og.png"],
  },
  alternates: {
    canonical: "https://diplo-scanner.com/legislation-conventions-vienne-plaques-diplomatiques",
  },
}

export default function LegislationConventionsViennePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <Scale className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tout savoir sur la législation et les conventions de Vienne : le cadre juridique des plaques diplomatiques
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Circuler en voiture avec une <strong>plaque diplomatique</strong> soulève bien des questions. Cette simple
            suite de chiffres et de lettres ouvre pourtant tout un univers de{" "}
            <strong>règles spécifiques au droit international</strong>, d'accords et de protections particulières pour
            les véhicules officiels. Dans cet article, découvrons ensemble comment la{" "}
            <strong>convention de Vienne sur les relations diplomatiques de 1961</strong>, ainsi que d'autres textes
            internationaux essentiels, structurent le régime des plaques diplomatiques.
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-blue-600" />
              <CardTitle className="text-2xl">
                Qu'est-ce qu'une plaque diplomatique et pourquoi existe-t-elle ?
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Les <strong>plaques diplomatiques</strong> ne sont pas de simples accessoires esthétiques. Bien au
              contraire, elles jouent un rôle central dans l'
              <strong>identification des véhicules utilisés par les missions diplomatiques</strong>, comme les
              ambassades ou les organismes internationaux présents dans chaque État. Grâce à leur{" "}
              <strong>format distinctif</strong> et codifié, ces plaques signalent le statut particulier du conducteur :
              membre du personnel diplomatique, famille ou représentant accrédité.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Derrière ce marquage officiel se cache la volonté des <strong>États</strong> de protéger les{" "}
              <strong>missions diplomatiques</strong> et de garantir la libre circulation de leurs agents. Tout cela
              s'inscrit dans un <strong>cadre juridique</strong> précis, pensé dès le début du XXe siècle et renforcé
              par des <strong>traités internationaux</strong> tels que la convention de Vienne sur les relations
              diplomatiques. Ce texte demeure la référence absolue, fixant les règles fondamentales entre pays
              souverains pour faciliter des échanges efficaces et respectueux.
            </p>
          </CardContent>
        </Card>

        {/* Convention de Vienne */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Globe className="h-6 w-6 text-green-600" />
              <CardTitle className="text-2xl">
                La convention de Vienne sur les relations diplomatiques : fondements juridiques
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Signée en 1961, la <strong>convention de Vienne sur les relations diplomatiques</strong> marque un
              tournant majeur dans l'histoire des <strong>relations internationales</strong>. Son objectif principal
              consiste à fournir un <strong>cadre juridique clair aux missions diplomatiques</strong> installées à
              l'étranger. Ce traité international fixe également les{" "}
              <strong>immunités et privilèges diplomatiques</strong> reconnus au personnel et à leur famille.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Le texte régit notamment tous les aspects pratiques des <strong>missions diplomatiques</strong>, incluant
              la liberté de communication, la protection des agents contre toute ingérence ou arrestation arbitraire,
              mais aussi la question de l'utilisation des véhicules officiels. À travers ses articles, il garantit que
              les voitures arborant des <strong>plaques diplomatiques</strong> bénéficient d'une reconnaissance et d'un
              respect particuliers dans l'État d'accueil.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Les principaux privilèges diplomatiques liés aux plaques
              </h3>
              <p className="text-blue-800 mb-4">
                Un véhicule affichant une <strong>plaque diplomatique</strong> n'est pas anodin : il bénéficie d'
                <strong>immunités diplomatiques</strong>, telles que définies par la convention de Vienne. Cela signifie
                qu'il peut profiter d'<strong>exemptions spécifiques</strong>, comme l'impossibilité de perquisition
                sans autorisation expresse, certains avantages fiscaux, ou encore l'interdiction de saisie.
              </p>
              <p className="text-blue-800">
                Concrètement, cela se traduit souvent par une gestion particulière des infractions routières, des
                stationnements ou des contrôles policiers. La convention n'annule cependant pas toutes les contraintes :
                les conducteurs doivent respecter la réglementation locale, même si les sanctions peuvent donner lieu à
                des discussions bilatérales entre États.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Code couleur et identification : harmonisation internationale
              </h3>
              <p className="text-green-800 mb-4">
                Chaque État reste libre de choisir le modèle exact de ses <strong>plaques diplomatiques</strong>, mais
                la tendance mondiale privilégie l'<strong>harmonisation internationale</strong> pour une meilleure
                lisibilité. On retrouve fréquemment des <strong>codes couleurs spécifiques</strong>, des sigles
                indicatifs préfixant les numéros ou des distinctions visuelles permettant de différencier clairement ces
                plaques de celles utilisées par les citoyens ordinaires.
              </p>
              <p className="text-green-800">
                En Europe ou ailleurs, ces efforts d'harmonisation facilitent l'identification des délégations et aident
                à prévenir les fraudes. Les autorités locales disposent généralement d'un{" "}
                <strong>registre à jour</strong> répertoriant tous les véhicules bénéficiant de cette{" "}
                <strong>protection prévue par la convention de Vienne sur les relations diplomatiques</strong>.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Missions diplomatiques */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-purple-600" />
              <CardTitle className="text-2xl">
                Les missions diplomatiques, le personnel concerné et les bénéficiaires
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Qui peut réellement prétendre à une <strong>plaque diplomatique</strong> et profiter du{" "}
              <strong>régime protecteur lié à la convention de Vienne</strong> ? La réponse dépend de la nature et du
              niveau d'accréditation. Typiquement, seuls les membres habilités du{" "}
              <strong>personnel diplomatique</strong>, certains agents administratifs ou techniques, ainsi que des
              proches directs, ont la possibilité de circuler avec ces plaques.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Dans certains cas, des <strong>organismes internationaux reconnus</strong> ou des agents consulaires
              obtiennent également des plaques spéciales offrant des <strong>privilèges similaires</strong>, bien que
              plus limités. C'est pourquoi il existe parfois une confusion entre les différents types de plaques et
              leurs régimes juridiques associés.
            </p>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">
                Exigences administratives et modalités d'attribution
              </h3>
              <p className="text-purple-800 mb-4">
                L'obtention d'une <strong>plaque diplomatique</strong> répond à des démarches normalisées et parfois
                strictes, qui varient selon le pays hôte. Généralement, une demande officielle doit être déposée auprès
                d'une administration dédiée, laquelle vérifie les fonctions, la mission concernée et le respect du{" "}
                <strong>cadre juridique défini par les traités internationaux</strong>.
              </p>
              <p className="text-purple-800 mb-4">
                Voici les principales étapes observées dans la plupart des systèmes nationaux :
              </p>
              <ul className="list-disc list-inside text-purple-800 space-y-2">
                <li>
                  vérification de l'accréditation du <strong>personnel diplomatique</strong> détenteur du véhicule ;
                </li>
                <li>
                  dépôt d'un dossier avec justificatifs de <strong>mission internationale</strong> ou affectation
                  consulaire ;
                </li>
                <li>remise d'un formulaire officiel signé par l'ambassade ou l'organisation concernée ;</li>
                <li>contrôle régulier et renouvellement selon la durée du séjour ou le changement de fonction.</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">
                Limitations et exceptions prévues par le cadre juridique
              </h3>
              <p className="text-orange-800 mb-4">
                Toutes les protections dont bénéficient les véhicules munis de <strong>plaques diplomatiques</strong> ne
                sont pas absolues. Certains abus peuvent entraîner des renoncements volontaires, voire la levée de{" "}
                <strong>l'immunité diplomatique</strong> dans des situations graves, conformément à la{" "}
                <strong>législation nationale</strong> ou à de nouvelles dispositions négociées par voie diplomatique.
              </p>
              <p className="text-orange-800">
                La <strong>convention de Vienne</strong> prévoit elle-même ces cas limites, rappelant régulièrement que
                les bénéficiaires doivent agir en cohérence avec leur mission et veiller à ne pas abuser des{" "}
                <strong>privilèges accordés</strong>.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-indigo-600" />
              Questions fréquentes sur les plaques diplomatiques et les conventions internationales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div itemScope itemType="https://schema.org/FAQPage" className="space-y-6">
              <div
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className="border-l-4 border-blue-500 pl-4"
              >
                <h3 itemProp="name" className="text-lg font-semibold text-gray-900 mb-2">
                  Quels sont les principaux textes juridiques encadrant les plaques diplomatiques ?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-gray-700">
                    <p className="mb-3">
                      Les <strong>plaques diplomatiques</strong> sont principalement encadrées par la{" "}
                      <strong>convention de Vienne sur les relations diplomatiques de 1961</strong>, un{" "}
                      <strong>traité international</strong> adopté par la majorité des États. D'autres conventions
                      régionales et accords bilatéraux complètent ce dispositif en précisant certains points, comme les
                      formats, les <strong>privilèges</strong> ou les modalités d'attribution.
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Convention de Vienne sur les relations diplomatiques (1961)</li>
                      <li>Conventions bilatérales spécifiques</li>
                      <li>Législations nationales complémentaires</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className="border-l-4 border-green-500 pl-4"
              >
                <h3 itemProp="name" className="text-lg font-semibold text-gray-900 mb-2">
                  Tous les membres d'une ambassade ont-ils droit à une plaque diplomatique ?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-gray-700">
                    <p className="mb-3">
                      Non, seules certaines catégories du <strong>personnel diplomatique</strong> y ont accès, selon
                      leur fonction et le niveau d'accréditation reconnu dans l'État hôte. Le chef de mission, les
                      ambassadeurs, attachés et quelques agents administratifs qualifiés figurent parmi les principaux
                      bénéficiaires. D'autres collaborateurs, comme les personnels d'entretien, ne reçoivent
                      généralement pas ce type de <strong>privilège diplomatique</strong>.
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Membres accrédités du corps diplomatique</li>
                      <li>Certains agents techniques ayant reçu notification</li>
                      <li>Familles proches inscrites officiellement</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className="border-l-4 border-purple-500 pl-4"
              >
                <h3 itemProp="name" className="text-lg font-semibold text-gray-900 mb-2">
                  Quelles obligations restent valables pour les conducteurs de véhicules diplomatiques ?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-gray-700">
                    <p className="mb-3">
                      Les titulaires de <strong>plaques diplomatiques</strong> doivent toujours observer les{" "}
                      <strong>lois, règlements et codes de la route locaux</strong>. L'autorité de police conserve le
                      droit de prendre contact avec l'ambassade en cas d'incident. Certains excès, comme les délits
                      majeurs, peuvent conduire à la limitation des <strong>privilèges diplomatiques</strong>.
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Respect du code de la route</li>
                      <li>Signalement systématique auprès de l'ambassade</li>
                      <li>Coopération requise si instruction des autorités locales</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className="border-l-4 border-orange-500 pl-4"
              >
                <h3 itemProp="name" className="text-lg font-semibold text-gray-900 mb-2">
                  Quelle différence entre immunités diplomatiques et privilèges diplomatiques ?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-gray-700">
                    <p className="mb-4">
                      Les <strong>immunités diplomatiques</strong> protègent principalement contre les poursuites
                      judiciaires ou la contrainte directe exercée par l'État d'accueil, tandis que les{" "}
                      <strong>privilèges diplomatiques</strong> offrent des avantages matériels, fiscaux ou
                      administratifs. Voici un tableau pour mieux comprendre la distinction :
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Type</th>
                            <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
                            <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Exemple</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">Immunité diplomatique</td>
                            <td className="border border-gray-300 px-4 py-2">Protection judiciaire et douanière</td>
                            <td className="border border-gray-300 px-4 py-2">Non-saisissabilité du véhicule</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">Privilège diplomatique</td>
                            <td className="border border-gray-300 px-4 py-2">Facilités administratives/fiscales</td>
                            <td className="border border-gray-300 px-4 py-2">
                              Exonération de taxes lors de l'importation
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Scanner Tools Section */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3 text-blue-900">
              <Camera className="h-6 w-6" />
              Outils de reconnaissance des plaques diplomatiques
            </CardTitle>
            <CardDescription className="text-blue-700">
              Utilisez nos scanners spécialisés pour identifier et analyser les plaques diplomatiques
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/" className="block">
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-blue-200 hover:border-blue-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-blue-900 mb-2">Scanner Universel</h3>
                    <p className="text-sm text-blue-700">
                      Reconnaissance automatique des plaques françaises et suisses
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/french" className="block">
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-green-200 hover:border-green-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-green-900 mb-2">Scanner Français</h3>
                    <p className="text-sm text-green-700">Spécialisé dans les plaques diplomatiques françaises</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/swiss" className="block">
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-red-200 hover:border-red-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="font-semibold text-red-900 mb-2">Scanner Suisse</h3>
                    <p className="text-sm text-red-700">Analyse des plaques diplomatiques suisses</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Related Resources */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-gray-600" />
              Ressources complémentaires
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/privileges-immunites-plaques-diplomatiques" className="block">
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">Privilèges et Immunités</h3>
                  <p className="text-sm text-gray-600">Découvrez les droits et protections des diplomates</p>
                </div>
              </Link>
              <Link href="/differences-plaques-consulaires-diplomatiques" className="block">
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">Plaques Consulaires vs Diplomatiques</h3>
                  <p className="text-sm text-gray-600">Comprendre les différences entre les statuts</p>
                </div>
              </Link>
              <Link href="/faq-plaques-diplomatiques" className="block">
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">FAQ Plaques Diplomatiques</h3>
                  <p className="text-sm text-gray-600">Réponses aux questions les plus fréquentes</p>
                </div>
              </Link>
              <Link href="/sources" className="block">
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">Sources et Références</h3>
                  <p className="text-sm text-gray-600">Textes officiels et documentation juridique</p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
