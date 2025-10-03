"use client"
import Link from "next/link"
import HistoryView from "../../components/HistoryView"
import type { HistoryEntry } from "../../hooks/useHistory"
import { useRouter } from "next/navigation"

export default function HistoryPage() {
  const router = useRouter()

  const handleHistoryEntrySelect = (entry: HistoryEntry) => {
    if (entry.result) {
      // Rediriger vers la page appropriée avec les données
      if (entry.system === "french") {
        router.push(`/french?result=${encodeURIComponent(JSON.stringify(entry))}`)
      } else {
        router.push(`/swiss?result=${encodeURIComponent(JSON.stringify(entry))}`)
      }
    } else {
      alert(`La plaque "${entry.plateText}" n'a pas été reconnue.`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container max-w-md mx-auto p-4">
        <div className="text-center mb-8 pt-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="text-3xl">🌍</div>
            <h1 className="text-3xl font-bold text-blue-900">Diplo Scanner</h1>
          </div>
          <p className="text-blue-700">Plaques diplomatiques France & Suisse</p>
        </div>

        <div className="pb-8">
          <HistoryView onBack={() => router.push("/")} onSelectEntry={handleHistoryEntrySelect} />
        </div>

        <footer className="bg-white/60 border-t border-gray-200 py-4 mt-auto">
          <div className="text-center space-y-2">
            <p className="text-xs text-gray-500">Fait avec ❤️</p>
            <div className="flex justify-center gap-4">
              <Link href="/terms">
                <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors underline">
                  Conditions d'Utilisation
                </button>
              </Link>
              <Link href="/about">
                <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors underline">
                  À propos
                </button>
              </Link>
              <Link href="/help">
                <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors underline">Aide</button>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
