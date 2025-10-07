import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, CheckCircle, Phone, Mail, Shield, Clock, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Entretien de Copropriétés à Cagnes-sur-Mer | UCT Azur - Service Professionnel",
  description:
    "UCT Azur, expert en entretien de copropriétés à Cagnes-sur-Mer. Solutions complètes pour parties communes, espaces verts et vitrerie. Devis gratuit sous 24h.",
  keywords:
    "entretien copropriété Cagnes-sur-Mer, nettoyage parties communes Cagnes, entretien immeuble 06800, syndic Cagnes-sur-Mer, nettoyage copropriété Alpes-Maritimes",
  openGraph: {
    title: "Entretien de Copropriétés à Cagnes-sur-Mer | UCT Azur",
    description:
      "Expert en entretien de copropriétés à Cagnes-sur-Mer. Solutions adaptées au climat méditerranéen et aux spécificités locales.",
    type: "website",
  },
}

export default function EntretienCoproprietesCagnesSurMerPage() {
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
              <Badge className="mb-4 bg-teal-100 text-teal-700 hover:bg-teal-200">Cagnes-sur-Mer - 06800</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Entretien de Copropriétés à Cagnes-sur-Mer
              </h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                UCT Azur accompagne les syndics et copropriétaires de Cagnes-sur-Mer avec des solutions d'entretien
                complètes, adaptées aux spécificités du climat méditerranéen et à la diversité architecturale de la
                ville.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/devis">Obtenir un Devis</Link>
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
                height={300}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Les Enjeux de l'Entretien de Copropriétés à Cagnes-sur-Mer
            </h2>
            <p className="text-lg text-muted-foreground">
              Une ville aux multiples facettes qui nécessite une expertise adaptée
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <Building2 className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Diversité Architecturale</h3>
                  <p className="text-muted-foreground text-sm">
                    Du Haut-de-Cagnes médiéval aux résidences modernes du Cros-de-Cagnes, chaque copropriété nécessite
                    une approche spécifique adaptée à son architecture et ses matériaux.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Sparkles className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Climat Méditerranéen</h3>
                  <p className="text-muted-foreground text-sm">
                    Les embruns marins au Cros-de-Cagnes et la poussière en période estivale exigent un entretien
                    régulier et des produits adaptés pour préserver les façades et vitreries.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Patrimoine à Préserver</h3>
                  <p className="text-muted-foreground text-sm">
                    Les copropriétés anciennes du centre-ville et du Haut-de-Cagnes requièrent des techniques
                    d'entretien respectueuses du patrimoine architectural local.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Proximité Nice-Antibes</h3>
                  <p className="text-muted-foreground text-sm">
                    Position stratégique entre Nice et Antibes : nos équipes interviennent rapidement sur l'ensemble du
                    territoire cagnois, du bord de mer aux collines.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold mb-4">Cagnes-sur-Mer : Une Ville aux Trois Visages</h3>
            <p className="text-muted-foreground mb-4">
              Cagnes-sur-Mer se distingue par sa configuration unique en trois quartiers distincts, chacun avec ses
              propres caractéristiques et besoins en matière d'entretien de copropriétés :
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                <span>
                  <strong>Le Cros-de-Cagnes :</strong> Quartier balnéaire avec ses résidences en front de mer
                  nécessitant un entretien anti-sel et une attention particulière aux embruns marins
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                <span>
                  <strong>Cagnes-Ville :</strong> Centre urbain dynamique avec des copropriétés modernes et des
                  immeubles anciens, proche du Polygone Riviera et de l'Hippodrome
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                <span>
                  <strong>Le Haut-de-Cagnes :</strong> Village médiéval perché avec son patrimoine historique et ses
                  copropriétés dans des bâtiments anciens nécessitant un entretien délicat
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre Offre Complète pour Copropriétés à Cagnes-sur-Mer
            </h2>
            <p className="text-lg text-muted-foreground">
              Des solutions adaptées à chaque type de copropriété cagnoise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Building2 className="h-6 w-6 text-teal-600" />
                Parties Communes
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Halls d'entrée et cages d'escalier</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Ascenseurs et paliers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Parkings et caves</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Locaux poubelles et tri sélectif</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-teal-600" />
                Espaces Extérieurs
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Cours et allées</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Espaces verts et jardins</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Façades et vitreries</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Piscines et équipements collectifs</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-teal-600" />
                Vitrerie Spécialisée
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Nettoyage anti-sel pour le bord de mer</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Baies vitrées et grandes surfaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Fenêtres et portes vitrées</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Vérandas et verrières</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Clock className="h-6 w-6 text-teal-600" />
                Services Complémentaires
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Désinfection et traitement anti-nuisibles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Remise en état après travaux</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Nettoyage de fin de chantier</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Interventions d'urgence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions UCT Azur Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Les Solutions UCT Azur pour Cagnes-sur-Mer</h2>
            <p className="text-lg text-muted-foreground">Une expertise locale au service de vos copropriétés</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Produits Adaptés</h3>
              <p className="text-sm text-muted-foreground">
                Produits anti-sel pour le bord de mer, traitements écologiques pour les espaces verts, solutions
                respectueuses du patrimoine ancien
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Flexibilité Horaire</h3>
              <p className="text-sm text-muted-foreground">
                Interventions adaptées aux contraintes des copropriétaires, en journée ou en soirée, pour minimiser les
                nuisances
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Suivi Personnalisé</h3>
              <p className="text-sm text-muted-foreground">
                Interlocuteur dédié pour chaque copropriété, rapports d'intervention détaillés, planning d'entretien sur
                mesure
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center gap-2">
              <Phone className="h-6 w-6 text-teal-600" />
              <h3 className="font-semibold">Téléphone</h3>
              <div className="text-sm space-y-1">
                <div>
                  <a href="tel:0769574674" className="text-muted-foreground hover:text-teal-600">
                    07 69 57 46 74
                  </a>
                  <p className="text-xs text-muted-foreground">Mr SAIDI - Président</p>
                </div>
                <div>
                  <a href="tel:0635402504" className="text-muted-foreground hover:text-teal-600">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à Améliorer Votre Copropriété ?</h2>
          <p className="text-lg mb-8 text-teal-50">
            Obtenez une estimation en ligne en quelques clics ou planifiez une visite gratuite pour un devis détaillé et
            personnalisé adapté à votre copropriété cagnoise.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/devis">Estimation en ligne</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-teal-600"
            >
              <Link href="/planifier-rdv">Planifier une visite</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
