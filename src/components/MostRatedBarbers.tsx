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

interface propsType {
  screenWidth: number
}

export default function MostRatedBarbers({screenWidth}: propsType) {
  let slidespreview;
  if(screenWidth <= 425){
    slidespreview = 1
  }
  if(screenWidth > 425){
    slidespreview = 2
  }
  if(screenWidth >= 1024){
    slidespreview = 3
  }
  if(screenWidth >= 1440){
    slidespreview = 4
  }
  if(screenWidth >= 2560){
    slidespreview = 6
  }
  return (
    <div className='mx-12 mb-20'>
    <h2 className='text-3xl font-semibold my-6'>Most Rated Barbers</h2>
      <Swiper
        slidesPerView={slidespreview}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
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
