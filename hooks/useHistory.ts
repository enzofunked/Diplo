"use client"

import { useState, useEffect } from "react"
import type { FrenchPlateMatch } from "../utils/french-plate-validator"
import type { SwissPlateMatch } from "../utils/swiss-plate-validator"

export interface HistoryEntry {
  id: string
  plateText: string
  result: FrenchPlateMatch | SwissPlateMatch | null
  timestamp: Date
  confidence?: number
  system: 'french' | 'swiss'
}

const HISTORY_STORAGE_KEY = "diplo-scanner-history-global"
const MAX_HISTORY_ENTRIES = 100

export function useHistory() {
  const [history, setHistory] = useState<HistoryEntry[]>([])

  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem(HISTORY_STORAGE_KEY)
      if (savedHistory) {
        const parsed = JSON.parse(savedHistory)
        const historyWithDates = parsed
          .map((entry: any) => {
            if (!entry.id || !entry.plateText || !entry.timestamp || !entry.system) {
              return null
            }
            return { ...entry, timestamp: new Date(entry.timestamp) }
          })
          .filter(Boolean) 
        setHistory(historyWithDates)
      }
    } catch (error) {
      console.error("Erreur chargement historique:", error)
      setHistory([])
    }
  }, [])

  const saveHistory = (newHistory: HistoryEntry[]) => {
    try {
      localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(newHistory))
      setHistory(newHistory)
    } catch (error) {
      console.error("Erreur sauvegarde historique:", error)
    }
  }

  const addToHistory = (plateText: string, result: FrenchPlateMatch | SwissPlateMatch | null, system: 'french' | 'swiss') => {
    const newEntry: HistoryEntry = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      plateText: plateText.trim().toUpperCase(),
      result, 
      timestamp: new Date(),
      confidence: result?.confidence,
      system,
    }
    const newHistory = [newEntry, ...history].slice(0, MAX_HISTORY_ENTRIES)
    saveHistory(newHistory)
  }

  const removeFromHistory = (id: string) => {
    const newHistory = history.filter((entry) => entry.id !== id)
    saveHistory(newHistory)
  }

  const clearHistory = () => {
    localStorage.removeItem(HISTORY_STORAGE_KEY)
    setHistory([])
  }

  const filterHistory = (searchTerm: string, showOnlySuccessful = false) => {
    return history.filter((entry) => {
      const searchLower = searchTerm.toLowerCase()
      let countryName = '';
      if (entry.result) {
          countryName = entry.system === 'french' 
              ? (entry.result as FrenchPlateMatch).country.countryName 
              : (entry.result as SwissPlateMatch).country.countryName;
      }
      const matchesSearch = !searchTerm || entry.plateText.toLowerCase().includes(searchLower) || (countryName && countryName.toLowerCase().includes(searchLower))
      const matchesFilter = !showOnlySuccessful || entry.result !== null
      return matchesSearch && matchesFilter
    })
  }

  // =======================================================
  // MODIFICATION : Calcul des statistiques par système
  // =======================================================
  const getHistoryStats = () => {
    const total = history.length
    const frenchScans = history.filter((entry) => entry.system === 'french').length
    const swissScans = history.filter((entry) => entry.system === 'swiss').length

    return {
      total,
      frenchScans,
      swissScans,
    }
  }

  return {
    history,
    addToHistory,
    removeFromHistory,
    clearHistory,
    filterHistory,
    getHistoryStats,
  }
}
