const priorityUrls = [
  "https://diplo-scanner.com/",
  "https://diplo-scanner.com/french",
  "https://diplo-scanner.com/swiss",
  "https://diplo-scanner.com/qu-est-ce-qu-une-plaque-diplomatique",
  "https://diplo-scanner.com/comment-lire-une-plaque-diplomatique-francaise",
  "https://diplo-scanner.com/comment-lire-une-plaque-diplomatique-suisse",
  "https://diplo-scanner.com/liste-codes-pays-plaques-diplomatiques-francaises",
  "https://diplo-scanner.com/codes-diplomatiques-suisses",
  "https://diplo-scanner.com/privileges-immunites-plaques-diplomatiques",
  "https://diplo-scanner.com/plaque-immatriculation-verte",
  "https://diplo-scanner.com/plaque-verte-et-orange",
]

async function googleSubmissionHelper() {
  console.log("📋 Google Search Console Submission Helper\n")

  console.log("🎯 Priority URLs to submit for re-indexing:")
  priorityUrls.forEach((url, index) => {
    console.log(`${index + 1}. ${url}`)
  })

  console.log("\n📝 Manual steps in Google Search Console:")
  console.log("1. Go to https://search.google.com/search-console/")
  console.log("2. Select your diplo-scanner.com property")
  console.log('3. Go to "URL Inspection" tool')
  console.log("4. For each priority URL above:")
  console.log("   a) Paste the URL and press Enter")
  console.log('   b) Click "Request Indexing" if available')
  console.log("   c) Wait for confirmation")

  console.log("\n🗺️ Sitemap submission:")
  console.log('1. Go to "Sitemaps" section')
  console.log("2. Add new sitemap: https://diplo-scanner.com/api/sitemap")
  console.log('3. Click "Submit"')

  console.log("\n⚡ Batch submission script (copy-paste in console):")
  console.log(`
const urls = ${JSON.stringify(priorityUrls, null, 2)};

// This would be used with Google Search Console API
console.log('URLs ready for batch submission:', urls.length);
urls.forEach((url, i) => {
  console.log(\`\${i+1}. \${url}\`);
});
`)

  console.log("\n📊 Monitor these metrics:")
  console.log("• Coverage report (indexed vs not indexed)")
  console.log("• Page indexing status")
  console.log("• Core Web Vitals")
  console.log("• Mobile usability")
  console.log("• Search performance")
}

googleSubmissionHelper().catch(console.error)
