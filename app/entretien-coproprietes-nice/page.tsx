import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Phone, Mail, MapPin, Shield, Clock, Sparkles, Users, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Entretien de Copropriétés à Nice | UCT Azur - Service Professionnel 06",
  description:
    "Spécialiste de l'entretien de copropriétés à Nice et Alpes-Maritimes. Nettoyage parties communes, espaces verts, locaux poubelles. Devis gratuit sous 24h.",
  keywords:
    "entretien copropriété Nice, nettoyage copropriété 06, entretien parties communes Nice, nettoyage immeuble Nice, syndic copropriété Nice, UCT Azur",
  openGraph: {
    title: "Entretien de Copropriétés à Nice | UCT Azur",
    description:
      "Expert en entretien de copropriétés à Nice. Services adaptés au climat méditerranéen et aux spécificités locales.",
    type: "website",
  },
}

export default function EntretienCopriprietesNicePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/uct-azur-logo.png" alt="UCT Azur Logo" width={32} height={32} className="h-8 w-8" />
            <span className="font-bold text-xl">UCT Azur</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm hover:text-teal-600 transition-colors">
              Accueil
            </Link>
            <Link href="/#services" className="text-sm hover:text-teal-600 transition-colors">
              Services
            </Link>
            <Link href="/#contact" className="text-sm hover:text-teal-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Link href="/devis">
            <Button className="bg-teal-600 hover:bg-teal-700">Devis Gratuit</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <Image
                src="/images/design-mode/Nice_Logo.svg(1).png"
                alt="Ville de Nice"
                width={120}
                height={120}
                className="opacity-90"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Entretien de Copropriétés à Nice</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
              UCT Azur, votre partenaire expert pour l'entretien complet de vos copropriétés à Nice. Solutions
              professionnelles adaptées au climat méditerranéen et aux exigences des syndics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 w-full sm:w-auto">
                  Estimation en ligne
                </Button>
              </Link>
              <Link href="/planifier-rdv">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50 w-full sm:w-auto bg-transparent"
                >
                  Devis en ligne
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enjeux Spécifiques Nice */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Les Défis de l'Entretien de Copropriétés à Nice
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Sparkles className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Climat Méditerranéen Exigeant</h3>
                    <p className="text-muted-foreground">
                      Le climat niçois, avec ses embruns marins et son humidité, accélère l'encrassement des parties
                      communes. Les copropriétés en front de mer (Promenade des Anglais, Port) nécessitent un entretien
                      renforcé contre le sel et l'humidité.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Forte Densité Urbaine</h3>
                    <p className="text-muted-foreground">
                      Nice compte de nombreuses copropriétés dans des quartiers denses (Libération, Musiciens, Cimiez).
                      La fréquentation élevée des parties communes exige un entretien quotidien rigoureux.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Home className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Patrimoine Architectural Varié</h3>
                    <p className="text-muted-foreground">
                      Des immeubles Belle Époque aux résidences modernes, chaque copropriété niçoise a des besoins
                      spécifiques. UCT Azur adapte ses méthodes à chaque type de bâtiment et de revêtement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Exigences des Syndics</h3>
                    <p className="text-muted-foreground">
                      Les syndics de copropriété à Nice recherchent des prestataires fiables, réactifs et conformes aux
                      normes. UCT Azur garantit un service professionnel avec reporting détaillé et traçabilité.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Détaillés */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nos Services d'Entretien pour Copropriétés
          </h2>

          <div className="space-y-8">
            {/* Parties Communes */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-4 text-teal-600">Entretien des Parties Communes</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Halls et Couloirs</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Nettoyage et désinfection des sols (marbre, carrelage, parquet)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Dépoussiérage des surfaces et luminaires</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Nettoyage des vitres et miroirs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Entretien des boîtes aux lettres</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Escaliers et Ascenseurs</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Lavage des marches et rampes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Nettoyage intérieur des cabines d'ascenseur</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Désinfection des boutons et poignées</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Traitement anti-traces sur les miroirs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Espaces Extérieurs */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-4 text-teal-600">Espaces Extérieurs et Abords</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Cours et Parkings</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Balayage et lavage des cours intérieures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Nettoyage des parkings souterrains</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Enlèvement des feuilles et débris</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Désherbage des allées</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Locaux Techniques</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Nettoyage des locaux poubelles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Désinfection et désodorisation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Sortie et rentrée des conteneurs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Entretien des locaux vélos et caves</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services Complémentaires */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-4 text-teal-600">Services Complémentaires</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Vitrerie</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Nettoyage des vitrages extérieurs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Traitement anti-traces</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Espaces Verts</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Tonte et entretien pelouses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Taille des haies et arbustes</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Interventions Ponctuelles</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Nettoyage après travaux</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>Remise en état ponctuelle</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Zones d'Intervention */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nos Zones d'Intervention à Nice</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <MapPin className="h-8 w-8 text-teal-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Centre-Ville et Front de Mer</h3>
                <p className="text-muted-foreground text-sm">
                  Carré d'Or, Promenade des Anglais, Port, Vieux-Nice. Expertise sur les copropriétés de prestige et
                  immeubles historiques.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <MapPin className="h-8 w-8 text-teal-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Quartiers Résidentiels</h3>
                <p className="text-muted-foreground text-sm">
                  Cimiez, Musiciens, Libération, Fabron, Riquier. Intervention sur les résidences familiales et
                  copropriétés de standing.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <MapPin className="h-8 w-8 text-teal-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Périphérie et Collines</h3>
                <p className="text-muted-foreground text-sm">
                  Nice Nord, Gairaut, Mont-Boron, Saint-Sylvestre. Service adapté aux copropriétés en zones
                  résidentielles calmes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pourquoi UCT Azur */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Pourquoi Choisir UCT Azur pour Votre Copropriété ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <Shield className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Expertise Locale</h3>
                <p className="text-sm text-muted-foreground">
                  Connaissance approfondie des spécificités des copropriétés niçoises et des exigences des syndics
                  locaux.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Clock className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Flexibilité Horaire</h3>
                <p className="text-sm text-muted-foreground">
                  Interventions adaptées aux contraintes des copropriétaires, y compris en soirée et week-end si
                  nécessaire.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <CheckCircle className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Qualité Garantie</h3>
                <p className="text-sm text-muted-foreground">
                  Contrôles qualité réguliers, reporting détaillé et traçabilité complète des interventions pour les
                  syndics.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Sparkles className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Produits Écologiques</h3>
                <p className="text-sm text-muted-foreground">
                  Utilisation de produits respectueux de l'environnement et de la santé des résidents, certifiés
                  Ecolabel.
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
                <div>
                  <a href="tel:+33768215129" className="text-muted-foreground hover:text-teal-600 block">
                    07 68 21 51 29
                  </a>
                  <p className="text-xs text-muted-foreground">Mr SAIDI - Président</p>
                </div>
                <div>
                  <a href="tel:+33768215130" className="text-muted-foreground hover:text-teal-600 block">
                    07 68 21 51 30
                  </a>
                  <p className="text-xs text-muted-foreground">Mr FUNKE - Directeur général</p>
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
              <p className="text-muted-foreground">Nice (06)</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-teal-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Obtenez Votre Devis Personnalisé</h2>
          <p className="text-lg mb-8 text-teal-50">
            Choisissez l'option qui vous convient : estimation en ligne rapide ou devis détaillé avec visite gratuite de
            votre copropriété.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-teal-600 hover:bg-gray-100 w-full sm:w-auto"
              >
                Estimation en ligne
              </Button>
            </Link>
            <Link href="/planifier-rdv">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-teal-700 w-full sm:w-auto bg-transparent"
              >
                Planifier une visite
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2025 UCT Azur. Tous droits réservés.</p>
          <p className="text-xs mt-2">Entretien professionnel de copropriétés à Nice et Alpes-Maritimes</p>
        </div>
      </footer>
    </div>
  )
}
