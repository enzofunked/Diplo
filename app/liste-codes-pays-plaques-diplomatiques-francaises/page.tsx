import type { Metadata } from "next"
import FrenchDiplomaticCodesListPageClient from "./FrenchDiplomaticCodesListPageClient"

export const metadata: Metadata = {
  title: "Plaque diplomatique numéro pays : Liste complète des codes 2024 | Diplo Scanner",
  description:
    "Plaque diplomatique liste pays : tous les numéros et codes utilisés sur les plaques diplomatiques françaises. Système 1-199 et 200+, équivalences, préfixes E/U/S, suffixes Z/X.",
  keywords: [
    "plaque diplomatique numéro pays",
    "plaque diplomatique liste pays",
    "codes pays plaque diplomatique française",
    "numéro pays plaque diplomatique",
    "liste codes diplomatiques France",
    "plaque diplomatique code pays",
    "équivalence codes diplomatiques",
    "préfixes E U S diplomatique",
    "suffixes Z X diplomatique",
    "système 1-199 200+ diplomatique",
    "plaque diplomatique française numérotation",
    "code numérique plaque diplomatique",
    "identification pays plaque diplomatique",
    "plaque CD numéro pays",
    "plaque corps diplomatique codes",
    "plaque diplomatique chiffres pays",
    "numérotation internationale plaque diplomatique",
    "code pays ambassade France",
    "plaque diplomatique système français",
    "liste numéros plaques diplomatiques",
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
    title: "Plaque diplomatique numéro pays : Liste complète des codes 2024",
    description:
      "Plaque diplomatique liste pays : Guide complet des numéros et codes pays diplomatiques français avec système double, équivalences et préfixes.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=Plaque+diplomatique+numéro+pays+liste+codes",
        width: 1200,
        height: 630,
        alt: "Plaque diplomatique numéro pays - Liste complète des codes diplomatiques français",
      },
    ],
  },
}

export default function FrenchDiplomaticCodesListPage() {
  return <FrenchDiplomaticCodesListPageClient />
}
