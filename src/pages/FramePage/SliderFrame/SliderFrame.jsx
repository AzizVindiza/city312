import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./sliderFrame.sass"

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

 const SliderFrame = () =>  {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [_,setClick] = useState(false)
    const prefEl = useRef(null)
    const nextEl = useRef(null)

    return (
        <section className={'sliderFrame'}>
            <div className="container sliderFrame__container">

                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    spaceBetween={10}
                    navigation={{
                          prevEl: prefEl.current,
                          nextEl: nextEl.current,
                    }}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="sliderFrame__mySwiper2"
                >
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="sliderFrame__mySwiper"
                    onInit={() => setClick(true)}
                >
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                    </SwiperSlide>
                </Swiper>
                <div className="sliderFrame__sliderbutton">
                    <div ref={nextEl} className="sliderFrame__next">
                        <svg width="40" height="45" viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="44.4699" rx="20" fill="white" fillOpacity="0.25"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.70532 8.76132C8.9599 8.97346 8.55798 9.69742 8.78077 10.4266C8.88751 10.7761 8.36976 10.2415 14.0128 15.8288C15.7211 17.5201 17.4767 19.2604 17.9143 19.6961C18.3519 20.1318 19.1079 20.8832 19.5943 21.3661L20.2553 22.0222C20.3781 22.1441 20.3772 22.3429 20.2533 22.4637V22.4637C18.5992 24.077 8.988 33.6417 8.92673 33.7355C8.77833 33.9627 8.71085 34.2214 8.72692 34.5015C8.75161 34.9316 8.93858 35.2806 9.26569 35.5073C9.52361 35.686 9.69944 35.739 10.0349 35.739C10.3691 35.739 10.5618 35.6842 10.7804 35.527C10.8579 35.4713 11.8956 34.4596 13.0867 33.2787C14.2777 32.0978 16.6773 29.7191 18.4192 27.9928C20.1611 26.2664 21.9943 24.4421 22.493 23.9388C23.5518 22.8703 23.5301 22.9037 23.5531 22.3081C23.5683 21.9121 23.522 21.694 23.3716 21.4552C23.2617 21.2805 10.9802 9.08375 10.7736 8.94416C10.4814 8.74663 10.029 8.66919 9.70532 8.76132ZM19.2792 8.76433C18.896 8.86849 18.5823 9.12864 18.4151 9.48083C18.333 9.6538 18.3136 9.736 18.3027 9.95717C18.2885 10.2488 18.3339 10.4458 18.4705 10.6847C18.5478 10.8197 19.2932 11.5735 21.9994 14.2529C22.8998 15.1444 24.0151 16.2513 24.478 16.7127C24.9408 17.1741 26.3818 18.6053 27.6802 19.893L29.2076 21.4079C29.6672 21.8637 29.6684 22.6063 29.2102 23.0636V23.0636C28.7533 23.5197 27.6152 24.6501 26.6811 25.5757C25.0383 27.2036 24.1983 28.0376 22.489 29.7377C22.043 30.1813 20.9676 31.2497 20.0992 32.112C18.2387 33.9594 18.3121 33.8639 18.3121 34.4397C18.3121 34.7582 18.3184 34.7933 18.4098 34.9885C18.7346 35.6817 19.5347 35.9464 20.2449 35.5956C20.3486 35.5444 20.6263 35.2907 21.1732 34.7478C21.6024 34.3217 23.7298 32.2127 25.9009 30.0611C32.2462 23.7727 32.8345 23.1856 32.9219 23.055C33.0659 22.8398 33.1145 22.6732 33.1303 22.3412C33.1466 22.0013 33.1144 21.7918 33.0106 21.5627C32.921 21.365 33.2286 21.6745 26.0539 14.5638C24.6738 13.1961 23.1798 11.7138 22.7338 11.2699C22.2878 10.8259 21.5855 10.1271 21.1732 9.71691C20.3855 8.93334 20.2835 8.85513 19.928 8.76151C19.7118 8.70455 19.4955 8.70548 19.2792 8.76433Z" fill="white"/>
                        </svg>

                    </div>
                    <div ref={prefEl} className="sliderFrame__prev">
                        <svg width="37" height="40" viewBox="0 0 37 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="37" height="39.2381" rx="18.5" fill="white" fillOpacity="0.2"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M27.9646 30.4848C28.5769 30.3137 28.9071 29.7299 28.7241 29.1418C28.6364 28.86 29.0617 29.2911 24.4263 24.7852C23.0231 23.4212 21.581 22.0178 21.2215 21.6665C20.8621 21.3151 20.2411 20.7091 19.8415 20.3197L19.2986 19.7906C19.1983 19.6928 19.199 19.5314 19.3002 19.4345C20.6589 18.1334 28.5538 10.42 28.6042 10.3444C28.7261 10.1612 28.7815 9.95253 28.7683 9.72659C28.748 9.37979 28.5944 9.09834 28.3257 8.91548C28.1139 8.77132 27.9694 8.72861 27.6939 8.72863C27.4194 8.72866 27.2611 8.77285 27.0815 8.89959C27.0179 8.94447 26.1654 9.76039 25.1871 10.7127C24.2087 11.6651 22.2376 13.5834 20.8068 14.9756C19.3759 16.3678 17.8701 17.839 17.4604 18.2449C16.5907 19.1066 16.6085 19.0797 16.5897 19.56C16.5771 19.8794 16.6152 20.0552 16.7387 20.2478C16.8291 20.3887 26.9174 30.2248 27.0871 30.3374C27.3271 30.4967 27.6987 30.5591 27.9646 30.4848ZM20.1003 30.4824C20.4151 30.3984 20.6728 30.1886 20.8102 29.9046C20.8776 29.7651 20.8935 29.6988 20.9024 29.5204C20.9142 29.2852 20.8769 29.1264 20.7646 28.9337C20.7012 28.8248 20.0888 28.2169 17.8659 26.0561C17.1263 25.3372 16.2101 24.4445 15.8299 24.0724C15.4498 23.7003 14.2661 22.5461 13.1995 21.5076L11.9448 20.2859C11.5694 19.9204 11.5685 19.3175 11.9427 18.9507C12.3181 18.5829 13.2529 17.6713 14.0202 16.9249C15.3696 15.612 16.0597 14.9394 17.4638 13.5684C17.8301 13.2107 18.7135 12.349 19.4268 11.6536C20.955 10.1637 20.8948 10.2408 20.8948 9.77648C20.8948 9.51961 20.8896 9.49129 20.8145 9.33386C20.5477 8.77482 19.8905 8.56138 19.3071 8.84428C19.2219 8.88559 18.9938 9.09013 18.5446 9.52799C18.1921 9.87162 16.4445 11.5724 14.6611 13.3076C9.44887 18.3789 8.96561 18.8523 8.89387 18.9577C8.77561 19.1312 8.73567 19.2655 8.72265 19.5333C8.7093 19.8074 8.73577 19.9764 8.82103 20.1611C8.8946 20.3206 8.64194 20.071 14.5355 25.8054C15.6691 26.9083 16.8963 28.1037 17.2627 28.4618C17.629 28.8198 18.2059 29.3834 18.5446 29.7142C19.1916 30.3461 19.2754 30.4092 19.5674 30.4847C19.745 30.5306 19.9227 30.5298 20.1003 30.4824Z" fill="white"/>
                        </svg>

                    </div>
                </div>
            </div>

        </section>
    );
}


export default SliderFrame