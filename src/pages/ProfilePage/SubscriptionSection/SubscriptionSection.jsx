import React from 'react';
import SubscriptionCard from "./SubscriptionCard/SubscriptionCard";
import './subscriptionSection.sass'

const SubscriptionSection = () => {
    return (
        <section className="subscription">
            <div className="subscription__container container">
                <div className="subscription__wrapper">
                    <h2 className="subscription__h2">
                        Подписки
                    </h2>
                    <div className="subscription__box">

                        <SubscriptionCard/>
                        <SubscriptionCard/>
                        <SubscriptionCard/>


                    </div>




                </div>
            </div>

        </section>
    );
};

export default SubscriptionSection;