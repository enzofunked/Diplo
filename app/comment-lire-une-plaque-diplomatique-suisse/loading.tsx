import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function SwissDiplomaticPlateGuideLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section Skeleton */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Skeleton className="h-12 w-3/4 mx-auto mb-6 bg-blue-400" />
            <Skeleton className="h-6 w-2/3 mx-auto mb-8 bg-blue-300" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Skeleton className="h-12 w-48 bg-blue-300" />
              <Skeleton className="h-12 w-48 bg-blue-300" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction Card Skeleton */}
          <Card>
            <CardHeader>
              <Skeleton className="h-8 w-2/3" />
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/5" />
              <div className="bg-gray-50 p-4 rounded-lg">
                <Skeleton className="h-5 w-1/3 mb-2" />
                <div className="space-y-2">
                  <Skeleton className="h-3 w-3/4" />
                  <Skeleton className="h-3 w-2/3" />
                  <Skeleton className="h-3 w-4/5" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Format Card Skeleton */}
          <Card>
            <CardHeader>
              <Skeleton className="h-8 w-1/2" />
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Skeleton className="h-6 w-1/3" />
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                  <div className="space-y-3">
                    <div>
                      <Skeleton className="h-6 w-20 mb-2" />
                      <div className="space-y-1 ml-4">
                        <Skeleton className="h-3 w-3/4" />
                        <Skeleton className="h-3 w-2/3" />
                        <Skeleton className="h-3 w-4/5" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <Skeleton className="h-6 w-1/3" />
                  <div className="space-y-3">
                    <Skeleton className="h-16 w-full rounded-lg" />
                    <Skeleton className="h-16 w-full rounded-lg" />
                    <Skeleton className="h-16 w-full rounded-lg" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Examples Card Skeleton */}
          <Card>
            <CardHeader>
              <Skeleton className="h-8 w-1/3" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-gray-200 pl-4 py-2">
                  <Skeleton className="h-6 w-32 mb-2" />
                  <Skeleton className="h-3 w-full mb-1" />
                  <Skeleton className="h-3 w-2/3" />
                </div>
                <div className="border-l-4 border-gray-200 pl-4 py-2">
                  <Skeleton className="h-6 w-32 mb-2" />
                  <Skeleton className="h-3 w-full mb-1" />
                  <Skeleton className="h-3 w-2/3" />
                </div>
                <div className="border-l-4 border-gray-200 pl-4 py-2">
                  <Skeleton className="h-6 w-32 mb-2" />
                  <Skeleton className="h-3 w-full mb-1" />
                  <Skeleton className="h-3 w-2/3" />
                </div>
              </div>
              <div className="mt-6 text-center">
                <Skeleton className="h-10 w-48 mx-auto" />
              </div>
            </CardContent>
          </Card>

          {/* History Card Skeleton */}
          <Card>
            <CardHeader>
              <Skeleton className="h-8 w-1/2" />
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <Skeleton className="flex-shrink-0 w-12 h-12 rounded-full" />
                    <div className="flex-1">
                      <Skeleton className="h-5 w-1/3 mb-2" />
                      <Skeleton className="h-3 w-full mb-1" />
                      <Skeleton className="h-3 w-4/5" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Card Skeleton */}
          <Card>
            <CardContent className="p-8 text-center">
              <Skeleton className="h-16 w-16 mx-auto mb-4 rounded-full" />
              <Skeleton className="h-8 w-2/3 mx-auto mb-4" />
              <Skeleton className="h-5 w-3/4 mx-auto mb-6" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Skeleton className="h-12 w-48" />
                <Skeleton className="h-12 w-48" />
              </div>
            </CardContent>
          </Card>

          {/* Footer Navigation Skeleton */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <Skeleton className="h-6 w-1/2 mb-3" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-3/4 mb-4" />
                <Skeleton className="h-10 w-full" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Skeleton className="h-6 w-1/2 mb-3" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-3/4 mb-4" />
                <Skeleton className="h-10 w-full" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
