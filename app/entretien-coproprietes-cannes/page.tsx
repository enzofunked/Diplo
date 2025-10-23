import Image from "next/image"
import Link from "next/link"
import { Building2, CheckCircle, Phone, Mail, MapPin, Shield, Clock, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Entretien de Copropriétés à Cannes | UCT Azur - Service Professionnel",
  description:
    "Entretien professionnel de copropriétés à Cannes et sur la Côte d'Azur. UCT Azur assure la propreté de vos parties communes, espaces verts et locaux techniques. Devis gratuit.",
  keywords:
    "entretien copropriété Cannes, nettoyage parties communes Cannes, entretien immeuble Cannes, nettoyage copropriété La Croisette, UCT Azur Cannes",
}

export default function EntretienCoproprieteCannesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/uct-azur-logo.png" alt="UCT Azur Logo" width={32} height={32} className="h-8 w-8" />
            <span className="font-bold text-xl">UCT Azur</span>
          </Link>
          <Link
            href="/devis"
            className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium"
          >
            Devis Gratuit
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-teal-100 text-teal-700 hover:bg-teal-100">Service Premium Cannes</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Entretien de Copropriétés à Cannes</h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                UCT Azur assure l'entretien professionnel de votre copropriété à Cannes. Parties communes, espaces
                verts, locaux techniques : nous garantissons une image irréprochable pour votre résidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/devis"
                  className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium text-center"
                >
                  Estimation en ligne
                </Link>
                <Link
                  href="/planifier-rdv"
                  className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors font-medium text-center"
                >
                  Planifier une visite
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/design-mode/2021-logo-cannes_400x400_400x400_300x300(1).png"
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
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Les Enjeux de l'Entretien de Copropriétés à Cannes</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cannes, ville de prestige et de luxe, impose des standards d'entretien élevés pour ses copropriétés.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Sparkles className="h-12 w-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Image de Prestige</h3>
                <p className="text-muted-foreground">
                  Les copropriétés cannoises, notamment sur La Croisette et La Californie, doivent maintenir une image
                  irréprochable reflétant le standing de la ville.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <MapPin className="h-12 w-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Environnement Marin</h3>
                <p className="text-muted-foreground">
                  La proximité de la mer Méditerranée expose les copropriétés aux embruns salins, nécessitant un
                  entretien régulier et adapté des façades et parties communes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Building2 className="h-12 w-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Résidences Haut de Gamme</h3>
                <p className="text-muted-foreground">
                  Les copropriétés cannoises comprennent souvent des équipements premium (piscines, spas, conciergeries)
                  exigeant une expertise spécifique.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Détaillés */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Nos Services d'Entretien pour Copropriétés
          </h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-teal-600" />
                Parties Communes
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Halls et Couloirs</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Nettoyage et désinfection des sols</li>
                    <li>Entretien des murs et plinthes</li>
                    <li>Dépoussiérage des luminaires</li>
                    <li>Nettoyage des boîtes aux lettres</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Escaliers et Ascenseurs</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Lavage des marches et rampes</li>
                    <li>Nettoyage intérieur des cabines</li>
                    <li>Entretien des miroirs et parois</li>
                    <li>Désinfection des boutons</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-teal-600" />
                Espaces Extérieurs
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Espaces Verts</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Ramassage des déchets</li>
                    <li>Nettoyage des allées</li>
                    <li>Entretien du mobilier extérieur</li>
                    <li>Nettoyage des terrasses communes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Parkings et Caves</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Balayage et lavage des sols</li>
                    <li>Nettoyage des rampes d'accès</li>
                    <li>Entretien des locaux vélos</li>
                    <li>Désinfection des locaux poubelles</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-teal-600" />
                Services Premium
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Équipements de Luxe</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Entretien des piscines communes</li>
                    <li>Nettoyage des spas et saunas</li>
                    <li>Entretien des salles de sport</li>
                    <li>Nettoyage des salons de réception</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Vitrerie et Façades</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Nettoyage des baies vitrées</li>
                    <li>Entretien des vérandas</li>
                    <li>Lavage des façades vitrées</li>
                    <li>Traitement anti-sel marin</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zones d'Intervention */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Nos Zones d'Intervention à Cannes</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { zone: "La Croisette", description: "Résidences de prestige en front de mer" },
              { zone: "La Californie", description: "Quartier résidentiel haut de gamme" },
              { zone: "Le Cannet", description: "Copropriétés familiales et modernes" },
              { zone: "Carnot", description: "Centre-ville et immeubles bourgeois" },
              { zone: "La Bocca", description: "Résidences récentes et copropriétés" },
              { zone: "Palm Beach", description: "Résidences en bord de mer" },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 text-teal-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">{item.zone}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi UCT Azur */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Pourquoi Choisir UCT Azur à Cannes ?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Expertise Locale</h3>
                <p className="text-muted-foreground">
                  Connaissance approfondie des spécificités des copropriétés cannoises et des exigences de standing de
                  la ville.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <CheckCircle className="h-12 w-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Personnel Qualifié</h3>
                <p className="text-muted-foreground">
                  Équipes formées aux techniques d'entretien haut de gamme et aux protocoles de sécurité stricts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Disponibilité 7j/7</h3>
                <p className="text-muted-foreground">
                  Interventions planifiées selon vos besoins, y compris en soirée et week-end pour minimiser les
                  nuisances.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center gap-2">
              <Phone className="h-6 w-6 text-teal-600" />
              <h3 className="font-semibold">Téléphone</h3>
              <div className="text-sm space-y-1">
                <div>
                  <a href="tel:+33768488139" className="text-muted-foreground hover:text-teal-600 block">
                    07 68 48 81 39
                  </a>
                  <span className="text-xs text-muted-foreground">Mr SAIDI (Président)</span>
                </div>
                <div>
                  <a href="tel:+33768488140" className="text-muted-foreground hover:text-teal-600 block">
                    07 68 48 81 40
                  </a>
                  <span className="text-xs text-muted-foreground">Mr FUNKE (Directeur général)</span>
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

      {/* CTA Final */}
      <section className="py-16 px-4 bg-teal-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Valorisez Votre Copropriété à Cannes</h2>
          <p className="text-lg mb-8 text-teal-50">
            Obtenez une estimation en ligne en quelques clics ou planifiez une visite gratuite pour un devis
            personnalisé adapté à votre copropriété.
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
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium"
            >
              Planifier une visite
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8 px-4">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} UCT Azur. Tous droits réservés.</p>
          <p className="mt-2">Entretien professionnel de copropriétés à Cannes et sur la Côte d'Azur</p>
        </div>
      </footer>
    </div>
  )
}
