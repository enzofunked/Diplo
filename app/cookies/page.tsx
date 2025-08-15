import type { Metadata } from "next"
import CookiesPageClient from "./CookiesPageClient"

export const metadata: Metadata = {
  title: "Politique des Cookies - Diplo Scanner",
  description:
    "Politique de confidentialité et gestion des cookies pour Diplo Scanner. Informations sur les données collectées et vos droits.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function CookiesPage() {
  return <CookiesPageClient />
}
