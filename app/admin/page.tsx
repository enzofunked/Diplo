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
    if (password === "Monaco2009") {
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

interface Quote {
  id: number
  created_at: string
  client_name: string
  client_email: string
  client_phone: string
  client_company?: string
  client_address?: string
  quote_details: any
  total_amount: number
  status: string
  signed_at?: string
  signature_data?: string
  pdf_url?: string
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
    if (authStatus === "true") {
      setIsAuthenticated(true)
    }
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
    if (!refreshing) {
      setLoading(true)
    }

    try {
      console.log("[v0] Fetching data from admin page")

      const quotesResponse = await fetch("/api/quotes")
      const quotesData = await quotesResponse.json()
      console.log("[v0] Quotes response:", quotesData)

      const realQuotes = quotesData.quotes || []
      setQuotes(realQuotes)

      const appointmentsResponse = await fetch("/api/appointments")
      const appointmentsData = await appointmentsResponse.json()
      console.log("[v0] Appointments response:", appointmentsData)

      const realAppointments = appointmentsData.appointments || []
      setAppointments(realAppointments)

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

  const downloadSignedQuote = async (quote: Quote) => {
    try {
      console.log("[v0] Starting download for quote:", quote.id)

      if (quote.signature_data && quote.pdf_url) {
        console.log("[v0] Downloading original signed PDF from:", quote.pdf_url)
        const link = document.createElement("a")
        link.href = quote.pdf_url
        link.download = `devis-signe-original-${quote.client_name.replace(/\s+/g, "-")}-${String(quote.id).slice(0, 8)}.pdf`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        return
      }

      if (quote.signature_data) {
        console.log("[v0] Generating PDF with existing signature data")
        const response = await fetch("/api/generate-pdf", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            quoteData: quote,
            signed: true,
            signatureData: quote.signature_data,
          }),
        })

        console.log("[v0] PDF generation response status:", response.status)

        if (response.ok) {
          const blob = await response.blob()
          const url = window.URL.createObjectURL(blob)
          const link = document.createElement("a")
          link.href = url
          link.download = `devis-signe-${quote.client_name.replace(/\s+/g, "-")}-${String(quote.id).slice(0, 8)}.pdf`
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          window.URL.revokeObjectURL(url)
          console.log("[v0] Signed PDF downloaded successfully")
        } else {
          const errorText = await response.text()
          console.error("[v0] PDF generation failed:", errorText)
          alert("Erreur lors de la génération du PDF signé")
        }
      } else {
        console.log("[v0] Generating regular PDF for unsigned quote")
        const response = await fetch("/api/generate-pdf", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            quoteData: quote,
            signed: false,
          }),
        })

        console.log("[v0] PDF generation response status:", response.status)

        if (response.ok) {
          const blob = await response.blob()
          const url = window.URL.createObjectURL(blob)
          const link = document.createElement("a")
          link.href = url
          link.download = `devis-${quote.client_name.replace(/\s+/g, "-")}-${String(quote.id).slice(0, 8)}.pdf`
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          window.URL.revokeObjectURL(url)
          console.log("[v0] PDF downloaded successfully")
        } else {
          const errorText = await response.text()
          console.error("[v0] PDF generation failed:", errorText)
          alert("Erreur lors de la génération du PDF")
        }
      }
    } catch (error) {
      console.error("[v0] Download error:", error)
      alert("Erreur lors du téléchargement du devis")
    }
  }

  const deleteQuote = async (quoteId: number) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce devis ? Cette action est irréversible.")) {
      return
    }

    try {
      console.log("[v0] Deleting quote:", quoteId)
      const response = await fetch(`/api/quotes/${quoteId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setQuotes(quotes.filter((q) => q.id !== quoteId))
        console.log("[v0] Quote deleted successfully")
      } else {
        const errorText = await response.text()
        console.error("[v0] Delete quote failed:", errorText)
        alert("Erreur lors de la suppression du devis")
      }
    } catch (error) {
      console.error("[v0] Delete quote error:", error)
      alert("Erreur lors de la suppression du devis")
    }
  }

  const deleteAppointment = async (appointmentId: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce rendez-vous ? Cette action est irréversible.")) {
      return
    }

    try {
      console.log("[v0] Deleting appointment:", appointmentId)
      const response = await fetch(`/api/appointments/${appointmentId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setAppointments(appointments.filter((a) => a.id !== appointmentId))
        console.log("[v0] Appointment deleted successfully")
      } else {
        const errorText = await response.text()
        console.error("[v0] Delete appointment failed:", errorText)
        alert("Erreur lors de la suppression du rendez-vous")
      }
    } catch (error) {
      console.error("[v0] Delete appointment error:", error)
      alert("Erreur lors de la suppression du rendez-vous")
    }
  }

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />
  }

  const filteredQuotes = quotes.filter((quote) => {
    const matchesFilter = filter === "all" || quote.status === filter
    const matchesSearch =
      quote.client_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.client_email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (quote.client_company && quote.client_company.toLowerCase().includes(searchTerm.toLowerCase())) ||
      false
    return matchesFilter && matchesSearch
  })

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearch =
      appointment.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (appointment.company && appointment.company.toLowerCase().includes(searchTerm.toLowerCase())) ||
      false
    return matchesSearch
  })

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      pending: "outline",
      contacted: "secondary",
      quoted: "default",
      closed: "destructive",
    }
    return <Badge variant={variants[status] || "outline"}>{status}</Badge>
  }

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
                Les tables de la base de données n'existent pas encore. Veuillez exécuter le script SQL d'initialisation
                pour voir les vraies données.
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
              <div className="text-2xl font-bold text-green-600">{quotes.filter((q) => q.signed_at).length}</div>
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
                {quotes
                  .reduce((sum, q) => {
                    const amount = q.total_amount || q.quote_details?.estimated_price || 0
                    return sum + (typeof amount === "number" ? amount : 0)
                  }, 0)
                  .toLocaleString()}
                €
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
                {!databaseReady && (
                  <div className="mb-4">
                    <p className="text-sm text-orange-600">
                      Les tables de la base de données n'existent pas encore. Veuillez exécuter le script SQL
                      d'initialisation pour voir les devis et rendez-vous.
                    </p>
                  </div>
                )}

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
                            {quote.client_address ? (
                              <div>{quote.client_address}</div>
                            ) : (
                              <div className="text-gray-400 italic">Non renseignée</div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div>{quote.quote_details?.local_type}</div>
                            <div>
                              {quote.quote_details?.surface_area}m² - {quote.quote_details?.interventions_per_week}x/sem
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">
                          {(quote.total_amount || quote.quote_details?.estimated_price || 0).toLocaleString()}€
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
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>Détails du devis</DialogTitle>
                                  <DialogDescription>
                                    Devis créé le {new Date(quote.created_at).toLocaleDateString("fr-FR")}
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div className="grid grid-cols-2 gap-4">
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
                                      <p>Type: {quote.quote_details?.local_type}</p>
                                      <p>Surface: {quote.quote_details?.surface_area}m²</p>
                                      <p>Fréquence: {quote.quote_details?.interventions_per_week}x/sem</p>
                                      <p className="font-semibold text-teal-600">
                                        Prix:{" "}
                                        {(
                                          quote.total_amount ||
                                          quote.quote_details?.estimated_price ||
                                          0
                                        ).toLocaleString()}
                                        €/mois
                                      </p>
                                    </div>
                                  </div>
                                  {Object.values(quote.quote_details?.hygiene_products || {}).some(
                                    (v: any) => v > 0,
                                  ) && (
                                    <div>
                                      <h4 className="font-semibold mb-3">Équipements d'hygiène sanitaire</h4>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {(quote.quote_details?.hygiene_products?.distributeurSavon > 0 ||
                                          quote.quote_details?.hygiene_products?.distributeurServiette > 0 ||
                                          quote.quote_details?.hygiene_products?.diffuseurParfum > 0) && (
                                          <div className="space-y-2">
                                            <h5 className="font-medium text-sm text-gray-700">Distributeurs</h5>
                                            <div className="space-y-1 text-sm">
                                              {quote.quote_details?.hygiene_products?.distributeurSavon > 0 && (
                                                <div className="flex justify-between">
                                                  <span>Distributeur savon:</span>
                                                  <span className="font-medium">
                                                    {quote.quote_details.hygiene_products.distributeurSavon}
                                                  </span>
                                                </div>
                                              )}
                                              {quote.quote_details?.hygiene_products?.distributeurSavonGamme &&
                                                quote.quote_details?.hygiene_products?.distributeurSavon > 0 && (
                                                  <div className="flex justify-between">
                                                    <span>Gamme distributeur savon:</span>
                                                    <span className="font-medium capitalize">
                                                      {quote.quote_details.hygiene_products.distributeurSavonGamme}
                                                    </span>
                                                  </div>
                                                )}
                                              {quote.quote_details?.hygiene_products?.distributeurServiette > 0 && (
                                                <div className="flex justify-between">
                                                  <span>Distributeur serviette:</span>
                                                  <span className="font-medium">
                                                    {quote.quote_details.hygiene_products.distributeurServiette}
                                                  </span>
                                                </div>
                                              )}
                                              {quote.quote_details?.hygiene_products?.distributeurServietteGamme &&
                                                quote.quote_details?.hygiene_products?.distributeurServiette > 0 && (
                                                  <div className="flex justify-between">
                                                    <span>Gamme distributeur serviette:</span>
                                                    <span className="font-medium capitalize">
                                                      {quote.quote_details.hygiene_products.distributeurServietteGamme}
                                                    </span>
                                                  </div>
                                                )}
                                              {quote.quote_details?.hygiene_products?.diffuseurParfum > 0 && (
                                                <div className="flex justify-between">
                                                  <span>Diffuseur parfum:</span>
                                                  <span className="font-medium">
                                                    {quote.quote_details.hygiene_products.diffuseurParfum}
                                                  </span>
                                                </div>
                                              )}
                                              {quote.quote_details?.hygiene_products?.diffuseurParfumGamme &&
                                                quote.quote_details?.hygiene_products?.diffuseurParfum > 0 && (
                                                  <div className="flex justify-between">
                                                    <span>Gamme diffuseur:</span>
                                                    <span className="font-medium capitalize">
                                                      {quote.quote_details.hygiene_products.diffuseurParfumGamme}
                                                    </span>
                                                  </div>
                                                )}
                                            </div>
                                          </div>
                                        )}

                                        {(quote.quote_details?.hygiene_products?.secheMains > 0 ||
                                          quote.quote_details?.hygiene_products?.secheServiette > 0) && (
                                          <div className="space-y-2">
                                            <h5 className="font-medium text-sm text-gray-700">
                                              Équipements de séchage
                                            </h5>
                                            <div className="space-y-1 text-sm">
                                              {quote.quote_details?.hygiene_products?.secheMains > 0 && (
                                                <div className="flex justify-between">
                                                  <span>Sèche-mains:</span>
                                                  <span className="font-medium">
                                                    {quote.quote_details.hygiene_products.secheMains}
                                                  </span>
                                                </div>
                                              )}
                                              {quote.quote_details?.hygiene_products?.secheMainsGamme &&
                                                quote.quote_details?.hygiene_products?.secheMains > 0 && (
                                                  <div className="flex justify-between">
                                                    <span>Gamme sèche-mains:</span>
                                                    <span className="font-medium capitalize">
                                                      {quote.quote_details.hygiene_products.secheMainsGamme}
                                                    </span>
                                                  </div>
                                                )}
                                              {quote.quote_details?.hygiene_products?.secheServiette > 0 && (
                                                <div className="flex justify-between">
                                                  <span>Sèche-serviette:</span>
                                                  <span className="font-medium">
                                                    {quote.quote_details.hygiene_products.secheServiette}
                                                  </span>
                                                </div>
                                              )}
                                            </div>
                                          </div>
                                        )}

                                        {(quote.quote_details?.hygiene_products?.savons > 0 ||
                                          quote.quote_details?.hygiene_products?.papierToilettes > 0 ||
                                          quote.quote_details?.hygiene_products?.serviettePapier > 0) && (
                                          <div className="space-y-2">
                                            <h5 className="font-medium text-sm text-gray-700">Consommables</h5>
                                            <div className="space-y-1 text-sm">
                                              {quote.quote_details?.hygiene_products?.savons > 0 && (
                                                <div className="flex justify-between">
                                                  <span>Savons:</span>
                                                  <span className="font-medium">
                                                    {quote.quote_details.hygiene_products.savons}
                                                  </span>
                                                </div>
                                              )}
                                              {quote.quote_details?.hygiene_products?.papierToilettes > 0 && (
                                                <div className="flex justify-between">
                                                  <span>Papier toilettes:</span>
                                                  <span className="font-medium">
                                                    {quote.quote_details.hygiene_products.papierToilettes}
                                                  </span>
                                                </div>
                                              )}
                                              {quote.quote_details?.hygiene_products?.serviettePapier > 0 && (
                                                <div className="flex justify-between">
                                                  <span>Serviette papier:</span>
                                                  <span className="font-medium">
                                                    {quote.quote_details.hygiene_products.serviettePapier}
                                                  </span>
                                                </div>
                                              )}
                                            </div>
                                          </div>
                                        )}

                                        {Object.entries(quote.quote_details?.hygiene_products || {}).filter(
                                          ([key, value]) =>
                                            ![
                                              "distributeurSavon",
                                              "distributeurSavonGamme",
                                              "distributeurServiette",
                                              "distributeurServietteGamme",
                                              "diffuseurParfum",
                                              "diffuseurParfumGamme",
                                              "secheMains",
                                              "secheMainsGamme",
                                              "secheServiette",
                                              "savons",
                                              "papierToilettes",
                                              "serviettePapier",
                                            ].includes(key) &&
                                            typeof value === "number" &&
                                            value > 0,
                                        ).length > 0 && (
                                          <div className="space-y-2">
                                            <h5 className="font-medium text-sm text-gray-700">Autres équipements</h5>
                                            <div className="space-y-1 text-sm">
                                              {Object.entries(quote.quote_details?.hygiene_products || {})
                                                .filter(
                                                  ([key, value]) =>
                                                    ![
                                                      "distributeurSavon",
                                                      "distributeurSavonGamme",
                                                      "distributeurServiette",
                                                      "distributeurServietteGamme",
                                                      "diffuseurParfum",
                                                      "diffuseurParfumGamme",
                                                      "secheMains",
                                                      "secheMainsGamme",
                                                      "secheServiette",
                                                      "savons",
                                                      "papierToilettes",
                                                      "serviettePapier",
                                                    ].includes(key) &&
                                                    typeof value === "number" &&
                                                    value > 0,
                                                )
                                                .map(([key, value]) => (
                                                  <div key={key} className="flex justify-between">
                                                    <span className="capitalize">
                                                      {key.replace(/([A-Z])/g, " $1").toLowerCase()}:
                                                    </span>
                                                    <span className="font-medium">{value as number}</span>
                                                  </div>
                                                ))}
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </DialogContent>
                            </Dialog>
                            {quote.signature_data || quote.signed_at ? (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => downloadSignedQuote(quote)}
                                title="Télécharger le devis signé original"
                                className="bg-green-50 border-green-200 hover:bg-green-100"
                              >
                                <Download className="h-4 w-4 text-green-600" />
                              </Button>
                            ) : (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => downloadSignedQuote(quote)}
                                title="Télécharger le devis (non signé)"
                                className="bg-gray-50 border-gray-200 hover:bg-gray-100"
                              >
                                <Download className="h-4 w-4 text-gray-600" />
                              </Button>
                            )}
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
                  {filteredAppointments.map((appointment) => (
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
