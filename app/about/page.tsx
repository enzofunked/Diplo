"use client"

import { ArrowLeft, Info, Globe, Users, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function AboutPage() {
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
              <h2 className="text-lg font-semibold">À propos</h2>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-blue-600" />
                  Notre mission
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm">
                  Diplo Scanner est une application gratuite conçue pour aider à identifier les plaques
                  d'immatriculation diplomatiques françaises et suisses.
                </p>
                <p className="text-sm text-muted-foreground">
                  Notre objectif est de rendre accessible l'information sur les codes diplomatiques et de faciliter la
                  compréhension du système d'immatriculation des véhicules officiels.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-green-600" />
                  Fonctionnalités
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-sm">Identification des plaques françaises</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-sm">Identification des plaques suisses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-sm">Base de données complète des codes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-sm">Historique des recherches</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-sm">Guides détaillés par système</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-sm">Application web progressive (PWA)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  Qui peut l'utiliser ?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <p className="text-sm">
                    <strong>Professionnels :</strong> Agents de sécurité, personnel d'accueil, journalistes
                  </p>
                  <p className="text-sm">
                    <strong>Étudiants :</strong> Relations internationales, droit diplomatique
                  </p>
                  <p className="text-sm">
                    <strong>Curieux :</strong> Toute personne intéressée par la diplomatie
                  </p>
                  <p className="text-sm">
                    <strong>Résidents :</strong> Habitants des zones diplomatiques
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-orange-600" />
                  Confidentialité et sécurité
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <p className="text-sm">🔒 Aucune donnée personnelle collectée</p>
                  <p className="text-sm">🏠 Historique stocké localement sur votre appareil</p>
                  <p className="text-sm">🚫 Aucun tracking de véhicule diplomatique </p>
                  <p className="text-sm">⚡ Fonctionne hors ligne après la première visite</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Version et mises à jour</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">
                  Version actuelle : <strong>3.2.0</strong>
                </p>
                <p className="text-sm text-muted-foreground">Dernière mise à jour : Décembre 2024</p>
                <p className="text-sm text-muted-foreground">
                  Les mises à jour sont automatiques et incluent de nouveaux codes diplomatiques et améliorations.
                </p>
                <div className="pt-2 border-t border-gray-200">
                  <Link href="/sources">
                    <button className="text-sm text-blue-600 hover:text-blue-800 transition-colors underline">
                      📚 Consulter nos sources et références
                    </button>
                  </Link>
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
