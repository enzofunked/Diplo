import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Building2, CheckCircle, Clock, Droplets, Sparkles } from "lucide-react"

export const metadata = {
  title: "Nettoyage de Vitres à Cagnes-sur-Mer | UCT Azur - Expert Vitres Professionnelles",
  description:
    "Service professionnel de nettoyage de vitres à Cagnes-sur-Mer. Solutions anti-sel pour le Cros-de-Cagnes, techniques adaptées au climat méditerranéen. Devis gratuit.",
  keywords:
    "nettoyage vitres Cagnes-sur-Mer, lavage vitres Cros-de-Cagnes, nettoyage baies vitrées 06800, vitrier professionnel Cagnes, entretien vitres bord de mer",
}

export default function NettoyageVitrerieCagnesSurMer() {
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
              <Badge className="mb-4 bg-teal-100 text-teal-700 hover:bg-teal-100">Cagnes-sur-Mer - 06800</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Nettoyage de Vitres à Cagnes-sur-Mer
              </h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Expert en nettoyage de vitres professionnelles à Cagnes-sur-Mer. Solutions adaptées au climat
                méditerranéen et aux embruns marins du Cros-de-Cagnes. Vitres impeccables pour bureaux, commerces et
                copropriétés.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/devis">Estimation en ligne</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/planifier-rdv">Planifier une visite</Link>
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
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Les Défis du Nettoyage de Vitres à Cagnes-sur-Mer</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Entre mer et collines, Cagnes-sur-Mer présente des enjeux spécifiques pour l'entretien des vitres
              professionnelles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Droplets className="h-12 w-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Embruns Marins au Cros-de-Cagnes</h3>
                <p className="text-muted-foreground">
                  Le front de mer du Cros-de-Cagnes expose les vitres aux embruns salins qui laissent des traces tenaces
                  et accélèrent l'encrassement. Un nettoyage régulier avec produits anti-sel est indispensable.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Building2 className="h-12 w-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Diversité des Quartiers</h3>
                <p className="text-muted-foreground">
                  Du bord de mer au Haut-de-Cagnes médiéval, en passant par Cagnes-Ville et le Polygone Riviera, chaque
                  zone nécessite une approche adaptée selon l'exposition et le type de bâtiment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Sparkles className="h-12 w-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Climat Méditerranéen</h3>
                <p className="text-muted-foreground">
                  Le soleil intense de la Côte d'Azur révèle chaque trace et imperfection. Les vitres propres sont
                  essentielles pour l'image de marque des entreprises cagnoises.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions UCT Azur Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Expertise Vitrerie à Cagnes-sur-Mer</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Des solutions techniques adaptées aux spécificités de chaque quartier cagnois.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-teal-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Produits Anti-Sel Marins</h3>
                    <p className="text-muted-foreground">
                      Formules spéciales pour éliminer les dépôts salins du Cros-de-Cagnes et protéger vos vitres contre
                      les embruns. Résultats durables même en bord de mer.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-teal-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Eau Osmosée</h3>
                    <p className="text-muted-foreground">
                      Technologie d'eau purifiée pour un séchage sans traces ni résidus calcaires. Idéal pour les
                      grandes baies vitrées des résidences et bureaux modernes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-teal-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Perches Télescopiques</h3>
                    <p className="text-muted-foreground">
                      Accès sécurisé aux vitres en hauteur sans nacelle. Parfait pour les immeubles du centre-ville et
                      les résidences du Haut-de-Cagnes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-teal-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Équipes Locales</h3>
                    <p className="text-muted-foreground">
                      Professionnels connaissant parfaitement Cagnes-sur-Mer et ses spécificités. Intervention rapide
                      sur tous les quartiers : Cros-de-Cagnes, Cagnes-Ville, Haut-de-Cagnes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-teal-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Nos Services Vitrerie</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Vitres de bureaux et commerces</p>
                  <p className="text-sm text-muted-foreground">Devantures, vitrines, bureaux du Polygone Riviera</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Baies vitrées de copropriétés</p>
                  <p className="text-sm text-muted-foreground">Résidences modernes et immeubles anciens</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Vitres en hauteur</p>
                  <p className="text-sm text-muted-foreground">Immeubles, halls d'entrée, verrières</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Nettoyage après travaux</p>
                  <p className="text-sm text-muted-foreground">Élimination des traces de peinture et ciment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fréquence Recommandée Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Fréquence Recommandée par Zone</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cros-de-Cagnes (Bord de Mer)</h3>
                    <p className="text-muted-foreground mb-2">
                      <strong>Toutes les 2 semaines</strong> - Les embruns salins nécessitent un nettoyage fréquent pour
                      maintenir la transparence et protéger le verre.
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
                    <h3 className="text-xl font-semibold mb-2">Cagnes-Ville et Polygone Riviera</h3>
                    <p className="text-muted-foreground mb-2">
                      <strong>1 fois par mois</strong> - Fréquence standard pour les zones urbaines avec pollution
                      modérée et passage important.
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
                    <h3 className="text-xl font-semibold mb-2">Haut-de-Cagnes</h3>
                    <p className="text-muted-foreground mb-2">
                      <strong>Tous les 2 mois</strong> - Zone résidentielle calme avec moins d'exposition aux pollutions
                      urbaines et maritimes.
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
              <a href="mailto:contact@uct-azur.fr" className="text-muted-foreground hover:text-teal-600 text-sm">
                contact@uct-azur.fr
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Des Vitres Impeccables à Cagnes-sur-Mer ?</h2>
          <p className="text-lg mb-8 text-teal-50">
            Obtenez une estimation en ligne en quelques clics ou planifiez une visite gratuite pour un devis détaillé
            adapté à vos besoins.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/devis">Estimation en ligne</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-teal-600 hover:bg-gray-100">
              <Link href="/planifier-rdv">Planifier une visite</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
