import { NextResponse } from "next/server"

export async function POST() {
  try {
    const sitemapUrl = "https://diplo-scanner.com/api/sitemap"

    // Simulation de soumission du sitemap
    const submission = {
      url: sitemapUrl,
      submitted: true,
      timestamp: new Date().toISOString(),
      status: "pending_validation",
    }

    return NextResponse.json({
      success: true,
      message: "Sitemap submitted successfully",
      data: submission,
    })
  } catch (error) {
    console.error("Sitemap submission error:", error)
    return NextResponse.json({ error: "Failed to submit sitemap" }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    sitemapUrl: "https://diplo-scanner.com/api/sitemap",
    lastSubmission: new Date().toISOString(),
    status: "active",
  })
}
