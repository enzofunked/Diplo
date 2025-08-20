import { NextResponse } from "next/server"

const BASE_URL = "https://diplo-scanner.com"

// Pages prioritaires pour l'indexation
const PRIORITY_PAGES = [
  { url: "", priority: "1.0", changefreq: "daily" },
  { url: "/french", priority: "0.9", changefreq: "weekly" },
  { url: "/swiss", priority: "0.9", changefreq: "weekly" },
  { url: "/qu-est-ce-qu-une-plaque-diplomatique", priority: "0.8", changefreq: "monthly" },
  { url: "/comment-lire-une-plaque-diplomatique-francaise", priority: "0.8", changefreq: "monthly" },
  { url: "/comment-lire-une-plaque-diplomatique-suisse", priority: "0.8", changefreq: "monthly" },
]

// Pages secondaires
const SECONDARY_PAGES = [
  { url: "/liste-codes-pays-plaques-diplomatiques-francaises", priority: "0.7", changefreq: "monthly" },
  { url: "/codes-diplomatiques-suisses", priority: "0.7", changefreq: "monthly" },
  { url: "/privileges-immunites-plaques-diplomatiques", priority: "0.6", changefreq: "monthly" },
  { url: "/plaque-immatriculation-verte", priority: "0.6", changefreq: "monthly" },
  { url: "/plaque-verte-et-orange", priority: "0.6", changefreq: "monthly" },
  { url: "/couleur-des-plaques-diplomatiques", priority: "0.6", changefreq: "monthly" },
  { url: "/plaques-diplomatiques-liste-complete", priority: "0.6", changefreq: "monthly" },
  { url: "/faq-plaques-diplomatiques", priority: "0.6", changefreq: "monthly" },
]

// Pages utilitaires
const UTILITY_PAGES = [
  { url: "/french/guide", priority: "0.5", changefreq: "monthly" },
  { url: "/swiss/guide", priority: "0.5", changefreq: "monthly" },
  { url: "/french/codes", priority: "0.5", changefreq: "monthly" },
  { url: "/swiss/codes", priority: "0.5", changefreq: "monthly" },
  { url: "/about", priority: "0.4", changefreq: "yearly" },
  { url: "/sources", priority: "0.4", changefreq: "yearly" },
  { url: "/help", priority: "0.4", changefreq: "monthly" },
  { url: "/terms", priority: "0.3", changefreq: "yearly" },
  { url: "/cookies", priority: "0.3", changefreq: "yearly" },
  { url: "/history", priority: "0.3", changefreq: "never" },
  { url: "/favorites", priority: "0.3", changefreq: "never" },
]

export async function GET() {
  const allPages = [...PRIORITY_PAGES, ...SECONDARY_PAGES, ...UTILITY_PAGES]
  const currentDate = new Date().toISOString().split("T")[0]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
      "X-Sitemap-URLs": allPages.length.toString(),
      "X-Generated": currentDate,
    },
  })
}
