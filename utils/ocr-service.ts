import Tesseract from "tesseract.js"

export async function performOCR(imageData: string): Promise<string> {
  try {
    console.log("🔍 Début de l'OCR...")

    const {
      data: { text },
    } = await Tesseract.recognize(imageData, "fra", {
      logger: (m) => {
        if (m.status === "recognizing text") {
          console.log(`OCR Progress: ${Math.round(m.progress * 100)}%`)
        }
      },
    })

    console.log("📝 Texte brut OCR:", text)

    // Nettoyer et formater le texte
    const cleanedText = cleanOCRText(text)
    console.log("✨ Texte nettoyé:", cleanedText)

    return cleanedText
  } catch (error) {
    console.error("❌ Erreur OCR:", error)
    throw new Error("Erreur lors de la reconnaissance de texte")
  }
}

function cleanOCRText(text: string): string {
  return (
    text
      .trim()
      .toUpperCase()
      // Supprimer les caractères indésirables
      .replace(/[^\w\s.-]/g, "")
      // Normaliser les espaces
      .replace(/\s+/g, " ")
      // Corrections communes OCR
      .replace(/0/g, "O") // Zéro vers O si nécessaire
      .replace(/1/g, "I") // 1 vers I si dans un contexte de lettres
      .replace(/5/g, "S") // 5 vers S si dans un contexte de lettres
      .trim()
  )
}

export async function initializeOCR(): Promise<void> {
  try {
    console.log("🚀 Initialisation de Tesseract...")
    // Pré-charger Tesseract pour améliorer les performances
    await Tesseract.recognize(
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
      "fra",
    )
    console.log("✅ Tesseract initialisé")
  } catch (error) {
    console.warn("⚠️ Erreur d'initialisation Tesseract:", error)
  }
}
