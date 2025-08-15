import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Eye, Globe, Info, MapPin, Search, Users, CheckCircle, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Comment lire une plaque diplomatique suisse ? | Guide complet 2024",
  description:
    "Guide détaillé pour déchiffrer les plaques diplomatiques suisses : codes pays, statuts CD/CC/AT, cantons BE/GE/ZH, couleurs et formats. Exemples concrets et scanner gratuit inclus.",
  keywords: [
    "comment lire plaque diplomatique suisse",
    "déchiffrer plaque diplomatique suisse",
    "codes pays diplomatiques suisse",
    "plaque CD suisse",
    "plaque CC suisse",
    "plaque AT suisse",
    "statut diplomatique suisse",
    "ambassade suisse plaque",
    "consulat suisse plaque",
    "corps diplomatique suisse",
    "immatriculation diplomatique suisse",
    "canton BE GE ZH diplomatique",
    "organisations internationales genève",
    "plaque verte suisse",
    "plaque bleue suisse",
    "plaque blanche suisse",
    "format plaque diplomatique suisse",
    "identifier plaque ambassade suisse",
    "code pays suisse diplomatique",
    "ONU genève plaque",
    "CICR plaque diplomatique",
  ],
  authors: [{ name: "Diplo Scanner" }],
  creator: "Diplo Scanner",
  publisher: "Diplo Scanner",
  openGraph: {
    title: "Comment lire une plaque diplomatique suisse ? | Guide complet 2024",
    description:
      "Guide détaillé pour déchiffrer les plaques diplomatiques suisses : codes pays, statuts CD/CC/AT, cantons et couleurs. Exemples concrets et scanner gratuit.",
    type: "article",
    url: "https://diplo-scanner.com/comment-lire-une-plaque-diplomatique-suisse",
    siteName: "Diplo Scanner",
    images: [
      {
        url: "/swiss-diplomatic-guide-og.png",
        width: 1200,
        height: 630,
        alt: "Guide complet pour lire les plaques diplomatiques suisses - CD CC AT",
        type: "image/jpeg",
      },
    ],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    site: "@DiploScanner",
    creator: "@DiploScanner",
    title: "Comment lire une plaque diplomatique suisse ? | Guide complet",
    description:
      "Apprenez à déchiffrer facilement les plaques diplomatiques suisses avec notre guide détaillé et exemples pratiques.",
    images: ["/swiss-diplomatic-guide-twitter.png"],
  },
  alternates: {
    canonical: "https://diplo-scanner.com/comment-lire-une-plaque-diplomatique-suisse",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

// Données structurées JSON-LD pour le SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Comment lire une plaque diplomatique suisse ?",
  description:
    "Guide complet pour déchiffrer les plaques diplomatiques suisses avec codes pays, statuts et exemples pratiques.",
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
  datePublished: "2024-01-15",
  dateModified: "2024-01-15",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://diplo-scanner.com/comment-lire-une-plaque-diplomatique-suisse",
  },
  image: "https://diplo-scanner.com/swiss-diplomatic-guide-og.png",
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Comment reconnaître une plaque diplomatique suisse ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Une plaque diplomatique suisse se reconnaît par son format STATUT-CANTON-SÉRIE•CODE (ex: CD BE 9 • 1), ses couleurs spécifiques (bleu pour organisations internationales, vert pour ambassades, blanc pour consulats) et la présence d'un point séparateur entre la série et le code pays.",
      },
    },
    {
      "@type": "Question",
      name: "Que signifient CD, CC et AT sur les plaques suisses ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CD = Corps Diplomatique (ambassades), CC = Corps Consulaire (consulats), AT = Personnel Administratif et Technique (personnel de soutien). Ces codes indiquent le statut diplomatique du véhicule.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi les plaques suisses ont-elles des couleurs différentes ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La Suisse utilise un système de couleurs unique : bleu pour les organisations internationales (ONU, OMS, CICR), vert pour les ambassades bilatérales, et blanc pour les consulats. Cela permet une identification immédiate du type de mission.",
      },
    },
    {
      "@type": "Question",
      name: "Que signifient BE et GE sur les plaques diplomatiques suisses ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BE = Berne (capitale fédérale, ambassades bilatérales), GE = Genève (siège européen de l'ONU, organisations internationales). Le canton indique la localisation géographique de la mission diplomatique.",
      },
    },
  ],
}

export default function SwissDiplomaticGuidePage() {
  return (
    <>
      {/* Données structurées JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-red-600 hover:text-red-700">
                Diplo Scanner
              </Link>
              <nav className="flex gap-2">
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
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comment lire une plaque diplomatique suisse ?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Maîtrisez l'art de <strong>déchiffrer les plaques diplomatiques suisses</strong> grâce à notre guide
              complet. Découvrez la signification de chaque élément et identifiez instantanément le pays d'origine et le
              statut diplomatique.
            </p>
          </section>

          {/* CTA Banner */}
          <section className="mb-12">
            <Card className="bg-gradient-to-r from-red-600 to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Identifiez une plaque diplomatique avec notre scanner</h2>
                <p className="text-lg mb-6 opacity-90">
                  Utilisez notre outil gratuit pour identifier instantanément les{" "}
                  <strong>plaques diplomatiques suisses</strong>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/swiss">
                    <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                      <Search className="mr-2 h-5 w-5" />
                      Scanner une plaque suisse
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/swiss/codes">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
                    >
                      Liste des codes pays
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Structure Overview */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Eye className="mr-3 h-6 w-6 text-red-600" />
                  Structure d'une plaque diplomatique suisse
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-red-600 text-white p-8 rounded-lg font-mono text-center text-4xl font-bold mb-6 shadow-lg">
                  CD BE 9 • 1
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
                    <div className="text-3xl font-bold text-blue-600 mb-2">CD</div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">Statut diplomatique</h3>
                    <p className="text-gray-700 text-sm">Type de mission diplomatique (Corps Diplomatique)</p>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg border-2 border-green-200">
                    <div className="text-3xl font-bold text-green-600 mb-2">BE</div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">Canton suisse</h3>
                    <p className="text-gray-700 text-sm">Canton de localisation (ici : Berne)</p>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-lg border-2 border-purple-200">
                    <div className="text-3xl font-bold text-purple-600 mb-2">9</div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">Numéro de série</h3>
                    <p className="text-gray-700 text-sm">Numéro de série du véhicule diplomatique</p>
                  </div>
                  <div className="text-center p-6 bg-orange-50 rounded-lg border-2 border-orange-200">
                    <div className="text-3xl font-bold text-orange-600 mb-2">1</div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">Code pays</h3>
                    <p className="text-gray-700 text-sm">Identifie le pays (ici : États-Unis)</p>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-semibold text-red-900 mb-3">Caractéristiques visuelles des plaques suisses</h3>
                  <ul className="space-y-2 text-red-800">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Couleurs variables</strong> : Bleu (organisations internationales), Vert (ambassades),
                      Blanc (consulats)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <strong>Point séparateur</strong> : Le "•" sépare toujours la série du code pays
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
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
                  Codes de statut diplomatique suisse
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
                        Personnel diplomatique des <strong>ambassades suisses</strong> : ambassadeurs, conseillers,
                        attachés diplomatiques, etc.
                      </p>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-lg px-3 py-1">
                          CC
                        </Badge>
                        <span className="text-sm text-gray-600">Consulaire</span>
                      </div>
                      <h3 className="font-semibold text-lg text-gray-900">Corps Consulaire</h3>
                      <p className="text-gray-700 text-sm">
                        Personnel consulaire : <strong>consuls suisses</strong>, vice-consuls, agents consulaires dans
                        les consulats.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-lg px-3 py-1">
                          AT
                        </Badge>
                        <span className="text-sm text-gray-600">Personnel technique</span>
                      </div>
                      <h3 className="font-semibold text-lg text-gray-900">Personnel Administratif et Technique</h3>
                      <p className="text-gray-700 text-sm">
                        Personnel de soutien, chauffeurs, secrétaires, personnel technique des missions diplomatiques.
                      </p>
                    </div>

                    <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-lg px-3 py-1">
                          OI
                        </Badge>
                        <span className="text-sm text-gray-600">Organisations</span>
                      </div>
                      <h3 className="font-semibold text-lg text-gray-900">Organisations Internationales</h3>
                      <p className="text-gray-700 text-sm">
                        Personnel des <strong>organisations internationales à Genève</strong> : ONU, OMS, CICR, etc.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">Hiérarchie diplomatique suisse</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-600">CD (Ambassadeur)</Badge>
                    <ArrowRight className="h-4 w-4 text-gray-400 mt-1" />
                    <Badge className="bg-green-600">CC (Consul)</Badge>
                    <ArrowRight className="h-4 w-4 text-gray-400 mt-1" />
                    <Badge className="bg-purple-600">AT (Personnel technique)</Badge>
                    <ArrowRight className="h-4 w-4 text-gray-400 mt-1" />
                    <Badge className="bg-amber-600">OI (Organisations)</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Cantons */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <MapPin className="mr-3 h-6 w-6 text-green-600" />
                  Cantons diplomatiques suisses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-green-600">BE</span>
                      <MapPin className="h-4 w-4 text-gray-400" />
                    </div>
                    <h3 className="font-semibold">Berne</h3>
                    <p className="text-sm text-gray-600">
                      Capitale fédérale - <strong>Ambassades bilatérales</strong>
                    </p>
                  </div>

                  <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-blue-600">GE</span>
                      <MapPin className="h-4 w-4 text-gray-400" />
                    </div>
                    <h3 className="font-semibold">Genève</h3>
                    <p className="text-sm text-gray-600">
                      <strong>Organisations internationales</strong> (ONU, OMS)
                    </p>
                  </div>

                  <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-purple-600">ZH</span>
                      <MapPin className="h-4 w-4 text-gray-400" />
                    </div>
                    <h3 className="font-semibold">Zurich</h3>
                    <p className="text-sm text-gray-600">
                      <strong>Consulats généraux</strong>
                    </p>
                  </div>

                  <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-red-600">BS</span>
                      <MapPin className="h-4 w-4 text-gray-400" />
                    </div>
                    <h3 className="font-semibold">Bâle-Ville</h3>
                    <p className="text-sm text-gray-600">Missions consulaires</p>
                  </div>

                  <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-orange-600">VD</span>
                      <MapPin className="h-4 w-4 text-gray-400" />
                    </div>
                    <h3 className="font-semibold">Vaud</h3>
                    <p className="text-sm text-gray-600">CIO et organisations sportives</p>
                  </div>

                  <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-teal-600">TI</span>
                      <MapPin className="h-4 w-4 text-gray-400" />
                    </div>
                    <h3 className="font-semibold">Tessin</h3>
                    <p className="text-sm text-gray-600">Consulats régionaux</p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-900 mb-3">💡 Astuce pour lire les cantons</h3>
                  <p className="text-green-800 mb-3">
                    Le <strong>canton indique la localisation géographique</strong> de la mission diplomatique. Genève
                    (GE) concentre les organisations internationales, tandis que Berne (BE) accueille les ambassades
                    bilatérales.
                  </p>
                  <Link href="/swiss/codes">
                    <Button variant="outline" size="sm" className="bg-transparent border-green-600 text-green-700">
                      Voir la liste complète des codes
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Color System */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Info className="mr-3 h-6 w-6 text-purple-600" />
                  Système de couleurs des plaques suisses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="font-semibold text-purple-900 mb-3">Système unique au monde</h3>
                  <p className="text-purple-800 mb-4">
                    La Suisse utilise un <strong>système de couleurs révolutionnaire</strong> qui permet d'identifier
                    instantanément le type de mission diplomatique, même à distance.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="w-full h-8 bg-blue-500 rounded mb-3"></div>
                      <h4 className="font-semibold text-gray-900 mb-2">🔵 Plaques BLEUES</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>
                          • <strong>Organisations internationales</strong>
                        </li>
                        <li>• ONU, OMS, CICR, OMC</li>
                        <li>• Principalement à Genève</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="w-full h-8 bg-green-500 rounded mb-3"></div>
                      <h4 className="font-semibold text-gray-900 mb-2">🟢 Plaques VERTES</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>
                          • <strong>Ambassades bilatérales</strong>
                        </li>
                        <li>• Corps diplomatique</li>
                        <li>• Principalement à Berne</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="w-full h-8 bg-gray-300 border-2 border-gray-400 rounded mb-3"></div>
                      <h4 className="font-semibold text-gray-900 mb-2">⚪ Plaques BLANCHES</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>
                          • <strong>Consulats et vice-consulats</strong>
                        </li>
                        <li>• Corps consulaire</li>
                        <li>• Toutes les villes suisses</li>
                      </ul>
                    </div>
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
                  Codes des pays les plus fréquents en Suisse
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
                    <p className="text-sm text-gray-600">
                      <strong>Mission permanente ONU</strong>
                    </p>
                  </div>

                  <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-teal-600">2</span>
                      <MapPin className="h-4 w-4 text-gray-400" />
                    </div>
                    <h3 className="font-semibold">Allemagne</h3>
                    <p className="text-sm text-gray-600">
                      <strong>Ambassade à Berne</strong>
                    </p>
                  </div>

                  <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-teal-600">3</span>
                      <MapPin className="h-4 w-4 text-gray-400" />
                    </div>
                    <h3 className="font-semibold">France</h3>
                    <p className="text-sm text-gray-600">
                      <strong>Ambassade de France</strong>
                    </p>
                  </div>

                  <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-teal-600">4</span>
                      <MapPin className="h-4 w-4 text-gray-400" />
                    </div>
                    <h3 className="font-semibold">Italie</h3>
                    <p className="text-sm text-gray-600">
                      <strong>Ambassade d'Italie</strong>
                    </p>
                  </div>

                  <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-teal-600">5</span>
                      <MapPin className="h-4 w-4 text-gray-400" />
                    </div>
                    <h3 className="font-semibold">Royaume-Uni</h3>
                    <p className="text-sm text-gray-600">
                      <strong>Ambassade britannique</strong>
                    </p>
                  </div>

                  <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-teal-600">15</span>
                      <MapPin className="h-4 w-4 text-gray-400" />
                    </div>
                    <h3 className="font-semibold">CICR</h3>
                    <p className="text-sm text-gray-600">
                      <strong>Comité International Croix-Rouge</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
                  <h3 className="font-semibold text-teal-900 mb-3">💡 Astuce pour les codes pays</h3>
                  <p className="text-teal-800 mb-3">
                    Les <strong>codes pays suisses</strong> sont attribués de manière chronologique et par type
                    d'organisation. Les organisations internationales ont souvent des codes spéciaux (15 = CICR, 150 =
                    OMS, etc.).
                  </p>
                  <Link href="/codes-diplomatiques-suisses">
                    <Button variant="outline" size="sm" className="bg-transparent border-teal-600 text-teal-700">
                      Voir la liste complète des codes
                    </Button>
                  </Link>
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
                  <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg">
                    <div className="text-center mb-4">
                      <div className="bg-blue-600 text-white p-4 rounded font-mono text-3xl font-bold inline-block shadow-lg">
                        CD GE 1 • 1
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3 text-gray-900">Déchiffrage complet :</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>
                          <strong>CD</strong> = Corps Diplomatique
                        </li>
                        <li>
                          <strong>GE</strong> = Genève
                        </li>
                        <li>
                          <strong>1</strong> = Premier véhicule (très haut rang)
                        </li>
                        <li>
                          <strong>1</strong> = États-Unis
                        </li>
                      </ul>
                      <p className="mt-3 text-sm text-gray-600 italic">
                        Cette <strong>plaque diplomatique suisse</strong> appartient très probablement au véhicule
                        officiel de l'Ambassadeur des États-Unis auprès de l'ONU à Genève.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-green-600 to-green-700 rounded-lg">
                    <div className="text-center mb-4">
                      <div className="bg-green-600 text-white p-4 rounded font-mono text-3xl font-bold inline-block shadow-lg">
                        CC ZH 25 • 4
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3 text-gray-900">Déchiffrage complet :</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>
                          <strong>CC</strong> = Corps Consulaire
                        </li>
                        <li>
                          <strong>ZH</strong> = Zurich
                        </li>
                        <li>
                          <strong>25</strong> = Véhicule n°25 du consulat
                        </li>
                        <li>
                          <strong>4</strong> = Italie
                        </li>
                      </ul>
                      <p className="mt-3 text-sm text-gray-600 italic">
                        Véhicule du <strong>Consulat général d'Italie à Zurich</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg">
                    <div className="text-center mb-4">
                      <div className="bg-purple-600 text-white p-4 rounded font-mono text-3xl font-bold inline-block shadow-lg">
                        AT GE 8 • 150
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-3 text-gray-900">Déchiffrage complet :</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>
                          <strong>AT</strong> = Personnel Administratif et Technique
                        </li>
                        <li>
                          <strong>GE</strong> = Genève
                        </li>
                        <li>
                          <strong>8</strong> = Véhicule n°8
                        </li>
                        <li>
                          <strong>150</strong> = Organisation Mondiale de la Santé (OMS)
                        </li>
                      </ul>
                      <p className="mt-3 text-sm text-gray-600 italic">
                        Véhicule du personnel technique de l'<strong>Organisation Mondiale de la Santé à Genève</strong>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Info className="mr-3 h-6 w-6 text-indigo-600" />
                  Questions fréquentes sur les plaques suisses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      Comment reconnaître une plaque diplomatique suisse ?
                    </h3>
                    <p className="text-gray-700">
                      Une <strong>plaque diplomatique suisse</strong> se reconnaît par son format
                      STATUT-CANTON-SÉRIE•CODE (ex: CD BE 9 • 1), ses couleurs spécifiques (bleu pour organisations
                      internationales, vert pour ambassades, blanc pour consulats) et la présence d'un point séparateur
                      entre la série et le code pays.
                    </p>
                  </div>

                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      Que signifient CD, CC et AT sur les plaques suisses ?
                    </h3>
                    <p className="text-gray-700">
                      <strong>CD = Corps Diplomatique</strong> (ambassades), <strong>CC = Corps Consulaire</strong>{" "}
                      (consulats), <strong>AT = Personnel Administratif et Technique</strong> (personnel de soutien).
                      Ces codes indiquent le statut diplomatique du véhicule.
                    </p>
                  </div>

                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      Pourquoi les plaques suisses ont-elles des couleurs différentes ?
                    </h3>
                    <p className="text-gray-700">
                      La Suisse utilise un <strong>système de couleurs unique</strong> : bleu pour les organisations
                      internationales (ONU, OMS, CICR), vert pour les ambassades bilatérales, et blanc pour les
                      consulats. Cela permet une identification immédiate du type de mission.
                    </p>
                  </div>

                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      Que signifient BE et GE sur les plaques diplomatiques suisses ?
                    </h3>
                    <p className="text-gray-700">
                      <strong>BE = Berne</strong> (capitale fédérale, ambassades bilatérales),{" "}
                      <strong>GE = Genève</strong> (siège européen de l'ONU, organisations internationales). Le canton
                      indique la localisation géographique de la mission diplomatique.
                    </p>
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
                    <h3 className="text-xl font-semibold text-green-700 flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5" />À retenir
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        La <strong>couleur révèle immédiatement</strong> le type de mission
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Le <strong>canton indique la localisation</strong> géographique
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Le point "•" sépare toujours série et code pays
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <strong>GE = Genève</strong> (organisations), <strong>BE = Berne</strong> (ambassades)
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Numéros bas (1-5) = <strong>hauts responsables</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-red-700 flex items-center">
                      <AlertTriangle className="mr-2 h-5 w-5" />
                      Attention
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Ne pas confondre avec les <strong>plaques françaises</strong>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Format différent : <strong>STATUT-CANTON-SÉRIE•CODE</strong>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Codes pays spéciaux pour organisations (150 = OMS)
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Respecter l'<strong>immunité diplomatique</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <section className="mb-12">
            <Card className="bg-gradient-to-r from-red-600 to-blue-700 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Prêt à identifier des plaques suisses ?</h2>
                <p className="text-xl mb-6 opacity-90">
                  Mettez en pratique vos nouvelles connaissances avec notre <strong>scanner automatique</strong>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/swiss">
                    <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                      <Search className="mr-2 h-5 w-5" />
                      Tester le scanner
                    </Button>
                  </Link>
                  <Link href="/swiss/guide">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
                    >
                      Guide complet suisse
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
                  <Link
                    href="/codes-diplomatiques-suisses"
                    className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="font-semibold text-red-600 mb-2">Codes pays suisses</h3>
                    <p className="text-sm text-gray-600">Liste complète des codes diplomatiques</p>
                  </Link>
                  <Link
                    href="/comment-lire-une-plaque-diplomatique-francaise"
                    className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="font-semibold text-green-600 mb-2">Système français</h3>
                    <p className="text-sm text-gray-600">Découvrez les plaques diplomatiques françaises</p>
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
              © 2024 Diplo Scanner. Guide gratuit pour identifier les <strong>plaques diplomatiques suisses</strong>.
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
    </>
  )
}
