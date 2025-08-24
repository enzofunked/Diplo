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

  // Headers SEO pour les pages importantes
  const response = NextResponse.next()

  // Pages importantes avec headers SEO optimisés
  const importantPages = [
    "/",
    "/french",
    "/swiss",
    "/liste-codes-pays-plaques-diplomatiques-francaises",
    "/codes-diplomatiques-suisses",
    "/privileges-immunites-plaques-diplomatiques",
    "/plaque-immatriculation-verte",
    "/plaque-verte-et-orange",
    "/comment-lire-une-plaque-diplomatique-francaise",
    "/comment-lire-une-plaque-diplomatique-suisse",
    "/qu-est-ce-qu-une-plaque-diplomatique",
  ]

  if (importantPages.includes(pathname)) {
    // Headers pour l'indexation optimale
    response.headers.set("X-Robots-Tag", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1")
    response.headers.set("Cache-Control", "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400")
  }

  // Headers de sécurité et performance
  response.headers.set("X-DNS-Prefetch-Control", "on")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - sw.js (service worker)
     * - manifest.json (PWA manifest)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sw.js|manifest.json|robots.txt).*)",
  ],
}
