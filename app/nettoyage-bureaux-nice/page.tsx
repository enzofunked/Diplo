import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MapPin, Phone, Mail, Building2, Sparkles, Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nettoyage de Bureaux à Nice | UCT Azur - Expert Propreté Professionnelle",
  description:
    "Spécialiste du nettoyage de bureaux à Nice et Alpes-Maritimes. UCT Azur vous accompagne avec des solutions sur-mesure adaptées aux enjeux locaux. Devis gratuit.",
  keywords:
    "nettoyage bureaux Nice, entretien bureaux Nice, société nettoyage Nice, propreté professionnelle Nice, nettoyage Alpes-Maritimes",
  openGraph: {
    title: "Nettoyage de Bureaux à Nice | UCT Azur",
    description:
      "Expert en nettoyage de bureaux à Nice. Solutions professionnelles adaptées au climat méditerranéen et aux spécificités locales.",
    type: "website",
  },
}

export default function NettoyageBureauxNicePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/uct-azur-logo.png" alt="UCT Azur Logo" width={32} height={32} className="h-8 w-8" />
            <span className="text-xl font-bold text-primary">UCT Azur</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link href="/estimation" className="text-sm font-medium hover:text-primary transition-colors">
              Estimation
            </Link>
            <Link href="/qualite" className="text-sm font-medium hover:text-primary transition-colors">
              Qualité
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Link href="/estimation">
            <Button className="bg-primary hover:bg-primary/90">Devis Gratuit</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-teal-600" />
                <span className="text-sm font-medium text-teal-600">Nice</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Nettoyage de Bureaux à Nice
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
                Expert en propreté professionnelle, UCT Azur accompagne les entreprises niçoises avec des solutions de
                nettoyage adaptées aux spécificités du climat méditerranéen et de l'environnement local.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/estimation">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700 w-full sm:w-auto">
                    Estimation gratuite
                  </Button>
                </Link>
                <Link href="/#contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/design-mode/Nice_Logo.svg.png"
                alt="Ville de Nice"
                width={400}
                height={400}
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enjeux Locaux Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Les Enjeux du Nettoyage de Bureaux à Nice</h2>
            <p className="text-lg text-muted-foreground">
              Nice présente des défis spécifiques en matière de propreté professionnelle que nous maîtrisons
              parfaitement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-teal-100 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Climat Méditerranéen</h3>
                <p className="text-muted-foreground">
                  Le climat niçois génère une accumulation rapide de poussière et de pollen. Nos protocoles sont adaptés
                  pour maintenir une propreté optimale toute l'année.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Bureaux en Front de Mer</h3>
                <p className="text-muted-foreground">
                  Les embruns marins et l'humidité saline nécessitent des techniques de nettoyage spécifiques pour
                  protéger vos équipements et surfaces.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-teal-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Normes Sanitaires Renforcées</h3>
                <p className="text-muted-foreground">
                  Dans une ville touristique comme Nice, le respect des normes d'hygiène est crucial pour l'image de
                  votre entreprise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Zones d'Intervention Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Zones d'Intervention à Nice</h2>
            <p className="text-lg text-muted-foreground">
              UCT Azur intervient dans tous les quartiers d'affaires de Nice et ses environs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-teal-600" />
                Centre-Ville & Quartiers d'Affaires
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Carré d'Or et Avenue Jean Médecin</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Arenas Business Park</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Nice Méridia et Grand Arenas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Port de Nice et front de mer</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-teal-600" />
                Zones Périphériques
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Nice Nord et L'Arénas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Saint-Isidore et zones industrielles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Aéroport Nice Côte d'Azur</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Sophia Antipolis et technopôle</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Solutions de Nettoyage pour Bureaux</h2>
            <p className="text-lg text-muted-foreground">
              Des prestations complètes adaptées aux besoins des entreprises niçoises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Nettoyage Quotidien</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Dépoussiérage et aspiration des surfaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Nettoyage des sanitaires et points d'eau</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Vidage des corbeilles et gestion des déchets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Désinfection des points de contact</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Nettoyage Approfondi</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Lavage des vitres et baies vitrées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Décapage et traitement des sols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Nettoyage des moquettes et tapis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Entretien des espaces communs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Services Spécialisés</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Nettoyage après événements professionnels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Remise en état après travaux</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Désinfection renforcée (protocole COVID)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Entretien des espaces verts privatifs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Fournitures & Produits</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Produits d'hygiène écologiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Papier toilette et essuie-mains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Savons et gels hydroalcooliques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Sacs poubelles et consommables</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pourquoi UCT Azur Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi Choisir UCT Azur à Nice ?</h2>
            <p className="text-lg text-muted-foreground">
              Une expertise locale reconnue et un engagement qualité sans compromis.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-teal-200">
              <CardContent className="pt-6 text-center">
                <div className="h-16 w-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expertise Locale</h3>
                <p className="text-muted-foreground">
                  Implantés à Nice, nous connaissons parfaitement les spécificités du territoire et les attentes des
                  entreprises locales.
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-200">
              <CardContent className="pt-6 text-center">
                <div className="h-16 w-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Qualité Certifiée</h3>
                <p className="text-muted-foreground">
                  Personnel formé, produits professionnels et contrôles qualité réguliers pour garantir votre
                  satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-200">
              <CardContent className="pt-6 text-center">
                <div className="h-16 w-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Réactivité 24/7</h3>
                <p className="text-muted-foreground">
                  Une équipe disponible et réactive pour répondre à vos besoins, même en urgence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-teal-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Obtenez Votre Devis en Ligne ou avec une Visite</h2>
          <p className="text-lg mb-8 text-teal-50">
            Faites une estimation en ligne gratuite en quelques clics ou planifiez une visite gratuite pour un devis
            personnalisé et détaillé. Notre équipe d'experts vous accompagne dans votre projet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/estimation">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Estimation en ligne
              </Button>
            </Link>
            <Link href="/planifier-rdv">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white/10"
              >
                Planifier une visite
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center gap-2">
              <Phone className="h-6 w-6 text-teal-600" />
              <h3 className="font-semibold">Téléphone</h3>
              <div className="space-y-2">
                <div>
                  <a href="tel:+33769574674" className="text-muted-foreground hover:text-teal-600 block">
                    07 69 57 46 74
                  </a>
                  <p className="text-xs text-muted-foreground/80">Mr SAIDI (Président)</p>
                </div>
                <div>
                  <a href="tel:+33635402504" className="text-muted-foreground hover:text-teal-600 block">
                    06 35 40 25 04
                  </a>
                  <p className="text-xs text-muted-foreground/80">Mr FUNKE (Directeur général)</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="h-6 w-6 text-teal-600" />
              <h3 className="font-semibold">Email</h3>
              <a href="mailto:contact@uct-azur.fr" className="text-muted-foreground hover:text-teal-600">
                contact@uct-azur.fr
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="h-6 w-6 text-teal-600" />
              <h3 className="font-semibold">Adresse</h3>
              <p className="text-muted-foreground">Nice, 0600
</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-400">© 2025 UCT Azur. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
