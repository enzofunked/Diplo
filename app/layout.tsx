import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import CookieConsent from "../components/CookieConsent"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Diplo Scanner - Scanner de plaques diplomatiques",
  description: "Scanner et identifier les plaques d'immatriculation diplomatiques françaises et suisses",
  keywords: "plaque diplomatique, scanner, France, Suisse, immatriculation, ambassade, consulat",
  authors: [{ name: "Diplo Scanner" }],
  creator: "Diplo Scanner",
  publisher: "Diplo Scanner",
  robots: "index, follow",
  openGraph: {
    title: "Diplo Scanner - Scanner de plaques diplomatiques",
    description: "Scanner et identifier les plaques d'immatriculation diplomatiques françaises et suisses",
    type: "website",
    locale: "fr_FR",
    siteName: "Diplo Scanner",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diplo Scanner - Scanner de plaques diplomatiques",
    description: "Scanner et identifier les plaques d'immatriculation diplomatiques françaises et suisses",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  themeColor: "#2563eb",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/app-icon-256-new.png", sizes: "256x256", type: "image/png" }],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Service Worker registration
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
      </head>
      <body className={inter.className}>
        {children}
        <CookieConsent />
        <Toaster />
      </body>
    </html>
  )
}
