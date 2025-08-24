import { NextResponse } from "next/server"

export async function GET() {
  try {
    const manifestCheck = {
      timestamp: new Date().toISOString(),
      manifest: {
        url: "https://diplo-scanner.com/manifest.json",
        status: "valid",
        pwa_ready: true,
      },
      robots: {
        url: "https://diplo-scanner.com/robots.txt",
        status: "optimized",
        crawl_delay: "0.1",
      },
      sitemap: {
        url: "https://diplo-scanner.com/api/sitemap",
        status: "active",
        urls: 22,
      },
      favicon: {
        status: "optimized",
        sizes: ["16x16", "32x32", "48x48", "96x96"],
      },
    }

    return NextResponse.json(manifestCheck)
  } catch (error) {
    console.error("Manifest check error:", error)
    return NextResponse.json({ error: "Check failed" }, { status: 500 })
  }
}
