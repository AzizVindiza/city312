import React from 'react';
import "./DiscountCard.sass"
import img from './img.png'
import logo from './logo.png'
import LikeButton from "../LikeButton/LikeButton";
const DiscountCard = () => {
    return (
        <div className="discount">
            <div className="discount__img">
                <img src={img} alt=""/>
                <div className="discount__overlay">
                    <div className="discount__overlay-top">
                        <div className="discount__company">
                            <div className="discount__logo">
                                <img src={logo} alt=""/>
                            </div>
                            <div className="discount__overlay-txt">
                                <h3 className="discount__overlay-h3">Florissimo</h3>
                                <h4 className="discount__overlay-h4">Цветочный магазин</h4>
                            </div>
                        </div>
                        <LikeButton/>
                    </div>
                    <div className="discount__overlay-bottom">
                        <div className="discount__overlay-percent">
                            -10%
                        </div>
                    </div>
                </div>
            </div>
            <div className="discount__txt">
                <div className="discount__title">
                    <h3 className="discount__h3">Цветочный магазин</h3>
                    <h4 className="discount__h4">Куплено 671</h4>
                </div>
                <p className="discount__p">
                    Дарите эксклюзивные цветы  для своих любимых или для мероприятия,
                    в нашем магазине цветов .. еще
                </p>
                <div className="discount__bottom">
                    <h4 className="discount__h4">Опубликовано: 02.10.2022</h4>
                    <h5 className="discount__price">599 сом</h5>
                </div>
            </div>
        </div>
    );
};

export default DiscountCard;