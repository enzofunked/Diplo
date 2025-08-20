import { NextResponse } from "next/server"

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /
Allow: /french
Allow: /swiss
Allow: /qu-est-ce-qu-une-plaque-diplomatique
Allow: /comment-lire-une-plaque-diplomatique-francaise
Allow: /comment-lire-une-plaque-diplomatique-suisse
Allow: /liste-codes-pays-plaques-diplomatiques-francaises
Allow: /codes-diplomatiques-suisses
Allow: /privileges-immunites-plaques-diplomatiques
Allow: /plaque-immatriculation-verte
Allow: /plaque-verte-et-orange
Allow: /couleur-des-plaques-diplomatiques
Allow: /plaques-diplomatiques-liste-complete
Allow: /faq-plaques-diplomatiques
Allow: /french/guide
Allow: /swiss/guide
Allow: /french/codes
Allow: /swiss/codes
Allow: /about
Allow: /sources
Allow: /help
Allow: /terms
Allow: /cookies
Allow: /history
Allow: /favorites

Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /private/
Disallow: /*.json$
Disallow: /*?*utm_*
Disallow: /*?*fbclid*
Disallow: /*?*gclid*

Crawl-delay: 0.5

Sitemap: https://diplo-scanner.com/sitemap.xml`

  return new NextResponse(robotsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400",
    },
  })
}
