import { type NextRequest, NextResponse } from "next/server"
import { validateURLList, generateSafeURLs } from "@/utils/url-validator"

// Liste de toutes les pages du site
const ALL_PAGES = [
  "",
  "/french",
  "/swiss",
  "/qu-est-ce-qu-une-plaque-diplomatique",
  "/comment-lire-une-plaque-diplomatique-francaise",
  "/comment-lire-une-plaque-diplomatique-suisse",
  "/liste-codes-pays-plaques-diplomatiques-francaises",
  "/codes-diplomatiques-suisses",
  "/privileges-immunites-plaques-diplomatiques",
  "/plaque-immatriculation-verte",
  "/plaque-verte-et-orange",
  "/couleur-des-plaques-diplomatiques",
  "/plaques-diplomatiques-liste-complete",
  "/faq-plaques-diplomatiques",
  "/french/guide",
  "/swiss/guide",
  "/french/codes",
  "/swiss/codes",
  "/about",
  "/sources",
  "/help",
  "/terms",
  "/cookies",
  "/history",
  "/favorites",
]

export async function GET(request: NextRequest) {
  const baseUrl = "https://diplo-scanner.com"

  // Générer toutes les URLs complètes
  const allUrls = ALL_PAGES.map((path) => `${baseUrl}${path}`)

  // Ajouter des URLs avec paramètres pour tester les cas limites
  const urlsWithParams = [
    `${baseUrl}/french?search=test&page=1`,
    `${baseUrl}/swiss?code=123&country=france`,
    `${baseUrl}/liste-codes-pays-plaques-diplomatiques-francaises?filter=europe&sort=name&page=1&limit=50`,
  ]

  const testUrls = [...allUrls, ...urlsWithParams]

  // Valider toutes les URLs
  const report = validateURLList(testUrls)

  // Générer des URLs sûres
  const safeUrls = generateSafeURLs(baseUrl, ALL_PAGES)

  const response = {
    timestamp: new Date().toISOString(),
    baseUrl,
    validation: report,
    safeUrls,
    recommendations: generateRecommendations(report),
  }

  return NextResponse.json(response, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
  })
}

function generateRecommendations(report: any) {
  const recommendations = []

  if (report.invalidUrls > 0) {
    recommendations.push("❌ Des URLs dépassent la limite de 2000 caractères")
    recommendations.push("🔧 Utilisez des URLs plus courtes ou des paramètres abrégés")
  }

  if (report.averageLength > 1500) {
    recommendations.push("⚠️ Longueur moyenne des URLs élevée")
    recommendations.push("💡 Considérez raccourcir les noms de pages")
  }

  if (report.longestUrl.length > 1800) {
    recommendations.push("🚨 URL la plus longue proche de la limite")
    recommendations.push("🎯 Optimisez l'URL la plus longue en priorité")
  }

  if (recommendations.length === 0) {
    recommendations.push("✅ Toutes les URLs respectent les limites")
    recommendations.push("🎉 Aucune optimisation nécessaire")
  }

  return recommendations
}
