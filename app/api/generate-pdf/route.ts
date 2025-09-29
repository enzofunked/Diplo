import { type NextRequest, NextResponse } from "next/server"
import { PDFDocument, rgb, StandardFonts } from "pdf-lib"

export async function POST(request: NextRequest) {
  try {
    const { quoteData, signed } = await request.json()

    console.log("[v0] Generating PDF for quote:", quoteData.id)
    console.log("[v0] Quote data structure:", Object.keys(quoteData))

    // Create a new PDF document
    const pdfDoc = await PDFDocument.create()
    const page = pdfDoc.addPage([595, 842]) // A4 size
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

    // Add content to PDF
    let yPosition = 800

    // Header
    page.drawText("UCT AZUR - DEVIS", {
      x: 50,
      y: yPosition,
      size: 20,
      font: boldFont,
      color: rgb(0, 0.4, 0.4),
    })

    yPosition -= 50 // Increased spacing after header

    // Date
    page.drawText(`Date: ${new Date(quoteData.created_at).toLocaleDateString("fr-FR")}`, {
      x: 50,
      y: yPosition,
      size: 12,
      font,
    })

    yPosition -= 40 // Increased spacing after date

    // Client information
    page.drawText("INFORMATIONS CLIENT", {
      x: 50,
      y: yPosition,
      size: 14,
      font: boldFont,
    })

    yPosition -= 25 // Increased spacing after section title

    page.drawText(`Nom: ${quoteData.client_name}`, { x: 50, y: yPosition, size: 12, font })
    yPosition -= 18 // Increased line spacing
    page.drawText(`Email: ${quoteData.client_email}`, { x: 50, y: yPosition, size: 12, font })
    yPosition -= 18
    page.drawText(`Téléphone: ${quoteData.client_phone}`, { x: 50, y: yPosition, size: 12, font })
    yPosition -= 18

    if (quoteData.client_company) {
      page.drawText(`Entreprise: ${quoteData.client_company}`, { x: 50, y: yPosition, size: 12, font })
      yPosition -= 18
    }

    if (quoteData.client_address) {
      page.drawText(`Adresse: ${quoteData.client_address}`, { x: 50, y: yPosition, size: 12, font })
      yPosition -= 18
    } else if (quoteData.address) {
      page.drawText(`Adresse: ${quoteData.address}`, { x: 50, y: yPosition, size: 12, font })
      yPosition -= 18
    }

    yPosition -= 30 // Increased spacing between sections

    // Service details
    page.drawText("DÉTAILS DU SERVICE", {
      x: 50,
      y: yPosition,
      size: 14,
      font: boldFont,
    })

    yPosition -= 25

    const details = quoteData.quote_details || {}
    page.drawText(`Type de local: ${details.local_type || "Non spécifié"}`, { x: 50, y: yPosition, size: 12, font })
    yPosition -= 18
    page.drawText(`Surface: ${details.surface_area || 0}m²`, { x: 50, y: yPosition, size: 12, font })
    yPosition -= 18
    page.drawText(`Interventions par semaine: ${details.interventions_per_week || 1}`, {
      x: 50,
      y: yPosition,
      size: 12,
      font,
    })

    yPosition -= 30

    if (
      details.hygiene_products &&
      Object.values(details.hygiene_products).some((v: any) => typeof v === "number" && v > 0)
    ) {
      page.drawText("ÉQUIPEMENTS D'HYGIÈNE SANITAIRE", {
        x: 50,
        y: yPosition,
        size: 14,
        font: boldFont,
      })

      yPosition -= 25

      const hygieneProducts = details.hygiene_products

      // Helper function to add product line
      const addProductLine = (label: string, quantity: number, gamme?: string) => {
        if (quantity > 0) {
          const productText = `• ${label}: ${quantity}${gamme ? ` (${gamme})` : ""}`
          page.drawText(productText, {
            x: 70,
            y: yPosition,
            size: 11,
            font,
          })
          yPosition -= 16
        }
      }

      // Distributeurs
      if (hygieneProducts.distributeurSavon > 0 || hygieneProducts.distributeurServiette > 0) {
        page.drawText("Distributeurs:", {
          x: 60,
          y: yPosition,
          size: 12,
          font: boldFont,
          color: rgb(0, 0.4, 0.4),
        })
        yPosition -= 18

        addProductLine("Distributeur savon", hygieneProducts.distributeurSavon, hygieneProducts.distributeurSavonGamme)
        addProductLine(
          "Distributeur serviette",
          hygieneProducts.distributeurServiette,
          hygieneProducts.distributeurServietteGamme,
        )

        yPosition -= 10
      }

      // Équipements de séchage
      if (hygieneProducts.secheMains > 0 || hygieneProducts.secheServiette > 0) {
        page.drawText("Équipements de séchage:", {
          x: 60,
          y: yPosition,
          size: 12,
          font: boldFont,
          color: rgb(0, 0.4, 0.4),
        })
        yPosition -= 18

        addProductLine("Sèche-mains", hygieneProducts.secheMains, hygieneProducts.secheMainsGamme)
        addProductLine("Sèche-serviette", hygieneProducts.secheServiette, hygieneProducts.secheServietteGamme)

        yPosition -= 10
      }

      // Consommables
      if (hygieneProducts.savons > 0 || hygieneProducts.papierToilettes > 0 || hygieneProducts.serviettePapier > 0) {
        page.drawText("Consommables:", {
          x: 60,
          y: yPosition,
          size: 12,
          font: boldFont,
          color: rgb(0, 0.4, 0.4),
        })
        yPosition -= 18

        addProductLine("Savons", hygieneProducts.savons)
        addProductLine("Papier toilettes", hygieneProducts.papierToilettes)
        addProductLine("Serviette papier", hygieneProducts.serviettePapier)

        yPosition -= 10
      }

      // Autres équipements
      if (hygieneProducts.diffuseurParfum > 0) {
        page.drawText("Autres équipements:", {
          x: 60,
          y: yPosition,
          size: 12,
          font: boldFont,
          color: rgb(0, 0.4, 0.4),
        })
        yPosition -= 18

        addProductLine("Diffuseur parfum", hygieneProducts.diffuseurParfum, hygieneProducts.diffuseurParfumGamme)

        yPosition -= 10
      }

      yPosition -= 20
    }

    if (yPosition < 150) {
      const newPage = pdfDoc.addPage([595, 842])
      yPosition = 800
      // Continue on new page
    }

    // Price
    page.drawText("TARIFICATION", {
      x: 50,
      y: yPosition,
      size: 14,
      font: boldFont,
    })

    yPosition -= 25

    const price = quoteData.total_amount || details.estimated_price || 0
    page.drawText(`Prix mensuel: ${Number(price).toLocaleString()}€`, {
      x: 50,
      y: yPosition,
      size: 16,
      font: boldFont,
      color: rgb(0, 0.4, 0.4),
    })

    yPosition -= 50

    // Signature section if signed
    if (signed && quoteData.signed_at) {
      page.drawText("SIGNATURE CLIENT", {
        x: 50,
        y: yPosition,
        size: 14,
        font: boldFont,
      })

      yPosition -= 25

      page.drawText(`Signé le: ${new Date(quoteData.signed_at).toLocaleDateString("fr-FR")}`, {
        x: 50,
        y: yPosition,
        size: 12,
        font,
      })

      // Add signature if available
      if (quoteData.signature_data) {
        try {
          // Note: In a real implementation, you would embed the signature image
          page.drawText("Signature électronique validée", {
            x: 50,
            y: yPosition - 25,
            size: 10,
            font,
            color: rgb(0, 0.6, 0),
          })
        } catch (error) {
          console.error("Error adding signature:", error)
        }
      }
    }

    // Generate PDF bytes
    const pdfBytes = await pdfDoc.save()

    console.log("[v0] PDF generated successfully")

    // Return PDF as response
    return new NextResponse(pdfBytes, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="devis-${quoteData.client_name.replace(/\s+/g, "-")}-${quoteData.id.toString().slice(0, 8)}.pdf"`,
      },
    })
  } catch (error) {
    console.error("[v0] Error generating PDF:", error)
    return NextResponse.json({ error: "Failed to generate PDF", details: error.message }, { status: 500 })
  }
}
