// Script Node.js pour vérifier toutes les URLs du site
import { validateURLList } from "../utils/url-validator.js"

const BASE_URL = "https://diplo-scanner.com"

// Toutes les pages du site
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

// URLs avec paramètres pour tester les cas limites
const URLS_WITH_PARAMS = [
  "/french?search=test&page=1&filter=active",
  "/swiss?code=123&country=france&sort=name",
  "/liste-codes-pays-plaques-diplomatiques-francaises?filter=europe&sort=name&page=1&limit=50&search=france",
  "/codes-diplomatiques-suisses?country=all&type=diplomatic&status=active&year=2024",
]

async function checkAllUrls() {
  console.log("🔍 Vérification de toutes les URLs du site...\n")

  // Générer toutes les URLs à tester
  const baseUrls = ALL_PAGES.map((path) => `${BASE_URL}${path}`)
  const paramUrls = URLS_WITH_PARAMS.map((path) => `${BASE_URL}${path}`)
  const allUrls = [...baseUrls, ...paramUrls]

  // Valider toutes les URLs
  const report = validateURLList(allUrls)

  // Afficher le rapport
  console.log("📊 RAPPORT DE VALIDATION DES URLs")
  console.log("================================")
  console.log(`Total des URLs testées: ${report.totalUrls}`)
  console.log(`URLs valides: ${report.validUrls} ✅`)
  console.log(`URLs invalides: ${report.invalidUrls} ❌`)
  console.log(`Longueur moyenne: ${report.averageLength} caractères`)
  console.log(`URL la plus longue: ${report.longestUrl.length} caractères`)
  console.log("")

  if (report.longestUrl.length > 0) {
    console.log("🔗 URL LA PLUS LONGUE:")
    console.log(`${report.longestUrl.url}`)
    console.log(`Longueur: ${report.longestUrl.length} caractères`)
    console.log("")
  }

  if (report.errors.length > 0) {
    console.log("❌ ERREURS DÉTECTÉES:")
    console.log("====================")
    report.errors.forEach((error, index) => {
      console.log(`${index + 1}. ${error.error}`)
      console.log(`   URL: ${error.url}`)
      console.log(`   Longueur: ${error.length} caractères`)
      console.log("")
    })
  }

  // Recommandations
  console.log("💡 RECOMMANDATIONS:")
  console.log("===================")

  if (report.invalidUrls === 0) {
    console.log("✅ Toutes les URLs respectent la limite de 2000 caractères")
    console.log("🎉 Aucune action requise")
  } else {
    console.log("🚨 Actions requises:")
    console.log("- Raccourcir les URLs qui dépassent 2000 caractères")
    console.log("- Utiliser des paramètres plus courts")
    console.log("- Considérer des alias pour les pages aux noms longs")
  }

  if (report.averageLength > 1500) {
    console.log("⚠️  Longueur moyenne élevée - considérer des URLs plus courtes")
  }

  if (report.longestUrl.length > 1800) {
    console.log("🎯 URL la plus longue proche de la limite - optimisation prioritaire")
  }

  console.log("")
  console.log("🔧 Pour tester en ligne: https://diplo-scanner.com/api/url-check")

  return report.invalidUrls === 0
}

// Exécuter la vérification
checkAllUrls()
  .then((success) => {
    if (success) {
      console.log("✅ Toutes les URLs sont valides!")
      process.exit(0)
    } else {
      console.log("❌ Des URLs invalides ont été détectées!")
      process.exit(1)
    }
  })
  .catch((error) => {
    console.error("💥 Erreur lors de la vérification:", error)
    process.exit(1)
  })
