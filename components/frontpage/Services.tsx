import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export const Services = () => {
  const services = [
    { title: 'EU-kontroll', description: 'Som bileier har du ansvar for at bilen din blir kontrollert og godkjent i tide. Bestill EU-kontroll i god tid før fristen går ut.' },
    { title: 'Service på bil', description: 'Ved å følge bilens serviceintervall tar du vare på bilen din.' },
    { title: 'Dekkskift', description: 'Det er viktig at bilen din alltid er riktig skodd før føret du kjører på. Pass derfor på at du bytter til riktige dekk i tide.' },
    { title: 'Steinsprutskade', description: 'En steinsprutskade er viktig å behandle raskt for å unngå at skaden sprekker opp ytterligere.' },
    { title: 'Kjøp nye dekk', description: 'Tilstanden på dekkene dine er avgjørende for godt veigrep. Sørg for å ha god dekk til bilen.' },
    { title: 'Skadesenter', description: 'Sender du bilen til et av våre skadeverksted, kan du føle deg helt trygg på at bilen din er like sikker som før uhellet.' },
  ]

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Våre mest populære verkstedtjenester</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
