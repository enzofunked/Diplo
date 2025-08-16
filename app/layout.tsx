import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import CookieConsent from "../components/CookieConsent"
import OfflineIndicator from "../components/OfflineIndicator"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "🔍 Diplo Scanner - Scanner de Plaques Diplomatiques France & Suisse",
  description:
    "Scanner gratuit de plaques diplomatiques françaises et suisses. Identifiez instantanément les véhicules diplomatiques, consulaires et d'ambassade avec leurs privilèges et immunités.",
  keywords: "plaque diplomatique, scanner, France, Suisse, CD, CMD, consulat, ambassade, immunité diplomatique",
  authors: [{ name: "Diplo Scanner" }],
  creator: "Diplo Scanner",
  publisher: "Diplo Scanner",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://diplo-scanner.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "🔍 Diplo Scanner - Scanner de Plaques Diplomatiques",
    description:
      "Scanner gratuit de plaques diplomatiques françaises et suisses. Identifiez instantanément les véhicules diplomatiques avec leurs privilèges.",
    url: "https://diplo-scanner.com",
    siteName: "🔍 Diplo Scanner",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/og-diplo-scanner.png",
        width: 1200,
        height: 630,
        alt: "🔍 Diplo Scanner - Scanner de Plaques Diplomatiques",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "🔍 Diplo Scanner - Scanner de Plaques Diplomatiques",
    description: "Scanner gratuit de plaques diplomatiques françaises et suisses",
    images: ["/images/og-diplo-scanner.png"],
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
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/app-icon-256-new.png", sizes: "256x256", type: "image/png" }],
    other: [
      { rel: "icon", url: "/favicon.ico" },
      { rel: "icon", url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}
        <CookieConsent />
        <OfflineIndicator />
      </body>
    </html>
  )
}
