"use client"

import Image from "next/image"

interface EstimationData {
  locationType: string
  surface: string
  frequency: string
  hygienProducts: {
    diffuseurParfum: number
    diffuseurParfumGamme: string
    secheServiette: number
    distributeurSavon: number
    distributeurSavonGamme: string
    distributeurServiette: number
    distributeurServietteGamme: string
    secheMains: number
    secheMainsGamme: string
    savons: number
    papierToilettes: number
    serviettePapier: number
  }
  contactInfo: {
    name: string
    email: string
    phone: string
    company: string
    address?: string // Added address field to interface
  }
}

interface QuotePreviewProps {
  estimation: EstimationData
  estimatedPrice: number
  onConfirm: () => void
  onEdit: () => void
}

export default function QuotePreview({ estimation, estimatedPrice, onConfirm, onEdit }: QuotePreviewProps) {
  const locationTypes = {
    bureaux: "Bureaux",
    commerces: "Commerces",
    sante: "Établissements de santé",
    hotels: "Hôtels / Restaurants",
    coproprietes: "Copropriétés",
  }

  const hasEquipment = Object.entries(estimation.hygienProducts).some(
    ([key, value]) => !key.includes("Gamme") && value > 0,
  )

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="border-b pb-4 sm:pb-6 mb-4 sm:mb-6">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
          {/* Company Info with Logo */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="flex-shrink-0">
              <Image
                src="/images/uct-logo.png"
                alt="UCT Azur Logo"
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20"
              />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-teal-600">UCT AZUR</h1>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mt-1">DEVIS DE NETTOYAGE</h2>
              <div className="mt-2 text-xs sm:text-sm text-gray-600 space-y-1">
                <p>
                  <span className="font-medium">SIRET:</span> 933 186 470 00011
                </p>
                <p>
                  <span className="font-medium">Forme juridique:</span> SAS
                </p>
                <p>
                  <span className="font-medium">RCS:</span> 933 186 470 R.C.S. Nice
                </p>
                <p>
                  <span className="font-medium">Adresse:</span> RESIDENCE LE CHANTEMERLE B,
                  <br />
                  25 ALLEE DU STADE, 06500 MENTON
                </p>
              </div>
            </div>
          </div>

          {/* Quote Info */}
          <div className="text-left lg:text-right text-sm text-gray-600 flex-shrink-0">
            <p>
              <span className="font-medium">Date:</span> {new Date().toLocaleDateString("fr-FR")}
            </p>
            <p>
              <span className="font-medium">Devis N°:</span> UCT-{Date.now().toString().slice(-6)}
            </p>
          </div>
        </div>
      </div>

      {/* Client Information */}
      <div className="mb-6 sm:mb-8">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 border-l-4 border-teal-500 pl-3">
          INFORMATIONS CLIENT
        </h3>
        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1">
              <p className="text-sm sm:text-base">
                <span className="font-medium">Nom:</span> {estimation.contactInfo.name}
              </p>
              {estimation.contactInfo.company && (
                <p className="text-sm sm:text-base">
                  <span className="font-medium">Entreprise:</span> {estimation.contactInfo.company}
                </p>
              )}
              {estimation.contactInfo.address && (
                <p className="text-sm sm:text-base">
                  <span className="font-medium">Adresse du local:</span> {estimation.contactInfo.address}
                </p>
              )}
            </div>
            <div className="space-y-1">
              <p className="text-sm sm:text-base">
                <span className="font-medium">Email:</span> {estimation.contactInfo.email}
              </p>
              <p className="text-sm sm:text-base">
                <span className="font-medium">Téléphone:</span> {estimation.contactInfo.phone}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="mb-6 sm:mb-8">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 border-l-4 border-teal-500 pl-3">
          DÉTAILS DU SERVICE
        </h3>
        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <div>
              <p className="font-medium text-gray-700 text-sm sm:text-base">Type de locaux</p>
              <p className="text-gray-600 text-sm sm:text-base">
                {locationTypes[estimation.locationType as keyof typeof locationTypes]}
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-700 text-sm sm:text-base">Surface</p>
              <p className="text-gray-600 text-sm sm:text-base">{estimation.surface} m²</p>
            </div>
            <div>
              <p className="font-medium text-gray-700 text-sm sm:text-base">Fréquence</p>
              <p className="text-gray-600 text-sm sm:text-base">{estimation.frequency} interventions/semaine</p>
            </div>
          </div>
        </div>
      </div>

      {/* Equipment Details */}
      {hasEquipment && (
        <div className="mb-6 sm:mb-8">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 border-l-4 border-teal-500 pl-3">
            ÉQUIPEMENTS D'HYGIÈNE
          </h3>
          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3">
              {estimation.hygienProducts.diffuseurParfum > 0 && (
                <div className="flex justify-between text-sm sm:text-base">
                  <span>Diffuseur parfum ({estimation.hygienProducts.diffuseurParfumGamme})</span>
                  <span className="font-medium">{estimation.hygienProducts.diffuseurParfum}</span>
                </div>
              )}
              {estimation.hygienProducts.secheServiette > 0 && (
                <div className="flex justify-between text-sm sm:text-base">
                  <span>Sèche-serviettes</span>
                  <span className="font-medium">{estimation.hygienProducts.secheServiette}</span>
                </div>
              )}
              {estimation.hygienProducts.distributeurSavon > 0 && (
                <div className="flex justify-between text-sm sm:text-base">
                  <span>Distributeur savon ({estimation.hygienProducts.distributeurSavonGamme})</span>
                  <span className="font-medium">{estimation.hygienProducts.distributeurSavon}</span>
                </div>
              )}
              {estimation.hygienProducts.distributeurServiette > 0 && (
                <div className="flex justify-between text-sm sm:text-base">
                  <span>Distributeur papier toilette ({estimation.hygienProducts.distributeurServietteGamme})</span>
                  <span className="font-medium">{estimation.hygienProducts.distributeurServiette}</span>
                </div>
              )}
              {estimation.hygienProducts.secheMains > 0 && (
                <div className="flex justify-between text-sm sm:text-base">
                  <span>Sèche-mains ({estimation.hygienProducts.secheMainsGamme})</span>
                  <span className="font-medium">{estimation.hygienProducts.secheMains}</span>
                </div>
              )}
              {estimation.hygienProducts.savons > 0 && (
                <div className="flex justify-between text-sm sm:text-base">
                  <span>Savons</span>
                  <span className="font-medium">{estimation.hygienProducts.savons}</span>
                </div>
              )}
              {estimation.hygienProducts.papierToilettes > 0 && (
                <div className="flex justify-between text-sm sm:text-base">
                  <span>Papier toilettes</span>
                  <span className="font-medium">{estimation.hygienProducts.papierToilettes}</span>
                </div>
              )}
              {estimation.hygienProducts.serviettePapier > 0 && (
                <div className="flex justify-between text-sm sm:text-base">
                  <span>Serviettes papier</span>
                  <span className="font-medium">{estimation.hygienProducts.serviettePapier}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Price */}
      <div className="mb-6 sm:mb-8">
        <div className="bg-teal-50 border border-teal-200 p-4 sm:p-6 rounded-lg">
          <div className="text-center">
            <p className="text-base sm:text-lg text-gray-700 mb-2">Prix estimé mensuel</p>
            <p className="text-2xl sm:text-3xl font-bold text-teal-600">{estimatedPrice}€ HT/mois</p>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Cette estimation est indicative. Un devis précis sera établi après visite gratuite.
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        <button
          onClick={onEdit}
          className="w-full sm:w-auto px-4 sm:px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base"
        >
          Modifier les informations
        </button>
        <button
          onClick={onConfirm}
          className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium text-sm sm:text-base"
        >
          Confirmer et signer le devis
        </button>
      </div>
    </div>
  )
}
