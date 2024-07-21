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
        "https://img.freepik.com/free-photo/place-flying-sunset-sky_1112-1132.jpg?ga=GA1.1.942773371.1714989313&semt=sph",
        "https://img.freepik.com/free-photo/planes-wing-cuts-through-sky-cotton-candy-clouds-radiant-sunset_91128-4456.jpg?ga=GA1.1.942773371.1714989313&semt=sph",
        "https://img.freepik.com/free-photo/jumbo-jet-flying-sky_23-2150895675.jpg?ga=GA1.1.942773371.1714989313&semt=sph",
        "https://img.freepik.com/free-photo/3d-icon-travel-with-airplane_23-2151037425.jpg?size=626&ext=jpg&ga=GA1.1.942773371.1714989313&semt=sph",
        "https://img.freepik.com/free-photo/portrait-flight-attendant-with-plane-figurine_23-2150282854.jpg?size=626&ext=jpg&ga=GA1.1.942773371.1714989313&semt=sph",
        "https://img.freepik.com/free-photo/happy-monday-concept-with-woman-plane_23-2150040468.jpg?size=626&ext=jpg&ga=GA1.1.942773371.1714989313&semt=sph",
        "/images/slider/slider-13.jpg",
        "/images/slider/slider-17.jpg",
        "/images/slider/slider2.jpg",
        "/images/slider/slider3.jpg",
      ];
  return (
    <>
    <div className=' h-96 md:h-[600px] mt-[73px]'>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <Image fill={true} src={images[6]} alt="image1" className="w-full object-cover" />
          
        </SwiperSlide>
        <SwiperSlide>
          <Image fill={true} src={images[7]} alt="image1" className="h-96 w-full object-cover" />
          
        </SwiperSlide>
        <SwiperSlide>
          <Image fill={true} src={images[8]} alt="image1" className="h-96 w-full object-cover" />
            
        </SwiperSlide>
       
      </Swiper>
    </div>
    </>
  )
  }

export default Hero

