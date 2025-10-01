"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Eye, Download, Search, Lock, Trash2 } from "lucide-react"

function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "Monaco2009*") {
      onLogin()
      setError("")
    } else {
      setError("Mot de passe incorrect")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
            <Lock className="h-6 w-6 text-teal-600" />
          </div>
          <CardTitle className="text-2xl">Administration UCT Azur</CardTitle>
          <p className="text-gray-600">Veuillez saisir le mot de passe pour accéder à l'interface d'administration</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Saisissez le mot de passe"
                className="mt-1"
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            <Button type="submit" className="w-full">
              Se connecter
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

// ===== Types based on your example response =====
interface HygieneProducts {
  savons?: number
  secheMains?: number
  secheServiette?: number
  diffuseurParfum?: number
  papierToilettes?: number
  secheMainsGamme?: string
  serviettePapier?: number
  distributeurSavon?: number
  diffuseurParfumGamme?: string
  distributeurServiette?: number
  distributeurSavonGamme?: string
  distributeurServietteGamme?: string
  [key: string]: number | string | undefined
}

interface Quote {
  id: string
  created_at: string
  quote_type: string
  cgv_accepted: boolean
  client_name: string
  client_email: string
  client_phone: string
  client_company?: string
  client_address?: string
  location_type: string
  surface_m2: number
  interventions_per_week: number
  hygiene_products: HygieneProducts
  photo_urls: string[]
  estimated_price_cents: number
  currency: string // e.g., "EUR"
  status: string // e.g., "signed", "pending" ...
  signed_at?: string | null
  meta?: Record<string, any>
  // optional extras if backend provides later
  pdf_url?: string
  signature_data?: string
  signature_url?: string
}

interface Appointment {
  id: string
  created_at: string
  first_name: string
  last_name: string
  email: string
  phone: string
  company?: string
  address: string
  postal_code: string
  city: string
  property_type: string
  surface_area: number
  appointment_date: string
  appointment_time: string
  status: string
  comments?: string
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState<"quotes" | "appointments">("quotes")
  const [databaseReady, setDatabaseReady] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    const authStatus = sessionStorage.getItem("admin_authenticated")
    if (authStatus === "true") setIsAuthenticated(true)
    setLoading(false)
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      fetchData()
      const interval = setInterval(fetchData, 30000)
      return () => clearInterval(interval)
    }
  }, [isAuthenticated])

  const handleLogin = () => {
    setIsAuthenticated(true)
    sessionStorage.setItem("admin_authenticated", "true")
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem("admin_authenticated")
  }

  const fetchData = async () => {
    if (!refreshing) setLoading(true)

    try {
      const quotesResponse = await fetch("/api/quotes")
      const quotesData = await quotesResponse.json()
      setQuotes((quotesData.quotes as Quote[]) || [])

      const appointmentsResponse = await fetch("/api/appointments")
      const appointmentsData = await appointmentsResponse.json()
      setAppointments((appointmentsData.appointments as Appointment[]) || [])

      setDatabaseReady(!quotesData.usingMockData && !appointmentsData.usingMockData)
    } catch (error) {
      console.error("Error fetching data:", error)
      setDatabaseReady(false)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  const handleRefresh = async () => {
    setRefreshing(true)
    await fetchData()
  }

  const centsToMoney = (cents: number, currency: string) => {
    const amount = (cents || 0) / 100
    // Force EUR style if needed, otherwise rely on Intl
    try {
      return new Intl.NumberFormat("fr-FR", { style: "currency", currency }).format(amount)
    } catch {
      return amount.toLocaleString(undefined, { minimumFractionDigits: 2 }) + (currency ? ` ${currency}` : "")
    }
  }

  const getStatusBadge = (status?: string) => {
    const key = (status || "pending").toLowerCase()
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      pending: "outline",
      contacted: "secondary",
      quoted: "default",
      signed: "default",
      closed: "destructive",
    }
    return <Badge variant={variants[key] || "outline"}>{status || "pending"}</Badge>
  }

  const deleteQuote = async (quoteId: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce devis ? Cette action est irréversible.")) return
    try {
      const response = await fetch(`/api/quotes/${quoteId}`, { method: "DELETE" })
      if (response.ok) setQuotes((prev) => prev.filter((q) => q.id !== quoteId))
      else alert("Erreur lors de la suppression du devis")
    } catch (e) {
      console.error(e)
      alert("Erreur lors de la suppression du devis")
    }
  }

  const deleteAppointment = async (appointmentId: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce rendez-vous ? Cette action est irréversible.")) return
    try {
      const response = await fetch(`/api/appointments/${appointmentId}`, { method: "DELETE" })
      if (response.ok) setAppointments((prev) => prev.filter((a) => a.id !== appointmentId))
      else alert("Erreur lors de la suppression du rendez-vous")
    } catch (e) {
      console.error(e)
      alert("Erreur lors de la suppression du rendez-vous")
    }
  }

  const downloadQuote = async (quote: Quote) => {
    try {
      if (quote.pdf_url) {
        const a = document.createElement("a")
        a.href = quote.pdf_url
        a.download = `devis-${quote.client_name.replace(/\s+/g, "-")}-${quote.id.slice(0, 8)}.pdf`
        document.body.appendChild(a)
        a.click()
        a.remove()
        return
      }
      const res = await fetch("/api/generate-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quoteData: quote, signed: quote.status?.toLowerCase() === "signed" }),
      })
      if (!res.ok) throw new Error(await res.text())
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `devis-${quote.client_name.replace(/\s+/g, "-")}-${quote.id.slice(0, 8)}.pdf`
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
    } catch (e) {
      console.error(e)
      alert("Erreur lors du téléchargement du devis")
    }
  }

  if (!isAuthenticated) return <LoginForm onLogin={handleLogin} />

  const filteredQuotes = quotes.filter((q) => {
    const s = searchTerm.toLowerCase()
    const matchesSearch =
      q.client_name.toLowerCase().includes(s) ||
      q.client_email.toLowerCase().includes(s) ||
      (q.client_company || "").toLowerCase().includes(s)
    const matchesFilter = filter === "all" || q.status.toLowerCase() === filter
    return matchesSearch && matchesFilter
  })

  const totalCAcents = quotes.reduce((sum, q) => sum + (q.estimated_price_cents || 0), 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Administration UCT Azur</h1>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={handleRefresh}
              disabled={refreshing}
              className="flex items-center gap-2 bg-transparent"
            >
              <Search className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
              {refreshing ? "Actualisation..." : "Actualiser"}
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              Déconnexion
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {!databaseReady && (
          <Card className="mb-6 border-orange-200 bg-orange-50">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-orange-800">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <p className="font-medium">Base de données en cours d'initialisation</p>
              </div>
              <p className="text-sm text-orange-700 mt-1">
                Les tables n'existent pas encore. Exécutez le script SQL d'initialisation pour voir les vraies données.
              </p>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Devis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{quotes.length}</div>
              {!databaseReady && <div className="text-xs text-orange-600">Données de test</div>}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Devis Signés</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {quotes.filter((q) => q.status?.toLowerCase() === "signed").length}
              </div>
              {!databaseReady && <div className="text-xs text-orange-600">Données de test</div>}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Rendez-vous</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{appointments.length}</div>
              {!databaseReady && <div className="text-xs text-orange-600">Données de test</div>}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">CA Estimé</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-teal-600">
                {centsToMoney(totalCAcents, quotes[0]?.currency || "EUR")}
              </div>
              {!databaseReady && <div className="text-xs text-orange-600">Données de test</div>}
            </CardContent>
          </Card>
        </div>

        <div className="flex space-x-1 mb-6">
          <Button variant={activeTab === "quotes" ? "default" : "outline"} onClick={() => setActiveTab("quotes")}>
            Devis ({quotes.length})
          </Button>
          <Button
            variant={activeTab === "appointments" ? "default" : "outline"}
            onClick={() => setActiveTab("appointments")}
          >
            Rendez-vous ({appointments.length})
          </Button>
        </div>

        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="search">Rechercher</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="search"
                    placeholder="Nom, email, entreprise..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              {activeTab === "quotes" && (
                <div>
                  <Label htmlFor="filter">Statut</Label>
                  <select
                    id="filter"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="all">Tous</option>
                    <option value="pending">En attente</option>
                    <option value="contacted">Contacté</option>
                    <option value="quoted">Devisé</option>
                    <option value="signed">Signé</option>
                    <option value="closed">Fermé</option>
                  </select>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{activeTab === "quotes" ? "Liste des Devis" : "Liste des Rendez-vous"}</CardTitle>
          </CardHeader>
          <CardContent>
            {activeTab === "quotes" && (
              <div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Adresse</TableHead>
                      <TableHead>Local</TableHead>
                      <TableHead>Prix</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredQuotes.map((quote) => (
                      <TableRow key={quote.id}>
                        <TableCell>{new Date(quote.created_at).toLocaleDateString("fr-FR")}</TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{quote.client_name}</div>
                            {quote.client_company && (
                              <div className="text-sm text-gray-500">{quote.client_company}</div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div>{quote.client_email}</div>
                            <div>{quote.client_phone}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            {quote.client_address || <span className="text-gray-400 italic">Non renseignée</span>}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div className="capitalize">{quote.location_type}</div>
                            <div>
                              {quote.surface_m2} m² • {quote.interventions_per_week}x/sem
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">
                          {centsToMoney(quote.estimated_price_cents, quote.currency)}
                        </TableCell>
                        <TableCell>
                          {getStatusBadge(quote.status)}
                          {quote.signed_at && (
                            <Badge variant="default" className="ml-1">
                              Signé
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm">
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-3xl">
                                <DialogHeader>
                                  <DialogTitle>Détails du devis</DialogTitle>
                                  <DialogDescription>
                                    Devis créé le {new Date(quote.created_at).toLocaleDateString("fr-FR")}
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-6 max-h-[85vh] overflow-y-auto">
                                  <div>
                                    <h4 className="font-semibold">Signature du client</h4>
                                    <img src={quote.signature_url || "/placeholder.svg"} className="w-2xs" />
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                      <h4 className="font-semibold">Informations client</h4>
                                      <p>{quote.client_name}</p>
                                      <p>{quote.client_email}</p>
                                      <p>{quote.client_phone}</p>
                                      {quote.client_company && <p>{quote.client_company}</p>}
                                      {quote.client_address && <p>{quote.client_address}</p>}
                                    </div>
                                    <div>
                                      <h4 className="font-semibold">Détails du local</h4>
                                      <p>
                                        Type: <span className="capitalize">{quote.location_type}</span>
                                      </p>
                                      <p>Surface: {quote.surface_m2} m²</p>
                                      <p>Fréquence: {quote.interventions_per_week}x/sem</p>
                                      <p className="font-semibold text-teal-600">
                                        Prix: {centsToMoney(quote.estimated_price_cents, quote.currency)} / mois
                                      </p>
                                    </div>
                                  </div>

                                  {/* Hygiene products */}
                                  {Object.values(quote.hygiene_products || {}).some(
                                    (v) => typeof v === "number" && (v as number) > 0,
                                  ) && (
                                    <div>
                                      <h4 className="font-semibold mb-3">Équipements d'hygiène sanitaire</h4>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Distributeurs */}
                                        {quote.hygiene_products.distributeurSavon ||
                                        quote.hygiene_products.distributeurServiette ||
                                        quote.hygiene_products.diffuseurParfum ? (
                                          <div className="space-y-2">
                                            <h5 className="font-medium text-sm text-gray-700">Distributeurs</h5>
                                            <div className="space-y-1 text-sm">
                                              {quote.hygiene_products.distributeurSavon ? (
                                                <div className="flex justify-between">
                                                  <span>Distributeur savon:</span>
                                                  <span className="font-medium">
                                                    {quote.hygiene_products.distributeurSavon}
                                                  </span>
                                                </div>
                                              ) : null}
                                              {quote.hygiene_products.distributeurSavonGamme &&
                                              quote.hygiene_products.distributeurSavon ? (
                                                <div className="flex justify-between">
                                                  <span>Gamme distributeur savon:</span>
                                                  <span className="font-medium capitalize">
                                                    {quote.hygiene_products.distributeurSavonGamme}
                                                  </span>
                                                </div>
                                              ) : null}
                                              {quote.hygiene_products.distributeurServiette ? (
                                                <div className="flex justify-between">
                                                  <span>Distributeur serviette:</span>
                                                  <span className="font-medium">
                                                    {quote.hygiene_products.distributeurServiette}
                                                  </span>
                                                </div>
                                              ) : null}
                                              {quote.hygiene_products.distributeurServietteGamme &&
                                              quote.hygiene_products.distributeurServiette ? (
                                                <div className="flex justify-between">
                                                  <span>Gamme distributeur serviette:</span>
                                                  <span className="font-medium capitalize">
                                                    {quote.hygiene_products.distributeurServietteGamme}
                                                  </span>
                                                </div>
                                              ) : null}
                                              {quote.hygiene_products.diffuseurParfum ? (
                                                <div className="flex justify-between">
                                                  <span>Diffuseur parfum:</span>
                                                  <span className="font-medium">
                                                    {quote.hygiene_products.diffuseurParfum}
                                                  </span>
                                                </div>
                                              ) : null}
                                              {quote.hygiene_products.diffuseurParfumGamme &&
                                              quote.hygiene_products.diffuseurParfum ? (
                                                <div className="flex justify-between">
                                                  <span>Gamme diffuseur:</span>
                                                  <span className="font-medium capitalize">
                                                    {quote.hygiene_products.diffuseurParfumGamme}
                                                  </span>
                                                </div>
                                              ) : null}
                                            </div>
                                          </div>
                                        ) : null}

                                        {/* Séchage & consommables */}
                                        {quote.hygiene_products.secheMains ||
                                        quote.hygiene_products.secheServiette ||
                                        quote.hygiene_products.savons ||
                                        quote.hygiene_products.papierToilettes ||
                                        quote.hygiene_products.serviettePapier ? (
                                          <div className="space-y-2">
                                            <h5 className="font-medium text-sm text-gray-700">
                                              Séchage & consommables
                                            </h5>
                                            <div className="space-y-1 text-sm">
                                              {quote.hygiene_products.secheMains ? (
                                                <div className="flex justify-between">
                                                  <span>Sèche-mains:</span>
                                                  <span className="font-medium">
                                                    {quote.hygiene_products.secheMains}
                                                  </span>
                                                </div>
                                              ) : null}
                                              {quote.hygiene_products.secheMainsGamme &&
                                              quote.hygiene_products.secheMains ? (
                                                <div className="flex justify-between">
                                                  <span>Gamme sèche-mains:</span>
                                                  <span className="font-medium capitalize">
                                                    {quote.hygiene_products.secheMainsGamme}
                                                  </span>
                                                </div>
                                              ) : null}
                                              {quote.hygiene_products.secheServiette ? (
                                                <div className="flex justify-between">
                                                  <span>Sèche-serviette:</span>
                                                  <span className="font-medium">
                                                    {quote.hygiene_products.secheServiette}
                                                  </span>
                                                </div>
                                              ) : null}
                                              {quote.hygiene_products.savons ? (
                                                <div className="flex justify-between">
                                                  <span>Savons:</span>
                                                  <span className="font-medium">{quote.hygiene_products.savons}</span>
                                                </div>
                                              ) : null}
                                              {quote.hygiene_products.papierToilettes ? (
                                                <div className="flex justify-between">
                                                  <span>Papier toilettes:</span>
                                                  <span className="font-medium">
                                                    {quote.hygiene_products.papierToilettes}
                                                  </span>
                                                </div>
                                              ) : null}
                                              {quote.hygiene_products.serviettePapier ? (
                                                <div className="flex justify-between">
                                                  <span>Serviette papier:</span>
                                                  <span className="font-medium">
                                                    {quote.hygiene_products.serviettePapier}
                                                  </span>
                                                </div>
                                              ) : null}
                                            </div>
                                          </div>
                                        ) : null}

                                        {/* Any other numeric items */}
                                        {Object.entries(quote.hygiene_products || {}).filter(([k, v]) => {
                                          const known = [
                                            "savons",
                                            "secheMains",
                                            "secheServiette",
                                            "diffuseurParfum",
                                            "papierToilettes",
                                            "secheMainsGamme",
                                            "serviettePapier",
                                            "distributeurSavon",
                                            "diffuseurParfumGamme",
                                            "distributeurServiette",
                                            "distributeurSavonGamme",
                                            "distributeurServietteGamme",
                                          ]
                                          return !known.includes(k) && typeof v === "number" && (v as number) > 0
                                        }).length > 0 && (
                                          <div className="space-y-2">
                                            <h5 className="font-medium text-sm text-gray-700">Autres équipements</h5>
                                            <div className="space-y-1 text-sm">
                                              {Object.entries(quote.hygiene_products || {})
                                                .filter(([k, v]) => {
                                                  const known = [
                                                    "savons",
                                                    "secheMains",
                                                    "secheServiette",
                                                    "diffuseurParfum",
                                                    "papierToilettes",
                                                    "secheMainsGamme",
                                                    "serviettePapier",
                                                    "distributeurSavon",
                                                    "diffuseurParfumGamme",
                                                    "distributeurServiette",
                                                    "distributeurSavonGamme",
                                                    "distributeurServietteGamme",
                                                  ]
                                                  return (
                                                    !known.includes(k) && typeof v === "number" && (v as number) > 0
                                                  )
                                                })
                                                .map(([k, v]) => (
                                                  <div key={k} className="flex justify-between">
                                                    <span className="capitalize">
                                                      {k.replace(/([A-Z])/g, " $1").toLowerCase()}:
                                                    </span>
                                                    <span className="font-medium">{v as number}</span>
                                                  </div>
                                                ))}
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  )}

                                  {/* Photos gallery */}
                                  {(quote.photo_urls?.length || 0) > 0 && (
                                    <div>
                                      <h4 className="font-semibold mb-3">Photos</h4>
                                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {quote.photo_urls.map((src, idx) => (
                                          <img
                                            key={idx}
                                            src={src || "/placeholder.svg"}
                                            alt={`photo-${idx + 1}`}
                                            className="w-full h-28 object-cover rounded"
                                          />
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </DialogContent>
                            </Dialog>

                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => downloadQuote(quote)}
                              title={
                                quote.status?.toLowerCase() === "signed"
                                  ? "Télécharger le devis signé"
                                  : "Télécharger le devis"
                              }
                              className={
                                quote.status?.toLowerCase() === "signed"
                                  ? "bg-green-50 border-green-200 hover:bg-green-100"
                                  : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                              }
                            >
                              <Download
                                className={
                                  quote.status?.toLowerCase() === "signed"
                                    ? "h-4 w-4 text-green-600"
                                    : "h-4 w-4 text-gray-600"
                                }
                              />
                            </Button>

                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => deleteQuote(quote.id)}
                              title="Supprimer ce devis"
                              className="bg-red-50 border-red-200 hover:bg-red-100"
                            >
                              <Trash2 className="h-4 w-4 text-red-600" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}

            {activeTab === "appointments" && (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date RDV</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Adresse</TableHead>
                    <TableHead>Propriété</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {appointments.map((appointment) => (
                    <TableRow key={appointment.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">
                            {new Date(appointment.appointment_date).toLocaleDateString("fr-FR")}
                          </div>
                          <div className="text-sm text-gray-500">{appointment.appointment_time}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">
                            {appointment.first_name} {appointment.last_name}
                          </div>
                          {appointment.company && <div className="text-sm text-gray-500">{appointment.company}</div>}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{appointment.email}</div>
                          <div>{appointment.phone}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{appointment.address}</div>
                          <div>
                            {appointment.postal_code} {appointment.city}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{appointment.property_type}</div>
                          <div>{appointment.surface_area}m²</div>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(appointment.status)}</TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteAppointment(appointment.id)}
                          title="Supprimer ce rendez-vous"
                          className="bg-red-50 border-red-200 hover:bg-red-100"
                        >
                          <Trash2 className="h-4 w-4 text-red-600" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
