import React, { ReactNode } from 'react'
import Card from '@/ui/Card'
import Image, { StaticImageData } from 'next/image'
import { barberData } from '@/data/data'

interface barberDataType {
    image: StaticImageData;
    name: string;
    town: string;
    Quater: string;
    locationDetails: string;
    id: number
}

const BarberCard = () => {
  return(
    <div className='flex gap-5 m-3'>
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
  )

}

export default BarberCard
