"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trash2, PenTool, Check } from "lucide-react"

interface DigitalSignatureProps {
  onSignatureComplete: (signatureDataUrl: string) => void
  onSignatureClear: () => void
}

export default function DigitalSignature({ onSignatureComplete, onSignatureClear }: DigitalSignatureProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [hasSignature, setHasSignature] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const updateCanvasSize = () => {
      const container = canvas.parentElement
      if (!container) return

      const containerWidth = container.clientWidth - 32 // Account for padding
      const isMobile = window.innerWidth < 768

      canvas.width = Math.min(containerWidth, isMobile ? 350 : 400)
      canvas.height = isMobile ? 150 : 200

      ctx.strokeStyle = "#000000"
      ctx.lineWidth = isMobile ? 3 : 2 // Thicker lines on mobile
      ctx.lineCap = "round"
      ctx.lineJoin = "round"

      ctx.fillStyle = "#ffffff"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    updateCanvasSize()
    window.addEventListener("resize", updateCanvasSize)

    return () => window.removeEventListener("resize", updateCanvasSize)
  }, [])

  const getCoordinates = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0 }

    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height

    if ("touches" in e) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY,
      }
    } else {
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      }
    }
  }

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if ("touches" in e) {
      e.preventDefault()
    }

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    setIsDrawing(true)
    const { x, y } = getCoordinates(e)

    ctx.beginPath()
    ctx.moveTo(x, y)
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return

    if ("touches" in e) {
      e.preventDefault()
    }

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const { x, y } = getCoordinates(e)

    ctx.lineTo(x, y)
    ctx.stroke()
    setHasSignature(true)
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  const clearSignature = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    setHasSignature(false)
    onSignatureClear()
  }

  const saveSignature = () => {
    const canvas = canvasRef.current
    if (!canvas || !hasSignature) return

    const dataUrl = canvas.toDataURL("image/png")
    onSignatureComplete(dataUrl)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PenTool className="h-5 w-5" />
          Signature numérique
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50 touch-none">
          <canvas
            ref={canvasRef}
            className="border border-gray-300 rounded bg-white w-full block mx-auto"
            style={{
              maxWidth: "100%",
              height: "auto",
              touchAction: "none", // Prevent scrolling and zooming
            }}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
          />
          <p className="text-sm text-gray-600 mt-2 text-center">
            <span className="md:hidden">Signez avec votre doigt dans la zone ci-dessus</span>
            <span className="hidden md:inline">Signez dans la zone ci-dessus avec votre souris ou votre doigt</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <Button
            variant="outline"
            onClick={clearSignature}
            disabled={!hasSignature}
            className="flex items-center gap-2 bg-transparent w-full sm:w-auto"
          >
            <Trash2 className="h-4 w-4" />
            Effacer
          </Button>
          <Button
            onClick={saveSignature}
            disabled={!hasSignature}
            className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 w-full sm:w-auto"
          >
            <Check className="h-4 w-4" />
            Valider la signature
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
