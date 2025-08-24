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
        // Validation de l'URL
        const urlObj = new URL(url)
        if (!urlObj.hostname.includes("diplo-scanner.com")) {
          results.push({ url, status: "error", message: "Invalid domain" })
          continue
        }

        // Simulation de soumission à Google (en production, utiliser l'API Google Search Console)
        results.push({
          url,
          status: "submitted",
          message: "URL submitted for indexing",
          timestamp: new Date().toISOString(),
        })
      } catch (error) {
        results.push({
          url,
          status: "error",
          message: error instanceof Error ? error.message : "Unknown error",
        })
      }
    }

    return NextResponse.json({
      success: true,
      results,
      total: urls.length,
      submitted: results.filter((r) => r.status === "submitted").length,
      errors: results.filter((r) => r.status === "error").length,
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
    urls: priorityUrls,
    total: priorityUrls.length,
    message: "Priority URLs for Google submission",
  })
}
