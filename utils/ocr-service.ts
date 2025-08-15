"use client"

import { createWorker, type Worker } from "tesseract.js"

export interface OCRResult {
  text: string
  confidence: number
  words: Array<{
    text: string
    confidence: number
    bbox: {
      x0: number
      y0: number
      x1: number
      y1: number
    }
  }>
}

class OCRService {
  private worker: Worker | null = null
  private isInitialized = false

  async initialize(): Promise<void> {
    if (this.isInitialized) return

    try {
      this.worker = await createWorker("fra", 1, {
        logger: (m) => console.log("OCR:", m),
      })

      await this.worker.setParameters({
        tessedit_char_whitelist: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ .",
        tessedit_pageseg_mode: "7", // Single text line
        preserve_interword_spaces: "1",
        tessedit_do_invert: "0",
        // Paramètres spécifiques pour améliorer la reconnaissance
        classify_bln_numeric_mode: "1",
        textord_really_old_xheight: "1",
        textord_min_xheight: "10",
      })

      this.isInitialized = true
      console.log("✅ OCR initialisé avec succès")
    } catch (error) {
      console.error("❌ Erreur d'initialisation OCR:", error)
      throw error
    }
  }

  async recognizeText(imageData: string): Promise<OCRResult> {
    if (!this.worker || !this.isInitialized) {
      await this.initialize()
    }

    if (!this.worker) {
      throw new Error("OCR worker non disponible")
    }

    try {
      console.log("🔍 Début reconnaissance OCR...")
      const {
        data: { text, confidence, words },
      } = await this.worker.recognize(imageData)

      console.log("📝 Texte détecté:", text)
      console.log("🎯 Confiance:", confidence)

      return {
        text: text.trim().toUpperCase(),
        confidence: confidence / 100,
        words: words.map((word) => ({
          text: word.text.toUpperCase(),
          confidence: word.confidence / 100,
          bbox: word.bbox,
        })),
      }
    } catch (error) {
      console.error("❌ Erreur OCR:", error)
      throw error
    }
  }

  async terminate(): Promise<void> {
    if (this.worker) {
      await this.worker.terminate()
      this.worker = null
      this.isInitialized = false
      console.log("🔚 OCR terminé")
    }
  }
}

export const ocrService = new OCRService()
