import React from 'react';
import pic from "./Ellipse 3021 (1).png"
import image from "./pic.png"
import Btn from "../../../../components/Btn/Btn";
import "./reacallSection.sass"
const RecallSection = () => {
    return (
        <div className={'recallSection'}>
            <div className="recallSection__container container">
                <div className="recallSection__content">
                    <h2 className="recallSection__h2">Отзывы</h2>
                    <div className="recallSection__box">
                        <div className="recallSection__row">
                            <div className="recallSection__pic">
                                <img src={pic} alt="" className="recallSection__img"/>
                            </div>
                            <div className="wrapper">
                                <h3 className="recallSection__h3">Ирина Мирная </h3>
                                <p className="recallSection__p">Как всегда на высоте</p>
                            </div>
                        </div>
                        <div className="recallSection__row">
                            <div className="recallSection__pic">
                                <img src={pic} alt="" className="recallSection__img"/>
                            </div>
                            <div className="wrapper">
                                <h3 className="recallSection__h3">Ирина Мирная </h3>
                                <p className="recallSection__p">Как всегда на высоте</p>
                            </div>
                        </div>
                        <div className="recallSection__row">
                            <div className="recallSection__pic">
                                <img src={pic} alt="" className="recallSection__img"/>
                            </div>
                            <div className="wrapper">
                                <h3 className="recallSection__h3">Ирина Мирная </h3>
                                <p className="recallSection__p">Как всегда на высоте</p>
                            </div>
                        </div>
                        <div className="recallSection__row">
                            <div className="recallSection__pic">
                                <img src={pic} alt="" className="recallSection__img"/>
                            </div>
                            <div className="wrapper">
                                <h3 className="recallSection__h3">Ирина Мирная </h3>
                                <p className="recallSection__p">Как всегда на высоте</p>
                            </div>
                        </div>
                    </div>
                    <div className="recallSection__comment">
                        <div className="recallSection__picture">
                            <img src={image} alt="" className="recallSection__image"/>
                        </div>
                        <label  className="recallSection__label">
                            <input placeholder={'Введите текст комментария'} type="text" className="recallSection__input"/>
                        </label>
                    </div>
                </div>

                <div className="recallSection__btns">
                    <Btn theme={'recall'} text={'Задaть вопрос'}/>
                    <Btn theme={'recall'} text={'Оставить отзыв'}/>
                </div>
            </div>
        </div>
    );
};

export default RecallSection;