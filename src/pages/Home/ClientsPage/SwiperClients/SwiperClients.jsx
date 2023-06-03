import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiperClients.sass"
// Import Swiper styles
import "swiper/css";
import AfishaCard from "../../../AfishaPage/SortSection/AfishaCard/AfishaCard";

const SwiperClients = ({text}) => {
    return (
        <div className={'swiperClients'}>
            <div className="swiperClients__container container">
                <h2 className="swiperClients__h2">{text}</h2>
                <Swiper
                    breakpoints={{

                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                            1440: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
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