import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { urls } = await request.json()

    if (!urls || !Array.isArray(urls)) {
      return NextResponse.json({ error: "URLs array is required" }, { status: 400 })
    }

    const results = await Promise.all(
      urls.map(async (url: string) => {
        try {
          const response = await fetch(url, { method: "HEAD" })
          return {
            url,
            status: response.status,
            ok: response.ok,
            headers: {
              "content-type": response.headers.get("content-type"),
              "cache-control": response.headers.get("cache-control"),
              "x-robots-tag": response.headers.get("x-robots-tag"),
            },
          }
        } catch (error) {
          return {
            url,
            status: 0,
            ok: false,
            error: "Failed to fetch",
          }
        }
      }),
    )

    return NextResponse.json({
      success: true,
      results,
      summary: {
        total: results.length,
        ok: results.filter((r) => r.ok).length,
        errors: results.filter((r) => !r.ok).length,
      },
    })
  } catch (error) {
    console.error("Error checking URLs:", error)
    return NextResponse.json({ error: "Failed to check URLs" }, { status: 500 })
  }
}

export async function GET() {
  const defaultUrls = [
    "https://diplo-scanner.com",
    "https://diplo-scanner.com/french",
    "https://diplo-scanner.com/swiss",
    "https://diplo-scanner.com/qu-est-ce-qu-une-plaque-diplomatique",
    "https://diplo-scanner.com/comment-lire-une-plaque-diplomatique-francaise",
  ]

  return NextResponse.json({
    message: "URL checker API",
    usage: 'POST with { "urls": ["url1", "url2"] }',
    default_urls: defaultUrls,
  })
}
