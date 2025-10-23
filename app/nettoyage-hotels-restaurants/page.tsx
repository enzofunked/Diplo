"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Sparkles,
  ChefHat,
  Users,
  Shirt,
  CheckCircle,
  Clock,
  Shield,
  GraduationCap,
  Phone,
  Instagram,
  Linkedin,
  Hotel,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"

export default function NettoyageHotelsRestaurantsPage() {
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
            name: "Nettoyage hôtels et restaurants à Menton - UCT Azur",
            description:
              "Entreprise spécialisée dans le nettoyage professionnel pour hôtels et restaurants à Menton et dans les Alpes-Maritimes. UCT Azur propose des prestations haut de gamme conformes aux normes HACCP : entretien des chambres, cuisines professionnelles, espaces communs et gestion du linge. Interventions discrètes, flexibles et adaptées au secteur HORECA.",
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
            serviceType: "Nettoyage hôtels et restaurants",
            category: "Services de nettoyage HORECA",
            areaServed: [
              { "@type": "City", name: "Menton, France" },
              { "@type": "City", name: "Roquebrune-Cap-Martin, France" },
              { "@type": "City", name: "Monaco, France" },
              { "@type": "City", name: "Beaulieu-sur-Mer, France" },
              { "@type": "City", name: "Nice, France" },
              { "@type": "City", name: "Cannes, France" },
              { "@type": "City", name: "Antibes, France" },
            ],
            offers: {
              "@type": "Offer",
              url: "https://uct-azur.fr/nettoyage-hotels-restaurants-menton",
              priceCurrency: "EUR",
              price: "Sur devis",
              availability: "https://schema.org/InStock",
            },
            hasPart: [
              {
                "@type": "Service",
                name: "Nettoyage des chambres et sanitaires",
                description:
                  "Désinfection complète des chambres, salles de bain et espaces privatifs selon les protocoles hôteliers.",
              },
              {
                "@type": "Service",
                name: "Nettoyage des cuisines professionnelles",
                description:
                  "Nettoyage et dégraissage complet des cuisines selon les normes HACCP, incluant plans de travail, équipements et sols.",
              },
              {
                "@type": "Service",
                name: "Entretien des espaces communs",
                description:
                  "Nettoyage des halls, salles de restaurant, salons et zones d'accueil pour une image impeccable auprès de la clientèle.",
              },
              {
                "@type": "Service",
                name: "Gestion du linge hôtelier",
                description:
                  "Collecte, traitement et gestion du linge de maison (draps, serviettes, nappes) en partenariat avec des blanchisseries agréées.",
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
            <Link href="/devis" className="text-foreground hover:text-primary transition-colors">
              Estimation
            </Link>
            <Link href="/qualite" className="text-foreground hover:text-primary transition-colors">
              Qualité
            </Link>
            <Link href="/carriere" className="text-foreground hover:text-primary transition-colors">
              Carrière
            </Link>
            <Button asChild>
              <Link href="/devis">Devis Gratuit</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section with Image */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="/luxury-hotel-lobby-elegant-restaurant-interior.jpg"
          alt="Hall d'hôtel luxueux et salle de restaurant élégante"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70 flex items-center">
          <div className="container mx-auto px-4">
            <Badge className="mb-4 bg-teal-100 text-teal-800 border-teal-200">Secteur HORECA</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance max-w-2xl">
              Nettoyage Hôtels & Restaurants : L'Exigence au Service de votre Image
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl text-pretty">
              Des prestations haut de gamme pour répondre aux standards les plus élevés de l'hôtellerie et de la
              restauration
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">L'Excellence au Cœur de l'Expérience Client</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Dans le secteur de l'hôtellerie et de la restauration, la propreté n'est pas négociable. Elle est le
              fondement de l'expérience client et le reflet direct de votre établissement. Les standards d'hygiène
              drastiques imposés par la réglementation HACCP exigent une expertise pointue et une rigueur sans faille.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              UCT Azur comprend les enjeux spécifiques du secteur HORECA. Nos équipes sont formées aux protocoles
              d'hygiène les plus stricts et interviennent avec discrétion pour préserver l'atmosphère de votre
              établissement tout en garantissant une propreté irréprochable.
            </p>
          </div>
        </div>
      </section>

      {/* Services Clés Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Prestations Spécialisées HORECA</h2>
            <p className="text-xl text-muted-foreground">
              Des services adaptés aux exigences de l'hôtellerie et de la restauration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Chambres & Sanitaires</CardTitle>
                <CardDescription>
                  Désinfection complète des chambres, salles de bains et espaces privatifs selon protocoles hôteliers
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <ChefHat className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Cuisines Professionnelles</CardTitle>
                <CardDescription>
                  Nettoyage et dégraissage des cuisines selon normes HACCP, hottes, plans de travail et équipements
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Espaces Communs</CardTitle>
                <CardDescription>
                  Entretien des halls, salles de restaurant, bars, salons et zones de réception pour une image
                  impeccable
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shirt className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Gestion des Linges</CardTitle>
                <CardDescription>
                  Collecte, traitement et gestion du linge de maison (draps, serviettes, nappes) en partenariat avec
                  blanchisseries
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi UCT Azur pour Votre Établissement ?</h2>
            <p className="text-xl text-muted-foreground">Notre expertise au service de l'excellence hôtelière</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <Shield className="h-16 w-16 text-secondary mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Normes HACCP Respectées</h3>
              <p className="text-muted-foreground">
                Respect strict des protocoles d'hygiène alimentaire et des normes sanitaires en vigueur dans
                l'hôtellerie-restauration
              </p>
            </div>

            <div className="text-center">
              <GraduationCap className="h-16 w-16 text-secondary mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Personnel Formé & Discret</h3>
              <p className="text-muted-foreground">
                Équipes spécialement formées aux exigences du secteur HORECA, discrètes et respectueuses de vos clients
                et de votre image
              </p>
            </div>

            <div className="text-center">
              <Clock className="h-16 w-16 text-secondary mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Flexibilité Totale</h3>
              <p className="text-muted-foreground">
                Interventions adaptées à vos horaires d'ouverture : nuit, tôt le matin, entre les services. Nous nous
                adaptons à votre activité
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Témoignage Client</h2>
            <p className="text-xl text-muted-foreground">La confiance de nos partenaires hôteliers</p>
          </div>

          <Card className="border-2 border-primary/20">
            <CardContent className="pt-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <Hotel className="h-8 w-8 text-primary" />
                </div>
                <p className="text-lg text-muted-foreground mb-6 italic leading-relaxed">
                  "UCT Azur entretient notre hôtel 4 étoiles et notre restaurant depuis 2 ans. Leur discrétion et leur
                  maîtrise des protocoles HACCP sont exemplaires. Les chambres sont impeccables et nos clients
                  apprécient constamment la propreté. Un partenaire fiable et essentiel pour notre standing."
                </p>
                <div>
                  <p className="font-semibold text-lg">Isabelle Fontaine</p>
                  <p className="text-muted-foreground">Directrice Générale</p>
                  <p className="text-sm text-muted-foreground">Hôtel Le Riviera Palace - Cannes</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à Élever Vos Standards de Propreté ?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Obtenez une offre personnalisée adaptée aux spécificités de votre établissement hôtelier ou restaurant
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/devis">Personnaliser mon offre Horeca</Link>
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
