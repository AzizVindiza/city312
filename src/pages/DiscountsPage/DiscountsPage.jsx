import React from 'react';
import CatalogSection from "./CatalogSection/CatalogSection";
import SearchSection from "./SearchSection/SearchSection";
import CartSection from "./CartSection/CartSection";
import SortSection from "./SortSection/SortSection";


const DiscountsPage = () => {
    return (
        <>
            <CatalogSection/>
            <SearchSection/>
            <SortSection/>
            <CartSection/>

        </>
    );
};

export default DiscountsPage;