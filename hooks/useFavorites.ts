"use client"

import { useState, useEffect } from "react"
import type { FrenchPlateMatch } from "../utils/french-plate-validator"
import type { SwissPlateMatch } from "../utils/swiss-plate-validator"

export interface FavoriteEntry {
  id: string
  plateText: string
  result: FrenchPlateMatch | SwissPlateMatch
  system: "french" | "swiss"
  timestamp: Date
  note?: string
}

const STORAGE_KEY = "diplo-scanner-favorites"
const MAX_FAVORITES = 50

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteEntry[]>([])

  // Charger les favoris depuis le localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        const validFavorites = parsed.map((item: any) => ({
          ...item,
          timestamp: new Date(item.timestamp),
        }))
        setFavorites(validFavorites)
      }
    } catch (error) {
      console.error("Erreur lors du chargement des favoris:", error)
    }
  }, [])

  // Sauvegarder les favoris dans le localStorage
  const saveFavorites = (newFavorites: FavoriteEntry[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavorites))
      setFavorites(newFavorites)
    } catch (error) {
      console.error("Erreur lors de la sauvegarde des favoris:", error)
    }
  }

  // Ajouter aux favoris
  const addToFavorites = (
    plateText: string,
    result: FrenchPlateMatch | SwissPlateMatch,
    system: "french" | "swiss",
    note?: string,
  ): boolean => {
    const normalizedPlateText = plateText.trim().toUpperCase()

    // Vérifier si déjà en favoris
    const exists = favorites.some((fav) => fav.plateText === normalizedPlateText)
    if (exists) {
      return false
    }

    // Limiter le nombre de favoris
    let newFavorites = [...favorites]
    if (newFavorites.length >= MAX_FAVORITES) {
      newFavorites = newFavorites.slice(1) // Supprimer le plus ancien
    }

    const newFavorite: FavoriteEntry = {
      id: Date.now().toString(),
      plateText: normalizedPlateText,
      result,
      system,
      timestamp: new Date(),
      note,
    }

    newFavorites.push(newFavorite)
    saveFavorites(newFavorites)
    return true
  }

  // Supprimer des favoris
  const removeFromFavorites = (id: string) => {
    const newFavorites = favorites.filter((fav) => fav.id !== id)
    saveFavorites(newFavorites)
  }

  // Vider tous les favoris
  const clearFavorites = () => {
    saveFavorites([])
  }

  // Vérifier si une plaque est en favoris
  const isFavorite = (plateText: string): boolean => {
    const normalizedPlateText = plateText.trim().toUpperCase()
    return favorites.some((fav) => fav.plateText === normalizedPlateText)
  }

  // Mettre à jour la note d'un favori
  const updateFavoriteNote = (id: string, note: string) => {
    const newFavorites = favorites.map((fav) => (fav.id === id ? { ...fav, note } : fav))
    saveFavorites(newFavorites)
  }

  // Filtrer les favoris
  const filterFavorites = (searchTerm: string) => {
    if (!searchTerm) return favorites

    const term = searchTerm.toLowerCase()
    return favorites.filter(
      (fav) =>
        fav.plateText.toLowerCase().includes(term) ||
        fav.result.country.countryName.toLowerCase().includes(term) ||
        (fav.note && fav.note.toLowerCase().includes(term)),
    )
  }

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    clearFavorites,
    isFavorite,
    updateFavoriteNote,
    filterFavorites,
    count: favorites.length,
  }
}
