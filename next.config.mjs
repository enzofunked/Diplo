/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimisations SEO et performance
  trailingSlash: false,
  poweredByHeader: false,
  compress: true,
  
  // Headers de sécurité et SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ],
      },
      // Headers spécifiques pour les pages importantes
      {
        source: '/(liste-codes-pays-plaques-diplomatiques-francaises|codes-diplomatiques-suisses|privileges-immunites-plaques-diplomatiques|plaque-immatriculation-verte|plaque-verte-et-orange|comment-lire-une-plaque-diplomatique-francaise|comment-lire-une-plaque-diplomatique-suisse|qu-est-ce-qu-une-plaque-diplomatique|swiss|french)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400'
          },
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
          }
        ],
      }
    ]
  },

  // Redirections 301 permanentes
  async redirects() {
    return [
      {
        source: '/scanner',
        destination: '/',
        permanent: true,
      },
      {
        source: '/scan',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      {
        source: '/french-scanner',
        destination: '/french',
        permanent: true,
      },
      {
        source: '/swiss-scanner',
        destination: '/swiss',
        permanent: true,
      },
      {
        source: '/french-codes',
        destination: '/liste-codes-pays-plaques-diplomatiques-francaises',
        permanent: true,
      },
      {
        source: '/swiss-codes',
        destination: '/codes-diplomatiques-suisses',
        permanent: true,
      },
      {
        source: '/diplomatic-guide',
        destination: '/qu-est-ce-qu-une-plaque-diplomatique',
        permanent: true,
      },
      {
        source: '/french-guide',
        destination: '/comment-lire-une-plaque-diplomatique-francaise',
        permanent: true,
      },
      {
        source: '/swiss-guide',
        destination: '/comment-lire-une-plaque-diplomatique-suisse',
        permanent: true,
      },
      {
        source: '/privileges',
        destination: '/privileges-immunites-plaques-diplomatiques',
        permanent: true,
      },
      {
        source: '/green-plates',
        destination: '/plaque-immatriculation-verte',
        permanent: true,
      },
      {
        source: '/green-orange',
        destination: '/plaque-verte-et-orange',
        permanent: true,
      },
    ]
  },

  // Optimisations d'images
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true,
  },

  // Optimisations de compilation
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // Configuration PWA
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    return config
  },

  // ESLint et TypeScript configurations
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
