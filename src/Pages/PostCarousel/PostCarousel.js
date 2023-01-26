import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../img/carousel1.webp"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./PostCarousel.css";
import { Pagination, Navigation } from "swiper";

const PostCarousel = () => {
    return (
        <div className='my-4'>
            <h3 className='my-3 text-center capitalize font-bold text-3xl fill-stone-500'>Our regular active</h3>
            <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={img} alt="post img"></img></SwiperSlide>
                <SwiperSlide><img src={img} alt="post img"></img></SwiperSlide>
                <SwiperSlide><img src={img} alt="post img"></img></SwiperSlide>
                <SwiperSlide><img src={img} alt="post img"></img></SwiperSlide>
                <SwiperSlide><img src={img} alt="post img"></img></SwiperSlide>
                <SwiperSlide><img src={img} alt="post img"></img></SwiperSlide>
                <SwiperSlide><img src={img} alt="post img"></img></SwiperSlide>
                <SwiperSlide><img src={img} alt="post img"></img></SwiperSlide>
                <SwiperSlide><img src={img} alt="post img"></img></SwiperSlide>
            </Swiper>
        </>
        </div>
    );
};

export default PostCarousel;