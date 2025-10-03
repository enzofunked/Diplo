"use client"

import { ArrowLeft, Palette, Flag, Building, Shield, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface FrenchSystemInfoProps {
  onBack: () => void
}

export default function FrenchSystemInfo({ onBack }: FrenchSystemInfoProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <h2 className="text-lg font-semibold">Décoder les plaques</h2>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Flag className="w-5 h-5 text-green-600" />
                Plaques diplomatiques françaises
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm">
                Les véhicules officiels des ambassades, consulats et organisations internationales en France utilisent des
                plaques vertes spéciales. Ces plaques identifient le pays ou l'organisation du détenteur et son statut.
              </p>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Autorité :</strong> Ministère des Affaires étrangères
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5 text-blue-600" />
                Format des plaques
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-mono text-center text-xl font-bold text-blue-800 mb-2">5 CD 1234</p>
                <p className="text-sm text-blue-700 text-center">Exemple simple d'une plaque française</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Comment lire une plaque :</h4>
                <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 bg-red-50 rounded"><div className="font-mono text-lg font-bold text-red-600">5</div><div className="text-xs text-red-600">Pays</div></div>
                    <div className="p-2 bg-blue-50 rounded"><div className="font-mono text-lg font-bold text-blue-600">CD</div><div className="text-xs text-blue-600">Statut</div></div>
                    <div className="p-2 bg-green-50 rounded"><div className="font-mono text-lg font-bold text-green-600">1234</div><div className="text-xs text-green-600">Numéro</div></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-green-600" />
                Couleurs réglementaires
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 rounded-lg text-center">
                <p className="text-white font-medium mb-2">Fond vert "jaspe" (strié)</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-orange-50 rounded-lg text-center"><div className="w-8 h-8 bg-orange-500 rounded mx-auto mb-2"></div><p className="text-sm font-medium">Caractères orange</p><p className="text-xs text-muted-foreground">Corps diplomatique</p></div>
                <div className="p-3 bg-gray-50 rounded-lg text-center"><div className="w-8 h-8 bg-white border-2 border-gray-300 rounded mx-auto mb-2"></div><p className="text-sm font-medium">Caractères blancs</p><p className="text-xs text-muted-foreground">Corps consulaire</p></div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-600" />
                Statuts diplomatiques
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-1 gap-3">
                <div className="p-3 border rounded-lg"><div className="flex items-center gap-2 mb-1"><Badge className="bg-red-100 text-red-800">CMD</Badge><span className="font-medium text-sm">Chef de Mission Diplomatique</span></div><p className="text-xs text-muted-foreground">Ambassadeur - Rang le plus élevé</p></div>
                <div className="p-3 border rounded-lg"><div className="flex items-center gap-2 mb-1"><Badge className="bg-blue-100 text-blue-800">CD</Badge><span className="font-medium text-sm">Corps Diplomatique</span></div><p className="text-xs text-muted-foreground">Diplomates et membres d'ambassade</p></div>
                <div className="p-3 border rounded-lg"><div className="flex items-center gap-2 mb-1"><Badge className="bg-green-100 text-green-800">C</Badge><span className="font-medium text-sm">Corps Consulaire</span></div><p className="text-xs text-muted-foreground">Personnel d'un consulat</p></div>
                <div className="p-3 border rounded-lg"><div className="flex items-center gap-2 mb-1"><Badge className="bg-yellow-100 text-yellow-800">K</Badge><span className="font-medium text-sm">Personnel Technique</span></div><p className="text-xs text-muted-foreground">Personnel administratif non diplomatique</p></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
