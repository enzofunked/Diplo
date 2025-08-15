const CACHE_NAME = "diplo-scanner-v3.2.1" // Incrémente à chaque mise à jour
const STATIC_CACHE = "diplo-scanner-static-v3.2.1"
const DYNAMIC_CACHE = "diplo-scanner-dynamic-v3.2.1"

// Ressources à mettre en cache immédiatement
const STATIC_ASSETS = [
  "/",
  "/french",
  "/swiss",
  "/history",
  "/about",
  "/help",
  "/terms",
  "/cookies",
  "/favorites",
  "/french/guide",
  "/swiss/guide",
  "/french/codes",
  "/swiss/codes",
  "/manifest.json",
  "/robots.txt",
  "/sitemap.xml",
  "/favicon.ico",
  "/app-icon-256-new.png",
  "/offline.html",
]

// Installation du Service Worker
self.addEventListener("install", (event) => {
  console.log("🔧 Service Worker v3.2.1: Installing...")

  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => {
        console.log("📦 Service Worker: Caching static assets")
        return cache.addAll(STATIC_ASSETS)
      })
      .then(() => {
        console.log("✅ Service Worker: Static assets cached")
        // Forcer l'activation immédiate pour les nouvelles versions
        return self.skipWaiting()
      })
      .then(() => {
        // Notifier que l'app est prête hors ligne
        self.clients.matchAll().then((clients) => {
          clients.forEach((client) => {
            client.postMessage({
              type: "OFFLINE_READY",
              message: "L'application est maintenant disponible hors ligne !",
              version: "3.2.1",
            })
          })
        })
      })
      .catch((error) => {
        console.error("❌ Service Worker: Cache failed", error)
      }),
  )
})

// Activation du Service Worker
self.addEventListener("activate", (event) => {
  console.log("🚀 Service Worker v3.2.1: Activating...")

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // Supprimer TOUS les anciens caches qui ne correspondent pas à la version actuelle
            if (
              cacheName !== STATIC_CACHE &&
              cacheName !== DYNAMIC_CACHE &&
              cacheName !== CACHE_NAME &&
              (cacheName.startsWith("diplo-scanner-") || cacheName.startsWith("diplo-scanner"))
            ) {
              console.log("🗑️ Service Worker: Deleting old cache:", cacheName)
              return caches.delete(cacheName)
            }
          }),
        )
      })
      .then(() => {
        console.log("✅ Service Worker: Activated and old caches cleared")
        // Prendre le contrôle immédiatement de tous les clients
        return self.clients.claim()
      })
      .then(() => {
        // Notifier tous les clients de la mise à jour
        return self.clients.matchAll()
      })
      .then((clients) => {
        clients.forEach((client) => {
          client.postMessage({
            type: "SW_UPDATED",
            message: "🎉 Application mise à jour vers la version 3.2.1",
            version: "3.2.1",
            shouldReload: true,
          })
        })
      }),
  )
})

// Interception des requêtes avec stratégie de mise à jour forcée
self.addEventListener("fetch", (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Ignorer les requêtes non-HTTP
  if (!request.url.startsWith("http")) return

  // Pour les pages HTML, toujours essayer le réseau d'abord
  if (request.destination === "document") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Si la réponse est OK, mettre à jour le cache
          if (response.status === 200) {
            const responseClone = response.clone()
            caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(request, responseClone)
            })
          }
          return response
        })
        .catch(() => {
          // Fallback vers le cache si pas de réseau
          return caches.match(request).then((response) => {
            return response || caches.match("/offline.html")
          })
        }),
    )
    return
  }

  // Stratégie Cache First pour les ressources statiques
  if (
    STATIC_ASSETS.includes(url.pathname) ||
    request.destination === "image" ||
    request.destination === "font" ||
    request.destination === "style" ||
    request.destination === "script"
  ) {
    event.respondWith(
      caches
        .match(request)
        .then((response) => {
          if (response) {
            // Vérifier en arrière-plan s'il y a une version plus récente
            fetch(request)
              .then((fetchResponse) => {
                if (fetchResponse.status === 200) {
                  caches.open(STATIC_CACHE).then((cache) => cache.put(request, fetchResponse))
                }
              })
              .catch(() => {
                // Ignorer les erreurs de réseau en arrière-plan
              })
            return response
          }

          return fetch(request).then((fetchResponse) => {
            if (fetchResponse.status === 200) {
              const responseClone = fetchResponse.clone()
              caches.open(STATIC_CACHE).then((cache) => cache.put(request, responseClone))
            }
            return fetchResponse
          })
        })
        .catch(() => {
          if (request.destination === "document") {
            return caches.match("/offline.html")
          }
        }),
    )
    return
  }

  // Stratégie Network First pour les données dynamiques
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.status === 200 && request.method === "GET") {
          const responseClone = response.clone()
          caches.open(DYNAMIC_CACHE).then((cache) => cache.put(request, responseClone))
        }
        return response
      })
      .catch(() => {
        return caches.match(request).then((response) => {
          if (response) {
            return response
          }
          if (request.destination === "document") {
            return caches.match("/offline.html")
          }
        })
      }),
  )
})

// Gestion des messages du client
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting()
  }

  if (event.data && event.data.type === "GET_VERSION") {
    event.ports[0].postMessage({ version: "3.2.1" })
  }

  if (event.data && event.data.type === "CLEAR_CACHE") {
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName.startsWith("diplo-scanner-")) {
              return caches.delete(cacheName)
            }
          }),
        )
      })
      .then(() => {
        event.ports[0].postMessage({ success: true })
      })
  }

  if (event.data && event.data.type === "CHECK_UPDATE") {
    // Forcer la vérification de mise à jour
    self.registration.update()
  }
})

// Vérification périodique des mises à jour (toutes les 30 minutes)
setInterval(
  () => {
    self.registration.update()
  },
  30 * 60 * 1000,
)
