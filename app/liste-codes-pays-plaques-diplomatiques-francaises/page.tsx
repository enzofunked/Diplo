import type { Metadata } from "next"
import FrenchDiplomaticCodesListPageClient from "./FrenchDiplomaticCodesListPageClient"

export const metadata: Metadata = {
  title: "Liste des codes pays sur les plaques diplomatiques françaises | Guide complet 2024",
  description:
    "Liste complète des codes pays utilisés sur les plaques diplomatiques françaises : système 1-199 et 200+, équivalences, préfixes E/U/S, suffixes Z/X.",
  keywords: [
    "codes pays plaque diplomatique française",
    "liste codes diplomatiques France",
    "équivalence codes diplomatiques",
    "préfixes E U S diplomatique",
    "suffixes Z X diplomatique",
    "système 1-199 200+ diplomatique",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/liste-codes-pays-plaques-diplomatiques-francaises",
  },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    url: "https://diplo-scanner.com/liste-codes-pays-plaques-diplomatiques-francaises",
    siteName: "Diplo Scanner",
    title: "Liste des codes pays sur les plaques diplomatiques françaises",
    description:
      "Guide complet des codes pays diplomatiques français : système double, équivalences, préfixes et suffixes.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=Liste+codes+pays+diplomatiques+français",
        width: 1200,
        height: 630,
        alt: "Liste complète des codes pays diplomatiques français",
      },
    ],
  },
}

export default function FrenchDiplomaticCodesListPage() {
  return <FrenchDiplomaticCodesListPageClient />
}
