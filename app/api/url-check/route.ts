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
