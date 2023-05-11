import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import pic from "./pic.png"
import "./swiperAfisha.sass"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import {FiChevronRight} from "react-icons/fi";
import {FiChevronLeft} from "react-icons/fi";



// import required modules
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";

 const SwiperAfisha = () => {
     const [_, setInit] = useState();
     const prevRef = useRef(null)
     const nextRef = useRef(null)
    return (
        <div className={'swiperAfisha'}>
            <div className="container swiperAfisha__container ">
                <Swiper
                    onInit={() => setInit(true)}
                    rewind={true}
                    slidesPerView={1}
                    spaceBetween={50}

                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    modules={[Navigation,Pagination,Scrollbar,A11y]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="swiperAfisha__pic">
                            <img src={pic} alt="" className="swiperAfisha__img"/>
                        </div>
                        <div className="swiperAfisha__box">
                            <h2 className="swiperAfisha__title">КОНЦЕРТЫ</h2>
                            <p className="swiperAfisha__txt">Вечер произведений Людовико Эйнауди в исполнении коллектива Tynda.music</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiperAfisha__pic">
                            <img src="" alt="" className="swiperAfisha__img"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiperAfisha__pic">
                            <img src="" alt="" className="swiperAfisha__img"/>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiperAfisha__nav">
                    <div className="swiperAfisha__click">
                        <button ref={prevRef} className="swiperAfisha__btn">
                            <FiChevronLeft color={"#fff"}/>
                        </button>
                        <button ref={nextRef} className="swiperAfisha__btn">
                           <FiChevronRight color={"#fff"}/>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SwiperAfisha