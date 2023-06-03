"use client"
import BarberCards from "@/components/BarberCards"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import MostRatedBarbers from "@/components/MostRatedBarbers"
import Navbar from "@/components/Navbar"
import PopularBarbers from "@/components/PopularBarbers"
import { useEffect, useState } from "react"

export default function Home() {
  const getScreenWidth = () => {
    return window.innerWidth
      
  }
  const [screenWidth, setScreenWidth] = useState(getScreenWidth());

  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(getScreenWidth())
    }
    window.addEventListener('resize', updateWidth);

    return(() => {
      window.removeEventListener('resize', updateWidth);
  })
    
  },[screenWidth, setScreenWidth])
  
  
  return (
    <>
      <Navbar />
      <HeroSection />
      <PopularBarbers screenWidth={screenWidth}/>
      <MostRatedBarbers screenWidth={screenWidth}/>
      <Footer />
    </>
    
  )
  
}
