import React from 'react';
import CatalogSection from "./PopUpSection/popUp";
import PopUp from "./PopUpSection/popUp";
import SortSection from "./SortSection/SortSection";
import CalendarSection from "./CalendarSection/CalendarSection";
import ChooseCart from "./ChooseCart/ChooseCart";
import SwiperAfisha from "./SwiperAfisha/SwiperAfisha";

const AfishaPage = () => {
    return (
        <>
            <PopUp/>
            <SwiperAfisha/>
            <SortSection/>
            <CalendarSection/>
            <ChooseCart/>
        </>
    );
};

export default AfishaPage;