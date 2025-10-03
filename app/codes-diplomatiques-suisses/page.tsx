import type { Metadata } from "next"
import SwissCodesPageClient from "./SwissCodesPageClient"

export const metadata: Metadata = {
  title: "Codes diplomatiques suisses - Numéro pays plaque diplomatique | Liste complète 2024",
  description:
    "Liste complète des codes diplomatiques suisses : numéro pays plaque diplomatique, codes organisations internationales. Base de données exhaustive avec moteur de recherche pour identifier les plaques CD suisses.",
  keywords: [
    "codes diplomatiques suisses",
    "numéro pays plaque diplomatique suisse",
    "plaque diplomatique liste pays suisse",
    "code pays plaque diplomatique suisse",
    "plaque CD suisse numéro",
    "codes plaque diplomatique genève",
    "numérotation plaque diplomatique berne",
    "plaque corps diplomatique suisse",
    "identification pays plaque suisse",
    "code numérique plaque diplomatique suisse",
    "liste codes suisse",
    "plaques diplomatiques suisse",
    "organisations internationales genève",
    "ambassades berne",
    "consulats suisse",
    "codes pays suisse",
    "diplomatie suisse",
    "plaque diplomatique chiffres suisse",
    "système diplomatique suisse codes",
    "numéros plaques diplomatiques suisse",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/codes-diplomatiques-suisses",
  },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    url: "https://diplo-scanner.com/codes-diplomatiques-suisses",
    siteName: "Diplo Scanner",
    title: "Codes diplomatiques suisses - Numéro pays plaque diplomatique",
    description:
      "Base de données complète des codes diplomatiques suisses : numéro pays plaque diplomatique, organisations internationales, ambassades et consulats avec moteur de recherche.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=Codes+diplomatiques+suisses",
        width: 1200,
        height: 630,
        alt: "Liste exhaustive des codes diplomatiques suisses",
      },
    ],
  },
}

export default function SwissCodesPage() {
  return <SwissCodesPageClient />
}
