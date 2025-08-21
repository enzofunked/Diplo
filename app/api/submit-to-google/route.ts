import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 })
    }

    // Instructions détaillées pour soumettre à Google Search Console
    const instructions = {
      url: url,
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
          description: "Choisissez diplo-scanner.com dans la liste des propriétés",
          action: "Cliquer sur la propriété diplo-scanner.com",
        },
        {
          step: 3,
          title: "Utiliser l'outil d'inspection d'URL",
          description: "Dans la barre de recherche en haut, collez l'URL complète",
          action: `Coller: https://diplo-scanner.com${url}`,
        },
        {
          step: 4,
          title: "Inspecter l'URL",
          description: "Appuyez sur Entrée pour lancer l'inspection",
          action: "Attendre les résultats de l'inspection",
        },
        {
          step: 5,
          title: "Demander l'indexation",
          description: "Si l'URL n'est pas indexée, cliquez sur 'Demander l'indexation'",
          action: "Cliquer sur le bouton 'Demander l'indexation'",
        },
        {
          step: 6,
          title: "Confirmer la demande",
          description: "Google va tester l'URL en direct puis l'ajouter à la file d'indexation",
          action: "Attendre la confirmation (peut prendre quelques minutes)",
        },
      ],
      tips: [
        "L'indexation peut prendre de quelques heures à plusieurs jours",
        "Vous pouvez soumettre jusqu'à 10 URLs par jour par propriété",
        "Assurez-vous que l'URL est accessible et ne retourne pas d'erreur 404",
        "Vérifiez que le robots.txt n'bloque pas l'URL",
      ],
      priority_urls: [
        "/comment-lire-une-plaque-diplomatique-suisse",
        "/comment-lire-une-plaque-diplomatique-francaise",
        "/qu-est-ce-qu-une-plaque-diplomatique",
        "/liste-codes-pays-plaques-diplomatiques-francaises",
        "/codes-diplomatiques-suisses",
        "/plaque-immatriculation-verte",
      ],
    }

    return NextResponse.json({
      success: true,
      message: `Instructions pour soumettre ${url} à Google Search Console`,
      data: instructions,
    })
  } catch (error) {
    console.error("Error generating submission instructions:", error)
    return NextResponse.json({ error: "Failed to generate instructions" }, { status: 500 })
  }
}

export async function GET() {
  const allUrls = [
    "/",
    "/french",
    "/swiss",
    "/qu-est-ce-qu-une-plaque-diplomatique",
    "/comment-lire-une-plaque-diplomatique-francaise",
    "/comment-lire-une-plaque-diplomatique-suisse",
    "/liste-codes-pays-plaques-diplomatiques-francaises",
    "/codes-diplomatiques-suisses",
    "/privileges-immunites-plaques-diplomatiques",
    "/plaque-immatriculation-verte",
    "/plaque-verte-et-orange",
    "/couleur-des-plaques-diplomatiques",
    "/plaques-diplomatiques-liste-complete",
    "/faq-plaques-diplomatiques",
  ]

  const submissionPlan = {
    total_urls: allUrls.length,
    priority_order: [
      {
        priority: "HAUTE",
        urls: [
          "/comment-lire-une-plaque-diplomatique-suisse",
          "/comment-lire-une-plaque-diplomatique-francaise",
          "/qu-est-ce-qu-une-plaque-diplomatique",
        ],
        reason: "Pages de contenu principal avec fort potentiel SEO",
      },
      {
        priority: "MOYENNE",
        urls: [
          "/liste-codes-pays-plaques-diplomatiques-francaises",
          "/codes-diplomatiques-suisses",
          "/plaque-immatriculation-verte",
        ],
        reason: "Pages de référence importantes",
      },
      {
        priority: "NORMALE",
        urls: ["/french", "/swiss", "/faq-plaques-diplomatiques", "/privileges-immunites-plaques-diplomatiques"],
        reason: "Pages fonctionnelles et informatives",
      },
    ],
    daily_submission_plan: [
      {
        day: 1,
        urls: [
          "/comment-lire-une-plaque-diplomatique-suisse",
          "/comment-lire-une-plaque-diplomatique-francaise",
          "/qu-est-ce-qu-une-plaque-diplomatique",
        ],
      },
      {
        day: 2,
        urls: [
          "/liste-codes-pays-plaques-diplomatiques-francaises",
          "/codes-diplomatiques-suisses",
          "/plaque-immatriculation-verte",
        ],
      },
      {
        day: 3,
        urls: ["/french", "/swiss", "/faq-plaques-diplomatiques"],
      },
    ],
    instructions: "Soumettre maximum 3 URLs par jour pour éviter les limites Google",
  }

  return NextResponse.json({
    success: true,
    message: "Plan de soumission complet pour Google Search Console",
    data: submissionPlan,
  })
}
