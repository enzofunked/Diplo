import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Store,
  Sparkles,
  Droplets,
  Users,
  Hand,
  CheckCircle,
  Clock,
  Zap,
  Star,
  Phone,
  Instagram,
  Linkedin,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NettoyageCommercesPage() {
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
          src="/clean-modern-retail-store-interior-bright-lighting.jpg"
          alt="Intérieur de magasin propre et lumineux"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70 flex items-center">
          <div className="container mx-auto px-4">
            <Badge className="mb-4 bg-teal-100 text-teal-800 border-teal-200">Service Commercial</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance max-w-2xl">
              Nettoyage de Commerces : Valorisez votre Image et Accueillez vos Clients
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl text-pretty">
              Un espace commercial impeccable pour une expérience client exceptionnelle
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">La Propreté : Un Atout Majeur pour Votre Commerce</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Dans le commerce, la première impression est déterminante. Un espace propre, lumineux et accueillant
              influence directement la perception de votre marque et l'expérience de vos clients. La propreté n'est pas
              qu'une question d'hygiène, c'est un véritable argument de vente.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              UCT Azur accompagne les commerçants de la Côte d'Azur avec des solutions de nettoyage adaptées à chaque
              type de commerce : boutiques de mode, épiceries fines, showrooms, magasins spécialisés et bien plus
              encore.
            </p>
          </div>
        </div>
      </section>

      {/* Services Clés Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Prestations pour Vos Commerces</h2>
            <p className="text-xl text-muted-foreground">Des services complets pour un espace commercial impeccable</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Entretien des Vitrines</CardTitle>
                <CardDescription>
                  Nettoyage intérieur et extérieur des vitrines pour une transparence parfaite et une visibilité
                  optimale
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Droplets className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Nettoyage des Sols Spécifiques</CardTitle>
                <CardDescription>
                  Traitement adapté à chaque type de revêtement : parquet, carrelage, marbre, béton ciré
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Gestion des Vestiaires/Sanitaires</CardTitle>
                <CardDescription>
                  Entretien et désinfection des espaces réservés au personnel et aux clients
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Hand className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Désinfection des Points de Contact</CardTitle>
                <CardDescription>
                  Nettoyage régulier des poignées, comptoirs, caisses et zones à forte fréquentation
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi Choisir UCT Azur pour Votre Commerce ?</h2>
            <p className="text-xl text-muted-foreground">Notre engagement pour votre réussite commerciale</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <Zap className="h-16 w-16 text-secondary mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Rapidité d'Intervention</h3>
              <p className="text-muted-foreground">
                Interventions express pour répondre à vos besoins urgents : événements spéciaux, affluence imprévue ou
                situations exceptionnelles
              </p>
            </div>

            <div className="text-center">
              <Clock className="h-16 w-16 text-secondary mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Adaptabilité aux Horaires</h3>
              <p className="text-muted-foreground">
                Interventions avant l'ouverture, après la fermeture ou pendant les heures creuses pour ne jamais
                perturber votre activité commerciale
              </p>
            </div>

            <div className="text-center">
              <Star className="h-16 w-16 text-secondary mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Brillance des Surfaces</h3>
              <p className="text-muted-foreground">
                Techniques professionnelles et produits de qualité pour un rendu éclatant qui valorise votre espace de
                vente
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
            <p className="text-xl text-muted-foreground">La satisfaction de nos clients commerçants</p>
          </div>

          <Card className="border-2 border-primary/20">
            <CardContent className="pt-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <Store className="h-8 w-8 text-primary" />
                </div>
                <p className="text-lg text-muted-foreground mb-6 italic leading-relaxed">
                  "Depuis que nous travaillons avec UCT Azur, nos clients nous complimentent régulièrement sur la
                  propreté de notre boutique. L'équipe intervient chaque matin avant notre ouverture à 10h, et le
                  résultat est toujours impeccable. Les vitrines brillent, les sols sont éclatants et l'odeur est
                  agréable sans être entêtante. Leur flexibilité pendant les périodes de soldes est également très
                  appréciable. Un service professionnel qui contribue vraiment à notre image de marque."
                </p>
                <div>
                  <p className="font-semibold text-lg">Isabelle Fontaine</p>
                  <p className="text-muted-foreground">Gérante</p>
                  <p className="text-sm text-muted-foreground">Boutique de prêt-à-porter - Cannes</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à Valoriser Votre Espace Commercial ?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Obtenez un devis personnalisé pour le nettoyage de votre commerce en quelques clics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/devis">Obtenir un devis pour mon magasin</Link>
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
