import React, { useRef, useState} from 'react';
import './headerStyles.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



//import required modules
import { Autoplay, Navigation, Pagination} from "swiper";

function HeaderWrapper(){
    return(
      <>
        <div>
        <Swiper
        spaceBetween={35}
        centeredSlides= {true}
        autoplay={{ delay: 2500, disableOnInteraction: false, }}
        // navigation={true}
        pagination={{ clickable: true, }}
        modules={[Autoplay ,Navigation, Pagination, ]}
        className="mySwiper slide-heading md:w-full">
        <SwiperSlide>
          <img src="/img/kids-1.jpg" alt="" />
            <div className='hero absolute'>
              <h1 className='text-left'>Lentera Fajar Indonesia</h1>
              <p className='text-left'>lorem</p>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <img src="/img/kids-2.jpg" alt="" />
           <h1 className='lentera-hero'>Lentera Fajar Indonesia</h1>
          </SwiperSlide>
        <SwiperSlide>
          <img src="/img/kids-3.jpg" alt="" />
           <h1 className='lentera-hero'>Lentera Fajar Indonesia</h1>
          </SwiperSlide>
        <SwiperSlide>
          <img src="/img/kids-1.jpg" alt="" />
           <h1 className='lentera-hero'>Lentera Fajar Indonesia</h1>
          </SwiperSlide>
        <SwiperSlide>
          <img src="/img/kids-2.jpg" alt="" />
           <h1 className='lentera-hero'>Lentera Fajar Indonesia</h1>
          </SwiperSlide>
        <SwiperSlide>
          <img src="/img/kids-3.jpg" alt="" />
           <h1 className='lentera-hero'>Lentera Fajar Indonesia</h1>
          </SwiperSlide>
      </Swiper>
        </div>
      </>
    );
}

export default HeaderWrapper;