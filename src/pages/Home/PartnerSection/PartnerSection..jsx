import React from 'react';
import './partnerSection.sass'
import partner from './partner.svg'

const PartnerSection = () => {
    return (
        <section className="partner">
            <div className="partner__container container">
                <div className="partner__wrapper">
                    <h2 className="partner__h2">
                        Для партнеров
                    </h2>
                    <p className="partner__p">
                        "CITY 312" предлагает но вый способ эффективной рекламы вашего бизнеса, товаров и услуг в Бишкеке. С помощью нашего сервиса, ваши клиенты будут в курсе всех скидок и акций, проводимых вашей компанией. Мы поможем вам
                        увеличить узнаваемость и повысить лояльность клиентов, что приведет к устойчивому потоку покупателей и стабильному доходу.
                    </p>
                </div>
                <div className="partner__img">
                    <img src={partner} alt=""/>
                </div>
            </div>

        </section>
    );
};

export default PartnerSection;