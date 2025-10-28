import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentions Légales | UCT Azur - Entreprise de Nettoyage Menton, Nice, Cannes",
  description:
    "Mentions légales de UCT Azur (UCTA Unlimited Cleaning Tech Azur), entreprise de nettoyage professionnel à Menton. Informations légales, RGPD, cookies et propriété intellectuelle. SIREN 933 186 470.",
  keywords: [
    "mentions légales UCT Azur",
    "UCT Azur Menton",
    "entreprise nettoyage Menton",
    "nettoyage professionnel Menton",
    "UCTA mentions légales",
    "RGPD nettoyage",
    "entreprise nettoyage Nice",
    "nettoyage Cannes",
    "société nettoyage Côte d'Azur",
  ],
  openGraph: {
    title: "Mentions Légales | UCT Azur - Entreprise de Nettoyage Menton",
    description:
      "Informations légales de UCT Azur, entreprise de nettoyage professionnel à Menton, Nice et Cannes. SIREN 933 186 470.",
    url: "https://uct-azur.fr/mentions-legales",
    siteName: "UCT Azur",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function MentionsLegalesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
