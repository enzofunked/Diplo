"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Search, CheckCircle, Clock, AlertCircle } from "lucide-react"

const priorityUrls = [
  {
    url: "/comment-lire-une-plaque-diplomatique-suisse",
    priority: "HAUTE",
    status: "À soumettre",
    description: "Guide complet pour décoder les plaques suisses",
  },
  {
    url: "/comment-lire-une-plaque-diplomatique-francaise",
    priority: "HAUTE",
    status: "À soumettre",
    description: "Guide détaillé pour les plaques françaises",
  },
  {
    url: "/qu-est-ce-qu-une-plaque-diplomatique",
    priority: "HAUTE",
    status: "À soumettre",
    description: "Introduction aux plaques diplomatiques",
  },
  {
    url: "/liste-codes-pays-plaques-diplomatiques-francaises",
    priority: "MOYENNE",
    status: "À soumettre",
    description: "Liste complète des codes pays français",
  },
  {
    url: "/codes-diplomatiques-suisses",
    priority: "MOYENNE",
    status: "À soumettre",
    description: "Codes diplomatiques du système suisse",
  },
  {
    url: "/plaque-immatriculation-verte",
    priority: "MOYENNE",
    status: "À soumettre",
    description: "Guide des plaques vertes diplomatiques",
  },
]

export default function SubmitUrlsPage() {
  const [selectedUrl, setSelectedUrl] = useState("")
  const [instructions, setInstructions] = useState(null)
  const [loading, setLoading] = useState(false)

  const getInstructions = async (url: string) => {
    setLoading(true)
    try {
      const response = await fetch("/api/submit-to-google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      })
      const data = await response.json()
      setInstructions(data.data)
    } catch (error) {
      console.error("Error:", error)
    }
    setLoading(false)
  }

  const openGoogleSearchConsole = () => {
    window.open("https://search.google.com/search-console/", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">🔍 Soumission Google Search Console</h1>
          <p className="text-xl text-gray-600">Guide pour soumettre les URLs à l'indexation Google</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* URLs prioritaires */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                URLs Prioritaires
              </CardTitle>
              <CardDescription>Soumettez ces URLs en priorité (max 3 par jour)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {priorityUrls.map((item, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant={item.priority === "HAUTE" ? "destructive" : "secondary"}>{item.priority}</Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      {item.status}
                    </div>
                  </div>
                  <div className="font-mono text-sm bg-gray-100 p-2 rounded">{item.url}</div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <Button size="sm" variant="outline" onClick={() => getInstructions(item.url)} disabled={loading}>
                    Voir instructions
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Instructions détaillées */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Instructions Détaillées
              </CardTitle>
              <CardDescription>Étapes pour soumettre une URL à Google</CardDescription>
            </CardHeader>
            <CardContent>
              {instructions ? (
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">URL sélectionnée :</h3>
                    <code className="bg-white p-2 rounded text-sm block">
                      https://diplo-scanner.com{instructions.url}
                    </code>
                  </div>

                  <div className="space-y-3">
                    {instructions.steps.map((step, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold">
                          Étape {step.step}: {step.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-1">{step.description}</p>
                        <p className="text-sm font-medium text-blue-600">→ {step.action}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4" />
                      Conseils importants :
                    </h4>
                    <ul className="text-sm space-y-1">
                      {instructions.tips.map((tip, index) => (
                        <li key={index}>• {tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Sélectionnez une URL pour voir les instructions détaillées</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Actions rapides */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>🚀 Actions Rapides</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Button onClick={openGoogleSearchConsole} className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Ouvrir Google Search Console
              </Button>

              <Button variant="outline" onClick={() => window.open("https://diplo-scanner.com/sitemap.xml", "_blank")}>
                Voir Sitemap
              </Button>

              <Button variant="outline" onClick={() => getInstructions("/comment-lire-une-plaque-diplomatique-suisse")}>
                Page Suisse (Priorité)
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Plan de soumission */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>📅 Plan de Soumission Recommandé</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">Jour 1 - HAUTE PRIORITÉ</h3>
                <ul className="text-sm space-y-1">
                  <li>• Guide plaque suisse</li>
                  <li>• Guide plaque française</li>
                  <li>• Qu'est-ce qu'une plaque diplomatique</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">Jour 2 - MOYENNE PRIORITÉ</h3>
                <ul className="text-sm space-y-1">
                  <li>• Liste codes français</li>
                  <li>• Codes diplomatiques suisses</li>
                  <li>• Plaque verte</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Jour 3 - NORMALE</h3>
                <ul className="text-sm space-y-1">
                  <li>• Pages fonctionnelles</li>
                  <li>• FAQ</li>
                  <li>• Autres pages</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
