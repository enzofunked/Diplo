import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Shield, Users, FileText, Scale, Building2, Camera, Search, MapPin, BookOpen, Info } from "lucide-react"

export const metadata: Metadata = {
  title: "Plaques d'organisations internationales : ONU, OTAN et institutions spécialisées | Guide complet 2024",
  description:
    "Découvrez tout sur les plaques spéciales des organisations internationales : ONU, OTAN, UNESCO. Privilèges, immunités, caractéristiques et différences avec les plaques diplomatiques.",
  keywords: [
    "plaques organisations internationales",
    "plaque ONU",
    "plaque OTAN",
    "plaque UNESCO",
    "institutions spécialisées",
    "privilèges immunités",
    "plaques spéciales",
    "organisations intergouvernementales",
    "accords internationaux",
    "sécurité internationale",
    "coopération internationale",
    "Nations unies",
    "institutions européennes",
  ],
  openGraph: {
    title: "Plaques d'organisations internationales : ONU, OTAN et institutions spécialisées",
    description:
      "Guide complet sur les plaques spéciales des organisations internationales : privilèges, immunités et caractéristiques distinctives.",
    type: "article",
    url: "https://diplo-scanner.com/plaques-organisations-internationales-onu-otan",
    images: [
      {
        url: "https://diplo-scanner.com/images/plaques-organisations-internationales-og.png",
        width: 1200,
        height: 630,
        alt: "Plaques d'organisations internationales ONU OTAN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plaques d'organisations internationales : ONU, OTAN et institutions spécialisées",
    description:
      "Guide complet sur les plaques spéciales des organisations internationales : privilèges, immunités et caractéristiques distinctives.",
    images: ["https://diplo-scanner.com/images/plaques-organisations-internationales-og.png"],
  },
  alternates: {
    canonical: "https://diplo-scanner.com/plaques-organisations-internationales-onu-otan",
  },
}

export default function PlaquesOrganisationsInternationalesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Globe className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Plaques d'organisations internationales : tout savoir sur les plaques spéciales pour l'ONU, l'OTAN et autres
            institutions
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Les <strong>plaques spécialisées réservées aux organisations internationales</strong> suscitent souvent la
            curiosité. Leur apparence singulière attire l'attention, que ce soit dans les quartiers diplomatiques ou
            lors de grands événements internationaux. Ces{" "}
            <strong>plaques jouent un rôle clé dans la circulation des représentants</strong> et témoignent du{" "}
            <strong>statut unique des institutions telles que les Nations unies ou l'Otan</strong>.
          </p>
        </div>

        {/* Section principale */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-blue-600" />
              Qu'est-ce qu'une plaque d'organisation internationale ?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              On croise parfois, au détour d'une ambassade ou lors de réunions internationales, des véhicules dotés de{" "}
              <strong>plaques d'immatriculation peu communes</strong>. Ces plaques ne sont pas anodines, elles signalent
              la présence d'une{" "}
              <strong>organisation ou d'une institution spécialisée opérant sous statut international</strong>. Leur
              couleur, leur format ou même les sigles inscrits permettent une{" "}
              <strong>identification rapide par les autorités compétentes</strong>.
            </p>
            <p>
              Elles ne se limitent pas à des distinctions visuelles. La possession de telles plaques accorde bien plus
              qu'un simple marquage spécifique. Détentrices de véritables{" "}
              <strong>{" "}
                  <Link
                    href="https://diplo-scanner.com/privileges-immunites-plaques-diplomatiques"
                    className="text-green-600 underline hover:text-blue-800"
                  >
                    privilèges et immunités
                  </Link>{" "} issus d'accords internationaux</strong>, ces plaques contribuent à assurer
              la <strong>mobilité et la sécurité des acteurs engagés dans la coopération internationale</strong>.
            </p>
          </CardContent>
        </Card>

        {/* Pourquoi des plaques spéciales */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              Pourquoi les organisations internationales utilisent-elles des plaques spéciales ?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Les <strong>organes principaux comme l'ONU, l'OTAN ou d'autres institutions apparentées</strong> ont
              besoin de garanties pour fonctionner efficacement sur le territoire d'états hôtes. L'utilisation de{" "}
              <strong>plaques diplomatiques spécifiques facilite notamment les déplacements sans entrave</strong>, offre
              une reconnaissance immédiate et limite le risque d'incident lors de contrôles routiers.
            </p>
            <p>
              Certains <strong>accords internationaux garantissent des droits particuliers</strong> aux missions,
              agences et représentations officielles. Les <strong>plaques d'organisations internationales</strong>{" "}
              permettent donc de matérialiser ces droits, tout en renforçant la <strong>sécurité internationale</strong>{" "}
              et la bonne entente entre états membres et observateurs.
            </p>
          </CardContent>
        </Card>

        {/* Caractéristiques distinctives */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-purple-600" />
              Caractéristiques distinctives des plaques d'organisations internationales
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Chaque pays adopte son propre code de conception, mais plusieurs similitudes existent à travers le monde.
              Ces <strong>éléments communs sont pensés pour garantir lisibilité, identité et efficacité</strong> lors de
              situations diplomatiques ou logistiques délicates.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Couleurs spécifiques</strong> (souvent bleu, blanc, vert ou rouge selon la classification)
              </li>
              <li>
                <strong>Sigles reconnaissables comme ONU ou OTAN</strong> pour les grandes institutions spécialisées
              </li>
              <li>
                <strong>Numérotation séquentielle</strong> pour faciliter la traçabilité administrative
              </li>
              <li>
                <strong>Mentions explicites liées à la mission ou au statut du véhicule</strong>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">
                Différence entre plaques diplomatiques et plaques d'organisations internationales
              </h4>
              <p>
                Souvent associées, les{" "}
                <strong>
                  plaques diplomatiques diffèrent cependant sensiblement des plaques d'organisations internationales
                </strong>
                . Les premières concernent avant tout les ambassades ou consulats, représentant directement un état
                souverain, alors que les secondes servent aux{" "}
                <strong>institutions agissant sous mandat international</strong>, transcendant les frontières
                nationales.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Systèmes de codification selon les pays</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Pays</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Éléments distinctifs</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Institutions concernées</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">France</td>
                      <td className="border border-gray-300 px-4 py-2">
                        Bande bleue, code ONI ou OTAN, numéros séquentiels
                      </td>
                      <td className="border border-gray-300 px-4 py-2">Nations unies, Otan, Unesco</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Belgique</td>
                      <td className="border border-gray-300 px-4 py-2">
                        Lettres "CD", bande rouge ou verte, logo officiel
                      </td>
                      <td className="border border-gray-300 px-4 py-2">Institution UE, représentation permanente</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Suisse</td>
                      <td className="border border-gray-300 px-4 py-2">
                        Fond vert, lettres blanches, mentions institutionnalisées
                      </td>
                      <td className="border border-gray-300 px-4 py-2">Organisations internationales à Genève</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enjeux et privilèges */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-amber-600" />
              Enjeux et intérêts liés aux plaques pour les institutions spécialisées
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Derrière l'apparence réglementaire, les{" "}
              <strong>plaques d'organisations internationales recèlent de nombreux atouts</strong>. Elles simplifient
              les protocoles administratifs, fluidifient la <strong>coopération internationale</strong> et dispensent
              parfois leurs utilisateurs de certaines taxes locales.
            </p>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Privilèges et immunités associés</h4>
              <p>
                De nombreux{" "}
                <strong>
                  accords internationaux spécifient justement les privilèges et immunités attachés à ces plaques
                </strong>
                . Les bénéficiaires jouissent généralement :
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>D'immunité contre certaines contraventions mineures</strong>
                </li>
                <li>
                  <strong>D'exemptions douanières sur les véhicules officiels</strong>
                </li>
                <li>
                  <strong>D'accès facilité aux points sensibles</strong> (aéroports, zones protégées…)
                </li>
                <li>
                  <strong>D'une assistance prioritaire en cas d'incident routier</strong>
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Limites et obligations des bénéficiaires</h4>
              <p>
                Même si ces privilèges s'avèrent indéniables, ils impliquent aussi des{" "}
                <strong>responsabilités strictes pour les utilisateurs</strong>. Tout abus expose à des sanctions
                administratives, voire à la révocation temporaire ou définitive de la <strong>plaque spéciale</strong>.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-blue-600" />
              Questions fréquentes sur les plaques d'organisations internationales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div itemScope itemType="https://schema.org/FAQPage">
              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-6">
                <h3 itemProp="name" className="font-semibold text-lg mb-2">
                  Quels types d'organisations peuvent prétendre à des plaques spéciales ?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p className="mb-3">
                      Les{" "}
                      <strong>
                        plaques spéciales concernent les institutions reconnues par accords internationaux
                      </strong>{" "}
                      comme les Nations unies, l'Otan ou encore des{" "}
                      <strong>organisations intergouvernementales européennes</strong>. On compte aussi des{" "}
                      <strong>institutions spécialisées œuvrant dans l'humanitaire, la santé ou l'éducation</strong>.
                      Voici quelques exemples :
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Conseil de l'Europe</li>
                      <li>AIEA (Agence internationale de l'énergie atomique)</li>
                      <li>Bureaux régionaux des agences onusiennes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-6">
                <h3 itemProp="name" className="font-semibold text-lg mb-2">
                  À quoi sert une plaque d'organisation internationale ?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p className="mb-3">
                      Une{" "}
                      <strong>
                        plaque de ce type signale que le véhicule appartient à une organisation bénéficiant de
                        privilèges et immunités juridiques
                      </strong>
                      . Elle permet la <strong>libre circulation</strong>, protège le{" "}
                      <strong>statut diplomatique de l'utilisateur</strong> et assure souvent un traitement prioritaire
                      lors de formalités aux frontières.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Circulation sans entraves</li>
                      <li>Reconnaissance immédiate par la police et la douane</li>
                      <li>Exemption de certaines taxes locales</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-6">
                <h3 itemProp="name" className="font-semibold text-lg mb-2">
                  Comment sont délivrées les plaques aux organisations internationales ?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p className="mb-3">
                      La délivrance requiert la{" "}
                      <strong>
                        validation de l'accréditation officielle de la structure auprès du ministère chargé des affaires
                        étrangères
                      </strong>{" "}
                      du pays d'accueil. Seules les <strong>institutions reconnues en bénéficient</strong>.
                    </p>
                    <ol className="list-decimal pl-6 space-y-1">
                      <li>Dépôt de dossier justifiant la mission</li>
                      <li>Vérification par les délégations et services protocolaires</li>
                      <li>Remise physique après inspection et accord formel</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-6">
                <h3 itemProp="name" className="font-semibold text-lg mb-2">
                  Existe-t-il une différence entre plaques diplomatiques et celles dédiées aux institutions spécialisées
                  ?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p className="mb-3">
                      Les <strong>plaques diplomatiques relèvent directement de la représentation d'un état</strong> par
                      ses ambassades ou consulats. Celles attribuées aux{" "}
                      <strong>institutions spécialisées identifient des organismes intergouvernementaux</strong> sans
                      attache exclusive à un seul pays.
                    </p>
                    <div className="overflow-x-auto mt-3">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-2 text-left">Critère</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Plaque diplomatique</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">
                              Plaque organisation internationale
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">Statut</td>
                            <td className="border border-gray-300 px-4 py-2">
                              Représentation nationale (ambassade/consulat)
                            </td>
                            <td className="border border-gray-300 px-4 py-2">Organisation multinationale</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">Privilèges</td>
                            <td className="border border-gray-300 px-4 py-2">Immunité totale</td>
                            <td className="border border-gray-300 px-4 py-2">
                              Immunité définie par accords spécifiques
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">Numérotation</td>
                            <td className="border border-gray-300 px-4 py-2"> Numéro + CD</td>
                            <td className="border border-gray-300 px-4 py-2">Sigle institution + numéro</td>
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

        {/* Section Scanner */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Camera className="h-5 w-5" />
              Identifier une plaque d'organisation internationale
            </CardTitle>
            <CardDescription>
              Utilisez nos outils de reconnaissance pour analyser et identifier les plaques spéciales
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/">
                <Button className="w-full h-auto p-4 flex flex-col items-center gap-2 bg-blue-600 hover:bg-blue-700">
                  <Search className="h-6 w-6" />
                  <span className="font-medium">Scanner universel</span>
                  <span className="text-xs opacity-90">Tous types de plaques</span>
                </Button>
              </Link>
              <Link href="/french">
                <Button
                  variant="outline"
                  className="w-full h-auto p-4 flex flex-col items-center gap-2 border-blue-200 hover:bg-blue-50 bg-transparent"
                >
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <span className="font-medium">Scanner français</span>
                  <span className="text-xs text-gray-600">Plaques françaises</span>
                </Button>
              </Link>
              <Link href="/swiss">
                <Button
                  variant="outline"
                  className="w-full h-auto p-4 flex flex-col items-center gap-2 border-blue-200 hover:bg-blue-50 bg-transparent"
                >
                  <MapPin className="h-6 w-6 text-red-600" />
                  <span className="font-medium">Scanner suisse</span>
                  <span className="text-xs text-gray-600">Plaques suisses</span>
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
              Ressources complémentaires
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
                        <h3 className="font-medium mb-1">Législation et conventions de Vienne</h3>
                        <p className="text-sm text-gray-600">Cadre juridique international des plaques diplomatiques</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/privileges-immunites-plaques-diplomatiques" className="block">
                <Card className="h-full hover:shadow-md transition-shadow border-blue-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">Privilèges et immunités</h3>
                        <p className="text-sm text-gray-600">Droits et protections des plaques diplomatiques</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/differences-plaques-consulaires-diplomatiques" className="block">
                <Card className="h-full hover:shadow-md transition-shadow border-purple-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-purple-600 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">Différences consulaires/diplomatiques</h3>
                        <p className="text-sm text-gray-600">Comprendre les distinctions entre types de plaques</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/faq-plaques-diplomatiques" className="block">
                <Card className="h-full hover:shadow-md transition-shadow border-amber-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Info className="h-5 w-5 text-amber-600 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">FAQ plaques diplomatiques</h3>
                        <p className="text-sm text-gray-600">Questions fréquentes et réponses détaillées</p>
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
