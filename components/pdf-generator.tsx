"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, FileText, PenTool, Eye } from "lucide-react"
import DigitalSignature from "./digital-signature"
import QuotePreview from "./quote-preview"

interface EstimationData {
  locationType: string
  surface: string
  frequency: string
  hygienProducts: {
    diffuseurParfum: number
    diffuseurParfumGamme: string
    secheServiette: number
    distributeurSavon: number
    distributeurSavonGamme: string
    distributeurServiette: number
    distributeurServietteGamme: string
    secheMains: number
    secheMainsGamme: string
    savons: number
    papierToilettes: number
    serviettePapier: number
  }
  contactInfo: {
    name: string
    email: string
    phone: string
    company: string
    address?: string // Added address field to interface
  }
}

interface PDFGeneratorProps {
  estimation: EstimationData
  estimatedPrice: number
  onQuoteSaved?: () => void
}

export default function PDFGenerator({ estimation, estimatedPrice, onQuoteSaved }: PDFGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [signatureDataUrl, setSignatureDataUrl] = useState<string | null>(null)
  const [showSignature, setShowSignature] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [step, setStep] = useState<"initial" | "preview" | "signature" | "complete">("initial")

  const handleSignatureComplete = async (dataUrl: string) => {
    setSignatureDataUrl(dataUrl)
    setShowSignature(false)
    setStep("complete")

    try {
      const response = await fetch("/api/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_name: estimation.contactInfo.name,
          client_email: estimation.contactInfo.email,
          client_phone: estimation.contactInfo.phone,
          client_company: estimation.contactInfo.company,
          client_address: estimation.contactInfo.address,
          location_type: estimation.locationType,
          surface: estimation.surface,
          frequency: estimation.frequency,
          estimated_price: estimatedPrice,
          hygiene_products: estimation.hygienProducts,
          signature_data: dataUrl,
          status: "signed",
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to save quote")
      }

      console.log("Quote saved successfully")
    } catch (error) {
      console.error("Error saving quote:", error)
      // Don't block the user flow if saving fails
    }
  }

  const handleSignatureClear = () => {
    setSignatureDataUrl(null)
  }

  const handlePreviewConfirm = () => {
    setShowPreview(false)
    setStep("signature")
    setShowSignature(true)
  }

  const handleEdit = () => {
    setShowPreview(false)
    setStep("initial")
  }

  const generatePDF = async () => {
    setIsGenerating(true)

    try {
      const { default: jsPDF } = await import("jspdf")

      const doc = new jsPDF()
      const pageHeight = 297 // A4 height in mm
      const marginBottom = 20 // Bottom margin
      let currentY = 10 // Current Y position

      console.log("[v0] Generating PDF with signature:", !!signatureDataUrl)
      if (signatureDataUrl) {
        console.log("[v0] Signature data length:", signatureDataUrl.length)
      }

      const checkPageBreak = (requiredSpace: number) => {
        if (currentY + requiredSpace > pageHeight - marginBottom) {
          doc.addPage()
          currentY = 20 // Reset Y position for new page
          return true
        }
        return false
      }

      try {
        // Load and add the UCT logo
        const logoImg = new Image()
        logoImg.crossOrigin = "anonymous"
        logoImg.src = "/images/uct-logo.png"

        await new Promise((resolve, reject) => {
          logoImg.onload = resolve
          logoImg.onerror = reject
        })

        // Add logo to PDF (top left)
        doc.addImage(logoImg, "PNG", 20, currentY, 30, 30)
      } catch (error) {
        console.error("Error loading logo:", error)
        // Continue without logo if it fails to load
      }

      doc.setFontSize(24)
      doc.setTextColor(20, 184, 166) // Teal color
      doc.text("UCT AZUR", 60, currentY + 15)

      doc.setFontSize(12)
      doc.setTextColor(0, 0, 0)
      doc.text("Unlimited Cleaning Tech", 60, currentY + 25)

      // Legal information
      doc.setFontSize(8)
      doc.setTextColor(100, 100, 100)
      currentY += 40
      doc.text("SIRET (siège) : 933 186 470 00011", 20, currentY)
      currentY += 5
      doc.text("Forme juridique : SAS", 20, currentY)
      currentY += 5
      doc.text("Numéro RCS : 933 186 470 R.C.S. Nice", 20, currentY)
      currentY += 5
      doc.text("Adresse : RESIDENCE LE CHANTEMERLE B, 25 ALLEE DU STADE, 06500 MENTON", 20, currentY)

      // Quote number and date
      const quoteNumber = `UCT-${Date.now().toString().slice(-6)}`
      const today = new Date().toLocaleDateString("fr-FR")
      doc.setFontSize(10)
      doc.setTextColor(0, 0, 0)
      doc.text(`Devis N° ${quoteNumber}`, 140, 25)
      doc.text(`Date: ${today}`, 140, 35)

      currentY += 20
      checkPageBreak(30)

      // Title
      doc.setFontSize(18)
      doc.setTextColor(20, 184, 166)
      doc.text("DEVIS DE NETTOYAGE", 20, currentY)

      currentY += 20
      checkPageBreak(50)

      // Client information
      doc.setFontSize(12)
      doc.setTextColor(0, 0, 0)
      doc.text("INFORMATIONS CLIENT", 20, currentY)
      currentY += 10
      doc.setFontSize(10)
      doc.text(`Nom: ${estimation.contactInfo.name}`, 20, currentY)
      currentY += 10
      if (estimation.contactInfo.company) {
        doc.text(`Entreprise: ${estimation.contactInfo.company}`, 20, currentY)
        currentY += 10
      }
      if (estimation.contactInfo.address) {
        doc.text(`Adresse: ${estimation.contactInfo.address}`, 20, currentY)
        currentY += 10
      }
      doc.text(`Email: ${estimation.contactInfo.email}`, 20, currentY)
      currentY += 10
      doc.text(`Téléphone: ${estimation.contactInfo.phone}`, 20, currentY)

      currentY += 20
      checkPageBreak(40)

      // Service details
      doc.setFontSize(12)
      doc.setTextColor(0, 0, 0)
      doc.text("DÉTAILS DU SERVICE", 20, currentY)
      currentY += 10
      doc.setFontSize(10)

      const locationTypes = {
        bureaux: "Bureaux",
        commerces: "Commerces",
        sante: "Établissements de santé",
        hotels: "Hôtels / Restaurants",
        coproprietes: "Copropriétés",
      }

      doc.text(`Type de locaux: ${locationTypes[estimation.locationType as keyof typeof locationTypes]}`, 20, currentY)
      currentY += 10
      doc.text(`Surface: ${estimation.surface} m²`, 20, currentY)
      currentY += 10
      doc.text(`Fréquence: ${estimation.frequency} interventions par semaine`, 20, currentY)

      currentY += 20
      const hasEquipment = Object.entries(estimation.hygienProducts).some(
        ([key, value]) => !key.includes("Gamme") && value > 0,
      )

      if (hasEquipment) {
        checkPageBreak(60)

        doc.setFontSize(12)
        doc.text("ÉQUIPEMENTS D'HYGIÈNE", 20, currentY)
        currentY += 15
        doc.setFontSize(10)

        if (estimation.hygienProducts.diffuseurParfum > 0) {
          checkPageBreak(15)
          doc.text(
            `• Diffuseur parfum (${estimation.hygienProducts.diffuseurParfumGamme}): ${estimation.hygienProducts.diffuseurParfum}`,
            25,
            currentY,
          )
          currentY += 10
        }
        if (estimation.hygienProducts.distributeurSavon > 0) {
          checkPageBreak(15)
          doc.text(
            `• Distributeur savon (${estimation.hygienProducts.distributeurSavonGamme}): ${estimation.hygienProducts.distributeurSavon}`,
            25,
            currentY,
          )
          currentY += 10
        }
        if (estimation.hygienProducts.distributeurServiette > 0) {
          checkPageBreak(15)
          doc.text(
            `• Distributeur papier toilette (${estimation.hygienProducts.distributeurServietteGamme}): ${estimation.hygienProducts.distributeurServiette}`,
            25,
            currentY,
          )
          currentY += 10
        }
        if (estimation.hygienProducts.secheMains > 0) {
          checkPageBreak(15)
          doc.text(
            `• Sèche-mains (${estimation.hygienProducts.secheMainsGamme}): ${estimation.hygienProducts.secheMains}`,
            25,
            currentY,
          )
          currentY += 10
        }
        if (estimation.hygienProducts.savons > 0) {
          checkPageBreak(15)
          doc.text(`• Savons: ${estimation.hygienProducts.savons}`, 25, currentY)
          currentY += 10
        }
        if (estimation.hygienProducts.papierToilettes > 0) {
          checkPageBreak(15)
          doc.text(`• Papier toilettes: ${estimation.hygienProducts.papierToilettes}`, 25, currentY)
          currentY += 10
        }
        if (estimation.hygienProducts.serviettePapier > 0) {
          checkPageBreak(15)
          doc.text(`• Serviettes papier: ${estimation.hygienProducts.serviettePapier}`, 25, currentY)
          currentY += 10
        }
      }

      currentY += 20
      checkPageBreak(80)

      // Price
      doc.setFontSize(16)
      doc.setTextColor(20, 184, 166)
      doc.text(`PRIX ESTIMÉ: ${estimatedPrice}€ HT/mois`, 20, currentY)

      currentY += 20
      if (signatureDataUrl) {
        console.log("[v0] Adding signature to PDF at position:", currentY)
        doc.setFontSize(12)
        doc.setTextColor(0, 0, 0)
        doc.text("SIGNATURE DU CLIENT", 20, currentY)

        try {
          // Ensure we have a valid data URL
          if (signatureDataUrl.startsWith("data:image/")) {
            doc.addImage(signatureDataUrl, "PNG", 110, currentY - 5, 80, 30)
            console.log("[v0] Signature added successfully")

            // Add signature details below the signature
            doc.setFontSize(10)
            doc.setTextColor(0, 0, 0)
            doc.text(`Signé numériquement le: ${today}`, 110, currentY + 30)
            doc.text(`Par: ${estimation.contactInfo.name}`, 110, currentY + 40)
            currentY += 50
          } else {
            throw new Error("Invalid signature data format")
          }
        } catch (error) {
          console.error("[v0] Error adding signature to PDF:", error)
          doc.setFontSize(10)
          doc.setTextColor(0, 0, 0)
          doc.text("Signature numérique présente", 110, currentY + 5)
          doc.text(`Signé le: ${today} par ${estimation.contactInfo.name}`, 110, currentY + 15)
          currentY += 25
        }
      } else {
        doc.setFontSize(12)
        doc.setTextColor(0, 0, 0)
        doc.text("SIGNATURE DU CLIENT", 20, currentY)
        currentY += 15
        doc.setFontSize(10)
        doc.text("Date et signature: ____________________", 20, currentY)
        currentY += 15
      }

      checkPageBreak(20)

      // Footer
      doc.setFontSize(8)
      doc.setTextColor(100, 100, 100)
      doc.text("Cette estimation est indicative. Un devis précis sera établi après visite gratuite.", 20, currentY + 10)
      doc.text("Devis valable 30 jours. Prix HT, TVA non applicable (art. 293B du CGI).", 20, currentY + 15)

      doc.save(
        `devis-uct-azur-${estimation.contactInfo.name.replace(/\s+/g, "-")}-${signatureDataUrl ? "signe" : "non-signe"}.pdf`,
      )

      console.log("[v0] PDF generated successfully")

      if (onQuoteSaved) {
        console.log("[v0] Calling onQuoteSaved callback after PDF download")
        onQuoteSaved()
      }
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("Erreur lors de la génération du PDF")
    } finally {
      setIsGenerating(false)
    }
  }

  if (showPreview) {
    return (
      <QuotePreview
        estimation={estimation}
        estimatedPrice={estimatedPrice}
        onConfirm={handlePreviewConfirm}
        onEdit={handleEdit}
      />
    )
  }

  return (
    <div className="space-y-6 p-6 bg-gray-50 rounded-lg">
      <div className="text-center">
        <FileText className="h-12 w-12 text-teal-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Finaliser votre devis</h3>
        <p className="text-gray-600 mb-4">Visualisez, signez et téléchargez votre devis personnalisé.</p>
      </div>

      {step === "initial" && (
        <div className="bg-white p-4 rounded-lg border">
          <h4 className="font-medium mb-3">1. Prévisualiser et signer votre devis</h4>
          <Button onClick={() => setShowPreview(true)} className="w-full bg-teal-600 hover:bg-teal-700">
            <Eye className="h-4 w-4 mr-2" />
            Prévisualisez et signez le devis
          </Button>
        </div>
      )}

      {step === "signature" && !signatureDataUrl && (
        <div className="bg-white p-4 rounded-lg border">
          <h4 className="font-medium mb-3">2. Signer le devis numériquement</h4>
          {!showSignature ? (
            <Button onClick={() => setShowSignature(true)} className="w-full bg-teal-600 hover:bg-teal-700">
              <PenTool className="h-4 w-4 mr-2" />
              Signer numériquement
            </Button>
          ) : (
            <DigitalSignature onSignatureComplete={handleSignatureComplete} onSignatureClear={handleSignatureClear} />
          )}
        </div>
      )}

      {(step === "complete" || signatureDataUrl) && (
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-700 font-medium">Devis signé et sauvegardé</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSignatureDataUrl(null)
                setShowSignature(true)
                setStep("signature")
              }}
            >
              Modifier la signature
            </Button>
          </div>
        </div>
      )}

      {signatureDataUrl && (
        <div className="bg-white p-4 rounded-lg border">
          <h4 className="font-medium mb-3">3. Télécharger le devis signé</h4>
          <Button onClick={generatePDF} disabled={isGenerating} className="w-full bg-teal-600 hover:bg-teal-700">
            <Download className="h-4 w-4 mr-2" />
            {isGenerating ? "Génération en cours..." : "Télécharger le devis signé"}
          </Button>
        </div>
      )}

      <div className="text-xs text-gray-500 text-center">
        {signatureDataUrl
          ? "Votre devis signé a été sauvegardé. Nous vous contacterons dans les 24h."
          : "Prévisualisez votre devis avant de le signer numériquement."}
      </div>
    </div>
  )
}
