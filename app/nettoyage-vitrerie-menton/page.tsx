import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Building2, CheckCircle, Shield, Clock, Sparkles, Droplets } from "lucide-react"

export const metadata = {
  title: "Nettoyage de Vitrerie à Menton | UCT Azur - Expert Lavage de Vitres 06",
  description:
    "Service professionnel de nettoyage de vitrerie à Menton. UCT Azur intervient sur toute la ville avec des solutions adaptées aux embruns marins et au climat méditerranéen. Devis gratuit.",
  keywords:
    "nettoyage vitrerie Menton, lavage vitres Menton, nettoyage baies vitrées Menton, vitrier Menton, entretien vitres 06500, nettoyage vitres front de mer Menton",
}

export default function NettoyageVitrerieMentonPage() {
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-teal-600">Menton - 06500</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Nettoyage de Vitrerie Professionnel à Menton
              </h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                UCT Azur, expert en nettoyage de vitrerie à Menton, vous garantit des vitres impeccables toute l'année.
                Solutions adaptées aux embruns marins et au climat méditerranéen de la Côte d'Azur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                  <Link href="/devis">Obtenir un Devis</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/#contact">Nous Contacter</Link>
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

      {/* Enjeux Locaux Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Les Défis du Nettoyage de Vitrerie à Menton</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Ville frontalière entre la France et l'Italie, Menton présente des enjeux spécifiques pour l'entretien des
              vitres et baies vitrées.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <Droplets className="h-10 w-10 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Embruns Marins Intensifs</h3>
                <p className="text-muted-foreground">
                  La proximité immédiate de la Méditerranée et les vents marins déposent du sel sur les vitres, créant
                  des traces tenaces et une opacité progressive. Un nettoyage régulier avec des produits adaptés est
                  indispensable.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Building2 className="h-10 w-10 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Architecture Belle Époque</h3>
                <p className="text-muted-foreground">
                  Menton possède un patrimoine architectural remarquable avec de nombreuses grandes baies vitrées et
                  verrières d'époque nécessitant un entretien délicat et professionnel pour préserver leur éclat.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Sparkles className="h-10 w-10 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Climat Méditerranéen</h3>
                <p className="text-muted-foreground">
                  Le climat ensoleillé de Menton met en évidence la moindre trace ou salissure sur les vitres. Des
                  vitres propres sont essentielles pour profiter pleinement de la luminosité exceptionnelle de la
                  région.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Shield className="h-10 w-10 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Zones Touristiques</h3>
                <p className="text-muted-foreground">
                  Garavan, le front de mer et le centre historique accueillent de nombreux visiteurs. Des vitrines et
                  vitres impeccables sont indispensables pour l'image des commerces et établissements mentonnais.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions UCT Azur Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Les Solutions UCT Azur pour Menton</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Des techniques professionnelles adaptées aux spécificités du territoire mentonnais.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Produits Anti-Sel Professionnels</h3>
                    <p className="text-muted-foreground">
                      Nous utilisons des produits spécifiques qui éliminent efficacement les dépôts de sel marin et
                      préviennent leur réapparition rapide, garantissant des vitres propres plus longtemps.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Eau Osmosée et Perches Télescopiques</h3>
                    <p className="text-muted-foreground">
                      Notre système d'eau osmosée garantit un nettoyage sans traces, même sur les grandes hauteurs. Les
                      perches télescopiques permettent d'atteindre les étages élevés en toute sécurité.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Intervention sur Tous Types de Vitres</h3>
                    <p className="text-muted-foreground">
                      Vitrines commerciales, baies vitrées résidentielles, verrières d'époque, fenêtres de copropriétés
                      : nous adaptons nos techniques à chaque type de surface vitrée.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Équipe Bilingue Français-Italien</h3>
                    <p className="text-muted-foreground">
                      Située à la frontière italienne, Menton accueille une clientèle internationale. Notre équipe
                      bilingue facilite la communication et garantit un service de qualité pour tous.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fréquence Recommandée Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fréquence de Nettoyage Recommandée</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Nos recommandations selon votre localisation à Menton.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <Clock className="h-10 w-10 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Front de Mer & Garavan</h3>
                <p className="text-3xl font-bold text-teal-600 mb-2">1x / mois</p>
                <p className="text-sm text-muted-foreground">
                  Exposition directe aux embruns marins nécessitant un entretien mensuel
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Clock className="h-10 w-10 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Centre-Ville</h3>
                <p className="text-3xl font-bold text-teal-600 mb-2">1x / 2 mois</p>
                <p className="text-sm text-muted-foreground">Zone urbaine avec passage touristique important</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Clock className="h-10 w-10 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quartiers Résidentiels</h3>
                <p className="text-3xl font-bold text-teal-600 mb-2">1x / trimestre</p>
                <p className="text-sm text-muted-foreground">
                  Zones moins exposées aux embruns, entretien trimestriel suffisant
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pourquoi UCT Azur Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi Choisir UCT Azur à Menton ?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <Shield className="h-8 w-8 text-teal-600 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Expertise Locale</h3>
                <p className="text-muted-foreground text-sm">
                  Connaissance approfondie des défis spécifiques de Menton et de son environnement marin
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <CheckCircle className="h-8 w-8 text-teal-600 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Matériel Professionnel</h3>
                <p className="text-muted-foreground text-sm">
                  Équipements de pointe pour un résultat impeccable sur tous types de vitres
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Clock className="h-8 w-8 text-teal-600 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Interventions Rapides</h3>
                <p className="text-muted-foreground text-sm">
                  Disponibilité et réactivité pour répondre à vos besoins dans les meilleurs délais
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Sparkles className="h-8 w-8 text-teal-600 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Résultat Garanti</h3>
                <p className="text-muted-foreground text-sm">
                  Satisfaction client garantie avec des vitres parfaitement propres et sans traces
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
              <div className="space-y-1">
                <a href="tel:0769574674" className="block text-sm text-muted-foreground hover:text-teal-600">
                  07 69 57 46 74
                  <br />
                  <span className="text-xs">Mr SAIDI (Président)</span>
                </a>
                <a href="tel:0635402504" className="block text-sm text-muted-foreground hover:text-teal-600">
                  06 35 40 25 04
                  <br />
                  <span className="text-xs">Mr FUNKE (Directeur général)</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Mail className="h-6 w-6 text-teal-600" />
              <h3 className="font-semibold">Email</h3>
              <a href="mailto:contact@uctazur.fr" className="text-sm text-muted-foreground hover:text-teal-600">
                contact@uctazur.fr
              </a>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Building2 className="h-6 w-6 text-teal-600" />
              <h3 className="font-semibold">Adresse</h3>
              <p className="text-sm text-muted-foreground">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Des Vitres Impeccables à Menton ?</h2>
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
              className="border-white text-white hover:bg-teal-700 hover:text-white bg-transparent"
            >
              <Link href="/planifier-rdv">Planifier une visite</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} UCT Azur. Tous droits réservés. | Nettoyage professionnel à Menton
          </p>
        </div>
      </footer>
    </div>
  )
}
