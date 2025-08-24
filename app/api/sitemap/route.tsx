import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = "https://diplo-scanner.com"
  const currentDate = new Date().toISOString()

  // Pages prioritaires avec leurs métadonnées
  const pages = [
    {
      url: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "1.0",
    },
    {
      url: `${baseUrl}/french`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.9",
    },
    {
      url: `${baseUrl}/swiss`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.9",
    },
    {
      url: `${baseUrl}/qu-est-ce-qu-une-plaque-diplomatique`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      url: `${baseUrl}/comment-lire-une-plaque-diplomatique-francaise`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      url: `${baseUrl}/comment-lire-une-plaque-diplomatique-suisse`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      url: `${baseUrl}/liste-codes-pays-plaques-diplomatiques-francaises`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      url: `${baseUrl}/codes-diplomatiques-suisses`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      url: `${baseUrl}/privileges-immunites-plaques-diplomatiques`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      url: `${baseUrl}/plaque-immatriculation-verte`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      url: `${baseUrl}/plaque-verte-et-orange`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      url: `${baseUrl}/couleur-des-plaques-diplomatiques`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.7",
    },
    {
      url: `${baseUrl}/plaques-diplomatiques-liste-complete`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.7",
    },
    {
      url: `${baseUrl}/faq-plaques-diplomatiques`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.7",
    },
    {
      url: `${baseUrl}/french/guide`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.7",
    },
    {
      url: `${baseUrl}/swiss/guide`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.7",
    },
    {
      url: `${baseUrl}/french/codes`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.7",
    },
    {
      url: `${baseUrl}/swiss/codes`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.7",
    },
    {
      url: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: "yearly",
      priority: "0.5",
    },
    {
      url: `${baseUrl}/help`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.6",
    },
    {
      url: `${baseUrl}/terms`,
      lastmod: currentDate,
      changefreq: "yearly",
      priority: "0.3",
    },
    {
      url: `${baseUrl}/cookies`,
      lastmod: currentDate,
      changefreq: "yearly",
      priority: "0.3",
    },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${pages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
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
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
      "X-Robots-Tag": "noindex",
    },
  })
}
