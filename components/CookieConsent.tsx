"use client"

import { useState, useEffect } from "react"
import { X, Cookie, Shield, BarChart3, Target } from "lucide-react"

// Déclaration TypeScript pour gtag
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
    adsbygoogle: any[]
  }
}

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedPreferences = localStorage.getItem("cookiePreferences")
      if (!savedPreferences) {
        setShowBanner(true)
      } else {
        const parsed = JSON.parse(savedPreferences)
        setPreferences(parsed)

        // Charger les scripts si l'utilisateur a déjà accepté
        if (parsed.analytics) {
          loadGTM()
          loadGA()
        }
        if (parsed.marketing) {
          loadAdSense()
        }
      }
    }
  }, [])

  const loadGTM = () => {
    if (typeof window !== "undefined" && !window.dataLayer) {
      // Initialiser dataLayer
      window.dataLayer = window.dataLayer || []

      // Vérifier si le script GTM existe déjà
      if (!document.querySelector('script[src*="googletagmanager.com/gtm.js"]')) {
        // Charger le script GTM
        const script = document.createElement("script")
        script.async = true
        script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-MM5L3DGG"
        document.head.appendChild(script)

        // Ajouter le noscript pour GTM
        const noscript = document.createElement("noscript")
        const iframe = document.createElement("iframe")
        iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-MM5L3DGG"
        iframe.height = "0"
        iframe.width = "0"
        iframe.style.display = "none"
        iframe.style.visibility = "hidden"
        noscript.appendChild(iframe)
        document.body.insertBefore(noscript, document.body.firstChild)

        // Initialiser GTM
        window.dataLayer.push({
          "gtm.start": new Date().getTime(),
          event: "gtm.js",
        })
      }
    }
  }

  const loadGA = () => {
    if (typeof window !== "undefined") {
      // Vérifier si le script GA existe déjà
      if (!document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
        // Charger le script GA
        const script = document.createElement("script")
        script.async = true
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-VSTJ31JM4J"
        document.head.appendChild(script)

        // Initialiser GA
        script.onload = () => {
          window.dataLayer = window.dataLayer || []
          window.gtag = () => {
            window.dataLayer.push(arguments)
          }
          window.gtag("js", new Date())
          window.gtag("config", "G-VSTJ31JM4J")
        }
      }
    }
  }

  const loadAdSense = () => {
    if (typeof window !== "undefined") {
      // Vérifier si le script AdSense existe déjà
      if (!document.querySelector('script[src*="pagead2.googlesyndication.com"]')) {
        // Charger le script AdSense
        const script = document.createElement("script")
        script.async = true
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5475322044218525"
        script.crossOrigin = "anonymous"
        document.head.appendChild(script)

        // Initialiser AdSense
        script.onload = () => {
          window.adsbygoogle = window.adsbygoogle || []
        }
      }
    }
  }

  const acceptAll = () => {
    const newPreferences = { necessary: true, analytics: true, marketing: true }
    setPreferences(newPreferences)

    if (typeof window !== "undefined") {
      localStorage.setItem("cookiePreferences", JSON.stringify(newPreferences))
    }

    // Charger tous les scripts
    loadGTM()
    loadGA()
    loadAdSense()

    setShowBanner(false)
    setShowDetails(false)
  }

  const acceptNecessary = () => {
    const newPreferences = { necessary: true, analytics: false, marketing: false }
    setPreferences(newPreferences)

    if (typeof window !== "undefined") {
      localStorage.setItem("cookiePreferences", JSON.stringify(newPreferences))
    }

    setShowBanner(false)
    setShowDetails(false)
  }

  const savePreferences = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cookiePreferences", JSON.stringify(preferences))
    }

    if (preferences.analytics) {
      loadGTM()
      loadGA()
    }
    if (preferences.marketing) {
      loadAdSense()
    }

    setShowBanner(false)
    setShowDetails(false)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Overlay */}
      <div id="cookie-overlay" className="fixed inset-0 bg-black/50 z-40" />

      {/* Banner */}
      <div
        id="cookie-banner"
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50"
      >
        <div id="cookie-banner-content" className="max-w-7xl mx-auto p-4">
          {!showDetails ? (
            // Vue simple
            <div
              id="cookie-simple-view"
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div id="cookie-message" className="flex items-start gap-3 flex-1">
                <Cookie id="cookie-icon" className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 id="cookie-title" className="font-semibold text-gray-900 mb-1">
                    Nous utilisons des cookies
                  </h3>
                  <p id="cookie-description" className="text-sm text-gray-600">
                    Nous utilisons des cookies pour améliorer votre expérience, analyser notre trafic et afficher des
                    publicités personnalisées. Vous pouvez choisir quels cookies accepter.
                  </p>
                </div>
              </div>

              <div id="cookie-buttons" className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <button
                  id="cookie-customize-button"
                  onClick={() => setShowDetails(true)}
                  className="px-4 py-2 text-sm text-teal-600 hover:text-teal-700 border border-teal-600 rounded-md hover:bg-teal-50 transition-colors"
                >
                  Personnaliser
                </button>
                <button
                  id="cookie-necessary-button"
                  onClick={acceptNecessary}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Nécessaires uniquement
                </button>
                <button
                  id="cookie-accept-all-button"
                  onClick={acceptAll}
                  className="px-4 py-2 text-sm bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
                >
                  Accepter tout
                </button>
              </div>
            </div>
          ) : (
            // Vue détaillée
            <div id="cookie-detailed-view" className="space-y-4">
              <div id="cookie-detailed-header" className="flex items-center justify-between">
                <h3 id="cookie-detailed-title" className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Cookie className="h-5 w-5 text-teal-600" />
                  Paramètres des cookies
                </h3>
                <button
                  id="cookie-close-button"
                  onClick={() => setShowDetails(false)}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              <div id="cookie-categories" className="space-y-4">
                {/* Cookies nécessaires */}
                <div id="necessary-cookies" className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Shield id="necessary-icon" className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 id="necessary-title" className="font-medium text-gray-900">
                        Cookies nécessaires
                      </h4>
                      <p id="necessary-description" className="text-sm text-gray-600 mt-1">
                        Essentiels au fonctionnement du site. Ils ne peuvent pas être désactivés.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span id="necessary-status" className="text-sm text-green-600 font-medium">
                      Toujours actifs
                    </span>
                  </div>
                </div>

                {/* Cookies analytiques */}
                <div id="analytics-cookies" className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <BarChart3 id="analytics-icon" className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 id="analytics-title" className="font-medium text-gray-900">
                        Cookies analytiques
                      </h4>
                      <p id="analytics-description" className="text-sm text-gray-600 mt-1">
                        Nous aident à comprendre comment vous utilisez notre site pour l'améliorer.
                      </p>
                    </div>
                  </div>
                  <label id="analytics-toggle" className="relative inline-flex items-center cursor-pointer">
                    <input
                      id="analytics-checkbox"
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                  </label>
                </div>

                {/* Cookies marketing */}
                <div id="marketing-cookies" className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Target id="marketing-icon" className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <h4 id="marketing-title" className="font-medium text-gray-900">
                        Cookies marketing
                      </h4>
                      <p id="marketing-description" className="text-sm text-gray-600 mt-1">
                        Utilisés pour afficher des publicités personnalisées et mesurer leur efficacité.
                      </p>
                    </div>
                  </div>
                  <label id="marketing-toggle" className="relative inline-flex items-center cursor-pointer">
                    <input
                      id="marketing-checkbox"
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                  </label>
                </div>
              </div>

              <div id="cookie-detailed-buttons" className="flex flex-col sm:flex-row gap-2 pt-2">
                <button
                  id="cookie-detailed-necessary-button"
                  onClick={acceptNecessary}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Nécessaires uniquement
                </button>
                <button
                  id="cookie-detailed-save-button"
                  onClick={savePreferences}
                  className="px-4 py-2 text-sm bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
                >
                  Enregistrer les préférences
                </button>
                <button
                  id="cookie-detailed-accept-all-button"
                  onClick={acceptAll}
                  className="px-4 py-2 text-sm bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-colors"
                >
                  Accepter tout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
