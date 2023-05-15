import React from 'react';
import SliderFrame from "../SliderFrame/SliderFrame";
import AddBasket from "./AddBasket/AddBasket";
import "./wrapperBlock.sass"
const WrapperSection = () => {
    return (
        <div className={'wrapperBlock'}>
            <div className="container wrapperBlock__container">
                <h2 className="wrapperBlock__h2">Сет из пицц от пекарни «Вершина вкуса»</h2>
                <p className="wrapperBlock__p">Московская ., г. Бишкек , мкр-н Салтыковка</p>
                <div className="wrapperBlock__wrapper">
                    <SliderFrame/>
                    <AddBasket/>
                </div>

            </div>

        </div>
    );
};

export default WrapperSection;