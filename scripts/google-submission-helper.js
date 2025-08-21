#!/usr/bin/env node

const priorityUrls = [
  "/comment-lire-une-plaque-diplomatique-suisse",
  "/comment-lire-une-plaque-diplomatique-francaise",
  "/qu-est-ce-qu-une-plaque-diplomatique",
  "/liste-codes-pays-plaques-diplomatiques-francaises",
  "/codes-diplomatiques-suisses",
  "/plaque-immatriculation-verte",
]

console.log("🔍 GUIDE DE SOUMISSION GOOGLE SEARCH CONSOLE")
console.log("=".repeat(60))

console.log("\n📋 ÉTAPES DÉTAILLÉES :")
console.log("1. Allez sur https://search.google.com/search-console/")
console.log("2. Sélectionnez diplo-scanner.com")
console.log("3. Utilisez l'outil d'inspection d'URL (barre de recherche en haut)")
console.log("4. Pour chaque URL ci-dessous :")

priorityUrls.forEach((url, index) => {
  console.log(`\n   ${index + 1}. URL: https://diplo-scanner.com${url}`)
  console.log(`      - Collez l'URL complète dans la barre de recherche`)
  console.log(`      - Appuyez sur Entrée`)
  console.log(`      - Cliquez sur "Demander l'indexation" si pas encore indexée`)
  console.log(`      - Attendez la confirmation`)
})

console.log("\n⚠️  LIMITES IMPORTANTES :")
console.log("- Maximum 10 URLs par jour par propriété")
console.log("- Soumettez 3 URLs par jour pour rester dans les limites")
console.log("- L'indexation peut prendre de quelques heures à plusieurs jours")

console.log("\n🎯 ORDRE DE PRIORITÉ RECOMMANDÉ :")
console.log("JOUR 1 (HAUTE PRIORITÉ) :")
console.log("- /comment-lire-une-plaque-diplomatique-suisse")
console.log("- /comment-lire-une-plaque-diplomatique-francaise")
console.log("- /qu-est-ce-qu-une-plaque-diplomatique")

console.log("\nJOUR 2 (MOYENNE PRIORITÉ) :")
console.log("- /liste-codes-pays-plaques-diplomatiques-francaises")
console.log("- /codes-diplomatiques-suisses")
console.log("- /plaque-immatriculation-verte")

console.log("\n✅ VÉRIFICATIONS AVANT SOUMISSION :")
console.log("- L'URL est accessible (pas d'erreur 404)")
console.log("- Le contenu est complet et de qualité")
console.log("- Les métadonnées SEO sont optimisées")
console.log("- Le robots.txt n'bloque pas l'URL")

console.log("\n🔗 LIENS UTILES :")
console.log("- Google Search Console: https://search.google.com/search-console/")
console.log("- Test d'URL: https://search.google.com/test/rich-results")
console.log("- Sitemap: https://diplo-scanner.com/sitemap.xml")

console.log("\n" + "=".repeat(60))
console.log("📞 Besoin d'aide ? Consultez /api/submit-to-google pour plus de détails")
