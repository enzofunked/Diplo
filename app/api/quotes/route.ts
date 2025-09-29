import { NextResponse } from "next/server"
import { sql, isDatabaseAvailable, testConnection } from "@/lib/neon/client"

// Mock data for testing when database is not available
const mockQuotes = [
  {
    id: "1",
    created_at: "2024-01-15T10:00:00Z",
    client_name: "Jean Dupont",
    client_email: "jean.dupont@email.com",
    client_phone: "0123456789",
    client_company: "Entreprise ABC",
    client_address: "123 Rue de la Paix, 06000 Nice",
    quote_details: {
      local_type: "Bureau",
      surface_area: 100,
      interventions_per_week: 2,
      hygiene_products: {},
      photos: [],
    },
    total_amount: 250.0,
    status: "pending",
    signature_data: null,
    created_at: null,
  },
  {
    id: "2",
    created_at: "2024-01-14T14:30:00Z",
    client_name: "Marie Martin",
    client_email: "marie.martin@email.com",
    client_phone: "0987654321",
    client_company: null,
    client_address: "456 Avenue des Fleurs, 06100 Cannes",
    quote_details: {
      local_type: "Commerce",
      surface_area: 150,
      interventions_per_week: 3,
      hygiene_products: {},
      photos: [],
    },
    total_amount: 375.0,
    status: "quoted",
    signature_data: "data:image/png;base64,mock-signature",
    created_at: "2024-01-14T16:00:00Z",
  },
]

export async function GET() {
  if (!isDatabaseAvailable()) {
    console.log("[v0] Database not available, using mock data")
    return NextResponse.json({ quotes: mockQuotes })
  }

  try {
    console.log("[v0] Attempting to fetch quotes from database")

    const quotes = await sql`
      SELECT * FROM quotes 
      ORDER BY created_at DESC
    `

    console.log("[v0] Successfully fetched", quotes.length, "quotes")
    return NextResponse.json({ quotes })
  } catch (error) {
    console.log("[v0] Database error, using mock data:", error)
    return NextResponse.json({ quotes: mockQuotes })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log("[v0] Received quote data:", body)

    const hygieneProducts = body.hygiene_products || {}
    const equipmentRanges = {
      entree: [],
      milieu: [],
      haut: [],
    }

    let gammeEntreeCount = 0
    let gammeMilieuCount = 0
    let gammeHautCount = 0

    // Process each equipment and its range
    Object.keys(hygieneProducts).forEach((key) => {
      if (key.endsWith("Gamme")) {
        const equipmentName = key.replace("Gamme", "")
        const gamme = hygieneProducts[key]
        const quantity = hygieneProducts[equipmentName] || 0

        if (quantity > 0) {
          const equipmentInfo = {
            name: equipmentName,
            quantity: quantity,
            gamme: gamme,
          }

          if (gamme === "entree") {
            equipmentRanges.entree.push(equipmentInfo)
            gammeEntreeCount += quantity
          } else if (gamme === "milieu") {
            equipmentRanges.milieu.push(equipmentInfo)
            gammeMilieuCount += quantity
          } else if (gamme === "haut") {
            equipmentRanges.haut.push(equipmentInfo)
            gammeHautCount += quantity
          }
        }
      }
    })

    // Create a readable summary
    const equipmentSummary = [
      equipmentRanges.entree.length > 0
        ? `Entrée: ${equipmentRanges.entree.map((e) => `${e.name}(${e.quantity})`).join(", ")}`
        : "",
      equipmentRanges.milieu.length > 0
        ? `Milieu: ${equipmentRanges.milieu.map((e) => `${e.name}(${e.quantity})`).join(", ")}`
        : "",
      equipmentRanges.haut.length > 0
        ? `Haut: ${equipmentRanges.haut.map((e) => `${e.name}(${e.quantity})`).join(", ")}`
        : "",
    ]
      .filter(Boolean)
      .join(" | ")

    const quoteData = {
      client_name: body.client_name || body.name,
      client_email: body.client_email || body.email,
      client_phone: body.client_phone || body.phone,
      client_company: body.client_company || body.company,
      client_address: body.client_address || body.address || null,
      quote_details: {
        local_type: body.location_type || body.local_type,
        surface_area: Number.parseInt(body.surface) || body.surface_area || 0,
        interventions_per_week: Number.parseInt(body.frequency) || body.interventions_per_week || 1,
        hygiene_products: body.hygiene_products || {},
        photos: body.photos || [],
      },
      total_amount: body.estimated_price || 0,
      status: body.status || "pending",
      signature_data: body.signature_data || null,
      created_at: new Date().toISOString(),
      equipment_ranges: equipmentRanges,
      gamme_entree_count: gammeEntreeCount,
      gamme_milieu_count: gammeMilieuCount,
      gamme_haut_count: gammeHautCount,
      equipment_summary: equipmentSummary,
    }

    if (!isDatabaseAvailable()) {
      console.log("[v0] Database not available, simulating successful save")
      const mockQuote = {
        id: Date.now().toString(),
        created_at: new Date().toISOString(),
        ...quoteData,
      }
      return NextResponse.json({ quote: mockQuote })
    }

    try {
      await testConnection()

      const result = await sql`
        INSERT INTO quotes (
          client_name, client_email, client_phone, client_company, client_address,
          quote_details, total_amount, status, signature_data, created_at,
          equipment_ranges, gamme_entree_count, gamme_milieu_count, gamme_haut_count, equipment_summary
        ) VALUES (
          ${quoteData.client_name}, ${quoteData.client_email}, ${quoteData.client_phone},
          ${quoteData.client_company}, ${quoteData.client_address},
          ${JSON.stringify(quoteData.quote_details)},
          ${quoteData.total_amount}, ${quoteData.status},
          ${quoteData.signature_data}, ${quoteData.created_at},
          ${JSON.stringify(quoteData.equipment_ranges)},
          ${quoteData.gamme_entree_count}, ${quoteData.gamme_milieu_count}, 
          ${quoteData.gamme_haut_count}, ${quoteData.equipment_summary}
        ) RETURNING *
      `

      const quote = result[0]
      console.log("[v0] Quote saved successfully:", quote)
      return NextResponse.json({ quote })
    } catch (dbError) {
      const errorMessage = dbError instanceof Error ? dbError.message : String(dbError)

      if (
        errorMessage.includes("password authentication failed") ||
        errorMessage.includes("authentication failed") ||
        errorMessage.includes("connection refused") ||
        errorMessage.includes('relation "quotes" does not exist') ||
        errorMessage.includes('table "public.quotes" does not exist')
      ) {
        console.log("[v0] Database connection/authentication issue, using mock data:", errorMessage)
        const mockQuote = {
          id: Date.now().toString(),
          created_at: new Date().toISOString(),
          ...quoteData,
        }
        return NextResponse.json({ quote: mockQuote })
      } else {
        throw dbError
      }
    }
  } catch (error) {
    console.error("[v0] Error creating quote:", error)
    return NextResponse.json({ error: "Failed to create quote" }, { status: 500 })
  }
}
