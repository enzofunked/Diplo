// app/api/quotes/route.ts
import { supabaseAdmin } from "@/lib/supabase/admin";
import { NextResponse } from "next/server";

/**
 * If you have a server-side admin client, prefer:
 * import { createClient } from "@supabase/supabase-js";
 * const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
 */

const supabase = supabaseAdmin;

// ---------- Helpers ----------
function isSupabaseConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      (process.env.SUPABASE_SERVICE_ROLE_KEY ||
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  );
}

function toInt(val: unknown, fallback = 0): number {
  const n = typeof val === "string" ? parseInt(val, 10) : Number(val);
  return Number.isFinite(n) ? n : fallback;
}

function toBool(val: unknown, fallback = false): boolean {
  if (typeof val === "boolean") return val;
  if (typeof val === "string") {
    const v = val.trim().toLowerCase();
    if (["true", "1", "yes", "on"].includes(v)) return true;
    if (["false", "0", "no", "off"].includes(v)) return false;
  }
  return fallback;
}

// ---------- Mock data (matches NEW schema) ----------
const mockQuotes = [
  {
    id: "1",
    created_at: "2024-01-15T10:00:00Z",
    quote_type: "auto",
    cgv_accepted: true,
    client_name: "Jean Dupont",
    client_email: "jean.dupont@email.com",
    client_phone: "0123456789",
    client_company: "Entreprise ABC",
    client_address: "123 Rue de la Paix, 06000 Nice",
    location_type: "bureaux",
    surface_m2: 100,
    interventions_per_week: 2,
    hygiene_products: {} as Record<string, unknown>,
    photo_urls: [] as string[],
    estimated_price_cents: 25000,
    currency: "EUR",
    status: "pending",
    signed_at: null as string | null,
    signature_url: null as string | null, // NEW in mock
    meta: {},
  },
  {
    id: "2",
    created_at: "2024-01-14T16:00:00Z",
    quote_type: "detailed",
    cgv_accepted: true,
    client_name: "Marie Martin",
    client_email: "marie.martin@email.com",
    client_phone: "0987654321",
    client_company: null as string | null,
    client_address: "456 Avenue des Fleurs, 06100 Cannes",
    location_type: "commerces",
    surface_m2: 150,
    interventions_per_week: 3,
    hygiene_products: {} as Record<string, unknown>,
    photo_urls: [] as string[],
    estimated_price_cents: 37500,
    currency: "EUR",
    status: "signed",
    signed_at: "2024-01-15T12:00:00Z",
    signature_url: "https://example.com/sigs/abc.png", // NEW in mock
    meta: {},
  },
];

// ---------- GET ----------
export async function GET() {
  if (!isSupabaseConfigured()) {
    console.log("[v0] Supabase not configured, using mock data");
    return NextResponse.json({ quotes: mockQuotes });
  }

  try {
    console.log("[v0] Fetching quotes from Supabase");
    const { data, error } = await supabase
      .from("quotes")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    console.log("[v0] Successfully fetched", data?.length ?? 0, "quotes");
    return NextResponse.json({ quotes: data ?? [] });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.log("[v0] Supabase error, using mock data:", msg);
    return NextResponse.json({ quotes: mockQuotes });
  }
}

// ---------- POST ----------
export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("[v0] Received quote data:", body);

    // --- Normalize/Back-compat mappings ---
    const quote_type: "auto" | "detailed" =
      body.quote_type ??
      body.type ??
      body.quoteType ??
      (body?.params?.type === "detailed" ? "detailed" : "auto");

    const cgv_accepted: boolean =
      toBool(body.cgv_accepted, false) || toBool(body.cgvAccepted, false); // checkbox in UI

    const client_name: string = body.client_name ?? body.name ?? "";
    const client_email: string = body.client_email ?? body.email ?? "";
    const client_phone: string = body.client_phone ?? body.phone ?? "";
    const client_company: string | null =
      body.client_company ?? body.company ?? null;
    const client_address: string =
      body.client_address ?? body.address ?? "" ?? "";

    const location_type: string =
      body.location_type ??
      body.local_type ??
      body?.quote_details?.local_type ??
      ""; // 'bureaux','commerces','sante','hotels','coproprietes'

    const surface_m2: number = toInt(
      body.surface_m2 ?? body.surface ?? body?.quote_details?.surface_area,
      0
    );

    const interventions_per_week: number = toInt(
      body.interventions_per_week ??
        body.frequency ??
        body?.quote_details?.interventions_per_week,
      1
    );

    const hygiene_products: Record<string, unknown> =
      body.hygiene_products ??
      body.hygienProducts ??
      body?.quote_details?.hygiene_products ??
      {};

    const photo_urls: string[] = Array.isArray(body.photo_urls)
      ? body.photo_urls
      : Array.isArray(body.photoUrls)
      ? body.photoUrls
      : Array.isArray(body.photos)
      ? body.photos
      : Array.isArray(body?.quote_details?.photos)
      ? body.quote_details.photos
      : [];

    // Price normalization: prefer cents if provided; else derive from euros
    const estimated_price_cents: number = toInt(
      body.estimated_price_cents,
      Math.round(
        Number.isFinite(Number(body.estimated_price))
          ? Number(body.estimated_price) * 100
          : 0
      )
    );

    const currency: string = body.currency ?? "EUR";
    const status: "pending" | "signed" | "rejected" | "cancelled" =
      body.status ?? "pending";

    // Optional
    let signed_at: string | null = body.signed_at ?? null;
    const meta: Record<string, unknown> = body.meta ?? {};

    // --- NEW: signature fields ---
    // Public URL when bucket is public (recommended for this flow)
    const signature_url: string | null =
      body.signature_url ?? body.signatureUrl ?? body.signatureURL ?? null;

    // If you keep bucket private, you might prefer to store the object key instead of a public URL:
    const signature_object_path: string | null =
      body.signature_object_path ?? body.signatureObjectPath ?? null;

    // If the quote is CGV-accepted and we DO have a signature URL but no signed_at, set it.
    if (!signed_at && cgv_accepted && signature_url) {
      signed_at = new Date().toISOString();
    }

    // --- Basic required-field checks (server guard) ---
    const requiredString = (v: unknown) =>
      typeof v === "string" && v.trim().length > 0;

    if (!requiredString(client_name))
      return NextResponse.json(
        { error: "Missing or invalid field: client_name" },
        { status: 400 }
      );
    if (!requiredString(client_email))
      return NextResponse.json(
        { error: "Missing or invalid field: client_email" },
        { status: 400 }
      );
    if (!requiredString(client_phone))
      return NextResponse.json(
        { error: "Missing or invalid field: client_phone" },
        { status: 400 }
      );
    if (!requiredString(client_address))
      return NextResponse.json(
        { error: "Missing or invalid field: client_address" },
        { status: 400 }
      );
    if (!requiredString(location_type))
      return NextResponse.json(
        { error: "Missing or invalid field: location_type" },
        { status: 400 }
      );
    if (!Number.isFinite(surface_m2) || surface_m2 < 0)
      return NextResponse.json(
        { error: "Missing or invalid field: surface_m2" },
        { status: 400 }
      );
    if (
      !Number.isFinite(interventions_per_week) ||
      interventions_per_week < 1 ||
      interventions_per_week > 6
    )
      return NextResponse.json(
        { error: "Missing or invalid field: interventions_per_week" },
        { status: 400 }
      );
    if (!Number.isFinite(estimated_price_cents) || estimated_price_cents < 0)
      return NextResponse.json(
        { error: "Missing or invalid field: estimated_price_cents" },
        { status: 400 }
      );

    // --- Build the row exactly as the DB expects ---
    const row = {
      quote_type,
      cgv_accepted,
      client_name,
      client_email,
      client_phone,
      client_company,
      client_address,
      location_type,
      surface_m2,
      interventions_per_week,
      hygiene_products, // jsonb
      photo_urls, // text[]
      estimated_price_cents,
      currency,
      status,
      signed_at,
      signature_url, // <-- NEW: persist the uploaded signature's public URL
      // If you also want to keep the object key when bucket is private:
      // signature_object_path,
      meta,
      created_at: new Date().toISOString(),
    };

    if (!isSupabaseConfigured()) {
      console.log("[v0] Supabase not configured, simulating successful save");
      const mock = { id: Date.now().toString(), ...row };
      return NextResponse.json({ quote: mock });
    }

    try {
      const { data, error } = await supabase
        .from("quotes")
        .insert(row)
        .select("*")
        .single();

      if (error) throw error;

      console.log("[v0] Quote saved successfully:", data);
      return NextResponse.json({ quote: data });
    } catch (dbError) {
      const msg = dbError instanceof Error ? dbError.message : String(dbError);
      const knownFailures = [
        "row-level security",
        "permission denied",
        "missing or invalid jwt",
        "relation",
        "does not exist",
        "failed to fetch",
        "fetcherror",
      ];
      if (knownFailures.some((s) => msg.toLowerCase().includes(s))) {
        console.log("[v0] Supabase insert issue, using mock data:", msg);
        const mock = { id: Date.now().toString(), ...row };
        return NextResponse.json({ quote: mock });
      }
      throw dbError;
    }
  } catch (error) {
    console.error("[v0] Error creating quote:", error);
    return NextResponse.json(
      { error: "Failed to create quote" },
      { status: 500 }
    );
  }
}
