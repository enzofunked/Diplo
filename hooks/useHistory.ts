"use client"

import { useState, useEffect } from "react"

interface HistoryEntry {
  id: string
  plateNumber: string
  system: "french" | "swiss"
  result: any
  timestamp: Date
}

export function useHistory() {
  const [history, setHistory] = useState<HistoryEntry[]>([])

  useEffect(() => {
    const savedHistory = localStorage.getItem("diplo-scanner-history")
    if (savedHistory) {
      try {
        const parsed = JSON.parse(savedHistory)
        setHistory(
          parsed.map((entry: any) => ({
            ...entry,
            timestamp: new Date(entry.timestamp),
          })),
        )
      } catch (error) {
        console.error("Error parsing history:", error)
      }
    }
  }, [])

  const addEntry = (entry: HistoryEntry) => {
    const newHistory = [entry, ...history.slice(0, 49)]
    setHistory(newHistory)
    localStorage.setItem("diplo-scanner-history", JSON.stringify(newHistory))
  }

  const clearHistory = () => {
    setHistory([])
    localStorage.removeItem("diplo-scanner-history")
  }

  const removeEntry = (id: string) => {
    const newHistory = history.filter((entry) => entry.id !== id)
    setHistory(newHistory)
    localStorage.setItem("diplo-scanner-history", JSON.stringify(newHistory))
  }

  return {
    history,
    addEntry,
    clearHistory,
    removeEntry,
  }
}
