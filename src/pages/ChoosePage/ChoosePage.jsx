import React from 'react';
import "./choosePage.sass"
import cart from "../RegisterPartner/cart.png"
import {Link} from "react-router-dom";

const ChoosePage = () => {
    return (
        <div className={'choosePage'}>
            <div className="container choosePage__container">
                <div className="choosePage__wrapper">
                    <h2 className="choosePage__h2">РЕГИСТРАЦИЯ
                    </h2>
                    <Link to={''} className="choosePage__links">
                        я пользователь карты
                    </Link>
                    <Link to={'/registerPartner'} className="choosePage__links">
                        я партнер
                    </Link>
                </div>
                <div className="choosePage__cart">
                    <img src={cart} alt="cart" className="choosePage__pic"/>
                </div>
            </div>

        </div>
    );
};

export default ChoosePage;