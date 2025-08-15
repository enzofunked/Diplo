import { findCountryByFrenchCode, type FrenchDiplomaticCode } from "../data/french-diplomatic-codes"

export interface FrenchPlateMatch {
  country: FrenchDiplomaticCode
  plateComponents: {
    prefix?: string
    countryCode: string
    status: string
    serialNumber: string
    suffix?: string
    departmentCode?: string
  }
  plateInfo: {
    statusDescription: string
    colorScheme: "orange" | "white"
    taxExemption?: "exempt" | "not-exempt"
    isConsular: boolean
    isDiplomatic: boolean
    organization?: string
  }
  confidence: number
}

const STATUS_DESCRIPTIONS = {
  C: "Corps consulaire (personnel d'un consulat)",
  CD: "Corps diplomatique (diplomates et membres d'ambassade)",
  CMD: "Chef de mission diplomatique (ambassadeur)",
  K: "Personnel technique ou administratif non diplomatique",
} as const

const PREFIX_ORGANIZATIONS = {
  E: "OCDE",
  S: "Conseil de l'Europe",
  U: "UNESCO",
  N: "OTAN (historique)",
} as const

export function validateFrenchDiplomaticPlate(plateText: string): FrenchPlateMatch | null {
  console.log("🔍 Validation de la plaque:", plateText)

  // ====================== MODIFICATION CLÉ ======================
  // Nettoyage pour accepter les plaques avec ou sans espaces.
  // On supprime TOUS les espaces.
  const cleanPlate = plateText
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "") // Supprime tous les espaces
    .replace(/[^\w.]/g, "") // Supprime les caractères spéciaux sauf points

  console.log("🧹 Plaque nettoyée (sans espaces):", cleanPlate)

  // Regex adaptée pour fonctionner sur une chaîne sans espaces.
  const frenchPlateRegex = /^(?:([ESUN]))?(\d{1,3})(C|CD|CMD|K)(\d{1,4})(?:\.(\d{2,3}))?([ZX])?$/i
  // =============================================================

  const match = cleanPlate.match(frenchPlateRegex)
  console.log("🎯 Match regex:", match)

  if (!match) {
    console.log("❌ Aucun match trouvé avec la regex")
    return null
  }

  const [, prefix, rawCode, status, serialNumber, departmentCode, suffix] = match
  console.log("📋 Composants extraits:", { prefix, rawCode, status, serialNumber, departmentCode, suffix })

  // Vérifier que le statut est valide
  if (!STATUS_DESCRIPTIONS[status as keyof typeof STATUS_DESCRIPTIONS]) {
    console.log("❌ Statut invalide:", status)
    return null
  }

  // Ajuster le code si préfixe présent (code + 200)
  let countryCode = rawCode
  if (prefix && Number.parseInt(rawCode) <= 200) {
    countryCode = (Number.parseInt(rawCode) + 200).toString()
    console.log("🔄 Code ajusté avec préfixe:", countryCode)
  }

  // Chercher le pays d'abord avec le code ajusté, puis avec le code original
  let country = findCountryByFrenchCode(countryCode)
  if (!country) {
    country = findCountryByFrenchCode(rawCode)
    console.log("🔍 Recherche avec code original:", rawCode)
  }

  console.log("🌍 Pays trouvé:", country?.countryName || "Aucun")

  if (!country) {
    console.log("❌ Pays non trouvé dans la base de données")
    return null
  }

  const isConsular = status === "C" || status === "K"
  const isDiplomatic = status === "CD" || status === "CMD"
  const colorScheme = isDiplomatic ? "orange" : "white"

  let taxExemption: "exempt" | "not-exempt" | undefined
  if (suffix === "Z") taxExemption = "exempt"
  if (suffix === "X") taxExemption = "not-exempt"

  // S'assurer que statusDescription existe toujours
  const statusDescription = STATUS_DESCRIPTIONS[status as keyof typeof STATUS_DESCRIPTIONS] || `Statut ${status}`

  const result: FrenchPlateMatch = {
    country,
    plateComponents: {
      prefix,
      countryCode: rawCode,
      status,
      serialNumber,
      suffix,
      departmentCode,
    },
    plateInfo: {
      statusDescription,
      colorScheme,
      taxExemption,
      isConsular,
      isDiplomatic,
      organization: prefix ? PREFIX_ORGANIZATIONS[prefix as keyof typeof PREFIX_ORGANIZATIONS] : undefined,
    },
    confidence: 0.98,
  }

  console.log("✅ Résultat final:", result)
  return result
}

export function generateFrenchPlateExamples(): string[] {
  return [
    "5 CD 1234", // Allemagne - Corps diplomatique
    "6 CMD 12", // États-Unis - Ambassadeur
    "26 CD 5678", // Chine - Corps diplomatique
    "45 C 123.75", // Grande-Bretagne - Consulat Paris
    "E 205 CD 456", // Allemagne à l'OCDE
    "U 304 CMD 7 Z", // Suède à l'UNESCO - Exonéré
    "401 CD 890", // UNESCO
    "600 K 234 X", // Conseil de l'Europe - Non exonéré
    "105 C 67.13", // Suisse - Consulat Marseille
    "62 CD 9999 Z", // Japon - Exonéré
  ]
}

export function getPlateColorInfo(colorScheme: "orange" | "white"): {
  background: string
  textColor: string
  description: string
} {
  return {
    background: "Fond vert jaspe (strié)",
    textColor: colorScheme === "orange" ? "Caractères orange" : "Caractères blancs",
    description:
      colorScheme === "orange" ? "Corps diplomatique (CD, CMD)" : "Corps consulaire et personnel technique (C, K)",
  }
}

// Fonction de test pour déboguer
export function testPlateValidation() {
  const testPlates = ["5 CD 1234", "6 CMD 12", "26CD5678", "45C123.75", "E205CD456", "401 CD 890"]

  console.log("🧪 Test de validation des plaques:")
  testPlates.forEach((plate) => {
    console.log(`\n--- Test: ${plate} ---`)
    const result = validateFrenchDiplomaticPlate(plate)
    console.log("Résultat:", result ? "✅ Valide" : "❌ Invalide")
  })
}
