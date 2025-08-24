import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Suppression automatique des trailing slashes
  if (pathname.endsWith("/") && pathname !== "/") {
    const url = request.nextUrl.clone()
    url.pathname = pathname.slice(0, -1)
    return NextResponse.redirect(url, 301)
  }

  // Headers SEO pour toutes les pages
  const response = NextResponse.next()

  // Headers de sécurité et SEO
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")

  // Headers spécifiques pour les pages importantes
  const importantPages = [
    "/liste-codes-pays-plaques-diplomatiques-francaises",
    "/codes-diplomatiques-suisses",
    "/privileges-immunites-plaques-diplomatiques",
    "/plaque-immatriculation-verte",
    "/plaque-verte-et-orange",
    "/comment-lire-une-plaque-diplomatique-francaise",
    "/comment-lire-une-plaque-diplomatique-suisse",
    "/qu-est-ce-qu-une-plaque-diplomatique",
    "/swiss",
    "/french",
  ]

  if (importantPages.includes(pathname)) {
    response.headers.set("Cache-Control", "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400")
    response.headers.set("X-Robots-Tag", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1")
  }

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
