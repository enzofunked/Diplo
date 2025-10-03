"use client"

import { useState, useEffect, useCallback } from "react"

interface OfflineStorageOptions {
  key: string
  defaultValue?: any
  syncToServer?: boolean
}

interface StorageData {
  value: any
  timestamp: number
  synced: boolean
}

export function useOfflineStorage<T>({ key, defaultValue = null, syncToServer = false }: OfflineStorageOptions) {
  const [data, setData] = useState<T>(defaultValue)
  const [isLoading, setIsLoading] = useState(true)
  const [lastSync, setLastSync] = useState<number | null>(null)

  // Clé de stockage avec préfixe
  const storageKey = `diplo-scanner-${key}`

  // Charger les données depuis le localStorage
  const loadFromStorage = useCallback(() => {
    try {
      const stored = localStorage.getItem(storageKey)
      if (stored) {
        const parsedData: StorageData = JSON.parse(stored)
        setData(parsedData.value)
        setLastSync(parsedData.timestamp)
      }
    } catch (error) {
      console.error("Error loading from storage:", error)
    } finally {
      setIsLoading(false)
    }
  }, [storageKey])

  // Sauvegarder les données dans le localStorage
  const saveToStorage = useCallback(
    (value: T, synced = false) => {
      try {
        const storageData: StorageData = {
          value,
          timestamp: Date.now(),
          synced,
        }
        localStorage.setItem(storageKey, JSON.stringify(storageData))
        setLastSync(storageData.timestamp)
      } catch (error) {
        console.error("Error saving to storage:", error)
      }
    },
    [storageKey],
  )

  // Mettre à jour les données
  const updateData = useCallback(
    (newData: T | ((prev: T) => T)) => {
      const updatedData = typeof newData === "function" ? (newData as (prev: T) => T)(data) : newData

      setData(updatedData)
      saveToStorage(updatedData, false)

      // Synchroniser avec le serveur si nécessaire
      if (syncToServer && navigator.onLine) {
        syncWithServer(updatedData)
      }
    },
    [data, saveToStorage, syncToServer],
  )

  // Synchroniser avec le serveur
  const syncWithServer = useCallback(
    async (dataToSync: T) => {
      if (!syncToServer) return

      try {
        // Ici vous pouvez implémenter la logique de synchronisation
        // avec votre API backend
        console.log("Syncing with server:", dataToSync)

        // Simuler une requête API
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Marquer comme synchronisé
        saveToStorage(dataToSync, true)
      } catch (error) {
        console.error("Sync with server failed:", error)
      }
    },
    [syncToServer, saveToStorage],
  )

  // Vider le stockage
  const clearStorage = useCallback(() => {
    try {
      localStorage.removeItem(storageKey)
      setData(defaultValue)
      setLastSync(null)
    } catch (error) {
      console.error("Error clearing storage:", error)
    }
  }, [storageKey, defaultValue])

  // Obtenir la taille du stockage
  const getStorageSize = useCallback(() => {
    try {
      const stored = localStorage.getItem(storageKey)
      return stored ? new Blob([stored]).size : 0
    } catch (error) {
      console.error("Error getting storage size:", error)
      return 0
    }
  }, [storageKey])

  // Vérifier si les données sont synchronisées
  const isSynced = useCallback(() => {
    try {
      const stored = localStorage.getItem(storageKey)
      if (stored) {
        const parsedData: StorageData = JSON.parse(stored)
        return parsedData.synced
      }
      return false
    } catch (error) {
      console.error("Error checking sync status:", error)
      return false
    }
  }, [storageKey])

  // Charger les données au montage du composant
  useEffect(() => {
    loadFromStorage()
  }, [loadFromStorage])

  // Synchroniser automatiquement quand la connexion revient
  useEffect(() => {
    const handleOnline = () => {
      if (syncToServer && !isSynced()) {
        syncWithServer(data)
      }
    }

    window.addEventListener("online", handleOnline)
    return () => window.removeEventListener("online", handleOnline)
  }, [data, syncToServer, syncWithServer, isSynced])

  return {
    data,
    updateData,
    clearStorage,
    isLoading,
    lastSync,
    isSynced: isSynced(),
    storageSize: getStorageSize(),
    syncWithServer: () => syncWithServer(data),
  }
}

// Hook spécialisé pour l'historique des scans
export function useOfflineHistory() {
  return useOfflineStorage({
    key: "scan-history",
    defaultValue: [],
    syncToServer: false,
  })
}

// Hook spécialisé pour les préférences utilisateur
export function useOfflinePreferences() {
  return useOfflineStorage({
    key: "user-preferences",
    defaultValue: {
      theme: "light",
      language: "fr",
      notifications: true,
    },
    syncToServer: false,
  })
}

// Hook spécialisé pour les données de cache
export function useOfflineCache() {
  return useOfflineStorage({
    key: "app-cache",
    defaultValue: {
      lastUpdate: null,
      version: "1.0.0",
    },
    syncToServer: false,
  })
}
