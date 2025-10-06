import { neon } from "@neondatabase/serverless"

const getDatabaseUrl = () => {
  console.log("[v0] Checking environment variables for database connection...")

  const possibleUrls = [process.env.DATABASE_URL, process.env.POSTGRES_URL, process.env.NEON_DATABASE_URL]

  for (const url of possibleUrls) {
    if (url && url.startsWith("postgresql://")) {
      console.log("[v0] Using database URL from env var")
      const urlWithSSL = url.includes("sslmode=") ? url : `${url}${url.includes("?") ? "&" : "?"}sslmode=require`
      return urlWithSSL
    }
  }

  const host = process.env.PGHOST || process.env.POSTGRES_HOST
  const user = process.env.PGUSER || process.env.POSTGRES_USER
  const password = process.env.PGPASSWORD || process.env.POSTGRES_PASSWORD
  const database = process.env.PGDATABASE || process.env.POSTGRES_DATABASE

  if (host && user && password && database) {
    const constructedUrl = `postgresql://${user}:${password}@${host}/${database}?sslmode=require`
    console.log("[v0] Constructed database URL from components")
    return constructedUrl
  }

  console.log("[v0] No valid database configuration found")
  return null
}

let sqlClient: any = null
let clientError: string | null = null

try {
  const databaseUrl = getDatabaseUrl()
  if (databaseUrl) {
    sqlClient = neon(databaseUrl)
    console.log("[v0] Neon client initialized successfully")
  } else {
    clientError = "No valid database connection string found"
    console.log("[v0] No database URL found, will use fallback data")
  }
} catch (error) {
  clientError = error instanceof Error ? error.message : String(error)
  console.error("[v0] Failed to initialize Neon client:", clientError)
}

export const sql = sqlClient

export const isDatabaseAvailable = () => sqlClient !== null

export const testConnection = async () => {
  if (!sqlClient) {
    throw new Error(clientError || "Database client not initialized")
  }

  try {
    await sqlClient`SELECT 1 as test`
    return true
  } catch (error) {
    console.error("[v0] Database connection test failed:", error)
    throw error
  }
}
