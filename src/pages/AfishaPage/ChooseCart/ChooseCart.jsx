import React from 'react';
import DiscountCard from "../../../components/DiscountCard/DiscountCard";
import Btn from "../../../components/Btn/Btn";
import "./chooseCart.sass"
import AfishaCard from "../SortSection/AfishaCard/AfishaCard";
const ChooseCart = () => {

    return (
        <div className={'chooseCart'}>
            <div className="container chooseCart__container">
                <div className="chooseCart__wrapper">
                   {/*<AfishaCard/>*/}
                </div>

                <div className="calendarSection__click">
                    <Btn text={'Показать еще'} type={'button'} />
                </div>
            </div>
        </div>
    );
};

export default ChooseCart;