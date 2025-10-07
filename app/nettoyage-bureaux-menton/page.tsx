import Image from "next/image"
import Link from "next/link"
import { Building2, CheckCircle, Phone, Mail, MapPin, Clock, Shield, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Nettoyage de Bureaux à Menton | UCT Azur - Entreprise de Nettoyage Professionnel",
  description:
    "UCT Azur, spécialiste du nettoyage de bureaux à Menton. Service professionnel adapté au climat méditerranéen et à la proximité frontalière. Devis gratuit sous 24h.",
  keywords:
    "nettoyage bureaux Menton, entretien bureaux Menton 06500, société nettoyage Menton, nettoyage professionnel Menton, UCT Azur Menton",
}

export default function NettoyageBureauxMenton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/uct-azur-logo.png" alt="UCT Azur Logo" width={32} height={32} className="h-8 w-8" />
            <span className="font-bold text-lg">UCT Azur</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="tel:+33769574674"
              className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-teal-600"
            >
              <Phone className="h-4 w-4" />
              <span>07 69 57 46 74</span>
            </Link>
            <Button asChild size="sm">
              <Link href="/devis">Devis Gratuit</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-teal-600">Menton - Alpes-Maritimes</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Nettoyage de Bureaux à Menton
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
                UCT Azur accompagne les entreprises mentonnaises avec des solutions de nettoyage professionnel adaptées
                au climat méditerranéen et à la proximité frontalière.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                  <Link href="/devis">Obtenir un Devis</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/planifier-rdv">Planifier une Visite</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/menton-blason.svg"
                alt="Blason de la Ville de Menton"
                width={300}
                height={300}
                className="w-64 h-64 md:w-80 md:h-80 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enjeux Spécifiques Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Les Enjeux du Nettoyage de Bureaux à Menton</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ville frontalière au climat méditerranéen exceptionnel, Menton présente des défis spécifiques pour
              l'entretien des espaces professionnels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Proximité Frontalière</h3>
                  <p className="text-muted-foreground">
                    Position stratégique entre la France et l'Italie nécessitant une image professionnelle irréprochable
                    pour les entreprises internationales.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Climat Méditerranéen</h3>
                  <p className="text-muted-foreground">
                    Embruns marins, poussière et pollen nécessitent un entretien régulier et des techniques adaptées au
                    littoral.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Tissu Économique Local</h3>
                  <p className="text-muted-foreground">
                    PME, commerces de proximité et secteur touristique demandent des prestations flexibles et de
                    qualité.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions UCT Azur Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Expertise à Menton</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              UCT Azur déploie des solutions de nettoyage professionnel parfaitement adaptées aux spécificités
              mentonnaises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-teal-600" />
                Prestations Complètes
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Nettoyage quotidien des bureaux et espaces de travail</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Entretien des sanitaires et espaces communs</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Nettoyage des vitres et baies vitrées (anti-sel marin)</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Désinfection des surfaces et points de contact</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Gestion des déchets et recyclage</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Shield className="h-6 w-6 text-teal-600" />
                Adaptations Locales
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Produits adaptés au climat méditerranéen et aux embruns</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Horaires flexibles pour les commerces et PME</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Équipes bilingues français-italien disponibles</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Intervention rapide dans tout Menton et environs</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Respect des normes environnementales</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Zones d'Intervention Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Zones d'Intervention à Menton</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              UCT Azur intervient dans tous les quartiers de Menton et ses environs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-teal-200">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Centre-Ville</h3>
                <p className="text-sm text-muted-foreground">Commerces, cabinets libéraux, agences immobilières</p>
              </CardContent>
            </Card>

            <Card className="border-teal-200">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Garavan</h3>
                <p className="text-sm text-muted-foreground">Bureaux résidentiels, espaces de coworking</p>
              </CardContent>
            </Card>

            <Card className="border-teal-200">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Front de Mer</h3>
                <p className="text-sm text-muted-foreground">Hôtels, restaurants, commerces touristiques</p>
              </CardContent>
            </Card>

            <Card className="border-teal-200">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Carnolès</h3>
                <p className="text-sm text-muted-foreground">PME, entrepôts, zones d'activités</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fréquences Recommandées Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fréquences d'Entretien Recommandées</h2>
            <p className="text-lg text-muted-foreground">
              Nos recommandations adaptées au climat mentonnais et à votre activité.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Bureaux Standard</h3>
                    <p className="text-muted-foreground">
                      Nettoyage quotidien ou 3 fois par semaine selon le trafic. Idéal pour les PME et cabinets
                      professionnels.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Commerces et Accueil Public</h3>
                    <p className="text-muted-foreground">
                      Nettoyage quotidien recommandé, avec passages multiples en haute saison touristique.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Espaces Partagés</h3>
                    <p className="text-muted-foreground">
                      Nettoyage 2 à 3 fois par semaine pour les espaces de coworking et centres d'affaires.
                    </p>
                  </div>
                </div>
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
                  <a href="tel:+33769574674" className="text-muted-foreground hover:text-teal-600 block">
                    07 69 57 46 74
                  </a>
                  <span className="text-xs text-muted-foreground">Mr SAIDI - Président</span>
                </div>
                <div>
                  <a href="tel:+33635402504" className="text-muted-foreground hover:text-teal-600 block">
                    06 35 40 25 04
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
                06500 Menton
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Obtenez Votre Devis Personnalisé</h2>
          <p className="text-lg mb-8 text-teal-50">
            Choisissez entre une estimation en ligne rapide ou un devis détaillé avec visite gratuite de vos locaux à
            Menton.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-gray-100">
              <Link href="/devis">Estimation en ligne</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-teal-700 bg-transparent"
            >
              <Link href="/planifier-rdv">Planifier une visite</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 UCT Azur. Tous droits réservés. | Nettoyage professionnel à Menton et dans les Alpes-Maritimes
          </p>
        </div>
      </footer>
    </div>
  )
}
