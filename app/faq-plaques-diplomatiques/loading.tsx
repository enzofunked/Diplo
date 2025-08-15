import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header Skeleton */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-6 w-48" />
          </div>
        </div>
      </header>

      <div className="container max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section Skeleton */}
        <section className="text-center mb-12">
          <Skeleton className="h-8 w-40 mx-auto mb-4" />
          <Skeleton className="h-12 w-96 mx-auto mb-4" />
          <Skeleton className="h-6 w-full max-w-3xl mx-auto mb-8" />

          {/* Stats Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <Skeleton className="h-8 w-12 mx-auto mb-2" />
                <Skeleton className="h-4 w-24 mx-auto" />
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner Skeleton */}
        <section className="bg-gray-200 rounded-xl p-6 mb-12">
          <Skeleton className="h-8 w-64 mx-auto mb-2" />
          <Skeleton className="h-4 w-80 mx-auto mb-4" />
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
          </div>
        </section>

        {/* FAQ Categories Skeleton */}
        <section className="space-y-8">
          {[1, 2, 3, 4, 5].map((categoryIndex) => (
            <div key={categoryIndex}>
              <Skeleton className="h-8 w-48 mb-6" />

              <div className="grid gap-4">
                {[1, 2, 3, 4, 5].map((faqIndex) => (
                  <Card key={faqIndex} className="border-gray-200">
                    <CardHeader className="pb-3">
                      <Skeleton className="h-6 w-full" />
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-1/2" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Resources Section Skeleton */}
        <section className="mt-16 bg-white rounded-xl p-8 border border-gray-200">
          <Skeleton className="h-8 w-64 mx-auto mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Skeleton className="h-6 w-6" />
                    <Skeleton className="h-5 w-24" />
                  </div>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer Skeleton */}
        <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-4 w-20" />
            ))}
          </div>
          <Skeleton className="h-4 w-80 mx-auto" />
        </footer>
      </div>
    </div>
  )
}
