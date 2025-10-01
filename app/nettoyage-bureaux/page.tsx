import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Sparkles,
  Trash2,
  Droplets,
  Wind,
  CheckCircle,
  Clock,
  Shield,
  Leaf,
  Phone,
  Instagram,
  Linkedin,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NettoyageBureauxPage() {
  return (
    <div className="min-h-screen bg-background">
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
          src="/modern-clean-office-space-with-natural-light--mini.jpg"
          alt="Bureau moderne et propre"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70 flex items-center">
          <div className="container mx-auto px-4">
            <Badge className="mb-4 bg-teal-100 text-teal-800 border-teal-200">Service Professionnel</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance max-w-2xl">
              Nettoyage de Bureaux : Pour un Environnement de Travail Sain et Productif
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl text-pretty">
              Des espaces de travail impeccables pour le bien-être et la performance de vos équipes
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">L'Importance d'un Environnement de Travail Sain</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Un bureau propre et bien entretenu n'est pas qu'une question d'apparence. C'est un investissement dans la
              santé de vos collaborateurs, leur productivité et l'image de votre entreprise.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chez UCT Azur, nous comprenons que chaque entreprise a des besoins spécifiques. C'est pourquoi nous
              proposons des solutions de nettoyage sur mesure, adaptées à votre activité et à vos horaires.
            </p>
          </div>
        </div>
      </section>

      {/* Services Clés Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Prestations pour Vos Bureaux</h2>
            <p className="text-xl text-muted-foreground">Des services complets pour un environnement impeccable</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Désinfection des Surfaces</CardTitle>
                <CardDescription>
                  Nettoyage et désinfection des bureaux, claviers, téléphones et zones de contact fréquentes
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Trash2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Gestion des Déchets</CardTitle>
                <CardDescription>
                  Collecte, tri sélectif et évacuation des déchets selon les normes environnementales
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Droplets className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Entretien des Sols</CardTitle>
                <CardDescription>
                  Aspiration, lavage et traitement de tous types de revêtements (moquette, parquet, carrelage)
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wind className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Vitrerie</CardTitle>
                <CardDescription>
                  Nettoyage des vitres intérieures et extérieures pour une luminosité optimale
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi Choisir UCT Azur pour Vos Bureaux ?</h2>
            <p className="text-xl text-muted-foreground">Notre engagement pour votre satisfaction</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <Clock className="h-16 w-16 text-secondary mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Flexibilité des Horaires</h3>
              <p className="text-muted-foreground">
                Interventions adaptées à votre emploi du temps : avant l'arrivée de vos équipes, pendant les pauses ou
                en soirée
              </p>
            </div>

            <div className="text-center">
              <Shield className="h-16 w-16 text-secondary mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Discrétion Garantie</h3>
              <p className="text-muted-foreground">
                Équipes formées et discrètes qui respectent la confidentialité de votre entreprise et ne perturbent pas
                votre activité
              </p>
            </div>

            <div className="text-center">
              <Leaf className="h-16 w-16 text-secondary mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Produits Écologiques</h3>
              <p className="text-muted-foreground">
                Utilisation exclusive de produits éco-responsables, respectueux de la santé de vos collaborateurs et de
                l'environnement
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
            <p className="text-xl text-muted-foreground">La satisfaction de nos clients professionnels</p>
          </div>

          <Card className="border-2 border-primary/20">
            <CardContent className="pt-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <p className="text-lg text-muted-foreground mb-6 italic leading-relaxed">
                  "UCT Azur entretient nos bureaux depuis 1 an avec un professionnalisme remarquable. Interventions hors
                  horaires, résultat impeccable, et produits sans odeur forte. Un partenaire de confiance que je
                  recommande vivement."
                </p>
                <div>
                  <p className="font-semibold text-lg">Philippe Moreau</p>
                  <p className="text-muted-foreground">Directeur Administratif</p>
                  <p className="text-sm text-muted-foreground">Cabinet d'expertise comptable - Nice</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à Améliorer Votre Environnement de Travail ?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Obtenez un devis personnalisé pour le nettoyage de vos bureaux en quelques clics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/devis">Demander un devis pour mes bureaux</Link>
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
