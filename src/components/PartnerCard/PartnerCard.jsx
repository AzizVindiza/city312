import React from 'react';
import "./PartnerCard.sass"
import Btn from "../Btn/Btn";
import img from "./img.png"
import logo from "./logo.png"
import ShareButton from "../ShareButton/ShareButton";
import LikeButton from "../LikeButton/LikeButton";

const PartnerCard = ({item}) => {
    return (
        <div className="partnerCard">
            <div className="partnerCard__img">
                <img src={item.image} alt={item.name}/>
                <div className="partnerCard__overlay">
                    <ShareButton/>
                    <div className="partnerCard__logo">
                        <img src={item.logo} alt=""/>
                    </div>
                    <LikeButton/>
                </div>
            </div>
            <div className="partnerCard__txt">
                <h3 className="partnerCard__h3">{item.name}</h3>
                <p className="partnerCard__p">{item.description}</p>
                <Btn type={"button"} text={"Подписаться"} theme={"blue"}/>
            </div>
        </div>
    );
};

export default PartnerCard;