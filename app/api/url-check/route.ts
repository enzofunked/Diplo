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
            },
          }
        } catch (error) {
          return {
            url,
            status: 0,
            ok: false,
            error: "Network error",
          }
        }
      }),
    )

    return NextResponse.json({
      total: urls.length,
      results,
      summary: {
        ok: results.filter((r) => r.ok).length,
        errors: results.filter((r) => !r.ok).length,
      },
    })
  } catch (error) {
    console.error("URL check error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
