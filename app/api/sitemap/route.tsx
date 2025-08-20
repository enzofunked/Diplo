import { NextResponse } from "next/server"
import { validateURL, generateSafeURLs } from "@/utils/url-validator"

// Liste des pages principales avec leurs priorités et fréquences de mise à jour
const pages = [
  { url: "", priority: 1.0, changefreq: "daily" },
  { url: "/french", priority: 0.9, changefreq: "weekly" },
  { url: "/swiss", priority: 0.9, changefreq: "weekly" },
  { url: "/qu-est-ce-qu-une-plaque-diplomatique", priority: 0.8, changefreq: "monthly" },
  { url: "/comment-lire-une-plaque-diplomatique-francaise", priority: 0.8, changefreq: "monthly" },
  { url: "/comment-lire-une-plaque-diplomatique-suisse", priority: 0.8, changefreq: "monthly" },
  { url: "/liste-codes-pays-plaques-diplomatiques-francaises", priority: 0.7, changefreq: "monthly" },
  { url: "/codes-diplomatiques-suisses", priority: 0.7, changefreq: "monthly" },
  { url: "/privileges-immunites-plaques-diplomatiques", priority: 0.6, changefreq: "monthly" },
  { url: "/plaque-immatriculation-verte", priority: 0.6, changefreq: "monthly" },
  { url: "/plaque-verte-et-orange", priority: 0.6, changefreq: "monthly" },
  { url: "/couleur-des-plaques-diplomatiques", priority: 0.6, changefreq: "monthly" },
  { url: "/plaques-diplomatiques-liste-complete", priority: 0.6, changefreq: "monthly" },
  { url: "/faq-plaques-diplomatiques", priority: 0.5, changefreq: "monthly" },
  { url: "/french/guide", priority: 0.5, changefreq: "monthly" },
  { url: "/swiss/guide", priority: 0.5, changefreq: "monthly" },
  { url: "/french/codes", priority: 0.5, changefreq: "monthly" },
  { url: "/swiss/codes", priority: 0.5, changefreq: "monthly" },
  { url: "/about", priority: 0.4, changefreq: "yearly" },
  { url: "/sources", priority: 0.4, changefreq: "yearly" },
  { url: "/help", priority: 0.4, changefreq: "monthly" },
  { url: "/terms", priority: 0.3, changefreq: "yearly" },
  { url: "/cookies", priority: 0.3, changefreq: "yearly" },
]

export async function GET() {
  const baseUrl = "https://diplo-scanner.com"
  const currentDate = new Date().toISOString()

  // Générer des URLs sûres (garanties < 2000 caractères)
  const paths = pages.map((page) => page.url)
  const safeUrls = generateSafeURLs(baseUrl, paths)

  // Créer un map pour retrouver les métadonnées
  const pageMetadata = new Map()
  pages.forEach((page) => {
    const fullUrl = `${baseUrl}${page.url}`
    pageMetadata.set(fullUrl, page)
  })

  // Générer le XML du sitemap
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  // Statistiques pour le logging
  let totalUrls = 0
  let validUrls = 0
  let skippedUrls = 0

  // Ajouter chaque URL sûre au sitemap
  for (const url of safeUrls) {
    totalUrls++

    // Double vérification de la longueur
    const validation = validateURL(url)

    if (validation.isValid && validation.length <= 2000) {
      validUrls++

      // Récupérer les métadonnées de la page
      const metadata = pageMetadata.get(url) || {
        priority: 0.5,
        changefreq: "monthly",
      }

      sitemap += "  <url>\n"
      sitemap += `    <loc>${url}</loc>\n`
      sitemap += `    <lastmod>${currentDate}</lastmod>\n`
      sitemap += `    <changefreq>${metadata.changefreq}</changefreq>\n`
      sitemap += `    <priority>${metadata.priority}</priority>\n`
      sitemap += "  </url>\n"
    } else {
      skippedUrls++
      console.warn(`URL ignorée dans le sitemap (${validation.length} caractères): ${url}`)
    }
  }

  sitemap += "</urlset>"

  // Log des statistiques
  console.log(`Sitemap généré: ${validUrls}/${totalUrls} URLs valides, ${skippedUrls} ignorées`)

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "X-Robots-Tag": "noindex",
      "X-Total-URLs": totalUrls.toString(),
      "X-Valid-URLs": validUrls.toString(),
      "X-Skipped-URLs": skippedUrls.toString(),
    },
  })
}
