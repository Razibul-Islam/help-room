import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img from '../../img/Black Minimal Motivation Quote LinkedIn Banner (2).png'

import "./Banner.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


const Banner = () => {
    return (
        <div>
            <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img} alt=""></img></SwiperSlide>
        <SwiperSlide><img src={img} alt=""></img></SwiperSlide>
        <SwiperSlide><img src={img} alt=""></img></SwiperSlide>
        <SwiperSlide><img src={img} alt=""></img></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;