import { NextResponse } from "next/server"

export async function GET() {
  try {
    const manifestUrl = "https://diplo-scanner.com/manifest.json"

    const response = await fetch(manifestUrl)
    const manifest = await response.json()

    const checks = {
      manifestExists: response.ok,
      hasName: !!manifest.name,
      hasShortName: !!manifest.short_name,
      hasIcons: !!manifest.icons && manifest.icons.length > 0,
      hasStartUrl: !!manifest.start_url,
      hasDisplay: !!manifest.display,
      hasThemeColor: !!manifest.theme_color,
      hasBackgroundColor: !!manifest.background_color,
    }

    const score = Object.values(checks).filter(Boolean).length
    const maxScore = Object.keys(checks).length

    return NextResponse.json({
      manifest,
      checks,
      score: `${score}/${maxScore}`,
      percentage: Math.round((score / maxScore) * 100),
      status: score === maxScore ? "perfect" : score >= maxScore * 0.8 ? "good" : "needs_improvement",
    })
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to check manifest",
        checks: { manifestExists: false },
        score: "0/8",
        percentage: 0,
        status: "error",
      },
      { status: 500 },
    )
  }
}
