import React from 'react'
import { barberData } from "../data/data"
import Card from '@/ui/Card'
import Image from 'next/image'
import { barberDataType } from "../components/BarberCards"

const MostRatedBarbers = () => {
  return (
    <div className='mx-12 mb-20'>
      <h2 className='text-3xl font-semibold my-6'>Most Rated Barbers</h2>
      <div className='flex gap-8'>
      {barberData.map((barber: barberDataType) => (
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

export default MostRatedBarbers
