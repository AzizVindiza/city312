import React from 'react';
import "./FirstSection.sass"
import img from './FirstSection__img.png'
import bg1 from './FirstSection__bg1.png'
import bg2 from './FirstSection__bg2.png'

const FirstSection = () => {
    return (
        <section className="firstSection">
            <div className="container firstSection__container">
                <div className="firstSection__top">
                    <div className="firstSection__text">
                        <h2 className="firstSection__h2">
                            Единая карта лояльности
                            <br/>
                            <span className="highlight">CITY312</span>
                        </h2>
                        <h3 className="firstSection__h3">
                            это уникальное сообщество продавцов  и покупателей
                            на взаимовыгодных условиях
                        </h3>
                    </div>
                    <div className="firstSection__img">
                        <img src={img} alt="312 card"/>
                    </div>
                </div>
                <div className="firstSection__numbers">
                    <div className="firstSection__card">
                        <h3 className="firstSection__card-numb">100+</h3>
                        <p className="firstSection__card-p">партнеров</p>
                    </div>
                    <div className="firstSection__card">
                        <h3 className="firstSection__card-numb">13000</h3>
                        <p className="firstSection__card-p">довольных
                            пользвателей</p>
                    </div>
                    <div className="firstSection__card">
                        <h3 className="firstSection__card-numb">100+</h3>
                        <p className="firstSection__card-p">предложений
                            скидок</p>
                    </div>
                </div>
                <div className="firstSection__bg1">
                    <img src={bg1} alt="bg"/>
                </div>
                <div className="firstSection__bg2">
                    <img src={bg2} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default FirstSection;