import React from 'react';
import img from "../../../../components/DiscountCard/img.png";
import LikeButton from "../../../../components/LikeButton/LikeButton";
import "./afishaCard.sass"
import logo from "./Rectangle 2565.png"
const AfishaCard = ({item}) => {
    return (
        <div className="afishaCard">
            <div className="afishaCard__img">
                <img className={'afishaCard__pic'} src={item.image} alt=""/>
                <div className="afishaCard__overlay">
                    <div className="afishaCard__overlay-top">
                        <div className="afishaCard__company">
                        </div>
                        <LikeButton/>
                    </div>
                </div>
            </div>
            <div className="afishaCard__txt">
                <div className="afishaCard__title">
                    <h3 className="afishaCard__h3">{item.title}</h3>
                    <h4 className="afishaCard__h4">Куплено 671</h4>
                </div>
                <p className="afishaCard__p">{item.description}</p>
                <div className="afishaCard__bottom">
                    <h4 className="afishaCard__h4">Опубликовано: 02.10.2022</h4>
                    <h5 className="afishaCard__price">{item.price} сом</h5>
                </div>
            </div>
        </div>
    );
};

export default AfishaCard;