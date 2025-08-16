"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cookie, X } from "lucide-react"
import Link from "next/link"

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("diplo-scanner-cookie-consent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("diplo-scanner-cookie-consent", "accepted")
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem("diplo-scanner-cookie-consent", "declined")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="mx-auto max-w-4xl shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Cookie className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-sm mb-1">Cookies et données locales</h3>
              <p className="text-xs text-muted-foreground mb-3">
                Nous utilisons le stockage local pour sauvegarder votre historique et vos favoris. Aucune donnée n'est
                envoyée à des serveurs externes.{" "}
                <Link href="/cookies" className="underline hover:no-underline">
                  En savoir plus
                </Link>
              </p>
              <div className="flex gap-2">
                <Button onClick={acceptCookies} size="sm" className="text-xs">
                  Accepter
                </Button>
                <Button onClick={declineCookies} variant="outline" size="sm" className="text-xs bg-transparent">
                  Refuser
                </Button>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={declineCookies} className="p-1">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
