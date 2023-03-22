import React from 'react';
import "./PartnerCard.sass"
import Btn from "../Btn/Btn";
import img from "./img.png"
import logo from "./logo.png"
import ShareButton from "../ShareButton/ShareButton";
import LikeButton from "../LikeButton/LikeButton";

const PartnerCard = () => {
    return (
        <div className="partnerCard">
            <div className="partnerCard__img">
                <img src={img} alt=""/>
                <div className="partnerCard__overlay">
                    <ShareButton/>
                    <div className="partnerCard__logo">
                        <img src={logo} alt=""/>
                    </div>
                    <LikeButton/>
                </div>
            </div>
            <div className="partnerCard__txt">
                <h3 className="partnerCard__h3">Авто универ</h3>
                <p className="partnerCard__p">Утром у вас есть время до обеда, чтобы осмотреть старый город Ош.
                    Посещение холма Соломона, пещерного музея, паломники Сулеймана проходили через этот</p>
                <Btn type={"button"} text={"Подписаться"} theme={"blue"}/>
            </div>
        </div>
    );
};

export default PartnerCard;