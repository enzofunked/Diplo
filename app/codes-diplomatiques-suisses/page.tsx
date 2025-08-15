import type { Metadata } from "next"
import SwissCodesPageClient from "./SwissCodesPageClient"

export const metadata: Metadata = {
  title: "Codes diplomatiques suisses - Liste exhaustive 2024 | Diplo Scanner",
  description:
    "Liste complète de tous les codes diplomatiques suisses : organisations internationales, ambassades et consulats. Base de données exhaustive avec moteur de recherche.",
  keywords: [
    "codes diplomatiques suisses",
    "liste codes suisse",
    "plaques diplomatiques suisse",
    "organisations internationales genève",
    "ambassades berne",
    "consulats suisse",
    "codes pays suisse",
    "diplomatie suisse",
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
    title: "Codes diplomatiques suisses - Liste exhaustive",
    description:
      "Base de données complète des codes diplomatiques suisses : organisations internationales, ambassades et consulats.",
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
