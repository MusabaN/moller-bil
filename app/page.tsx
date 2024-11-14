
import {CarOptions} from "@/components/frontpage/CarOptions";
import {Services} from "@/components/frontpage/Services";
import {Hero} from "@/components/frontpage/Hero";





export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <CarOptions />
      <Services />
    </div>
  )
}