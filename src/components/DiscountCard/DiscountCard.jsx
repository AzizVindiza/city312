import React from 'react';
import "./DiscountCard.sass"
import img from './img.png'
import logo from './logo.png'
import LikeButton from "../LikeButton/LikeButton";
const DiscountCard = ({item}) => {
    return (
        <div className="discount">
            <div className="discount__img">
                <img src={item.image} alt=""/>
                <div className="discount__overlay">
                    <div className="discount__overlay-top">
                        <div className="discount__company">
                            <div className="discount__logo">
                                <img src={logo} alt=""/>
                            </div>
                            <div className="discount__overlay-txt">
                                <h3 className="discount__overlay-h3">Florissimo</h3>
                                <h4 className="discount__overlay-h4">{item.name}</h4>
                            </div>
                        </div>
                        <LikeButton/>
                    </div>
                    <div className="discount__overlay-bottom">
                        <div className="discount__overlay-percent">
                            {item.discounts}
                        </div>
                    </div>
                </div>
            </div>
            <div className="discount__txt">
                <div className="discount__title">
                    <h3 className="discount__h3">{item.name}</h3>
                    <h4 className="discount__h4">Куплено 671</h4>
                </div>
                <p className="discount__p">{item.description}</p>
                <div className="discount__bottom">
                    <h4 className="discount__h4">Опубликовано: {item.data}</h4>
                    <h5 className="discount__price">{item.price} сом</h5>
                </div>
            </div>
        </div>
    );
};

export default DiscountCard;