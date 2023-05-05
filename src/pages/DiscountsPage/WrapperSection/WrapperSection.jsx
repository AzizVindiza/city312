import React from 'react';
import CatalogSection from "./CatalogSection/CatalogSection";
import SearchSection from "./SearchSection/SearchSection";
import "./wrapperSection.sass"

const WrapperSection = () => {
    return (
        <div className={'wrapperSection'}>
            <div className="container wrapperSection__container">
                <CatalogSection/>
                <SearchSection/>
            </div>
        </div>
    );
};

export default WrapperSection;