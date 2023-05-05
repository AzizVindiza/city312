import React from 'react';
import "./cartSection.sass"
import DiscountCard from "../../../components/DiscountCard/DiscountCard";
import Btn from "../../../components/Btn/Btn";


const CartSection = () => {
    return (
        <div className={'cartSection'}>
            <div className="container cartSection__container">
                <h2 className="cartSection__h2">Все скидки </h2>
                <div className="cartSection__wrapper">
                    <DiscountCard/>
                    <DiscountCard/>
                    <DiscountCard/>
                    <DiscountCard/>
                    <DiscountCard/>
                    <DiscountCard/>
                    <DiscountCard/>
                    <DiscountCard/>
                </div>
                <div className="cartSection__wrapp">
                    <Btn text={'полный список'} type={'button'} width={'214px'}/>
                </div>

             </div>
        </div>
    );
};

export default CartSection;