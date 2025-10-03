"use client"

import { useState } from "react"
import { Info, History, BookOpen, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import EnhancedFrenchScanner from "../components/EnhancedFrenchScanner"
import FrenchPlateResult from "../components/FrenchPlateResult"
import FrenchSystemInfo from "../components/FrenchSystemInfo"
import TermsOfService from "../components/TermsOfService"
import { type FrenchPlateMatch } from "../utils/french-plate-validator"
import HistoryView from "../components/HistoryView"
import { useHistory, type HistoryEntry } from "../hooks/useHistory"
import SwissScanner from "../components/SwissScanner"
import SwissPlateResult from "../components/SwissPlateResult"
import SystemSelector from "../components/SystemSelector"
import { validateDiplomaticPlate, isSwissPlate } from "../utils/plateValidator"
import { type SwissPlateMatch } from "../utils/swiss-plate-validator"
import SwissSystemInfo from "../components/SwissSystemInfo"
import SwissCodeList from "../components/SwissCodeList"
import FrenchCodeList from "../components/FrenchCodeList"
import CameraScanner from "../components/CameraScanner"

type AppState = "home" | "french" | "swiss" | "result" | "about" | "system-info" | "history" | "terms" | "swiss-system-info" | "swiss-codes" | "french-codes" | "camera-scan"

const AdBanner = ({ adUnitId }: { adUnitId: string }) => (
  <div className="w-full h-14 bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-sm text-gray-500 rounded-lg shadow-inner">
    Espace publicitaire
  </div>
)

const useAdIds = () => {
  const isAndroid = typeof window !== "undefined" && /android/i.test(navigator.userAgent);
  const getHomePageBanner1 = () => isAndroid ? "ca-app-pub-5475322044218525/3166575961" : "ca-app-pub-5475322044218525/1860684415";
  const getHomePageBanner2 = () => isAndroid ? "ca-app-pub-5475322044218525/1122317818" : "ca-app-pub-5475322044218525/1411976322";
  const getInterstitialId = () => isAndroid ? "ca-app-pub-5475322044218525/9253472161" : "ca-app-pub-5475322044218525/4752455534";
  const getFrenchScannerBannerId = () => isAndroid ? "ca-app-pub-5475322044218525/3449932405" : "ca-app-pub-5475322044218525/7475655949";
  const getSwissInfoBannerId = () => isAndroid ? "ca-app-pub-5475322044218525/3812980200" : "ca-app-pub-5475322044218525/2092371281";
  const getHistoryBannerId = () => isAndroid ? "ca-app-pub-5475322044218525/6794366762" : "ca-app-pub-5475322044218525/6055667021";
  const getFrenchDecodeBannerId = () => isAndroid ? "ca-app-pub-5475322044218525/5752747834" : "ca-app-pub-5475322044218525/4439666169";
  const getFrenchCodesBannerId = () => isAndroid ? "ca-app-pub-5475322044218525/9855644377" : "ca-app-pub-5475322044218525/9636152522";
  const getSwissDecodeBannerId = () => isAndroid ? "ca-app-pub-5475322044218525/9484109286" : "ca-app-pub-5475322044218525/4107944939";
  const getSwissCodesBannerId = () => isAndroid ? "ca-app-pub-5475322044218525/7604885551" : "ca-app-pub-5475322044218525/6730454442";
  return { getHomePageBanner1, getHomePageBanner2, getInterstitialId, getFrenchScannerBannerId, getSwissInfoBannerId, getHistoryBannerId, getFrenchDecodeBannerId, getFrenchCodesBannerId, getSwissDecodeBannerId, getSwissCodesBannerId };
}

export default function DiploScanner() {
  const [currentState, setCurrentState] = useState<AppState>("home")
  const [selectedSystem, setSelectedSystem] = useState<"french" | "swiss" | null>(null)
  const [scanResult, setScanResult] = useState<FrenchPlateMatch | SwissPlateMatch | null>(null)
  const [scannedPlate, setScannedPlate] = useState("")
  const [isScanning, setIsScanning] = useState(false)
  const { addToHistory } = useHistory()
  const adIds = useAdIds()
  const [showInterstitial, setShowInterstitial] = useState(false)
  const [lastAdTime, setLastAdTime] = useState(0)
  const [pendingPlateScan, setPendingPlateScan] = useState<string | null>(null)

  const handleSystemSelect = (system: "french" | "swiss") => {
    setSelectedSystem(system)
    setCurrentState(system)
  }

  const executeScan = async (plateText: string) => {
    if (!selectedSystem) return;
    setIsScanning(true)
    setScannedPlate(plateText)
    try {
      // @ts-ignore
      const result = validateDiplomaticPlate(plateText, selectedSystem)
      if (result) {
        setScanResult(result)
        setCurrentState("result")
        addToHistory(plateText, result, selectedSystem)
      } else {
        alert(`Plaque non reconnue: "${plateText}"\n\nVérifiez le format.`)
        addToHistory(plateText, null, selectedSystem)
      }
    } catch (error) {
      console.error("Erreur validation:", error)
      alert("Erreur lors de l'analyse. Réessayez.")
    } finally {
      setIsScanning(false)
    }
  }

  const handleScan = (plateText: string) => {
    const currentTime = Date.now()
    if (currentTime - lastAdTime > 180000) {
      setPendingPlateScan(plateText)
      setShowInterstitial(true)
      setLastAdTime(currentTime)
    } else {
      executeScan(plateText)
    }
  }

  const handleInterstitialClose = () => {
    setShowInterstitial(false)
    if (pendingPlateScan) {
      executeScan(pendingPlateScan)
      setPendingPlateScan(null)
    }
  }

  const handleBack = () => {
    if (['about', 'system-info', 'history', 'terms', 'swiss-system-info', 'swiss-codes', 'french-codes', 'camera-scan'].includes(currentState) && selectedSystem) {
        setCurrentState(selectedSystem);
    } 
    else if (currentState === "result" && selectedSystem) {
      setCurrentState(selectedSystem)
    } 
    else {
      setCurrentState("home")
      setSelectedSystem(null)
    }
    setScanResult(null)
    setScannedPlate("")
  }

  const handleHistoryEntrySelect = (entry: HistoryEntry) => {
    if (entry.result) {
      setScanResult(entry.result)
      setScannedPlate(entry.plateText)
      setSelectedSystem(entry.system)
      setCurrentState("result")
    } else {
      alert(`La plaque "${entry.plateText}" n'a pas été reconnue.`)
    }
  }

  const renderContent = () => {
    switch (currentState) {
      case "home":
        return (
          <div className="space-y-6">
            <SystemSelector onSelectSystem={handleSystemSelect} />
            <div>
              <Button variant="outline" onClick={() => setCurrentState("history")} className="w-full flex items-center justify-center gap-2 border-gray-300 hover:bg-gray-100">
                <History className="w-4 h-4" />
                Historique des scans
              </Button>
            </div>
            <AdBanner adUnitId={adIds.getHomePageBanner2()} />
          </div>
        )
      case "french":
        return <EnhancedFrenchScanner onScan={handleScan} isScanning={isScanning} onBack={handleBack} onSwitchToCamera={() => setCurrentState("camera-scan")} adUnitId={adIds.getFrenchScannerBannerId()} />

      case "swiss":
        return <SwissScanner onScan={handleScan} isScanning={isScanning} onBack={handleBack} onSwitchToCamera={() => setCurrentState("camera-scan")} adUnitId={adIds.getSwissInfoBannerId()} />
      
      case "camera-scan":
        return selectedSystem ? <CameraScanner onBack={handleBack} onScan={handleScan} system={selectedSystem} /> : null;
        
      case "result":
        return scanResult ? (
          isSwissPlate(scanResult) ? (
            <SwissPlateResult result={scanResult} scannedPlate={scannedPlate} onBack={handleBack} />
          ) : (
            <FrenchPlateResult result={scanResult as FrenchPlateMatch} scannedPlate={scannedPlate} onBack={handleBack} />
          )
        ) : null
      case "system-info": 
        return <FrenchSystemInfo onBack={handleBack} adUnitId={adIds.getFrenchDecodeBannerId()} />
      case "swiss-system-info": 
        return <SwissSystemInfo onBack={handleBack} adUnitId={adIds.getSwissDecodeBannerId()} />
      case "swiss-codes": 
        return <SwissCodeList onBack={handleBack} adUnitId={adIds.getSwissCodesBannerId()} />
      case "french-codes": 
        return <FrenchCodeList onBack={handleBack} adUnitId={adIds.getFrenchCodesBannerId()} />
      case "terms": return <TermsOfService onBack={handleBack} />
      case "about": return <FrenchCodeList onBack={handleBack} adUnitId={adIds.getFrenchCodesBannerId()} /> 
      case "history":
        return <HistoryView onBack={handleBack} onSelectEntry={handleHistoryEntrySelect} adUnitId={adIds.getHistoryBannerId()} />
      
      default: return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container max-w-md mx-auto p-4">
        <div className="text-center mb-8 pt-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="text-3xl">🌍</div>
            <h1 className="text-3xl font-bold text-blue-900">Diplo Scanner</h1>
          </div>
          <p className="text-blue-700">Plaques diplomatiques France & Suisse</p>
        </div>
        <div className="pb-8">{renderContent()}</div>
      </div>
      
      {showInterstitial && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-sm">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Publicité</h3>
              <p className="text-sm text-muted-foreground mb-6">
                L'application affiche ici une publicité interstitielle.
              </p>
              <Button onClick={handleInterstitialClose} className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                Fermer la publicité
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      <footer className="bg-white/60 border-t border-gray-200 py-4 mt-auto">
        <div className="text-center space-y-2">
          <p className="text-xs text-gray-500">Fait avec ❤️</p>
          <button onClick={() => setCurrentState("terms")} className="text-xs text-gray-500 hover:text-gray-700 transition-colors underline">
            Conditions d'Utilisation
          </button>
        </div>
      </footer>
    </div>
  )
}
