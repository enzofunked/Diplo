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
        const response = await fetch(url, {
          method: "HEAD",
          headers: {
            "User-Agent": "Diplo-Scanner-Bot/1.0 (URL Check)",
          },
        })

        results.push({
          url,
          status: response.status,
          statusText: response.statusText,
          redirected: response.redirected,
          finalUrl: response.url,
          headers: {
            "content-type": response.headers.get("content-type"),
            "cache-control": response.headers.get("cache-control"),
            "x-robots-tag": response.headers.get("x-robots-tag"),
          },
        })
      } catch (error) {
        results.push({
          url,
          status: "ERROR",
          error: error instanceof Error ? error.message : "Unknown error",
        })
      }
    }

    return NextResponse.json({
      timestamp: new Date().toISOString(),
      results,
      summary: {
        total: urls.length,
        success: results.filter((r) => r.status === 200).length,
        redirects: results.filter((r) => r.redirected).length,
        errors: results.filter((r) => r.status === "ERROR" || (typeof r.status === "number" && r.status >= 400)).length,
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
