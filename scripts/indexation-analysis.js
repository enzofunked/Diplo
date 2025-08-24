#!/usr/bin/env node

const https = require("https")
const fs = require("fs")
const path = require("path")

const baseUrl = "https://diplo-scanner.com"

// Pages avec problèmes d'indexation identifiés
const problematicUrls = [
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

async function analyzeUrl(url) {
  return new Promise((resolve) => {
    const req = https.request(
      url,
      {
        method: "GET",
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; DiploScanner-Indexation-Bot/1.0)",
        },
      },
      (res) => {
        let data = ""
        res.on("data", (chunk) => {
          data += chunk
        })

        res.on("end", () => {
          // Analyse basique du contenu
          const analysis = {
            url,
            status: res.statusCode,
            headers: {
              "content-type": res.headers["content-type"],
              "content-length": res.headers["content-length"],
              "cache-control": res.headers["cache-control"],
              "x-robots-tag": res.headers["x-robots-tag"],
            },
            content: {
              hasTitle: data.includes("<title>"),
              hasMetaDescription: data.includes('name="description"'),
              hasCanonical: data.includes('rel="canonical"'),
              hasStructuredData: data.includes('"@type"'),
              hasH1: data.includes("<h1"),
              wordCount: data.split(/\s+/).length,
              hasInternalLinks: data.includes('href="/'),
            },
            seo: {
              titleLength: 0,
              metaDescriptionLength: 0,
              hasOpenGraph: data.includes('property="og:'),
              hasTwitterCard: data.includes('name="twitter:'),
            },
          }

          // Extraction du titre
          const titleMatch = data.match(/<title[^>]*>([^<]+)<\/title>/i)
          if (titleMatch) {
            analysis.seo.titleLength = titleMatch[1].length
          }

          // Extraction de la meta description
          const metaMatch = data.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/i)
          if (metaMatch) {
            analysis.seo.metaDescriptionLength = metaMatch[1].length
          }

          resolve(analysis)
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

    req.end()
  })
}

async function analyzeAllProblematicUrls() {
  console.log("🔍 ANALYSE D'INDEXATION - PAGES PROBLÉMATIQUES")
  console.log("=".repeat(55))

  const results = []

  for (const urlPath of problematicUrls) {
    const fullUrl = `${baseUrl}${urlPath}`
    console.log(`\nAnalyse: ${fullUrl}`)

    const analysis = await analyzeUrl(fullUrl)
    results.push(analysis)

    if (analysis.status === 200) {
      console.log(`✅ Status: ${analysis.status}`)
      console.log(`📝 Titre: ${analysis.seo.titleLength} caractères`)
      console.log(`📄 Meta description: ${analysis.seo.metaDescriptionLength} caractères`)
      console.log(`🔗 Canonical: ${analysis.content.hasCanonical ? "✅" : "❌"}`)
      console.log(`📊 Structured data: ${analysis.content.hasStructuredData ? "✅" : "❌"}`)
      console.log(`🔍 Mots: ~${Math.round(analysis.content.wordCount / 10) * 10}`)
    } else {
      console.log(`❌ Status: ${analysis.status}`)
      if (analysis.error) {
        console.log(`❌ Erreur: ${analysis.error}`)
      }
    }
  }

  return results
}

function generateIndexationReport(results) {
  console.log("\n📊 RAPPORT D'INDEXATION:")
  console.log("=".repeat(30))

  const summary = {
    total: results.length,
    success: results.filter((r) => r.status === 200).length,
    errors: results.filter((r) => r.status !== 200).length,
    seoIssues: [],
    recommendations: [],
  }

  // Analyse des problèmes SEO
  results.forEach((result) => {
    if (result.status === 200) {
      if (result.seo.titleLength === 0) {
        summary.seoIssues.push(`${result.url}: Titre manquant`)
      } else if (result.seo.titleLength > 60) {
        summary.seoIssues.push(`${result.url}: Titre trop long (${result.seo.titleLength} caractères)`)
      }

      if (result.seo.metaDescriptionLength === 0) {
        summary.seoIssues.push(`${result.url}: Meta description manquante`)
      } else if (result.seo.metaDescriptionLength > 160) {
        summary.seoIssues.push(
          `${result.url}: Meta description trop longue (${result.seo.metaDescriptionLength} caractères)`,
        )
      }

      if (!result.content.hasCanonical) {
        summary.seoIssues.push(`${result.url}: URL canonique manquante`)
      }

      if (!result.content.hasStructuredData) {
        summary.seoIssues.push(`${result.url}: Structured data manquantes`)
      }
    }
  })

  // Recommandations
  if (summary.seoIssues.length > 0) {
    summary.recommendations.push("Corriger les problèmes SEO identifiés")
  }
  summary.recommendations.push("Soumettre le sitemap à Google Search Console")
  summary.recommendations.push("Demander l'indexation manuelle des pages")
  summary.recommendations.push("Améliorer les liens internes")
  summary.recommendations.push("Optimiser les Core Web Vitals")

  console.log(`📈 Pages analysées: ${summary.total}`)
  console.log(`✅ Pages OK: ${summary.success}`)
  console.log(`❌ Pages en erreur: ${summary.errors}`)
  console.log(`⚠️  Problèmes SEO: ${summary.seoIssues.length}`)

  if (summary.seoIssues.length > 0) {
    console.log("\n⚠️  PROBLÈMES SEO DÉTECTÉS:")
    summary.seoIssues.forEach((issue) => console.log(`   • ${issue}`))
  }

  console.log("\n🚀 RECOMMANDATIONS:")
  summary.recommendations.forEach((rec, index) => console.log(`   ${index + 1}. ${rec}`))

  return summary
}

async function main() {
  try {
    // Analyse de toutes les URLs problématiques
    const results = await analyzeAllProblematicUrls()

    // Génération du rapport
    const summary = generateIndexationReport(results)

    // Sauvegarde du rapport détaillé
    const reportPath = path.join(process.cwd(), "indexation-analysis-report.json")
    fs.writeFileSync(
      reportPath,
      JSON.stringify(
        {
          timestamp: new Date().toISOString(),
          summary,
          detailedResults: results,
        },
        null,
        2,
      ),
    )

    console.log(`\n💾 Rapport détaillé sauvegardé: ${reportPath}`)
    console.log("\n🎯 Prochaines étapes:")
    console.log("1. Corriger les problèmes SEO identifiés")
    console.log("2. Redéployer le site avec les corrections")
    console.log("3. Soumettre le sitemap mis à jour")
    console.log("4. Demander l'indexation dans Google Search Console")
  } catch (error) {
    console.error("❌ Erreur lors de l'analyse:", error.message)
  }
}

if (require.main === module) {
  main()
}

module.exports = { analyzeUrl, problematicUrls }
