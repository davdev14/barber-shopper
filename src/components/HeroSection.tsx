import React from 'react'

const HeroSection = () => {
  return (
    <div className='mt-14 md:mt-20 bg-red-400 py-20 px-20'>
      <h2 className='text-5xl font-bold mb-12'>Find the right Barber for you!</h2>
      <label htmlFor="search-barber" className='text-xl pr-2'>Search Barber</label>
      <input type="search" placeholder='Seach for a barber' id="search-barber" className='h-12 px-4'/>
    </div>
  )
}

export default HeroSection
