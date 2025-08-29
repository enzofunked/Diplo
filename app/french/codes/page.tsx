import FrenchCodesPageClient from "./FrenchCodesPageClient"

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function FrenchCodesPage() {
  return <FrenchCodesPageClient />
}
