import React from 'react';
import './PartnerCard.sass'
import img from './flowers.png'
import logo from  './logo.png'
import Btn from "../../../components/Btn/Btn";


const PartnerCard = () => {
    return (
        <div className={"PartnerCard"}>
            <div className="PartnerCard__container container">
                <div className="PartnerCard__wrapper">
                    <div className="PartnerCard__img">
                        <img src={img} alt=""/>
                        <img className={"PartnerCard__logo"} src={logo} alt=""/>
                    </div>
                    <h2 className="PartnerCard__h2">
                        Исламский финансовый
                        кооператив
                    </h2>
                    <p className="PartnerCard__p">
                        Утром у вас есть время до обеда, чтобы осмотреть старый город Ош.
                        Утром у вас есть время до обеда, чтобы осмотреть старый город Ош.


                    </p>
                    <div className="PartnerCard__box">
                        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_620_7029)">
                                <circle cx="18.9316" cy="16.1908" r="14.5991" fill="white"/>
                                <circle cx="18.9316" cy="16.1908" r="14.2595" stroke="#EAEAEA" strokeWidth="0.679026"/>
                            </g>
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.6438 20.4617C10.4288 20.2396 10.3785 19.9061 10.5184 19.6308L11.1989 18.2913C12.8094 15.1211 16.0716 13.1229 19.6367 13.1229H19.9712C19.9957 12.5946 20.0272 12.0666 20.0657 11.5389L20.1315 10.6391C20.1851 9.90738 21.0037 9.49832 21.6239 9.89337C23.6587 11.1893 25.4277 12.8592 26.8365 14.814L27.2789 15.4279C27.4611 15.6807 27.4611 16.0212 27.2789 16.274L26.8365 16.888C25.4277 18.8427 23.6587 20.5126 21.6239 21.8086C21.0037 22.2036 20.1851 21.7946 20.1315 21.0628L20.0657 20.163C20.0197 19.5329 19.9837 18.9022 19.9578 18.2712C17.8724 18.2112 15.7896 18.6307 13.8753 19.5114L11.4724 20.6168C11.1912 20.7461 10.8587 20.6839 10.6438 20.4617ZM12.7956 18.4107L13.2656 18.1945C15.6045 17.1186 18.1707 16.6643 20.7172 16.8593C21.088 16.8876 21.3777 17.1903 21.3887 17.5609C21.4134 18.3937 21.4561 19.2261 21.5169 20.0576L21.5222 20.1296C23.1164 19.0064 24.5135 17.6253 25.6547 16.0418L25.7923 15.851L25.6547 15.6601C24.5135 14.0766 23.1164 12.6956 21.5222 11.5724L21.5169 11.6444C21.4627 12.3866 21.4228 13.1295 21.3973 13.8729C21.3839 14.2635 21.0623 14.5732 20.6702 14.5732L19.6367 14.5732C16.8262 14.5732 14.2382 16.0408 12.7956 18.4107Z" fill="url(#paint0_linear_620_7029)"/>
                            <defs>
                                <filter id="filter0_d_620_7029" x="0.937391" y="0.233745" width="35.9885" height="35.9885" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="2.03708"/>
                                    <feGaussianBlur stdDeviation="1.69756"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_620_7029"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_620_7029" result="shape"/>
                                </filter>
                                <linearGradient id="paint0_linear_620_7029" x1="18.9278" y1="21.9622" x2="18.9278" y2="10.0453" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#7EC9F5"/>
                                    <stop offset="1" stopColor="#3957ED"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <button className="PartnerCard__btn">
                            Подписаться
                        </button>

                    </div>
                </div>


            </div>

        </div>
    );
};

export default PartnerCard;