const CACHE_NAME = "diplo-scanner-v1.1.0"
const STATIC_CACHE = "diplo-scanner-static-v1.1.0"
const DYNAMIC_CACHE = "diplo-scanner-dynamic-v1.1.0"

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
  console.log("🔧 Service Worker: Installing...")

  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => {
        console.log("📦 Service Worker: Caching static assets")
        return cache.addAll(STATIC_ASSETS)
      })
      .then(() => {
        console.log("✅ Service Worker: Static assets cached")
        // Forcer l'activation immédiate
        return self.skipWaiting()
      })
      .then(() => {
        // Notifier que l'app est prête hors ligne
        self.clients.matchAll().then((clients) => {
          clients.forEach((client) => {
            client.postMessage({
              type: "OFFLINE_READY",
              message: "L'application est maintenant disponible hors ligne !",
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
  console.log("🚀 Service Worker: Activating...")

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // Supprimer les anciens caches
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE && cacheName !== CACHE_NAME) {
              console.log("🗑️ Service Worker: Deleting old cache:", cacheName)
              return caches.delete(cacheName)
            }
          }),
        )
      })
      .then(() => {
        console.log("✅ Service Worker: Activated")
        // Prendre le contrôle immédiatement
        return self.clients.claim()
      })
      .then(() => {
        // Notifier tous les clients que l'app est prête
        return self.clients.matchAll()
      })
      .then((clients) => {
        clients.forEach((client) => {
          client.postMessage({
            type: "OFFLINE_READY",
            message: "📱 Application disponible hors ligne",
          })
        })
      }),
  )
})

// Interception des requêtes
self.addEventListener("fetch", (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Ignorer les requêtes non-HTTP
  if (!request.url.startsWith("http")) return

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
            return response
          }

          return fetch(request).then((fetchResponse) => {
            // Mettre en cache la nouvelle ressource
            if (fetchResponse.status === 200) {
              const responseClone = fetchResponse.clone()
              caches.open(STATIC_CACHE).then((cache) => cache.put(request, responseClone))
            }
            return fetchResponse
          })
        })
        .catch(() => {
          // Fallback pour les pages
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
        // Mettre en cache les réponses réussies
        if (response.status === 200 && request.method === "GET") {
          const responseClone = response.clone()
          caches.open(DYNAMIC_CACHE).then((cache) => cache.put(request, responseClone))
        }
        return response
      })
      .catch(() => {
        // Fallback vers le cache
        return caches.match(request).then((response) => {
          if (response) {
            return response
          }

          // Fallback final
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
})

// Notification de mise à jour disponible
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "CHECK_UPDATE") {
    // Vérifier s'il y a une mise à jour
    self.registration.update()
  }
})
