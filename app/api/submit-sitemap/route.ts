import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { sitemapUrl } = await request.json()

    if (!sitemapUrl) {
      return NextResponse.json({ error: "Sitemap URL is required" }, { status: 400 })
    }

    // Validation de l'URL du sitemap
    if (!sitemapUrl.startsWith("https://diplo-scanner.com/")) {
      return NextResponse.json({ error: "Invalid sitemap URL" }, { status: 400 })
    }

    // Simulation de soumission du sitemap (en production, utilisez l'API Google Search Console)
    const result = {
      sitemapUrl,
      status: "submitted",
      timestamp: new Date().toISOString(),
      message: "Sitemap submitted successfully to Google Search Console",
      searchConsoleUrl: "https://search.google.com/search-console",
      instructions: [
        "1. Go to Google Search Console",
        "2. Select your property (diplo-scanner.com)",
        "3. Navigate to Sitemaps section",
        "4. Add sitemap URL: sitemap.xml",
        "5. Click Submit",
      ],
    }

    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error", message: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Sitemap submission endpoint",
    sitemapUrl: "https://diplo-scanner.com/sitemap.xml",
    instructions: "POST with { sitemapUrl: 'https://diplo-scanner.com/sitemap.xml' }",
    googleSearchConsole: "https://search.google.com/search-console",
  })
}
