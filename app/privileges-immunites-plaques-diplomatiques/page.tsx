import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Scale, Car, FileText, Users, Globe, CheckCircle, AlertTriangle, BookOpen, Camera } from "lucide-react"

export const metadata: Metadata = {
  title: "Les privilèges et immunités liés aux plaques diplomatiques | Guide complet 2024",
  description:
    "Découvrez les privilèges et immunités diplomatiques associés aux plaques CD, CC et CMD. Guide complet sur l'inviolabilité, l'immunité fiscale et les droits diplomatiques en France et Suisse.",
  keywords: [
    "privilèges diplomatiques",
    "immunités diplomatiques",
    "plaques CD",
    "plaques CC",
    "plaques CMD",
    "inviolabilité diplomatique",
    "immunité fiscale",
    "convention de Vienne",
    "relations internationales",
    "droit diplomatique",
    "stationnement diplomatique",
    "exemption douanière",
    "immunité pénale",
    "immunité civile",
    "corps diplomatique",
    "consulats privilèges",
    "ambassades immunités",
    "organisations internationales",
    "personnel diplomatique",
    "véhicules diplomatiques",
  ],
  authors: [{ name: "Diplo Scanner" }],
  creator: "Diplo Scanner",
  publisher: "Diplo Scanner",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Les privilèges et immunités liés aux plaques diplomatiques",
    description:
      "Guide complet sur les privilèges diplomatiques : inviolabilité, immunité fiscale, droits de stationnement et exemptions douanières.",
    url: "https://diplo-scanner.com/privileges-immunites-plaques-diplomatiques",
    siteName: "Diplo Scanner",
    locale: "fr_FR",
    type: "article",
    publishedTime: "2024-01-15T00:00:00.000Z",
    modifiedTime: "2024-01-15T00:00:00.000Z",
    images: [
      {
        url: "/images/privileges-diplomatiques-og.png",
        width: 1200,
        height: 630,
        alt: "Privilèges et immunités diplomatiques - Guide complet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Les privilèges et immunités liés aux plaques diplomatiques",
    description: "Guide complet sur les privilèges diplomatiques : inviolabilité, immunité fiscale et droits spéciaux.",
    images: ["/images/privileges-diplomatiques-twitter.png"],
  },
  alternates: {
    canonical: "https://diplo-scanner.com/privileges-immunites-plaques-diplomatiques",
  },
}

export default function PrivilegesImmunitesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Les privilèges et immunités liés aux plaques diplomatiques",
            description:
              "Guide complet sur les privilèges et immunités diplomatiques associés aux plaques CD, CC et CMD",
            author: {
              "@type": "Organization",
              name: "Diplo Scanner",
            },
            publisher: {
              "@type": "Organization",
              name: "Diplo Scanner",
              logo: {
                "@type": "ImageObject",
                url: "https://diplo-scanner.com/logo.png",
              },
            },
            datePublished: "2024-01-15T00:00:00.000Z",
            dateModified: "2024-01-15T00:00:00.000Z",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://diplo-scanner.com/privileges-immunites-plaques-diplomatiques",
            },
            image: "https://diplo-scanner.com/images/privileges-diplomatiques-og.png",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Quels sont les privilèges liés aux plaques CD ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Les plaques CD (Corps Diplomatique) confèrent l'inviolabilité personnelle, l'immunité de juridiction pénale et civile, l'exemption fiscale et douanière, ainsi que des droits de stationnement spéciaux.",
                },
              },
              {
                "@type": "Question",
                name: "Les plaques CC ont-elles les mêmes immunités que les CD ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Les plaques CC (Corps Consulaire) bénéficient d'immunités plus limitées : immunité pour les actes officiels uniquement, exemption fiscale partielle, et droits de stationnement restreints.",
                },
              },
              {
                "@type": "Question",
                name: "Peut-on contrôler un véhicule avec plaque diplomatique ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Les véhicules diplomatiques sont inviolables mais peuvent être contrôlés en cas d'infraction grave. Les forces de l'ordre peuvent demander l'identification mais ne peuvent pas fouiller le véhicule.",
                },
              },
              {
                "@type": "Question",
                name: "Les immunités diplomatiques sont-elles absolues ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Non, les immunités peuvent être levées par l'État d'envoi. De plus, elles ne s'appliquent pas aux infractions graves comme le terrorisme ou aux activités commerciales privées.",
                },
              },
            ],
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <Camera className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Diplo Scanner
                </span>
              </Link>
              <Link href="/">
                <Button variant="outline" size="sm">
                  Retour à l'accueil
                </Button>
              </Link>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>Droit diplomatique international</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Immunité diplomatique
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Découvrez les droits, privilèges et immunités accordés aux détenteurs de plaques diplomatiques CD, CC et
              CMD selon la Convention de Vienne et le droit international.
            </p>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white border-0">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold mb-2">Identifiez les plaques diplomatiques</h2>
                    <p className="text-blue-100">Scannez et décodez instantanément les plaques CD, CC et CMD</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/french">
                      <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                        <Camera className="w-5 h-5 mr-2" />
                        Scanner France
                      </Button>
                    </Link>
                    <Link href="/swiss">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white/10 bg-transparent"
                      >
                        <Camera className="w-5 h-5 mr-2" />
                        Scanner Suisse
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Main Content */}
        <main className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Introduction */}
            <section className="mb-16">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      L'immunité diplomatique en France : fonctionnement, abus et portée
                    </h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    <p className="text-xl mb-6">
                      <strong>L'immunité diplomatique</strong> intrigue et suscite parfois des débats passionnés dès que
                      l'on aborde la <strong>protection des diplomates</strong>, les{" "}
                      <strong>privilèges et immunités</strong> ou encore certains scandales inattendus. Pourtant, ce
                      statut spécial ne sert pas uniquement à éviter les complications lors d'un contrôle routier.
                      Derrière cette notion se cachent des règles précises, une logique internationale et des mécanismes
                      de contrôle qui régulent les relations entre États sur le territoire français. Plongeons ensemble
                      dans cet univers où inviolabilité rime avec responsabilité.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Immunité diplomatique : définition et fondements
                    </h3>
                    <p className="text-xl mb-6">
                      Reconnaître à certains étrangers un niveau de <strong>protection élevé</strong> fait partie des
                      traditions internationales depuis plusieurs siècles. L'<strong>immunité diplomatique</strong>{" "}
                      trouve ses racines dans la nécessité de préserver la mission, la sécurité et la liberté d'action
                      du personnel diplomatique étranger, sans risquer de subir des pressions injustifiées ou des
                      poursuites judiciaires arbitraires.
                    </p>
                    <p className="text-xl mb-6">
                      En France comme ailleurs, ces <strong>privilèges et immunités</strong> prennent leur source
                      principale dans la <strong>convention de Vienne de 1961</strong>, pierre angulaire du droit
                      international en matière de relations diplomatiques. Ce texte codifie le{" "}
                      <strong>champ d'application</strong> des protections ainsi que leurs limites, imposant aux
                      États-hôtes le devoir de respect envers les envoyés officiels tout en dessinant un cadre pour
                      éviter les excès.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Le champ d'application et les limites de l'immunité diplomatique
                    </h3>
                    <p className="text-xl mb-6">
                      <strong>L'immunité diplomatique</strong> n'est pas une permission générale de contourner les lois
                      locales. Elle s'applique avant tout au personnel des ambassades, à leur famille proche et à
                      certaines <strong>missions diplomatiques</strong> spécifiques. Cette protection concerne à la fois{" "}
                      <strong>l'inviolabilité du personnel diplomatique</strong> – c'est-à-dire l'impossibilité de
                      l'arrêter ou de le détenir – et l'exemption de juridiction pénale, civile et administrative locale
                      sous certaines conditions.
                    </p>
                    <p className="text-xl mb-6">
                      Des restrictions existent néanmoins pour encadrer cette exemption. Un diplomate peut voir sa{" "}
                      <strong>protection levée</strong> si son comportement déborde gravement les bornes fixées par la
                      convention ou si l'État qu'il représente renonce explicitement à certains{" "}
                      <strong>privilèges et immunités</strong>. Par ailleurs, des actes civils ou commerciaux réalisés à
                      titre privé ne bénéficient pas toujours de cette inviolabilité — une nuance qui vise à limiter les{" "}
                      <strong>abus et dérapages</strong> regrettés dans le passé.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Fonctionnement en pratique : exemples, contrôles et responsabilités
                    </h3>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">
                      Comment s'organise la protection des diplomates en France ?
                    </h4>
                    <p className="text-xl mb-6">
                      Lorsqu'un diplomate, son conjoint ou ses enfants résident sur le sol français, leur quotidien est
                      protégé par cette <strong>bulle réglementaire</strong>. Les forces de l'ordre n'ont pas le droit
                      d'entrer dans leur domicile officiel ni de fouiller leur véhicule sans autorisation expresse. Ce
                      principe vise à garantir leur libre exercice des fonctions, même lors de tensions diplomatiques.
                      Au sein des ambassades ou consulats, <strong>l'inviolabilité</strong> s'étend également aux
                      locaux, documents officiels et moyens de communication.
                    </p>
                    <p className="text-xl mb-6">
                      Cette faveur « extraterritoriale » doit cependant être utilisée avec discernement. En
                      contrepartie, la France attend de chaque représentation diplomatique ou consulaire le respect
                      scrupuleux des lois et réglementations nationales. Les autorités françaises disposent d'ailleurs
                      de moyens juridiques pour exercer une pression indirecte, comme la déclaration de{" "}
                      <strong>persona non grata</strong> en cas de manquement grave.
                    </p>

                    <h4 className="text-xl font-semibold text-gray-800 mb-3">
                      Quelles sont les obligations réciproques et comment opère la levée de l'immunité ?
                    </h4>
                    <p className="text-xl mb-6">
                      <strong>L'immunité diplomatique</strong> fonctionne toujours selon un équilibre. Si un acte commis
                      par un diplomate franchit le seuil du tolérable, son pays d'origine peut accepter que la France
                      engage une action judiciaire. C'est ce que l'on appelle la <strong>levée de l'immunité</strong>,
                      généralement réservée aux infractions graves.
                    </p>
                    <p className="text-xl mb-6">
                      L'État accréditant peut aussi rappeler son agent fautif, mettant fin immédiatement à ses{" "}
                      <strong>protections liées à la mission officielle</strong>. Le diplomate redevenu simple citoyen
                      redevient pleinement justiciable devant les tribunaux français. Ces mécanismes de contrôle sont
                      essentiels afin de conserver la confiance entre nations, même face à des{" "}
                      <strong>abus isolés</strong>.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                      <div className="flex items-start space-x-3">
                        <Scale className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-blue-900 mb-2">Fondement juridique</h3>
                          <p className="text-blue-800">
                            Ces privilèges reposent sur le principe de <strong>réciprocité</strong> : chaque État
                            accorde des immunités aux diplomates étrangers en échange du même traitement pour ses
                            propres diplomates à l'étranger.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Image SEO optimisée */}
            <section className="mb-16">
              <div className="container mx-auto max-w-4xl">
                <div className="text-center">
                  <img
                    src="/images/justice-balance-immunites-diplomatiques.png"
                    alt="Balance de la justice symbolisant les immunités et privilèges diplomatiques accordés aux plaques CD, CC et CMD selon la Convention de Vienne sur les relations diplomatiques"
                    width={400}
                    height={400}
                    loading="lazy"
                    className="mx-auto mb-6 max-w-sm w-full h-auto"
                  />
                  <p className="text-gray-600 text-sm italic max-w-2xl mx-auto">
                    La balance de la justice illustre l'équilibre entre les privilèges diplomatiques et les
                    responsabilités internationales. Les immunités accordées aux détenteurs de plaques diplomatiques
                    reposent sur les principes du droit international et de la réciprocité entre États.
                  </p>
                </div>
              </div>
            </section>

            {/* Types de plaques et privilèges */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Privilèges selon le type de plaque</h2>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Plaques CD */}
                <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <Badge className="bg-blue-600 text-white text-lg px-4 py-2">CD - Corps Diplomatique</Badge>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">Immunités complètes</h3>

                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Inviolabilité personnelle</strong> totale
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Immunité de juridiction</strong> pénale et civile
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Exemption fiscale</strong> complète
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Exemption douanière</strong> totale
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Stationnement libre</strong> en zone diplomatique
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Plaques CC */}
                <Card className="border-2 border-green-200 hover:border-green-400 transition-colors">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <Badge className="bg-green-600 text-white text-lg px-4 py-2">CC - Corps Consulaire</Badge>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">Immunités limitées</h3>

                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Immunité fonctionnelle</strong> uniquement
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Protection</strong> des actes officiels
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Exemption fiscale</strong> partielle
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Exemption douanière</strong> restreinte
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Stationnement</strong> selon réglementation locale
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Plaques CMD */}
                <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-8 h-8 text-white" />
                      </div>
                      <Badge className="bg-purple-600 text-white text-lg px-4 py-2">CMD - Chef de Mission</Badge>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">Immunités maximales</h3>

                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Inviolabilité absolue</strong> de la personne
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Immunité totale</strong> de juridiction
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Exemptions fiscales</strong> étendues
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Privilèges protocolaires</strong> spéciaux
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong>Stationnement prioritaire</strong> garanti
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Privilèges détaillés */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Privilèges détaillés par domaine</h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Inviolabilité */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <Shield className="w-6 h-6 text-red-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Inviolabilité</h3>
                    </div>

                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>Personne inviolable :</strong> Aucune arrestation, détention ou poursuite possible
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>Véhicule protégé :</strong> Pas de fouille, saisie ou immobilisation
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>Résidence inviolable :</strong> Domicile et bureaux protégés
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>Correspondance protégée :</strong> Courrier et communications sécurisés
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Immunité de juridiction */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Scale className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Immunité juridique</h3>
                    </div>

                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>Immunité pénale :</strong> Pas de poursuites criminelles
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>Immunité civile :</strong> Protection contre les procès civils
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>Immunité administrative :</strong> Exemption des obligations administratives
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>Non-témoignage :</strong> Pas d'obligation de témoigner
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Exemptions fiscales */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Exemptions fiscales</h3>
                    </div>

                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>Impôts directs :</strong> Exemption totale (revenus, patrimoine)
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>TVA :</strong> Remboursement sur achats officiels
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>Droits de douane :</strong> Exemption sur importations personnelles
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>Taxes locales :</strong> Exemption des taxes municipales
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Privilèges de circulation */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Car className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Privilèges de circulation</h3>
                    </div>

                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>Stationnement libre :</strong> Zones réservées et prioritaires
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>Contrôles routiers :</strong> Identification simple sans fouille
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>Amendes :</strong> Transmission via voie diplomatique
                        </div>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>Libre circulation :</strong> Accès facilité aux zones officielles
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Limites et exceptions */}
            <section className="mb-16">
              <Card className="border-0 shadow-lg bg-orange-50">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-orange-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Limites et exceptions importantes</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Les immunités ne s'appliquent PAS à :</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            <strong>Activités commerciales privées</strong> non officielles
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            <strong>Crimes graves</strong> : terrorisme, trafic de drogue
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            <strong>Actions en dommages</strong> pour accidents de circulation
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            <strong>Biens immobiliers</strong> détenus à titre privé
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Levée des immunités :</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            <strong>Renonciation expresse</strong> de l'État d'envoi
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            <strong>Fin de mission</strong> diplomatique
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            <strong>Persona non grata</strong> déclarée
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            <strong>Rupture des relations</strong> diplomatiques
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Questions fréquentes</h2>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Quels sont les privilèges liés aux plaques CD ?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Les plaques CD (Corps Diplomatique) confèrent l'<strong>inviolabilité personnelle</strong>, l'
                      <strong>immunité de juridiction pénale et civile</strong>, l'
                      <strong>exemption fiscale et douanière</strong>, ainsi que des{" "}
                      <strong>droits de stationnement spéciaux</strong>. Ces privilèges sont les plus étendus du système
                      diplomatique.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Les plaques CC ont-elles les mêmes immunités que les CD ?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Non, les plaques CC (Corps Consulaire) bénéficient d'<strong>immunités plus limitées</strong> :
                      immunité pour les actes officiels uniquement, exemption fiscale partielle, et droits de
                      stationnement restreints. Elles ne confèrent pas l'inviolabilité personnelle complète.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Peut-on contrôler un véhicule avec plaque diplomatique ?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Les véhicules diplomatiques sont <strong>inviolables</strong> mais peuvent être contrôlés en cas
                      d'infraction grave. Les forces de l'ordre peuvent demander l'identification mais ne peuvent pas
                      fouiller le véhicule. En cas de problème majeur, la procédure passe par les voies diplomatiques.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Les immunités diplomatiques sont-elles absolues ?
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Non, les immunités peuvent être <strong>levées par l'État d'envoi</strong>. De plus, elles ne
                      s'appliquent pas aux infractions graves comme le terrorisme ou aux activités commerciales privées.
                      L'immunité est un privilège fonctionnel, pas un droit absolu.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Navigation vers outils */}
            <section className="mb-16">
              <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-green-600 text-white">
                <CardContent className="p-8 text-center">
                  <h2 className="text-3xl font-bold mb-4">Identifiez les plaques diplomatiques</h2>
                  <p className="text-xl text-blue-100 mb-8">
                    Utilisez Diplo Scanner pour identifier instantanément les plaques CD, CC et CMD et connaître leurs
                    privilèges associés
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/french">
                      <Button
                        size="lg"
                        className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg border-0 h-16 px-8"
                      >
                        <div className="flex items-center space-x-3">
                          <Camera className="w-6 h-6" />
                          <div className="text-left">
                            <div className="font-bold">Scanner France 🇫🇷</div>
                            <div className="text-sm opacity-80">Plaques CMD françaises</div>
                          </div>
                        </div>
                      </Button>
                    </Link>

                    <Link href="/swiss">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white/10 h-16 px-8 bg-transparent"
                      >
                        <div className="flex items-center space-x-3">
                          <Camera className="w-6 h-6" />
                          <div className="text-left">
                            <div className="font-bold">Scanner Suisse 🇨🇭</div>
                            <div className="text-sm opacity-80">Plaques CD/CC suisses</div>
                          </div>
                        </div>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Footer navigation */}
            <section>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ressources complémentaires</h2>

                  <div className="grid md:grid-cols-4 gap-4">
                    <Link href="/comment-lire-une-plaque-diplomatique-francaise">
                      <Button
                        variant="outline"
                        className="w-full h-auto p-4 flex flex-col items-center space-y-2 bg-transparent"
                      >
                        <BookOpen className="w-6 h-6" />
                        <span className="text-center">Guide France</span>
                      </Button>
                    </Link>

                    <Link href="/comment-lire-une-plaque-diplomatique-suisse">
                      <Button
                        variant="outline"
                        className="w-full h-auto p-4 flex flex-col items-center space-y-2 bg-transparent"
                      >
                        <BookOpen className="w-6 h-6" />
                        <span className="text-center">Guide Suisse</span>
                      </Button>
                    </Link>

                    <Link href="/liste-codes-pays-plaques-diplomatiques-francaises">
                      <Button
                        variant="outline"
                        className="w-full h-auto p-4 flex flex-col items-center space-y-2 bg-transparent"
                      >
                        <FileText className="w-6 h-6" />
                        <span className="text-center">Codes France</span>
                      </Button>
                    </Link>

                    <Link href="/codes-diplomatiques-suisses">
                      <Button
                        variant="outline"
                        className="w-full h-auto p-4 flex flex-col items-center space-y-2 bg-transparent"
                      >
                        <FileText className="w-6 h-6" />
                        <span className="text-center">Codes Suisse</span>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}
