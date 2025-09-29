import { NextResponse } from "next/server"
import { sql } from "@/lib/neon/client"

export async function GET() {
  try {
    console.log("[v0] Testing database connection...")

    // Test de connexion simple
    const result = await sql`SELECT NOW() as current_time`
    console.log("[v0] Database connection successful:", result)

    // Vérifier que les tables existent
    const tables = await sql`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `
    console.log("[v0] Available tables:", tables)

    // Test d'insertion dans la table quotes
    const testQuote = await sql`
      INSERT INTO quotes (
        client_name, 
        client_email, 
        client_phone, 
        quote_details, 
        total_amount
      ) VALUES (
        'Test Client', 
        'test@example.com', 
        '0123456789', 
        '{"test": true}', 
        100.00
      ) RETURNING id, client_name, created_at
    `
    console.log("[v0] Test quote inserted:", testQuote)

    return NextResponse.json({
      success: true,
      message: "Database is working correctly",
      tables: tables.map((t) => t.table_name),
      testQuote: testQuote[0],
    })
  } catch (error) {
    console.error("[v0] Database test failed:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
