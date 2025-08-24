#!/usr/bin/env node

const https = require("https")
const http = require("http")

const baseUrl = "https://diplo-scanner.com"

// Pages prioritaires à vérifier
const priorityPages = [
  "/",
  "/liste-codes-pays-plaques-diplomatiques-francaises",
  "/codes-diplomatiques-suisses",
  "/privileges-immunites-plaques-diplomatiques",
  "/plaque-immatriculation-verte",
  "/plaque-verte-et-orange",
  "/comment-lire-une-plaque-diplomatique-francaise",
  "/comment-lire-une-plaque-diplomatique-suisse",
  "/qu-est-ce-qu-une-plaque-diplomatique",
  "/swiss",
  "/french",
]

function checkUrl(url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith("https:") ? https : http

    const req = protocol.request(url, { method: "HEAD" }, (res) => {
      resolve({
        url,
        status: res.statusCode,
        statusMessage: res.statusMessage,
        headers: res.headers,
        redirected: res.statusCode >= 300 && res.statusCode < 400,
        location: res.headers.location,
      })
    })

    req.on("error", (error) => {
      resolve({
        url,
        status: "ERROR",
        error: error.message,
      })
    })

    req.setTimeout(10000, () => {
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

async function checkAllPages() {
  console.log("🔍 Vérification des pages prioritaires...\n")

  const results = []

  for (const page of priorityPages) {
    const fullUrl = `${baseUrl}${page}`
    console.log(`Vérification: ${fullUrl}`)

    const result = await checkUrl(fullUrl)
    results.push(result)

    // Affichage du résultat
    if (result.status === 200) {
      console.log(`✅ ${result.status} - OK`)
    } else if (result.status >= 300 && result.status < 400) {
      console.log(`🔄 ${result.status} - Redirection vers: ${result.location}`)
    } else if (result.status >= 400) {
      console.log(`❌ ${result.status} - ${result.statusMessage}`)
    } else {
      console.log(`⚠️  ${result.status} - ${result.error}`)
    }

    console.log("")
  }

  // Résumé
  console.log("📊 RÉSUMÉ:")
  console.log("=".repeat(50))

  const success = results.filter((r) => r.status === 200)
  const redirects = results.filter((r) => r.redirected)
  const errors = results.filter((r) => r.status >= 400 || r.status === "ERROR" || r.status === "TIMEOUT")

  console.log(`✅ Pages OK: ${success.length}/${results.length}`)
  console.log(`🔄 Redirections: ${redirects.length}`)
  console.log(`❌ Erreurs: ${errors.length}`)

  if (redirects.length > 0) {
    console.log("\n🔄 REDIRECTIONS DÉTECTÉES:")
    redirects.forEach((r) => {
      console.log(`   ${r.url} → ${r.location}`)
    })
  }

  if (errors.length > 0) {
    console.log("\n❌ ERREURS DÉTECTÉES:")
    errors.forEach((r) => {
      console.log(`   ${r.url}: ${r.status} - ${r.error || r.statusMessage}`)
    })
  }

  console.log("\n🚀 ACTIONS RECOMMANDÉES:")
  console.log("1. Soumettez le sitemap: https://diplo-scanner.com/sitemap.xml")
  console.log("2. Demandez l'indexation des pages dans Google Search Console")
  console.log("3. Vérifiez les Core Web Vitals")
  console.log("4. Surveillez les erreurs 404 dans les logs")
}

// Exécution
checkAllPages().catch(console.error)
