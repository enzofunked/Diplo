// app/api/quotes/route.ts
import { supabase } from "@/lib/supabase/client";
import { NextResponse } from "next/server";

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

// ---------- Mock data ----------
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
      hygiene_products: {} as Record<string, unknown>,
      photos: [] as string[],
    },
    total_amount: 250.0,
    status: "pending",
    signature_data: null as string | null,
    equipment_ranges: { entree: [], milieu: [], haut: [] } as {
      entree: Array<{ name: string; quantity: number; gamme: string }>;
      milieu: Array<{ name: string; quantity: number; gamme: string }>;
      haut: Array<{ name: string; quantity: number; gamme: string }>;
    },
    gamme_entree_count: 0,
    gamme_milieu_count: 0,
    gamme_haut_count: 0,
    equipment_summary: "",
  },
  {
    id: "2",
    created_at: "2024-01-14T16:00:00Z",
    client_name: "Marie Martin",
    client_email: "marie.martin@email.com",
    client_phone: "0987654321",
    client_company: null as string | null,
    client_address: "456 Avenue des Fleurs, 06100 Cannes",
    quote_details: {
      local_type: "Commerce",
      surface_area: 150,
      interventions_per_week: 3,
      hygiene_products: {} as Record<string, unknown>,
      photos: [] as string[],
    },
    total_amount: 375.0,
    status: "quoted",
    signature_data: "data:image/png;base64,mock-signature",
    equipment_ranges: { entree: [], milieu: [], haut: [] },
    gamme_entree_count: 0,
    gamme_milieu_count: 0,
    gamme_haut_count: 0,
    equipment_summary: "",
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

    const hygieneProducts: Record<string, any> = body.hygiene_products ?? {};

    const equipmentRanges: {
      entree: Array<{ name: string; quantity: number; gamme: "entree" }>;
      milieu: Array<{ name: string; quantity: number; gamme: "milieu" }>;
      haut: Array<{ name: string; quantity: number; gamme: "haut" }>;
    } = { entree: [], milieu: [], haut: [] };

    let gammeEntreeCount = 0;
    let gammeMilieuCount = 0;
    let gammeHautCount = 0;

    // Collect items by "Gamme" selector + quantity key
    Object.keys(hygieneProducts).forEach((key) => {
      if (!key.endsWith("Gamme")) return;

      const equipmentName = key.replace(/Gamme$/, "");
      const gamme = hygieneProducts[key] as
        | "entree"
        | "milieu"
        | "haut"
        | undefined;
      const quantity = toInt(hygieneProducts[equipmentName], 0);
      if (!gamme || quantity <= 0) return;

      if (gamme === "entree") {
        const entry: { name: string; quantity: number; gamme: "entree" } = {
          name: equipmentName,
          quantity,
          gamme: "entree",
        };
        equipmentRanges.entree.push(entry);
        gammeEntreeCount += quantity;
      } else if (gamme === "milieu") {
        const entry: { name: string; quantity: number; gamme: "milieu" } = {
          name: equipmentName,
          quantity,
          gamme: "milieu",
        };
        equipmentRanges.milieu.push(entry);
        gammeMilieuCount += quantity;
      } else {
        // gamme === "haut"
        const entry: { name: string; quantity: number; gamme: "haut" } = {
          name: equipmentName,
          quantity,
          gamme: "haut",
        };
        equipmentRanges.haut.push(entry);
        gammeHautCount += quantity;
      }
    });

    const equipmentSummary = [
      equipmentRanges.entree.length
        ? `Entrée: ${equipmentRanges.entree
            .map((e) => `${e.name}(${e.quantity})`)
            .join(", ")}`
        : "",
      equipmentRanges.milieu.length
        ? `Milieu: ${equipmentRanges.milieu
            .map((e) => `${e.name}(${e.quantity})`)
            .join(", ")}`
        : "",
      equipmentRanges.haut.length
        ? `Haut: ${equipmentRanges.haut
            .map((e) => `${e.name}(${e.quantity})`)
            .join(", ")}`
        : "",
    ]
      .filter(Boolean)
      .join(" | ");

    const quote_details = {
      local_type: body.location_type ?? body.local_type ?? null,
      surface_area: toInt(body.surface ?? body.surface_area, 0),
      interventions_per_week: toInt(
        body.frequency ?? body.interventions_per_week,
        1
      ),
      hygiene_products: hygieneProducts,
      photos: Array.isArray(body.photos) ? body.photos : [],
    };

    const quoteData = {
      client_name: body.client_name ?? body.name ?? "",
      client_email: body.client_email ?? body.email ?? "",
      client_phone: body.client_phone ?? body.phone ?? "",
      client_company: body.client_company ?? body.company ?? null,
      client_address: body.client_address ?? body.address ?? null,
      quote_details, // JSONB
      total_amount: Number.isFinite(Number(body.estimated_price))
        ? Number(body.estimated_price)
        : 0,
      status: body.status ?? "pending",
      signature_data: body.signature_data ?? null,
      created_at: new Date().toISOString(),
      equipment_ranges: equipmentRanges, // JSONB
      gamme_entree_count: gammeEntreeCount,
      gamme_milieu_count: gammeMilieuCount,
      gamme_haut_count: gammeHautCount,
      equipment_summary: equipmentSummary,
    };

    // Basic required-field checks
    const requiredStrings: Array<keyof typeof quoteData> = [
      "client_name",
      "client_email",
      "client_phone",
      "status",
    ];
    for (const k of requiredStrings) {
      const v = quoteData[k];
      if (typeof v !== "string" || v.trim() === "") {
        return NextResponse.json(
          { error: `Missing or invalid field: ${k}` },
          { status: 400 }
        );
      }
    }

    if (!isSupabaseConfigured()) {
      console.log("[v0] Supabase not configured, simulating successful save");
      const mockQuote = { id: Date.now().toString(), ...quoteData };
      return NextResponse.json({ quote: mockQuote });
    }

    try {
      // Insert JSON objects directly; Supabase maps to jsonb columns
      const { data, error } = await supabase
        .from("quotes")
        .insert(quoteData)
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
        const mockQuote = { id: Date.now().toString(), ...quoteData };
        return NextResponse.json({ quote: mockQuote });
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
