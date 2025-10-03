export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      {/* Header Skeleton */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-9 w-24 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </header>

      {/* Main Content Skeleton */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section Skeleton */}
        <div className="text-center mb-12">
          <div className="h-8 w-48 bg-gray-200 rounded-full mx-auto mb-6 animate-pulse"></div>
          <div className="h-12 w-80 bg-gray-200 rounded mx-auto mb-6 animate-pulse"></div>
          <div className="h-6 w-full max-w-3xl bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 w-2/3 bg-gray-200 rounded mx-auto mb-8 animate-pulse"></div>

          {/* Visual Example Skeleton */}
          <div className="max-w-md mx-auto mb-8">
            <div className="h-20 bg-gray-200 rounded-lg animate-pulse mb-2"></div>
            <div className="h-4 w-48 bg-gray-200 rounded mx-auto animate-pulse"></div>
          </div>
        </div>

        {/* CTA Card Skeleton */}
        <section className="mb-12">
          <div className="h-48 bg-gray-200 rounded-lg animate-pulse"></div>
        </section>

        {/* Content Sections Skeleton */}
        {[...Array(6)].map((_, i) => (
          <section key={i} className="mb-12">
            <div className="h-64 bg-gray-200 rounded-lg animate-pulse"></div>
          </section>
        ))}

        {/* Cards Grid Skeleton */}
        <section className="mb-12">
          <div className="h-10 w-48 bg-gray-200 rounded mx-auto mb-8 animate-pulse"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded-lg animate-pulse"></div>
            ))}
          </div>
        </section>

        {/* Final CTA Skeleton */}
        <section>
          <div className="h-48 bg-gray-200 rounded-lg animate-pulse"></div>
        </section>
      </main>

      {/* Footer Skeleton */}
      <footer className="bg-gray-900 py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="h-4 w-64 bg-gray-700 rounded mx-auto mb-4 animate-pulse"></div>
          <div className="flex justify-center space-x-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-4 w-20 bg-gray-700 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
