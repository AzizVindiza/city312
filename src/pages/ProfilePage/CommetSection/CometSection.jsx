import React from 'react';
import logo from "./logo.png"
import "./comet.sass"
const CometSection = () => {
    return (
        <div className={'comet'}>

                <h2 className="comet__h2">Мои комментарии</h2>
                <h3 className="comet__h3">Сегодня</h3>
                <div className="comet__wrapper">
                    <div className="comet__menu">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.88086 14.5327C8.88086 14.0868 9.24233 13.7253 9.68823 13.7253C10.1341 13.7253 10.4956 14.0868 10.4956 14.5327C10.4956 14.9786 10.1341 15.3401 9.68823 15.3401C9.24233 15.3401 8.88086 14.9786 8.88086 14.5327Z" stroke="#0077FF" strokeWidth="1.61474" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8.88086 14.5327C8.88086 14.0868 9.24233 13.7253 9.68823 13.7253C10.1341 13.7253 10.4956 14.0868 10.4956 14.5327C10.4956 14.9786 10.1341 15.3401 9.68823 15.3401C9.24233 15.3401 8.88086 14.9786 8.88086 14.5327Z" stroke="black" strokeOpacity="0.2" strokeWidth="1.61474" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8.88086 9.68848C8.88086 9.24258 9.24233 8.8811 9.68823 8.8811C10.1341 8.8811 10.4956 9.24258 10.4956 9.68848C10.4956 10.1344 10.1341 10.4958 9.68823 10.4958C9.24233 10.4958 8.88086 10.1344 8.88086 9.68848Z" stroke="#0077FF" strokeWidth="1.61474" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8.88086 9.68848C8.88086 9.24258 9.24233 8.8811 9.68823 8.8811C10.1341 8.8811 10.4956 9.24258 10.4956 9.68848C10.4956 10.1344 10.1341 10.4958 9.68823 10.4958C9.24233 10.4958 8.88086 10.1344 8.88086 9.68848Z" stroke="black" strokeOpacity="0.2" strokeWidth="1.61474" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8.88086 4.84424C8.88086 4.39834 9.24233 4.03687 9.68823 4.03687C10.1341 4.03687 10.4956 4.39834 10.4956 4.84424C10.4956 5.29014 10.1341 5.65161 9.68823 5.65161C9.24233 5.65161 8.88086 5.29014 8.88086 4.84424Z" stroke="#0077FF" strokeWidth="1.61474" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8.88086 4.84424C8.88086 4.39834 9.24233 4.03687 9.68823 4.03687C10.1341 4.03687 10.4956 4.39834 10.4956 4.84424C10.4956 5.29014 10.1341 5.65161 9.68823 5.65161C9.24233 5.65161 8.88086 5.29014 8.88086 4.84424Z" stroke="black" strokeOpacity="0.2" strokeWidth="1.61474" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                    </div>
                    <div className="comet__row">
                        <div className="comet__block">
                            <div className="comet__logo">
                                <img src={logo} alt=""/>
                            </div>
                            <div className="comet__txt">
                                <p className="comet__p">Вы прокоментировали IFC:</p>
                                <p className="comet__comet">Как получить недвижимость? </p>
                            </div>
                        </div>
                        <div className="comet__right">
                            <h4 className="comet__time">10:30</h4>
                            <label htmlFor="" className="comet__label">
                                <input  className={'comet__input'} type="checkbox"/>
                            </label>
                        </div>
                    </div>
                    <div className="comet__row">
                        <div className="comet__block">
                            <div className="comet__logo">
                                <img src={logo} alt=""/>
                            </div>
                            <div className="comet__txt">
                                <p className="comet__p">Вы прокоментировали IFC:</p>
                                <p className="comet__comet">Как получить недвижимость? </p>
                            </div>
                        </div>
                        <div className="comet__right">
                            <h4 className="comet__time">10:30</h4>
                            <label htmlFor="" className="comet__label">
                                <input  className={'comet__input'} type="checkbox"/>
                            </label>
                        </div>
                    </div>
                    <div className="comet__row">
                        <div className="comet__block">
                            <div className="comet__logo">
                                <img src={logo} alt=""/>
                            </div>
                            <div className="comet__txt">
                                <p className="comet__p">Вы прокоментировали IFC:</p>
                                <p className="comet__comet">Как получить недвижимость? </p>
                            </div>
                        </div>
                        <div className="comet__right">
                            <h4 className="comet__time">10:30</h4>
                            <label htmlFor="" className="comet__label">
                                <input  className={'comet__input'} type="checkbox"/>
                            </label>
                        </div>
                    </div>
                    <div className="comet__row">
                        <div className="comet__block">
                            <div className="comet__logo">
                                <img src={logo} alt=""/>
                            </div>
                            <div className="comet__txt">
                                <p className="comet__p">Вы прокоментировали IFC:</p>
                                <p className="comet__comet">Как получить недвижимость? </p>
                            </div>
                        </div>
                        <div className="comet__right">
                            <h4 className="comet__time">10:30</h4>
                            <label htmlFor="" className="comet__label">
                                <input  className={'comet__input'} type="checkbox"/>
                            </label>
                        </div>
                    </div>
                    <div className="comet__row">
                        <div className="comet__block">
                            <div className="comet__logo">
                                <img src={logo} alt=""/>
                            </div>
                            <div className="comet__txt">
                                <p className="comet__p">Вы прокоментировали IFC:</p>
                                <p className="comet__comet">Как получить недвижимость? </p>
                            </div>
                        </div>
                        <div className="comet__right">
                            <h4 className="comet__time">10:30</h4>
                            <label htmlFor="" className="comet__label">
                                <input  className={'comet__input'} type="checkbox"/>
                            </label>
                        </div>
                    </div>
                </div>


        </div>
    );
};

export default CometSection;