import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Devis Nettoyage Gratuit | UCT Azur - Estimation en Ligne Menton, Nice, Cannes",
  description:
    "Obtenez votre devis nettoyage UCT Azur gratuit en 5 minutes. Estimation en ligne ou avec visite pour bureaux, commerces, copropriétés à Menton, Nice, Cannes. Prix transparents, entreprise de nettoyage professionnelle Côte d'Azur.",
  keywords: [
    "UCT Azur devis",
    "UCT Azur estimation",
    "UCT Azur prix",
    "devis nettoyage menton",
    "estimation nettoyage menton",
    "estimation nettoyage",
    "cout nettoyage",
    "prix entreprise nettoyage menton",
    "uct azur estimation en ligne",
    "devis nettoyage gratuit",
    "estimation nettoyage en ligne",
    "prix nettoyage bureaux",
    "devis nettoyage commerces",
    "tarif nettoyage copropriété",
    "entreprise nettoyage menton",
    "nettoyage professionnel nice",
    "devis nettoyage cannes",
    "estimation rapide nettoyage",
  ],
  openGraph: {
    title: "Devis Nettoyage Gratuit | UCT Azur - Estimation en Ligne",
    description:
      "Obtenez votre devis UCT Azur en 5 minutes. Estimation automatisée ou avec visite pour tous vos besoins de nettoyage professionnel à Menton, Nice, Cannes.",
    url: "https://www.uct-azur.fr/devis",
    siteName: "UCT Azur",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.uct-azur.fr/images/uct-azur-logo.png",
        width: 1200,
        height: 630,
        alt: "UCT Azur - Devis Nettoyage Professionnel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devis Nettoyage Gratuit | UCT Azur",
    description:
      "Estimation en ligne en 5 minutes ou devis détaillé avec visite. Prix transparents pour Menton, Nice, Cannes.",
  },
  alternates: {
    canonical: "https://www.uct-azur.fr/devis",
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

export default function DevisLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Devis Nettoyage UCT Azur",
            description:
              "Service de devis et estimation en ligne pour nettoyage professionnel de bureaux, commerces, copropriétés à Menton, Nice, Cannes",
            provider: {
              "@type": "LocalBusiness",
              name: "UCT Azur",
              image: "https://www.uct-azur.fr/images/uct-azur-logo.png",
              telephone: "+33769574674",
              email: "contact@uct-azur.fr",
              address: {
                "@type": "PostalAddress",
                streetAddress: "06500",
                addressLocality: "Menton",
                addressRegion: "Alpes-Maritimes",
                postalCode: "06500",
                addressCountry: "FR",
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Menton",
                },
                {
                  "@type": "City",
                  name: "Nice",
                },
                {
                  "@type": "City",
                  name: "Cannes",
                },
                {
                  "@type": "City",
                  name: "Cagnes-sur-Mer",
                },
              ],
            },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "EUR",
              description: "Devis gratuit en ligne ou avec visite",
              availability: "https://schema.org/InStock",
            },
            serviceType: [
              "Devis nettoyage",
              "Estimation nettoyage",
              "Devis nettoyage bureaux",
              "Devis nettoyage commerces",
              "Devis nettoyage copropriétés",
            ],
            url: "https://www.uct-azur.fr/devis",
          }),
        }}
      />
      {children}
    </>
  )
}
