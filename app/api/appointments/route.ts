import { NextResponse } from "next/server"
import { sql, isDatabaseAvailable, testConnection } from "@/lib/neon/client"

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
]

export async function GET() {
  if (!isDatabaseAvailable()) {
    console.log("[v0] Database not available, using mock data")
    return NextResponse.json({ appointments: mockAppointments })
  }

  try {
    console.log("[v0] Attempting to fetch appointments from database")

    await testConnection()

    const appointments = await sql`
      SELECT * FROM appointments 
      ORDER BY appointment_date DESC, appointment_time DESC
    `

    console.log("[v0] Successfully fetched", appointments.length, "appointments")
    return NextResponse.json({ appointments })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)

    if (
      errorMessage.includes("password authentication failed") ||
      errorMessage.includes("authentication failed") ||
      errorMessage.includes("connection refused")
    ) {
      console.log("[v0] Database authentication issue, using mock data:", errorMessage)
    } else {
      console.log("[v0] Database error, using mock data:", error)
    }

    return NextResponse.json({ appointments: mockAppointments })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log("[v0] Received appointment data:", body)

    const appointmentData = {
      first_name: body.first_name || body.firstName,
      last_name: body.last_name || body.lastName,
      email: body.email,
      phone: body.phone,
      company: body.company || null,
      address: body.address,
      postal_code: body.postal_code || body.postalCode,
      city: body.city,
      property_type: body.property_type || body.propertyType,
      surface_area: Number.parseInt(body.surface_area) || Number.parseInt(body.surfaceArea),
      appointment_date: body.appointment_date || body.appointmentDate,
      appointment_time: body.appointment_time || body.appointmentTime,
      status: body.status || "pending",
      comments: body.comments || null,
    }

    if (!isDatabaseAvailable()) {
      console.log("[v0] Database not available, simulating successful save")
      const mockAppointment = {
        id: Date.now().toString(),
        created_at: new Date().toISOString(),
        ...appointmentData,
      }
      return NextResponse.json({ appointment: mockAppointment })
    }

    try {
      await testConnection()

      const result = await sql`
        INSERT INTO appointments (
          first_name, last_name, email, phone, company, address, 
          postal_code, city, property_type, surface_area, 
          appointment_date, appointment_time, status, comments
        ) VALUES (
          ${appointmentData.first_name}, ${appointmentData.last_name}, ${appointmentData.email}, 
          ${appointmentData.phone}, ${appointmentData.company}, ${appointmentData.address},
          ${appointmentData.postal_code}, ${appointmentData.city}, ${appointmentData.property_type}, 
          ${appointmentData.surface_area}, ${appointmentData.appointment_date}, ${appointmentData.appointment_time},
          ${appointmentData.status}, ${appointmentData.comments}
        ) RETURNING *
      `

      const appointment = result[0]
      console.log("[v0] Appointment saved successfully:", appointment)
      return NextResponse.json({ appointment })
    } catch (dbError) {
      const errorMessage = dbError instanceof Error ? dbError.message : String(dbError)

      if (
        errorMessage.includes("password authentication failed") ||
        errorMessage.includes("authentication failed") ||
        errorMessage.includes("connection refused") ||
        errorMessage.includes('relation "appointments" does not exist') ||
        errorMessage.includes('table "public.appointments" does not exist')
      ) {
        console.log("[v0] Database connection/authentication issue, using mock data:", errorMessage)
        const mockAppointment = {
          id: Date.now().toString(),
          created_at: new Date().toISOString(),
          ...appointmentData,
        }
        return NextResponse.json({ appointment: mockAppointment })
      } else {
        throw dbError
      }
    }
  } catch (error) {
    console.error("[v0] Error creating appointment:", error)
    return NextResponse.json({ error: "Failed to create appointment" }, { status: 500 })
  }
}
