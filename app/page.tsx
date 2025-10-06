"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Store,
  Hotel,
  Home,
  Phone,
  Mail,
  CheckCircle,
  Shield,
  Clock,
  Instagram,
  Linkedin,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/devis"
                scroll={true}
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Estimation
              </Link>
              <Link
                href="/qualite"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Qualité
              </Link>
              <Link
                href="/carriere"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Carrière
              </Link>
              <Button asChild className="w-full">
                <Link href="/devis" scroll={true} onClick={() => setMobileMenuOpen(false)}>
                  Devis Gratuit
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-5 px-4 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-teal-100 text-teal-800 border-teal-200">Alpes-Maritimes</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Votre partenaire propreté sur la <span className="text-primary">Côte d'Azur</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Services de nettoyage professionnel pour entreprises, commerces, hôtels et copropriétés. Qualité, fiabilité
            et respect de l'environnement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/devis" scroll={true}>
                Estimer mon besoin
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Link href="#contact">
                <Phone className="mr-2 h-5 w-5" />
                Nous contacter
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des solutions de nettoyage adaptées à tous vos besoins professionnels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/nettoyage-bureaux" className="block">
              <Card className="text-center hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Bureaux</CardTitle>
                  <CardDescription>Nettoyage quotidien ou périodique de vos espaces de travail</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/nettoyage-commerces" className="block">
              <Card className="text-center hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <Store className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Commerces</CardTitle>
                  <CardDescription>Entretien de boutiques, magasins et espaces commerciaux</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/nettoyage-hotels-restaurants" className="block">
              <Card className="text-center hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <Hotel className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Hôtels & Restaurants</CardTitle>
                  <CardDescription>Services spécialisés pour l'hôtellerie et la restauration</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/nettoyage-coproprietes" className="block">
              <Card className="text-center hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <Home className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Copropriétés</CardTitle>
                  <CardDescription>Entretien des parties communes et espaces collectifs</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Nettoyage Fin de Chantier Section */}
      <section className="py-10 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">Service Spécialisé</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Nettoyage Fin de Chantier</h2>
            <p className="text-muted-foreground mb-6">
              Un service professionnel pour rendre vos locaux impeccables après travaux. Élimination des poussières,
              débris et résidus avec du matériel adapté.
            </p>
            <Button asChild size="lg">
              <Link href="/devis?service=fin-chantier" scroll={true}>
                Demander un devis
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi Choisir UCT Azur ?</h2>
            <p className="text-xl text-muted-foreground">Notre engagement pour votre satisfaction et l'environnement</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <CheckCircle className="h-16 w-16 text-secondary mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Qualité Garantie</h3>
              <p className="text-muted-foreground">
                Équipes formées et matériel professionnel pour un résultat impeccable
              </p>
            </div>

            <div className="text-center">
              <Shield className="h-16 w-16 text-secondary mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Produits Éco-responsables</h3>
              <p className="text-muted-foreground">
                Utilisation de produits respectueux de l'environnement et de la santé
              </p>
            </div>

            <div className="text-center">
              <Clock className="h-16 w-16 text-secondary mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4">Fiabilité</h3>
              <p className="text-muted-foreground">Interventions ponctuelles et respect des horaires convenus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Témoignages Clients</h2>
            <p className="text-xl text-muted-foreground">La satisfaction de nos clients est notre priorité</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  "Service impeccable depuis 2 ans. Équipe professionnelle et ponctuelle. Nos bureaux n'ont jamais été
                  aussi propres !"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">MH</span>
                  </div>
                  <div>
                    <p className="font-semibold">Marie Hernandez</p>
                    <p className="text-sm text-muted-foreground">Cabinet dentaire</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  "Excellent rapport qualité-prix. L'utilisation de produits écologiques correspond parfaitement à nos
                  valeurs d'entreprise."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">JD</span>
                  </div>
                  <div>
                    <p className="font-semibold">Jean Dupont</p>
                    <p className="text-sm text-muted-foreground">Hôtellerie</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  "Intervention rapide et efficace. Le devis était clair et sans surprise. Je recommande vivement UCT
                  Azur !"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">SL</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sophie Laurent</p>
                    <p className="text-sm text-muted-foreground">Syndic de Copropriété</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à découvrir nos services ?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Obtenez une estimation personnalisée en quelques clics ou contactez-nous directement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/devis" scroll={true}>
                Estimer mon besoin
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Link href="/estimation?type=detailed" scroll={true}>
                Devis sur mesure
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactez-nous</h2>
            <p className="text-xl text-muted-foreground">Notre équipe est à votre disposition</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div className="space-y-3">
                  <p className="font-semibold">Téléphone</p>
                  <div>
                    <p className="text-muted-foreground">07 69 57 46 74</p>
                    <p className="text-sm text-muted-foreground/80">Mr SAIDI (Président)</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">06 35 40 25 04</p>
                    <p className="text-sm text-muted-foreground/80">Mr FUNKE (Directeur général)</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">contact@uct-azur.fr</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Building2 className="h-6 w-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Zone d'intervention</p>
                  <p className="text-muted-foreground">
                    Alpes-Maritimes, Monaco, Var
                    <br />
                    Côte d'Azur et arrière-pays
                  </p>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Horaires d'ouverture</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Lundi - Samedi</span>
                  <span className="text-muted-foreground">8h30 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="text-muted-foreground">Fermé</span>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">Interventions d'urgence possibles sur demande</p>
                </div>
              </CardContent>
            </Card>
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
