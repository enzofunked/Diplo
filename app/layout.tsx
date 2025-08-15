import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CookieConsent } from "@/components/CookieConsent"
import { OfflineIndicator } from "@/components/OfflineIndicator"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Diplo Scanner - Décodeur de plaques diplomatiques",
  description:
    "Scannez et décodez instantanément les plaques d'immatriculation diplomatiques françaises et suisses. Identifiez les pays et organisations internationales.",
  keywords: [
    "plaque diplomatique",
    "scanner",
    "décodeur",
    "France",
    "Suisse",
    "diplomatie",
    "immatriculation",
    "pays",
    "ambassade",
    "consulat",
  ],
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

  // Open Graph optimisé
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["fr_CH", "de_CH", "it_CH"],
    url: "https://diplo-scanner.vercel.app",
    siteName: "Diplo Scanner",
    title: "Diplo Scanner - Décodeur de plaques diplomatiques",
    description: "Scannez et décodez instantanément les plaques d'immatriculation diplomatiques françaises et suisses.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Diplo Scanner - Identifier les plaques diplomatiques",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "Application Diplo Scanner",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter Cards optimisé
  twitter: {
    card: "summary_large_image",
    site: "@DiploScanner",
    creator: "@DiploScanner",
    title: "Diplo Scanner - Décodeur de plaques diplomatiques",
    description: "Scannez et décodez instantanément les plaques d'immatriculation diplomatiques françaises et suisses.",
    images: ["/twitter-image.jpg"],
  },

  // Données structurées
  other: {
    "google-site-verification": "votre-code-verification-google",
    "msvalidate.01": "votre-code-verification-bing",
    "yandex-verification": "votre-code-verification-yandex",
  },

  // PWA et mobile
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/app-icon-256-new.png", sizes: "256x256", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/app-icon-256-new.png", sizes: "180x180", type: "image/png" },
      { url: "/app-icon-256-new.png", sizes: "152x152", type: "image/png" },
      { url: "/app-icon-256-new.png", sizes: "144x144", type: "image/png" },
      { url: "/app-icon-256-new.png", sizes: "120x120", type: "image/png" },
      { url: "/app-icon-256-new.png", sizes: "114x114", type: "image/png" },
      { url: "/app-icon-256-new.png", sizes: "76x76", type: "image/png" },
      { url: "/app-icon-256-new.png", sizes: "72x72", type: "image/png" },
      { url: "/app-icon-256-new.png", sizes: "60x60", type: "image/png" },
      { url: "/app-icon-256-new.png", sizes: "57x57", type: "image/png" },
    ],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#1f5f5b" }],
  },

  // Géolocalisation
  category: "Utility",
  classification: "Diplomatic Plate Recognition",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1f5f5b" },
    { media: "(prefers-color-scheme: dark)", color: "#1e40af" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" prefix="og: http://ogp.me/ns#">
      <head>
        {/* Favicon explicite */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/app-icon-256-new.png" type="image/png" sizes="256x256" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/app-icon-256-new.png" />

        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
          navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
              console.log('✅ SW registered: ', registration);
            })
            .catch(function(registrationError) {
              console.log('❌ SW registration failed: ', registrationError);
            });
        });
      }
    `,
          }}
        />

        {/* Données structurées JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Diplo Scanner",
              alternateName: "Identifier Plaque Diplomatique",
              description:
                "Application gratuite pour identifier les plaques d'immatriculation diplomatiques françaises et suisses par saisie manuelle",
              url: "https://diplo-scanner.com",
              applicationCategory: "UtilityApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "EUR",
              },
              featureList: [
                "Identification plaque diplomatique française",
                "Reconnaissance plaque diplomatique suisse",
                "Base de données codes ambassades",
                "Saisie manuelle intuitive",
                "Historique des recherches",
                "Information détaillée pays et organisations",
              ],
              screenshot: "https://diplo-scanner.com/screenshot.jpg",
              softwareVersion: "3.2.0",
              datePublished: "2024-01-01",
              dateModified: "2024-12-08",
              author: {
                "@type": "Organization",
                name: "Diplo Scanner Team",
              },
              publisher: {
                "@type": "Organization",
                name: "Diplo Scanner",
                logo: {
                  "@type": "ImageObject",
                  url: "https://diplo-scanner.com/logo.png",
                },
              },
              inLanguage: "fr-FR",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://diplo-scanner.com/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Données structurées pour FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Comment identifier une plaque diplomatique française ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Les plaques diplomatiques françaises sont vertes avec des caractères orange (CD, CMD) ou blancs (C, CC). Le format est : CODE_PAYS + STATUT + NUMÉRO. Par exemple : '5 CD 1234' = Allemagne, Corps Diplomatique. Saisissez le numéro dans l'application pour obtenir les détails.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Que signifie CD sur une plaque diplomatique ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "CD signifie 'Corps Diplomatique'. C'est le statut des diplomates et membres d'ambassade. CMD = Chef de Mission Diplomatique (Ambassadeur), C = Corps Consulaire, K = Personnel technique.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Comment reconnaître une plaque diplomatique suisse ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Les plaques suisses ont le format : STATUT + CANTON + SÉRIE • CODE. Par exemple : 'CD BE 9 • 1' = Corps Diplomatique, Berne, États-Unis. Les couleurs : bleu (organisations internationales), vert (ambassades), blanc (consulats). Utilisez la saisie manuelle pour identifier.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Métadonnées techniques */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Diplo Scanner" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#1f5f5b" />
        <meta name="msapplication-TileImage" content="/app-icon-256-new.png" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="format-detection" content="telephone=no" />

        {/* Préconnexions pour la performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://diplo-scanner.com" />

        {/* Hreflang pour le multilinguisme */}
        <link rel="alternate" hrefLang="fr" href="https://diplo-scanner.com" />
        <link rel="alternate" hrefLang="fr-FR" href="https://diplo-scanner.com" />
        <link rel="alternate" hrefLang="fr-CH" href="https://diplo-scanner.com" />
        <link rel="alternate" hrefLang="x-default" href="https://diplo-scanner.com" />

        {/* Google AdSense - Chargé seulement si les cookies marketing sont acceptés */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5475322044218525"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        {children}
        <CookieConsent />
        <OfflineIndicator />
      </body>
    </html>
  )
}
