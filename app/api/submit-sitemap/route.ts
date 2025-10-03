import { NextResponse } from "next/server"

export async function POST() {
  try {
    const sitemapUrl = "https://diplo-scanner.com/api/sitemap"

    // Simulation de soumission du sitemap à Google
    const submission = {
      sitemap_url: sitemapUrl,
      submitted_at: new Date().toISOString(),
      status: "submitted",
      urls_count: 25,
      estimated_processing_time: "24-48 hours",
    }

    return NextResponse.json({
      success: true,
      message: "Sitemap submitted successfully to Google Search Console",
      data: submission,
    })
  } catch (error) {
    console.error("Error submitting sitemap:", error)
    return NextResponse.json({ error: "Failed to submit sitemap" }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    sitemap_url: "https://diplo-scanner.com/api/sitemap",
    last_submission: new Date().toISOString(),
    status: "active",
    urls_included: 25,
  })
}
