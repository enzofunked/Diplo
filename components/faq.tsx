import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section className="mt-20 mb-10 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Questions fréquentes</h2>
          <p className="text-muted-foreground">Tout ce que vous devez savoir avant de commencer</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border rounded-lg px-6 bg-card">
            <AccordionTrigger className="text-left hover:no-underline">
              Comment se déroule la mise en place d'un contrat de nettoyage ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Après un premier contact, nous planifions une visite gratuite de vos locaux pour évaluer vos besoins. Nous
              vous proposons ensuite un devis personnalisé et, une fois validé, nous démarrons les prestations selon le
              planning convenu.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border rounded-lg px-6 bg-card">
            <AccordionTrigger className="text-left hover:no-underline">
              Quels produits et matériels utilisez-vous ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Nous utilisons des produits professionnels certifiés Ecolabel, respectueux de l'environnement et adaptés à
              chaque type de surface. Notre matériel moderne et performant garantit un nettoyage efficace et durable.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border rounded-lg px-6 bg-card">
            <AccordionTrigger className="text-left hover:no-underline">
              Êtes-vous assurés et certifiés ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Oui, UCT Azur dispose d'une assurance responsabilité civile professionnelle complète et nos équipes sont
              formées aux normes d'hygiène et de sécurité en vigueur. Nous sommes également certifiés Qualipropre pour
              garantir la qualité de nos prestations.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border rounded-lg px-6 bg-card">
            <AccordionTrigger className="text-left hover:no-underline">
              Pouvez-vous intervenir tôt le matin ou tard le soir ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Absolument. Nous adaptons nos horaires d'intervention à votre activité pour minimiser les perturbations.
              Nos équipes peuvent intervenir avant l'ouverture, après la fermeture ou même le week-end selon vos
              besoins.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border rounded-lg px-6 bg-card">
            <AccordionTrigger className="text-left hover:no-underline">
              Quel est le préavis pour modifier la fréquence d'intervention ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Nous restons flexibles et à votre écoute. Un préavis de 48 heures suffit généralement pour ajuster la
              fréquence ou les horaires d'intervention. Pour des modifications importantes, nous recommandons une
              semaine de préavis.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border rounded-lg px-6 bg-card">
            <AccordionTrigger className="text-left hover:no-underline">
              Proposez-vous des interventions d'urgence ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Oui, nous proposons un service d'intervention rapide pour les situations urgentes (dégâts des eaux,
              événements imprévus, etc.). Contactez-nous directement et nous mobilisons une équipe dans les plus brefs
              délais.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border rounded-lg px-6 bg-card">
            <AccordionTrigger className="text-left hover:no-underline">
              Les agents ont-ils un référent pour le suivi ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Chaque client bénéficie d'un chef d'équipe dédié qui assure le suivi quotidien et d'un responsable de
              secteur disponible pour toute demande. Vous avez ainsi un interlocuteur privilégié pour garantir votre
              satisfaction.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="border rounded-lg px-6 bg-card">
            <AccordionTrigger className="text-left hover:no-underline">
              Pouvez-vous travailler en hôtellerie / restauration / médical ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Oui, nous sommes spécialisés dans ces secteurs exigeants. Nos équipes sont formées aux protocoles HACCP
              pour la restauration et aux normes d'hygiène strictes des établissements de santé. Nous adaptons nos
              méthodes à chaque environnement.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
