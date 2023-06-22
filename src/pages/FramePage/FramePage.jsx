import React from 'react';
import SliderFrame from "./SliderFrame/SliderFrame";
import WrapperSection from "./WrapperSection/WrapperSection";
import TextSection from "./TextSection/TextSection";
import MapSection from "./MapSection/MapSection";
import CometSection from "./CommetSection/CometSection";
import SwiperFirst from "./SwiperFirst/SwiperFirst";

const FramePage = () => {
    return (
        <>
           <WrapperSection/>
            <TextSection/>
            <SwiperFirst title={'Смотрете другие товары'}/>
            <MapSection/>
            <CometSection/>
            <SwiperFirst title={'Действующие акции'}/>

        </>
    );
};

export default FramePage;