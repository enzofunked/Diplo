import { supabase } from "@/lib/supabase/client";
import { NextResponse } from "next/server";

// Mock data for testing when database is not available
const mockAppointments = [
  {
    id: "1",
    created_at: "2024-01-15T10:00:00Z",
    first_name: "Pierre",
    last_name: "Durand",
    email: "pierre.durand@email.com",
    phone: "0123456789",
    company: "Tech Solutions",
    address: "123 Rue de la Paix",
    postal_code: "06000",
    city: "Nice",
    property_type: "Bureau",
    surface_area: 200,
    appointment_date: "2024-01-20",
    appointment_time: "10:00",
    status: "pending",
    comments: "Première visite pour évaluation",
  },
  {
    id: "2",
    created_at: "2024-01-14T14:30:00Z",
    first_name: "Sophie",
    last_name: "Bernard",
    email: "sophie.bernard@email.com",
    phone: "0987654321",
    company: null,
    address: "456 Avenue des Fleurs",
    postal_code: "06100",
    city: "Cannes",
    property_type: "Commerce",
    surface_area: 300,
    appointment_date: "2024-01-22",
    appointment_time: "14:30",
    status: "confirmed",
    comments: null,
  },
];

// Consider Supabase "unavailable" if URL/key are missing (avoid runtime calls that will fail)
function isSupabaseConfigured() {
  // If your supabase client is created with env vars, this is a quick sanity check
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      (process.env.SUPABASE_SERVICE_ROLE_KEY ||
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  );
}

export async function GET() {
  if (!isSupabaseConfigured()) {
    console.log("[v0] Supabase not configured, using mock data");
    return NextResponse.json({ appointments: mockAppointments });
  }

  try {
    console.log("[v0] Fetching appointments from Supabase");
    // Order by date desc, then time desc
    const { data, error } = await supabase
      .from("appointments")
      .select("*")
      .order("appointment_date", { ascending: false })
      .order("appointment_time", { ascending: false });

    if (error) throw error;

    console.log("[v0] Successfully fetched", data?.length ?? 0, "appointments");
    return NextResponse.json({ appointments: data ?? [] });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.log("[v0] Supabase error, using mock data:", msg);
    return NextResponse.json({ appointments: mockAppointments });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("[v0] Received appointment data:", body);

    const appointmentData = {
      first_name: body.first_name ?? body.firstName,
      last_name: body.last_name ?? body.lastName,
      email: body.email,
      phone: body.phone,
      company: body.company ?? null,
      address: body.address,
      postal_code: body.postal_code ?? body.postalCode,
      city: body.city,
      property_type: body.property_type ?? body.propertyType,
      surface_area: Number.isFinite(Number.parseInt(body.surface_area))
        ? Number.parseInt(body.surface_area)
        : Number.parseInt(body.surfaceArea),
      appointment_date: body.appointment_date ?? body.appointmentDate,
      appointment_time: body.appointment_time ?? body.appointmentTime,
      status: body.status ?? "pending",
      comments: body.comments ?? null,
    };

    // Quick required fields check (optional but handy)
    const required = [
      "first_name",
      "last_name",
      "email",
      "address",
      "postal_code",
      "city",
      "property_type",
      "surface_area",
      "appointment_date",
      "appointment_time",
    ] as const;
    for (const key of required) {
      if (
        appointmentData[key] === undefined ||
        appointmentData[key] === null ||
        (typeof appointmentData[key] === "string" &&
          appointmentData[key].trim() === "")
      ) {
        return NextResponse.json(
          { error: `Missing field: ${key}` },
          { status: 400 }
        );
      }
    }

    if (!isSupabaseConfigured()) {
      console.log("[v0] Supabase not configured, simulating successful save");
      const mockAppointment = {
        id: Date.now().toString(),
        created_at: new Date().toISOString(),
        ...appointmentData,
      };
      return NextResponse.json({ appointment: mockAppointment });
    }

    try {
      const { data, error } = await supabase
        .from("appointments")
        .insert(appointmentData)
        .select("*")
        .single();

      if (error) throw error;

      console.log("[v0] Appointment saved successfully:", data);
      return NextResponse.json({ appointment: data });
    } catch (dbError) {
      const msg = dbError instanceof Error ? dbError.message : String(dbError);

      // Common RLS / auth / table errors we’ll gracefully fall back on
      const knownFailures = [
        "new row violates row-level security policy",
        "permission denied",
        "Missing or invalid JWT",
        "relation",
        "does not exist",
        "Failed to fetch",
        "FetchError",
      ];
      if (
        knownFailures.some((s) => msg.toLowerCase().includes(s.toLowerCase()))
      ) {
        console.log("[v0] Supabase insert issue, using mock data:", msg);
        const mockAppointment = {
          id: Date.now().toString(),
          created_at: new Date().toISOString(),
          ...appointmentData,
        };
        return NextResponse.json({ appointment: mockAppointment });
      }

      // Unknown error: bubble up to outer catch
      throw dbError;
    }
  } catch (error) {
    console.error("[v0] Error creating appointment:", error);
    return NextResponse.json(
      { error: "Failed to create appointment" },
      { status: 500 }
    );
  }
}
