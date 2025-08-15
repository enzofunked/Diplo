import type { Metadata } from "next"
import FavoritesPageClient from "./FavoritesPageClient"

export const metadata: Metadata = {
  title: "Favoris - Diplo Scanner",
  description: "Vos plaques diplomatiques favorites sauvegardées",
}

export default function FavoritesPage() {
  return <FavoritesPageClient />
}
