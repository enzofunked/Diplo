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
      <header className="border-b border-border bg-card backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/images/uct-logo.png" alt="UCT Azur Logo" width={40} height={40} className="object-contain" />
            <h1 className="text-2xl font-bold text-foreground">UCT Azur</h1>
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link href="/devis" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour
            </Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Planifier votre visite gratuite</h1>
          <p className="text-muted-foreground text-lg">
            Choisissez un créneau qui vous convient pour une visite de vos locaux
          </p>
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
