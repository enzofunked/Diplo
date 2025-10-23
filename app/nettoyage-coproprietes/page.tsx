"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  Sparkles,
  Trash2,
  Droplets,
  Package,
  CheckCircle,
  Clock,
  Shield,
  MessageSquare,
  Phone,
  Instagram,
  Linkedin,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"

export default function NettoyageCoproprietesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Nettoyage de copropriétés à Menton - UCT Azur",
            description:
              "UCT Azur, société de nettoyage de copropriétés à Menton et dans les Alpes-Maritimes, assure l'entretien des parties communes, la gestion des poubelles et la vitrerie. Prestations régulières et ponctuelles pour syndics et gestionnaires d'immeubles. Interventions fiables, transparentes et adaptées aux besoins de chaque résidence.",
            provider: {
              "@type": "LocalBusiness",
              name: "UCT Azur",
              url: "https://uct-azur.fr/",
              logo: "https://uct-azur.fr/images/logo.png",
              telephone: "+33769574674",
              address: {
                "@type": "PostalAddress",
                streetAddress: "28 Avenue de la Riviera",
                addressLocality: "Menton",
                postalCode: "06500",
                addressRegion: "Alpes-Maritimes",
                addressCountry: "FR",
              },
              sameAs: [
                "https://www.linkedin.com/company/uct-azur/",
                "https://www.instagram.com/uct_azur/",
                "https://www.google.com/maps?cid=2446253044107690229",
              ],
            },
            serviceType: "Nettoyage de copropriétés et immeubles",
            category: "Services de nettoyage professionnels",
            areaServed: [
              { "@type": "City", name: "Menton, France" },
              { "@type": "City", name: "Roquebrune-Cap-Martin, France" },
              { "@type": "City", name: "Monaco, France" },
              { "@type": "City", name: "Nice, France" },
              { "@type": "City", name: "Beaulieu-sur-Mer, France" },
              { "@type": "City", name: "Cagnes-sur-Mer, France" },
              { "@type": "City", name: "Antibes, France" },
            ],
            offers: {
              "@type": "Offer",
              url: "https://uct-azur.fr/nettoyage-coproprietes-menton",
              priceCurrency: "EUR",
              price: "Sur devis",
              availability: "https://schema.org/InStock",
            },
            hasPart: [
              {
                "@type": "Service",
                name: "Entretien des halls et paliers",
                description:
                  "Nettoyage hebdomadaire des entrées, couloirs, escaliers et paliers d'étage selon un planning défini avec le syndic.",
              },
              {
                "@type": "Service",
                name: "Gestion des poubelles et locaux",
                description:
                  "Nettoyage et désinfection des locaux poubelles, sortie et rentrée des conteneurs selon le planning de collecte.",
              },
              {
                "@type": "Service",
                name: "Vitrerie des parties communes",
                description:
                  "Nettoyage régulier des vitres, portes vitrées et miroirs pour une luminosité optimale dans les espaces communs.",
              },
              {
                "@type": "Service",
                name: "Sortie et rentrée des conteneurs",
                description:
                  "Gestion complète des conteneurs d'immeubles : sortie, rentrée et nettoyage des bacs à ordures.",
              },
            ],
          }),
        }}
      />

      {/* Header */}
      <header className="border-b border-border bg-card backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/images/uct-azur-logo.png" alt="UCT Azur Logo" width={32} height={32} className="h-8 w-8" />
            <h1 className="text-2xl font-bold text-foreground">UCT Azur</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link href="/devis" scroll={true} className="text-foreground hover:text-primary transition-colors">
              Estimation
            </Link>
            <Link href="/qualite" className="text-foreground hover:text-primary transition-colors">
              Qualité
            </Link>
            <Link href="/carriere" className="text-foreground hover:text-primary transition-colors">
              Carrière
            </Link>
            <Button asChild>
              <Link href="/devis" scroll={true}>
                Devis Gratuit
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section with Image */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="/clean-modern-building-lobby-bright-hallway.jpg"
          alt="Hall d'immeuble propre et lumineux"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70 flex items-center">
          <div className="container mx-auto px-4">
            <Badge className="mb-4 bg-teal-100 text-teal-800 border-teal-200">Copropriétés</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance max-w-2xl">
              Nettoyage de Copropriétés : Un Entretien Fiable pour des Parties Communes Impeccables
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl text-pretty">
              Des espaces communs propres et accueillants pour la satisfaction de tous les résidents
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">L'Importance d'un Environnement Propre en Copropriété</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Les parties communes sont la vitrine de votre copropriété. Un entretien régulier et soigné contribue non
              seulement au bien-être et à la satisfaction des résidents, mais aussi à la valorisation de votre
              patrimoine immobilier.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              UCT Azur accompagne les syndics et gestionnaires d'immeubles sur Menton, Nice et toute la Côte d'Azur avec
              des prestations de nettoyage fiables, ponctuelles et adaptées aux spécificités de chaque copropriété.
            </p>
          </div>
        </div>
      </section>

      {/* Services Clés Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Prestations pour Vos Copropriétés</h2>
            <p className="text-xl text-muted-foreground">Des services complets pour des parties communes impeccables</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Entretien des Halls et Paliers</CardTitle>
                <CardDescription>
                  Nettoyage quotidien ou hebdomadaire des entrées, escaliers, couloirs et paliers d'étage
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Trash2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Gestion des Poubelles et Locaux</CardTitle>
                <CardDescription>
                  Nettoyage des locaux poubelles, désinfection et sortie/rentrée des conteneurs selon le planning de
                  collecte
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Droplets className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Vitrerie des Parties Communes</CardTitle>
                <CardDescription>
                  Nettoyage des vitres, portes vitrées et miroirs pour une luminosité optimale dans les espaces communs
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Package className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Sortie et Rentrée des Conteneurs</CardTitle>
                <CardDescription>
                  Gestion complète des conteneurs : sortie la veille, rentrée après collecte et nettoyage si nécessaire
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Arguments Clés Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi Choisir UCT Azur pour Votre Copropriété ?</h2>
            <p className="text-xl text-muted-foreground">Notre engagement pour votre tranquillité</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <Clock className="h-16 w-16 text-secondary mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Fiabilité des Plannings</h3>
              <p className="text-muted-foreground">
                Interventions régulières et ponctuelles selon un planning défini avec le syndic. Aucune surprise, une
                organisation sans faille.
              </p>
            </div>

            <div className="text-center">
              <Shield className="h-16 w-16 text-secondary mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Gestion des Accès et des Clés</h3>
              <p className="text-muted-foreground">
                Système sécurisé de gestion des clés et badges d'accès. Équipes formées au respect de la confidentialité
                et de la sécurité des lieux.
              </p>
            </div>

            <div className="text-center">
              <MessageSquare className="h-16 w-16 text-secondary mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Communication Transparente</h3>
              <p className="text-muted-foreground">
                Interlocuteur dédié pour chaque copropriété. Rapports d'intervention, suivi des prestations et
                réactivité en cas de besoin spécifique.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Badge variant="outline" className="text-base px-6 py-2">
              Interventions à Menton, Nice et toute la Côte d'Azur
            </Badge>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Témoignage Client</h2>
            <p className="text-xl text-muted-foreground">La confiance des syndics de copropriété</p>
          </div>

          <Card className="border-2 border-primary/20">
            <CardContent className="pt-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <p className="text-lg text-muted-foreground mb-6 italic leading-relaxed">
                  "UCT Azur intervient sur 3 de nos copropriétés depuis 2 ans. Leur ponctualité et leur sérieux sont
                  remarquables. Les résidents sont satisfaits et nous apprécions la communication fluide avec leur
                  équipe. Un prestataire fiable que nous recommandons."
                </p>
                <div>
                  <p className="font-semibold text-lg">Sophie Laurent</p>
                  <p className="text-muted-foreground">Gestionnaire de Copropriétés</p>
                  <p className="text-sm text-muted-foreground">Cabinet Azur Gestion - Nice</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto text-center">
          <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à Valoriser Votre Copropriété ?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Obtenez un devis personnalisé pour l'entretien de vos parties communes en quelques clics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/devis" scroll={true}>
                Demander un devis pour ma copropriété
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-background">
              <Link href="/#contact">
                <Phone className="mr-2 h-5 w-5" />
                Nous contacter
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image src="/images/uct-azur-logo.png" alt="UCT Azur Logo" width={24} height={24} className="h-6 w-6" />
              <span className="text-lg font-semibold">UCT Azur</span>
            </div>
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <a
                href="https://www.instagram.com/uct_azur/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/uct-azur/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-muted-foreground text-center md:text-right">
              © 2025 UCT Azur. Tous droits réservés.
              <br />
              Services de nettoyage professionnel - Côte d'Azur
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
