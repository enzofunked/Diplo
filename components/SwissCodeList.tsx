"use client"

import { useState } from "react"
import { ArrowLeft, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { swissDiplomaticCodes } from "../data/swiss-diplomatic-codes"

interface SwissCodeListProps {
  onBack: () => void;
}

export default function SwissCodeList({ onBack }: SwissCodeListProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCodes = swissDiplomaticCodes.filter(
    (code) =>
      code.countryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      code.code.toString().includes(searchTerm)
  );

  const groupedCodes = filteredCodes.reduce((acc, code) => {
    const type = code.type === 'country' ? 'Pays et territoires' : 'Organisations et délégations';
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(code);
    return acc;
  }, {} as Record<string, typeof swissDiplomaticCodes>);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <h2 className="text-lg font-semibold">Codes diplomatiques suisses</h2>
          </div>

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
            {Object.entries(groupedCodes).map(([group, codes]) => (
              <Card key={group}>
                <CardHeader>
                  <CardTitle className="text-base">{group}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {codes.map((code) => (
                      <div key={code.code} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{code.flagEmoji}</span>
                          <span>{code.countryName}</span>
                        </div>
                        <Badge variant="secondary" className="font-mono">{code.code}</Badge>
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
