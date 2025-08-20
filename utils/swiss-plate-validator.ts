import { swissDiplomaticCodes, type SwissDiplomaticCode } from "../data/swiss-diplomatic-codes"

export interface SwissPlateComponents {
  statusPrefix: string // CD, CC, AT
  canton?: string // BE, GE, etc.
  serialNumber: string // ex: 9
  identificationCode: string // ex: 1
}

export interface SwissPlateInfo {
  statusDescription: string
  missionType: string
  plateColor: "blue" | "green" | "white"
  privileges: string[]
}

export interface SwissPlateMatch {
  country: SwissDiplomaticCode
  plateComponents: SwissPlateComponents
  plateInfo: SwissPlateInfo
  confidence: number
  isSwissCode: true
}

const STATUS_PREFIXES = {
  CD: {
    description: "Corps Diplomatique",
    missionType: "Mission diplomatique",
    plateColor: "green" as const,
    privileges: [
      "Immunité diplomatique complète",
      "Exonération fiscale et douanière",
      "Exemption contrôles techniques",
      "Immunité de juridiction",
    ],
  },
  CC: {
    description: "Corps Consulaire",
    missionType: "Poste consulaire",
    plateColor: "white" as const,
    privileges: [
      "Immunité consulaire",
      "Exonération fiscale limitée",
      "Exemption contrôles techniques",
      "Immunité fonctionnelle",
    ],
  },
  AT: {
    description: "Personnel Administratif et Technique",
    missionType: "Personnel de soutien",
    plateColor: "white" as const,
    privileges: ["Immunité fonctionnelle limitée", "Exonération fiscale partielle", "Exemption contrôles techniques"],
  },
}

export function parseSwissPlate(plateText: string): SwissPlateComponents | null {
  const cleanPlate = plateText
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9\s•·.]/g, '') 
    .replace(/\s+/g, ' ') 

  // =======================================================
  // MODIFICATION : La regex accepte un espace OU un point comme séparateur
  // (?:\s*[•·.]\s*|\s+) signifie : (un point avec des espaces autour) OU (un ou plusieurs espaces)
  // =======================================================
  const swissRegex = /^(CD|CC|AT)\s*([A-Z]{2})?\s*(\d{1,3})(?:\s*[•·.]\s*|\s+)(\d{1,3})$/
  const match = cleanPlate.match(swissRegex)

  if (!match) {
    return null
  }

  const [, statusPrefix, canton, serialNumber, identificationCode] = match

  return {
    statusPrefix,
    canton: canton || undefined,
    serialNumber,
    identificationCode,
  }
}

export function validateSwissDiplomaticPlate(plateText: string): SwissPlateMatch | null {
  const components = parseSwissPlate(plateText)
  if (!components) {
    return null
  }

  const country = swissDiplomaticCodes.find((c) => c.code === components.identificationCode)
  if (!country) {
    return null
  }

  const statusInfo = STATUS_PREFIXES[components.statusPrefix as keyof typeof STATUS_PREFIXES]
  if (!statusInfo) {
    return null
  }

  let plateColor = statusInfo.plateColor
  if (components.statusPrefix === "CD" && country.type === "organization") {
    plateColor = "blue"
  }

  const plateInfo: SwissPlateInfo = {
    ...statusInfo,
    plateColor,
  }

  return {
    country,
    plateComponents: components,
    plateInfo,
    confidence: 0.95,
    isSwissCode: true,
  }
}

export function generateSwissPlateExamples(): string[] {
  const examples = [
    "CD BE 9 • 1", 
    "AT GE 39 • 107",
    "CD 51 • 1", 
    "CC 32 • 1", 
    "CD 73 • 1", 
    "AT 105 • 2",
  ]
  return examples
}
