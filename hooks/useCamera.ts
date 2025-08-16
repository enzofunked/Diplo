"use client"

import { useState, useCallback, useRef } from "react"

interface UseCameraReturn {
  stream: MediaStream | null
  error: string | null
  isLoading: boolean
  startCamera: () => Promise<void>
  stopCamera: () => void
  captureImage: () => Promise<string | null>
}

export function useCamera(): UseCameraReturn {
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const streamRef = useRef<MediaStream | null>(null)

  const startCamera = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      // Préférer la caméra arrière si disponible
      const constraints: MediaStreamConstraints = {
        video: {
          facingMode: { ideal: "environment" },
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        },
        audio: false,
      }

      const mediaStream = await navigator.mediaDevices.getUserMedia(constraints)
      streamRef.current = mediaStream
      setStream(mediaStream)
    } catch (err) {
      console.error("Erreur d'accès à la caméra:", err)

      let errorMessage = "Impossible d'accéder à la caméra"

      if (err instanceof Error) {
        if (err.name === "NotAllowedError") {
          errorMessage = "Accès à la caméra refusé. Veuillez autoriser l'accès dans les paramètres."
        } else if (err.name === "NotFoundError") {
          errorMessage = "Aucune caméra trouvée sur cet appareil."
        } else if (err.name === "NotSupportedError") {
          errorMessage = "Caméra non supportée par ce navigateur."
        }
      }

      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => {
        track.stop()
      })
      streamRef.current = null
      setStream(null)
    }
  }, [])

  const captureImage = useCallback(async (): Promise<string | null> => {
    if (!streamRef.current) {
      setError("Aucun flux vidéo disponible")
      return null
    }

    try {
      // Créer un élément vidéo temporaire
      const video = document.createElement("video")
      video.srcObject = streamRef.current
      video.play()

      // Attendre que la vidéo soit prête
      await new Promise((resolve) => {
        video.onloadedmetadata = resolve
      })

      // Créer un canvas pour capturer l'image
      const canvas = document.createElement("canvas")
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight

      const ctx = canvas.getContext("2d")
      if (!ctx) {
        throw new Error("Impossible de créer le contexte canvas")
      }

      // Dessiner l'image vidéo sur le canvas
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

      // Convertir en base64
      const imageData = canvas.toDataURL("image/jpeg", 0.8)

      // Nettoyer
      video.remove()
      canvas.remove()

      return imageData
    } catch (err) {
      console.error("Erreur lors de la capture:", err)
      setError("Erreur lors de la capture d'image")
      return null
    }
  }, [])

  return {
    stream,
    error,
    isLoading,
    startCamera,
    stopCamera,
    captureImage,
  }
}
