import React from 'react';
import ImageSection from "./ImageSection/ImageSection";
import ShopFlower from "./ShopFlower/ShopFlower";
import MapClients from "./MapClients/MapClients";

import SwiperClients from "./SwiperClients/SwiperClients";
import "./clientsPage.sass"
import CometSection from "../../FramePage/CommetSection/CometSection";

const ClientsPage = () => {
    return (
        <div className={'clientsPage'}>
            <ImageSection/>
            <ShopFlower/>
            <SwiperClients text={"Действующие акции"}/>
            <MapClients/>
            <CometSection/>
            <SwiperClients text={"Смотрете другие товары "}/>
        </div>
    );
};

export default ClientsPage;