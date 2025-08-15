"use client"

export interface ColorDetectionResult {
  hasGreenPlate: boolean
  greenRegions: Array<{
    x: number
    y: number
    width: number
    height: number
    confidence: number
  }>
  processedImage?: string
}

export function detectGreenPlates(imageData: string): Promise<ColorDetectionResult> {
  return new Promise((resolve) => {
    const img = new Image()
    img.crossOrigin = "anonymous"

    img.onload = () => {
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")

      if (!ctx) {
        resolve({ hasGreenPlate: false, greenRegions: [] })
        return
      }

      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      const greenRegions: Array<{
        x: number
        y: number
        width: number
        height: number
        confidence: number
      }> = []

      // Détection plus tolérante des zones vertes
      const blockSize = 30 // Blocs plus grands
      let totalGreenScore = 0
      let totalBlocks = 0

      for (let y = 0; y < canvas.height - blockSize; y += blockSize) {
        for (let x = 0; x < canvas.width - blockSize; x += blockSize) {
          let greenScore = 0
          let pixelCount = 0

          // Analyser le bloc avec critères plus souples
          for (let dy = 0; dy < blockSize; dy += 2) {
            // Échantillonnage plus rapide
            for (let dx = 0; dx < blockSize; dx += 2) {
              const pixelIndex = ((y + dy) * canvas.width + (x + dx)) * 4
              const r = data[pixelIndex]
              const g = data[pixelIndex + 1]
              const b = data[pixelIndex + 2]

              // Critères plus souples pour le vert
              // Accepter différentes nuances de vert
              if (
                (g > r && g > b && g > 60) || // Vert basique
                (g > r + 10 && g > 70) || // Vert avec tolérance
                (g > 100 && g > r && g > b - 20) // Vert clair
              ) {
                greenScore++
              }
              pixelCount++
            }
          }

          const confidence = greenScore / pixelCount
          totalGreenScore += confidence
          totalBlocks++

          // Seuil plus bas pour accepter plus de régions
          if (confidence > 0.15) {
            // Réduit de 0.3 à 0.15
            greenRegions.push({
              x,
              y,
              width: blockSize,
              height: blockSize,
              confidence,
            })
          }
        }
      }

      // Calculer le score global de "verdeur"
      const globalGreenScore = totalGreenScore / totalBlocks

      // Fusionner les régions adjacentes
      const mergedRegions = mergeAdjacentRegions(greenRegions)

      // Créer une image avec les zones détectées surlignées
      const processedCanvas = document.createElement("canvas")
      const processedCtx = processedCanvas.getContext("2d")
      processedCanvas.width = canvas.width
      processedCanvas.height = canvas.height

      if (processedCtx) {
        processedCtx.drawImage(img, 0, 0)
        processedCtx.strokeStyle = "red"
        processedCtx.lineWidth = 2

        mergedRegions.forEach((region) => {
          processedCtx.strokeRect(region.x, region.y, region.width, region.height)
        })

        // Ajouter des informations de debug
        processedCtx.fillStyle = "red"
        processedCtx.font = "12px Arial"
        processedCtx.fillText(`Régions: ${mergedRegions.length}`, 10, 20)
        processedCtx.fillText(`Score global: ${(globalGreenScore * 100).toFixed(1)}%`, 10, 35)
      }

      console.log("🟢 Détection couleur:", {
        regionsDetected: mergedRegions.length,
        globalGreenScore: globalGreenScore,
        threshold: "15%",
      })

      // Accepter même avec peu de régions si le score global est correct
      const hasGreenPlate = mergedRegions.length > 0 || globalGreenScore > 0.1

      resolve({
        hasGreenPlate,
        greenRegions: mergedRegions,
        processedImage: processedCanvas.toDataURL("image/jpeg", 0.8),
      })
    }

    img.onerror = () => {
      resolve({ hasGreenPlate: false, greenRegions: [] })
    }

    img.src = imageData
  })
}

function mergeAdjacentRegions(
  regions: Array<{ x: number; y: number; width: number; height: number; confidence: number }>,
): Array<{ x: number; y: number; width: number; height: number; confidence: number }> {
  if (regions.length === 0) return []

  const merged: Array<{ x: number; y: number; width: number; height: number; confidence: number }> = []
  const used = new Set<number>()

  for (let i = 0; i < regions.length; i++) {
    if (used.has(i)) continue

    let currentRegion = { ...regions[i] }
    used.add(i)

    // Chercher les régions adjacentes avec distance plus grande
    let foundAdjacent = true
    while (foundAdjacent) {
      foundAdjacent = false

      for (let j = 0; j < regions.length; j++) {
        if (used.has(j)) continue

        const region = regions[j]
        const distance = Math.sqrt(Math.pow(currentRegion.x - region.x, 2) + Math.pow(currentRegion.y - region.y, 2))

        if (distance < 50) {
          // Augmenté de 30 à 50
          // Fusionner les régions
          const minX = Math.min(currentRegion.x, region.x)
          const minY = Math.min(currentRegion.y, region.y)
          const maxX = Math.max(currentRegion.x + currentRegion.width, region.x + region.width)
          const maxY = Math.max(currentRegion.y + currentRegion.height, region.y + region.height)

          currentRegion = {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY,
            confidence: Math.max(currentRegion.confidence, region.confidence),
          }

          used.add(j)
          foundAdjacent = true
        }
      }
    }

    merged.push(currentRegion)
  }

  // Filtrer les régions trop petites (critères plus souples)
  return merged.filter((region) => region.width > 30 && region.height > 10)
}

export function preprocessImageForOCR(
  imageData: string,
  greenRegion?: { x: number; y: number; width: number; height: number },
): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image()
    img.crossOrigin = "anonymous"

    img.onload = () => {
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")

      if (!ctx) {
        resolve(imageData)
        return
      }

      // Si une région verte est spécifiée, recadrer l'image
      if (greenRegion) {
        canvas.width = greenRegion.width
        canvas.height = greenRegion.height
        ctx.drawImage(
          img,
          greenRegion.x,
          greenRegion.y,
          greenRegion.width,
          greenRegion.height,
          0,
          0,
          greenRegion.width,
          greenRegion.height,
        )
      } else {
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0)
      }

      // Améliorer le contraste pour l'OCR
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]

        // Convertir en niveaux de gris avec contraste élevé
        const gray = 0.299 * r + 0.587 * g + 0.114 * b
        const enhanced = gray > 128 ? 255 : 0

        data[i] = enhanced // R
        data[i + 1] = enhanced // G
        data[i + 2] = enhanced // B
        // Alpha reste inchangé
      }

      ctx.putImageData(imageData, 0, 0)
      resolve(canvas.toDataURL("image/jpeg", 0.9))
    }

    img.onerror = () => resolve(imageData)
    img.src = imageData
  })
}
