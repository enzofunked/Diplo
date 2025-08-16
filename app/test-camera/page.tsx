import type { Metadata } from "next"
import TestCameraPage from "./TestCameraPage"

export const metadata: Metadata = {
  title: "Test Caméra Mobile | Diplo Scanner",
  description: "Testez la fonctionnalité de reconnaissance par caméra sur votre appareil mobile",
  robots: "noindex, nofollow",
}

export default function Page() {
  return <TestCameraPage />
}
