import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./swipercard.sass"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import next from "./next.png"
import prev from "./prev.png"



// import required modules
import { Pagination, Navigation } from "swiper";
import CommetCard from "../CommetCard/CommetCard";

const  SwiperComet =() => {


    const prefElClick = useRef(null)
    const nextElClick = useRef(null)
    const [_,setComet] = useState(false)
    return (
        <div className={'swiperComet'}>
            <Swiper


                breakpoints={{

                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                    1440: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                pagination={{
                    type: "progressbar",
                }}
                navigation={{
                    prevEl: prefElClick.current,
                    nextElEl: nextElClick.current
                }}
                modules={[Pagination, Navigation]}
                className="swiperComet__myswiper"
                onInit={() => setComet(true)}

            >
                <SwiperSlide><CommetCard/></SwiperSlide>
                <SwiperSlide><CommetCard/></SwiperSlide>
                <SwiperSlide><CommetCard/></SwiperSlide>
                <SwiperSlide><CommetCard/></SwiperSlide>
                <SwiperSlide><CommetCard/></SwiperSlide>
                <SwiperSlide><CommetCard/></SwiperSlide>
                <SwiperSlide><CommetCard/></SwiperSlide>
                <SwiperSlide><CommetCard/></SwiperSlide>

            </Swiper>
            <div ref={nextElClick} className="swiperComet__next">
                <img src={next} alt=""/>
            </div>
            <div ref={prefElClick} className="swiperComet__prev">
                <img src={prev} alt=""/>
            </div>


        </div>
    );
}

export default SwiperComet
