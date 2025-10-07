import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Building2, CheckCircle, Phone, Mail, Clock, Shield, Sparkles, Users, ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Nettoyage de Bureaux à Cagnes-sur-Mer | UCT Azur - Entreprise Professionnelle",
  description:
    "Service professionnel de nettoyage de bureaux à Cagnes-sur-Mer. UCT Azur accompagne les entreprises du Polygone Riviera et de toute la ville avec des solutions sur mesure. Devis gratuit.",
  keywords:
    "nettoyage bureaux Cagnes-sur-Mer, entretien bureaux 06800, société nettoyage Cagnes, nettoyage professionnel Polygone Riviera, UCT Azur",
}

export default function NettoyageBureauxCagnesSurMer() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-teal-600">
              UCT Azur
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
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-teal-100 text-teal-700 hover:bg-teal-100">Cagnes-sur-Mer</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Nettoyage de Bureaux à Cagnes-sur-Mer
              </h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                UCT Azur accompagne les entreprises de Cagnes-sur-Mer avec des solutions de nettoyage professionnel
                adaptées au dynamisme économique de la ville. Du Polygone Riviera au centre-ville, nous garantissons des
                espaces de travail impeccables.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/devis">
                    Obtenir un Devis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/planifier-rdv">Planifier une Visite</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/cagnes-sur-mer-blason.png"
                alt="Blason de Cagnes-sur-Mer"
                width={300}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enjeux Locaux Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Les Enjeux du Nettoyage de Bureaux à Cagnes-sur-Mer</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Entre dynamisme économique et cadre méditerranéen, Cagnes-sur-Mer présente des défis spécifiques pour
              l'entretien des espaces professionnels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6">
              <Building2 className="h-10 w-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Pôle Économique Dynamique</h3>
              <p className="text-muted-foreground text-pretty">
                Avec le Polygone Riviera et de nombreuses zones d'activités, Cagnes-sur-Mer accueille un tissu
                économique diversifié nécessitant des standards d'entretien professionnels élevés.
              </p>
            </Card>

            <Card className="p-6">
              <Sparkles className="h-10 w-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Climat Méditerranéen</h3>
              <p className="text-muted-foreground text-pretty">
                La proximité de la mer et le climat côtier génèrent poussière, embruns salins et humidité, exigeant un
                entretien régulier et adapté des bureaux.
              </p>
            </Card>

            <Card className="p-6">
              <Users className="h-10 w-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Flux d'Activité Soutenu</h3>
              <p className="text-muted-foreground text-pretty">
                Entre l'Hippodrome de la Côte d'Azur, le centre commercial et les entreprises locales, les espaces
                professionnels connaissent une fréquentation importante toute l'année.
              </p>
            </Card>

            <Card className="p-6">
              <Shield className="h-10 w-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Image Professionnelle</h3>
              <p className="text-muted-foreground text-pretty">
                Dans une ville en plein développement économique, maintenir des bureaux impeccables est essentiel pour
                l'image de marque et la satisfaction des collaborateurs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions UCT Azur Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Les Solutions UCT Azur pour Cagnes-sur-Mer</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Des prestations adaptées aux spécificités de votre entreprise et de votre secteur d'activité.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Nettoyage Quotidien Complet</h3>
                  <p className="text-muted-foreground text-pretty">
                    Entretien des bureaux, espaces communs, sanitaires et zones de réception. Dépoussiérage, aspiration,
                    désinfection des surfaces de contact et gestion des déchets.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Interventions Adaptées au Climat</h3>
                  <p className="text-muted-foreground text-pretty">
                    Produits anti-sel pour les vitres, traitement de l'humidité et nettoyage renforcé pendant les
                    périodes de mistral et d'embruns marins.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Horaires Flexibles</h3>
                  <p className="text-muted-foreground text-pretty">
                    Interventions en dehors des heures d'ouverture pour ne pas perturber votre activité. Service
                    disponible en soirée, tôt le matin ou le week-end selon vos besoins.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Équipe Professionnelle Formée</h3>
                  <p className="text-muted-foreground text-pretty">
                    Personnel qualifié, discret et respectueux de la confidentialité. Formation continue aux nouvelles
                    techniques et aux protocoles sanitaires.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Zones d'Intervention Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Zones d'Intervention à Cagnes-sur-Mer</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              UCT Azur intervient dans tous les quartiers et zones d'activités de Cagnes-sur-Mer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <h3 className="font-semibold mb-2">Polygone Riviera</h3>
              <p className="text-sm text-muted-foreground">Centre commercial et bureaux</p>
            </Card>

            <Card className="p-6 text-center">
              <h3 className="font-semibold mb-2">Cagnes-Ville</h3>
              <p className="text-sm text-muted-foreground">Centre administratif et commercial</p>
            </Card>

            <Card className="p-6 text-center">
              <h3 className="font-semibold mb-2">Cros-de-Cagnes</h3>
              <p className="text-sm text-muted-foreground">Front de mer et commerces</p>
            </Card>

            <Card className="p-6 text-center">
              <h3 className="font-semibold mb-2">Hippodrome</h3>
              <p className="text-sm text-muted-foreground">Zone d'activités et événementiel</p>
            </Card>

            <Card className="p-6 text-center">
              <h3 className="font-semibold mb-2">Val Fleuri</h3>
              <p className="text-sm text-muted-foreground">Quartier résidentiel et bureaux</p>
            </Card>

            <Card className="p-6 text-center">
              <h3 className="font-semibold mb-2">Haut-de-Cagnes</h3>
              <p className="text-sm text-muted-foreground">Village médiéval et artisans</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pourquoi UCT Azur Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi Choisir UCT Azur à Cagnes-sur-Mer ?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <Shield className="h-8 w-8 text-teal-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Expertise Locale depuis 2008</h3>
              <p className="text-muted-foreground text-sm">
                Connaissance approfondie des enjeux spécifiques de Cagnes-sur-Mer et de la Côte d'Azur.
              </p>
            </Card>

            <Card className="p-6">
              <CheckCircle className="h-8 w-8 text-teal-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Certifications Professionnelles</h3>
              <p className="text-muted-foreground text-sm">
                Entreprise certifiée avec assurance responsabilité civile professionnelle complète.
              </p>
            </Card>

            <Card className="p-6">
              <Sparkles className="h-8 w-8 text-teal-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Produits Écologiques</h3>
              <p className="text-muted-foreground text-sm">
                Utilisation de produits respectueux de l'environnement et de la santé de vos collaborateurs.
              </p>
            </Card>

            <Card className="p-6">
              <Clock className="h-8 w-8 text-teal-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Disponibilité 7j/7</h3>
              <p className="text-muted-foreground text-sm">
                Service client réactif et interventions possibles tous les jours selon vos besoins.
              </p>
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
              <div className="space-y-1">
                <div>
                  <a href="tel:0769574674" className="text-muted-foreground hover:text-teal-600 text-sm">
                    07 69 57 46 74
                  </a>
                  <p className="text-xs text-muted-foreground">Mr SAIDI - Président</p>
                </div>
                <div>
                  <a href="tel:0635402504" className="text-muted-foreground hover:text-teal-600 text-sm">
                    06 35 40 25 04
                  </a>
                  <p className="text-xs text-muted-foreground">Mr FUNKE - Directeur général</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Mail className="h-6 w-6 text-teal-600" />
              <h3 className="font-semibold">Email</h3>
              <a href="mailto:contact@uctazur.fr" className="text-muted-foreground hover:text-teal-600 text-sm">
                contact@uctazur.fr
              </a>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Building2 className="h-6 w-6 text-teal-600" />
              <h3 className="font-semibold">Adresse</h3>
              <p className="text-muted-foreground text-sm">
                06800 Cagnes-sur-Mer
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
            Estimation en ligne rapide ou devis détaillé avec visite gratuite de vos locaux à Cagnes-sur-Mer. Réponse
            sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/devis">Estimation en Ligne</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-teal-600"
            >
              <Link href="/planifier-rdv">Planifier une Visite</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-400">
            © 2025 UCT Azur. Tous droits réservés. | Nettoyage professionnel à Cagnes-sur-Mer
          </p>
        </div>
      </footer>
    </div>
  )
}
