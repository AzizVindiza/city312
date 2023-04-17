import React from 'react';
import "./FirstSection.sass"
import img from './FirstSection__img.png'
import img640 from './FirstSection__img640.png'
import img768 from './FirstSection__img768.png'
import img1025 from './FirstSection__img1025.png'
import img1440 from './FirstSection__img1440.png'
import bg1 from './FirstSection__bg1.png'
import bg1640 from './FirstSection__bg1640.png'
import bg1768 from './FirstSection__bg1768.png'
import bg11024 from './FirstSection__bg11024.png'
import bg11440 from './FirstSection__bg11440.png'
import bg2 from './FirstSection__bg2.png'
import bg2640 from './FirstSection__bg2640.png'
import bg2768 from './FirstSection__bg2768.png'
import bg21024 from './FirstSection__bg21024.png'
import bg21440 from './FirstSection__bg21440.png'


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
                        <picture>
                            <source media="(min-width:1439px)" srcSet={img1440}/>
                            <source media="(min-width:1025px)" srcSet={img1025}/>
                            <source media="(min-width:768px)" srcSet={img768}/>
                            <source media="(min-width:640px)" srcSet={img640}/>
                            <img src={img} alt="312 card"/>
                        </picture>
                    </div>
                </div>
                <div className="firstSection__numbers">
                    <div className="firstSection__card">
                        <h3 className="firstSection__card-numb">100+</h3>
                        <p className="firstSection__card-p">партнеров</p>
                    </div>
                    <div className="firstSection__card">
                        <h3 className="firstSection__card-numb">13000</h3>
                        <p className="firstSection__card-p">довольных <br/>
                            пользвателей</p>
                    </div>
                    <div className="firstSection__card">
                        <h3 className="firstSection__card-numb">100+</h3>
                        <p className="firstSection__card-p">предложений <br/>
                            скидок</p>
                    </div>
                </div>
                <div className="firstSection__bg1">
                    <picture>
                        <source media="(min-width:1440px)" srcSet={bg11440}/>
                        <source media="(min-width:1024px)" srcSet={bg11024}/>
                        <source media="(min-width:768px)" srcSet={bg1768}/>
                        <source media="(min-width:640px)" srcSet={bg1640}/>
                        <img src={bg1} alt="bg"/>
                    </picture>

                </div>
                <div className="firstSection__bg2">
                    <picture>
                        <source media="(min-width:1440px)" srcSet={bg21440}/>
                        <source media="(min-width:1024px)" srcSet={bg21024}/>
                        <source media="(min-width:768px)" srcSet={bg2768}/>
                        <source media="(min-width:640px)" srcSet={bg2640}/>
                        <img src={bg2} alt="bg"/>
                    </picture>

                </div>

            </div>
        </section>
    );
};

export default FirstSection;