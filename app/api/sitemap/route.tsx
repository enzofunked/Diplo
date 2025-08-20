import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = "https://diplo-scanner.com"
  const currentDate = new Date().toISOString()

  const urls = [
    // Pages principales (priorité maximale)
    { url: `${baseUrl}/`, priority: "1.0", changefreq: "daily" },
    { url: `${baseUrl}/french`, priority: "0.9", changefreq: "weekly" },
    { url: `${baseUrl}/swiss`, priority: "0.9", changefreq: "weekly" },

    // Pages SEO importantes
    { url: `${baseUrl}/qu-est-ce-qu-une-plaque-diplomatique`, priority: "0.8", changefreq: "monthly" },
    { url: `${baseUrl}/comment-lire-une-plaque-diplomatique-francaise`, priority: "0.8", changefreq: "monthly" },
    { url: `${baseUrl}/comment-lire-une-plaque-diplomatique-suisse`, priority: "0.8", changefreq: "monthly" },

    // Pages de codes
    { url: `${baseUrl}/liste-codes-pays-plaques-diplomatiques-francaises`, priority: "0.7", changefreq: "monthly" },
    { url: `${baseUrl}/codes-diplomatiques-suisses`, priority: "0.7", changefreq: "monthly" },

    // Pages informatives
    { url: `${baseUrl}/privileges-immunites-plaques-diplomatiques`, priority: "0.6", changefreq: "monthly" },
    { url: `${baseUrl}/plaque-immatriculation-verte`, priority: "0.6", changefreq: "monthly" },
    { url: `${baseUrl}/plaque-verte-et-orange`, priority: "0.6", changefreq: "monthly" },
    { url: `${baseUrl}/couleur-des-plaques-diplomatiques`, priority: "0.6", changefreq: "monthly" },
    { url: `${baseUrl}/plaques-diplomatiques-liste-complete`, priority: "0.6", changefreq: "monthly" },
    { url: `${baseUrl}/faq-plaques-diplomatiques`, priority: "0.6", changefreq: "monthly" },

    // Pages guides
    { url: `${baseUrl}/french/guide`, priority: "0.5", changefreq: "monthly" },
    { url: `${baseUrl}/swiss/guide`, priority: "0.5", changefreq: "monthly" },
    { url: `${baseUrl}/french/codes`, priority: "0.5", changefreq: "monthly" },
    { url: `${baseUrl}/swiss/codes`, priority: "0.5", changefreq: "monthly" },

    // Pages utilitaires
    { url: `${baseUrl}/history`, priority: "0.4", changefreq: "weekly" },
    { url: `${baseUrl}/favorites`, priority: "0.4", changefreq: "weekly" },
    { url: `${baseUrl}/help`, priority: "0.4", changefreq: "monthly" },

    // Pages informatives
    { url: `${baseUrl}/about`, priority: "0.3", changefreq: "monthly" },
    { url: `${baseUrl}/sources`, priority: "0.3", changefreq: "monthly" },

    // Pages légales
    { url: `${baseUrl}/terms`, priority: "0.2", changefreq: "yearly" },
    { url: `${baseUrl}/cookies`, priority: "0.2", changefreq: "yearly" },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ url, priority, changefreq }) => `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400",
      "X-Total-URLs": urls.length.toString(),
      "X-Priority-Pages": "6",
      "X-Generated": currentDate,
    },
  })
}
