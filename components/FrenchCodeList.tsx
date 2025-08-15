"use client"

import { useState } from "react"
import { ArrowLeft, Search, X, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { frenchDiplomaticCodes } from "../data/french-diplomatic-codes"

interface FrenchCodeListProps {
  onBack: () => void;
}

export default function FrenchCodeList({ onBack }: FrenchCodeListProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const sortedCodes = [...frenchDiplomaticCodes].sort((a, b) => 
    a.countryName.localeCompare(b.countryName)
  );

  const filteredCodes = sortedCodes.filter(
    (code) =>
      code.countryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      code.code.toString().includes(searchTerm) ||
      (code.alternativeCode && code.alternativeCode.toString().includes(searchTerm))
  );

  const groupedCodes = filteredCodes.reduce((acc, code) => {
    const region = code.region || 'Autres';
    if (!acc[region]) {
      acc[region] = [];
    }
    acc[region].push(code);
    return acc;
  }, {} as Record<string, typeof frenchDiplomaticCodes>);
  
  const regionOrder = ['Europe', 'Africa', 'Americas', 'Asia', 'Middle East', 'Oceania', 'International', 'Autres'];
  const sortedGroupedCodes = Object.entries(groupedCodes).sort(([regionA], [regionB]) => {
    const indexA = regionOrder.indexOf(regionA);
    const indexB = regionOrder.indexOf(regionB);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });

  return (
    <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto">
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" onClick={onBack}>
                    <ArrowLeft className="w-4 h-4" />
                    </Button>
                    <h2 className="text-lg font-semibold">Codes diplomatiques français</h2>
                </div>

                <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                        <h4 className="font-semibold text-blue-800">Pourquoi deux codes ?</h4>
                        <p className="text-xs text-blue-700 mt-1">
                            Certains pays ont un code de base pour leur ambassade et un code alternatif (supérieur à 200) pour leurs délégations auprès d'organisations internationales (OCDE, UNESCO).
                        </p>
                        </div>
                    </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                        placeholder="Rechercher un pays ou un code..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                        />
                        {searchTerm && (
                        <Button
                            variant="ghost"
                            size="sm"
                            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
                            onClick={() => setSearchTerm("")}
                        >
                            <X className="w-4 h-4" />
                        </Button>
                        )}
                    </div>
                    </CardContent>
                </Card>

                <div className="space-y-4">
                    {sortedGroupedCodes.map(([region, codes]) => (
                    <Card key={region}>
                        <CardHeader>
                        <CardTitle className="text-base">{region}</CardTitle>
                        </CardHeader>
                        <CardContent>
                        <div className="space-y-3">
                            {codes.map((code) => (
                            <div key={code.code} className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                <span className="text-xl">{code.flagEmoji}</span>
                                <span>{code.countryName}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                {code.alternativeCode && (
                                    <Badge variant="outline" className="font-mono bg-gray-100">{code.alternativeCode}</Badge>
                                )}
                                <Badge variant="secondary" className="font-mono">{code.code}</Badge>
                                </div>
                            </div>
                            ))}
                        </div>
                        </CardContent>
                    </Card>
                    ))}
                    {filteredCodes.length === 0 && (
                    <p className="text-center text-muted-foreground py-8">Aucun résultat trouvé.</p>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
}
