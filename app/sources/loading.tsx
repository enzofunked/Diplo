import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function SourcesLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container max-w-4xl mx-auto p-4">
        <div className="text-center mb-8 pt-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="text-3xl">📚</div>
            <Skeleton className="h-9 w-80" />
          </div>
          <Skeleton className="h-5 w-60 mx-auto" />
        </div>

        <div className="pb-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-6 w-48" />
            </div>

            {/* Sources cards loading */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-5 w-5" />
                    <Skeleton className="h-6 w-48" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="border-l-4 border-gray-200 pl-4">
                      <Skeleton className="h-4 w-64 mb-2" />
                      <Skeleton className="h-3 w-96 mb-2" />
                      <Skeleton className="h-4 w-32" />
                    </div>
                    <div className="border-l-4 border-gray-200 pl-4">
                      <Skeleton className="h-4 w-48 mb-2" />
                      <Skeleton className="h-3 w-80 mb-2" />
                      <Skeleton className="h-4 w-28" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
