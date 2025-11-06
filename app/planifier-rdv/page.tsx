"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PlanifierRdvPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event && e.data.event.indexOf("calendly") === 0) {
        // Calendly widget is loaded and ready
        setLoading(false)
      }
    }

    window.addEventListener("message", handleCalendlyEvent)

    const fallbackTimeout = setTimeout(() => {
      setLoading(false)
    }, 5000)

    return () => {
      document.body.removeChild(script)
      window.removeEventListener("message", handleCalendlyEvent)
      clearTimeout(fallbackTimeout)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Accueil
              </Link>
            </Button>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/uct-logo-estimation.png"
                alt="UCT Azur Logo"
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="text-xl font-bold text-gray-800">UCT Azur</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold mb-0">Planifier votre visite gratuite</h1>
          
        </div>

        <div className="relative min-h-[700px]">
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 rounded-lg z-10">
              <Image
                src="/images/uct-azur-logo-new.png"
                alt="UCT Azur"
                width={80}
                height={80}
                className="mb-6 animate-pulse"
              />
              <p className="text-muted-foreground text-lg font-medium">Chargement du calendrier...</p>
              <p className="text-muted-foreground text-sm mt-2">Veuillez patienter un instant</p>
            </div>
          )}

          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/uctazur/visite-de-vos-locaux"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </div>
    </div>
  )
}
