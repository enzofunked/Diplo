import { NextResponse } from "next/server"

export async function GET() {
  const instructions = {
    title: "Instructions pour soumettre le sitemap à Google",
    steps: [
      {
        step: 1,
        title: "Accéder à Google Search Console",
        description: "Allez sur https://search.google.com/search-console/",
        action: "Se connecter avec votre compte Google",
      },
      {
        step: 2,
        title: "Sélectionner votre propriété",
        description: "Choisir diplo-scanner.com dans la liste",
        action: "Cliquer sur la propriété",
      },
      {
        step: 3,
        title: "Aller dans Sitemaps",
        description: "Dans le menu de gauche, cliquer sur 'Sitemaps'",
        action: "Navigation vers la section Sitemaps",
      },
      {
        step: 4,
        title: "Ajouter un nouveau sitemap",
        description: "Cliquer sur 'Ajouter un nouveau sitemap'",
        action: "Saisir: sitemap.xml",
      },
      {
        step: 5,
        title: "Soumettre le sitemap",
        description: "Cliquer sur 'Envoyer'",
        action: "Confirmer la soumission",
      },
    ],
    priorityPages: [
      {
        url: "https://diplo-scanner.com/",
        priority: "1.0",
        reason: "Page d'accueil principale",
      },
      {
        url: "https://diplo-scanner.com/french",
        priority: "0.9",
        reason: "Scanner français - fonctionnalité principale",
      },
      {
        url: "https://diplo-scanner.com/swiss",
        priority: "0.9",
        reason: "Scanner suisse - fonctionnalité principale",
      },
      {
        url: "https://diplo-scanner.com/qu-est-ce-qu-une-plaque-diplomatique",
        priority: "0.8",
        reason: "Page SEO importante - définition",
      },
      {
        url: "https://diplo-scanner.com/comment-lire-une-plaque-diplomatique-francaise",
        priority: "0.8",
        reason: "Guide français - contenu éducatif",
      },
      {
        url: "https://diplo-scanner.com/comment-lire-une-plaque-diplomatique-suisse",
        priority: "0.8",
        reason: "Guide suisse - contenu éducatif",
      },
    ],
    manualIndexing: {
      title: "Demander l'indexation manuelle",
      instructions: [
        "1. Dans Google Search Console, aller dans 'Inspection d'URL'",
        "2. Saisir l'URL complète (ex: https://diplo-scanner.com/french)",
        "3. Cliquer sur 'Tester l'URL en direct'",
        "4. Si l'URL n'est pas indexée, cliquer sur 'Demander l'indexation'",
        "5. Répéter pour chaque page prioritaire",
      ],
    },
    monitoring: {
      title: "Surveillance continue",
      metrics: [
        "Statistiques d'exploration (pages explorées par jour)",
        "Erreurs d'exploration",
        "Core Web Vitals",
        "Temps de réponse serveur",
        "Pages indexées vs détectées",
      ],
    },
  }

  return NextResponse.json(instructions, {
    headers: {
      "Cache-Control": "public, max-age=86400",
      "Content-Type": "application/json",
    },
  })
}
