"use client"
import Image from "next/image";
import Card from "@/ui/Card";
import { barberData } from "@/data/data";
import { barberDataType } from "../components/BarberCards"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function MostRatedBarbers() {
  return (
    <div className='mx-12 mb-20'>
    <h2 className='text-3xl font-semibold my-6'>Most Rated Barbers</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          barberData.map((barber: barberDataType) => (
            <SwiperSlide key={barber.id} className="">
            <Card>
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
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}
