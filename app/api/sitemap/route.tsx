import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = "https://diplo-scanner.com"

  const urls = [
    { url: `${baseUrl}/`, priority: "1.0", changefreq: "daily" },
    { url: `${baseUrl}/french`, priority: "0.9", changefreq: "weekly" },
    { url: `${baseUrl}/swiss`, priority: "0.9", changefreq: "weekly" },
    { url: `${baseUrl}/qu-est-ce-qu-une-plaque-diplomatique`, priority: "0.8", changefreq: "monthly" },
    { url: `${baseUrl}/comment-lire-une-plaque-diplomatique-francaise`, priority: "0.8", changefreq: "monthly" },
    { url: `${baseUrl}/comment-lire-une-plaque-diplomatique-suisse`, priority: "0.8", changefreq: "monthly" },
    { url: `${baseUrl}/liste-codes-pays-plaques-diplomatiques-francaises`, priority: "0.7", changefreq: "monthly" },
    { url: `${baseUrl}/codes-diplomatiques-suisses`, priority: "0.7", changefreq: "monthly" },
    { url: `${baseUrl}/plaque-immatriculation-verte`, priority: "0.7", changefreq: "monthly" },
    { url: `${baseUrl}/plaque-verte-et-orange`, priority: "0.7", changefreq: "monthly" },
    { url: `${baseUrl}/couleur-des-plaques-diplomatiques`, priority: "0.6", changefreq: "monthly" },
    { url: `${baseUrl}/privileges-immunites-plaques-diplomatiques`, priority: "0.6", changefreq: "monthly" },
    { url: `${baseUrl}/faq-plaques-diplomatiques`, priority: "0.6", changefreq: "monthly" },
    { url: `${baseUrl}/plaques-diplomatiques-liste-complete`, priority: "0.6", changefreq: "monthly" },
    { url: `${baseUrl}/french/guide`, priority: "0.5", changefreq: "monthly" },
    { url: `${baseUrl}/swiss/guide`, priority: "0.5", changefreq: "monthly" },
    { url: `${baseUrl}/french/codes`, priority: "0.5", changefreq: "monthly" },
    { url: `${baseUrl}/swiss/codes`, priority: "0.5", changefreq: "monthly" },
    { url: `${baseUrl}/help`, priority: "0.4", changefreq: "monthly" },
    { url: `${baseUrl}/about`, priority: "0.4", changefreq: "monthly" },
    { url: `${baseUrl}/sources`, priority: "0.3", changefreq: "monthly" },
    { url: `${baseUrl}/terms`, priority: "0.3", changefreq: "yearly" },
    { url: `${baseUrl}/cookies`, priority: "0.3", changefreq: "yearly" },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ url, priority, changefreq }) => `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
