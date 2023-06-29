import React from 'react';
import logo from  "./logo.png"
import "./basketCard.sass"
const BasketCard = () => {
    return (
        <div className={'basketCard'}>
            <div className="basketCard__img">
                <img className={'basketCard_pic'} src={logo} alt="Logo"/>
            </div>
            <div className="basketCard__right">
                <h2 className="basketCard__h2">«Вершина вкуса»</h2>
                <p className="basketCard__p">Сет из пицц от пекарни «Вершина вкуса»</p>
                <div className="basketCard__addCount">
                    <button className="basketCard__btn">-</button>
                    <span className="basketCard__span">0</span>
                    <button className="basketCard__btn">+</button>
                </div>
                <div className="basketCard__num">
                    <h3 className="basketCard__h3">1 199 сом</h3>
                    <h4 className="basketCard__h4">599 сом</h4>
                </div>
            </div>
        </div>
    );
};

export default BasketCard;