import React from 'react';
import './PartnerSearch.sass'
import PartnerCard from "../PartnerCard/PartnerCard";

const PartnerSearch = () => {
    return (
        <div className={"partnerSearch"}>
            <div className="partnerSearch__container container">
                <label htmlFor="" className="partnerSearch__label">

                    <input type="text" className="partnerSearch__input"/>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.560059" y="0.908691" width="26.1645" height="26.1818" rx="9.51923" fill="url(#paint0_linear_620_7087)"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.3078 18.0962C16.1091 19.2725 14.4531 20 12.624 20C8.96565 20 6 17.0899 6 13.5C6 9.91015 8.96565 7 12.624 7C16.2823 7 19.2479 9.91015 19.2479 13.5C19.2479 14.9376 18.7724 16.2661 17.9672 17.3424L21.9998 21.2996L21.2861 22L17.3078 18.0962ZM18.2479 13.5C18.2479 16.5198 15.7479 19 12.624 19C9.50004 19 7 16.5198 7 13.5C7 10.4802 9.50004 8 12.624 8C15.7479 8 18.2479 10.4802 18.2479 13.5Z" fill="#282828"/>
                        <defs>
                            <linearGradient id="paint0_linear_620_7087" x1="13.6423" y1="0.908691" x2="13.6423" y2="27.0905" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FFE25A"/>
                                <stop offset="1" stopColor="#FFA852"/>
                            </linearGradient>
                        </defs>
                    </svg>

                </label>
                <div className={"partnerSearch__row"}>
                    <PartnerCard/>
                    <PartnerCard/>
                    <PartnerCard/>
                    <PartnerCard/>
                </div>

            </div>
            
        </div>
    );
};

export default PartnerSearch;