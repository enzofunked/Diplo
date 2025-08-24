import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url || !url.startsWith("https://diplo-scanner.com/")) {
      return NextResponse.json({ error: "URL invalide" }, { status: 400 })
    }

    // Simulation de soumission à Google Search Console
    // En production, vous devriez utiliser l'API Google Search Console
    const submissionData = {
      url,
      timestamp: new Date().toISOString(),
      status: "submitted",
      message: "URL soumise pour indexation",
    }

    console.log("Soumission URL à Google:", submissionData)

    return NextResponse.json({
      success: true,
      data: submissionData,
      instructions: [
        "1. Connectez-vous à Google Search Console",
        "2. Allez dans 'Inspection d'URL'",
        "3. Saisissez l'URL à indexer",
        "4. Cliquez sur 'Demander une indexation'",
      ],
    })
  } catch (error) {
    console.error("Erreur soumission:", error)
    return NextResponse.json({ error: "Erreur lors de la soumission" }, { status: 500 })
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
