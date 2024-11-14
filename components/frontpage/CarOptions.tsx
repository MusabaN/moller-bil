import {Card, CardHeader, CardTitle} from "@/components/ui/card";

export const CarOptions = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Hva kan vi hjelpe deg med?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <CardTitle>Kjøpe ny eller brukt bil</CardTitle>
          </CardHeader>
        </Card>
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <CardTitle>Selge bilen din</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  </section>
)
