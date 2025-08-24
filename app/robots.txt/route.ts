import { NextResponse } from "next/server"

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Pages importantes à indexer en priorité
Allow: /liste-codes-pays-plaques-diplomatiques-francaises
Allow: /codes-diplomatiques-suisses
Allow: /privileges-immunites-plaques-diplomatiques
Allow: /plaque-immatriculation-verte
Allow: /plaque-verte-et-orange
Allow: /comment-lire-une-plaque-diplomatique-francaise
Allow: /comment-lire-une-plaque-diplomatique-suisse
Allow: /qu-est-ce-qu-une-plaque-diplomatique
Allow: /swiss
Allow: /french

# Fichiers à ne pas indexer
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /private/
Disallow: /version-check.js
Disallow: /sw.js
Disallow: /offline.html

# Sitemap
Sitemap: https://diplo-scanner.com/sitemap.xml

# Crawl delay optimisé pour un meilleur budget de crawl
Crawl-delay: 0.1`

  return new NextResponse(robotsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
      "X-Robots-Tag": "noindex",
    },
  })
}
