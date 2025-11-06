import { CheckCircle2 } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="mt-20 mb-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-4">À propos de UCT Azur</h2>

        <p className="text-center text-lg text-muted-foreground mb-8">
          Votre partenaire de confiance pour un environnement professionnel impeccable
        </p>

        <div className="space-y-6">
          <p className="text-base leading-relaxed text-muted-foreground">
            Fondée sur la Côte d&#39;Azur, UCT Azur est une entreprise de propreté professionnelle qui accompagne les entreprises, commerces, hôtels, copropriétés et chantiers dans les Alpes-Maritimes, Monaco et le Var. Sous la direction de M. Saïdi, Président, et d&#39;Enzo Funke, Directeur Général, nous avons bâti notre réputation sur l&#39;excellence du service et la proximité avec nos clients.
          </p>

          <p className="text-base leading-relaxed text-muted-foreground">
            Notre approche repose sur un principe simple : chaque client bénéficie d'un agent référent dédié qui connaît
            parfaitement ses locaux et ses exigences. Ce suivi personnalisé, associé à un planning structuré et des
            contrôles qualité réguliers, garantit une propreté irréprochable au quotidien. Nous utilisons exclusivement
            des produits éco-labellisés, respectueux de l'environnement et de la santé de vos collaborateurs.
          </p>

          <p className="text-base leading-relaxed text-muted-foreground">
            Fiabilité, transparence et respect des lieux sont au cœur de nos valeurs. Que vous ayez besoin d'un
            nettoyage régulier de bureaux, d'un entretien de commerce, d'une prestation hôtelière exigeante ou d'une
            remise en état après chantier, UCT Azur s'engage à vos côtés avec réactivité et professionnalisme.
          </p>

          <div className="mt-10 bg-muted rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-6 text-center">Nos forces clés</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Réactivité et disponibilité</h4>
                  <p className="text-sm text-muted-foreground">
                    Interventions rapides, plannings flexibles et service client à l'écoute de vos besoins.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Qualité garantie avec agent référent</h4>
                  <p className="text-sm text-muted-foreground">
                    Un interlocuteur dédié qui connaît vos locaux et assure un suivi qualité constant.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Engagement environnemental</h4>
                  <p className="text-sm text-muted-foreground">
                    Produits éco-labellisés, respect de l'environnement et de la santé de vos équipes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
