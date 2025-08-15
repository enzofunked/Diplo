import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header skeleton */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-200 rounded animate-pulse"></div>
              <div className="w-32 h-5 bg-blue-200 rounded animate-pulse"></div>
            </div>
            <div className="w-32 h-9 bg-blue-200 rounded animate-pulse"></div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero skeleton */}
        <div className="text-center mb-12">
          <div className="w-24 h-8 bg-blue-200 rounded-full mx-auto mb-6 animate-pulse"></div>
          <div className="w-3/4 h-12 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
          <div className="w-1/2 h-12 bg-gray-200 rounded mx-auto mb-8 animate-pulse"></div>
          <div className="w-full max-w-2xl h-6 bg-gray-200 rounded mx-auto mb-2 animate-pulse"></div>
          <div className="w-3/4 h-6 bg-gray-200 rounded mx-auto mb-8 animate-pulse"></div>
          <div className="w-full max-w-2xl h-64 bg-gray-200 rounded-xl mx-auto animate-pulse"></div>
        </div>

        {/* Cards skeleton */}
        {[1, 2, 3, 4, 5].map((i) => (
          <Card key={i} className="mb-8 border-blue-100">
            <CardHeader className="bg-blue-50">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-blue-300 rounded animate-pulse"></div>
                <div className="w-48 h-6 bg-blue-300 rounded animate-pulse"></div>
              </div>
              <div className="w-64 h-4 bg-blue-200 rounded animate-pulse mt-2"></div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-1/2 h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="space-y-3">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="w-full h-12 bg-gray-100 rounded animate-pulse"></div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="w-full h-12 bg-gray-100 rounded animate-pulse"></div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* CTA skeleton */}
        <Card className="mb-8 border-blue-200">
          <CardContent className="pt-8 pb-8">
            <div className="text-center">
              <div className="w-64 h-8 bg-blue-300 rounded mx-auto mb-4 animate-pulse"></div>
              <div className="w-96 h-6 bg-blue-200 rounded mx-auto mb-6 animate-pulse"></div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="w-40 h-12 bg-blue-300 rounded animate-pulse"></div>
                <div className="w-40 h-12 bg-blue-200 rounded animate-pulse"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer skeleton */}
      <footer className="bg-white border-t border-blue-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-5 h-5 bg-blue-200 rounded animate-pulse"></div>
            <div className="w-32 h-6 bg-blue-200 rounded animate-pulse"></div>
          </div>
          <div className="w-64 h-4 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
          <div className="flex justify-center gap-6">
            <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </footer>
    </div>
  )
}
