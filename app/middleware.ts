import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const pathname = url.pathname

  // Headers SEO optimisés pour toutes les réponses
  const response = NextResponse.next()

  // Headers de sécurité et SEO
  response.headers.set("X-Robots-Tag", "index, follow")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")

  // Redirections 301 permanentes pour éviter les boucles
  const redirects: Record<string, string> = {
    "/scanner": "/",
    "/scan": "/",
    "/home": "/",
    "/index": "/",
    "/french-scanner": "/french",
    "/swiss-scanner": "/swiss",
    "/french-codes": "/liste-codes-pays-plaques-diplomatiques-francaises",
    "/swiss-codes": "/codes-diplomatiques-suisses",
    "/diplomatic-guide": "/qu-est-ce-qu-une-plaque-diplomatique",
    "/french-guide": "/comment-lire-une-plaque-diplomatique-francaise",
    "/swiss-guide": "/comment-lire-une-plaque-diplomatique-suisse",
    "/privileges": "/privileges-immunites-plaques-diplomatiques",
    "/green-plates": "/plaque-immatriculation-verte",
    "/green-orange": "/plaque-verte-et-orange",
  }

  // Vérifier les redirections
  if (redirects[pathname]) {
    const redirectUrl = new URL(redirects[pathname], request.url)
    return NextResponse.redirect(redirectUrl, 301)
  }

  // Supprimer les trailing slashes (sauf pour la racine)
  if (pathname !== "/" && pathname.endsWith("/")) {
    url.pathname = pathname.slice(0, -1)
    return NextResponse.redirect(url, 301)
  }

  // Normaliser les URLs avec des paramètres inutiles
  if (url.search.includes("utm_") || url.search.includes("fbclid") || url.search.includes("gclid")) {
    const cleanUrl = new URL(request.url)
    const params = new URLSearchParams(cleanUrl.search)

    // Supprimer les paramètres de tracking
    params.delete("utm_source")
    params.delete("utm_medium")
    params.delete("utm_campaign")
    params.delete("utm_content")
    params.delete("utm_term")
    params.delete("fbclid")
    params.delete("gclid")

    cleanUrl.search = params.toString()
    return NextResponse.redirect(cleanUrl, 301)
  }

  return response
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.json|sw.js|offline.html).*)",
  ],
}
