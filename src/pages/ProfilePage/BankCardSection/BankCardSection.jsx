import React from 'react';
import './BankCardSection.sass'
import Btn from "../../../components/Btn/Btn";

const BankCardSection = () => {
    return (
        <section className="bankCard">
            <div className="bankCard__container container">
                <div className="bankCard__wrapper">
                    <h3 className="bankCard__h3">
                        Привяжите свою банковскую карту для удобстав!
                        Вы можете покупать и оплачивать товар/услугу прямо на на нашем сайте.
                    </h3>
                    <form className="bankCard__form">
                        <label htmlFor="" className="bankCard__label">
                            <span className="bankCard__span">
                                Номер карты
                            </span>
                            <input type="text"/>
                        </label>
                        <label htmlFor="" className="bankCard__label">
                            <span className="bankCard__span" placeholder={"ММ/ГГ"}>
                                Срок действия карты
                            </span>
                            <input type="text"/>
                        </label>
                        <label htmlFor="" className="bankCard__label">
                            <span className="bankCard__span">
                                Имя владельца
                            </span>
                            <input type="text"/>
                        </label>
                        <label htmlFor="" className="bankCard__label">
                            <span className="bankCard__span">
                                Код CVC/CVV
                            </span>
                            <input type="text"/>
                        </label>
                        <label htmlFor="" className="bankCard__label">
                            <span className="bankCard__span">
                                Email
                            </span>
                            <input type="text"/>
                        </label>
                        <div className="bankCard__box">
                            <Btn text={'Сохранить'}/>
                            <p className="bankCard__p">Здесь должен быть текст о защите банковских переводах.</p>
                        </div>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default BankCardSection;