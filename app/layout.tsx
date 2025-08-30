import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { OfflineIndicator } from "../components/OfflineIndicator"
import CookieConsent from "../components/CookieConsent"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL("https://diplo-scanner.com"),
  title: {
    default: "Diplo Scanner – Scanner Plaques Diplomatiques France & Suisse",
    template: "%s | Diplo Scanner",
  },
  description:
    "Scanner gratuit de plaques diplomatiques françaises et suisses. Identifiez instantanément les pays et organisations avec notre outil en ligne.",
  keywords: [
    "plaque diplomatique",
    "plaque diplomatique française",
    "plaque diplomatique suisse",
    "plaque diplomatique france",
    "scanner plaque diplomatique",
    "scan plaque diplomatique",
    "plaque consulaire",
    "France",
    "Suisse",
    "diplomatique",
    "consulat",
    "ambassade",
    "CD",
    "CC",
    "AT",
    "identification",
    "pays",
    "code pays",
  ],
  authors: [{ name: "Diplo Scanner" }],
  creator: "Diplo Scanner",
  publisher: "Diplo Scanner",
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
    url: "https://diplo-scanner.com",
    siteName: "Diplo Scanner",
    title: "Diplo Scanner - Scanner de Plaques Diplomatiques",
    description:
      "Scanner gratuit de plaques diplomatiques françaises et suisses. Identifiez instantanément les pays et organisations.",
    images: [
      {
        url: "https://diplo-scanner.com/app-icon-256-new.png",
        width: 256,
        height: 256,
        alt: "Diplo Scanner - Scanner de Plaques Diplomatiques",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diplo Scanner - Scanner de Plaques Diplomatiques",
    description:
      "Scanner gratuit de plaques diplomatiques françaises et suisses. Identifiez instantanément les pays et organisations.",
    images: ["https://diplo-scanner.com/app-icon-256-new.png"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" }],
    apple: [{ url: "/app-icon-256-new.png", sizes: "256x256", type: "image/png" }],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://diplo-scanner.com",
  },
    generator: 'v0.app'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Diplo Scanner",
  description: "Scanner gratuit de plaques diplomatiques françaises et suisses",
  url: "https://diplo-scanner.com",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  author: {
    "@type": "Organization",
    name: "Diplo Scanner",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        {/* Preconnect pour optimiser les performances */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Configuration Favicon optimisée - URLs absolues */}
        <link rel="icon" type="image/x-icon" href="https://diplo-scanner.com/favicon.ico" sizes="48x48" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://diplo-scanner.com/favicons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://diplo-scanner.com/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="https://diplo-scanner.com/favicons/favicon-96x96.png" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="256x256" href="https://diplo-scanner.com/app-icon-256-new.png" />

        {/* Shortcut icon */}
        <link rel="shortcut icon" type="image/x-icon" href="https://diplo-scanner.com/favicon.ico" />

        {/* Microsoft tile configuration */}
        <meta name="msapplication-TileColor" content="#0f766e" />
        <meta name="msapplication-TileImage" content="https://diplo-scanner.com/app-icon-256-new.png" />
        <meta name="theme-color" content="#0f766e" />

        {/* PWA meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Diplo Scanner" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MM5L3DGG');
            `,
          }}
        />

        {/* Version Check Script - Only in development */}
        {process.env.NODE_ENV === "development" && <Script src="/version-check.js" strategy="afterInteractive" />}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MM5L3DGG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <OfflineIndicator />
        {children}
        <CookieConsent />

        {/* Service Worker Registration */}
        <Script
          id="sw-registration"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
