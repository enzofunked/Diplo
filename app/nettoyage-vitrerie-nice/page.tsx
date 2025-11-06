import Image from "next/image"
import Link from "next/link"
import { Building2, CheckCircle, Phone, Mail, MapPin, Sparkles, Shield, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Nettoyage de Vitres à Nice | UCT Azur - Expert Lavage de Vitres 06",
  description:
    "Spécialiste du nettoyage de vitrerie à Nice et Alpes-Maritimes. UCT Azur intervient sur tous types de bâtiments avec des techniques adaptées au climat méditerranéen. Devis gratuit.",
  keywords:
    "nettoyage vitres Nice, lavage vitres Nice, nettoyage baies vitrées Nice, vitrerie professionnelle 06, nettoyage façade vitrée Nice, UCT Azur",
  openGraph: {
    title: "Nettoyage de Vitres à Nice | UCT Azur",
    description:
      "Expert en nettoyage de vitrerie à Nice. Solutions professionnelles adaptées aux embruns marins et au climat méditerranéen.",
    type: "website",
  },
}

export default function NettoyageVitrerieNice() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-border bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/uct-azur-logo.png" alt="UCT Azur Logo" width={40} height={40} className="h-10 w-10" />
            <span className="font-bold text-xl text-teal-600">UCT Azur</span>
          </Link>
          <Link
            href="/devis"
            className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium"
          >
            Devis Gratuit
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-teal-100 text-teal-700 hover:bg-teal-100">Expert Vitrerie Nice</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Nettoyage de Vitres à Nice</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              UCT Azur, spécialiste du nettoyage de vitres dans les Alpes-Maritimes, vous garantit des vitres impeccables toute l'année. Nos équipes maîtrisent les techniques adaptées au climat méditerranéen et aux contraintes des embruns marins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/devis"
                className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium inline-flex items-center justify-center gap-2"
              >
                <Sparkles className="h-5 w-5" />
                Devis Gratuit
              </Link>
              <Link
                href="/planifier-rdv"
                className="bg-white text-teal-600 border-2 border-teal-600 px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors font-medium inline-flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Planifier une Visite
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Nice Section */}
      <section className="py-12 px-4 bg-white border-b">
        <div className="container mx-auto text-center">
          <Image
            src="/images/design-mode/Nice_Logo.svg(2).png"
            alt="Ville de Nice"
            width={120}
            height={120}
            className="mx-auto mb-4 opacity-80"
          />
          <p className="text-gray-600 text-sm">
            Entreprise locale au service des professionnels et copropriétés niçois
          </p>
        </div>
      </section>

      {/* Enjeux Spécifiques Nice */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">
            Les Défis du Nettoyage de Vitres à Nice
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Le climat méditerranéen et la proximité de la mer imposent des contraintes spécifiques pour l'entretien des
            vitres à Nice.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Sparkles className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Embruns Marins</h3>
                    <p className="text-gray-600 text-sm">
                      Le sel marin se dépose sur les vitres, créant des traces tenaces et une opacité progressive. Les
                      immeubles de la Promenade des Anglais et du front de mer sont particulièrement exposés.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Building2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Grandes Baies Vitrées</h3>
                    <p className="text-gray-600 text-sm">
                      L'architecture moderne niçoise privilégie les grandes surfaces vitrées pour profiter de la
                      luminosité. Ces installations nécessitent un équipement professionnel et des techniques
                      spécifiques.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Pollution Urbaine</h3>
                    <p className="text-gray-600 text-sm">
                      La densité du trafic dans le centre-ville et les quartiers d'affaires génère des dépôts de
                      pollution qui ternissent rapidement les vitres et nécessitent un entretien régulier.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Fréquence Adaptée</h3>
                    <p className="text-gray-600 text-sm">
                      Le climat méditerranéen avec ses épisodes de pluie et de vent chargé de sable impose une fréquence
                      de nettoyage adaptée pour maintenir une transparence optimale.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Accès Difficiles</h3>
                    <p className="text-gray-600 text-sm">
                      Les immeubles en hauteur et les façades vitrées complexes nécessitent du matériel spécialisé
                      (nacelles, perches télescopiques) et des habilitations de sécurité.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Sparkles className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Traces et Calcaire</h3>
                    <p className="text-gray-600 text-sm">
                      L'eau calcaire de la région laisse des traces blanches persistantes. Nos produits professionnels
                      et notre technique d'essuyage garantissent un résultat sans traces.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions UCT Azur */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">L'Expertise UCT Azur pour Vos Vitres</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Des solutions professionnelles adaptées aux spécificités du territoire niçois.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-teal-200">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-teal-600">Techniques Professionnelles</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Produits anti-sel :</strong> Formulations spéciales pour éliminer les dépôts marins sans
                      endommager les surfaces
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Perches télescopiques :</strong> Jusqu'à 20 mètres de hauteur pour les façades sans
                      nacelle
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Eau osmosée :</strong> Système de purification pour un résultat sans traces ni calcaire
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Raclettes professionnelles :</strong> Technique d'essuyage maîtrisée pour une finition
                      impeccable
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-teal-200">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-teal-600">Sécurité et Conformité</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Habilitations travaux en hauteur :</strong> Personnel formé et certifié pour les
                      interventions en altitude
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Assurance décennale :</strong> Couverture complète pour votre tranquillité
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Équipements de protection :</strong> Harnais, lignes de vie, nacelles conformes aux normes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Respect de l'environnement :</strong> Produits biodégradables et gestion responsable des
                      eaux usées
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Types de Bâtiments */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">
            Nos Interventions à Nice et Alpes-Maritimes
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            UCT Azur intervient sur tous types de bâtiments dans l'ensemble du département.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <Building2 className="h-10 w-10 text-teal-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Bureaux et Commerces</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Vitrines, façades vitrées, bureaux en open-space. Interventions en dehors des heures d'ouverture pour
                  ne pas perturber votre activité.
                </p>
                <p className="text-teal-600 text-sm font-medium">Arenas, Carré d'Or, Nice Méridia, Sophia Antipolis</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Building2 className="h-10 w-10 text-teal-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Copropriétés</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Parties communes, halls d'entrée, baies vitrées des appartements. Contrats annuels avec passages
                  réguliers adaptés à vos besoins.
                </p>
                <p className="text-teal-600 text-sm font-medium">Cimiez, Musiciens, Libération, Port de Nice</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Building2 className="h-10 w-10 text-teal-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Hôtels et Restaurants</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Façades, baies vitrées, vérandas. Service premium pour maintenir l'image de votre établissement face à
                  la mer.
                </p>
                <p className="text-teal-600 text-sm font-medium">Promenade des Anglais, Vieux-Nice, Collines</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fréquences et Tarifs */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">Fréquences d'Intervention Recommandées</h2>
          <p className="text-gray-600 text-center mb-12">
            Nos recommandations basées sur 15 ans d'expérience dans les Alpes-Maritimes.
          </p>

          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Bâtiments en Front de Mer</h3>
                    <p className="text-gray-600 text-sm">
                      Exposition maximale aux embruns. Nettoyage bimensuel recommandé pour maintenir la transparence et
                      éviter l'accumulation de sel.
                    </p>
                  </div>
                  <Badge className="bg-teal-100 text-teal-700 whitespace-nowrap">2x/mois</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Centre-Ville et Zones Urbaines</h3>
                    <p className="text-gray-600 text-sm">
                      Pollution urbaine modérée. Un passage mensuel suffit pour des vitres impeccables toute l'année.
                    </p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-700 whitespace-nowrap">1x/mois</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Zones Résidentielles</h3>
                    <p className="text-gray-600 text-sm">
                      Environnement moins exposé. Nettoyage trimestriel ou semestriel selon vos exigences de propreté.
                    </p>
                  </div>
                  <Badge className="bg-green-100 text-green-700 whitespace-nowrap">4x/an</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pourquoi UCT Azur */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Pourquoi Choisir UCT Azur pour Vos Vitres ?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="font-semibold mb-2">15 Ans d'Expérience</h3>
                <p className="text-gray-600 text-sm">Expertise locale reconnue dans les Alpes-Maritimes</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="font-semibold mb-2">Équipes Certifiées</h3>
                <p className="text-gray-600 text-sm">
                  Personnel formé aux travaux en hauteur et techniques spécialisées
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="font-semibold mb-2">Résultat Garanti</h3>
                <p className="text-gray-600 text-sm">Vitres impeccables sans traces ni coulures</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="font-semibold mb-2">Réactivité</h3>
                <p className="text-gray-600 text-sm">Devis sous 24h et interventions rapides</p>
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
                <div>
                  <a href="tel:+33769574674" className="text-muted-foreground hover:text-teal-600 block">
                    07 69 57 46 74
                  </a>
                  <p className="text-xs text-gray-500">Mr SAIDI - Président</p>
                </div>
                <div>
                  <a href="tel:+33635402504" className="text-muted-foreground hover:text-teal-600 block">
                    06 35 40 25 04
                  </a>
                  <p className="text-xs text-gray-500">Mr FUNKE - Directeur général</p>
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
              <h3 className="font-semibold">Zone d'intervention</h3>
              <p className="text-muted-foreground">Nice et Alpes-Maritimes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-teal-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Des Vitres Impeccables Toute l'Année</h2>
          <p className="text-lg mb-8 text-teal-50">
            Obtenez une estimation en ligne en 2 minutes ou planifiez une visite gratuite pour un devis détaillé adapté
            à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="bg-white text-teal-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium inline-flex items-center justify-center gap-2"
            >
              <Sparkles className="h-5 w-5" />
              Estimation en Ligne
            </Link>
            <Link
              href="/planifier-rdv"
              className="bg-teal-700 text-white px-8 py-3 rounded-lg hover:bg-teal-800 transition-colors font-medium inline-flex items-center justify-center gap-2 border-2 border-white"
            >
              <Phone className="h-5 w-5" />
              Planifier une Visite
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-sm">© 2025 UCT Azur - Nettoyage Professionnel à Nice et Alpes-Maritimes</p>
        </div>
      </footer>
    </div>
  )
}
