import { NextResponse } from "next/server"

export async function GET() {
  try {
    const manifestUrl = "https://diplo-scanner.com/manifest.json"

    // Vérification du manifest
    const response = await fetch(manifestUrl)
    const manifest = await response.json()

    const check = {
      timestamp: new Date().toISOString(),
      manifestUrl,
      status: response.status,
      valid: response.ok,
      manifest,
      recommendations: [],
      issues: [],
    }

    // Vérifications de base
    if (!manifest.name) {
      check.issues.push("Missing 'name' field")
    }
    if (!manifest.short_name) {
      check.issues.push("Missing 'short_name' field")
    }
    if (!manifest.start_url) {
      check.issues.push("Missing 'start_url' field")
    }
    if (!manifest.display) {
      check.issues.push("Missing 'display' field")
    }
    if (!manifest.theme_color) {
      check.issues.push("Missing 'theme_color' field")
    }
    if (!manifest.background_color) {
      check.issues.push("Missing 'background_color' field")
    }
    if (!manifest.icons || manifest.icons.length === 0) {
      check.issues.push("Missing or empty 'icons' array")
    }

    // Recommandations
    if (manifest.icons && manifest.icons.length > 0) {
      const hasLargeIcon = manifest.icons.some((icon: any) => {
        const sizes = icon.sizes?.split("x")
        return sizes && Number.parseInt(sizes[0]) >= 512
      })
      if (!hasLargeIcon) {
        check.recommendations.push("Add a 512x512 icon for better PWA support")
      }
    }

    return NextResponse.json(check)
  } catch (error) {
    return NextResponse.json(
      {
        timestamp: new Date().toISOString(),
        error: "Failed to check manifest",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
