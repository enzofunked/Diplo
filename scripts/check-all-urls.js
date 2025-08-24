const urls = [
  "https://diplo-scanner.com/",
  "https://diplo-scanner.com/french",
  "https://diplo-scanner.com/swiss",
  "https://diplo-scanner.com/qu-est-ce-qu-une-plaque-diplomatique",
  "https://diplo-scanner.com/comment-lire-une-plaque-diplomatique-francaise",
  "https://diplo-scanner.com/comment-lire-une-plaque-diplomatique-suisse",
  "https://diplo-scanner.com/liste-codes-pays-plaques-diplomatiques-francaises",
  "https://diplo-scanner.com/codes-diplomatiques-suisses",
  "https://diplo-scanner.com/privileges-immunites-plaques-diplomatiques",
  "https://diplo-scanner.com/plaque-immatriculation-verte",
  "https://diplo-scanner.com/plaque-verte-et-orange",
  "https://diplo-scanner.com/faq-plaques-diplomatiques",
  "https://diplo-scanner.com/plaques-diplomatiques-liste-complete",
  "https://diplo-scanner.com/couleur-des-plaques-diplomatiques",
  "https://diplo-scanner.com/history",
  "https://diplo-scanner.com/favorites",
  "https://diplo-scanner.com/help",
  "https://diplo-scanner.com/about",
  "https://diplo-scanner.com/terms",
  "https://diplo-scanner.com/cookies",
  "https://diplo-scanner.com/sources",
  "https://diplo-scanner.com/submit-urls",
  "https://diplo-scanner.com/api/sitemap",
  "https://diplo-scanner.com/robots.txt",
]

async function checkUrl(url) {
  try {
    const response = await fetch(url, { method: "HEAD" })
    return {
      url,
      status: response.status,
      ok: response.ok,
      redirected: response.redirected,
      finalUrl: response.url,
    }
  } catch (error) {
    return {
      url,
      status: 0,
      ok: false,
      error: error.message,
    }
  }
}

async function checkAllUrls() {
  console.log("🔍 Checking all URLs...\n")

  const results = []

  for (const url of urls) {
    const result = await checkUrl(url)
    results.push(result)

    const status = result.ok ? "✅" : "❌"
    const redirectInfo = result.redirected ? ` → ${result.finalUrl}` : ""
    console.log(`${status} ${result.status} - ${result.url}${redirectInfo}`)
  }

  console.log("\n📊 Summary:")
  const okCount = results.filter((r) => r.ok).length
  const errorCount = results.filter((r) => !r.ok).length
  const redirectCount = results.filter((r) => r.redirected).length

  console.log(`✅ OK: ${okCount}`)
  console.log(`❌ Errors: ${errorCount}`)
  console.log(`🔄 Redirects: ${redirectCount}`)

  if (errorCount > 0) {
    console.log("\n❌ Errors found:")
    results
      .filter((r) => !r.ok)
      .forEach((r) => {
        console.log(`- ${r.url}: ${r.error || `HTTP ${r.status}`}`)
      })
  }

  if (redirectCount > 0) {
    console.log("\n🔄 Redirects:")
    results
      .filter((r) => r.redirected)
      .forEach((r) => {
        console.log(`- ${r.url} → ${r.finalUrl}`)
      })
  }
}

checkAllUrls().catch(console.error)
