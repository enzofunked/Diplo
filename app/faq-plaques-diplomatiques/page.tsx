import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Search, HelpCircle, Shield, Car, Globe, AlertTriangle, Users, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "FAQ : Tout savoir sur les plaques diplomatiques | Questions fréquentes 2024",
  description:
    "Réponses complètes aux questions fréquentes sur les plaques diplomatiques CD, CC, CMD. Privilèges, identification, circulation, règlementation France et Suisse.",
  keywords: [
    "FAQ plaques diplomatiques",
    "questions fréquentes diplomatiques",
    "CD CC CMD différences",
    "privilèges diplomatiques",
    "immunité diplomatique",
    "plaques consulaires",
    "circulation diplomatique",
    "contrôle police diplomatique",
    "stationnement diplomatique",
    "codes pays diplomatiques",
    "organisations internationales",
    "ONU OMS plaques",
    "règlementation diplomatique",
    "infractions diplomatiques",
    "validité plaques diplomatiques",
  ].join(", "),
  authors: [{ name: "Diplo Scanner" }],
  creator: "Diplo Scanner",
  publisher: "Diplo Scanner",
  robots: "index, follow",
  canonical: "https://diplo-scanner.com/faq-plaques-diplomatiques",
  openGraph: {
    title: "FAQ : Tout savoir sur les plaques diplomatiques | Questions fréquentes 2024",
    description:
      "Réponses complètes aux questions fréquentes sur les plaques diplomatiques CD, CC, CMD. Privilèges, circulation, règlementation.",
    url: "https://diplo-scanner.com/faq-plaques-diplomatiques",
    siteName: "Diplo Scanner",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "FAQ Plaques Diplomatiques - Questions et Réponses",
      },
    ],
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ : Tout savoir sur les plaques diplomatiques",
    description:
      "Réponses aux questions fréquentes sur les plaques CD, CC, CMD. Privilèges, circulation, règlementation.",
    images: ["/placeholder.svg?height=630&width=1200"],
    creator: "@DiploScanner",
  },
}

export default function FAQPage() {
  const faqData = [
    {
      category: "🔍 Identification des plaques",
      icon: Search,
      color: "blue",
      questions: [
        {
          q: "Comment reconnaître une plaque diplomatique ?",
          a: "Les plaques diplomatiques se distinguent par leurs codes spéciaux : CD (Corps Diplomatique), CC (Corps Consulaire), CMD (Chef de Mission Diplomatique) en France, ou CD, CC, AT en Suisse. Elles ont souvent des couleurs spécifiques et des formats particuliers.",
        },
        {
          q: "Quelle est la différence entre CD, CC et CMD ?",
          a: "CD = Corps Diplomatique (ambassades, personnel diplomatique), CC = Corps Consulaire (consulats, personnel consulaire), CMD = Chef de Mission Diplomatique (ambassadeurs et hauts responsables). En Suisse, AT remplace CMD pour les organisations internationales.",
        },
        {
          q: "Comment lire les codes pays sur les plaques ?",
          a: "Les codes pays sont des numéros qui identifient le pays d'origine. Par exemple : 1 = États-Unis, 2 = Allemagne, 3 = Royaume-Uni. Chaque système (français/suisse) a sa propre numérotation.",
        },
        {
          q: "Les plaques diplomatiques sont-elles les mêmes partout ?",
          a: "Non, chaque pays a son propre système. La France utilise CMD/CD/CC, la Suisse utilise CD/CC/AT, d'autres pays ont leurs propres codes. Les couleurs et formats varient également.",
        },
        {
          q: "Peut-on scanner une plaque avec Diplo Scanner ?",
          a: "Oui ! Diplo Scanner peut identifier automatiquement les plaques françaises et suisses. Il suffit de prendre une photo ou saisir le texte pour obtenir les informations sur le pays et le statut.",
        },
      ],
    },
    {
      category: "🛡️ Privilèges et immunités",
      icon: Shield,
      color: "green",
      questions: [
        {
          q: "Quels privilèges ont les porteurs de plaques CD ?",
          a: "Les plaques CD donnent droit à l'immunité diplomatique complète : inviolabilité personnelle, immunité de juridiction pénale et civile, exemption fiscale, liberté de circulation, et protection spéciale des forces de l'ordre.",
        },
        {
          q: "Les plaques CC ont-elles les mêmes privilèges que les CD ?",
          a: "Non, les privilèges CC sont plus limités. Immunité pour les actes officiels uniquement, pas d'immunité pénale complète, exemptions fiscales restreintes. Les privilèges varient selon le rang consulaire.",
        },
        {
          q: "Que signifie l'inviolabilité diplomatique ?",
          a: "L'inviolabilité signifie que la personne ne peut être arrêtée, détenue ou poursuivie. Son domicile et ses biens sont protégés. En cas d'infraction grave, la personne peut être déclarée 'persona non grata' et expulsée.",
        },
        {
          q: "Les familles des diplomates ont-elles des privilèges ?",
          a: "Oui, les conjoints et enfants mineurs des diplomates bénéficient généralement des mêmes immunités. Ils peuvent avoir des plaques spéciales ou être couverts par le statut du diplomate principal.",
        },
        {
          q: "Les privilèges sont-ils valables dans tous les pays ?",
          a: "Les privilèges sont valables dans le pays d'accréditation uniquement. Un diplomate français en Allemagne a des privilèges en Allemagne, mais pas en Italie s'il y voyage en tant que touriste.",
        },
      ],
    },
    {
      category: "🚗 Circulation et contrôles",
      icon: Car,
      color: "orange",
      questions: [
        {
          q: "Peut-on contrôler un véhicule avec plaque diplomatique ?",
          a: "Les contrôles sont possibles mais limités. La police peut vérifier l'identité et la validité de la plaque, mais ne peut pas fouiller le véhicule sans autorisation spéciale. Les procédures varient selon le statut (CD/CC/CMD).",
        },
        {
          q: "Que se passe-t-il en cas d'infraction routière ?",
          a: "Les diplomates CD ne peuvent pas être poursuivis pénalement, mais l'infraction est signalée à leur ambassade. Les amendes peuvent être annulées ou payées par la mission diplomatique. Pour CC, les règles sont plus strictes.",
        },
        {
          q: "Les plaques diplomatiques permettent-elles de stationner partout ?",
          a: "Non, c'est un mythe ! Les diplomates doivent respecter les règles de stationnement. Ils peuvent avoir des facilités (places réservées près des ambassades), mais ne peuvent pas stationner n'importe où impunément.",
        },
        {
          q: "Comment signaler un abus de plaque diplomatique ?",
          a: "Contactez la police locale qui transmettra à la préfecture ou au ministère des Affaires étrangères. Les abus sont pris au sérieux et peuvent entraîner des sanctions diplomatiques ou le retrait de la plaque.",
        },
        {
          q: "Les véhicules diplomatiques peuvent-ils être saisis ?",
          a: "Très rarement et seulement dans des cas exceptionnels (sécurité nationale, crimes graves). La saisie nécessite généralement l'accord du ministère des Affaires étrangères et peut créer un incident diplomatique.",
        },
      ],
    },
    {
      category: "⚠️ Règlementation et validité",
      icon: AlertTriangle,
      color: "red",
      questions: [
        {
          q: "Qui peut obtenir une plaque diplomatique ?",
          a: "Seuls les diplomates accrédités, le personnel consulaire officiel, et les fonctionnaires d'organisations internationales reconnues. La demande passe par le ministère des Affaires étrangères du pays d'accueil.",
        },
        {
          q: "Les plaques diplomatiques ont-elles une date d'expiration ?",
          a: "Oui, elles sont liées à la durée de la mission diplomatique. Elles doivent être renouvelées périodiquement et sont retirées à la fin de l'affectation. La validité est vérifiée régulièrement.",
        },
        {
          q: "Peut-on acheter ou falsifier une plaque diplomatique ?",
          a: "C'est strictement interdit et constitue un crime grave ! La falsification de plaques diplomatiques est passible de lourdes peines de prison. Les plaques authentiques ont des sécurités spéciales.",
        },
        {
          q: "Les plaques sont-elles valables dans toute l'Europe ?",
          a: "Chaque pays émet ses propres plaques pour son territoire. Une plaque française CD n'est valable qu'en France. Pour voyager, les diplomates utilisent leurs passeports diplomatiques et peuvent avoir des facilités douanières.",
        },
        {
          q: "Comment vérifier l'authenticité d'une plaque ?",
          a: "Utilisez Diplo Scanner pour une première vérification ! En cas de doute, contactez la préfecture ou la police. Les vraies plaques ont des caractéristiques de sécurité : hologrammes, polices spéciales, matériaux particuliers.",
        },
      ],
    },
    {
      category: "🌍 Organisations internationales",
      icon: Globe,
      color: "purple",
      questions: [
        {
          q: "Que signifient les codes AT en Suisse ?",
          a: "AT signifie 'Autres Organisations' et concerne le personnel des organisations internationales basées en Suisse : ONU, OMS, CERN, etc. Ces plaques donnent des privilèges spécifiques selon l'organisation.",
        },
        {
          q: "L'ONU a-t-elle ses propres plaques ?",
          a: "Oui, l'ONU et ses agences ont des plaques spéciales. À Genève : plaques AT avec codes spéciaux. À New York : plaques UN. À Paris : plaques spéciales pour l'UNESCO. Chaque siège a son système.",
        },
        {
          q: "Quels privilèges ont les fonctionnaires internationaux ?",
          a: "Cela dépend de leur rang et de l'organisation. Les hauts fonctionnaires ont des privilèges similaires aux diplomates. Le personnel junior a des immunités limitées aux actes officiels. Les privilèges sont définis par les accords de siège.",
        },
        {
          q: "Comment reconnaître une plaque d'organisation internationale ?",
          a: "Recherchez les codes AT (Suisse), OI (France), ou des codes spéciaux comme UN, EU, NATO. Les couleurs sont souvent différentes (bleu pour l'ONU, par exemple). Diplo Scanner peut les identifier automatiquement.",
        },
        {
          q: "Les journalistes accrédités ont-ils des plaques spéciales ?",
          a: "Généralement non. Les journalistes ont des cartes de presse et des accréditations, mais pas de plaques diplomatiques. Seuls les correspondants officiels de certaines organisations peuvent avoir des facilités particulières.",
        },
      ],
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-200 bg-blue-50 text-blue-800",
      green: "border-green-200 bg-green-50 text-green-800",
      orange: "border-orange-200 bg-orange-50 text-orange-800",
      red: "border-red-200 bg-red-50 text-red-800",
      purple: "border-purple-200 bg-purple-50 text-purple-800",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header avec navigation */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Accueil
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">FAQ Plaques Diplomatiques</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-300 rounded-full text-sm text-blue-800 mb-4">
            <HelpCircle className="w-4 h-4" />
            Questions Fréquentes
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tout savoir sur les plaques diplomatiques</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Réponses complètes aux questions les plus fréquentes sur les plaques CD, CC, CMD, AT. Privilèges,
            identification, circulation, règlementation France et Suisse.
          </p>

          {/* Statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">25+</div>
              <div className="text-sm text-gray-600">Questions répondues</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">200+</div>
              <div className="text-sm text-gray-600">Codes diplomatiques</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">2</div>
              <div className="text-sm text-gray-600">Systèmes couverts</div>
            </div>
          </div>

          {/* Image SEO optimisée */}
          <div className="max-w-md mx-auto mb-8">
            <img
              src="/images/faq-plaques-diplomatiques-questions-reponses.png"
              alt="FAQ plaques diplomatiques - Questions et réponses sur les plaques CD, CC, CMD, AT pour corps diplomatique et consulaire France Suisse"
              width={400}
              height={300}
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
            <p className="text-sm text-gray-600 mt-3 italic">
              Questions fréquentes sur l'identification et les privilèges des plaques diplomatiques
            </p>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white text-center mb-12">
          <h2 className="text-2xl font-bold mb-2">Identifiez une plaque diplomatique</h2>
          <p className="mb-4 opacity-90">Scanner automatique pour plaques françaises et suisses</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/french">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">🇫🇷 Scanner France</Button>
            </Link>
            <Link href="/swiss">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold">🇨🇭 Scanner Suisse</Button>
            </Link>
          </div>
        </section>

        {/* FAQ par catégories */}
        <section className="space-y-8">
          {faqData.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <div key={categoryIndex}>
                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${getColorClasses(category.color)}`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.category}
                </div>

                <div className="grid gap-4">
                  {category.questions.map((faq, faqIndex) => (
                    <Card key={faqIndex} className="border-gray-200 hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-gray-900 flex items-start gap-2">
                          <span className="text-blue-600 font-bold text-sm mt-1">Q:</span>
                          {faq.q}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-start gap-2">
                          <span className="text-green-600 font-bold text-sm mt-1">R:</span>
                          <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )
          })}
        </section>

        {/* Section Ressources */}
        <section className="mt-16 bg-white rounded-xl p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-center mb-8">Ressources complémentaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/comment-lire-une-plaque-diplomatique-francaise">
              <Card className="border-green-200 hover:bg-green-50 transition-colors cursor-pointer h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🇫🇷</span>
                    <h3 className="font-semibold text-green-800">Guide France</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Comment lire et décoder les plaques diplomatiques françaises CMD, CD, CC
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/comment-lire-une-plaque-diplomatique-suisse">
              <Card className="border-red-200 hover:bg-red-50 transition-colors cursor-pointer h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🇨🇭</span>
                    <h3 className="font-semibold text-red-800">Guide Suisse</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Comment lire et décoder les plaques diplomatiques suisses CD, CC, AT
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/liste-codes-pays-plaques-diplomatiques-francaises">
              <Card className="border-blue-200 hover:bg-blue-50 transition-colors cursor-pointer h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                    <h3 className="font-semibold text-blue-800">Codes France</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Liste complète des codes pays pour les plaques diplomatiques françaises
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/codes-diplomatiques-suisses">
              <Card className="border-purple-200 hover:bg-purple-50 transition-colors cursor-pointer h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-purple-600" />
                    <h3 className="font-semibold text-purple-800">Codes Suisse</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Liste complète des codes pays et organisations pour les plaques suisses
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* Footer Navigation */}
        <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
              🏠 Accueil
            </Link>
            <Link
              href="/privileges-immunites-plaques-diplomatiques"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              🛡️ Privilèges & Immunités
            </Link>
            <Link
              href="/qu-est-ce-qu-une-plaque-diplomatique"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ❓ Qu'est-ce qu'une plaque diplomatique
            </Link>
            <Link href="/help" className="text-blue-600 hover:text-blue-800 font-medium">
              💬 Aide
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            Diplo Scanner - Identification automatique des plaques diplomatiques France & Suisse
          </p>
        </footer>
      </div>

      {/* Données structurées JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.flatMap((category) =>
              category.questions.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            ),
            about: {
              "@type": "Thing",
              name: "Plaques diplomatiques",
              description: "Plaques d'immatriculation spéciales pour le corps diplomatique et consulaire",
            },
            publisher: {
              "@type": "Organization",
              name: "Diplo Scanner",
              url: "https://diplo-scanner.com",
            },
          }),
        }}
      />
    </div>
  )
}
