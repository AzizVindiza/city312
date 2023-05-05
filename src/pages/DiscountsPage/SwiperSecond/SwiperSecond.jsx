import React, { useRef, useState } from "react";
import picture from "./optimize 1.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiperSecond.sass"
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


const SwiperSecond = () => {
    return (
        <section className={'swiperSecond'}>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="swiperSecond__mySwiper"
            >
                <SwiperSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiperSecond__img">
                        <img src={picture} alt="" className="swiperSecond__"/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default SwiperSecond;
