import {Button} from "@/components/ui/button";

export const Hero = () => (
  <section className="bg-blue-900 text-white pt-56 pb-16 relative overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
      <h2 className="text-orange-300 text-xl mb-2">Novemberkampanje</h2>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Få inntil 40.000 kr i avslag på ny bil</h1>
      <div className="flex space-x-4">
        <Button className="bg-blue-600 hover:bg-blue-700">Se tilbudene</Button>
        <Button variant="outline" className="text-black border-white hover:bg-white hover:text-navy-900">Finn forhandler</Button>
      </div>
    </div>
  </section>
)
