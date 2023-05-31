import React from 'react';
import Btn from "../../../../components/Btn/Btn";
import ShopFirst from "./ShopFirst/ShopFirst";
import ShopSecond from "./ShopSecond/ShopSecond";
import "./shopFlower.sass"

const ShopFlower = () => {
    return (
        <div className={'shopFlower'}>
            <div className="shopFlower__container container">
                <div className="shopFlower__wrapper">
                    <ShopFirst/>
                    <ShopSecond/>

                </div>
            </div>
        </div>
    );
};

export default ShopFlower;