import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  History,
  Globe,
  Shield,
  FileText,
  Scale,
  Camera,
  Search,
  MapPin,
  BookOpen,
  Info,
  Clock,
  Archive,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Histoire des plaques diplomatiques : évolution mondiale et développement | Guide historique complet",
  description:
    "Découvrez l'histoire fascinante des plaques diplomatiques : de leurs origines au XXe siècle à leur évolution mondiale. Codification, normalisation et développement international.",
  keywords: [
    "histoire plaques diplomatiques",
    "évolution plaques diplomatiques",
    "origines plaques diplomatiques",
    "développement diplomatique XXe siècle",
    "codification diplomatique",
    "normalisation internationale",
    "diplomatie moderne",
    "relations internationales",
    "sécurité diplomatique",
    "privilèges diplomatiques histoire",
    "systèmes diplomatiques mondiaux",
    "évolution internationale",
  ],
  openGraph: {
    title: "Histoire des plaques diplomatiques : évolution mondiale et développement",
    description:
      "Découvrez l'histoire fascinante des plaques diplomatiques : de leurs origines au XXe siècle à leur évolution mondiale.",
    type: "article",
    url: "https://diplo-scanner.com/histoire-plaques-diplomatiques-evolution-mondiale",
    images: [
      {
        url: "https://diplo-scanner.com/images/histoire-plaques-diplomatiques-og.png",
        width: 1200,
        height: 630,
        alt: "Histoire des plaques diplomatiques évolution mondiale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Histoire des plaques diplomatiques : évolution mondiale et développement",
    description:
      "Découvrez l'histoire fascinante des plaques diplomatiques : de leurs origines au XXe siècle à leur évolution mondiale.",
    images: ["https://diplo-scanner.com/images/histoire-plaques-diplomatiques-og.png"],
  },
  alternates: {
    canonical: "https://diplo-scanner.com/histoire-plaques-diplomatiques-evolution-mondiale",
  },
}

export default function HistoirePlaquesDiplomatiquesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-amber-100 p-3 rounded-full">
              <History className="h-8 w-8 text-amber-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Histoire des plaques diplomatiques : un regard sur leur évolution mondiale
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            À travers le temps, <strong>l'histoire des plaques diplomatiques</strong> reflète à la fois les enjeux de la
            diplomatie moderne et l'évolution des <strong>relations internationales</strong>. Ces signes distinctifs,
            visibles sur les véhicules d'ambassades ou de consulats, représentent bien plus qu'un simple détail visuel.
            Leur apparition et leur développement ont accompagné les avancées en matière de <strong>sécurité</strong>,
            de <strong>codification</strong> et d'avantages accordés aux représentants étrangers.
          </p>
        </div>

        {/* Origines et développement */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-amber-600" />
              Origines et développement des plaques diplomatiques
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              L'apparition des <strong>plaques diplomatiques {" "}
                  <Link
                    href="https://www.diplo-scanner.com/comment-lire-une-plaque-diplomatique-francaise"
                    className="text-green-600 underline hover:text-blue-800"
                  >
                    plaques diplomatiques
                  </Link>{" "}
</strong> coïncide avec la montée en puissance de la{" "}
              <strong>diplomatie moderne au XXe siècle</strong>. Avant leur mise en place, l'identification officielle
              des véhicules affectés aux missions étrangères était sommaire, voire inexistante. Ce n'est que dans
              l'entre-deux-guerres qu'a émergé le besoin d'un <strong>système uniforme</strong> pour signaler la
              présence de personnels bénéficiant de l'immunité diplomatique.
            </p>
            <p>
              Progressivement, les gouvernements ont compris l'importance d'une{" "}
              <strong>reconnaissance internationale</strong> de ces véhicules, facilitant ainsi les déplacements des
              agents diplomatiques et renforçant la sécurité des relations bilatérales. Cette prise de conscience a mené
              à une <strong>normalisation progressive</strong> : des premières formes de codification, comme l'adoption
              de couleurs spécifiques ou de lettres désignant le statut (diplomate, consulaire), se sont généralisées
              dans plusieurs pays dès la seconde moitié du XXe siècle.
            </p>
          </CardContent>
        </Card>

        {/* Caractéristiques et symbolique */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              Caractéristiques et symbolique des plaques diplomatiques
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Les <strong>{" "}
                  <Link
                    href="https://www.diplo-scanner.com/comment-lire-une-plaque-diplomatique-francaise"
                    className="text-green-600 underline hover:text-blue-800"
                  >
                    caractéristiques des plaques diplomatiques
                  </Link>{" "} </strong> répondent à divers impératifs. Visibles
              grâce à des teintes distinctives ou à des caractères particuliers, elles se distinguent nettement des
              plaques ordinaires. Ce choix garantit non seulement une <strong>identification rapide</strong>, mais
              contribue aussi à renforcer la <strong>sécurité</strong> et la protection des personnes bénéficiant de ce
              statut spécial.
            </p>
            <p>
              La dimension symbolique est également importante. Porter une plaque spécifique incarne le privilège d'un
              statut reconnu par la communauté internationale. Cependant, ce marquage implique aussi le respect des{" "}
              <strong>règles</strong>, des <strong>{" "}
                  <Link
                    href="https://diplo-scanner.com/privileges-immunites-plaques-diplomatiques"
                    className="text-green-600 underline hover:text-blue-800"
                  >
                    avantages et privilèges
                  </Link>{" "}
</strong> associés, comme l'exonération de
              certaines taxes ou l'accès facilité à des espaces contrôlés.
            </p>
          </CardContent>
        </Card>

        {/* Codification et processus */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-purple-600" />
              Codification, processus d'attribution et systèmes de codes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Derrière chaque <strong>plaque diplomatique</strong> se cache tout un système de{" "}
              <strong>{" "}
                  <Link
                    href="https://www.diplo-scanner.com/liste-codes-pays-plaques-diplomatiques-francaises"
                    className="text-green-600 underline hover:text-blue-800"
                  >
                    codification
                  </Link>{" "} </strong>. Selon le pays, cette codification peut indiquer la{" "}
              <strong>nationalité</strong> du diplomate, le rang de la fonction ou l'organisme représenté. Par exemple,
              une série de chiffres ou de lettres fait référence soit au pays d'origine, soit à une{" "}
              <strong>organisation internationale</strong> précise.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Premiers chiffres</strong> : souvent liés au code international officiel du pays accréditant.
              </li>
              <li>
                <strong>Lettres</strong> : permettant de différencier un véhicule d'ambassade, de consulat ou de mission
                permanente auprès d'une grande organisation internationale.
              </li>
              <li>
                <strong>Séries internes</strong> : utilisées localement pour attribuer des numéros uniques et prévenir
                les fraudes.
              </li>
            </ul>
            <p>
              Le <strong>processus d'attribution</strong> varie selon les législations nationales. Généralement, les
              ambassades adressent une demande aux autorités locales, qui vérifient l'éligibilité avant de délivrer la
              plaque adaptée. Cette procédure renforce la <strong>traçabilité</strong> et l'encadrement légal, éléments
              essentiels pour empêcher toute usurpation ou utilisation abusive des avantages rattachés.
            </p>
          </CardContent>
        </Card>

        {/* Évolution internationale */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-green-600" />
              Évolution internationale et normalisation progressive
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Avec l'intensification des échanges, la nécessité d'une <strong>évolution et normalisation</strong> des
              plaques diplomatiques s'est imposée dans le monde entier. Certains pays ont adopté très tôt des modèles
              standardisés, immédiatement reconnaissables lors des contrôles frontaliers ou urbains. D'autres régions
              préfèrent conserver une certaine souplesse, adaptant leurs codes aux besoins de{" "}
              <strong>sécurité locaux</strong>.
            </p>
            <p>
              L'influence des grandes <strong>organisations internationales</strong> a joué un rôle déterminant pour
              encourager la convergence des systèmes. Aujourd'hui, la majorité des capitales mondiales disposent d'un
              mode d'identification intégré, fiable et durable afin d'encadrer la circulation des personnalités
              détentrices de passeports diplomatiques.
            </p>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Comparaisons régionales</h4>
              <p>
                On constate des différences notables selon les continents. En Europe, où la diversité nationale est
                forte, <strong>l'harmonisation progresse</strong> à mesure que les questions d'immigration et de
                sécurité prennent de l'ampleur. L'Amérique du Nord privilégie une codification directe, tandis que
                certains pays d'Afrique ou d'Asie misent encore sur des systèmes centralisés avec quelques exceptions
                locales.
              </p>
              <p>
                Même si chaque État conserve ses spécificités, la tendance va vers davantage de{" "}
                <strong>lisibilité</strong> et de coopération. Les institutions telles que l'Union européenne favorisent
                le développement de nouvelles méthodes communes, visant à protéger les diplomates et à améliorer
                l'efficacité des <strong>contrôles routiers</strong>.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Tableau comparatif des systèmes actuels</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Pays / Région</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Couleur dominante</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Codification visible</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Structure</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">France</td>
                      <td className="border border-gray-300 px-4 py-2">Bleu</td>
                      <td className="border border-gray-300 px-4 py-2">Numéro-pays-lettre(s)</td>
                      <td className="border border-gray-300 px-4 py-2">Ambassade, consulat, OI</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">États-Unis</td>
                      <td className="border border-gray-300 px-4 py-2">Rouge</td>
                      <td className="border border-gray-300 px-4 py-2">Lettres-pays-numéro</td>
                      <td className="border border-gray-300 px-4 py-2">Mission étrangère, ONU</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Union européenne</td>
                      <td className="border border-gray-300 px-4 py-2">Noir/bleu</td>
                      <td className="border border-gray-300 px-4 py-2">Mélange alphanumérique</td>
                      <td className="border border-gray-300 px-4 py-2">Pays identifiés, fonctions diverses</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Ce tableau montre comment la <strong>normalisation</strong> avance, tout en maintenant des différences
                liées à la culture politique et à l'organisation administrative locale.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Avantages et sécurité */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-indigo-600" />
              Avantages, privilèges et enjeux de sécurité
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Disposer d'une <strong>plaque diplomatique</strong> donne droit à une série d'
              <strong>avantages et privilèges</strong>. Exonérations fiscales, stationnement facilité ou absence de
              contrôle systématique ne relèvent pas uniquement du confort. Ces bénéfices permettent de fluidifier le
              travail diplomatique et d'éviter les entraves administratives lors des déplacements officiels.
            </p>
            <p>
              La <strong>sécurité</strong> et la <strong>protection</strong> occupent aussi une place centrale dans la
              gestion de ces plaques. Un repérage clair aide les forces de l'ordre à réagir rapidement en cas d'incident
              impliquant un représentant étranger. En parallèle, certains dispositifs anti-fraude ont vu le jour,
              notamment l'intégration de hologrammes ou de QR codes directement sur la plaque ou son support, pour
              limiter les risques d'usurpation.
            </p>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Limitations et surveillance accrue</h4>
              <p>
                Si les <strong>plaques diplomatiques</strong> offrent des garanties précieuses, les abus existent et
                amènent certains États à renforcer la surveillance. Limitation du nombre de véhicules autorisés,
                inspections régulières ou adaptation du processus d'attribution font partie des mesures prises pour
                préserver l'équilibre entre <strong>sécurité</strong>, fluidité et confidentialité.
              </p>
              <p>
                En dépit des défis posés par les évolutions rapides du contexte international, la volonté demeure de
                protéger le bon fonctionnement des missions tout en tenant compte des impératifs de transparence et de
                lutte contre la criminalité organisée liée parfois à l'usage frauduleux de ces identifiants spéciaux.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-blue-600" />
              Questions fréquentes sur l'histoire des plaques diplomatiques
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div itemScope itemType="https://schema.org/FAQPage">
              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-6">
                <h3 itemProp="name" className="font-semibold text-lg mb-2">
                  À quoi servent les plaques diplomatiques et comment sont-elles attribuées ?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p className="mb-3">
                      <strong>Les plaques diplomatiques</strong> facilitent l'<strong>identification</strong> et la
                      libre circulation des véhicules utilisés par les missions officielles, qu'il s'agisse des
                      ambassades, consulats ou organisations internationales. Le{" "}
                      <strong>processus d'attribution</strong> varie selon les pays, mais comprend généralement une
                      demande officielle des autorités diplomatiques qui vérifient ensuite les critères d'éligibilité.
                      Ce système permet d'éviter les retards administratifs et garantit le respect des{" "}
                      <strong>immunités et privilèges internationaux</strong>.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Identification immédiate par les forces de l'ordre</li>
                      <li>Bénéfice des conventions sur les avantages et privilèges diplomatiques</li>
                      <li>Usage strictement réservé aux activités professionnelles diplomatiques</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-6">
                <h3 itemProp="name" className="font-semibold text-lg mb-2">
                  Quelles différences existe-t-il entre la codification des plaques diplomatiques selon les pays ?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p className="mb-3">
                      Chaque État adopte sa propre méthode de <strong>codification</strong> et de signalétique pour les
                      plaques diplomatiques. Certains optent pour des <strong>couleurs distinctes</strong>, d'autres
                      privilégient des séries de caractères reliées à la <strong>nationalité</strong> ou au statut
                      précis du porteur. Malgré l'absence de norme mondiale totalement uniforme, la tendance
                      internationale vise une <strong>simplification croissante</strong> pour harmoniser
                      l'identification et renforcer la sécurité des déplacements diplomatiques.
                    </p>
                    <div className="overflow-x-auto mt-3">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-2 text-left">Pays</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Code pays utilisé</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">France</td>
                            <td className="border border-gray-300 px-4 py-2">Numéro administratif</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">Allemagne</td>
                            <td className="border border-gray-300 px-4 py-2">Initiales + numéro</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-6">
                <h3 itemProp="name" className="font-semibold text-lg mb-2">
                  Pourquoi associer la sécurité et la protection aux plaques diplomatiques ?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p className="mb-3">
                      La <strong>sécurité</strong> et la <strong>protection</strong> sont centrales dans l'histoire des
                      plaques diplomatiques car elles réduisent les risques auxquels sont confrontés les diplomates à
                      l'étranger. Une plaque officielle permet de mieux identifier un véhicule lors d'un incident, mais
                      aussi d'appliquer rapidement les protocoles réservés aux représentants d'un pays tiers.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Réponse rapide des autorités en cas de situation d'urgence</li>
                      <li>Dissuasion contre les actes hostiles envers les diplomates</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-6">
                <h3 itemProp="name" className="font-semibold text-lg mb-2">
                  Quels sont les principaux avantages et privilèges conférés par les plaques diplomatiques ?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p className="mb-3">
                      Les détenteurs de <strong>plaques diplomatiques</strong> bénéficient de multiples{" "}
                      <strong>avantages</strong> comme l'exonération de certains frais douaniers, la liberté de
                      déplacement ou des procédures simplifiées lors des contrôles policiers. Ces privilèges assurent la
                      représentation efficace des États et soutiennent directement le bon déroulement des{" "}
                      <strong>relations internationales</strong>.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Accès rapide à des zones sécurisées</li>
                      <li>Garantie d'immunité prévue par les conventions diplomatiques</li>
                      <li>Stationnement réservé dans des lieux stratégiques</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section Scanner */}
        <Card className="mb-8 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-800">
              <Camera className="h-5 w-5" />
              Analyser les plaques diplomatiques modernes
            </CardTitle>
            <CardDescription>
              Découvrez l'évolution actuelle avec nos outils de reconnaissance des plaques diplomatiques
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/">
                <Button className="w-full h-auto p-4 flex flex-col items-center gap-2 bg-amber-600 hover:bg-amber-700">
                  <Search className="h-6 w-6" />
                  <span className="font-medium">Scanner universel</span>
                  <span className="text-xs opacity-90">Tous types de plaques</span>
                </Button>
              </Link>
              <Link href="/french">
                <Button
                  variant="outline"
                  className="w-full h-auto p-4 flex flex-col items-center gap-2 border-amber-200 hover:bg-amber-50 bg-transparent"
                >
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <span className="font-medium">Scanner français</span>
                  <span className="text-xs text-gray-600">Système français moderne</span>
                </Button>
              </Link>
              <Link href="/swiss">
                <Button
                  variant="outline"
                  className="w-full h-auto p-4 flex flex-col items-center gap-2 border-amber-200 hover:bg-amber-50 bg-transparent"
                >
                  <MapPin className="h-6 w-6 text-red-600" />
                  <span className="font-medium">Scanner suisse</span>
                  <span className="text-xs text-gray-600">Système suisse actuel</span>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Ressources liées */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-green-600" />
              Ressources complémentaires sur l'histoire diplomatique
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/legislation-conventions-vienne-plaques-diplomatiques" className="block">
                <Card className="h-full hover:shadow-md transition-shadow border-green-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Scale className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">Conventions de Vienne</h3>
                        <p className="text-sm text-gray-600">Cadre juridique historique des relations diplomatiques</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/plaques-organisations-internationales-onu-otan" className="block">
                <Card className="h-full hover:shadow-md transition-shadow border-blue-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">Organisations internationales</h3>
                        <p className="text-sm text-gray-600">Évolution des plaques ONU, OTAN et institutions</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/privileges-immunites-plaques-diplomatiques" className="block">
                <Card className="h-full hover:shadow-md transition-shadow border-purple-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-purple-600 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">Privilèges et immunités</h3>
                        <p className="text-sm text-gray-600">Développement historique des droits diplomatiques</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/differences-plaques-consulaires-diplomatiques" className="block">
                <Card className="h-full hover:shadow-md transition-shadow border-amber-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Archive className="h-5 w-5 text-amber-600 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">Évolution consulaire/diplomatique</h3>
                        <p className="text-sm text-gray-600">Histoire des distinctions entre types de plaques</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
