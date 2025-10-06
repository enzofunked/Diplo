"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar, CheckCircle, Zap, Users, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"

export default function DevisChoicePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/uct-azur-logo-new.png"
              alt="UCT Azur Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <h1 className="text-2xl font-bold text-foreground">UCT Azur</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link href="/devis" className="text-primary font-medium">
              Devis
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-5 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Choisissez votre type de devis</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Quel type de <span className="text-primary">devis</span> souhaitez-vous ?
          </h1>
          <p className="text-xl text-muted-foreground mb-3 max-w-3xl mx-auto text-pretty">
            Nous proposons deux solutions adaptées à vos besoins : un devis rapide automatisé ou une estimation
            détaillée avec visite sur site.
          </p>
        </div>
      </section>

      {/* Choice Cards Section */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Automated Quote Card */}
            <Link href="/estimation?type=automatise" className="block">
              <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group cursor-pointer h-full">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    <Zap className="w-3 h-3 mr-1" />
                    Rapide
                  </Badge>
                </div>

                <CardHeader className="pb-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Clock className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Devis 100% Automatisé</CardTitle>
                      <CardDescription className="text-lg">Disponible en 5 minutes</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="font-semibold text-primary mb-2">Parfait pour :</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Bureaux standards (jusqu'à 500m²)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Commerces de proximité
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Nettoyage régulier simple
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Estimation immédiate
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm">Questionnaire en ligne</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm">Calcul automatique des prix</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm">Devis PDF instantané</span>
                    </div>
                  </div>

                  <div className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors h-11 px-8 py-2 rounded-md flex items-center justify-center font-medium group-hover:bg-primary/90">
                    Commencer mon devis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>

                  <p className="text-xs text-muted-foreground text-center">⏱️ Temps estimé : 5 minutes</p>
                </CardContent>
              </Card>
            </Link>

            {/* Detailed Quote Card */}
            <Link href="/planifier-rdv" className="block">
              <Card className="relative overflow-hidden border-2 hover:border-secondary/50 transition-all duration-300 hover:shadow-xl group bg-gradient-to-br from-secondary/5 to-secondary/10 cursor-pointer h-full">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                    <Users className="w-3 h-3 mr-1" />
                    Détail
                  </Badge>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-secondary/20 rounded-lg">
                      <Calendar className="h-8 w-8 text-secondary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Devis avec Visite</CardTitle>
                      <CardDescription className="text-lg">Estimation détaillée</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20">
                    <h3 className="font-semibold text-secondary mb-2">Idéal pour :</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Grandes surfaces &gt;500m²
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Hôtels et restaurants
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Besoins spécifiques complexes
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Conseils personnalisés
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm">Rendez-vous sur site</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm">Analyse personnalisée</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm">Devis détaillé sous 48h</span>
                    </div>
                  </div>

                  <div className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors h-11 px-8 py-2 rounded-md flex items-center justify-center font-medium group-hover:bg-secondary/90">
                    Planifier une visite
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>

                  <p className="text-xs text-muted-foreground text-center">📅 Rendez-vous sous 24h • Devis sous 48h</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comparaison des options</h2>
            <p className="text-muted-foreground">Choisissez la solution qui correspond le mieux à vos besoins</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-lg border border-border">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold">Critères</th>
                  <th className="text-center p-4 font-semibold text-primary">Devis Automatisé</th>
                  <th className="text-center p-4 font-semibold text-secondary">Devis avec Visite</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-border/50">
                  <td className="p-4 font-medium">Délai d'obtention</td>
                  <td className="p-4 text-center text-green-600 font-medium">5 minutes</td>
                  <td className="p-4 text-center text-blue-600 font-medium">48h après visite</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-4 font-medium">Précision</td>
                  <td className="p-4 text-center">Estimation standard</td>
                  <td className="p-4 text-center">Très précise</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-4 font-medium">Personnalisation</td>
                  <td className="p-4 text-center">Limitée</td>
                  <td className="p-4 text-center">Complète</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Conseils inclus</td>
                  <td className="p-4 text-center">Basiques</td>
                  <td className="p-4 text-center">Détaillés</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <Image
                src="/images/uct-azur-logo-new.png"
                alt="UCT Azur Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-lg font-semibold">UCT Azur</span>
            </div>
            <p className="text-muted-foreground text-center md:text-right">
              © 2024 UCT Azur. Tous droits réservés.
              <br />
              Services de nettoyage professionnel - Côte d'Azur
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
