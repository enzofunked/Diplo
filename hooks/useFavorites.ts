"use client"

import { useState, useEffect } from "react"

interface FavoriteEntry {
  id: string
  plateNumber: string
  system: "french" | "swiss"
  result: any
  timestamp: Date
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteEntry[]>([])

  useEffect(() => {
    const savedFavorites = localStorage.getItem("diplo-scanner-favorites")
    if (savedFavorites) {
      try {
        const parsed = JSON.parse(savedFavorites)
        setFavorites(
          parsed.map((entry: any) => ({
            ...entry,
            timestamp: new Date(entry.timestamp),
          })),
        )
      } catch (error) {
        console.error("Error parsing favorites:", error)
      }
    }
  }, [])

  const addFavorite = (entry: FavoriteEntry) => {
    const newFavorites = [entry, ...favorites]
    setFavorites(newFavorites)
    localStorage.setItem("diplo-scanner-favorites", JSON.stringify(newFavorites))
  }

  const removeFavorite = (id: string) => {
    const newFavorites = favorites.filter((entry) => entry.id !== id)
    setFavorites(newFavorites)
    localStorage.setItem("diplo-scanner-favorites", JSON.stringify(newFavorites))
  }

  const isFavorite = (id: string) => {
    return favorites.some((entry) => entry.id === id)
  }

  const clearFavorites = () => {
    setFavorites([])
    localStorage.removeItem("diplo-scanner-favorites")
  }

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    clearFavorites,
  }
}
