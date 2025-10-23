import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "UCT Azur - Services de Nettoyage Professionnel Côte d'Azur",
  description:
    "Votre partenaire propreté sur la Côte d'Azur. Services de nettoyage pour bureaux, commerces, hôtels et copropriétés. Devis gratuit et intervention rapide.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  keywords: [
    "nettoyage professionnel",
    "Côte d'Azur",
    "Nice",
    "Cannes",
    "Monaco",
    "nettoyage bureaux",
    "nettoyage commerces",
    "nettoyage hôtels",
    "copropriétés",
    "devis gratuit",
    "UCT Azur",
  ],
  authors: [{ name: "UCT Azur" }],
  creator: "UCT Azur",
  publisher: "UCT Azur",
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
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://uctazur.com",
    siteName: "UCT Azur",
    title: "UCT Azur - Services de Nettoyage Professionnel Côte d'Azur",
    description:
      "Votre partenaire propreté sur la Côte d'Azur. Services de nettoyage pour bureaux, commerces, hôtels et copropriétés. Devis gratuit et intervention rapide.",
    images: [
      {
        url: "/images/uct-logo-complete.png",
        width: 1200,
        height: 630,
        alt: "UCT - Unlimited Cleaning Tech - Services de Nettoyage Professionnel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UCT Azur - Services de Nettoyage Professionnel Côte d'Azur",
    description:
      "Votre partenaire propreté sur la Côte d'Azur. Services de nettoyage pour bureaux, commerces, hôtels et copropriétés.",
    images: ["/images/uct-logo-complete.png"],
    creator: "@uctazur",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://uctazur.com",
  },
  category: "Services de nettoyage",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://uct-azur.fr/#localbusiness",
        name: "UCT Azur",
        url: "https://uct-azur.fr/",
        image: "https://uct-azur.fr/images/logo.png",
        telephone: "+33769574674",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+33769574674",
          email: "contact@uct-azur.fr",
          contactType: "Service client",
          areaServed: "FR",
          availableLanguage: ["fr"],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "28 Avenue de la Riviera",
          addressLocality: "Menton",
          addressRegion: "Alpes-Maritimes",
          postalCode: "06500",
          addressCountry: "FR",
        },
        description:
          "UCT Azur est une entreprise spécialisée dans le nettoyage professionnel et particulier à Menton. Nous proposons des prestations sur mesure : bureaux, commerces, immeubles, maisons, cabinets médicaux, fin de chantier et nettoyage spécifique.",
        priceRange: "Sur devis",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 43.7766613,
          longitude: 7.4906522,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "08:00",
            closes: "18:00",
          },
        ],
        sameAs: [
          "https://www.linkedin.com/company/uct-azur/",
          "https://www.instagram.com/uct_azur/",
          "https://www.google.com/maps?cid=2446253044107690229",
        ],
        areaServed: [
          { "@type": "City", name: "Menton, France" },
          { "@type": "City", name: "Roquebrune-Cap-Martin, France" },
          { "@type": "City", name: "Monaco, France" },
          { "@type": "City", name: "Beaulieu-sur-Mer, France" },
          { "@type": "City", name: "Cap-d'Ail, France" },
          { "@type": "City", name: "Vallauris, France" },
          { "@type": "City", name: "Antibes, France" },
          { "@type": "City", name: "Cagnes-sur-Mer, France" },
          { "@type": "City", name: "Cannes, France" },
          { "@type": "City", name: "Nice, France" },
          { "@type": "City", name: "Saint-Raphaël, France" },
          { "@type": "City", name: "Villeneuve-Loubet, France" },
          { "@type": "City", name: "Mandelieu-la-Napoule, France" },
          { "@type": "City", name: "Villefranche-sur-Mer, France" },
        ],
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Nettoyage de bureaux",
              description: "Entretien régulier et nettoyage complet de bureaux à Menton et dans les Alpes-Maritimes.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "Sur devis",
              priceCurrency: "EUR",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Nettoyage d'immeubles et copropriétés",
              description: "Services de nettoyage et d'entretien des parties communes pour syndics et résidences.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "Sur devis",
              priceCurrency: "EUR",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Nettoyage de fin de chantier",
              description: "Remise en état complète après travaux pour professionnels et particuliers.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "Sur devis",
              priceCurrency: "EUR",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Nettoyage de cabinets médicaux et dentaires",
              description:
                "Entretien professionnel et désinfection complète d'espaces médicaux selon les normes d'hygiène.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "Sur devis",
              priceCurrency: "EUR",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Nettoyage de maisons et villas",
              description: "Entretien complet de résidences principales et secondaires à Menton et alentours.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "Sur devis",
              priceCurrency: "EUR",
            },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://uct-azur.fr/#website",
        url: "https://uct-azur.fr/",
        name: "UCT Azur",
        publisher: { "@id": "https://uct-azur.fr/#localbusiness" },
        inLanguage: "fr-FR",
      },
    ],
  }

  return (
    <html lang="fr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
