import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = "https://diplo-scanner.com"

  const urls = [
    // Pages principales avec priorité élevée
    { url: "", priority: "1.0", changefreq: "daily" },
    { url: "/french", priority: "0.9", changefreq: "weekly" },
    { url: "/swiss", priority: "0.9", changefreq: "weekly" },

    // Pages SEO importantes avec priorité élevée
    { url: "/liste-codes-pays-plaques-diplomatiques-francaises", priority: "0.9", changefreq: "weekly" },
    { url: "/codes-diplomatiques-suisses", priority: "0.9", changefreq: "weekly" },
    { url: "/privileges-immunites-plaques-diplomatiques", priority: "0.8", changefreq: "monthly" },
    { url: "/plaque-immatriculation-verte", priority: "0.8", changefreq: "monthly" },
    { url: "/plaque-verte-et-orange", priority: "0.8", changefreq: "monthly" },
    { url: "/comment-lire-une-plaque-diplomatique-francaise", priority: "0.9", changefreq: "weekly" },
    { url: "/comment-lire-une-plaque-diplomatique-suisse", priority: "0.9", changefreq: "weekly" },
    { url: "/qu-est-ce-qu-une-plaque-diplomatique", priority: "0.8", changefreq: "monthly" },

    // Pages de contenu
    { url: "/faq-plaques-diplomatiques", priority: "0.7", changefreq: "monthly" },
    { url: "/plaques-diplomatiques-liste-complete", priority: "0.7", changefreq: "monthly" },
    { url: "/couleur-des-plaques-diplomatiques", priority: "0.6", changefreq: "monthly" },

    // Pages utilitaires
    { url: "/history", priority: "0.5", changefreq: "never" },
    { url: "/favorites", priority: "0.5", changefreq: "never" },
    { url: "/help", priority: "0.6", changefreq: "monthly" },
    { url: "/about", priority: "0.5", changefreq: "monthly" },
    { url: "/sources", priority: "0.4", changefreq: "monthly" },

    // Pages légales
    { url: "/terms", priority: "0.3", changefreq: "yearly" },
    { url: "/cookies", priority: "0.3", changefreq: "yearly" },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ url, priority, changefreq }) => `  <url>
    <loc>${baseUrl}${url}</loc>
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
