"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const PlateExample = ({
  text,
  type,
  canton,
  status = "CD",
}: { text: string; type: "french" | "swiss"; canton?: string; status?: "CD" | "AT" | "CC" }) => {
  if (type === "french") {
    return (
      <div
        id={`french-plate-example-${text.replace(/\s/g, "-")}`}
        className="inline-block font-mono text-base font-bold px-3 py-1.5 rounded-md shadow-sm bg-gradient-to-r from-green-600 to-green-700 text-orange-300 border-2 border-orange-400 whitespace-nowrap"
      >
        {text}
      </div>
    )
  }

  if (type === "swiss") {
    const parts = text.split("•")
    const prefixStyle = {
      CD: "bg-blue-600 text-white",
      AT: "bg-green-600 text-white",
      CC: "bg-gray-700 text-white",
    }[status]

    return (
      <div
        id={`swiss-plate-example-${text.replace(/\s/g, "-").replace("•", "dot")}`}
        className="inline-flex items-stretch bg-white border border-black rounded-md p-0 font-mono text-black shadow-sm text-base whitespace-nowrap"
      >
        <div className={`px-1.5 flex items-center rounded-l-md ${prefixStyle}`}>{status}</div>
        <div className="flex flex-col items-center justify-center border-l border-r border-gray-300 px-1.5 mx-0.5">
          <span className="text-sm font-bold leading-none">{canton}</span>
        </div>
        <div className="px-1.5 py-1">
          <span className="font-bold">{parts[0]}</span>
          <span className="mx-0.5"> • </span>
          <span className="font-bold">{parts[1]}</span>
        </div>
      </div>
    )
  }
  return null
}

interface SystemSelectorProps {
  onSelectSystem: (system: "french" | "swiss") => void
}

export default function SystemSelector({ onSelectSystem }: SystemSelectorProps) {
  return (
    <div id="system-selector" className="space-y-6">
      <div id="system-selector-header" className="text-center">
        <h2 id="system-selector-title" className="text-2xl font-bold text-gray-900 mb-2">
          Choisissez le système
        </h2>
        <p id="system-selector-subtitle" className="text-gray-600">
          Sélectionnez le type de plaque diplomatique à identifier
        </p>
      </div>

      <div id="system-cards-container">
        <Link href="/french" className="block mb-4">
          <Card
            id="french-system-card"
            className="border-2 border-green-200 hover:border-green-300 transition-colors cursor-pointer"
          >
            <CardContent id="french-system-content" className="p-6">
              <div className="flex-1">
                <h3 id="french-system-title" className="text-xl font-bold text-green-800 flex items-center gap-3 mb-1">
                  <span id="french-flag" className="text-2xl">
                    🇫🇷
                  </span>
                  Système français
                </h3>
                <p id="french-system-description" className="text-sm text-green-600 mb-3">
                  Plaques vertes avec codes numériques
                </p>
                <div id="french-examples" className="space-y-3 bg-green-50 p-3 rounded-lg">
                  <div id="french-example-1" className="flex items-center gap-3">
                    <PlateExample text="6 CMD 1" type="french" />
                    <span className="text-gray-600 text-sm">→ Ambassadeur des États-Unis</span>
                  </div>
                  <div id="french-example-2" className="flex items-center gap-3">
                    <PlateExample text="U 401 CD 123" type="french" />
                    <span className="text-gray-600 text-sm">→ Diplomate à l'UNESCO</span>
                  </div>
                </div>
              </div>
              <Button id="french-scanner-button" className="w-full mt-4 bg-green-600 hover:bg-green-700">
                Scanner une plaque française
              </Button>
            </CardContent>
          </Card>
        </Link>

        <Link href="/swiss" className="block">
          <Card
            id="swiss-system-card"
            className="border-2 border-red-200 hover:border-red-300 transition-colors cursor-pointer"
          >
            <CardContent id="swiss-system-content" className="p-6">
              <div className="flex-1">
                <h3 id="swiss-system-title" className="text-xl font-bold text-red-800 flex items-center gap-3 mb-1">
                  <span id="swiss-flag" className="text-2xl">
                    🇨🇭
                  </span>
                  Système suisse
                </h3>
                <p id="swiss-system-description" className="text-sm text-red-600 mb-3">
                  Plaques avec statuts et blasons cantonaux
                </p>
                <div id="swiss-examples" className="space-y-3 bg-red-50 p-3 rounded-lg">
                  <div id="swiss-example-1" className="flex items-center gap-3">
                    <PlateExample text="9 • 1" type="swiss" canton="BE" status="CD" />
                    <span className="text-gray-600 text-sm">→ Diplomate USA (Berne)</span>
                  </div>
                  <div id="swiss-example-2" className="flex items-center gap-3">
                    <PlateExample text="39 • 107" type="swiss" canton="GE" status="AT" />
                    <span className="text-gray-600 text-sm">→ Pers. techn. Qatar (Genève)</span>
                  </div>
                </div>
              </div>
              <Button id="swiss-scanner-button" className="w-full mt-4 bg-red-600 hover:bg-red-700">
                Scanner une plaque suisse
              </Button>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
