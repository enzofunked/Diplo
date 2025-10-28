"use client"

import { useState, useEffect } from "react"
import { Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-border shadow-lg animate-in slide-in-from-bottom duration-300">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
            <div className="space-y-2">
              <h3 className="font-semibold text-base">Gestion des cookies</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nous utilisons des cookies pour améliorer votre expérience sur notre site, analyser le trafic et
                personnaliser le contenu. En cliquant sur "Accepter", vous consentez à l'utilisation de tous les
                cookies. Vous pouvez également choisir de les refuser.{" "}
                <Link href="/politique-confidentialite" className="text-teal-600 hover:underline">
                  En savoir plus
                </Link>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Button
              variant="outline"
              onClick={rejectCookies}
              className="flex-1 md:flex-none border-border hover:bg-muted bg-transparent"
            >
              Refuser
            </Button>
            <Button onClick={acceptCookies} className="flex-1 md:flex-none bg-teal-600 hover:bg-teal-700">
              Accepter
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
