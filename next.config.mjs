/** @type {import('next').NextConfig} */
const nextConfig = {
  // Désactiver les redirections automatiques pour éviter les boucles
  trailingSlash: false,
  
  // Configuration des images pour éviter les redirections
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 an
    unoptimized: true, // Ajout de l'option unoptimized
  },

  // Headers pour éviter les redirections et améliorer les performances
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
        ],
      },
      // Headers spécifiques pour les assets statiques
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/favicons/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Pas de redirections automatiques - toutes les pages doivent être accessibles directement
  async redirects() {
    return []
  },

  // Rewrites pour le sitemap sans redirection
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ]
  },

  // Configuration pour éviter les erreurs de build
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // Compression pour réduire la taille des réponses
  compress: true,

  // Configuration du build
  swcMinify: true,
  
  // Configuration des pages d'erreur personnalisées
  async generateBuildId() {
    return 'diplo-scanner-build'
  },

  // Ignorer les erreurs d'ESLint et de TypeScript pendant les builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
