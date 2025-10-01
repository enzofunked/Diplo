"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { ArrowLeft, Calculator, Camera, Plus, Minus } from "lucide-react"
import Link from "next/link"
import PDFGenerator from "@/components/pdf-generator"
import Image from "next/image"

interface EstimationData {
  locationType: string
  surface: string
  frequency: string // Will now store number of interventions per week
  hygienProducts: {
    diffuseurParfum: number
    diffuseurParfumGamme: string // Added perfume diffuser range selection
    secheServiette: number
    distributeurSavon: number
    distributeurSavonGamme: string // Added soap dispenser range selection
    distributeurServiette: number
    distributeurServietteGamme: string // Added toilet paper dispenser range selection
    secheMains: number // Added hand dryer
    secheMainsGamme: string // Added hand dryer range selection
    savons: number
    papierToilettes: number
    serviettePapier: number
  }
  photos: File[]
  contactInfo: {
    name: string
    email: string
    phone: string
    company: string
    address: string
  }
}

export default function EstimationPage() {
  const [estimation, setEstimation] = useState<EstimationData>({
    locationType: "",
    surface: "",
    frequency: "3", // Default to 3 interventions per week
    hygienProducts: {
      diffuseurParfum: 0,
      diffuseurParfumGamme: "entree", // Default to entry level for perfume diffuser
      secheServiette: 0,
      distributeurSavon: 0,
      distributeurSavonGamme: "entree", // Default to entry level for soap dispenser
      distributeurServiette: 0,
      distributeurServietteGamme: "entree", // Default to entry level for toilet paper dispenser
      secheMains: 0, // Added default value for hand dryer
      secheMainsGamme: "entree", // Default to entry level
      savons: 0,
      papierToilettes: 0,
      serviettePapier: 0,
    },
    photos: [],
    contactInfo: {
      name: "",
      email: "",
      phone: "",
      company: "",
      address: "",
    },
  })
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null)
  const [showEstimation, setShowEstimation] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [photoUrls, setPhotoUrls] = useState<string[]>([]) // Added photo URLs state to track uploaded photos
  const [quoteType, setQuoteType] = useState<"auto" | "detailed">("auto")
  const [showPdfSection, setShowPdfSection] = useState(false)
  const [showPdfCard, setShowPdfCard] = useState(false)
  const [cgvAccepted, setCgvAccepted] = useState(false)
  const [showCgvModal, setShowCgvModal] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const type = params.get("type")
    if (type === "detailed") {
      setQuoteType("detailed")
    }
  }, [])

  useEffect(() => {
    if (estimation.locationType && estimation.surface && estimation.frequency) {
      let basePrice = 0
      const surface = Number.parseInt(estimation.surface) || 0
      const interventions = Number.parseInt(estimation.frequency) || 1

      const basePrices = {
        bureaux: 1.5, // Reduced from 2.5 to 1.5€/m²
        commerces: 2.0, // Reduced from 3.0 to 2.0€/m²
        sante: 2.5, // Reduced from 4.0 to 2.5€/m²
        hotels: 2.2, // Reduced from 3.5 to 2.2€/m²
        coproprietes: 1.2, // Reduced from 2.0 to 1.2€/m²
      }

      // Base calculation: surface × price per m² × interventions per week
      basePrice = surface * (basePrices[estimation.locationType as keyof typeof basePrices] || 1.5) * interventions

      if (interventions === 1) {
        basePrice *= 1.5 // +50% for once per week (premium for low frequency)
      } else if (interventions === 2) {
        basePrice *= 1.2 // +20% for twice per week
      } else if (interventions >= 5) {
        basePrice *= 0.85 // -15% for daily cleaning (volume discount)
      }
      // 3-4 interventions per week = standard pricing (no adjustment)

      const productCosts = {
        secheServiette: 35,
        savons: 15,
        papierToilettes: 12,
        serviettePapier: 10,
      }

      const diffuseurParfumPrices = {
        entree: 5, // Average of 3-7€
        milieu: 10, // Average of 8-12€
        haut: 15.5, // Average of 13-18€
      }

      const secheMainsPrices = {
        entree: 12.5, // Average of 10-15€
        milieu: 25, // Average of 20-30€
        haut: 57.5, // Average of 45-70€
      }

      const distributeurSavonPrices = {
        entree: 2, // Average of 1-3€
        milieu: 5.5, // Average of 4-7€
        haut: 10, // Average of 8-12€
      }

      const distributeurServettePrices = {
        entree: 2.5, // Average of 1-4€
        milieu: 6.5, // Average of 5-8€
        haut: 10.5, // Average of 8-13€
      }

      Object.entries(estimation.hygienProducts).forEach(([product, quantity]) => {
        if (product === "diffuseurParfum") {
          const price =
            diffuseurParfumPrices[
            estimation.hygienProducts.diffuseurParfumGamme as keyof typeof diffuseurParfumPrices
            ] || 5
          basePrice += quantity * price
        } else if (product === "secheMains") {
          const price =
            secheMainsPrices[estimation.hygienProducts.secheMainsGamme as keyof typeof secheMainsPrices] || 12.5
          basePrice += quantity * price
        } else if (product === "distributeurSavon") {
          const price =
            distributeurSavonPrices[
            estimation.hygienProducts.distributeurSavonGamme as keyof typeof distributeurSavonPrices
            ] || 2
          basePrice += quantity * price
        } else if (product === "distributeurServiette") {
          const price =
            distributeurServettePrices[
            estimation.hygienProducts.distributeurServietteGamme as keyof typeof distributeurServettePrices
            ] || 2.5
          basePrice += quantity * price
        } else if (
          product !== "diffuseurParfumGamme" && // Excluded perfume diffuser range from direct calculation
          product !== "secheMainsGamme" &&
          product !== "distributeurSavonGamme" &&
          product !== "distributeurServietteGamme"
        ) {
          basePrice += quantity * (productCosts[product as keyof typeof productCosts] || 0)
        }
      })

      setEstimatedPrice(Math.round(basePrice))
      setShowEstimation(true)
    } else {
      setShowEstimation(false)
      setEstimatedPrice(null)
    }
  }, [estimation.locationType, estimation.surface, estimation.frequency, estimation.hygienProducts])

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    // 1) add local previews and remember where they start
    const localUrls = files.map((f) => URL.createObjectURL(f));
    let startIndex = -1;
    setPhotoUrls((prev) => {
      startIndex = prev.length;               // index of first new preview
      return [...prev, ...localUrls];
    });
    setEstimation((prev) => ({ ...prev, photos: [...prev.photos, ...files] }));

    try {
      await Promise.all(
        files.map(async (file, i) => {
          const ext = (file.name.split(".").pop() || file.type.split("/")[1] || "png").toLowerCase();

          // 2) get signed PUT + public URL
          const suRes = await fetch("/api/sign-upload", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              bucket: "photos",                         // make sure this bucket exists
              filename: `photo-${Date.now()}-${i}.${ext}`,
            }),
          });
          if (!suRes.ok) throw new Error("Could not get signed upload URL");
          const { uploadUrl, publicUrl } = await suRes.json();

          // 3) upload the file
          const put = await fetch(uploadUrl, {
            method: "PUT",
            headers: {
              "Content-Type": file.type || "application/octet-stream",
              "x-upsert": "true",
            },
            body: file,
          });
          if (!put.ok) throw new Error(`Upload failed: ${put.status}`);
        })
      );
    } catch (err) {
      console.error("Error uploading photo(s):", err);
      alert("Erreur lors de l’upload des photos. Veuillez réessayer.");
      // don’t revoke previews on failure so the user still sees them
    } finally {
      if (e.target) e.target.value = "";
    }
  };


  const updateProductQuantity = (product: keyof typeof estimation.hygienProducts, delta: number) => {
    setEstimation((prev) => ({
      ...prev,
      hygienProducts: {
        ...prev.hygienProducts,
        [product]: Math.max(0, prev.hygienProducts[product] + delta),
      },
    }))
  }

  async function uploadViaSignedUrl(uploadUrl: string, file: Blob | File, contentType: string) {
    const res = await fetch(uploadUrl, {
      method: "PUT",
      headers: {
        "Content-Type": contentType,
        "x-upsert": "true",
      },
      body: file,
    })
    if (!res.ok) {
      const txt = await res.text().catch(() => "")
      throw new Error(`Signed upload failed: ${res.status} ${txt}`)
    }
  }

  // Call this when you have the signature Blob (PNG) from your signature pad / PDF step
  const handleSignatureAndSaveQuote = async (signatureBlob: Blob) => {
    try {
      setIsSubmitting(true)

      // 1) Get signed upload URL (no auth needed)
      const suRes = await fetch("/api/sign-upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bucket: "quotes", filename: `signature-${Date.now()}.png` }),
      })
      if (!suRes.ok) throw new Error("Could not get signed upload URL")
      const { uploadUrl, publicUrl } = await suRes.json()

      // 2) Upload the signature
      await uploadViaSignedUrl(uploadUrl, signatureBlob, "image/png")

      // 3) Build your existing quote payload + signature_url
      const requestData = {
        quote_type: quoteType,
        cgv_accepted: cgvAccepted,

        client_name: estimation.contactInfo.name,
        client_email: estimation.contactInfo.email,
        client_phone: estimation.contactInfo.phone,
        client_company: estimation.contactInfo.company || null,
        client_address: estimation.contactInfo.address,

        location_type: estimation.locationType,
        surface_m2: Number(estimation.surface) || 0,
        interventions_per_week: Number(estimation.frequency) || 1,

        hygiene_products: estimation.hygienProducts,
        photo_urls: photoUrls,

        estimated_price_cents: Math.round((estimatedPrice ?? 0) * 100),
        currency: "EUR",
        status: "pending",

        // NEW
        signature_url: publicUrl,
      }

      // 4) Save the quote
      const response = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      })
      if (!response.ok) throw new Error("Failed to save quote")

      await response.json()
      handleQuoteSaved()
    } catch (err) {
      console.error(err)
      alert("Erreur lors de l’envoi de la signature ou de l’enregistrement du devis.")
    } finally {
      setIsSubmitting(false)
    }
  }


  const handleQuoteSaved = () => {
    // Reset form after successful submission
    setEstimation({
      locationType: "",
      surface: "",
      frequency: "3",
      hygienProducts: {
        diffuseurParfum: 0,
        diffuseurParfumGamme: "entree",
        secheServiette: 0,
        distributeurSavon: 0,
        distributeurSavonGamme: "entree",
        distributeurServiette: 0,
        distributeurServietteGamme: "entree",
        secheMains: 0,
        secheMainsGamme: "entree",
        savons: 0,
        papierToilettes: 0,
        serviettePapier: 0,
      },
      photos: [],
      contactInfo: {
        name: "",
        email: "",
        phone: "",
        company: "",
        address: "",
      },
    })
    setShowEstimation(false)
    setEstimatedPrice(null)
    setPhotoUrls([])
    setShowPdfSection(false)
    setShowPdfCard(false)
    setCgvAccepted(false)

    // Show success message
    alert("Votre devis a été signé et sauvegardé avec succès ! Nous vous contacterons rapidement.")
  }

  const handleSubmitQuote = async () => {
    if (
      !estimation.contactInfo.name ||
      !estimation.contactInfo.email ||
      !estimation.contactInfo.phone ||
      !estimation.contactInfo.address
    ) {
      return
    }

    setIsSubmitting(true)

    try {
      console.log("[v0] Full estimation object:", estimation)
      console.log("[v0] Contact info:", estimation.contactInfo)
      console.log("[v0] Address value:", estimation.contactInfo.address)
      console.log("[v0] Address length:", estimation.contactInfo.address?.length)
      console.log("[v0] Address is truthy:", !!estimation.contactInfo.address)

      const requestData = {
        // form context
        quote_type: quoteType,                            // 'auto' | 'detailed'
        cgv_accepted: cgvAccepted,                        // boolean

        // client
        client_name: estimation.contactInfo.name,
        client_email: estimation.contactInfo.email,
        client_phone: estimation.contactInfo.phone,
        client_company: estimation.contactInfo.company || null,
        client_address: estimation.contactInfo.address,

        // site & frequency
        location_type: estimation.locationType,
        surface_m2: Number(estimation.surface) || 0,      // rename: surface -> surface_m2
        interventions_per_week: Number(estimation.frequency) || 1, // rename: frequency -> interventions_per_week

        // extras
        hygiene_products: estimation.hygienProducts,      // rename: hygienProducts -> hygiene_products (jsonb)
        photo_urls: photoUrls,                            // rename: photos -> photo_urls (string[] of URLs)

        // pricing
        estimated_price_cents: Math.round((estimatedPrice ?? 0) * 100), // store in cents (int)
        currency: 'EUR',

        // lifecycle
        status: 'pending'
      };

      console.log("[v0] Request data being sent:", requestData)
      console.log("[v0] client_address in request:", requestData.client_address)

      const response = await fetch("/api/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      })

      if (!response.ok) {
        throw new Error("Failed to save quote")
      }

      const data = await response.json()
      console.log("[v0] Quote saved successfully:", data)
      alert("Votre demande de devis a été envoyée avec succès ! Nous vous contacterons rapidement.")

      // Reset form after successful submission
      setEstimation({
        locationType: "",
        surface: "",
        frequency: "3",
        hygienProducts: {
          diffuseurParfum: 0,
          diffuseurParfumGamme: "entree",
          secheServiette: 0,
          distributeurSavon: 0,
          distributeurSavonGamme: "entree",
          distributeurServiette: 0,
          distributeurServietteGamme: "entree",
          secheMains: 0,
          secheMainsGamme: "entree",
          savons: 0,
          papierToilettes: 0,
          serviettePapier: 0,
        },
        photos: [],
        contactInfo: {
          name: "",
          email: "",
          phone: "",
          company: "",
          address: "",
        },
      })
      setShowEstimation(false)
      setEstimatedPrice(null)
      setPhotoUrls([])
    } catch (error) {
      console.error("Unexpected error:", error)
      alert("Erreur inattendue. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const canCalculate = estimation.locationType && estimation.surface && estimation.frequency

  const handleContactInfoChange = async (field: string, value: string) => {
    const updatedContactInfo = { ...estimation.contactInfo, [field]: value }
    setEstimation((prev) => ({
      ...prev,
      contactInfo: updatedContactInfo,
    }))
  }

  const handleGenerateQuote = () => {
    setShowPdfSection(true)
    setShowPdfCard(true) // Set showPdfCard to true
    setTimeout(() => {
      const element = document.getElementById("pdf-download-section")
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 100)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Accueil
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <Image
                src="/images/uct-logo-estimation.png"
                alt="UCT Azur Logo"
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="text-xl font-bold text-gray-800">UCT Azur</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          {quoteType === "auto" ? (
            <>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Devis 100% automatique</h1>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                Obtenez votre devis de nettoyage en moins de 5 minutes ! Remplissez simplement les informations sur
                votre local, et notre système calculera automatiquement le tarif adapté à vos besoins.
              </p>
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 max-w-2xl mx-auto">
                <h3 className="font-semibold text-teal-800 mb-2">Comment ça fonctionne :</h3>
                <div className="text-sm text-teal-700 space-y-1">
                  <p>1. Sélectionnez votre type de local et sa surface</p>
                  <p>2. Choisissez la fréquence de nettoyage souhaitée</p>
                  <p>3. Renseignez vos coordonnées</p>
                  <p>4. Signez et téléchargez instantanément votre devis personnalisé</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Estimez le tarif du nettoyage de vos bureaux</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Obtenez une estimation personnalisée pour le nettoyage de vos locaux professionnels. Remplissez le
                formulaire ci-dessous pour recevoir votre devis détaillé.
              </p>
            </>
          )}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Estimez en 3 clics section */}
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-xl">Estimez en 3 clics</CardTitle>
                  <CardDescription>Le coût par mois de vos locaux</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Surface des locaux */}
                  <div>
                    <Label className="text-base font-medium">Surface des locaux en m²</Label>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <Slider
                            value={[Number.parseInt(estimation.surface) || 0]}
                            onValueChange={(value) =>
                              setEstimation((prev) => ({ ...prev, surface: value[0].toString() }))
                            }
                            max={500}
                            min={0}
                            step={1}
                            className="w-full"
                          />
                        </div>
                        <div className="w-24">
                          <Input
                            type="number"
                            value={estimation.surface}
                            onChange={(e) => {
                              const value = e.target.value
                              if (value === "" || (Number.parseInt(value) >= 0 && Number.parseInt(value) <= 500)) {
                                setEstimation((prev) => ({ ...prev, surface: value }))
                              }
                            }}
                            placeholder="0"
                            min={0}
                            max={500}
                            className="text-center"
                          />
                        </div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>0 m²</span>
                        <span className="font-medium text-teal-600 text-lg">{estimation.surface || 0} m²</span>
                        <span>500 m²</span>
                      </div>
                    </div>
                  </div>

                  {/* Nombre d'interventions par semaine */}
                  <div>
                    <Label className="text-base font-medium">Nombre d'interventions par semaine</Label>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <Slider
                            value={[Number.parseInt(estimation.frequency) || 3]}
                            onValueChange={(value) =>
                              setEstimation((prev) => ({ ...prev, frequency: value[0].toString() }))
                            }
                            max={6}
                            min={1}
                            step={1}
                            className="w-full"
                          />
                        </div>
                        <div className="w-24">
                          <Input
                            type="number"
                            value={estimation.frequency}
                            onChange={(e) => {
                              const value = e.target.value
                              if (value === "" || (Number.parseInt(value) >= 1 && Number.parseInt(value) <= 6)) {
                                setEstimation((prev) => ({ ...prev, frequency: value }))
                              }
                            }}
                            placeholder="3"
                            min={1}
                            max={6}
                            className="text-center"
                          />
                        </div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>1 fois</span>
                        <span className="font-medium text-teal-600 text-lg">
                          {estimation.frequency || 3} fois par semaine
                        </span>
                        <span>6 fois</span>
                      </div>
                    </div>
                  </div>

                  {/* Type de locaux */}
                  <div>
                    <Label className="text-base font-medium">Type de locaux et nettoyage par intervention</Label>
                    <div className="grid grid-cols-1 gap-2 mt-2">
                      {[
                        { value: "bureaux", label: "Bureaux" },
                        { value: "commerces", label: "Commerces" },
                        { value: "sante", label: "Établissements de santé" },
                        { value: "hotels", label: "Hôtels / Restaurants" },
                        { value: "coproprietes", label: "Copropriétés" },
                      ].map((option) => (
                        <Button
                          key={option.value}
                          variant={estimation.locationType === option.value ? "default" : "outline"}
                          onClick={() => setEstimation((prev) => ({ ...prev, locationType: option.value }))}
                          className="justify-start"
                        >
                          {option.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-xl">Photos de vos locaux</CardTitle>
                  <CardDescription>Ajoutez des photos pour une estimation plus précise (optionnel)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <div className="space-y-2">
                      <Label htmlFor="photos" className="cursor-pointer">
                        <span className="text-teal-600 hover:text-teal-700 font-medium">
                          Cliquez pour ajouter des photos
                        </span>
                        <span className="text-gray-500"> ou glissez-déposez</span>
                      </Label>
                      <Input
                        id="photos"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                      <p className="text-sm text-gray-500">PNG, JPG jusqu'à 10MB</p>
                    </div>
                  </div>
                  {estimation.photos.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm text-gray-600 mb-2">{estimation.photos.length} photo(s) ajoutée(s)</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {photoUrls.map((url, index) => (
                          <div key={index} className="relative">
                            <img
                              src={url || "/placeholder.svg"}
                              alt={`Photo ${index + 1}`}
                              className="w-full h-24 object-cover rounded-lg border"
                            />
                            <button
                              onClick={() => {
                                setPhotoUrls((prev) => prev.filter((_, i) => i !== index))
                                setEstimation((prev) => ({
                                  ...prev,
                                  photos: prev.photos.filter((_, i) => i !== index),
                                }))
                              }}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-xl">
                    Souhaitez-vous des équipements/produits d'hygiène sanitaire ?
                  </CardTitle>
                  <CardDescription>Ajoutez des équipements en locations </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Matériels Section */}
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-teal-700">Matériels</h4>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg bg-gray-50">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">🌸</span>
                            <span className="font-medium">Diffuseur parfum</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateProductQuantity("diffuseurParfum", -1)}
                              disabled={estimation.hygienProducts.diffuseurParfum === 0}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center">{estimation.hygienProducts.diffuseurParfum}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateProductQuantity("diffuseurParfum", 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        {estimation.hygienProducts.diffuseurParfum > 0 && (
                          <div className="space-y-2">
                            <Label className="text-sm font-medium">Gamme de diffuseur parfum :</Label>
                            <div className="grid grid-cols-1 gap-2">
                              {[
                                {
                                  value: "entree",
                                  label: "Entrée de gamme",
                                  description: "Automatique à piles, programmable (3-7€/mois)",
                                },
                                {
                                  value: "milieu",
                                  label: "Milieu de gamme",
                                  description: "Design robuste, programmable (8-12€/mois)",
                                },
                                {
                                  value: "haut",
                                  label: "Haut de gamme",
                                  description: "Électrique à nébulisation professionnelle (13-18€/mois)",
                                },
                              ].map((option) => (
                                <Button
                                  key={option.value}
                                  variant={
                                    estimation.hygienProducts.diffuseurParfumGamme === option.value
                                      ? "default"
                                      : "outline"
                                  }
                                  onClick={() =>
                                    setEstimation((prev) => ({
                                      ...prev,
                                      hygienProducts: {
                                        ...prev.hygienProducts,
                                        diffuseurParfumGamme: option.value,
                                      },
                                    }))
                                  }
                                  className="justify-start text-left h-auto p-3"
                                >
                                  <div>
                                    <div className="font-medium">{option.label}</div>
                                    <div className="text-xs text-gray-500">{option.description}</div>
                                  </div>
                                </Button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="p-4 border rounded-lg bg-gray-50">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">🧼</span>
                            <span className="font-medium">Distributeur savon</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateProductQuantity("distributeurSavon", -1)}
                              disabled={estimation.hygienProducts.distributeurSavon === 0}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center">{estimation.hygienProducts.distributeurSavon}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateProductQuantity("distributeurSavon", 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        {estimation.hygienProducts.distributeurSavon > 0 && (
                          <div className="space-y-2">
                            <Label className="text-sm font-medium">Gamme de distributeur savon :</Label>
                            <div className="grid grid-cols-1 gap-2">
                              {[
                                {
                                  value: "entree",
                                  label: "Entrée de gamme",
                                  description: "Manuel à pompe (1-3€/mois)",
                                },
                                {
                                  value: "milieu",
                                  label: "Milieu de gamme",
                                  description: "Manuel design robuste (4-7€/mois)",
                                },
                                {
                                  value: "haut",
                                  label: "Haut de gamme",
                                  description: "À détection infra-rouge (8-12€/mois)",
                                },
                              ].map((option) => (
                                <Button
                                  key={option.value}
                                  variant={
                                    estimation.hygienProducts.distributeurSavonGamme === option.value
                                      ? "default"
                                      : "outline"
                                  }
                                  onClick={() =>
                                    setEstimation((prev) => ({
                                      ...prev,
                                      hygienProducts: {
                                        ...prev.hygienProducts,
                                        distributeurSavonGamme: option.value,
                                      },
                                    }))
                                  }
                                  className="justify-start text-left h-auto p-3"
                                >
                                  <div>
                                    <div className="font-medium">{option.label}</div>
                                    <div className="text-xs text-gray-500">{option.description}</div>
                                  </div>
                                </Button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="p-4 border rounded-lg bg-gray-50">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">🧻</span>
                            <span className="font-medium">Distributeur papier toilette</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateProductQuantity("distributeurServiette", -1)}
                              disabled={estimation.hygienProducts.distributeurServiette === 0}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center">{estimation.hygienProducts.distributeurServiette}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateProductQuantity("distributeurServiette", 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        {estimation.hygienProducts.distributeurServiette > 0 && (
                          <div className="space-y-2">
                            <Label className="text-sm font-medium">Gamme de distributeur papier toilette :</Label>
                            <div className="grid grid-cols-1 gap-2">
                              {[
                                {
                                  value: "entree",
                                  label: "Entrée de gamme",
                                  description: "Petit rouleau simple (1-4€/mois)",
                                },
                                {
                                  value: "milieu",
                                  label: "Milieu de gamme",
                                  description: "Maxi-jumbo, rouleau XXL (5-8€/mois)",
                                },
                                {
                                  value: "haut",
                                  label: "Haut de gamme",
                                  description: "Double ou électronique (8-13€/mois)",
                                },
                              ].map((option) => (
                                <Button
                                  key={option.value}
                                  variant={
                                    estimation.hygienProducts.distributeurServietteGamme === option.value
                                      ? "default"
                                      : "outline"
                                  }
                                  onClick={() =>
                                    setEstimation((prev) => ({
                                      ...prev,
                                      hygienProducts: {
                                        ...prev.hygienProducts,
                                        distributeurServietteGamme: option.value,
                                      },
                                    }))
                                  }
                                  className="justify-start text-left h-auto p-3"
                                >
                                  <div>
                                    <div className="font-medium">{option.label}</div>
                                    <div className="text-xs text-gray-500">{option.description}</div>
                                  </div>
                                </Button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="p-4 border rounded-lg bg-gray-50">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">👐</span>
                            <span className="font-medium">Sèche mains</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateProductQuantity("secheMains", -1)}
                              disabled={estimation.hygienProducts.secheMains === 0}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center">{estimation.hygienProducts.secheMains}</span>
                            <Button variant="outline" size="sm" onClick={() => updateProductQuantity("secheMains", 1)}>
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        {estimation.hygienProducts.secheMains > 0 && (
                          <div className="space-y-2">
                            <Label className="text-sm font-medium">Gamme de sèche-mains :</Label>
                            <div className="grid grid-cols-1 gap-2">
                              {[
                                {
                                  value: "entree",
                                  label: "Entrée de gamme",
                                  description: "Basiques 1200-1500W (10-15€/mois)",
                                },
                                {
                                  value: "milieu",
                                  label: "Milieu de gamme",
                                  description: "Marques reconnues (20-30€/mois)",
                                },
                                {
                                  value: "haut",
                                  label: "Haut de gamme",
                                  description: "Dyson Airblade, ultra-rapides (45-70€/mois)",
                                },
                              ].map((option) => (
                                <Button
                                  key={option.value}
                                  variant={
                                    estimation.hygienProducts.secheMainsGamme === option.value ? "default" : "outline"
                                  }
                                  onClick={() =>
                                    setEstimation((prev) => ({
                                      ...prev,
                                      hygienProducts: {
                                        ...prev.hygienProducts,
                                        secheMainsGamme: option.value,
                                      },
                                    }))
                                  }
                                  className="justify-start text-left h-auto p-3"
                                >
                                  <div>
                                    <div className="font-medium">{option.label}</div>
                                    <div className="text-xs text-gray-500">{option.description}</div>
                                  </div>
                                </Button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Produits Section */}
                      <div>
                        <h4 className="font-semibold text-lg mb-4 text-teal-700">
                          Produits - approvisionnement mensuel
                        </h4>
                        <div className="space-y-4">
                          {[
                            { key: "savons", label: "Savons", icon: "🧴" },
                            { key: "papierToilettes", label: "Papier toilettes", icon: "🧻" },
                            { key: "serviettePapier", label: "Serviettes de papier", icon: "🖐️" },
                          ].map((product) => (
                            <div key={product.key} className="flex items-center justify-between p-4 border rounded-lg">
                              <div className="flex items-center gap-3">
                                <span className="text-2xl">{product.icon}</span>
                                <span className="font-medium">{product.label}</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() =>
                                    updateProductQuantity(product.key as keyof typeof estimation.hygienProducts, -1)
                                  }
                                  disabled={
                                    estimation.hygienProducts[product.key as keyof typeof estimation.hygienProducts] ===
                                    0
                                  }
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-8 text-center">
                                  {estimation.hygienProducts[product.key as keyof typeof estimation.hygienProducts]}
                                </span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() =>
                                    updateProductQuantity(product.key as keyof typeof estimation.hygienProducts, 1)
                                  }
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {!showEstimation && (
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6 text-center">
                    <Calculator className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                    <p className="text-blue-700 font-medium">
                      Remplissez les informations ci-dessus pour voir votre estimation en temps réel
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="lg:col-span-1">
              <Card className="bg-teal-600 text-white sticky top-8">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-4">Votre estimation</h3>
                    {showEstimation && estimatedPrice ? (
                      <>
                        <div className="text-4xl font-bold mb-2">{estimatedPrice}€</div>
                        <p className="text-teal-100 mb-6">par mois HT</p>

                        <div className="space-y-4 text-left bg-white/10 p-4 rounded-lg mb-6">
                          <h4 className="font-semibold">Détails :</h4>
                          <div className="text-sm space-y-1 text-teal-100">
                            <div>Surface : {estimation.surface} m²</div>
                            <div>Fréquence : {estimation.frequency} fois/semaine</div>
                            <div>Type : {estimation.locationType}</div>
                            {Object.entries(estimation.hygienProducts).some(([_, qty]) => qty > 0) && (
                              <div>Équipements d'hygiène inclus</div>
                            )}
                          </div>
                        </div>

                        <div className="space-y-4 text-left mb-6">
                          <h4 className="font-semibold text-center">Vos coordonnées</h4>
                          <div className="space-y-3">
                            <div>
                              <Label htmlFor="name" className="text-white text-sm">
                                Nom complet *
                              </Label>
                              <Input
                                id="name"
                                type="text"
                                placeholder="Votre nom complet"
                                value={estimation.contactInfo.name}
                                onChange={(e) =>
                                  setEstimation((prev) => ({
                                    ...prev,
                                    contactInfo: { ...prev.contactInfo, name: e.target.value },
                                  }))
                                }
                                className="mt-1 text-white placeholder:text-white/60"
                              />
                            </div>
                            <div>
                              <Label htmlFor="email" className="text-white text-sm">
                                Email *
                              </Label>
                              <Input
                                id="email"
                                type="email"
                                placeholder="votre@email.com"
                                value={estimation.contactInfo.email}
                                onChange={(e) =>
                                  setEstimation((prev) => ({
                                    ...prev,
                                    contactInfo: { ...prev.contactInfo, email: e.target.value },
                                  }))
                                }
                                className="mt-1 text-white placeholder:text-white/60"
                              />
                            </div>
                            <div>
                              <Label htmlFor="phone" className="text-white text-sm">
                                Téléphone *
                              </Label>
                              <Input
                                id="phone"
                                type="tel"
                                placeholder="06 12 34 56 78"
                                value={estimation.contactInfo.phone}
                                onChange={(e) =>
                                  setEstimation((prev) => ({
                                    ...prev,
                                    contactInfo: { ...prev.contactInfo, phone: e.target.value },
                                  }))
                                }
                                className="mt-1 text-white placeholder:text-white/60"
                              />
                            </div>
                            <div>
                              <Label htmlFor="company" className="text-white text-sm">
                                Entreprise
                              </Label>
                              <Input
                                id="company"
                                type="text"
                                placeholder="Nom de votre entreprise"
                                value={estimation.contactInfo.company}
                                onChange={(e) =>
                                  setEstimation((prev) => ({
                                    ...prev,
                                    contactInfo: { ...prev.contactInfo, company: e.target.value },
                                  }))
                                }
                                className="mt-1 text-white placeholder:text-white/60"
                              />
                            </div>
                            <div>
                              <Label htmlFor="address" className="text-white text-sm">
                                Adresse des locaux *
                              </Label>
                              <Input
                                id="address"
                                type="text"
                                placeholder="Adresse complète de vos locaux"
                                value={estimation.contactInfo.address}
                                onChange={(e) =>
                                  setEstimation((prev) => ({
                                    ...prev,
                                    contactInfo: { ...prev.contactInfo, address: e.target.value },
                                  }))
                                }
                                className="mt-1 text-white placeholder:text-white/60"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <div className="flex items-start space-x-3 text-left">
                            <input
                              type="checkbox"
                              id="cgv-acceptance"
                              checked={cgvAccepted}
                              onChange={(e) => setCgvAccepted(e.target.checked)}
                              className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 border-white/30 rounded bg-white/10"
                            />
                            <label htmlFor="cgv-acceptance" className="text-sm text-white">
                              J'accepte les{" "}
                              <button
                                type="button"
                                onClick={() => setShowCgvModal(true)}
                                className="underline hover:text-teal-200 transition-colors"
                              >
                                Conditions Générales de Vente
                              </button>{" "}
                              de UCT Azur *
                            </label>
                          </div>
                        </div>

                        <Button
                          variant="secondary"
                          className="w-full bg-white text-teal-600 hover:bg-gray-100"
                          disabled={
                            !estimation.surface ||
                            !estimation.frequency ||
                            !estimation.contactInfo.name ||
                            !estimation.contactInfo.email ||
                            !estimation.contactInfo.phone ||
                            !estimation.contactInfo.address ||
                            !cgvAccepted
                          }
                          onClick={handleGenerateQuote}
                        >
                          Générer votre devis
                        </Button>
                      </>
                    ) : (
                      <div className="text-center py-8">
                        <Calculator className="h-12 w-12 text-teal-200 mx-auto mb-4" />
                        <p className="text-teal-100">
                          Remplissez le formulaire pour voir votre estimation en temps réel
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {showEstimation && (
          <>
            {quoteType === "detailed" && (
              <Card id="contact-form" className="mt-8 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl">Devis détaillé avec visite en amont</CardTitle>
                  <CardDescription>Laissez-nous vos coordonnées pour recevoir votre devis personnalisé</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        value={estimation.contactInfo.name}
                        onChange={(e) => handleContactInfoChange("name", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        placeholder="Votre nom complet"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Entreprise</Label>
                      <Input
                        id="company"
                        value={estimation.contactInfo.company}
                        onChange={(e) => handleContactInfoChange("company", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={estimation.contactInfo.email}
                        onChange={(e) => handleContactInfoChange("email", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={estimation.contactInfo.phone}
                        onChange={(e) => handleContactInfoChange("phone", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        placeholder="06 12 34 56 78"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Adresse des locaux *</Label>
                      <Input
                        id="address"
                        type="text"
                        value={estimation.contactInfo.address}
                        onChange={(e) => handleContactInfoChange("address", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        placeholder="Adresse complète de vos locaux"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    className="w-full bg-teal-600 hover:bg-teal-700"
                    disabled={
                      !estimation.contactInfo.name ||
                      !estimation.contactInfo.email ||
                      !estimation.contactInfo.phone ||
                      !estimation.contactInfo.address || // Added address validation
                      isSubmitting
                    }
                    onClick={handleSubmitQuote}
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande de devis"}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    * Cette estimation est indicative. Un devis précis sera établi après visite gratuite.
                  </p>
                </CardContent>
              </Card>
            )}

            {showPdfCard &&
              (quoteType === "auto" ||
                (estimation.contactInfo.name &&
                  estimation.contactInfo.email &&
                  estimation.contactInfo.phone &&
                  estimation.contactInfo.address)) &&
              estimatedPrice && (
                <Card id="pdf-download-section" className="mt-8 bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {quoteType === "auto"
                        ? "Télécharger votre devis automatisé"
                        : "Télécharger et signer votre devis"}
                    </CardTitle>
                    <CardDescription>
                      {quoteType === "auto"
                        ? "Votre devis est prêt ! Téléchargez-le en PDF et signez-le directement."
                        : "Téléchargez votre devis en PDF, signez-le et renvoyez-le nous pour finaliser votre demande"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PDFGenerator
                      estimation={estimation}
                      estimatedPrice={estimatedPrice}
                      onQuoteSaved={handleQuoteSaved}
                      onSignatureReady={handleSignatureAndSaveQuote}  // << add this
                    />
                  </CardContent>
                </Card>
              )}
          </>
        )}
      </div>

      {showCgvModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[80vh] overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Conditions Générales de Vente</h2>
                <button onClick={() => setShowCgvModal(false)} className="text-gray-500 hover:text-gray-700">
                  ✕
                </button>
              </div>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh] text-sm leading-relaxed">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Article 1 : Objet</h3>
                  <p>
                    Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre la
                    société UCTA UNLIMITED CLEANING TECH AZUR SAS, et ses clients professionnels (ci-après "le Client")
                    dans le cadre de la fourniture de services de nettoyage de bâtiments (Code NAF 81.21Z).
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Article 2 : Identification de la société</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Dénomination Sociale : UCTA UNLIMITED CLEANING TECH AZUR</li>
                    <li>Forme juridique : SAS</li>
                    <li>Siège social : RÉSIDENCE LE CHANTEMERLE B, 25 ALLÉE DU STADE, 06500 MENTON</li>
                    <li>Activité principale : Nettoyage courant des bâtiments (Code NAF 81.21Z)</li>
                    <li>SIRET : 93318647000011</li>
                    <li>R.C.S. : 933 186 470 R.C.S. Nice</li>
                    <li>Capital social : 100,00 €</li>
                    <li>Numéro de TVA intracommunautaire : FR33933186470</li>
                    <li>Site internet : uct-azur.com</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Article 3 : Devis et formation du contrat</h3>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>
                      <strong>Devis automatique en ligne :</strong> Le site internet uct-azur.com met à la disposition
                      du Client un outil de devis automatique. Ce devis est une estimation indicative et non
                      contractuelle. Il est généré à partir des informations fournies par le Client (surface, fréquence,
                      type de locaux, etc.).
                    </li>
                    <li>
                      <strong>Validation du devis :</strong> Pour que l'estimation devienne une offre de services ferme,
                      le Client doit signer le devis en ligne.
                    </li>
                    <li>
                      <strong>Visite technique :</strong> Avant l'acceptation finale du devis, UCT Azur se réserve le
                      droit d'effectuer une visite technique des locaux du Client. Cette visite permet d'évaluer les
                      conditions spécifiques du site et d'ajuster le devis si nécessaire. En cas d'ajustement, un
                      nouveau devis sera émis et devra être signé par le Client.
                    </li>
                    <li>
                      <strong>Acceptation du contrat :</strong> Le contrat est considéré comme ferme et définitif à la
                      signature du devis par le Client. La signature implique l'acceptation sans réserve des présentes
                      CGV.
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Article 4 : Tarifs et conditions de paiement</h3>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>
                      <strong>Prix :</strong> Les prix sont indiqués en Euros et s'entendent hors taxes (HT), sauf
                      mention contraire. La TVA applicable sera ajoutée sur la facture finale.
                    </li>
                    <li>
                      <strong>Modalités de paiement :</strong> Sauf accord écrit contraire, les factures sont émises à
                      la fin de chaque mois de prestation et sont payables par virement bancaire dans un délai de 30
                      jours à compter de leur date d'émission.
                    </li>
                    <li>
                      <strong>Défaut de paiement :</strong> Tout retard de paiement entraîne l'exigibilité immédiate de
                      la totalité des sommes dues, ainsi que l'application de pénalités de retard égales à trois fois le
                      taux d'intérêt légal, sans mise en demeure préalable. Une indemnité forfaitaire pour frais de
                      recouvrement de 40 € sera également due.
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Article 5 : Obligations des parties</h3>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>
                      <strong>Obligations de UCT Azur :</strong> La société s'engage à exécuter les prestations avec
                      professionnalisme et diligence, conformément aux termes du devis accepté.
                    </li>
                    <li>
                      <strong>Obligations du Client :</strong> Le Client s'engage à fournir un accès sécurisé aux
                      locaux, à informer UCT Azur de toute spécificité des lieux, et à effectuer les paiements dans les
                      délais convenus.
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Article 6 : Responsabilité et assurance</h3>
                  <p>
                    UCT Azur a souscrit une assurance de responsabilité civile professionnelle qui couvre les dommages
                    pouvant survenir lors de l'exécution des prestations. La responsabilité de UCT Azur ne saurait
                    excéder le montant de la prestation concernée. Elle ne peut être engagée pour des dommages indirects
                    ou des pertes de bénéfices.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Article 7 : Force majeure</h3>
                  <p>
                    Aucune des parties ne sera tenue pour responsable d'un manquement à ses obligations si ce manquement
                    est dû à un cas de force majeure, tel que défini par la jurisprudence française.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Article 8 : Données personnelles</h3>
                  <p>
                    UCT Azur s'engage à respecter la réglementation en vigueur concernant la protection des données
                    personnelles (RGPD). Les données collectées via le site web sont utilisées uniquement dans le cadre
                    de la gestion commerciale et de l'exécution des services.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Article 9 : Litiges et droit applicable</h3>
                  <p>
                    Les présentes CGV sont régies par le droit français. En cas de litige, et après échec d'une solution
                    amiable, les tribunaux du ressort du siège social de UCT Azur sont les seuls compétents.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 border-t bg-gray-50">
              <div className="flex justify-end space-x-3">
                <Button variant="outline" onClick={() => setShowCgvModal(false)}>
                  Fermer
                </Button>
                <Button
                  onClick={() => {
                    setCgvAccepted(true)
                    setShowCgvModal(false)
                  }}
                  className="bg-teal-600 hover:bg-teal-700"
                >
                  Accepter les CGV
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
