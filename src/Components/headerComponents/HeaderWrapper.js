import React from 'react';
import './headerStyles.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



//import required modules
import { Autoplay, Navigation, Pagination, Mousewheel,Keyboard } from "swiper";

function HeaderWrapper(){
    return(
      <>
        <div>
        <Swiper
        cssMode={true}
        spaceBetween={35}
        centeredSlides= {true}
        autoplay={{ 
          delay: 2500, 
          disableOnInteraction: false, 
        }}
        // navigation={true}
        mousewheel={true}
        keyboard={true}
        // pagination={{ clickable: true, }}
        pagination={{
          type: "progressbar",
        }}
        modules={[
          Autoplay,
          Navigation, 
          Pagination, 
          Mousewheel, 
          Keyboard 
        ]}
        className="mySwiper slide-heading md:w-full">
        <div className='slider-shadow'></div>
        <SwiperSlide>
          <img src="/img/kids-1.jpg" alt="Lentera Fajar Indonesia" />
          </SwiperSlide>
        <SwiperSlide>
          <img src="/img/kids-2.jpg" alt="Lentera Fajar Indonesia" />
          </SwiperSlide>
        <SwiperSlide>
          <img src="/img/kids-3.jpg" alt="Lentera Fajar Indonesia" />
          </SwiperSlide>
        <SwiperSlide>
          <img src="/img/kids-1.jpg" alt="Lentera Fajar Indonesia" />
          </SwiperSlide>
        <SwiperSlide>
          <img src="/img/kids-2.jpg" alt="Lentera Fajar Indonesia" />
          </SwiperSlide>
        <SwiperSlide>
          <img src="/img/kids-3.jpg" alt="Lentera Fajar Indonesia" />
          </SwiperSlide>
      </Swiper>
        </div>
      </>
    );
}

export default HeaderWrapper;