import React from 'react';
import BasketCard from "./BasketCard/BasketCard";
import Btn from "../../../components/Btn/Btn";
import "./basket.sass"
const Basket = () => {
    return (
        <div className={'basket'}>
            <h2 className="basket__h2">Корзина</h2>
            <div className="basket__wrapper">
                <div className="basket__left">
                    <BasketCard/>
                    <BasketCard/>
                    <BasketCard/>
                </div>
                <div className="basket__right">
                    <h3 className="basket__h3">Итог заказа</h3>
                    <div className="basket__product">
                        <h4 className="basket__h4">4 продукта </h4>
                        <h4 className="basket__h4">2 396 сом</h4>
                    </div>
                    <div className="basket__wrapp">
                        <h5 className="basket__h5">Общая сумма</h5>
                        <h5 className="basket__h5">2 396 сом</h5>
                    </div>
                    <Btn theme={'basket'} text={'Перейти к оплате '}/>

                </div>
            </div>
        </div>
    );
};

export default Basket;