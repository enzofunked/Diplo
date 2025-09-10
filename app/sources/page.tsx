import type { Metadata } from "next"
import { ArrowLeft, ExternalLink, FileText, Globe, Shield, Database, Scale, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sources et références - Diplo Scanner",
  description:
    "Sources officielles et références utilisées par Diplo Scanner pour les données sur les plaques diplomatiques françaises et suisses.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function SourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container max-w-4xl mx-auto p-4">
        <div className="text-center mb-8 pt-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="text-3xl">📚</div>
            <h1 className="text-3xl font-bold text-blue-900">Sources et Références</h1>
          </div>
          <p className="text-blue-700">Transparence et fiabilité des données</p>
        </div>

        <div className="pb-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
              <h2 className="text-lg font-semibold">Documentation des sources</h2>
            </div>

            {/* Sources françaises officielles */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  Sources françaises officielles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-sm">Ministère de l'Europe et des Affaires étrangères (MEAE)</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Source principale pour les codes diplomatiques français
                    </p>
                    <a
                      href="https://www.diplomatie.gouv.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                    >
                      diplomatie.gouv.fr <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-sm">Ministère de l'Intérieur</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Réglementation sur les plaques d'immatriculation
                    </p>
                    <a
                      href="https://www.interieur.gouv.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                    >
                      interieur.gouv.fr <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-sm">Service-Public.fr</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Informations officielles sur les procédures administratives
                    </p>
                    <a
                      href="https://www.service-public.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                    >
                      service-public.fr <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sources suisses officielles */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-red-600" />
                  Sources suisses officielles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-sm">DFAE - Département fédéral des affaires étrangères</h4>
                    <p className="text-sm text-muted-foreground mb-2">Codes diplomatiques suisses et protocole</p>
                    <a
                      href="https://www.eda.admin.ch"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                    >
                      eda.admin.ch <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-sm">OFROU - Office fédéral des routes</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Réglementation sur l'immatriculation des véhicules
                    </p>
                    <a
                      href="https://www.astra.admin.ch"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                    >
                      astra.admin.ch <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bases de données internationales */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-green-600" />
                  Bases de données internationales
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-sm">ISO 3166 - Codes pays</h4>
                    <p className="text-sm text-muted-foreground mb-2">Standard international pour les codes pays</p>
                    <a
                      href="https://www.iso.org/iso-3166-country-codes.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                    >
                      iso.org <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-sm">Data.gouv.fr</h4>
                    <p className="text-sm text-muted-foreground mb-2">Données ouvertes du gouvernement français</p>
                    <a
                      href="https://www.data.gouv.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                    >
                      data.gouv.fr <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Documentation juridique */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-purple-600" />
                  Documentation juridique
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-sm">
                      Convention de Vienne sur les relations diplomatiques (1961)
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Base juridique internationale des privilèges diplomatiques
                    </p>
                    <a
                      href="https://legal.un.org/ilc/texts/instruments/french/conventions/9_1_1961_french.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Convention ONU <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-sm">Code de la route français</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Réglementation sur les plaques d'immatriculation
                    </p>
                    <a
                      href="https://www.legifrance.gouv.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                    >
                      legifrance.gouv.fr <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sources visuelles */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-orange-600" />
                  Sources visuelles et médias
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-sm">Images de plaques diplomatiques</h4>
                    <p className="text-sm text-muted-foreground">
                      Toutes les images de plaques sont des reconstitutions fidèles basées sur les spécifications
                      officielles. Aucune plaque réelle n'est photographiée pour des raisons de sécurité.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-sm">Icônes et illustrations</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Lucide React (licence MIT) et créations originales
                    </p>
                    <a
                      href="https://lucide.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                    >
                      lucide.dev <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Méthodologie */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-indigo-600" />
                  Méthodologie et vérification
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-sm mb-2">Processus de collecte des données</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Consultation quotidienne des sources officielles</li>
                      <li>• Vérification croisée entre sources françaises et suisses</li>
                      <li>• Validation par recoupement avec les conventions internationales</li>
                      <li>• Mise à jour immédiate en cas de changement officiel</li>
                    </ul>
                  </div>

                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-sm mb-2">Garantie de fiabilité</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Toutes les données proviennent de sources gouvernementales</li>
                      <li>• Aucune information non vérifiée n'est publiée</li>
                      <li>• Correction sous 48h en cas d'erreur signalée</li>
                      <li>• Historique des modifications disponible</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact et signalement */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-red-600" />
                  Signalement d'erreurs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">
                    Si vous constatez une erreur dans nos données ou souhaitez signaler une information obsolète, nous
                    vous encourageons à nous contacter immédiatement.
                  </p>
                  <p className="text-sm font-medium">
                    Engagement : Correction sous 48h pour toute erreur documentée avec source officielle.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Dernière mise à jour */}
            <Card>
              <CardHeader>
                <CardTitle>Informations de version</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm">
                    <strong>Dernière vérification des sources :</strong> Décembre 2024
                  </p>
                  <p className="text-sm">
                    <strong>Version des données :</strong> 3.2.0
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Les sources sont vérifiées mensuellement et mises à jour en temps réel en cas de changement
                    officiel.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <footer className="bg-white/60 border-t border-gray-200 py-4 mt-8">
          <div className="text-center space-y-2">
            <p className="text-xs text-gray-500">Cette page n'est pas indexée par les moteurs de recherche</p>
            <div className="flex justify-center gap-4">
              <Link href="/about">
                <button className="text-xs text-gray-500 hover:text-gray-700 transition-colors underline">
                  Retour à À propos
                </button>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
