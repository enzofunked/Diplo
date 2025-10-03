/**
 * Utilitaires pour valider et gérer les URLs
 * Garantit qu'aucune URL ne dépasse 2000 caractères
 */

export interface URLValidationResult {
  isValid: boolean
  length: number
  error?: string
  truncatedUrl?: string
}

export interface URLLimits {
  maxTotalLength: number
  maxPathLength: number
  maxQueryLength: number
  maxFragmentLength: number
}

// Limites recommandées pour éviter les problèmes avec les moteurs de recherche
export const DEFAULT_URL_LIMITS: URLLimits = {
  maxTotalLength: 2000, // Limite absolue
  maxPathLength: 1000, // Chemin de l'URL
  maxQueryLength: 800, // Paramètres de requête
  maxFragmentLength: 200, // Fragment (#)
}

/**
 * Valide une URL complète selon les limites définies
 */
export function validateURL(url: string, limits: URLLimits = DEFAULT_URL_LIMITS): URLValidationResult {
  try {
    // Vérification de base
    if (!url || typeof url !== "string") {
      return {
        isValid: false,
        length: 0,
        error: "URL vide ou invalide",
      }
    }

    const urlLength = url.length

    // Vérification de la longueur totale
    if (urlLength > limits.maxTotalLength) {
      return {
        isValid: false,
        length: urlLength,
        error: `URL trop longue: ${urlLength} caractères (max: ${limits.maxTotalLength})`,
        truncatedUrl: truncateURL(url, limits.maxTotalLength),
      }
    }

    // Parse de l'URL pour vérifications détaillées
    const urlObj = new URL(url)

    // Vérification du chemin
    if (urlObj.pathname.length > limits.maxPathLength) {
      return {
        isValid: false,
        length: urlLength,
        error: `Chemin trop long: ${urlObj.pathname.length} caractères (max: ${limits.maxPathLength})`,
      }
    }

    // Vérification des paramètres de requête
    if (urlObj.search.length > limits.maxQueryLength) {
      return {
        isValid: false,
        length: urlLength,
        error: `Paramètres de requête trop longs: ${urlObj.search.length} caractères (max: ${limits.maxQueryLength})`,
      }
    }

    // Vérification du fragment
    if (urlObj.hash.length > limits.maxFragmentLength) {
      return {
        isValid: false,
        length: urlLength,
        error: `Fragment trop long: ${urlObj.hash.length} caractères (max: ${limits.maxFragmentLength})`,
      }
    }

    return {
      isValid: true,
      length: urlLength,
    }
  } catch (error) {
    return {
      isValid: false,
      length: url.length,
      error: `Format d'URL invalide: ${error instanceof Error ? error.message : "Erreur inconnue"}`,
    }
  }
}

/**
 * Tronque une URL pour respecter la longueur maximale
 */
export function truncateURL(url: string, maxLength: number): string {
  if (url.length <= maxLength) {
    return url
  }

  try {
    const urlObj = new URL(url)
    let truncatedUrl = `${urlObj.protocol}//${urlObj.host}${urlObj.pathname}`

    // Si même l'URL de base est trop longue, tronquer le chemin
    if (truncatedUrl.length > maxLength) {
      const baseUrl = `${urlObj.protocol}//${urlObj.host}`
      const availablePathLength = maxLength - baseUrl.length - 3 // -3 pour "..."

      if (availablePathLength > 0) {
        const truncatedPath = urlObj.pathname.substring(0, availablePathLength)
        truncatedUrl = `${baseUrl}${truncatedPath}...`
      } else {
        truncatedUrl = baseUrl
      }
    }

    return truncatedUrl
  } catch (error) {
    // Si l'URL ne peut pas être parsée, tronquer brutalement
    return url.substring(0, maxLength - 3) + "..."
  }
}

/**
 * Nettoie une URL en supprimant les paramètres non essentiels
 */
export function cleanURL(url: string, allowedParams: string[] = []): string {
  try {
    const urlObj = new URL(url)
    const cleanedParams = new URLSearchParams()

    // Paramètres autorisés par défaut
    const defaultAllowedParams = ["q", "search", "page", "tab", "lang", "id", "code"]
    const finalAllowedParams = allowedParams.length > 0 ? allowedParams : defaultAllowedParams

    urlObj.searchParams.forEach((value, key) => {
      if (finalAllowedParams.includes(key) && value.length <= 100) {
        cleanedParams.set(key, value)
      }
    })

    return `${urlObj.origin}${urlObj.pathname}${cleanedParams.toString() ? "?" + cleanedParams.toString() : ""}`
  } catch (error) {
    return url
  }
}

/**
 * Valide une liste d'URLs et retourne un rapport
 */
export interface URLValidationReport {
  totalUrls: number
  validUrls: number
  invalidUrls: number
  errors: Array<{
    url: string
    error: string
    length: number
  }>
  longestUrl: {
    url: string
    length: number
  }
  averageLength: number
}

export function validateURLList(urls: string[], limits: URLLimits = DEFAULT_URL_LIMITS): URLValidationReport {
  const report: URLValidationReport = {
    totalUrls: urls.length,
    validUrls: 0,
    invalidUrls: 0,
    errors: [],
    longestUrl: { url: "", length: 0 },
    averageLength: 0,
  }

  let totalLength = 0

  urls.forEach((url) => {
    const validation = validateURL(url, limits)

    if (validation.isValid) {
      report.validUrls++
    } else {
      report.invalidUrls++
      report.errors.push({
        url,
        error: validation.error || "Erreur inconnue",
        length: validation.length,
      })
    }

    totalLength += validation.length

    if (validation.length > report.longestUrl.length) {
      report.longestUrl = {
        url,
        length: validation.length,
      }
    }
  })

  report.averageLength = Math.round(totalLength / urls.length)

  return report
}

/**
 * Génère des URLs sûres pour le sitemap
 */
export function generateSafeURLs(baseUrl: string, paths: string[]): string[] {
  const safeUrls: string[] = []

  paths.forEach((path) => {
    const fullUrl = `${baseUrl}${path}`
    const validation = validateURL(fullUrl)

    if (validation.isValid) {
      safeUrls.push(fullUrl)
    } else if (validation.truncatedUrl) {
      safeUrls.push(validation.truncatedUrl)
    }
  })

  return safeUrls
}

/**
 * Vérifie si une URL est valide
 */
export function validateUrl(url: string): boolean {
  try {
    const fullUrl = url.startsWith("http") ? url : `https://diplo-scanner.com${url}`
    new URL(fullUrl)
    return true
  } catch {
    return false
  }
}

/**
 * Normalise une URL en supprimant les paramètres de tracking et le trailing slash
 */
export function normalizeUrl(url: string): string {
  try {
    // Supprimer les trailing slashes
    const normalized = url.replace(/\/+$/, "")

    // Supprimer les paramètres de tracking
    const trackingParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "fbclid", "gclid"]
    const urlObj = new URL(normalized.startsWith("http") ? normalized : `https://diplo-scanner.com${normalized}`)

    trackingParams.forEach((param) => {
      urlObj.searchParams.delete(param)
    })

    // Retourner seulement le pathname pour les URLs internes
    if (urlObj.hostname === "diplo-scanner.com") {
      return urlObj.pathname === "/" ? "/" : urlObj.pathname
    }

    return urlObj.toString()
  } catch {
    return url
  }
}

/**
 * Obtient le domaine d'une URL
 */
export function getDomainFromUrl(url: string): string | null {
  try {
    const urlObj = new URL(url)
    return urlObj.hostname
  } catch {
    return null
  }
}

/**
 * Vérifie si une URL est interne à un domaine de base
 */
export function isInternalUrl(url: string): boolean {
  try {
    const urlObj = new URL(url.startsWith("http") ? url : `https://diplo-scanner.com${url}`)
    return urlObj.hostname === "diplo-scanner.com"
  } catch {
    return false
  }
}

/**
 * Génère une URL canonique
 */
export function getCanonicalUrl(path: string): string {
  const normalized = normalizeUrl(path)
  return `https://diplo-scanner.com${normalized}`
}

/**
 * Vérifie si une URL est valide pour DiploScanner
 */
export function validateDiploScannerUrl(url: string): boolean {
  if (!validateUrl(url)) {
    return false
  }

  try {
    const urlObj = new URL(url)
    return urlObj.hostname === "diplo-scanner.com" || urlObj.hostname === "www.diplo-scanner.com"
  } catch {
    return false
  }
}

/**
 * Extrait le chemin d'une URL
 */
export function extractPathFromUrl(url: string): string {
  try {
    const urlObj = new URL(url)
    return urlObj.pathname
  } catch {
    return url
  }
}
