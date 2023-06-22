import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/pagination";

import "./swiperFirst.sass"

// import required modules
import { Pagination } from "swiper";
import DiscountCard from "../../../components/DiscountCard/DiscountCard";
import next from "../CommetSection/SwiperComet/next.png";
import prev from "../CommetSection/SwiperComet/prev.png";

 const SwiperFirst = ({title}) =>  {
     const prefElFirst = useRef(null)
     const nextElFirst = useRef(null)
     const [_,setSwiperFirst] = useState(false)
    return (
        <div className={'swiperFirst'}>

            <div className="swiperFirst__container container">
                <h2 className="swiperFirst__h2">{title}</h2>
                <Swiper
                    navigation={{
                        prevEl: prefElFirst.current,
                        nextEl: nextElFirst.current,
                    }}
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="swiperFirst__mySwiper"
                    onInit={() => setSwiperFirst(true)}
                >
                    <SwiperSlide><DiscountCard/></SwiperSlide>
                    <SwiperSlide><DiscountCard/></SwiperSlide>
                    <SwiperSlide><DiscountCard/></SwiperSlide>
                    <SwiperSlide><DiscountCard/></SwiperSlide>
                    <SwiperSlide><DiscountCard/></SwiperSlide>

                </Swiper>
                <div ref={nextElFirst} className="swiperFirst__next">
                    <svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.807409 0.0451819C0.196909 0.27425 -0.132275 1.05599 0.0501984 1.84342C0.137613 2.22078 -0.286429 1.64351 4.33533 7.67675C5.73439 9.50308 7.1723 11.3823 7.53068 11.8527C7.88906 12.3232 8.50823 13.1346 8.90661 13.656L9.44838 14.365C9.55594 14.5058 9.55511 14.7013 9.44636 14.8412C8.0916 16.5833 0.219915 26.9114 0.169741 27.0126C0.0481927 27.2579 -0.00706806 27.5373 0.00608925 27.8398C0.0263139 28.3042 0.17944 28.681 0.447348 28.9259C0.658592 29.1189 0.802596 29.1761 1.07732 29.176C1.35102 29.176 1.50888 29.1168 1.68792 28.9471C1.75135 28.887 2.60132 27.7945 3.57679 26.5194C4.55223 25.2442 6.51756 22.6757 7.94419 20.8116C9.37082 18.9474 10.8722 16.9775 11.2807 16.4341C12.1479 15.2803 12.1301 15.3163 12.1489 14.6732C12.1614 14.2455 12.1234 14.0101 12.0003 13.7522C11.9102 13.5636 1.85152 0.393344 1.68238 0.242614C1.44305 0.0293139 1.07251 -0.0543025 0.807409 0.0451819ZM8.64855 0.0484224C8.33473 0.160902 8.07777 0.441817 7.94081 0.822115C7.87357 1.00889 7.85768 1.09765 7.84881 1.33647C7.8371 1.6514 7.8743 1.8641 7.98622 2.12209C8.04948 2.26788 8.66003 3.08183 10.8764 5.97503C11.6138 6.93767 12.5273 8.13295 12.9064 8.63121C13.2854 9.12943 14.4656 10.6748 15.5291 12.0654L16.7794 13.7003C17.1829 14.2279 17.184 14.9601 16.7822 15.489C16.4079 15.9815 15.4758 17.2021 14.7108 18.2016C13.3653 19.9594 12.6773 20.86 11.2774 22.6958C10.9121 23.1747 10.0313 24.3285 9.32012 25.2596C7.79638 27.2545 7.85648 27.1513 7.85648 27.773C7.85648 28.117 7.86159 28.1549 7.9365 28.3657C8.2025 29.1142 8.85776 29.4 9.43947 29.0212C9.5244 28.9659 9.75183 28.692 10.1997 28.1057C10.5512 27.6456 12.2936 25.3683 14.0717 23.045C19.2687 16.2546 19.7505 15.6207 19.822 15.4797C19.94 15.2473 19.9798 15.0675 19.9928 14.7089C20.0061 14.3419 19.9797 14.1156 19.8947 13.8683C19.8213 13.6548 20.0732 13.989 14.1971 6.31083C13.0668 4.83396 11.8431 3.23336 11.4779 2.75394C11.1126 2.27453 10.5374 1.51994 10.1997 1.07704C9.55457 0.230922 9.47107 0.14647 9.1799 0.0453824C9.00282 -0.0161189 8.82571 -0.0151167 8.64855 0.0484224Z" fill="black"/>
                    </svg>

                </div>
                <div ref={prefElFirst} className="swiperFirst__prev">
                    <svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M19.1887 29.1433C19.7992 28.9142 20.1284 28.1325 19.9459 27.3451C19.8585 26.9677 20.2825 27.545 15.6608 21.5117C14.2617 19.6854 12.8238 17.8062 12.4654 17.3358C12.107 16.8653 11.4879 16.0539 11.0895 15.5325L10.5477 14.8235C10.4402 14.6827 10.441 14.4871 10.5497 14.3473C11.9045 12.6052 19.7762 2.27706 19.8264 2.17584C19.9479 1.93054 20.0032 1.65119 19.99 1.34867C19.9698 0.884315 19.8167 0.507458 19.5487 0.262621C19.3375 0.0695991 19.1935 0.0124053 18.9188 0.0124396C18.6451 0.012472 18.4872 0.071638 18.3082 0.241342C18.2447 0.301441 17.3948 1.39393 16.4193 2.66909C15.4439 3.94425 13.4785 6.51277 12.0519 8.37691C10.6253 10.2411 9.12386 12.2109 8.71541 12.7544C7.84823 13.9082 7.86599 13.8722 7.8472 14.5153C7.83472 14.943 7.87269 15.1784 7.99584 15.4363C8.08588 15.6249 18.1446 28.7951 18.3137 28.9459C18.553 29.1592 18.9236 29.2428 19.1887 29.1433ZM11.3475 29.1401C11.6614 29.0276 11.9183 28.7467 12.0553 28.3664C12.1225 28.1796 12.1384 28.0908 12.1473 27.852C12.159 27.5371 12.1218 27.3244 12.0099 27.0664C11.9466 26.9206 11.3361 26.1066 9.1197 23.2134C8.38226 22.2508 7.46877 21.0555 7.08971 20.5573C6.71065 20.059 5.53045 18.5137 4.46702 17.1231L3.21666 15.4881C2.81317 14.9605 2.81206 14.2283 3.21394 13.6995C3.58818 13.207 4.52027 11.9864 5.28528 10.9869C6.63076 9.22908 7.31875 8.32851 8.71871 6.49272C9.08399 6.01374 9.96475 4.86001 10.676 3.92888C12.1997 1.93401 12.1396 2.0372 12.1396 1.41548C12.1396 1.07152 12.1345 1.03361 12.0596 0.822812C11.7936 0.0742733 11.1383 -0.211518 10.5566 0.167277C10.4717 0.222598 10.2443 0.496465 9.79636 1.08275C9.44487 1.54286 7.70247 3.82021 5.92435 6.14349C0.727405 12.9339 0.245571 13.5678 0.174045 13.7088C0.0561312 13.9412 0.0163096 14.121 0.00332809 14.4795C-0.00997952 14.8466 0.0164086 15.0728 0.101419 15.3202C0.174774 15.5337 -0.0771468 15.1995 5.79904 22.8776C6.92932 24.3545 8.15295 25.9551 8.51822 26.4345C8.88349 26.9139 9.45866 27.6685 9.79636 28.1114C10.4415 28.9576 10.525 29.042 10.8162 29.1431C10.9933 29.2046 11.1704 29.2036 11.3475 29.1401Z" fill="black"/>
                    </svg>

                </div>
            </div>
        </div>
    );
}

export default SwiperFirst