"use client"

import { useState, useEffect } from "react"

export interface FavoriteEntry {
  id: string
  plateText: string
  result: any
  timestamp: Date
  system: "french" | "swiss"
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteEntry[]>([])

  useEffect(() => {
    const stored = localStorage.getItem("diplo-scanner-favorites")
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setFavorites(parsed.map((f: any) => ({ ...f, timestamp: new Date(f.timestamp) })))
      } catch (error) {
        console.error("Erreur lors du chargement des favoris:", error)
      }
    }
  }, [])

  const addToFavorites = (plateText: string, result: any, system: "french" | "swiss"): boolean => {
    const exists = favorites.some((f) => f.plateText === plateText.trim().toUpperCase())
    if (exists) return false

    const newFavorite: FavoriteEntry = {
      id: Date.now().toString(),
      plateText: plateText.trim().toUpperCase(),
      result,
      timestamp: new Date(),
      system,
    }

    const updated = [...favorites, newFavorite]
    setFavorites(updated)
    localStorage.setItem("diplo-scanner-favorites", JSON.stringify(updated))
    return true
  }

  const removeFromFavorites = (id: string) => {
    const updated = favorites.filter((f) => f.id !== id)
    setFavorites(updated)
    localStorage.setItem("diplo-scanner-favorites", JSON.stringify(updated))
  }

  const isFavorite = (plateText: string): boolean => {
    return favorites.some((f) => f.plateText === plateText.trim().toUpperCase())
  }

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  }
}
