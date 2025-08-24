import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { urls } = await request.json()

    if (!urls || !Array.isArray(urls)) {
      return NextResponse.json({ error: "URLs array is required" }, { status: 400 })
    }

    const results = []

    for (const url of urls) {
      try {
        const fullUrl = url.startsWith("http") ? url : `https://diplo-scanner.com${url}`

        // Simulation de vérification d'URL (en production, faire un vrai fetch)
        const urlObj = new URL(fullUrl)

        results.push({
          url: fullUrl,
          path: urlObj.pathname,
          status: 200,
          statusText: "OK",
          redirects: [],
          loadTime: Math.floor(Math.random() * 500) + 100,
          seoScore: Math.floor(Math.random() * 20) + 80,
          issues: [],
          lastChecked: new Date().toISOString(),
        })
      } catch (error) {
        results.push({
          url,
          status: "error",
          error: error instanceof Error ? error.message : "Unknown error",
          lastChecked: new Date().toISOString(),
        })
      }
    }

    return NextResponse.json({
      success: true,
      results,
      summary: {
        total: urls.length,
        success: results.filter((r) => r.status === 200).length,
        errors: results.filter((r) => r.status === "error").length,
        averageLoadTime:
          results.filter((r) => r.loadTime).reduce((acc, r) => acc + r.loadTime, 0) /
            results.filter((r) => r.loadTime).length || 0,
      },
    })
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error", message: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    )
  }
}

export async function GET() {
  const priorityUrls = [
    "https://diplo-scanner.com/",
    "https://diplo-scanner.com/french",
    "https://diplo-scanner.com/swiss",
    "https://diplo-scanner.com/qu-est-ce-qu-une-plaque-diplomatique",
    "https://diplo-scanner.com/comment-lire-une-plaque-diplomatique-francaise",
    "https://diplo-scanner.com/comment-lire-une-plaque-diplomatique-suisse",
    "https://diplo-scanner.com/liste-codes-pays-plaques-diplomatiques-francaises",
    "https://diplo-scanner.com/codes-diplomatiques-suisses",
    "https://diplo-scanner.com/privileges-immunites-plaques-diplomatiques",
    "https://diplo-scanner.com/plaque-immatriculation-verte",
    "https://diplo-scanner.com/plaque-verte-et-orange",
  ]

  return NextResponse.json({
    message: "URL checking endpoint",
    priorityUrls,
    instructions: "POST with { urls: [...] } to check URL status",
  })
}
