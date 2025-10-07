import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Phone, Mail, CheckCircle, Shield, Clock, Sparkles } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Entretien de Copropriétés à Menton | UCT Azur - Nettoyage Professionnel",
  description:
    "UCT Azur, expert en entretien de copropriétés à Menton. Services adaptés au climat méditerranéen et à l'architecture locale. Devis gratuit sous 24h.",
  keywords:
    "entretien copropriété Menton, nettoyage copropriété Menton, entretien parties communes Menton, nettoyage immeuble Menton, syndic Menton, UCT Azur",
  openGraph: {
    title: "Entretien de Copropriétés à Menton | UCT Azur",
    description:
      "Expert en entretien de copropriétés à Menton. Solutions professionnelles adaptées au climat méditerranéen.",
    type: "website",
  },
}

export default function EntretienCoproprietesMentonPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/uct-azur-logo.png" alt="UCT Azur Logo" width={32} height={32} className="h-8 w-8" />
            <span className="font-bold text-xl">UCT Azur</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="tel:0769574674"
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
      <section className="py-16 px-4 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-teal-100 text-teal-700 hover:bg-teal-200">Menton - Alpes-Maritimes</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Entretien de Copropriétés à Menton</h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                UCT Azur accompagne les syndics et copropriétaires mentonnais avec des solutions d'entretien adaptées au
                climat méditerranéen et à l'architecture locale. De Garavan au centre-ville, nous préservons la qualité
                de vos espaces communs.
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
                alt="Blason de Menton"
                width={300}
                height={300}
                className="w-64 h-64 md:w-80 md:h-80 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enjeux Locaux Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Les Enjeux de l'Entretien de Copropriétés à Menton</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ville frontalière au climat méditerranéen, Menton présente des défis spécifiques pour l'entretien des
              copropriétés.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Embruns Marins</h3>
                <p className="text-muted-foreground">
                  La proximité de la mer Méditerranée expose les façades et parties communes au sel marin, nécessitant
                  un entretien régulier et des produits adaptés.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Architecture Belle Époque</h3>
                <p className="text-muted-foreground">
                  Le patrimoine architectural mentonnais requiert des techniques d'entretien respectueuses des matériaux
                  anciens et des finitions délicates.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Jardins et Espaces Verts</h3>
                <p className="text-muted-foreground">
                  Ville des jardins, Menton compte de nombreuses copropriétés avec espaces verts nécessitant un
                  entretien paysager et un nettoyage régulier des abords.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Offre Complète pour Vos Copropriétés</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Des solutions d'entretien adaptées aux spécificités des copropriétés mentonnaises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Parties Communes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Nettoyage des halls d'entrée et escaliers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Entretien des paliers et couloirs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Nettoyage des ascenseurs et interphones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Dépoussiérage des luminaires et rampes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Espaces Extérieurs</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Nettoyage des cours et allées</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Entretien des jardins et espaces verts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Gestion des locaux poubelles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Sortie et rentrée des conteneurs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Vitrerie et Façades</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Nettoyage des vitrages parties communes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Traitement anti-sel pour façades maritimes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Nettoyage des portes vitrées et miroirs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Entretien des garde-corps et balustrades</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Services Complémentaires</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Nettoyage des parkings et caves</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Désinfection des espaces communs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Intervention après travaux</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Nettoyage de fin de chantier</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions UCT Azur Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Les Solutions UCT Azur pour Menton</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Une expertise locale au service de vos copropriétés.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-teal-200">
              <CardContent className="pt-6">
                <div className="h-10 w-10 bg-teal-100 rounded-lg flex items-center justify-center mb-3">
                  <Shield className="h-5 w-5 text-teal-600" />
                </div>
                <h3 className="font-semibold mb-2">Produits Anti-Sel</h3>
                <p className="text-sm text-muted-foreground">
                  Gamme spécifique pour lutter contre les dépôts salins et protéger vos surfaces.
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-200">
              <CardContent className="pt-6">
                <div className="h-10 w-10 bg-teal-100 rounded-lg flex items-center justify-center mb-3">
                  <Clock className="h-5 w-5 text-teal-600" />
                </div>
                <h3 className="font-semibold mb-2">Horaires Flexibles</h3>
                <p className="text-sm text-muted-foreground">
                  Interventions adaptées au rythme de vie des résidents et aux contraintes locales.
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-200">
              <CardContent className="pt-6">
                <div className="h-10 w-10 bg-teal-100 rounded-lg flex items-center justify-center mb-3">
                  <Building2 className="h-5 w-5 text-teal-600" />
                </div>
                <h3 className="font-semibold mb-2">Respect du Patrimoine</h3>
                <p className="text-sm text-muted-foreground">
                  Techniques douces pour préserver l'architecture Belle Époque et les matériaux anciens.
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-200">
              <CardContent className="pt-6">
                <div className="h-10 w-10 bg-teal-100 rounded-lg flex items-center justify-center mb-3">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                </div>
                <h3 className="font-semibold mb-2">Équipes Formées</h3>
                <p className="text-sm text-muted-foreground">
                  Personnel qualifié et sensibilisé aux spécificités des copropriétés mentonnaises.
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-200">
              <CardContent className="pt-6">
                <div className="h-10 w-10 bg-teal-100 rounded-lg flex items-center justify-center mb-3">
                  <Sparkles className="h-5 w-5 text-teal-600" />
                </div>
                <h3 className="font-semibold mb-2">Produits Écologiques</h3>
                <p className="text-sm text-muted-foreground">
                  Solutions respectueuses de l'environnement méditerranéen et des jardins.
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-200">
              <CardContent className="pt-6">
                <div className="h-10 w-10 bg-teal-100 rounded-lg flex items-center justify-center mb-3">
                  <Shield className="h-5 w-5 text-teal-600" />
                </div>
                <h3 className="font-semibold mb-2">Suivi Personnalisé</h3>
                <p className="text-sm text-muted-foreground">
                  Interlocuteur dédié pour chaque copropriété et reporting régulier aux syndics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Zones d'Intervention Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Zones d'Intervention à Menton</h2>
            <p className="text-lg text-muted-foreground">
              UCT Azur intervient dans tous les quartiers de Menton et ses environs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3 text-teal-600">Centre-Ville et Front de Mer</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Copropriétés du centre historique, Promenade du Soleil, et immeubles en front de mer nécessitant un
                  entretien renforcé contre les embruns.
                </p>
                <p className="text-xs text-muted-foreground italic">
                  Fréquence recommandée : 2 à 3 passages par semaine
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3 text-teal-600">Garavan</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Quartier résidentiel avec villas et petites copropriétés, jardins méditerranéens et espaces verts à
                  entretenir.
                </p>
                <p className="text-xs text-muted-foreground italic">
                  Fréquence recommandée : 1 à 2 passages par semaine
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3 text-teal-600">Carnolès et Borrigo</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Copropriétés modernes avec parkings, espaces communs étendus et équipements collectifs.
                </p>
                <p className="text-xs text-muted-foreground italic">Fréquence recommandée : 2 passages par semaine</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3 text-teal-600">Monti et Vallons</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Résidences en hauteur avec vues panoramiques, terrasses communes et accès spécifiques.
                </p>
                <p className="text-xs text-muted-foreground italic">
                  Fréquence recommandée : 1 à 2 passages par semaine
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
                  <a href="tel:0769574674" className="text-muted-foreground hover:text-teal-600 block">
                    07 69 57 46 74
                  </a>
                  <span className="text-xs text-muted-foreground">Mr SAIDI - Président</span>
                </div>
                <div>
                  <a href="tel:0635402504" className="text-muted-foreground hover:text-teal-600 block">
                    06 35 40 25 04
                  </a>
                  <span className="text-xs text-muted-foreground">Mr FUNKE - Directeur général</span>
                </div>
              </div>
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
            <div className="flex flex-col items-center gap-2">
              <Mail className="h-6 w-6 text-teal-600" />
              <h3 className="font-semibold">Email</h3>
              <a href="mailto:contact@uct-azur.fr" className="text-muted-foreground hover:text-teal-600 text-sm">
                contact@uct-azur.fr
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-teal-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à Améliorer l'Entretien de Votre Copropriété ?</h2>
          <p className="text-lg mb-8 text-teal-50">
            Obtenez une estimation en ligne en quelques clics ou planifiez une visite gratuite pour un devis détaillé et
            personnalisé.
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
      <footer className="bg-card border-t py-8 px-4">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} UCT Azur. Tous droits réservés.</p>
          <p className="mt-2">Expert en nettoyage professionnel dans les Alpes-Maritimes</p>
        </div>
      </footer>
    </div>
  )
}
