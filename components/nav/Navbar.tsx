'use client'
import {Button} from "@/components/ui/button";
import {MapPin, Menu, Percent, User} from "lucide-react";
import {useEffect, useState} from "react";


export const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setIsNavbarVisible(false)
      } else {
        setIsNavbarVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed w-full transition-transform duration-300 z-50 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-blue-600 font-bold text-2xl">Moller Bil</div>
          <div className="hidden md:flex space-x-4">
            <Button variant="ghost"><MapPin className="mr-2 h-4 w-4"/>Finn oss</Button>
            <Button variant="ghost"><Percent className="mr-2 h-4 w-4"/>Kampanjer</Button>
            <Button variant="ghost"><User className="mr-2 h-4 w-4"/>Logg inn</Button>
          </div>
          <Button variant="outline" className="md:hidden"><Menu className="h-4 w-4"/></Button>
        </div>
      </div>
    </nav>
  )
}
