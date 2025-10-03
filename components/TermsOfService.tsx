"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FileText, Shield, Eye, Database, AlertTriangle, Mail } from "lucide-react"

interface TermsOfServiceProps {
  onBack: () => void
}

export default function TermsOfService({ onBack }: TermsOfServiceProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={onBack} className="p-2">
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-blue-600" />
          <h1 className="text-xl font-bold text-gray-800">Conditions Générales d'Utilisation</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Introduction */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <FileText className="w-5 h-5 text-blue-600" />
              Préambule
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation de l'application
              <strong> Diplo Scanner</strong>, une application éducative dédiée à l'identification des plaques
              d'immatriculation diplomatiques françaises.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <p className="text-sm text-blue-800">
                <strong>Date d'entrée en vigueur :</strong> 1er Juillet 2025
                <br />
                <strong>Dernière mise à jour :</strong> 1er Juillet 2025
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Article 1 - Objet */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Article 1 - Objet de l'application</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-gray-700 leading-relaxed">
              Diplo Scanner est une application éducative gratuite permettant l'identification et la reconnaissance des
              plaques d'immatriculation diplomatiques utilisées en France.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-gray-800">Fonctionnalités principales :</h4>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                <li>• Reconnaissance automatique des codes diplomatiques français</li>
                <li>• Base de données complète des codes pays et organisations</li>
                <li>• Historique des recherches effectuées</li>
                <li>• Informations détaillées sur le système diplomatique français</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Article 2 - Acceptation */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Article 2 - Acceptation des conditions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700 leading-relaxed">
              L'utilisation de l'application Diplo Scanner implique l'acceptation pleine et entière des présentes CGU.
              Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser l'application.
            </p>
          </CardContent>
        </Card>

        {/* Article 3 - Usage autorisé */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Shield className="w-5 h-5 text-green-600" />
              Article 3 - Usage autorisé
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-sm text-green-800 mb-2">Utilisations autorisées :</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>✅ Usage éducatif et pédagogique</li>
                <li>✅ Recherche académique et formation</li>
                <li>✅ Curiosité personnelle et apprentissage</li>
                <li>✅ Vérification d'informations publiques</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-sm text-red-800 mb-2">Utilisations interdites :</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>❌ Surveillance ou espionnage</li>
                <li>❌ Harcèlement ou intimidation</li>
                <li>❌ Usage commercial sans autorisation</li>
                <li>❌ Violation de la vie privée</li>
                <li>❌ Activités illégales ou malveillantes</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Article 4 - Données personnelles */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Eye className="w-5 h-5 text-purple-600" />
              Article 4 - Protection des données
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-gray-700 leading-relaxed">
              Diplo Scanner respecte votre vie privée et s'engage à protéger vos données personnelles.
            </p>
            <div className="space-y-3">
              <div className="bg-purple-50 p-3 rounded-lg">
                <h4 className="font-semibold text-sm text-purple-800 mb-2">Données collectées :</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Historique des recherches (stockage local uniquement)</li>
                  <li>• Données d'usage anonymisées pour améliorer l'application</li>
                  <li>• Aucune donnée personnelle identifiable n'est collectée</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <h4 className="font-semibold text-sm text-blue-800 mb-2">Vos droits :</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Droit d'accès à vos données</li>
                  <li>• Droit de rectification</li>
                  <li>• Droit à l'effacement</li>
                  <li>• Droit à la portabilité</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Article 5 - Propriété intellectuelle */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Database className="w-5 h-5 text-indigo-600" />
              Article 5 - Propriété intellectuelle
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-gray-700 leading-relaxed">
              L'application Diplo Scanner et sa base de données sont protégées par les droits de propriété
              intellectuelle.
            </p>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h4 className="font-semibold text-sm text-indigo-800 mb-2">Éléments protégés :</h4>
              <ul className="text-sm text-indigo-700 space-y-1">
                <li>• Code source de l'application</li>
                <li>• Base de données des codes diplomatiques</li>
                <li>• Interface utilisateur et design</li>
                <li>• Algorithmes de reconnaissance</li>
              </ul>
            </div>
            <p className="text-xs text-gray-600 bg-gray-50 p-3 rounded">
              <strong>Note :</strong> Les codes diplomatiques officiels sont des informations publiques. Seule leur
              compilation et présentation dans cette application sont protégées.
            </p>
          </CardContent>
        </Card>

        {/* Article 6 - Responsabilité */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
              Article 6 - Limitation de responsabilité
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <p className="text-sm text-orange-800 leading-relaxed">
                <strong>Important :</strong> Diplo Scanner est fournie "en l'état" à des fins éducatives uniquement.
                Nous ne garantissons pas l'exactitude absolue des informations fournies.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-gray-800">Exclusions de responsabilité :</h4>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                <li>• Erreurs ou omissions dans la base de données</li>
                <li>• Interruptions de service</li>
                <li>• Dommages directs ou indirects liés à l'usage</li>
                <li>• Utilisation inappropriée de l'application</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Article 7 - Modifications */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Article 7 - Modifications des CGU</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700 leading-relaxed">
              Nous nous réservons le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront informés
              des modifications importantes par notification dans l'application. L'usage continu de l'application après
              modification vaut acceptation des nouvelles conditions.
            </p>
          </CardContent>
        </Card>

        {/* Article 8 - Contact */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Mail className="w-5 h-5 text-blue-600" />
              Article 8 - Contact et support
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-gray-700 leading-relaxed">
              Pour toute question concernant ces CGU ou l'utilisation de Diplo Scanner, vous pouvez nous contacter :
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="space-y-2 text-sm text-blue-800">
                <p>
                  <strong>Application :</strong> Diplo Scanner
                </p>
                <p>
                  <strong>Version :</strong> 3.2.0
                </p>
                <p>
                  <strong>Type :</strong> Application éducative gratuite
                </p>
                <p>
                  <strong>Support :</strong> Via l'interface de l'application
                </p>
                <p>
                  <strong>Contact :</strong> contact@diplo-scanner.com
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Article 9 - Droit applicable */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Article 9 - Droit applicable</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700 leading-relaxed">
              Les présentes CGU sont régies par le droit français. En cas de litige, les tribunaux français seront seuls
              compétents.
            </p>
          </CardContent>
        </Card>

        {/* Footer des CGU */}
        <Card className="bg-gray-50">
          <CardContent className="p-6 text-center">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-800">Diplo Scanner - CGU</p>
              <p className="text-xs text-gray-600">
                Application éducative pour l'identification des plaques diplomatiques françaises
              </p>
              <p className="text-xs text-gray-500">Version des CGU : 1.0 - Mise à jour : Juillet 2025</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
