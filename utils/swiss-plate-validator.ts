import { swissDiplomaticCodes, type SwissDiplomaticCode } from "../data/swiss-diplomatic-codes"

export interface SwissPlateMatch {
  country: SwissDiplomaticCode
  plateComponents: {
    countryCode: string
    serialNumber: string
    suffix?: string
  }
  plateInfo: {
    statusDescription: string
    missionType: string
    plateColor: string
    privileges: string[]
  }
  confidence: number
}

export interface SwissValidationResult {
  isValid: boolean
  match?: SwissPlateMatch
  error?: string
}

const SWISS_PLATE_INFO = {
  statusDescription: "Mission diplomatique ou consulaire",
  missionType: "Représentation officielle",
  plateColor: "Fond blanc, caractères noirs",
  privileges: [
    "Immunité diplomatique selon statut",
    "Exemption de certaines taxes",
    "Facilités de circulation",
    "Protection consulaire",
  ],
}

export function parseSwissPlate(
  plateText: string,
): { countryCode: string; serialNumber: string; suffix?: string } | null {
  const cleanPlate = plateText
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")

  // Format suisse: CODE_PAYS + NUMERO + SUFFIXE_OPTIONNEL
  const swissRegex = /^(\d{2,3})(\d{1,4})([A-Z]{1,2})?$/
  const match = cleanPlate.match(swissRegex)

  if (!match) {
    return null
  }

  const [, countryCode, serialNumber, suffix] = match

  return {
    countryCode,
    serialNumber,
    suffix,
  }
}

export function validateSwissDiplomaticPlate(plateText: string): SwissPlateMatch | null {
  const components = parseSwissPlate(plateText)
  if (!components) {
    return null
  }

  const country = swissDiplomaticCodes.find((c) => c.code === components.countryCode)
  if (!country) {
    return null
  }

  return {
    country,
    plateComponents: components,
    plateInfo: SWISS_PLATE_INFO,
    confidence: 0.95,
  }
}

// Fonction avec le nom attendu par CameraScanner
export function validateSwissPlate(plateText: string): SwissValidationResult {
  try {
    const match = validateSwissDiplomaticPlate(plateText)
    if (match) {
      return {
        isValid: true,
        match,
      }
    } else {
      return {
        isValid: false,
        error: "Format de plaque suisse non reconnu",
      }
    }
  } catch (error) {
    return {
      isValid: false,
      error: "Erreur lors de la validation de la plaque",
    }
  }
}

export function generateSwissPlateExamples(): string[] {
  return [
    "001 123", // Allemagne
    "032 456", // France
    "107 789", // Italie
    "156 234", // Autriche
    "203 567", // Espagne
  ]
}
