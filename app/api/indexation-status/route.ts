import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const baseUrl = "https://diplo-scanner.com"

  // Pages prioritaires à vérifier
  const priorityPages = [
    "/liste-codes-pays-plaques-diplomatiques-francaises",
    "/codes-diplomatiques-suisses",
    "/privileges-immunites-plaques-diplomatiques",
    "/plaque-immatriculation-verte",
    "/plaque-verte-et-orange",
    "/comment-lire-une-plaque-diplomatique-francaise",
    "/comment-lire-une-plaque-diplomatique-suisse",
    "/qu-est-ce-qu-une-plaque-diplomatique",
    "/swiss",
    "/french",
  ]

  const results = []

  for (const page of priorityPages) {
    try {
      const response = await fetch(`${baseUrl}${page}`, {
        method: "HEAD",
        headers: {
          "User-Agent": "Diplo-Scanner-Bot/1.0 (Indexation Check)",
        },
      })

      results.push({
        url: `${baseUrl}${page}`,
        status: response.status,
        statusText: response.statusText,
        headers: {
          "content-type": response.headers.get("content-type"),
          "cache-control": response.headers.get("cache-control"),
          "x-robots-tag": response.headers.get("x-robots-tag"),
        },
        redirected: response.redirected,
        redirectUrl: response.url !== `${baseUrl}${page}` ? response.url : null,
      })
    } catch (error) {
      results.push({
        url: `${baseUrl}${page}`,
        status: "ERROR",
        error: error instanceof Error ? error.message : "Unknown error",
      })
    }
  }

  return NextResponse.json({
    timestamp: new Date().toISOString(),
    baseUrl,
    results,
    summary: {
      total: results.length,
      success: results.filter((r) => r.status === 200).length,
      redirects: results.filter((r) => r.redirected).length,
      errors: results.filter((r) => r.status === "ERROR" || (typeof r.status === "number" && r.status >= 400)).length,
    },
  })
}
