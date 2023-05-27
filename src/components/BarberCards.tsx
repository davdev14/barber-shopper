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
    <>
    {barberData.map((barber: barberDataType) => (
      <Card key={barber.id}>
        <div>
        <Image
        src={barber.image}
        alt="Picture of a barber"
        width={200}

      />
        <div>
          <p className='font-bold text-xl'>{barber.name}</p>
          <p className='text-slate-400 italic'>{`${barber.town}, ${barber.Quater}`}</p>
          <p>{barber.locationDetails}</p>
        </div>
        </div>
      </Card>
    ))
}
    </>
  )

}

export default BarberCard
