import Image from "next/image"
import Link from "next/link"
import { Building2, CheckCircle, Clock, Mail, Phone, Shield, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Nettoyage de Bureaux à Cannes | UCT Azur - Expert Propreté Professionnelle",
  description:
    "Service de nettoyage professionnel pour bureaux à Cannes. UCT Azur accompagne les entreprises cannoises avec des solutions adaptées au prestige de la ville. Devis gratuit.",
  keywords:
    "nettoyage bureaux Cannes, entretien locaux professionnels Cannes, société nettoyage Cannes, La Croisette, Palais des Festivals, propreté entreprise Cannes",
  openGraph: {
    title: "Nettoyage de Bureaux à Cannes | UCT Azur",
    description:
      "Expert en nettoyage professionnel à Cannes. Solutions sur-mesure pour entreprises et bureaux cannois.",
    type: "website",
  },
}

export default function NettoyageBureauxCannesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/images/uct-azur-logo.png" alt="UCT Azur Logo" width={32} height={32} className="h-8 w-8" />
            <span className="font-bold text-xl">UCT Azur</span>
          </div>
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
            <Button asChild size="sm" className="bg-teal-600 hover:bg-teal-700">
              <Link href="/devis">Devis Gratuit</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/design-mode/2021-logo-cannes_400x400_400x400_300x300.png"
                  alt="Logo Ville de Cannes"
                  width={80}
                  height={80}
                  className="h-20 w-20"
                />
                <div className="h-12 w-px bg-teal-600" />
                <Image
                  src="/images/uct-azur-logo.png"
                  alt="UCT Azur Logo"
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Nettoyage de Bureaux à Cannes : L'Excellence au Service du Prestige
              </h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                UCT Azur accompagne les entreprises cannoises avec des solutions de nettoyage professionnel adaptées à
                l'image de prestige de la ville du Festival. De La Croisette au quartier Carnot, nous garantissons des
                espaces de travail impeccables.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                  <Link href="/devis">Devis Gratuit</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/planifier-rdv">Planifier une Visite</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-white shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Building2 className="h-8 w-8 text-teal-600" />
                    <h3 className="text-xl font-semibold">Pourquoi Cannes ?</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        <strong>Image de prestige :</strong> Cannes rayonne internationalement, vos bureaux doivent
                        refléter cette excellence
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        <strong>Tourisme d'affaires :</strong> Accueillez clients et partenaires dans des espaces
                        irréprochables
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        <strong>Environnement marin :</strong> Gestion spécifique des embruns et du sel sur les surfaces
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        <strong>Événementiel intense :</strong> Flexibilité pour s'adapter aux pics d'activité
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enjeux Spécifiques Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Les Défis du Nettoyage de Bureaux à Cannes</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cannes présente des enjeux uniques qui nécessitent une expertise locale et des solutions adaptées.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Sparkles className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Image de Marque et Prestige</h3>
                    <p className="text-muted-foreground mb-4">
                      Cannes est synonyme de luxe et d'excellence internationale. Les entreprises cannoises, qu'elles
                      soient sur La Croisette ou dans le quartier d'affaires de Carnot, doivent maintenir des standards
                      de propreté irréprochables.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Notre réponse :</strong> Protocoles de nettoyage premium, produits haut de gamme, et
                      attention aux détails pour refléter l'image d'excellence de votre entreprise.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Building2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Tourisme d'Affaires Intense</h3>
                    <p className="text-muted-foreground mb-4">
                      Avec le Palais des Festivals, le MIPIM, le Festival de Cannes et de nombreux congrès, la ville
                      accueille des milliers de professionnels internationaux chaque année. Vos bureaux sont votre
                      vitrine.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Notre réponse :</strong> Interventions flexibles, nettoyages renforcés avant événements
                      majeurs, et disponibilité 7j/7 pour répondre aux besoins urgents.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Environnement Marin et Climatique</h3>
                    <p className="text-muted-foreground mb-4">
                      La proximité de la mer Méditerranée expose les bureaux aux embruns salins, à l'humidité et aux
                      dépôts de sel. Les surfaces vitrées et les sols nécessitent un entretien spécifique et régulier.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Notre réponse :</strong> Produits anti-sel, techniques de nettoyage adaptées au climat
                      méditerranéen, et fréquences ajustées selon la proximité du front de mer.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Saisonnalité et Pics d'Activité</h3>
                    <p className="text-muted-foreground mb-4">
                      L'activité économique cannoise connaît des variations importantes selon les saisons et les
                      événements. Les besoins en nettoyage doivent s'adapter à ces fluctuations.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Notre réponse :</strong> Contrats modulables, équipes renforcées pendant les périodes
                      clés, et capacité à augmenter rapidement la fréquence des interventions.
                    </p>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Les Solutions UCT Azur pour Cannes</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Des prestations sur-mesure qui répondent aux exigences des entreprises cannoises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="bg-teal-100 p-3 rounded-lg w-fit mb-4">
                  <CheckCircle className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Nettoyage Quotidien Premium</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Bureaux et espaces de travail</li>
                  <li>• Salles de réunion et espaces clients</li>
                  <li>• Sanitaires et points d'eau</li>
                  <li>• Espaces d'accueil et réception</li>
                  <li>• Cuisines et espaces détente</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                  <Sparkles className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Prestations Spécialisées</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Nettoyage de vitrerie (embruns marins)</li>
                  <li>• Décapage et cristallisation des sols</li>
                  <li>• Nettoyage de moquettes et tapis</li>
                  <li>• Désinfection renforcée</li>
                  <li>• Remise en état après événements</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="bg-cyan-100 p-3 rounded-lg w-fit mb-4">
                  <Shield className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Garanties et Engagements</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Équipes formées et qualifiées</li>
                  <li>• Produits éco-responsables certifiés</li>
                  <li>• Interventions hors horaires de bureau</li>
                  <li>• Suivi qualité et traçabilité</li>
                  <li>• Assurance responsabilité civile</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Zones d'Intervention Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Zones d'Intervention à Cannes</h2>
            <p className="text-lg text-muted-foreground">
              UCT Azur intervient dans tous les quartiers d'affaires de Cannes et ses environs.
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-teal-600">Quartiers d'Affaires Principaux</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0" />
                      <span>La Croisette et front de mer</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0" />
                      <span>Quartier Carnot</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0" />
                      <span>Palais des Festivals et environs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0" />
                      <span>Centre-ville historique</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0" />
                      <span>La Bocca</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-teal-600">Communes Limitrophes</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0" />
                      <span>Le Cannet</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0" />
                      <span>Mandelieu-La Napoule</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0" />
                      <span>Mougins</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0" />
                      <span>Vallauris</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0" />
                      <span>Antibes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
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
                  <a href="tel:+33493134040" className="text-muted-foreground hover:text-teal-600 block text-sm">
                    04 93 13 40 40
                  </a>
                  <p className="text-xs text-muted-foreground">Mr SAIDI - Président</p>
                </div>
                <div>
                  <a href="tel:+33768265381" className="text-muted-foreground hover:text-teal-600 block text-sm">
                    07 68 26 53 81
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
                06400 Cannes
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
            Choisissez la formule qui vous convient : estimation en ligne rapide ou devis détaillé avec visite gratuite
            de vos locaux à Cannes.
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
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-400">© 2025 UCT Azur. Tous droits réservés.</p>
          <p className="text-xs text-gray-500 mt-2">
            Expert en nettoyage professionnel à Cannes et dans les Alpes-Maritimes
          </p>
        </div>
      </footer>
    </div>
  )
}
