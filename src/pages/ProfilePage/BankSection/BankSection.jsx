import React from 'react';
import './bankSection.sass'
import qr from "./Qr.svg"
import bank from "./bank.svg"

const BankSection = () => {
    return (
        <section className="bank">
            <div className="bank__container container">
                <div className="bank__wrapper">
                    <h2 className="bank__h2">Моя единая карта лояльности</h2>
                    <div className="bank__img">
                        <img src={bank} alt=""/>
                    </div>
                    <div className="bank__qr">
                        <img src={qr} alt=""/>
                        <p className="bank p">
                            
                        </p>
                    </div>
                    <div className="bank__box">
                        <span className="bank__span">
                            мои баллы
                        </span>
                        <h3 className="bank__h3">
                            100500 б.
                        </h3>
                    </div>
                    <div className="bank__box">
                        <span className="bank__span">
                            Cэкономлено
                        </span>
                        <h3 className="bank__h3">
                            15000 сом
                        </h3>
                    </div>
                    <div className="bank__box">
                        <span className="bank__span">
                            Генерация URL
                        </span>
                        <h3 className="bank__h3">
                            www/behance.ru/
                        </h3>
                    </div>
                    <div className="bank__box">
                        <span className="bank__span">
                            № Карты
                        </span>
                        <h4 className="bank__h4_number">
                            1005 0055 5153
                        </h4>
                    </div>
                    <div className="bank__box">
                        <span className="bank__span">
                            Обладатель
                        </span>
                        <h4 className="bank__h4">
                            Женишов Муратбек Бека
                        </h4>
                    </div>
                    <div className="bank__box">
                        <span className="bank__span">
                            Куплено
                        </span>
                        <h4 className="bank__h4">
                            01.05.2023
                        </h4>
                    </div>
                    <div className="bank__box">
                        <span className="bank__span">
                            Дейтсвителен до
                        </span>
                        <h4 className="bank__h4">
                            01.05.2023
                        </h4>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default BankSection;