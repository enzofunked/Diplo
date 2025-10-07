import Image from "next/image"
import Link from "next/link"
import { Building2, CheckCircle, Phone, Mail, Sparkles, Shield, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Nettoyage de Vitrerie à Cannes | UCT Azur - Expert Vitres & Baies Vitrées",
  description:
    "Spécialiste du nettoyage de vitrerie à Cannes. Solutions professionnelles anti-embruns pour résidences de prestige, bureaux et commerces sur La Croisette. Devis gratuit.",
  keywords:
    "nettoyage vitrerie Cannes, lavage vitres Cannes, nettoyage baies vitrées Cannes, vitrier Cannes, nettoyage vitres La Croisette, entretien vitres Cannes",
}

export default function NettoyageVitrerieCannesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/uct-azur-logo.png" alt="UCT Azur Logo" width={32} height={32} className="h-8 w-8" />
            <span className="font-bold text-lg">UCT Azur</span>
          </Link>
          <Link
            href="/devis"
            className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors text-sm md:text-base"
          >
            Devis Gratuit
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-teal-600">Cannes - Côte d'Azur</Badge>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Nettoyage de Vitrerie à Cannes</h1>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                Expert en nettoyage de vitres et baies vitrées pour les résidences de prestige, bureaux et commerces
                cannois. Solutions professionnelles anti-embruns adaptées au climat méditerranéen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/devis"
                  className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors text-center font-medium"
                >
                  Estimation en ligne
                </Link>
                <Link
                  href="/planifier-rdv"
                  className="bg-white text-teal-600 border-2 border-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors text-center font-medium"
                >
                  Planifier une visite
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2021-logo-cannes_400x400_400x400_300x300-cZ0FgTL501zgRd6zXgkObvVf6G9a3v.png"
                alt="Logo Ville de Cannes"
                width={300}
                height={300}
                className="w-full max-w-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enjeux Spécifiques Cannes */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Les Défis du Nettoyage de Vitrerie à Cannes
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <Sparkles className="h-10 w-10 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Prestige & Image de Marque</h3>
                <p className="text-muted-foreground text-sm">
                  À Cannes, ville du luxe et du cinéma, des vitres impeccables sont essentielles pour maintenir l'image
                  de prestige de votre établissement, particulièrement sur La Croisette et dans les quartiers haut de
                  gamme.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Shield className="h-10 w-10 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Embruns Marins Intensifs</h3>
                <p className="text-muted-foreground text-sm">
                  La proximité de la mer Méditerranée expose les vitres à des dépôts salins constants. Les résidences en
                  front de mer nécessitent un entretien régulier avec des produits anti-sel spécifiques.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Building2 className="h-10 w-10 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Grandes Surfaces Vitrées</h3>
                <p className="text-muted-foreground text-sm">
                  Les résidences de standing et bureaux cannois privilégient les baies vitrées panoramiques pour
                  profiter de la vue. Ces grandes surfaces exigent un équipement professionnel et une expertise
                  technique.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions UCT Azur */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Notre Expertise pour Cannes et La Croisette
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-teal-600" />
                Techniques Professionnelles Adaptées
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Produits anti-sel premium :</strong> Formulations spéciales pour éliminer les dépôts marins
                    sans traces
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Eau osmosée :</strong> Garantit un résultat sans traces ni résidus calcaires
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Perches télescopiques :</strong> Accès sécurisé aux grandes hauteurs sans nacelle
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Raclettes professionnelles :</strong> Finition impeccable sur toutes surfaces vitrées
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Clock className="h-6 w-6 text-teal-600" />
                Fréquences Recommandées par Zone
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">La Croisette & Front de Mer</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>Hebdomadaire à bi-mensuel</strong> - Exposition maximale aux embruns et exigence de prestige
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">Centre-Ville & La Californie</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>Bi-mensuel à mensuel</strong> - Équilibre entre image et exposition modérée
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">Le Cannet & Zones Résidentielles</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>Mensuel à trimestriel</strong> - Entretien régulier pour maintenir la clarté
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-teal-50 border-teal-200">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Services Complémentaires</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Nettoyage de vérandas et verrières</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Traitement anti-calcaire longue durée</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Nettoyage de vitrines commerciales</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Intervention en hauteur sécurisée</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pourquoi UCT Azur */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Pourquoi Choisir UCT Azur à Cannes ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="font-semibold mb-2">Expertise Locale</h3>
                <p className="text-sm text-muted-foreground">
                  Connaissance approfondie des contraintes climatiques et architecturales de Cannes
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="font-semibold mb-2">Équipement Premium</h3>
                <p className="text-sm text-muted-foreground">
                  Matériel professionnel haut de gamme adapté aux résidences de prestige
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="font-semibold mb-2">Flexibilité Horaire</h3>
                <p className="text-sm text-muted-foreground">
                  Interventions adaptées à vos contraintes, y compris en dehors des heures d'ouverture
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="font-semibold mb-2">Résultat Impeccable</h3>
                <p className="text-sm text-muted-foreground">
                  Garantie de vitres parfaitement propres, sans traces ni résidus
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Contactez-nous</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center gap-2">
              <Phone className="h-6 w-6 text-teal-600" />
              <h3 className="font-semibold">Téléphone</h3>
              <div className="text-sm space-y-1">
                <div>
                  <a href="tel:+33768488139" className="text-muted-foreground hover:text-teal-600 block">
                    07 68 48 81 39
                  </a>
                  <span className="text-xs text-muted-foreground">Mr SAIDI - Président</span>
                </div>
                <div>
                  <a href="tel:+33768488140" className="text-muted-foreground hover:text-teal-600 block">
                    07 68 48 81 40
                  </a>
                  <span className="text-xs text-muted-foreground">Mr FUNKE - Directeur général</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Mail className="h-6 w-6 text-teal-600" />
              <h3 className="font-semibold">Email</h3>
              <a href="mailto:contact@uct-azur.fr" className="text-muted-foreground hover:text-teal-600 text-sm">
                contact@uct-azur.fr
              </a>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Building2 className="h-6 w-6 text-teal-600" />
              <h3 className="font-semibold">Adresse</h3>
              <p className="text-muted-foreground text-sm">
                06400 Cannes
                <br />
                Alpes-Maritimes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-teal-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Des Vitres Impeccables pour Votre Prestige Cannois</h2>
          <p className="text-lg mb-8 text-teal-50">
            Obtenez une estimation en ligne en quelques clics ou planifiez une visite gratuite pour un devis détaillé
            adapté à vos besoins spécifiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="bg-white text-teal-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Estimation en ligne
            </Link>
            <Link
              href="/planifier-rdv"
              className="bg-teal-700 text-white px-8 py-3 rounded-lg hover:bg-teal-800 transition-colors font-medium border-2 border-white"
            >
              Planifier une visite
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8 px-4">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; 2025 UCT Azur. Tous droits réservés.</p>
          <p className="mt-2">Expert en nettoyage professionnel dans les Alpes-Maritimes</p>
        </div>
      </footer>
    </div>
  )
}
