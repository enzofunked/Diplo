import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { urls } = await request.json()

    if (!urls || !Array.isArray(urls)) {
      return NextResponse.json({ error: "URLs array is required" }, { status: 400 })
    }

    // Simulation de soumission (remplacer par vraie API Google)
    const results = urls.map((url) => ({
      url,
      status: "submitted",
      timestamp: new Date().toISOString(),
    }))

    return NextResponse.json({
      success: true,
      message: `${urls.length} URLs submitted successfully`,
      results,
    })
  } catch (error) {
    console.error("Submit to Google error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
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
