import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { OfflineIndicator } from "../components/OfflineIndicator"
import { CookieConsent } from "../components/CookieConsent"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Diplo Scanner - Scanner de Plaques Diplomatiques France & Suisse",
    template: "%s | Diplo Scanner",
  },
  description:
    "Scanner gratuit de plaques diplomatiques françaises et suisses. Identifiez instantanément les pays et organisations avec notre outil en ligne.",
  keywords: [
    "plaque diplomatique",
    "scanner plaque",
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
    url: "https://diplo-scanner.vercel.app",
    siteName: "Diplo Scanner",
    title: "Diplo Scanner - Scanner de Plaques Diplomatiques",
    description:
      "Scanner gratuit de plaques diplomatiques françaises et suisses. Identifiez instantanément les pays et organisations.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Diplo Scanner - Scanner de Plaques Diplomatiques",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diplo Scanner - Scanner de Plaques Diplomatiques",
    description:
      "Scanner gratuit de plaques diplomatiques françaises et suisses. Identifiez instantanément les pays et organisations.",
    images: ["/twitter-image.png"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/app-icon-256-new.png",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://diplo-scanner.vercel.app",
  },
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
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
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
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
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
