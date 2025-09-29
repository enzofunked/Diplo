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
  return (
    <html lang="fr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
