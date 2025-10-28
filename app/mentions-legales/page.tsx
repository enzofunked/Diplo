import Link from "next/link"
import { Building2, Mail, Phone, MapPin, Globe } from "lucide-react"

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-lg font-semibold text-teal-600 hover:text-teal-700"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Mentions Légales</h1>

        <div className="prose prose-slate max-w-none space-y-8">
          {/* Introduction */}
          <p className="text-lg text-muted-foreground leading-relaxed">
            Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la
            Confiance dans l'économie numérique (LCEN), nous vous informons des mentions légales relatives au site{" "}
            <strong>uct-azur.fr</strong>, édité par l'entreprise de nettoyage professionnel
            <strong> UCT Azur</strong>, spécialisée dans le nettoyage de bureaux, commerces, copropriétés et
            établissements à Menton, Nice, Cannes et sur toute la Côte d'Azur.
          </p>

          {/* Éditeur du site */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
              <Building2 className="h-6 w-6 text-teal-600" />
              Éditeur du site
            </h2>
            <div className="bg-muted p-6 rounded-lg space-y-2">
              <p>
                <strong>Raison sociale :</strong> UCTA Unlimited Cleaning Tech Azur
              </p>
              <p>
                <strong>Forme juridique :</strong> SAS (Société par Actions Simplifiée)
              </p>
              <p>
                <strong>Capital social :</strong> 100 € (capital variable)
              </p>
              <p>
                <strong>SIREN :</strong> 933 186 470
              </p>
              <p>
                <strong>SIRET (siège) :</strong> 933 186 470 00011
              </p>
              <p>
                <strong>Numéro de TVA intracommunautaire :</strong> FR33933186470
              </p>
              <p>
                <strong>Code NAF :</strong> 81.21Z - Nettoyage courant des bâtiments
              </p>
              <p>
                <strong>RCS :</strong> Nice
              </p>
              <p>
                <strong>Date de création :</strong> 19 septembre 2024
              </p>
              
            </div>
          </section>

          {/* Siège social */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
              <MapPin className="h-6 w-6 text-teal-600" />
              Siège social
            </h2>
            <div className="bg-muted p-6 rounded-lg">
              <p className="font-medium">Résidence Le Chantemerle B</p>
              <p>25 Allée du Stade</p>
              <p>06500 Menton, France</p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
              <Mail className="h-6 w-6 text-teal-600" />
              Contact
            </h2>
            <div className="bg-muted p-6 rounded-lg space-y-3">
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-teal-600" />
                <strong>Email :</strong>
                <a href="mailto:contact@uct-azur.fr" className="text-teal-600 hover:underline">
                  contact@uct-azur.fr
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-teal-600" />
                <strong>Téléphone :</strong>
                <a href="tel:+33769574674" className="text-teal-600 hover:underline">
                  +33 7 69 57 46 74
                </a>
              </p>
            </div>
          </section>

          {/* Hébergeur */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
              <Globe className="h-6 w-6 text-teal-600" />
              Hébergeur du site
            </h2>
            <div className="bg-muted p-6 rounded-lg space-y-2">
              <p>
                <strong>Nom :</strong> Vercel Inc.
              </p>
              <p>
                <strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
              </p>
              <p>
                <strong>Site web :</strong>{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:underline"
                >
                  https://vercel.com
                </a>
              </p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Propriété intellectuelle</h2>
            <p className="text-muted-foreground leading-relaxed">
              L'ensemble du contenu présent sur le site <strong>uct-azur.fr</strong> (textes, images, logos, graphismes,
              vidéos, icônes, sons, logiciels, etc.) est la propriété exclusive de <strong>UCT Azur</strong> ou de ses
              partenaires, et est protégé par les lois françaises et internationales relatives à la propriété
              intellectuelle.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments
              du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable
              de UCT Azur. Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient
              sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des
              articles L.335-2 et suivants du Code de Propriété Intellectuelle.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>© 2025 UCT Azur - Tous droits réservés.</strong>
            </p>
          </section>

          {/* Protection des données personnelles */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Protection des données personnelles (RGPD)</h2>
            <p className="text-muted-foreground leading-relaxed">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et
              Libertés, UCT Azur s'engage à protéger la vie privée de ses utilisateurs et à traiter leurs données
              personnelles de manière confidentielle et sécurisée.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Les données personnelles collectées sur ce site (nom, prénom, email, téléphone, adresse) sont destinées
              exclusivement à UCT Azur pour le traitement de vos demandes de devis, d'estimation ou de contact. Ces
              données ne sont ni vendues, ni louées, ni cédées à des tiers sans votre consentement explicite.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>Vos droits :</strong> Conformément aux articles 15 à 22 du RGPD, vous disposez d'un droit d'accès,
              de rectification, de suppression, de limitation, d'opposition et de portabilité de vos données
              personnelles. Pour exercer ces droits, vous pouvez nous contacter à l'adresse email :
              <a href="mailto:contact@uct-azur.fr" className="text-teal-600 hover:underline ml-1">
                contact@uct-azur.fr
              </a>
              .
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>Durée de conservation :</strong> Vos données sont conservées pendant la durée nécessaire à la
              réalisation des finalités pour lesquelles elles ont été collectées, et conformément aux obligations
              légales en vigueur.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Cookies et consentement utilisateur</h2>
            <p className="text-muted-foreground leading-relaxed">
              Le site <strong>uct-azur.fr</strong> utilise des cookies pour améliorer l'expérience utilisateur, analyser
              le trafic et personnaliser le contenu. Un cookie est un petit fichier texte stocké sur votre appareil lors
              de votre visite sur notre site.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>Types de cookies utilisés :</strong>
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2 ml-4">
              <li>
                <strong>Cookies essentiels :</strong> Nécessaires au bon fonctionnement du site (navigation, sécurité)
              </li>
              <li>
                <strong>Cookies analytiques :</strong> Permettent de mesurer l'audience et d'améliorer les performances
                du site
              </li>
              <li>
                <strong>Cookies de préférence :</strong> Mémorisent vos choix et préférences (langue, consentement
                cookies)
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Lors de votre première visite, une bannière de consentement vous permet d'accepter ou de refuser
              l'utilisation de cookies non essentiels. Vous pouvez modifier vos préférences à tout moment en supprimant
              les cookies de votre navigateur ou en nous contactant.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Pour plus d'informations sur la gestion des cookies, consultez les paramètres de votre navigateur ou
              visitez le site de la CNIL :
              <a
                href="https://www.cnil.fr/fr/cookies-et-autres-traceurs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline ml-1"
              >
                www.cnil.fr
              </a>
              .
            </p>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Limitation de responsabilité</h2>
            <p className="text-muted-foreground leading-relaxed">
              UCT Azur s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site.
              Toutefois, UCT Azur ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à
              disposition sur ce site. En conséquence, UCT Azur décline toute responsabilité pour toute imprécision,
              inexactitude ou omission portant sur des informations disponibles sur le site.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              UCT Azur ne pourra être tenu responsable des dommages directs ou indirects résultant de l'accès au site ou
              de l'utilisation du site, y compris l'inaccessibilité, les pertes de données, détériorations, destructions
              ou virus qui pourraient affecter l'équipement informatique de l'utilisateur.
            </p>
          </section>

          {/* Droit applicable */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Droit applicable et juridiction compétente</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord
              amiable, le litige sera porté devant les tribunaux français compétents conformément aux règles de droit
              commun.
            </p>
          </section>

          {/* Footer */}
          <div className="border-t pt-6 mt-8 text-center text-sm text-muted-foreground">
            <p>
              Dernière mise à jour :{" "}
              {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
            </p>
            <p className="mt-2">
              <strong>UCT Azur</strong> - Entreprise de nettoyage professionnel à Menton, Nice, Cannes et Côte d'Azur
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
