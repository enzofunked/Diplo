const https = require("https")
const http = require("http")

const urls = [
  "/",
  "/french",
  "/swiss",
  "/liste-codes-pays-plaques-diplomatiques-francaises",
  "/codes-diplomatiques-suisses",
  "/privileges-immunites-plaques-diplomatiques",
  "/plaque-immatriculation-verte",
  "/plaque-verte-et-orange",
  "/comment-lire-une-plaque-diplomatique-francaise",
  "/comment-lire-une-plaque-diplomatique-suisse",
  "/qu-est-ce-qu-une-plaque-diplomatique",
  "/faq-plaques-diplomatiques",
  "/plaques-diplomatiques-liste-complete",
  "/couleur-des-plaques-diplomatiques",
  "/history",
  "/favorites",
  "/help",
  "/about",
  "/sources",
  "/terms",
  "/cookies",
  "/api/sitemap",
  "/manifest.json",
  "/robots.txt",
]

function checkUrl(url) {
  return new Promise((resolve) => {
    const fullUrl = `https://diplo-scanner.com${url}`
    const client = fullUrl.startsWith("https") ? https : http

    const req = client.get(fullUrl, (res) => {
      const redirects = []
      const currentUrl = fullUrl

      // Suivre les redirections
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        redirects.push({
          from: currentUrl,
          to: res.headers.location,
          status: res.statusCode,
        })
      }

      resolve({
        url,
        fullUrl,
        status: res.statusCode,
        statusText: res.statusMessage,
        redirects,
        headers: {
          "content-type": res.headers["content-type"],
          "cache-control": res.headers["cache-control"],
          "x-robots-tag": res.headers["x-robots-tag"],
        },
        timestamp: new Date().toISOString(),
      })
    })

    req.on("error", (error) => {
      resolve({
        url,
        fullUrl,
        status: "ERROR",
        error: error.message,
        timestamp: new Date().toISOString(),
      })
    })

    req.setTimeout(10000, () => {
      req.destroy()
      resolve({
        url,
        fullUrl,
        status: "TIMEOUT",
        error: "Request timeout",
        timestamp: new Date().toISOString(),
      })
    })
  })
}

async function checkAllUrls() {
  console.log("🔍 Vérification de toutes les URLs...\n")

  const results = []

  for (const url of urls) {
    const result = await checkUrl(url)
    results.push(result)

    const status = result.status === 200 ? "✅" : result.status >= 300 && result.status < 400 ? "🔄" : "❌"

    console.log(`${status} ${result.url} - ${result.status} ${result.statusText || ""}`)

    if (result.redirects && result.redirects.length > 0) {
      result.redirects.forEach((redirect) => {
        console.log(`   └─ Redirect ${redirect.status}: ${redirect.to}`)
      })
    }

    if (result.error) {
      console.log(`   └─ Error: ${result.error}`)
    }
  }

  console.log("\n📊 Résumé:")
  console.log(`Total URLs: ${results.length}`)
  console.log(`Succès (200): ${results.filter((r) => r.status === 200).length}`)
  console.log(`Redirections: ${results.filter((r) => r.status >= 300 && r.status < 400).length}`)
  console.log(
    `Erreurs: ${results.filter((r) => r.status >= 400 || r.status === "ERROR" || r.status === "TIMEOUT").length}`,
  )

  // Analyser les redirections
  const redirectResults = results.filter((r) => r.redirects && r.redirects.length > 0)
  if (redirectResults.length > 0) {
    console.log("\n🔄 Redirections détectées:")
    redirectResults.forEach((result) => {
      console.log(`${result.url}:`)
      result.redirects.forEach((redirect) => {
        console.log(`  ${redirect.status}: ${redirect.from} → ${redirect.to}`)
      })
    })
  }

  return results
}

if (require.main === module) {
  checkAllUrls().catch(console.error)
}

module.exports = { checkAllUrls, checkUrl }
