import React from 'react';
import img from "../../../../components/DiscountCard/img.png";
import LikeButton from "../../../../components/LikeButton/LikeButton";
import "./afishaCard.sass"
import logo from "./Rectangle 2565.png"
const AfishaCard = () => {
    return (
        <div className="afishaCard">
            <div className="afishaCard__img">
                <img src={logo} alt=""/>
                <div className="afishaCard__overlay">
                    <div className="afishaCard__overlay-top">
                        <div className="afishaCard__company">
                            <div className="afishaCard__logo">

                            </div>
                            <div className="afishaCard__overlay-txt">
                                <h3 className="afishaCard__overlay-h3">Florissimo</h3>
                                <h4 className="afishaCard__overlay-h4"></h4>
                            </div>
                        </div>
                        <LikeButton/>
                    </div>
                    <div className="afishaCard__overlay-bottom">
                        <div className="afishaCard__overlay-percent">

                        </div>
                    </div>
                </div>
            </div>
            <div className="afishaCard__txt">
                <div className="afishaCard__title">
                    <h3 className="afishaCard__h3">Цветочный магазин</h3>
                    <h4 className="afishaCard__h4">Куплено 671</h4>
                </div>
                <p className="afishaCard__p">
                    Дарите эксклюзивные цветы  для своих любимых или для мероприятия, в нашем магазине цветов Вас ждут сочные... еще
                </p>
                <div className="afishaCard__bottom">
                    <h4 className="afishaCard__h4">Опубликовано: 02.10.2022</h4>
                    <h5 className="afishaCard__price">599 сом</h5>
                </div>
            </div>
        </div>
    );
};

export default AfishaCard;