"use client"

import { useState, useEffect, useRef } from "react"
import { Activity, Zap, Clock, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

interface PerformanceMetrics {
  memoryUsage: number
  memoryLimit: number
  fps: number
  loadTime: number
  renderTime: number
  networkLatency?: number
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    memoryUsage: 0,
    memoryLimit: 0,
    fps: 0,
    loadTime: 0,
    renderTime: 0,
  })
  const [isMonitoring, setIsMonitoring] = useState(false)
  const frameCount = useRef(0)
  const lastTime = useRef(Date.now())
  const animationFrame = useRef<number>()

  const startMonitoring = () => {
    setIsMonitoring(true)

    const updateMetrics = () => {
      // Mesure FPS
      frameCount.current++
      const now = Date.now()
      if (now - lastTime.current >= 1000) {
        setMetrics((prev) => ({
          ...prev,
          fps: frameCount.current,
        }))
        frameCount.current = 0
        lastTime.current = now
      }

      // Mesure mémoire (si disponible)
      if ("memory" in performance) {
        const memory = (performance as any).memory
        setMetrics((prev) => ({
          ...prev,
          memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024),
          memoryLimit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024),
        }))
      }

      // Mesure temps de rendu
      const renderStart = performance.now()
      requestAnimationFrame(() => {
        const renderEnd = performance.now()
        setMetrics((prev) => ({
          ...prev,
          renderTime: Math.round(renderEnd - renderStart),
        }))
      })

      if (isMonitoring) {
        animationFrame.current = requestAnimationFrame(updateMetrics)
      }
    }

    updateMetrics()
  }

  const stopMonitoring = () => {
    setIsMonitoring(false)
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current)
    }
  }

  const measureNetworkLatency = async () => {
    const start = performance.now()
    try {
      await fetch("/favicon.ico", { method: "HEAD", cache: "no-cache" })
      const latency = performance.now() - start
      setMetrics((prev) => ({
        ...prev,
        networkLatency: Math.round(latency),
      }))
    } catch (error) {
      console.log("Network latency measurement failed")
    }
  }

  const getPerformanceRating = () => {
    const { fps, memoryUsage, memoryLimit, renderTime } = metrics

    let score = 100

    // Pénalité FPS
    if (fps < 30) score -= 30
    else if (fps < 45) score -= 15

    // Pénalité mémoire
    const memoryPercent = (memoryUsage / memoryLimit) * 100
    if (memoryPercent > 80) score -= 25
    else if (memoryPercent > 60) score -= 15

    // Pénalité temps de rendu
    if (renderTime > 16)
      score -= 20 // 60fps = 16ms par frame
    else if (renderTime > 10) score -= 10

    if (score >= 80) return { rating: "Excellent", color: "bg-green-100 text-green-800" }
    if (score >= 60) return { rating: "Bon", color: "bg-yellow-100 text-yellow-800" }
    if (score >= 40) return { rating: "Moyen", color: "bg-orange-100 text-orange-800" }
    return { rating: "Faible", color: "bg-red-100 text-red-800" }
  }

  useEffect(() => {
    // Mesurer le temps de chargement initial
    if (performance.timing) {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
      setMetrics((prev) => ({
        ...prev,
        loadTime: Math.round(loadTime),
      }))
    }

    // Mesurer la latence réseau
    measureNetworkLatency()

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [])

  const performanceRating = getPerformanceRating()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="w-5 h-5" />
          Monitoring des Performances
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Contrôles */}
        <div className="flex gap-2">
          <button
            onClick={isMonitoring ? stopMonitoring : startMonitoring}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              isMonitoring
                ? "bg-red-100 text-red-800 hover:bg-red-200"
                : "bg-green-100 text-green-800 hover:bg-green-200"
            }`}
          >
            {isMonitoring ? "Arrêter" : "Démarrer"} le monitoring
          </button>
          <Badge className={performanceRating.color}>{performanceRating.rating}</Badge>
        </div>

        {/* Métriques en temps réel */}
        <div className="grid grid-cols-2 gap-4">
          {/* FPS */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-600" />
              <span className="font-medium">FPS</span>
            </div>
            <div className="text-2xl font-bold">
              {metrics.fps}
              <span className="text-sm font-normal text-gray-500 ml-1">fps</span>
            </div>
            <Progress value={Math.min(100, (metrics.fps / 60) * 100)} className="h-2" />
          </div>

          {/* Mémoire */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <span className="font-medium">Mémoire</span>
            </div>
            <div className="text-2xl font-bold">
              {metrics.memoryUsage}
              <span className="text-sm font-normal text-gray-500 ml-1">MB</span>
            </div>
            {metrics.memoryLimit > 0 && (
              <Progress value={(metrics.memoryUsage / metrics.memoryLimit) * 100} className="h-2" />
            )}
          </div>
        </div>

        {/* Métriques supplémentaires */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3 text-gray-600" />
              <span>Temps de rendu</span>
            </div>
            <span className="font-medium">{metrics.renderTime}ms</span>
          </div>

          <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
            <div className="flex items-center gap-2">
              <Activity className="w-3 h-3 text-gray-600" />
              <span>Temps de chargement</span>
            </div>
            <span className="font-medium">{metrics.loadTime}ms</span>
          </div>

          {metrics.networkLatency && (
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded col-span-2">
              <div className="flex items-center gap-2">
                <Zap className="w-3 h-3 text-gray-600" />
                <span>Latence réseau</span>
              </div>
              <span className="font-medium">{metrics.networkLatency}ms</span>
            </div>
          )}
        </div>

        {/* Recommandations */}
        <div className="space-y-2">
          <h4 className="font-medium">Recommandations</h4>
          <div className="text-sm space-y-1">
            {metrics.fps < 30 && <div className="text-red-600">• FPS faible - Réduire la qualité vidéo</div>}
            {metrics.memoryLimit > 0 && metrics.memoryUsage / metrics.memoryLimit > 0.8 && (
              <div className="text-orange-600">• Utilisation mémoire élevée - Redémarrer l'app</div>
            )}
            {metrics.renderTime > 16 && (
              <div className="text-yellow-600">• Temps de rendu élevé - Optimiser l'affichage</div>
            )}
            {metrics.networkLatency && metrics.networkLatency > 200 && (
              <div className="text-blue-600">• Latence réseau élevée - Vérifier la connexion</div>
            )}
            {performanceRating.rating === "Excellent" && (
              <div className="text-green-600">• Performances optimales ✓</div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
