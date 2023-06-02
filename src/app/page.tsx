import BarberCards from "@/components/BarberCards"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import MostRatedBarbers from "@/components/MostRatedBarbers"
import Navbar from "@/components/Navbar"
import PopularBarbers from "@/components/PopularBarbers"

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PopularBarbers />
      <MostRatedBarbers />
      <Footer />
    </>
    
  )
  
}
