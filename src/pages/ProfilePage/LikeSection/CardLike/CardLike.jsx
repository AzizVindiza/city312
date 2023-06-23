import React from 'react';

import "./cardLike.sass"
import pic from "./pic.png"
const CardLike = () => {
    return (
        <div className={'cardLike'}>
            <div className="cardLike__like">
                <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.35714 0C3.38449 0 0 2.95236 0 6.78673C0 9.4319 1.24621 11.6589 2.89784 13.5036C4.5438 15.3421 6.66735 16.8852 8.58711 18.1768L11.8994 20.4052C12.2622 20.6492 12.7378 20.6492 13.1006 20.4052L16.4129 18.1768C18.3327 16.8852 20.4562 15.3421 22.1022 13.5036C23.7538 11.6589 25 9.43189 25 6.78673C25 2.95236 21.6155 0 17.6429 0C15.595 0 13.7931 0.954355 12.5 2.18921C11.2069 0.954355 9.40496 0 7.35714 0Z" fill="#FF0000"/>
                </svg>

            </div>
            <div className="cardLike__img">
                <img src={pic} className={'cardLike__pic'} alt=""/>
            </div>
            <div className="cardLike__right">
                <h3 className="cardLike__h3">11/03/23 </h3>
                <h4 className="cardLike__h4">«Вершина вкуса»</h4>
                <p className="cardLike__p">Сет из пицц от пекарни «Вершина вкуса»</p>
                <div className="cardLike__wrapper">
                    <h5 className="cardLike__open">Открыть </h5>
                    <div className="cardLike__svg">
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM13.423 6.53033C13.7159 6.23744 13.7159 5.76256 13.423 5.46967L8.65001 0.696699C8.35711 0.403806 7.88224 0.403806 7.58935 0.696699C7.29645 0.989593 7.29645 1.46447 7.58935 1.75736L11.832 6L7.58935 10.2426C7.29645 10.5355 7.29645 11.0104 7.58935 11.3033C7.88224 11.5962 8.35711 11.5962 8.65001 11.3033L13.423 6.53033ZM1 6.75L12.8926 6.75V5.25L1 5.25L1 6.75Z" fill="#0077FF"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardLike;