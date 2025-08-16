"use client"

import { Clock, Search, Trash2, Flag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useHistory } from "../hooks/useHistory"

interface HistoryViewProps {
  onScan: (plateText: string) => void
}

export default function HistoryView({ onScan }: HistoryViewProps) {
  const { history, clearHistory, removeFromHistory } = useHistory()

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  const handleRescan = (plateText: string) => {
    onScan(plateText)
  }

  if (history.length === 0) {
    return (
      <div className="text-center py-12">
        <Clock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-600 mb-2">Aucun historique</h3>
        <p className="text-gray-500 mb-6">Vos scans précédents apparaîtront ici</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Historique ({history.length})
        </h2>
        <Button
          variant="outline"
          size="sm"
          onClick={clearHistory}
          className="text-red-600 hover:text-red-700 bg-transparent"
        >
          <Trash2 className="w-4 h-4 mr-1" />
          Vider
        </Button>
      </div>

      <div className="space-y-3">
        {history.map((entry) => (
          <Card key={entry.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={entry.system === "french" ? "default" : "secondary"} className="text-xs">
                      <Flag className="w-3 h-3 mr-1" />
                      {entry.system === "french" ? "France" : "Suisse"}
                    </Badge>
                    <span className="font-mono text-sm font-semibold">{entry.plateText}</span>
                  </div>

                  {entry.result?.match && (
                    <div className="text-sm text-gray-600 mb-2">
                      <span className="text-lg mr-2">{entry.result.match.country.flagEmoji}</span>
                      {entry.result.match.country.countryName}
                    </div>
                  )}

                  <div className="text-xs text-gray-500">{formatDate(entry.timestamp)}</div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleRescan(entry.plateText)}>
                    <Search className="w-4 h-4 mr-1" />
                    Rescanner
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromHistory(entry.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
