// Enregistrement et gestion du Service Worker
export class ServiceWorkerManager {
  private static instance: ServiceWorkerManager
  private registration: ServiceWorkerRegistration | null = null
  private isOnline = typeof window !== "undefined" ? navigator.onLine : true

  private constructor() {
    // Ne s'exécute que côté client
    if (typeof window !== "undefined") {
      this.setupOnlineListener()
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

      return true
    } catch (error) {
      console.error("Service Worker registration failed:", error)
      return false
    }
  }

  // Gérer les mises à jour du Service Worker
  private handleUpdateFound() {
    if (!this.registration) return

    const newWorker = this.registration.installing
    if (!newWorker) return

    newWorker.addEventListener("statechange", () => {
      if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
        this.showUpdateAvailable()
      }
    })
  }

  // Afficher la notification de mise à jour
  private showUpdateAvailable() {
    if (typeof window === "undefined") return
    // Envoyer un événement personnalisé pour notifier l'application
    window.dispatchEvent(new CustomEvent("sw-update-available"))
  }

  // Activer la mise à jour
  async activateUpdate(): Promise<void> {
    if (typeof window === "undefined" || !this.registration || !this.registration.waiting) return

    // Dire au SW en attente de prendre le contrôle
    this.registration.waiting.postMessage({ type: "SKIP_WAITING" })

    // Recharger la page une fois que le nouveau SW est actif
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      window.location.reload()
    })
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
    })
  }

  // Vider le cache
  async clearCache(): Promise<boolean> {
    if (typeof window === "undefined" || !navigator.serviceWorker.controller) return false

    return new Promise((resolve) => {
      const messageChannel = new MessageChannel()

      messageChannel.port1.onmessage = (event) => {
        resolve(event.data.success || false)
      }

      navigator.serviceWorker.controller.postMessage({ type: "CLEAR_CACHE" }, [messageChannel.port2])
    })
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

  // Précharger des ressources importantes
  async preloadResources(urls: string[]): Promise<void> {
    if (typeof window === "undefined" || !("caches" in window)) return

    try {
      const cache = await caches.open("diplo-scanner-preload-v1.0.0")
      await cache.addAll(urls)
      console.log("Resources preloaded:", urls)
    } catch (error) {
      console.error("Preload failed:", error)
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

      // Précharger les ressources critiques
      await swManager.preloadResources(["/french", "/swiss", "/history"])
    }
  } catch (error) {
    console.error("❌ Service Worker initialization failed:", error)
  }
}
