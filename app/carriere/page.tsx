import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, TrendingUp, Heart, Mail, CheckCircle, Briefcase, GraduationCap, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CarrierePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/uct-azur-logo.png" alt="UCT Azur Logo" width={32} height={32} className="h-8 w-8" />
            <h1 className="text-2xl font-bold text-foreground">UCT Azur</h1>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link href="/devis" className="text-foreground hover:text-primary transition-colors">
              Estimation
            </Link>
            <Link href="/carriere" className="text-primary font-medium">
              Carrière
            </Link>
            <Button asChild>
              <Link href="/devis">Devis Gratuit</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Rejoignez-nous</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Construisez votre <span className="text-primary">carrière</span> avec UCT Azur
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Rejoignez une équipe dynamique et passionnée qui place l'humain au cœur de son développement. Ensemble,
            façonnons l'avenir du nettoyage professionnel sur la Côte d'Azur.
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <a href="#postuler">
              <Mail className="mr-2 h-5 w-5" />
              Postuler maintenant
            </a>
          </Button>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi nous rejoindre ?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              UCT Azur, c'est bien plus qu'un emploi. C'est une aventure humaine et professionnelle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-2">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Évolution de carrière</CardTitle>
                <CardDescription>
                  Nous croyons au potentiel de chacun. Formations continues, montée en compétences et opportunités
                  d'évolution vous attendent.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Esprit d'équipe</CardTitle>
                <CardDescription>
                  Intégrez une équipe soudée où l'entraide et la bienveillance sont nos valeurs fondamentales. Votre
                  bien-être est notre priorité.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Équilibre vie pro/perso</CardTitle>
                <CardDescription>
                  Horaires flexibles, respect de votre temps personnel et environnement de travail agréable pour votre
                  épanouissement.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos valeurs</h2>
            <p className="text-xl text-muted-foreground">Ce qui nous anime au quotidien</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <CheckCircle className="h-10 w-10 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground text-sm">
                Nous visons l'excellence dans chaque mission et encourageons le dépassement de soi.
              </p>
            </div>

            <div className="text-center p-6">
              <Users className="h-10 w-10 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Respect</h3>
              <p className="text-muted-foreground text-sm">
                Le respect mutuel et la diversité sont au cœur de notre culture d'entreprise.
              </p>
            </div>

            <div className="text-center p-6">
              <Award className="h-10 w-10 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Professionnalisme</h3>
              <p className="text-muted-foreground text-sm">
                Formation continue et expertise technique pour garantir un service de qualité.
              </p>
            </div>

            <div className="text-center p-6">
              <Heart className="h-10 w-10 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Bienveillance</h3>
              <p className="text-muted-foreground text-sm">
                Un environnement de travail où chacun se sent écouté, valorisé et soutenu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos opportunités</h2>
            <p className="text-xl text-muted-foreground">Découvrez les postes qui pourraient vous correspondre</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Briefcase className="h-8 w-8 text-primary" />
                  <Badge>CDI</Badge>
                </div>
                <CardTitle className="mt-4">Agent de nettoyage</CardTitle>
                <CardDescription>
                  Rejoignez nos équipes terrain pour assurer la propreté de nos clients professionnels.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    Expérience souhaitée mais débutants acceptés
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    Formation assurée par nos soins
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    Horaires flexibles
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  <Badge>CDI</Badge>
                </div>
                <CardTitle className="mt-4">Chef d'équipe</CardTitle>
                <CardDescription>
                  Encadrez et coordonnez les équipes sur le terrain pour garantir la qualité de nos prestations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    Expérience en management requise
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    Autonomie et sens des responsabilités
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    Évolution rapide possible
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="postuler" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à nous rejoindre ?</h2>
            <p className="text-xl text-muted-foreground">
              Envoyez-nous votre candidature et faites partie de l'aventure UCT Azur
            </p>
          </div>

          <Card className="border-2">
            <CardHeader className="text-center">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Comment postuler ?</CardTitle>
              <CardDescription>Suivez ces étapes simples pour nous envoyer votre candidature</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Préparez votre CV</h3>
                  <p className="text-sm text-muted-foreground">
                    Assurez-vous que votre CV est à jour et met en valeur vos compétences et expériences pertinentes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Rédigez une lettre de motivation</h3>
                  <p className="text-sm text-muted-foreground">
                    Expliquez-nous pourquoi vous souhaitez rejoindre UCT Azur et ce que vous pouvez apporter à notre
                    équipe.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Envoyez votre candidature par email</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Envoyez votre CV et lettre de motivation à l'adresse suivante :
                  </p>
                  <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:recrutement@uct-azur.fr" className="text-primary font-semibold hover:underline">
                      contact@uct-azur.fr
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t">
                <p className="text-sm text-muted-foreground text-center">
                  Nous étudions chaque candidature avec attention et vous recontacterons dans les plus brefs délais.
                </p>
              </div>

              <div className="text-center">
                <Button asChild size="lg" className="text-lg px-8">
                  <a href="mailto:recrutement@uct-azur.fr">
                    <Mail className="mr-2 h-5 w-5" />
                    Envoyer ma candidature
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <Link href="/" className="flex items-center gap-2 mb-4 md:mb-0">
              <Image src="/images/uct-azur-logo.png" alt="UCT Azur Logo" width={24} height={24} className="h-6 w-6" />
              <span className="text-lg font-semibold">UCT Azur</span>
            </Link>
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
