import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiperClients.sass"
// Import Swiper styles
import "swiper/css";
import AfishaCard from "../../../AfishaPage/SortSection/AfishaCard/AfishaCard";

const SwiperClients = () => {
    return (
        <div className={'swiperClients'}>
            <div className="swiperClients__container container">
                <Swiper
                    breakpoints={{
                        393: {
                            slidesPerView : 1
                        },
                        640 : {
                            slidesPerView : 2
                        }
                    }}
                    className="swiperClients__mySwiper">
                    <SwiperSlide className={'swiperClients__c'}><AfishaCard/></SwiperSlide>
                    <SwiperSlide><AfishaCard/></SwiperSlide>
                    <SwiperSlide><AfishaCard/></SwiperSlide>
                    <SwiperSlide><AfishaCard/></SwiperSlide>
                    <SwiperSlide><AfishaCard/></SwiperSlide>
                    <SwiperSlide><AfishaCard/></SwiperSlide>
                    <SwiperSlide><AfishaCard/></SwiperSlide>
                    <SwiperSlide><AfishaCard/></SwiperSlide>
                    <SwiperSlide><AfishaCard/></SwiperSlide>
                </Swiper>
            </div>

        </div>
    );
}

export default SwiperClients