import React from 'react';
import "./favoritesCard.sass"
import img from "../../../../components/DiscountCard/img.png";
import logo from "../../../../components/DiscountCard/logo.png";
import LikeButton from "../../../../components/LikeButton/LikeButton";
const FavoritesCard = () => {
    return (
        <div className="favoritesCard">
            <div className="favoritesCard__img">
                <div className="favoritesCard__picture">
                    <img className={'favoritesCard__pic'} src={img} alt=""/>
                </div>
                <div className="favoritesCard__overlay">
                    <div className="favoritesCard__overlay-top">
                        <div className="favoritesCard__company">
                            <div className="favoritesCard__logo">
                                <img src={logo} alt={img}/>
                            </div>
                            <div className="favoritesCard__overlay-txt">
                                <h3 className="favoritesCard__overlay-h3">Florissimo</h3>
                                <h4 className="favoritesCard__overlay-h4">Цветочный магазин</h4>
                            </div>
                        </div>
                        <LikeButton/>
                    </div>
                    <div className="favoritesCard__overlay-bottom">
                        <div className="favoritesCard__overlay-percent">
                            -10%
                        </div>
                    </div>
                </div>
            </div>
            <div className="favoritesCard__txt">
                <div className="favoritesCard__title">
                    <h3 className="favoritesCard__h3">Цветочный магазин</h3>
                    <h4 className="favoritesCard__h4">Куплено 671</h4>
                </div>
                <p className="favoritesCard__p">Дарите эксклюзивные цветы  для своих любимых или для мероприятия, в нашем магазине цветов Вас ждут сочные... еще</p>
                <div className="favoritesCard__bottom">
                    <h4 className="favoritesCard__h4">Опубликовано: 02.10.2022</h4>
                    <h5 className="favoritesCard__price">342 сом</h5>
                </div>
            </div>
        </div>
    );
};

export default FavoritesCard;