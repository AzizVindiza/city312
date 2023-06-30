import React from 'react';
import pic from "./img.png"
import "./historyCard.sass"
const HistoryCard = () => {
    return (
        <div className={'historyCard'}>
            <div className="historyCard__block">
                <div className="historyCard__img">
                    <img src={pic} alt="" className="historyCard__pic"/>
                </div>
                <div className="content">
                    <h2 className="historyCard__h2">«Вершина вкуса»</h2>
                    <p className="historyCard__p">Сет из пицц от пекарни «Вершина вкуса»</p>
                    <p className="historyCard__sell">Покупка на 599 сом </p>
                    <p className="historyCard__discount">Скидка: 599.00 с</p>
                </div>
            </div>
            <div className="historyCard__right">
                <h3 className="historyCard__h3">Покупка на 1198 сом </h3>
                <div className="historyCard__wrapper">
                    <h4 className="historyCard__h4">Дата покупки
                    </h4>
                    <h5 className="historyCard__h5"> 25.03.23 12:03</h5>
                </div>
                <div className="historyCard__wrapper">
                    <h4 className="historyCard__h4">Товаров:
                    </h4>
                    <h5 className="historyCard__h5">2</h5>
                </div>
                <div className="historyCard__wrapper">
                    <h4 className="historyCard__h4">Сумма:
                    </h4>
                    <h5 className="historyCard__h5">1198 сом</h5>
                </div>
                <div className="historyCard__wrapper">
                    <h4 className="historyCard__h4">Кешбэк:
                    </h4>
                    <h5 className="historyCard__h5">5%</h5>
                </div>
                <div className="historyCard__wrapper">
                    <h4 className="historyCard__h4">Скидка:
                    </h4>
                    <h5 className="historyCard__h5">50%</h5>
                </div>
                <div className="historyCard__wrapper">
                    <h4 className="historyCard__h4">Адрес:
                    </h4>
                    <h5 className="historyCard__h5">ул. Исанова 12</h5>
                </div>
            </div>
        </div>
    );
};

export default HistoryCard;