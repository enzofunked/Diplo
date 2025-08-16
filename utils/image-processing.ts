export async function processImageForOCR(imageData: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = "anonymous"

    img.onload = () => {
      try {
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")

        if (!ctx) {
          reject(new Error("Impossible de créer le contexte canvas"))
          return
        }

        // Définir la taille du canvas
        canvas.width = img.width
        canvas.height = img.height

        // Dessiner l'image
        ctx.drawImage(img, 0, 0)

        // Obtenir les données d'image
        const imageDataObj = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const data = imageDataObj.data

        // Appliquer des filtres pour améliorer l'OCR
        for (let i = 0; i < data.length; i += 4) {
          // Convertir en niveaux de gris
          const gray = Math.round(0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2])

          // Augmenter le contraste et appliquer un seuil
          const enhanced = gray > 128 ? 255 : 0

          data[i] = enhanced // Rouge
          data[i + 1] = enhanced // Vert
          data[i + 2] = enhanced // Bleu
          // Alpha reste inchangé
        }

        // Remettre les données traitées
        ctx.putImageData(imageDataObj, 0, 0)

        // Retourner l'image traitée en base64
        const processedImageData = canvas.toDataURL("image/jpeg", 0.9)
        resolve(processedImageData)
      } catch (error) {
        reject(error)
      }
    }

    img.onerror = () => {
      reject(new Error("Erreur lors du chargement de l'image"))
    }

    img.src = imageData
  })
}

export function detectGreenPlateRegion(imageData: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = "anonymous"

    img.onload = () => {
      try {
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")

        if (!ctx) {
          reject(new Error("Impossible de créer le contexte canvas"))
          return
        }

        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0)

        const imageDataObj = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const data = imageDataObj.data

        // Détecter les zones vertes (plaques diplomatiques françaises)
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i]
          const g = data[i + 1]
          const b = data[i + 2]

          // Détecter le vert (plaque diplomatique française)
          const isGreen = g > r && g > b && g > 100

          if (!isGreen) {
            // Assombrir les zones non-vertes
            data[i] = Math.round(r * 0.3)
            data[i + 1] = Math.round(g * 0.3)
            data[i + 2] = Math.round(b * 0.3)
          }
        }

        ctx.putImageData(imageDataObj, 0, 0)
        resolve(canvas.toDataURL("image/jpeg", 0.9))
      } catch (error) {
        reject(error)
      }
    }

    img.onerror = () => reject(new Error("Erreur lors du chargement de l'image"))
    img.src = imageData
  })
}
