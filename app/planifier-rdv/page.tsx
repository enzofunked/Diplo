"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, User, Building, ArrowLeft, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const AVAILABLE_TIMES = [
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
]

const DAYS_OF_WEEK = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
const MONTHS = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
]

export default function PlanifierRdvPage() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    entreprise: "",
    email: "",
    telephone: "",
    adresse: "",
    ville: "",
    codePostal: "",
    typeLocal: "",
    surface: "",
    datePreferee: "",
    heurePreferee: "",
    commentaires: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const finalData = {
      ...formData,
      datePreferee: selectedDate ? selectedDate.toISOString().split("T")[0] : "",
      heurePreferee: selectedTime,
    }
    console.log("Données du rendez-vous:", finalData)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const getCalendarDays = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())

    const days = []
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate)
      date.setDate(startDate.getDate() + i)

      const isCurrentMonth = date.getMonth() === month
      const isPast = date < today
      const isWeekend = date.getDay() === 0 || date.getDay() === 6
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString()

      days.push({
        date,
        isCurrentMonth,
        isPast,
        isWeekend,
        isSelected,
        isAvailable: isCurrentMonth && !isPast && !isWeekend,
      })
    }

    return days
  }

  const handleDateSelect = (date: Date) => {
    console.log("[v0] Date clicked:", date)
    console.log("[v0] Date validation - isPast:", date < new Date())
    console.log("[v0] Date validation - isWeekend:", date.getDay() === 0 || date.getDay() === 6)

    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const clickedDate = new Date(date)
    clickedDate.setHours(0, 0, 0, 0)

    if (clickedDate >= today && date.getDay() !== 0 && date.getDay() !== 6) {
      console.log("[v0] Date selected successfully:", date)
      setSelectedDate(date)
      setSelectedTime("") // Reset time when date changes
    } else {
      console.log("[v0] Date selection blocked - invalid date")
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <Card className="max-w-md w-full text-center">
          <CardHeader>
            <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-green-600">Rendez-vous planifié !</CardTitle>
            <CardDescription>Nous vous contacterons sous 24h pour confirmer votre rendez-vous</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Un email de confirmation vous a été envoyé à {formData.email}
            </p>
            <Button asChild className="w-full">
              <Link href="/">Retour à l'accueil</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/images/uct-logo.png" alt="UCT Azur Logo" width={40} height={40} className="object-contain" />
            <h1 className="text-2xl font-bold text-foreground">UCT Azur</h1>
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link href="/devis" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour
            </Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Planifier votre visite gratuite</h1>
          <p className="text-muted-foreground text-lg">
            Remplissez ce formulaire pour planifier une visite de vos locaux et recevoir un devis détaillé
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Informations personnelles */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Informations de contact
              </CardTitle>
              <CardDescription>Vos coordonnées pour organiser le rendez-vous</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="prenom">Prénom *</Label>
                <Input
                  id="prenom"
                  value={formData.prenom}
                  onChange={(e) => handleInputChange("prenom", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nom">Nom *</Label>
                <Input
                  id="nom"
                  value={formData.nom}
                  onChange={(e) => handleInputChange("nom", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="entreprise">Entreprise</Label>
                <Input
                  id="entreprise"
                  value={formData.entreprise}
                  onChange={(e) => handleInputChange("entreprise", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telephone">Téléphone *</Label>
                <Input
                  id="telephone"
                  type="tel"
                  value={formData.telephone}
                  onChange={(e) => handleInputChange("telephone", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Informations du local */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                Informations du local
              </CardTitle>
              <CardDescription>Détails sur les locaux à nettoyer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="adresse">Adresse complète *</Label>
                <Input
                  id="adresse"
                  value={formData.adresse}
                  onChange={(e) => handleInputChange("adresse", e.target.value)}
                  placeholder="Numéro, rue, avenue..."
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ville">Ville *</Label>
                  <Input
                    id="ville"
                    value={formData.ville}
                    onChange={(e) => handleInputChange("ville", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="codePostal">Code postal *</Label>
                  <Input
                    id="codePostal"
                    value={formData.codePostal}
                    onChange={(e) => handleInputChange("codePostal", e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="typeLocal">Type de local *</Label>
                  <Select value={formData.typeLocal} onValueChange={(value) => handleInputChange("typeLocal", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez le type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bureau">Bureau</SelectItem>
                      <SelectItem value="commerce">Commerce</SelectItem>
                      <SelectItem value="restaurant">Restaurant</SelectItem>
                      <SelectItem value="hotel">Hôtel</SelectItem>
                      <SelectItem value="medical">Cabinet médical</SelectItem>
                      <SelectItem value="industriel">Local industriel</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="surface">Surface approximative (m²)</Label>
                  <Input
                    id="surface"
                    type="number"
                    value={formData.surface}
                    onChange={(e) => handleInputChange("surface", e.target.value)}
                    placeholder="Ex: 150"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Choisissez votre créneau
              </CardTitle>
              <CardDescription>Sélectionnez une date et un horaire pour votre visite</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Calendar */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">
                    {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </h3>
                  <div className="flex gap-2">
                    <Button type="button" variant="outline" size="sm" onClick={() => navigateMonth("prev")}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="outline" size="sm" onClick={() => navigateMonth("next")}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-2">
                  {DAYS_OF_WEEK.map((day) => (
                    <div key={day} className="text-center text-sm font-medium text-gray-500 p-2">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {getCalendarDays().map((day, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => {
                        console.log("[v0] Calendar button clicked for date:", day.date)
                        handleDateSelect(day.date)
                      }}
                      disabled={!day.isAvailable}
                      className={`
                        p-2 text-sm rounded-md transition-colors
                        ${!day.isCurrentMonth ? "text-gray-300" : ""}
                        ${day.isPast || day.isWeekend ? "text-gray-400 cursor-not-allowed" : ""}
                        ${day.isAvailable ? "hover:bg-teal-100 cursor-pointer" : ""}
                        ${day.isSelected ? "bg-teal-600 text-white" : ""}
                      `}
                    >
                      {day.date.getDate()}
                    </button>
                  ))}
                </div>

                <div className="mt-4 text-xs text-gray-500 space-y-1">
                  <p>• Les visites ont lieu du lundi au vendredi</p>
                  <p>• Sélectionnez une date pour voir les créneaux disponibles</p>
                  <p>• La visite dure généralement 30 à 60 minutes</p>
                </div>
              </div>

              {/* Time Slots */}
              {selectedDate && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-4">
                    Créneaux disponibles le{" "}
                    {selectedDate.toLocaleDateString("fr-FR", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                    })}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {AVAILABLE_TIMES.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`
                          p-3 text-sm rounded-md border transition-colors
                          ${
                            selectedTime === time
                              ? "bg-teal-600 text-white border-teal-600"
                              : "bg-white hover:bg-teal-50 border-gray-200 hover:border-teal-300"
                          }
                        `}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Selected appointment summary */}
              {selectedDate && selectedTime && (
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-teal-800">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Rendez-vous sélectionné :</span>
                  </div>
                  <p className="text-teal-700 mt-1">
                    {selectedDate.toLocaleDateString("fr-FR", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}{" "}
                    à {selectedTime}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Informations importantes */}
          

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button type="submit" size="lg" className="px-8" disabled={!selectedDate || !selectedTime}>
              Confirmer mon rendez-vous
              <Calendar className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
