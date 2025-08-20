#!/usr/bin/env node

const fs = require("fs")
const path = require("path")

console.log("🔍 DIAGNOSTIC DU BUDGET D'EXPLORATION GOOGLE")
console.log("=".repeat(60))

// Vérifier la configuration robots.txt
const robotsPath = path.join(process.cwd(), "public", "robots.txt")
if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, "utf8")
  console.log("✅ robots.txt trouvé")

  if (robotsContent.includes("Crawl-delay: 0.5")) {
    console.log("✅ Crawl-delay optimisé (0.5s)")
  } else {
    console.log("⚠️  Crawl-delay non optimisé")
  }

  if (robotsContent.includes("Sitemap:")) {
    console.log("✅ Sitemap référencé dans robots.txt")
  } else {
    console.log("⚠️  Sitemap manquant dans robots.txt")
  }
} else {
  console.log("❌ robots.txt manquant")
}

// Vérifier next.config.mjs
const configPath = path.join(process.cwd(), "next.config.mjs")
if (fs.existsSync(configPath)) {
  const configContent = fs.readFileSync(configPath, "utf8")
  console.log("✅ next.config.mjs trouvé")

  if (configContent.includes("Cache-Control")) {
    console.log("✅ Headers Cache-Control configurés")
  }

  if (configContent.includes("X-Robots-Tag")) {
    console.log("✅ Headers X-Robots-Tag configurés")
  }

  if (configContent.includes("compress: true")) {
    console.log("✅ Compression activée")
  }
} else {
  console.log("❌ next.config.mjs manquant")
}

// Vérifier les pages importantes
const importantPages = [
  "app/page.tsx",
  "app/french/page.tsx",
  "app/swiss/page.tsx",
  "app/qu-est-ce-qu-une-plaque-diplomatique/page.tsx",
  "app/comment-lire-une-plaque-diplomatique-francaise/page.tsx",
  "app/comment-lire-une-plaque-diplomatique-suisse/page.tsx",
]

console.log("\n📄 VÉRIFICATION DES PAGES IMPORTANTES:")
importantPages.forEach((pagePath) => {
  const fullPath = path.join(process.cwd(), pagePath)
  if (fs.existsSync(fullPath)) {
    console.log(`✅ ${pagePath}`)
  } else {
    console.log(`❌ ${pagePath} - MANQUANT`)
  }
})

console.log("\n🎯 RECOMMANDATIONS:")
console.log("1. Soumettre sitemap.xml dans Google Search Console")
console.log("2. Demander indexation manuelle des pages prioritaires")
console.log("3. Surveiller Core Web Vitals")
console.log("4. Maintenir temps de réponse serveur < 200ms")
console.log("5. Vérifier régulièrement les statistiques d'exploration")

console.log("\n📊 URLS À INDEXER EN PRIORITÉ:")
console.log("- https://diplo-scanner.com/")
console.log("- https://diplo-scanner.com/french")
console.log("- https://diplo-scanner.com/swiss")
console.log("- https://diplo-scanner.com/qu-est-ce-qu-une-plaque-diplomatique")
console.log("- https://diplo-scanner.com/comment-lire-une-plaque-diplomatique-francaise")
console.log("- https://diplo-scanner.com/comment-lire-une-plaque-diplomatique-suisse")
