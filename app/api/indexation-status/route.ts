import { NextResponse } from "next/server"

export async function GET() {
  const pages = [
    { url: "/", title: "Scanner de Plaques Diplomatiques", priority: "high" },
    { url: "/french", title: "Scanner Français", priority: "high" },
    { url: "/swiss", title: "Scanner Suisse", priority: "high" },
    {
      url: "/qu-est-ce-qu-une-plaque-diplomatique",
      title: "Qu'est-ce qu'une plaque diplomatique ?",
      priority: "medium",
    },
    {
      url: "/comment-lire-une-plaque-diplomatique-francaise",
      title: "Comment lire une plaque diplomatique française ?",
      priority: "medium",
    },
    {
      url: "/comment-lire-une-plaque-diplomatique-suisse",
      title: "Comment lire une plaque diplomatique suisse ?",
      priority: "medium",
    },
    {
      url: "/liste-codes-pays-plaques-diplomatiques-francaises",
      title: "Liste des codes pays - Plaques françaises",
      priority: "medium",
    },
    { url: "/codes-diplomatiques-suisses", title: "Codes diplomatiques suisses", priority: "medium" },
    { url: "/plaque-immatriculation-verte", title: "Plaque d'immatriculation verte", priority: "medium" },
    { url: "/plaque-verte-et-orange", title: "Plaque verte et orange", priority: "medium" },
  ]

  const status = {
    totalPages: pages.length,
    indexedPages: pages.length, // Assuming all are indexed for demo
    pendingPages: 0,
    errorPages: 0,
    lastCheck: new Date().toISOString(),
    pages: pages.map((page) => ({
      ...page,
      status: "indexed",
      lastCrawled: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
    })),
  }

  return NextResponse.json(status, {
    headers: {
      "Cache-Control": "public, max-age=300",
    },
  })
}
