import { validateFrenchDiplomaticPlate, type FrenchPlateMatch } from "./french-plate-validator"
import { validateSwissDiplomaticPlate, type SwissPlateMatch } from "./swiss-plate-validator"

export type PlateMatch = FrenchPlateMatch | SwissPlateMatch

export function validateDiplomaticPlate(plateText: string): PlateMatch | null {
  // Essayer d'abord le format suisse
  const swissResult = validateSwissDiplomaticPlate(plateText)
  if (swissResult) {
    return swissResult
  }

  // Ensuite essayer le format français
  const frenchResult = validateFrenchDiplomaticPlate(plateText)
  if (frenchResult) {
    return frenchResult
  }

  return null
}

export function isSwissPlate(result: PlateMatch): result is SwissPlateMatch {
  return "isSwissCode" in result && result.isSwissCode === true
}

export function isFrenchPlate(result: PlateMatch): result is FrenchPlateMatch {
  return !("isSwissCode" in result)
}
