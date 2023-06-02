import React from 'react';
import ImageSection from "./ImageSection/ImageSection";
import ShopFlower from "./ShopFlower/ShopFlower";
import MapClients from "./MapClients/MapClients";
import RecallSection from "./RecallSection/RecallSection";
import SwiperClients from "./SwiperClients/SwiperClients";
import "./clientsPage.sass"

const ClientsPage = () => {
    return (
        <div className={'clientsPage'}>
            <ImageSection/>
            <ShopFlower/>
            <SwiperClients/>
            <MapClients/>
            <RecallSection/>
            <SwiperClients/>
        </div>
    );
};

export default ClientsPage;