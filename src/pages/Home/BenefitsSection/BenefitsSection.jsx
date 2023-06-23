import React from 'react';
import "./BenefitsSection.sass"
import Line from "../../../components/Line/Line";
const BenefitsSection = () => {
    return (
        <section className="benefitsSection">
            <div className="container benefitsSection__container">
                <div className="benefitsSection__cards">
                    <div className="benefitsSection__card">
                        <div className="benefitsSection__content">
                            <div className="benefitsSection__text">
                                <h3 className="benefitsSection__h3">примерная</h3>
                                <h4 className="benefitsSection__h4">выгода для
                                    <br/>
                                    пользователей карт</h4>
                            </div>
                            <div className="benefitsSection__circle">100%</div>
                        </div>
                    </div>
                    <div className="benefitsSection__card">
                        <div className="benefitsSection__content">
                            <div className="benefitsSection__text">
                                <h3 className="benefitsSection__h3">узнаваемость</h3>
                                <h4 className="benefitsSection__h4">вашего бренда</h4>
                            </div>
                            <div className="benefitsSection__circle">100%</div>
                        </div>
                    </div>
                </div>
                <div className="benefitsSection__txt">
                    <h2 className="benefitsSection__h2 title">
                        Кому это выгодно?
                        <Line/>
                    </h2>
                    <p className="benefitsSection__p p">
                        Выгоду получают все без исключения.
                        Клиенты приобретают услуги и товары
                        на выгодных для себя условиях.  Продавцы,
                        за счет выгодных предложений, увеличивают
                        товарооборот и благодаря поисковой системе внутри Единой дисконтной
                        карта "312", создают целевую аудиторию.
                    </p>


                </div>

            </div>
        </section>
    );
};

export default BenefitsSection;