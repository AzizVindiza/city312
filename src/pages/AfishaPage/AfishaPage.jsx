import React from 'react';
import CatalogSection from "./PopUpSection/popUp";
import PopUp from "./PopUpSection/popUp";
import SortSection from "./SortSection/SortSection";
import CalendarSection from "./CalendarSection/CalendarSection";
import ChooseCart from "./ChooseCart/ChooseCart";

const AfishaPage = () => {
    return (
        <>
          <PopUp/>
          <SortSection/>
          <CalendarSection/>
          <ChooseCart/>
        </>
    );
};

export default AfishaPage;