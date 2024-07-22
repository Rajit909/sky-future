"use client";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation} from 'swiper/modules';
import Image from 'next/image';



const Hero = () => {
    const images = [
        // "https://img.freepik.com/free-photo/place-flying-sunset-sky_1112-1132.jpg?ga=GA1.1.942773371.1714989313&semt=sph",
        // "https://img.freepik.com/free-photo/planes-wing-cuts-through-sky-cotton-candy-clouds-radiant-sunset_91128-4456.jpg?ga=GA1.1.942773371.1714989313&semt=sph",
        // "https://img.freepik.com/free-photo/jumbo-jet-flying-sky_23-2150895675.jpg?ga=GA1.1.942773371.1714989313&semt=sph",
        // "https://img.freepik.com/free-photo/3d-icon-travel-with-airplane_23-2151037425.jpg?size=626&ext=jpg&ga=GA1.1.942773371.1714989313&semt=sph",
        // "https://img.freepik.com/free-photo/portrait-flight-attendant-with-plane-figurine_23-2150282854.jpg?size=626&ext=jpg&ga=GA1.1.942773371.1714989313&semt=sph",
        // "https://img.freepik.com/free-photo/happy-monday-concept-with-woman-plane_23-2150040468.jpg?size=626&ext=jpg&ga=GA1.1.942773371.1714989313&semt=sph",
          
        "/images/slider/portrait-flight.jpg",
        "/images/slider/slider-13.jpg",
        "/images/slider/slider-17.jpg",
        "/images/slider/slider3.jpg",
      ];
  return (
    <>
    <div className=' h-96 md:h-[600px] mt-[73px]'>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <Image fill={true} src={images[0]} alt="image1" className="h-96 w-full object-cover" />
          {/* text */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold">Welcome to Sky Future</h1>
            <p className="text-white text-lg md:text-2xl">We are here to serve you</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image fill={true} src={images[2]} alt="image1" className="h-96 w-full object-cover" />
          <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold">Welcome to Sky Future</h1>
            <p className="text-white text-lg md:text-2xl">We are here to serve you</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image fill={true} src={images[3]} alt="image1" className="h-96 w-full object-cover" />
          <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold">Welcome to Sky Future</h1>
            <p className="text-white text-lg md:text-2xl">We are here to serve you</p>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
    </>
  )
  }

export default Hero

