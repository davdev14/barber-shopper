import React from 'react'
import heroBg from "../../assets/images/hero-bg.jpg"

const HeroSection = () => {
  return (
    <div className={`mt-14 md:mt-20 py-28 md:py-48 px-5 bg-[url(../../assets/images/hero-bg.jpg)] bg-center bg-cover`}>
      <h2 className='text-5xl font-bold mb-12 md:max-w-6xl max-w-2xl text-white'>Find the right Barber for you!</h2>
      <label htmlFor="search-barber" className='text-xl pr-2 text-white'>Search Barber</label>
      <input type="search" placeholder='Seach for a barber' id="search-barber" className='h-12 px-4 border-transparent rounded-md border-2 outline-none'/>
    </div>
  )
}

export default HeroSection
