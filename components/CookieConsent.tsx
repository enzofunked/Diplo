"use client"

import { useState, useEffect } from "react"
import { X, Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="border-2 border-blue-200 bg-white shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Cookie className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-sm mb-2">Cookies et confidentialité</h3>
              <p className="text-xs text-gray-600 mb-3">
                Nous utilisons des cookies pour améliorer votre expérience et analyser l'utilisation de notre site.
              </p>
              <div className="flex gap-2">
                <Button
                  onClick={acceptCookies}
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-xs px-3 py-1 h-7"
                >
                  Accepter
                </Button>
                <Button
                  onClick={declineCookies}
                  variant="outline"
                  size="sm"
                  className="text-xs px-3 py-1 h-7 bg-transparent"
                >
                  Refuser
                </Button>
              </div>
            </div>
            <Button onClick={declineCookies} variant="ghost" size="sm" className="p-1 h-6 w-6 hover:bg-gray-100">
              <X className="w-3 h-3" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
