import React from 'react';
import DiscountCard from "../../../components/DiscountCard/DiscountCard";
import Btn from "../../../components/Btn/Btn";
import "./chooseCart.sass"
const ChooseCart = () => {

    return (
        <div className={'chooseCart'}>
            <div className="container chooseCart__container">
                <div className="chooseCart__wrapper">
                    {/*<DiscountCard/>*/}
                </div>

                <div className="calendarSection__click">
                    <Btn text={'Показать еще'} type={'button'} />
                </div>
            </div>
        </div>
    );
};

export default ChooseCart;