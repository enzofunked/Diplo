import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirections 301 permanentes pour corriger les erreurs de redirection
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
    const url = request.nextUrl.clone()
    url.pathname = redirects[pathname]
    return NextResponse.redirect(url, 301)
  }

  // Supprimer les trailing slashes (sauf pour la racine)
  if (pathname !== "/" && pathname.endsWith("/")) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.slice(0, -1)
    return NextResponse.redirect(url, 301)
  }

  // Headers SEO optimisés pour toutes les pages importantes
  const response = NextResponse.next()

  // Headers de sécurité et SEO
  response.headers.set("X-Robots-Tag", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("Referrer-Policy", "origin-when-cross-origin")

  // Cache headers pour les ressources statiques
  if (pathname.startsWith("/favicon") || pathname.includes(".ico") || pathname.includes(".png")) {
    response.headers.set("Cache-Control", "public, max-age=31536000, immutable")
  }

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|sw.js|manifest.json|robots.txt|sitemap.xml).*)"],
}
