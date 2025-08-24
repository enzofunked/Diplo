#!/usr/bin/env node

const https = require("https")
const http = require("http")

const baseUrl = "https://diplo-scanner.com"

// Toutes les URLs importantes du site
const allUrls = [
  "/",
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
  "/help",
  "/terms",
  "/cookies",
  "/history",
  "/favorites",
]

function checkUrl(url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith("https:") ? https : http

    const req = protocol.request(
      url,
      {
        method: "HEAD",
        headers: {
          "User-Agent": "Diplo-Scanner-Bot/1.0 (URL Check)",
        },
        timeout: 10000,
      },
      (res) => {
        resolve({
          url,
          status: res.statusCode,
          statusMessage: res.statusMessage,
          headers: {
            "content-type": res.headers["content-type"],
            "cache-control": res.headers["cache-control"],
            "x-robots-tag": res.headers["x-robots-tag"],
            location: res.headers.location,
          },
          redirected: res.statusCode >= 300 && res.statusCode < 400,
        })
      },
    )

    req.on("error", (error) => {
      resolve({
        url,
        status: "ERROR",
        error: error.message,
      })
    })

    req.on("timeout", () => {
      req.destroy()
      resolve({
        url,
        status: "TIMEOUT",
        error: "Request timeout",
      })
    })

    req.end()
  })
}

async function checkAllUrls() {
  console.log("🔍 Vérification de toutes les URLs du site...\n")

  const results = []
  let successCount = 0
  let redirectCount = 0
  let errorCount = 0

  for (const path of allUrls) {
    const fullUrl = `${baseUrl}${path}`
    console.log(`Vérification: ${fullUrl}`)

    const result = await checkUrl(fullUrl)
    results.push(result)

    if (result.status === 200) {
      console.log(`✅ ${result.status} - OK`)
      successCount++
    } else if (result.status >= 300 && result.status < 400) {
      console.log(`🔄 ${result.status} - Redirection vers: ${result.headers.location}`)
      redirectCount++
    } else if (result.status >= 400) {
      console.log(`❌ ${result.status} - ${result.statusMessage}`)
      errorCount++
    } else {
      console.log(`⚠️  ${result.status} - ${result.error}`)
      errorCount++
    }

    console.log("")
  }

  // Résumé détaillé
  console.log("📊 RÉSUMÉ COMPLET:")
  console.log("=".repeat(60))
  console.log(`Total des URLs vérifiées: ${results.length}`)
  console.log(`✅ Succès (200): ${successCount}`)
  console.log(`🔄 Redirections: ${redirectCount}`)
  console.log(`❌ Erreurs: ${errorCount}`)

  // Détail des redirections
  const redirections = results.filter((r) => r.redirected)
  if (redirections.length > 0) {
    console.log("\n🔄 REDIRECTIONS DÉTECTÉES:")
    redirections.forEach((r) => {
      console.log(`   ${r.url} → ${r.headers.location} (${r.status})`)
    })
  }

  // Détail des erreurs
  const errors = results.filter((r) => r.status >= 400 || r.status === "ERROR" || r.status === "TIMEOUT")
  if (errors.length > 0) {
    console.log("\n❌ ERREURS DÉTECTÉES:")
    errors.forEach((r) => {
      console.log(`   ${r.url}: ${r.status} - ${r.error || r.statusMessage}`)
    })
  }

  // Recommandations
  console.log("\n🚀 RECOMMANDATIONS:")
  console.log("1. Corrigez toutes les erreurs 4xx et 5xx")
  console.log("2. Vérifiez que les redirections sont nécessaires")
  console.log("3. Assurez-vous que les redirections sont des 301 (permanentes)")
  console.log("4. Soumettez le sitemap à Google Search Console")
  console.log("5. Demandez l'indexation des pages importantes")

  return results
}

// Exécution
if (require.main === module) {
  checkAllUrls().catch(console.error)
}

module.exports = { checkAllUrls, allUrls }
