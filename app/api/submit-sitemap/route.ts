import { NextResponse } from "next/server"

export async function GET() {
  const instructions = {
    title: "Instructions pour soumettre le sitemap à Google",
    steps: [
      {
        step: 1,
        title: "Accéder à Google Search Console",
        description: "Aller sur https://search.google.com/search-console",
        action: "Se connecter avec le compte propriétaire du site",
      },
      {
        step: 2,
        title: "Sélectionner la propriété",
        description: "Choisir diplo-scanner.com dans la liste des propriétés",
        action: "Cliquer sur la propriété du site",
      },
      {
        step: 3,
        title: "Accéder aux sitemaps",
        description: 'Dans le menu de gauche, cliquer sur "Sitemaps"',
        action: "Navigation: Index > Sitemaps",
      },
      {
        step: 4,
        title: "Ajouter le sitemap",
        description: 'Dans le champ "Ajouter un nouveau sitemap"',
        action: 'Saisir: sitemap.xml puis cliquer "ENVOYER"',
      },
      {
        step: 5,
        title: "Vérifier le statut",
        description: "Attendre quelques minutes puis actualiser",
        action: 'Vérifier que le statut est "Réussite"',
      },
    ],
    sitemapUrl: "https://diplo-scanner.com/sitemap.xml",
    expectedUrls: 25,
    priorityPages: [
      "https://diplo-scanner.com/",
      "https://diplo-scanner.com/french",
      "https://diplo-scanner.com/swiss",
      "https://diplo-scanner.com/qu-est-ce-qu-une-plaque-diplomatique",
      "https://diplo-scanner.com/comment-lire-une-plaque-diplomatique-francaise",
      "https://diplo-scanner.com/comment-lire-une-plaque-diplomatique-suisse",
    ],
    additionalActions: [
      "Demander indexation manuelle des 6 pages prioritaires",
      "Surveiller les statistiques d'exploration",
      "Vérifier les Core Web Vitals",
      "Analyser les erreurs d'exploration",
    ],
  }

  return NextResponse.json(instructions, {
    headers: {
      "Cache-Control": "public, max-age=86400",
      "Content-Type": "application/json",
    },
  })
}
