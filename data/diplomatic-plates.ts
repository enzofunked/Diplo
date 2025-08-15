export interface DiplomaticPlate {
  countryCode: string
  countryName: string
  plateFormats: {
    format: string
    type: string
    description: string
    regex: string
  }[]
  embassyInfo: {
    address: string
    phone: string
    website: string
  }
  flagEmoji: string
  capital: string
  region: string
}

export const diplomaticPlatesDB: DiplomaticPlate[] = [
  // EUROPE
  {
    countryCode: "FR",
    countryName: "France",
    plateFormats: [
      {
        format: "CMD XXX XX",
        type: "Ambassador",
        description: "Chef de Mission Diplomatique",
        regex: "^CMD\\s\\d{3}\\s\\d{2}$",
      },
      {
        format: "CD XXX XX",
        type: "Diplomatic Staff",
        description: "Corps Diplomatique",
        regex: "^CD\\s\\d{3}\\s\\d{2}$",
      },
      {
        format: "CC XXX XX",
        type: "Consular Staff",
        description: "Corps Consulaire",
        regex: "^CC\\s\\d{3}\\s\\d{2}$",
      },
    ],
    embassyInfo: {
      address: "58-60 Knightsbridge, London SW1X 7JT",
      phone: "+44 20 7073 1000",
      website: "uk.ambafrance.org",
    },
    flagEmoji: "🇫🇷",
    capital: "Paris",
    region: "Europe",
  },
  {
    countryCode: "DE",
    countryName: "Germany",
    plateFormats: [
      {
        format: "0-XXX-XX",
        type: "Diplomatic",
        description: "Diplomatic Corps",
        regex: "^0-\\d{3}-\\d{2}$",
      },
      {
        format: "0-XXX-XXX",
        type: "Consular",
        description: "Consular Corps",
        regex: "^0-\\d{3}-\\d{3}$",
      },
    ],
    embassyInfo: {
      address: "23 Belgrave Square, London SW1X 8PZ",
      phone: "+44 20 7824 1300",
      website: "london.diplo.de",
    },
    flagEmoji: "🇩🇪",
    capital: "Berlin",
    region: "Europe",
  },
  {
    countryCode: "IT",
    countryName: "Italy",
    plateFormats: [
      {
        format: "CD XXX AB",
        type: "Diplomatic",
        description: "Corps Diplomatique",
        regex: "^CD\\s\\d{3}\\s[A-Z]{2}$",
      },
      {
        format: "CC XXX AB",
        type: "Consular",
        description: "Corps Consulaire",
        regex: "^CC\\s\\d{3}\\s[A-Z]{2}$",
      },
    ],
    embassyInfo: {
      address: "14 Three Kings Yard, London W1K 4EH",
      phone: "+44 20 7312 2200",
      website: "amblondra.esteri.it",
    },
    flagEmoji: "🇮🇹",
    capital: "Rome",
    region: "Europe",
  },
  {
    countryCode: "ES",
    countryName: "Spain",
    plateFormats: [
      {
        format: "CD XXXX",
        type: "Diplomatic",
        description: "Cuerpo Diplomático",
        regex: "^CD\\s\\d{4}$",
      },
      {
        format: "CC XXXX",
        type: "Consular",
        description: "Cuerpo Consular",
        regex: "^CC\\s\\d{4}$",
      },
    ],
    embassyInfo: {
      address: "39 Chesham Place, London SW1X 8SB",
      phone: "+44 20 7235 5555",
      website: "exteriores.gob.es/embajadas/londres",
    },
    flagEmoji: "🇪🇸",
    capital: "Madrid",
    region: "Europe",
  },
  {
    countryCode: "CH",
    countryName: "Switzerland",
    plateFormats: [
      {
        format: "CD XXXX",
        type: "Diplomatic",
        description: "Corps Diplomatique",
        regex: "^CD\\s\\d{4}$",
      },
      {
        format: "CC XXXX",
        type: "Consular",
        description: "Corps Consulaire",
        regex: "^CC\\s\\d{4}$",
      },
      {
        format: "AT XXXX",
        type: "Administrative",
        description: "Personnel Administratif et Technique",
        regex: "^AT\\s\\d{4}$",
      },
    ],
    embassyInfo: {
      address: "16-18 Montagu Place, London W1H 2BQ",
      phone: "+44 20 7616 6000",
      website: "eda.admin.ch/london",
    },
    flagEmoji: "🇨🇭",
    capital: "Bern",
    region: "Europe",
  },
  {
    countryCode: "BE",
    countryName: "Belgium",
    plateFormats: [
      {
        format: "CD XXXX",
        type: "Diplomatic",
        description: "Corps Diplomatique",
        regex: "^CD\\s\\d{4}$",
      },
      {
        format: "CC XXXX",
        type: "Consular",
        description: "Corps Consulaire",
        regex: "^CC\\s\\d{4}$",
      },
    ],
    embassyInfo: {
      address: "17 Grosvenor Crescent, London SW1X 7EE",
      phone: "+44 20 7470 3700",
      website: "diplomatie.belgium.be/london",
    },
    flagEmoji: "🇧🇪",
    capital: "Brussels",
    region: "Europe",
  },
  {
    countryCode: "NL",
    countryName: "Netherlands",
    plateFormats: [
      {
        format: "CDJ XX-XX",
        type: "Diplomatic",
        description: "Corps Diplomatique",
        regex: "^CDJ\\s\\d{2}-\\d{2}$",
      },
      {
        format: "CDA XX-XX",
        type: "Administrative",
        description: "Administrative Staff",
        regex: "^CDA\\s\\d{2}-\\d{2}$",
      },
    ],
    embassyInfo: {
      address: "38 Hyde Park Gate, London SW7 5DP",
      phone: "+44 20 7590 3200",
      website: "unitedkingdom.nlembassy.org",
    },
    flagEmoji: "🇳🇱",
    capital: "Amsterdam",
    region: "Europe",
  },
  {
    countryCode: "AT",
    countryName: "Austria",
    plateFormats: [
      {
        format: "CD XXXX",
        type: "Diplomatic",
        description: "Corps Diplomatique",
        regex: "^CD\\s\\d{4}$",
      },
    ],
    embassyInfo: {
      address: "18 Belgrave Mews West, London SW1X 8HU",
      phone: "+44 20 7344 3250",
      website: "bmeia.gv.at/london",
    },
    flagEmoji: "🇦🇹",
    capital: "Vienna",
    region: "Europe",
  },
  {
    countryCode: "SE",
    countryName: "Sweden",
    plateFormats: [
      {
        format: "CD XXX XX",
        type: "Diplomatic",
        description: "Diplomatic Corps",
        regex: "^CD\\s\\d{3}\\s\\d{2}$",
      },
    ],
    embassyInfo: {
      address: "11 Montagu Place, London W1H 2AL",
      phone: "+44 20 7917 6400",
      website: "swedenabroad.se/london",
    },
    flagEmoji: "🇸🇪",
    capital: "Stockholm",
    region: "Europe",
  },
  {
    countryCode: "NO",
    countryName: "Norway",
    plateFormats: [
      {
        format: "CD XXXXX",
        type: "Diplomatic",
        description: "Diplomatic Corps",
        regex: "^CD\\s\\d{5}$",
      },
    ],
    embassyInfo: {
      address: "25 Belgrave Square, London SW1X 8QD",
      phone: "+44 20 7591 5500",
      website: "norway.no/london",
    },
    flagEmoji: "🇳🇴",
    capital: "Oslo",
    region: "Europe",
  },
  {
    countryCode: "DK",
    countryName: "Denmark",
    plateFormats: [
      {
        format: "CD XXXXX",
        type: "Diplomatic",
        description: "Diplomatic Corps",
        regex: "^CD\\s\\d{5}$",
      },
    ],
    embassyInfo: {
      address: "55 Sloane Street, London SW1X 9SR",
      phone: "+44 20 7333 0200",
      website: "storbritannien.um.dk",
    },
    flagEmoji: "🇩🇰",
    capital: "Copenhagen",
    region: "Europe",
  },
  {
    countryCode: "PL",
    countryName: "Poland",
    plateFormats: [
      {
        format: "CD XXXXX",
        type: "Diplomatic",
        description: "Corps Diplomatique",
        regex: "^CD\\s\\d{5}$",
      },
    ],
    embassyInfo: {
      address: "47 Portland Place, London W1B 1JH",
      phone: "+44 20 7291 3520",
      website: "london.msz.gov.pl",
    },
    flagEmoji: "🇵🇱",
    capital: "Warsaw",
    region: "Europe",
  },
  {
    countryCode: "PT",
    countryName: "Portugal",
    plateFormats: [
      {
        format: "CD-XX-XX",
        type: "Diplomatic",
        description: "Corps Diplomatique",
        regex: "^CD-\\d{2}-\\d{2}$",
      },
    ],
    embassyInfo: {
      address: "11 Belgrave Square, London SW1X 8PP",
      phone: "+44 20 7235 5331",
      website: "londres.embaixadaportugal.mne.pt",
    },
    flagEmoji: "🇵🇹",
    capital: "Lisbon",
    region: "Europe",
  },
  {
    countryCode: "GR",
    countryName: "Greece",
    plateFormats: [
      {
        format: "CD XXXX",
        type: "Diplomatic",
        description: "Diplomatic Corps",
        regex: "^CD\\s\\d{4}$",
      },
    ],
    embassyInfo: {
      address: "1A Holland Park, London W11 3TP",
      phone: "+44 20 7221 6467",
      website: "mfa.gr/london",
    },
    flagEmoji: "🇬🇷",
    capital: "Athens",
    region: "Europe",
  },

  // AMERICAS
  {
    countryCode: "US",
    countryName: "United States",
    plateFormats: [
      {
        format: "D XXXXX",
        type: "Diplomatic",
        description: "Diplomatic Corps",
        regex: "^D\\s\\d{5}$",
      },
      {
        format: "C XXXXX",
        type: "Consular",
        description: "Consular Corps",
        regex: "^C\\s\\d{5}$",
      },
      {
        format: "S XXXXX",
        type: "Staff",
        description: "Administrative Staff",
        regex: "^S\\s\\d{5}$",
      },
    ],
    embassyInfo: {
      address: "33 Nine Elms Lane, London SW11 7US",
      phone: "+44 20 7499 9000",
      website: "uk.usembassy.gov",
    },
    flagEmoji: "🇺🇸",
    capital: "Washington D.C.",
    region: "Americas",
  },
  {
    countryCode: "CA",
    countryName: "Canada",
    plateFormats: [
      {
        format: "CD XXXX",
        type: "Diplomatic",
        description: "Corps Diplomatique",
        regex: "^CD\\s\\d{4}$",
      },
    ],
    embassyInfo: {
      address: "Canada House, Trafalgar Square, London SW1Y 5BJ",
      phone: "+44 20 7004 6000",
      website: "international.gc.ca/country-pays/united_kingdom-royaume_uni",
    },
    flagEmoji: "🇨🇦",
    capital: "Ottawa",
    region: "Americas",
  },
  {
    countryCode: "MX",
    countryName: "Mexico",
    plateFormats: [
      {
        format: "CD XXXX",
        type: "Diplomatic",
        description: "Cuerpo Diplomático",
        regex: "^CD\\s\\d{4}$",
      },
    ],
    embassyInfo: {
      address: "16 St George Street, London W1S 1FD",
      phone: "+44 20 7499 8586",
      website: "embamex.sre.gob.mx/reinounido",
    },
    flagEmoji: "🇲🇽",
    capital: "Mexico City",
    region: "Americas",
  },
  {
    countryCode: "BR",
    countryName: "Brazil",
    plateFormats: [
      {
        format: "CD XXXX",
        type: "Diplomatic",
        description: "Corpo Diplomático",
        regex: "^CD\\s\\d{4}$",
      },
    ],
    embassyInfo: {
      address: "14-16 Cockspur Street, London SW1Y 5BL",
      phone: "+44 20 7747 4500",
      website: "londres.itamaraty.gov.br",
    },
    flagEmoji: "🇧🇷",
    capital: "Brasília",
    region: "Americas",
  },
  {
    countryCode: "AR",
    countryName: "Argentina",
    plateFormats: [
      {
        format: "CD XXXX",
        type: "Diplomatic",
        description: "Cuerpo Diplomático",
        regex: "^CD\\s\\d{4}$",
      },
    ],
    embassyInfo: {
      address: "65 Brook Street, London W1K 4AH",
      phone: "+44 20 7318 1300",
      website: "einar.cancilleria.gob.ar",
    },
    flagEmoji: "🇦🇷",
    capital: "Buenos Aires",
    region: "Americas",
  },

  // ASIA-PACIFIC
  {
    countryCode: "CN",
    countryName: "China",
    plateFormats: [
      {
        format: "使 XXXXX",
        type: "Diplomatic",
        description: "Diplomatic Mission",
        regex: "^使\\s\\d{5}$",
      },
      {
        format: "领 XXXXX",
        type: "Consular",
        description: "Consular Mission",
        regex: "^领\\s\\d{5}$",
      },
    ],
    embassyInfo: {
      address: "49-51 Portland Place, London W1B 1JL",
      phone: "+44 20 7299 4049",
      website: "chinese-embassy.org.uk",
    },
    flagEmoji: "🇨🇳",
    capital: "Beijing",
    region: "Asia",
  },
  {
    countryCode: "JP",
    countryName: "Japan",
    plateFormats: [
      {
        format: "外 XX-XX",
        type: "Diplomatic",
        description: "Diplomatic Mission",
        regex: "^外\\s\\d{2}-\\d{2}$",
      },
    ],
    embassyInfo: {
      address: "101-104 Piccadilly, London W1J 7JT",
      phone: "+44 20 7465 6500",
      website: "uk.emb-japan.go.jp",
    },
    flagEmoji: "🇯🇵",
    capital: "Tokyo",
    region: "Asia",
  },
  {
    countryCode: "KR",
    countryName: "South Korea",
    plateFormats: [
      {
        format: "외 XXXX",
        type: "Diplomatic",
        description: "Diplomatic Mission",
        regex: "^외\\s\\d{4}$",
      },
    ],
    embassyInfo: {
      address: "60 Buckingham Gate, London SW1E 6AJ",
      phone: "+44 20 7227 5500",
      website: "overseas.mofa.go.kr/gb-en",
    },
    flagEmoji: "🇰🇷",
    capital: "Seoul",
    region: "Asia",
  },
  {
    countryCode: "IN",
    countryName: "India",
    plateFormats: [
      {
        format: "CD XX XXXX",
        type: "Diplomatic",
        description: "Corps Diplomatique",
        regex: "^CD\\s\\d{2}\\s\\d{4}$",
      },
    ],
    embassyInfo: {
      address: "India House, Aldwych, London WC2B 4NA",
      phone: "+44 20 7836 8484",
      website: "hcilondon.gov.in",
    },
    flagEmoji: "🇮🇳",
    capital: "New Delhi",
    region: "Asia",
  },
  {
    countryCode: "AU",
    countryName: "Australia",
    plateFormats: [
      {
        format: "CD XXXX",
        type: "Diplomatic",
        description: "Corps Diplomatique",
        regex: "^CD\\s\\d{4}$",
      },
    ],
    embassyInfo: {
      address: "Australia House, Strand, London WC2B 4LA",
      phone: "+44 20 7379 4334",
      website: "uk.embassy.gov.au",
    },
    flagEmoji: "🇦🇺",
    capital: "Canberra",
    region: "Oceania",
  },
  {
    countryCode: "NZ",
    countryName: "New Zealand",
    plateFormats: [
      {
        format: "CD XXXX",
        type: "Diplomatic",
        description: "Corps Diplomatique",
        regex: "^CD\\s\\d{4}$",
      },
    ],
    embassyInfo: {
      address: "New Zealand House, 80 Haymarket, London SW1Y 4TQ",
      phone: "+44 20 7930 8422",
      website: "nzembassy.com/united-kingdom",
    },
    flagEmoji: "🇳🇿",
    capital: "Wellington",
    region: "Oceania",
  },

  // MIDDLE EAST & AFRICA
  {
    countryCode: "RU",
    countryName: "Russia",
    plateFormats: [
      {
        format: "D XXX ABC",
        type: "Diplomatic",
        description: "Diplomatic Corps",
        regex: "^D\\s\\d{3}\\s[A-Z]{3}$",
      },
    ],
    embassyInfo: {
      address: "13 Kensington Palace Gardens, London W8 4QX",
      phone: "+44 20 7229 6412",
      website: "rusemb.org.uk",
    },
    flagEmoji: "🇷🇺",
    capital: "Moscow",
    region: "Europe/Asia",
  },
  {
    countryCode: "SA",
    countryName: "Saudi Arabia",
    plateFormats: [
      {
        format: "CD XXXX",
        type: "Diplomatic",
        description: "Corps Diplomatique",
        regex: "^CD\\s\\d{4}$",
      },
    ],
    embassyInfo: {
      address: "30 Charles Street, London W1J 5DZ",
      phone: "+44 20 7917 3000",
      website: "saudiembassy.org.uk",
    },
    flagEmoji: "🇸🇦",
    capital: "Riyadh",
    region: "Middle East",
  },
  {
    countryCode: "AE",
    countryName: "United Arab Emirates",
    plateFormats: [
      {
        format: "CD XXXX",
        type: "Diplomatic",
        description: "Corps Diplomatique",
        regex: "^CD\\s\\d{4}$",
      },
    ],
    embassyInfo: {
      address: "30 Prince's Gate, London SW7 1PT",
      phone: "+44 20 7581 1281",
      website: "london.mofaic.gov.ae",
    },
    flagEmoji: "🇦🇪",
    capital: "Abu Dhabi",
    region: "Middle East",
  },
  {
    countryCode: "IL",
    countryName: "Israel",
    plateFormats: [
      {
        format: "CD XXXX",
        type: "Diplomatic",
        description: "Corps Diplomatique",
        regex: "^CD\\s\\d{4}$",
      },
    ],
    embassyInfo: {
      address: "2 Palace Green, London W8 4QB",
      phone: "+44 20 7957 9500",
      website: "embassies.gov.il/london",
    },
    flagEmoji: "🇮🇱",
    capital: "Jerusalem",
    region: "Middle East",
  },
  {
    countryCode: "ZA",
    countryName: "South Africa",
    plateFormats: [
      {
        format: "CD XXXX",
        type: "Diplomatic",
        description: "Corps Diplomatique",
        regex: "^CD\\s\\d{4}$",
      },
    ],
    embassyInfo: {
      address: "South Africa House, Trafalgar Square, London WC2N 5DP",
      phone: "+44 20 7451 7299",
      website: "dirco.gov.za/london",
    },
    flagEmoji: "🇿🇦",
    capital: "Cape Town",
    region: "Africa",
  },
  {
    countryCode: "NG",
    countryName: "Nigeria",
    plateFormats: [
      {
        format: "CD XXXX",
        type: "Diplomatic",
        description: "Corps Diplomatique",
        regex: "^CD\\s\\d{4}$",
      },
    ],
    embassyInfo: {
      address: "Nigeria House, 9 Northumberland Avenue, London WC2N 5BX",
      phone: "+44 20 7839 1244",
      website: "nigeriaembassyuk.org",
    },
    flagEmoji: "🇳🇬",
    capital: "Abuja",
    region: "Africa",
  },

  // INTERNATIONAL ORGANIZATIONS
  {
    countryCode: "EU",
    countryName: "European Union",
    plateFormats: [
      {
        format: "EUR XXXX",
        type: "Diplomatic",
        description: "European Union Delegation",
        regex: "^EUR\\s\\d{4}$",
      },
    ],
    embassyInfo: {
      address: "32 Smith Square, London SW1P 3EU",
      phone: "+44 20 7973 1992",
      website: "eeas.europa.eu/delegations/united-kingdom",
    },
    flagEmoji: "🇪🇺",
    capital: "Brussels",
    region: "International",
  },
  {
    countryCode: "UN",
    countryName: "United Nations",
    plateFormats: [
      {
        format: "UN XXXX",
        type: "International",
        description: "United Nations Organization",
        regex: "^UN\\s\\d{4}$",
      },
    ],
    embassyInfo: {
      address: "Millbank Tower, 21-24 Millbank, London SW1P 4QP",
      phone: "+44 20 7630 1981",
      website: "unric.org/en/united-nations-information-centre-london",
    },
    flagEmoji: "🇺🇳",
    capital: "New York",
    region: "International",
  },

  // UK (for reference)
  {
    countryCode: "GB",
    countryName: "United Kingdom",
    plateFormats: [
      {
        format: "X XXX ABC",
        type: "Diplomatic",
        description: "Diplomatic Corps",
        regex: "^X\\s\\d{3}\\s[A-Z]{3}$",
      },
    ],
    embassyInfo: {
      address: "Foreign, Commonwealth & Development Office, King Charles Street, London SW1A 2AH",
      phone: "+44 20 7008 1500",
      website: "gov.uk/government/organisations/foreign-commonwealth-development-office",
    },
    flagEmoji: "🇬🇧",
    capital: "London",
    region: "Europe",
  },
]

// Helper functions
export function getCountriesByRegion(): Record<string, DiplomaticPlate[]> {
  return diplomaticPlatesDB.reduce(
    (acc, country) => {
      if (!acc[country.region]) {
        acc[country.region] = []
      }
      acc[country.region].push(country)
      return acc
    },
    {} as Record<string, DiplomaticPlate[]>,
  )
}

export function getTotalCountriesCount(): number {
  return diplomaticPlatesDB.length
}

export function getPlateFormatsCount(): number {
  return diplomaticPlatesDB.reduce((total, country) => total + country.plateFormats.length, 0)
}
