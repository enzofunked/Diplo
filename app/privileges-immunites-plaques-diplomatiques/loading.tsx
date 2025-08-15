import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header Skeleton */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Skeleton className="w-8 h-8 rounded-lg" />
              <Skeleton className="w-32 h-6" />
            </div>
            <Skeleton className="w-24 h-9 rounded-md" />
          </div>
        </nav>
      </header>

      {/* Hero Section Skeleton */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Skeleton className="w-64 h-8 mx-auto mb-6 rounded-full" />
          <Skeleton className="w-full max-w-3xl h-12 mx-auto mb-4" />
          <Skeleton className="w-full max-w-2xl h-12 mx-auto mb-6" />
          <Skeleton className="w-full max-w-3xl h-6 mx-auto mb-4" />
          <Skeleton className="w-full max-w-2xl h-6 mx-auto" />
        </div>
      </section>

      {/* CTA Banner Skeleton */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <Skeleton className="w-64 h-8 mb-2" />
                  <Skeleton className="w-80 h-6" />
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Skeleton className="w-32 h-11 rounded-md" />
                  <Skeleton className="w-32 h-11 rounded-md" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content Skeleton */}
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Introduction Skeleton */}
          <section className="mb-16">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Skeleton className="w-12 h-12 rounded-lg" />
                  <Skeleton className="w-80 h-9" />
                </div>
                <div className="space-y-4">
                  <Skeleton className="w-full h-6" />
                  <Skeleton className="w-full h-6" />
                  <Skeleton className="w-3/4 h-6" />
                  <Skeleton className="w-full h-6" />
                  <Skeleton className="w-5/6 h-6" />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Cards Grid Skeleton */}
          <section className="mb-16">
            <Skeleton className="w-80 h-9 mx-auto mb-8" />
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <Skeleton className="w-16 h-16 rounded-lg mx-auto mb-4" />
                      <Skeleton className="w-32 h-8 mx-auto" />
                    </div>
                    <Skeleton className="w-40 h-6 mb-4" />
                    <div className="space-y-3">
                      {[1, 2, 3, 4, 5].map((j) => (
                        <div key={j} className="flex items-start space-x-3">
                          <Skeleton className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0" />
                          <Skeleton className="flex-1 h-5" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Additional sections skeleton */}
          <div className="space-y-16">
            {[1, 2, 3].map((i) => (
              <section key={i}>
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <Skeleton className="w-12 h-12 rounded-lg" />
                      <Skeleton className="w-64 h-9" />
                    </div>
                    <div className="space-y-4">
                      <Skeleton className="w-full h-6" />
                      <Skeleton className="w-full h-6" />
                      <Skeleton className="w-3/4 h-6" />
                    </div>
                  </CardContent>
                </Card>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
