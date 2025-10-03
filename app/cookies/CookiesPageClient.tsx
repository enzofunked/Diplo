"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cookie, Shield, BarChart3, Settings, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CookiesPageClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-4">
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">🍪 Politique des Cookies</h1>
          <p className="text-gray-600">Dernière mise à jour : 8 décembre 2024</p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cookie className="h-5 w-5 text-teal-600" />
              Qu'est-ce qu'un cookie ?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez un site web. Les
              cookies nous permettent de reconnaître votre navigateur et de mémoriser certaines informations sur vos
              préférences ou actions passées.
            </p>
            <p>
              <strong>Diplo Scanner</strong> utilise des cookies pour améliorer votre expérience et analyser
              l'utilisation de notre application de manière anonyme.
            </p>
          </CardContent>
        </Card>

        {/* Types de cookies */}
        <div className="grid gap-6 mb-8">
          {/* Cookies nécessaires */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                Cookies strictement nécessaires
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium ml-auto">
                  Toujours activés
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Ces cookies sont essentiels au fonctionnement de Diplo Scanner. Ils ne peuvent pas être désactivés car
                ils permettent :
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <div>
                    <strong>Historique local :</strong> Sauvegarde de vos identifications de plaques dans le stockage
                    local de votre navigateur
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <div>
                    <strong>Préférences utilisateur :</strong> Mémorisation de votre choix entre le système français et
                    suisse
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <div>
                    <strong>Fonctionnement hors ligne :</strong> Cache des données pour permettre l'utilisation sans
                    connexion internet
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <div>
                    <strong>Consentement cookies :</strong> Mémorisation de vos choix concernant les cookies
                  </div>
                </li>
              </ul>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Base légale :</strong> Ces cookies sont nécessaires à l'exécution du contrat (fourniture du
                  service) et ne nécessitent pas de consentement selon l'article 82 de la loi Informatique et Libertés.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cookies analytiques */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                Cookies analytiques (Google Tag Manager)
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium ml-auto">
                  Consentement requis
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Ces cookies nous aident à comprendre comment vous utilisez Diplo Scanner pour améliorer notre service :
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div>
                    <strong>Statistiques de visite :</strong> Nombre de visiteurs, pages consultées, durée des sessions
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div>
                    <strong>Fonctionnalités utilisées :</strong> Quelles fonctions sont les plus populaires (scanner
                    français vs suisse)
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div>
                    <strong>Performances :</strong> Temps de chargement, erreurs techniques
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <div>
                    <strong>Données démographiques :</strong> Pays, langue, type d'appareil (de manière anonyme)
                  </div>
                </li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800 mb-2">
                  <strong>Fournisseur :</strong> Google LLC (États-Unis)
                </p>
                <p className="text-sm text-blue-800 mb-2">
                  <strong>Durée de conservation :</strong> 26 mois maximum
                </p>
                <p className="text-sm text-blue-800">
                  <strong>Transfert de données :</strong> Vos données peuvent être transférées vers les États-Unis dans
                  le cadre des clauses contractuelles types de la Commission européenne.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Gestion des cookies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-teal-600" />
              Gérer vos préférences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Vous avez le contrôle total sur les cookies utilisés sur Diplo Scanner :</p>

            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">Via notre bannière de consentement</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Vous pouvez modifier vos préférences à tout moment en cliquant sur le bouton ci-dessous :
                </p>
                <Button
                  onClick={() => {
                    localStorage.removeItem("cookie-consent")
                    window.location.reload()
                  }}
                  className="bg-teal-600 hover:bg-teal-700"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Modifier mes préférences
                </Button>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">Via votre navigateur</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Vous pouvez également gérer les cookies directement dans votre navigateur :
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    • <strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies
                  </li>
                  <li>
                    • <strong>Firefox :</strong> Paramètres → Vie privée et sécurité → Cookies
                  </li>
                  <li>
                    • <strong>Safari :</strong> Préférences → Confidentialité → Cookies
                  </li>
                  <li>
                    • <strong>Edge :</strong> Paramètres → Cookies et autorisations de site
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vos droits */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Vos droits (RGPD)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants
              :
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-teal-600 mt-1">•</span>
                <div>
                  <strong>Droit d'accès :</strong> Connaître les données collectées vous concernant
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 mt-1">•</span>
                <div>
                  <strong>Droit de rectification :</strong> Corriger des données inexactes
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 mt-1">•</span>
                <div>
                  <strong>Droit à l'effacement :</strong> Supprimer vos données personnelles
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 mt-1">•</span>
                <div>
                  <strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 mt-1">•</span>
                <div>
                  <strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré
                </div>
              </li>
            </ul>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> Diplo Scanner ne collecte aucune donnée personnelle identifiable. Toutes
                vos données (historique, préférences) sont stockées localement sur votre appareil et ne sont jamais
                transmises à nos serveurs.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Pour toute question concernant cette politique des cookies ou l'exercice de vos droits :
            </p>
            <div className="bg-teal-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Email :</strong> privacy@diplo-scanner.com
                <br />
                <strong>Réponse :</strong> Sous 30 jours maximum
                <br />
                <strong>Autorité de contrôle :</strong> CNIL (Commission Nationale de l'Informatique et des Libertés)
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
