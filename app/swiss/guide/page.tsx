"use client"

import { ArrowLeft, Palette, Flag, Shield, Hash, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function SwissGuidePage() {
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
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Link href="/swiss">
                    <Button variant="ghost" size="sm">
                      <ArrowLeft className="w-4 h-4" />
                    </Button>
                  </Link>
                  <h2 className="text-lg font-semibold">Décoder les plaques suisses</h2>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Flag className="w-5 h-5 text-red-600" />
                      Le système d'immatriculation suisse
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm">
                      Le système suisse est un régime fédéral spécial, distinct du système cantonal classique. Il est
                      géré par la Confédération et reflète la double vocation de la Suisse : accueillir les ambassades
                      bilatérales à Berne et un grand nombre d'organisations internationales à Genève.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-blue-600" />
                      Anatomie d'une plaque suisse
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      La structure d'une plaque diplomatique suisse suit un format standardisé et logique.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-mono text-center text-xl font-bold text-blue-800 mb-2">CD BE 9 • 1</p>
                      <p className="text-sm text-blue-700 text-center">Exemple d'une plaque suisse</p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium">Comment lire une plaque :</h4>
                      <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
                        <div className="grid grid-cols-4 gap-2 text-center">
                          <div className="p-2 bg-blue-50 rounded">
                            <div className="font-mono text-lg font-bold text-blue-600">CD</div>
                            <div className="text-xs text-blue-600">Statut</div>
                          </div>
                          <div className="p-2 bg-gray-50 rounded">
                            <div className="font-mono text-lg font-bold text-gray-600">BE</div>
                            <div className="text-xs text-gray-600">Canton</div>
                          </div>
                          <div className="p-2 bg-green-50 rounded">
                            <div className="font-mono text-lg font-bold text-green-600">9</div>
                            <div className="text-xs text-green-600">N° Série</div>
                          </div>
                          <div className="p-2 bg-red-50 rounded">
                            <div className="font-mono text-lg font-bold text-red-600">1</div>
                            <div className="text-xs text-red-600">Code Pays</div>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground pt-2">
                        Note : Le code canton (ex: BE, GE) est parfois inclus après le statut pour plus de clarté, bien
                        que ce ne soit pas la norme officielle.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palette className="w-5 h-5 text-purple-600" />
                      Le code couleur des plaques
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      La couleur du fond de la plaque révèle instantanément la nature de la mission à laquelle le
                      véhicule est rattaché.
                    </p>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="p-3 border rounded-lg bg-blue-50">
                        <p className="font-medium text-sm text-blue-800">Fond Bleu</p>
                        <p className="text-xs text-blue-700">
                          Pour les véhicules des missions auprès des organisations internationales, principalement à
                          Genève.
                        </p>
                      </div>
                      <div className="p-3 border rounded-lg bg-green-50">
                        <p className="font-medium text-sm text-green-800">Fond Vert</p>
                        <p className="text-xs text-green-700">
                          Pour les véhicules des ambassades accréditées auprès de la Suisse, principalement à Berne.
                        </p>
                      </div>
                      <div className="p-3 border rounded-lg bg-gray-100">
                        <p className="font-medium text-sm text-gray-800">Fond Blanc</p>
                        <p className="text-xs text-gray-700">
                          Pour les postes consulaires (préfixe CC) et le personnel administratif et technique (préfixe
                          AT).
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-indigo-600" />
                      Les préfixes de statut
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-1 gap-3">
                      <div className="p-3 border rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className="bg-blue-600 text-white">CD</Badge>
                          <span className="font-medium text-sm">Corps Diplomatique</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Le statut le plus élevé, pour les diplomates d'ambassades et missions permanentes qui
                          jouissent du plus haut niveau d'immunité.
                        </p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className="bg-gray-700 text-white">CC</Badge>
                          <span className="font-medium text-sm">Corps Consulaire</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Pour les véhicules de service des postes consulaires et leurs fonctionnaires de carrière.
                        </p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className="bg-green-600 text-white">AT</Badge>
                          <span className="font-medium text-sm">Personnel Administratif et Technique</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Pour les véhicules personnels des membres du personnel administratif et technique, bénéficiant
                          d'immunités fonctionnelles.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Hash className="w-5 h-5 text-orange-600" />
                      Hiérarchie des numéros de série
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm">
                      Une hiérarchie protocolaire officieuse mais largement reconnue s'est établie dans l'attribution du
                      premier bloc de chiffres.
                    </p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>
                        <strong>Numéros 1, 2, 3 :</strong> Très souvent réservés aux véhicules officiels du chef de
                        mission (ambassadeur).
                      </li>
                      <li>
                        <strong>Numéros faibles suivants :</strong> Attribués aux diplomates de haut rang (chef de
                        mission adjoint, premiers secrétaires).
                      </li>
                      <li>
                        <strong>Numéros plus élevés :</strong> Assignés au reste du personnel diplomatique et aux
                        véhicules de service de la mission.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
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
