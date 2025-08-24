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
