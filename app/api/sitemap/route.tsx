import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = "https://diplo-scanner.com"

  // Pages prioritaires avec métadonnées optimisées
  const pages = [
    { url: "", priority: "1.0", changefreq: "weekly" },
    { url: "/french", priority: "0.9", changefreq: "weekly" },
    { url: "/swiss", priority: "0.9", changefreq: "weekly" },
    { url: "/liste-codes-pays-plaques-diplomatiques-francaises", priority: "0.9", changefreq: "monthly" },
    { url: "/codes-diplomatiques-suisses", priority: "0.9", changefreq: "monthly" },
    { url: "/comment-lire-une-plaque-diplomatique-francaise", priority: "0.8", changefreq: "monthly" },
    { url: "/comment-lire-une-plaque-diplomatique-suisse", priority: "0.8", changefreq: "monthly" },
    { url: "/qu-est-ce-qu-une-plaque-diplomatique", priority: "0.8", changefreq: "monthly" },
    { url: "/privileges-immunites-plaques-diplomatiques", priority: "0.8", changefreq: "monthly" },
    { url: "/plaque-immatriculation-verte", priority: "0.8", changefreq: "monthly" },
    { url: "/plaque-verte-et-orange", priority: "0.8", changefreq: "monthly" },
    { url: "/faq-plaques-diplomatiques", priority: "0.7", changefreq: "monthly" },
    { url: "/couleur-des-plaques-diplomatiques", priority: "0.7", changefreq: "monthly" },
    { url: "/plaques-diplomatiques-liste-complete", priority: "0.7", changefreq: "monthly" },
    { url: "/about", priority: "0.5", changefreq: "yearly" },
    { url: "/sources", priority: "0.5", changefreq: "yearly" },
    { url: "/terms", priority: "0.3", changefreq: "yearly" },
    { url: "/cookies", priority: "0.3", changefreq: "yearly" },
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
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
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
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "X-Robots-Tag": "noindex",
    },
  })
}
