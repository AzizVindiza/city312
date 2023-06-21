import React from 'react';
import CatalogSection from "./WrapperSection/CatalogSection/CatalogSection";
import SearchSection from "./WrapperSection/SearchSection/SearchSection";
import CartSection from "./CartSection/CartSection";
import SortSection from "./SortSection/SortSection";
import DiscountSwiper from "./DiscountSwiper/DiscountSwiper";
import WrapperSection from "./WrapperSection/WrapperSection";
import SwiperSecond from "./SwiperSecond/SwiperSecond";


const DiscountsPage = () => {
    return (
        <>
            <WrapperSection/>
            <DiscountSwiper/>
            <SwiperSecond/>
            <SortSection/>
            <CartSection/>
        </>
    );
};

export default DiscountsPage;