import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { validateURL, cleanURL } from "./utils/url-validator"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const fullUrl = request.url

  // Validation complète de l'URL
  const validation = validateURL(fullUrl)

  // Si l'URL est trop longue, retourner une erreur 414
  if (!validation.isValid) {
    if (validation.error?.includes("trop longue")) {
      console.error(`URL trop longue détectée: ${fullUrl} (${validation.length} caractères)`)

      // Retourner une page d'erreur personnalisée
      return new NextResponse(
        `<!DOCTYPE html>
        <html>
        <head>
          <title>URL trop longue - Diplo Scanner</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
            .error { color: #e74c3c; }
            .info { color: #3498db; margin-top: 20px; }
            a { color: #2980b9; text-decoration: none; }
          </style>
        </head>
        <body>
          <h1 class="error">URL trop longue</h1>
          <p>L'URL demandée dépasse la limite de 2000 caractères.</p>
          <p class="info">Longueur actuelle: ${validation.length} caractères</p>
          <p><a href="/">Retour à l'accueil</a></p>
        </body>
        </html>`,
        {
          status: 414,
          headers: {
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control": "no-cache",
          },
        },
      )
    }

    // Autres erreurs d'URL
    return new NextResponse("Bad Request", { status: 400 })
  }

  // Nettoyer l'URL si nécessaire
  const cleanedUrl = cleanURL(fullUrl)
  if (cleanedUrl !== fullUrl && cleanedUrl.length < fullUrl.length) {
    console.log(`URL nettoyée: ${fullUrl} -> ${cleanedUrl}`)
    return NextResponse.redirect(cleanedUrl, 301)
  }

  // Normaliser les chemins pour éviter les redirections multiples
  const pathname = url.pathname

  // Supprimer les slashes multiples
  if (pathname.includes("//")) {
    url.pathname = pathname.replace(/\/+/g, "/")
    const newUrl = url.toString()

    // Vérifier que l'URL normalisée ne dépasse pas la limite
    if (validateURL(newUrl).isValid) {
      return NextResponse.redirect(newUrl, 301)
    }
  }

  // Supprimer le slash final sauf pour la racine
  if (pathname.length > 1 && pathname.endsWith("/")) {
    url.pathname = pathname.slice(0, -1)
    const newUrl = url.toString()

    // Vérifier que l'URL normalisée ne dépasse pas la limite
    if (validateURL(newUrl).isValid) {
      return NextResponse.redirect(newUrl, 301)
    }
  }

  // Headers pour améliorer les performances
  const response = NextResponse.next()

  // Ajouter des headers informatifs pour le debugging
  response.headers.set("X-URL-Length", validation.length.toString())
  response.headers.set("X-URL-Valid", validation.isValid.toString())
  response.headers.set("Cache-Control", "public, max-age=3600, stale-while-revalidate=86400")

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
