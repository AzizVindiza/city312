import React from 'react';
import person from "./Ellipse 3021.png"
import "./cometSection.sass"
import Btn from "../../../components/Btn/Btn";
const CometSection = () => {
    return (
        <section className={'cometSection'}>
            <div className="container cometSection__container ">
                <div className="cometSection__block">
                    <h2 className="cometSection__h2">Отзывы об услуге </h2>
                    <div className="cometSection__box">
                        <div className="cometSection__person">
                            <div className="cometSection__img">
                                <img src={person} alt="image"/>
                            </div>
                            <div className="cometSection__wrapp">
                                <h3 className="cometSection__name">Ирина Мирная </h3>
                                <p className="cometSection__txt">Как всегда на высоте</p>
                            </div>
                        </div>
                        <div className="cometSection__person">
                            <div className="cometSection__img">
                                <img src={person} alt="image"/>
                            </div>
                            <div className="cometSection__wrapp">
                                <h3 className="cometSection__name">Ирина Мирная </h3>
                                <p className="cometSection__txt">Как всегда на высоте</p>
                            </div>
                        </div>
                        <div className="cometSection__person">
                            <div className="cometSection__img">
                                <img src={person} alt="image"/>
                            </div>
                            <div className="cometSection__wrapp">
                                <h3 className="cometSection__name">Ирина Мирная </h3>
                                <p className="cometSection__txt">Как всегда на высоте</p>
                            </div>
                        </div>
                        <div className="cometSection__person">
                            <div className="cometSection__img">
                                <img src={person} alt="image"/>
                            </div>
                            <div className="cometSection__wrapp">
                                <h3 className="cometSection__name">Ирина Мирная </h3>
                                <p className="cometSection__txt">Как всегда на высоте</p>
                            </div>
                        </div>
                        <div className="cometSection__person">
                            <div className="cometSection__img">
                                <img src={person} alt="image"/>
                            </div>
                            <div className="cometSection__wrapp">
                                <h3 className="cometSection__name">Ирина Мирная </h3>
                                <p className="cometSection__txt">Как всегда на высоте</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cometSection__content">
                    <Btn  text={'Задвть вопрос '} theme={'ask'}/>
                    <Btn text={'Оставить отзыв'} theme={'leave'}/>
                </div>
            </div>
        </section>
    );
};

export default CometSection;