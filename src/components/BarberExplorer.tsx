import React from 'react'
import { barberDataType } from '@/components/BarberCards'
import Card from '@/ui/Card'
import Image from 'next/image'
import { barberData } from '@/data/data'

const BarberExplorer = () => {
  return (
    <div className='mx-12 mb-20'>
    <div className='flex gap-10 items-center mb-10'>
      <div>
      <label htmlFor='sort-barber' className='text-xl'>Sort by:</label>
      <select id="sort-barbers" name="sort" className='text-xl'>
        <option value="most rated">Most rated</option>
        <option value="most liked">Most liked</option>
        <option value="most commented">Most commented</option>
      </select>
      </div>
      <div>
      <label htmlFor='barbers-town' className='text-xl'>Select town:</label>
      <select id="barbers-town" name="town" className='text-xl'>
        <option value="douala">Douala</option>
        <option value="yaounde">Yaounde</option>
      </select>
      </div>
    </div>
    <div className='grid gap-14 grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4'>
      {
        barberData.map((barber: barberDataType) => (
          <Card key={barber.id}>
            <div className='flex flex-col items-center justify-center flex-wrap'>
            <Image
            src={barber.image}
            alt="Picture of a barber"
            width={200}
    
          />
            <div className='text-center'>
              <p className='font-bold text-xl'>{barber.name}</p>
              <p className='text-slate-400 italic'>{`${barber.town}, ${barber.Quater}`}</p>
              <p>{barber.locationDetails}</p>
            </div>
            </div>
          </Card>
        ))
      }
    </div>
    </div>
  )
}

export default BarberExplorer
