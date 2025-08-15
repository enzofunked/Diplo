"use client"

import { ArrowLeft, HelpCircle, BookOpen, Search, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function HelpPage() {
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
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
              <h2 className="text-lg font-semibold">Centre d'aide</h2>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-blue-600" />
                  Comment utiliser Diplo Scanner
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <h4 className="font-medium">1. Choisir le système</h4>
                  <p className="text-sm text-muted-foreground">
                    Sélectionnez le système français 🇫🇷 ou suisse 🇨🇭 selon la plaque que vous souhaitez identifier.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">2. Saisir la plaque</h4>
                  <p className="text-sm text-muted-foreground">
                    Tapez le numéro de la plaque diplomatique dans le champ de saisie. Utilisez les exemples pour vous
                    guider.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">3. Obtenir les informations</h4>
                  <p className="text-sm text-muted-foreground">
                    L'application identifie automatiquement le pays, le statut diplomatique et fournit des informations
                    détaillées.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5 text-green-600" />
                  Questions fréquentes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm">Que signifie "CD" sur une plaque ?</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    CD signifie "Corps Diplomatique". C'est le statut des diplomates et membres d'ambassade.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Pourquoi certaines plaques ne sont pas reconnues ?</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Vérifiez le format de saisie. Les plaques doivent respecter le format officiel du pays sélectionné.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Comment différencier les systèmes français et suisse ?</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Les plaques françaises sont vertes avec des codes numériques. Les plaques suisses incluent souvent
                    des codes cantonaux (BE, GE, etc.).
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  Ressources utiles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-1 gap-2">
                  <Link href="/french/guide">
                    <Button variant="outline" className="w-full justify-start text-sm bg-transparent">
                      🇫🇷 Guide des plaques françaises
                    </Button>
                  </Link>
                  <Link href="/swiss/guide">
                    <Button variant="outline" className="w-full justify-start text-sm bg-transparent">
                      🇨🇭 Guide des plaques suisses
                    </Button>
                  </Link>
                  <Link href="/french/codes">
                    <Button variant="outline" className="w-full justify-start text-sm bg-transparent">
                      📋 Codes diplomatiques français
                    </Button>
                  </Link>
                  <Link href="/swiss/codes">
                    <Button variant="outline" className="w-full justify-start text-sm bg-transparent">
                      📋 Codes diplomatiques suisses
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-orange-600" />
                  Besoin d'aide supplémentaire ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Si vous ne trouvez pas la réponse à votre question, n'hésitez pas à nous contacter.
                </p>
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground">📧 Email : support@diplo-scanner.com</p>
                  <p className="text-xs text-muted-foreground">🕒 Réponse sous 24h en moyenne</p>
                </div>
              </CardContent>
            </Card>
          </div>
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
