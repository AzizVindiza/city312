import React from 'react';
import SliderFrame from "./SliderFrame/SliderFrame";
import WrapperSection from "./WrapperSection/WrapperSection";
import TextSection from "./TextSection/TextSection";
import MapSection from "./MapSection/MapSection";
import CometSection from "./CommetSection/CometSection";

const FramePage = () => {
    return (
        <>
           <WrapperSection/>
            <TextSection/>
            <MapSection/>
            <CometSection/>

        </>
    );
};

export default FramePage;