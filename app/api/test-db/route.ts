// app/api/db-test/route.ts
import { supabase } from "@/lib/supabase/client";
import { NextResponse } from "next/server";

function isSupabaseConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      (process.env.SUPABASE_SERVICE_ROLE_KEY ||
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  );
}

export async function GET() {
  try {
    console.log("[v0] Testing Supabase connectivity...");

    if (!isSupabaseConfigured()) {
      return NextResponse.json(
        {
          success: false,
          error: "Supabase not configured (URL/key missing)",
        },
        { status: 500 }
      );
    }

    // 1) Basic connectivity check (lightweight)
    const { data: pingData, error: pingError } = await supabase
      .from("quotes")
      .select("id")
      .limit(1);

    if (pingError) throw pingError;
    console.log("[v0] Basic select ok:", pingData?.length ?? 0, "rows visible");

    // 2) List public tables (may require Service Role; optional)
    let tables: string[] | null = null;
    try {
      // Access to information_schema often needs elevated perms; this is best-effort.
      const { data: tbls, error: tblErr } = await supabase
        .from("information_schema.tables")
        .select("table_name")
        .eq("table_schema", "public");

      if (tblErr) throw tblErr;
      tables = (tbls ?? []).map((t: any) => t.table_name);
      console.log("[v0] Public tables discovered:", tables);
    } catch (tErr) {
      console.log("[v0] Could not list public tables (non-fatal):", tErr);
      tables = null;
    }

    // 3) Insert a test quote
    const testPayload = {
      client_name: "Test Client",
      client_email: "test@example.com",
      client_phone: "0123456789",
      client_company: null,
      client_address: null,
      quote_details: { test: true }, // jsonb
      total_amount: 100.0,
      status: "pending",
      signature_data: null,
    };

    const { data: inserted, error: insertError } = await supabase
      .from("quotes")
      .insert(testPayload)
      .select("id, client_name, created_at")
      .single();

    if (insertError) throw insertError;
    console.log("[v0] Test quote inserted:", inserted);

    // Current server time (JS). If you need DB time, create an RPC that calls NOW().
    const currentTime = new Date().toISOString();

    return NextResponse.json({
      success: true,
      message: "Supabase is working correctly",
      current_time: currentTime,
      tables, // may be null if not permitted
      testQuote: inserted,
    });
  } catch (error) {
    console.error("[v0] Supabase test failed:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
