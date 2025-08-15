export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header Skeleton */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-9 w-24 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </header>

      {/* Main Content Skeleton */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section Skeleton */}
        <div className="text-center mb-12">
          <div className="h-8 w-48 bg-gray-200 rounded-full mx-auto mb-6 animate-pulse"></div>
          <div className="h-12 w-96 bg-gray-200 rounded mx-auto mb-6 animate-pulse"></div>
          <div className="h-6 w-full max-w-4xl bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 w-3/4 bg-gray-200 rounded mx-auto mb-8 animate-pulse"></div>

          {/* Stats Skeleton */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="p-4 bg-white rounded-lg shadow-sm">
                <div className="h-8 w-8 bg-gray-200 rounded mx-auto mb-2 animate-pulse"></div>
                <div className="h-4 w-16 bg-gray-200 rounded mx-auto animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Card Skeleton */}
        <section className="mb-12">
          <div className="h-48 bg-gray-200 rounded-lg animate-pulse"></div>
        </section>

        {/* Cards Grid Skeleton */}
        <section className="mb-12">
          <div className="h-10 w-64 bg-gray-200 rounded mx-auto mb-8 animate-pulse"></div>
          <div className="grid md:grid-cols-2 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="border-2 border-gray-200 rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse"></div>
                  <div className="h-8 w-48 bg-gray-200 rounded mx-auto animate-pulse"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-32 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Content Skeletons */}
        {[...Array(3)].map((_, i) => (
          <section key={i} className="mb-12">
            <div className="h-64 bg-gray-200 rounded-lg animate-pulse"></div>
          </section>
        ))}
      </main>

      {/* Footer Skeleton */}
      <footer className="bg-gray-900 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
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
