import React from 'react'
import { barberData } from '@/data/data'
import BarberExplorer from '@/components/BarberExplorer'


const explore = () => {
  return (
    <div>
      <h2 className='text-5xl font-semibold my-6'>Explore</h2>
      <BarberExplorer />
    </div>
  )
}

export default explore
