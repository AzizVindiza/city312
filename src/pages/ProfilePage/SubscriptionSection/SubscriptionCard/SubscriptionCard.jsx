import React from 'react';
import './subsCriptionCard.sass'
import subs from './subs.svg'

const SubscriptionCard = () => {
    return (
        <div className="subscriptionCard">
            <div className="subscriptionCard__container">

                <div className="subscriptionCard__wrapper">
                    <div className="subscriptionCard__img">
                        <img src={subs} alt=""/>
                    </div>
                    <h2 className="subscriptionCard__h2">Исламский финансовый
                        кооператив</h2>
                    <div className="subscriptionCard__box">
                        <button className="subscriptionCard__btn1">Подписки</button>
                        <button className="subscriptionCard__btn2">Открыть профиль</button>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default SubscriptionCard;