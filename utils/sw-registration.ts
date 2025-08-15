// Enregistrement et gestion du Service Worker avec gestion des mises à jour
export class ServiceWorkerManager {
  private static instance: ServiceWorkerManager
  private registration: ServiceWorkerRegistration | null = null
  private isOnline = typeof window !== "undefined" ? navigator.onLine : true
  private updateCheckInterval: NodeJS.Timeout | null = null

  private constructor() {
    if (typeof window !== "undefined") {
      this.setupOnlineListener()
      this.setupUpdateChecker()
    }
  }

  static getInstance(): ServiceWorkerManager {
    if (!ServiceWorkerManager.instance) {
      ServiceWorkerManager.instance = new ServiceWorkerManager()
    }
    return ServiceWorkerManager.instance
  }

  // Enregistrer le Service Worker
  async register(): Promise<boolean> {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
      console.log("Service Worker not supported or running on server")
      return false
    }

    try {
      this.registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
        updateViaCache: "none", // Toujours vérifier les mises à jour
      })

      console.log("Service Worker registered:", this.registration.scope)

      // Écouter les mises à jour
      this.registration.addEventListener("updatefound", () => {
        this.handleUpdateFound()
      })

      // Vérifier s'il y a déjà un SW en attente
      if (this.registration.waiting) {
        this.showUpdateAvailable()
      }

      // Écouter les messages du Service Worker
      navigator.serviceWorker.addEventListener("message", (event) => {
        this.handleServiceWorkerMessage(event)
      })

      // Vérifier les mises à jour immédiatement
      this.registration.update()

      return true
    } catch (error) {
      console.error("Service Worker registration failed:", error)
      return false
    }
  }

  // Gérer les messages du Service Worker
  private handleServiceWorkerMessage(event: MessageEvent) {
    const { data } = event

    if (data.type === "SW_UPDATED") {
      console.log("🎉 Service Worker updated:", data.message)
      if (data.shouldReload) {
        this.showUpdateAvailable(data.version)
      }
    }

    if (data.type === "OFFLINE_READY") {
      console.log("📱 App ready offline:", data.message)
      this.showOfflineReady()
    }
  }

  // Configurer la vérification automatique des mises à jour
  private setupUpdateChecker() {
    if (typeof window === "undefined") return

    // Vérifier les mises à jour toutes les 5 minutes
    this.updateCheckInterval = setInterval(
      () => {
        if (this.registration && navigator.onLine) {
          console.log("🔄 Checking for updates...")
          this.registration.update()
        }
      },
      5 * 60 * 1000,
    ) // 5 minutes

    // Vérifier au focus de la fenêtre
    window.addEventListener("focus", () => {
      if (this.registration && navigator.onLine) {
        this.registration.update()
      }
    })

    // Vérifier quand on revient en ligne
    window.addEventListener("online", () => {
      if (this.registration) {
        this.registration.update()
      }
    })
  }

  // Gérer les mises à jour du Service Worker
  private handleUpdateFound() {
    if (!this.registration) return

    const newWorker = this.registration.installing
    if (!newWorker) return

    console.log("🔄 New Service Worker installing...")

    newWorker.addEventListener("statechange", () => {
      if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
        console.log("✅ New Service Worker installed, waiting to activate")
        this.showUpdateAvailable()
      }
    })
  }

  // Afficher la notification de mise à jour
  private showUpdateAvailable(version?: string) {
    if (typeof window === "undefined") return

    window.dispatchEvent(
      new CustomEvent("sw-update-available", {
        detail: { version },
      }),
    )
  }

  // Afficher la notification d'app prête hors ligne
  private showOfflineReady() {
    if (typeof window === "undefined") return

    window.dispatchEvent(new CustomEvent("sw-offline-ready"))
  }

  // Activer la mise à jour
  async activateUpdate(): Promise<void> {
    if (typeof window === "undefined" || !this.registration || !this.registration.waiting) return

    console.log("🚀 Activating update...")

    // Dire au SW en attente de prendre le contrôle
    this.registration.waiting.postMessage({ type: "SKIP_WAITING" })

    // Recharger la page une fois que le nouveau SW est actif
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      console.log("🔄 Reloading page for update...")
      window.location.reload()
    })
  }

  // Forcer la vérification de mise à jour
  async checkForUpdates(): Promise<void> {
    if (typeof window === "undefined" || !this.registration) return

    try {
      console.log("🔍 Manually checking for updates...")
      await this.registration.update()
    } catch (error) {
      console.error("Update check failed:", error)
    }
  }

  // Obtenir la version du cache
  async getCacheVersion(): Promise<string> {
    if (typeof window === "undefined" || !navigator.serviceWorker.controller) return "unknown"

    return new Promise((resolve) => {
      const messageChannel = new MessageChannel()

      messageChannel.port1.onmessage = (event) => {
        resolve(event.data.version || "unknown")
      }

      navigator.serviceWorker.controller.postMessage({ type: "GET_VERSION" }, [messageChannel.port2])

      // Timeout après 5 secondes
      setTimeout(() => resolve("timeout"), 5000)
    })
  }

  // Vider le cache et forcer le rechargement
  async clearCacheAndReload(): Promise<void> {
    if (typeof window === "undefined") return

    try {
      // Vider tous les caches
      if ("caches" in window) {
        const cacheNames = await caches.keys()
        await Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName.startsWith("diplo-scanner-")) {
              return caches.delete(cacheName)
            }
          }),
        )
      }

      // Désinscrire le Service Worker
      if (this.registration) {
        await this.registration.unregister()
      }

      // Recharger la page
      window.location.reload()
    } catch (error) {
      console.error("Clear cache failed:", error)
      // Forcer le rechargement même en cas d'erreur
      window.location.reload()
    }
  }

  // Configurer l'écoute du statut en ligne/hors ligne
  private setupOnlineListener() {
    if (typeof window === "undefined") return

    window.addEventListener("online", () => {
      this.isOnline = true
      window.dispatchEvent(
        new CustomEvent("connection-change", {
          detail: { online: true },
        }),
      )

      // Vérifier les mises à jour quand on revient en ligne
      if (this.registration) {
        this.registration.update()
      }
    })

    window.addEventListener("offline", () => {
      this.isOnline = false
      window.dispatchEvent(
        new CustomEvent("connection-change", {
          detail: { online: false },
        }),
      )
    })
  }

  // Obtenir le statut de connexion
  getConnectionStatus(): boolean {
    return this.isOnline
  }

  // Nettoyer les intervalles
  destroy() {
    if (this.updateCheckInterval) {
      clearInterval(this.updateCheckInterval)
    }
  }
}

// Initialisation automatique - seulement côté client
export const swManager = typeof window !== "undefined" ? ServiceWorkerManager.getInstance() : null

// Fonction d'initialisation pour l'application
export async function initializeServiceWorker(): Promise<void> {
  if (typeof window === "undefined" || !swManager) return

  try {
    const registered = await swManager.register()

    if (registered) {
      console.log("✅ Service Worker initialized successfully")
    }
  } catch (error) {
    console.error("❌ Service Worker initialization failed:", error)
  }
}
