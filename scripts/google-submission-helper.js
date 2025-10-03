const { checkAllUrls } = require("./check-all-urls.js")

const importantUrls = [
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
]

function generateGoogleSubmissionInstructions() {
  console.log("📋 GUIDE DE SOUMISSION GOOGLE SEARCH CONSOLE\n")

  console.log("🔗 URLs prioritaires à soumettre manuellement:")
  importantUrls.forEach((url) => {
    console.log(`  https://diplo-scanner.com${url}`)
  })

  console.log("\n📝 ÉTAPES À SUIVRE:")
  console.log("1. Connectez-vous à Google Search Console")
  console.log("2. Sélectionnez la propriété diplo-scanner.com")
  console.log('3. Allez dans "Inspection d\'URL"')
  console.log('4. Collez chaque URL et cliquez sur "Demander une indexation"')

  console.log("\n🗺️  SITEMAP:")
  console.log("URL du sitemap: https://diplo-scanner.com/api/sitemap")
  console.log('1. Allez dans "Sitemaps"')
  console.log("2. Ajoutez: api/sitemap")
  console.log('3. Cliquez sur "Envoyer"')

  console.log("\n🔍 VÉRIFICATIONS:")
  console.log("1. Vérifiez que robots.txt est accessible: https://diplo-scanner.com/robots.txt")
  console.log("2. Testez le sitemap: https://diplo-scanner.com/api/sitemap")
  console.log("3. Vérifiez les redirections avec l'outil d'inspection d'URL")

  console.log("\n⚡ COMMANDES UTILES:")
  console.log("npm run check-urls     - Vérifier toutes les URLs")
  console.log("npm run optimize-crawl - Rapport d'optimisation")
  console.log("npm run analyze-indexation - Analyse SEO complète")

  return {
    priorityUrls: importantUrls.map((url) => `https://diplo-scanner.com${url}`),
    sitemapUrl: "https://diplo-scanner.com/api/sitemap",
    robotsUrl: "https://diplo-scanner.com/robots.txt",
  }
}

async function runCompleteCheck() {
  console.log("🚀 VÉRIFICATION COMPLÈTE AVANT SOUMISSION\n")

  try {
    // Vérifier toutes les URLs
    const results = await checkAllUrls()

    // Analyser les résultats
    const successUrls = results.filter((r) => r.status === 200)
    const redirectUrls = results.filter((r) => r.status >= 300 && r.status < 400)
    const errorUrls = results.filter((r) => r.status >= 400 || r.status === "ERROR")

    console.log("\n📊 RÉSULTATS:")
    console.log(`✅ URLs fonctionnelles: ${successUrls.length}`)
    console.log(`🔄 Redirections: ${redirectUrls.length}`)
    console.log(`❌ Erreurs: ${errorUrls.length}`)

    if (errorUrls.length > 0) {
      console.log("\n❌ ERREURS À CORRIGER:")
      errorUrls.forEach((result) => {
        console.log(`  ${result.url}: ${result.status} ${result.error || ""}`)
      })
    }

    if (redirectUrls.length > 0) {
      console.log("\n🔄 REDIRECTIONS DÉTECTÉES:")
      redirectUrls.forEach((result) => {
        console.log(`  ${result.url}: ${result.status}`)
        if (result.redirects) {
          result.redirects.forEach((redirect) => {
            console.log(`    → ${redirect.to}`)
          })
        }
      })
    }

    console.log("\n🎯 RECOMMANDATIONS:")
    if (errorUrls.length === 0 && redirectUrls.length === 0) {
      console.log("  ✅ Toutes les URLs sont prêtes pour la soumission")
      console.log("  ✅ Aucune erreur détectée")
      console.log("  ✅ Procédez à la soumission Google Search Console")
    } else {
      console.log("  ⚠️  Corrigez les erreurs avant la soumission")
      console.log("  ⚠️  Vérifiez les redirections")
    }

    return results
  } catch (error) {
    console.error("❌ Erreur lors de la vérification:", error.message)
    return []
  }
}

if (require.main === module) {
  const args = process.argv.slice(2)

  if (args.includes("--check")) {
    runCompleteCheck()
  } else {
    generateGoogleSubmissionInstructions()
  }
}

module.exports = { generateGoogleSubmissionInstructions, runCompleteCheck }
