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
            statusText: response.statusText,
            accessible: response.ok,
            headers: {
              contentType: response.headers.get("content-type"),
              cacheControl: response.headers.get("cache-control"),
            },
          }
        } catch (error) {
          return {
            url,
            status: 0,
            statusText: "Network Error",
            accessible: false,
            error: error instanceof Error ? error.message : "Unknown error",
          }
        }
      }),
    )

    return NextResponse.json({
      totalUrls: urls.length,
      accessibleUrls: results.filter((r) => r.accessible).length,
      results,
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to check URLs" }, { status: 500 })
  }
}
