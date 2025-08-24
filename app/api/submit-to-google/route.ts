import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 })
    }

    // Validation de l'URL
    const validUrl = new URL(url)
    if (!validUrl.hostname.includes("diplo-scanner.com")) {
      return NextResponse.json({ error: "Invalid domain" }, { status: 400 })
    }

    // Simulation de soumission à Google (en production, utiliser l'API Google Search Console)
    const submissionData = {
      url: url,
      timestamp: new Date().toISOString(),
      status: "submitted",
      method: "indexing_api",
    }

    return NextResponse.json({
      success: true,
      message: "URL submitted to Google for indexing",
      data: submissionData,
    })
  } catch (error) {
    console.error("Error submitting to Google:", error)
    return NextResponse.json({ error: "Failed to submit URL to Google" }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Google submission API",
    endpoints: {
      submit: "POST /api/submit-to-google",
      status: "GET /api/indexation-status",
    },
  })
}
