import React from 'react';
import "./FirstSection.sass"
import img from './FirstSection__img.png'
const FirstSection = () => {
    return (
        <section className="firstSection">
            <div className="container firstSection__container">
                <h2 className="firstSection__h2">
                    Единая карта лояльности
                    CITY312
                </h2>
                <h3 className="firstSection__h3">
                    это уникальное сообщество продавцов  и покупателей
                    на взаимовыгодных условиях
                </h3>
                <div className="firstSection__img">
                    <img src={img} alt="312 card"/>
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
            </div>
        </section>
    );
};

export default FirstSection;