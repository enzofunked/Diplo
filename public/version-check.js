// Script pour vérifier la version déployée
console.log("🔍 Diplo Scanner - Version Check")
console.log("📅 Build Date:", new Date().toISOString())
console.log("✅ Features Check:")

// Vérifier si les favoris sont disponibles
function checkFavorites() {
  const favoritesButton = document.getElementById("favorites-button")
  console.log("⭐ Favoris Button:", favoritesButton ? "✅ Present" : "❌ Missing")

  if (favoritesButton) {
    console.log("📍 Favoris Button HTML:", favoritesButton.outerHTML)
  }
}

// Vérifier après le chargement du DOM
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", checkFavorites)
} else {
  checkFavorites()
}

// Vérifier périodiquement (pour les composants React)
setTimeout(checkFavorites, 1000)
setTimeout(checkFavorites, 3000)

// Fonction globale pour debug
window.debugDiploScanner = () => {
  console.log("🐛 Debug Info:")
  console.log("- URL:", window.location.href)
  console.log("- User Agent:", navigator.userAgent)
  console.log("- Local Storage:", Object.keys(localStorage))
  checkFavorites()
}

console.log("💡 Run window.debugDiploScanner() for more info")
