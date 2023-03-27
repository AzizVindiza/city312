import React from 'react';
import "./DiscountsSection.sass"
import img6 from "./6.png"
import img5 from "./5.png"
import img4 from "./4.png"
import img3 from "./3.png"
import img2 from "./2.png"
import img1 from "./1.png"
import Line from "../../../components/Line/Line";
const DiscountsSection = () => {
    return (
        <section className="discountsSection">
                    <h2 className="discountsSection__title title">
                        Основные виды скидки
                        <Line/>
                    </h2>
            <div className="container discountsSection__container">
                <div className="discountsSection__card">
                    <h2 className="discountsSection__h2">Основные виды скидки</h2>
                    <div className="discountsSection__img">
                        <img src={img1} alt="1"/>
                    </div>
                    <p className="discountsSection__p">
                        Постоянная скидка, то есть скидка одинаковая во времени на все типы товаров.
                    </p>
                </div>
                <div className="discountsSection__card">
                    <div className="discountsSection__img">
                        <img src={img2} alt="discount "/>
                    </div>
                    <p className="discountsSection__p">
                        Скидка по времени или дате, например, при покупке товара или услуги с 9:00 до 12:00 или скидка предоставляется каждую пятницу с 10:00 до 19:00.
                    </p>
                </div>
                <div className="discountsSection__card">
                    <div className="discountsSection__img">
                        <img src={img3} alt="discount "/>
                    </div>
                    <p className="discountsSection__p">
                        Скидка, зависящая от суммы покупки, например, текущая покупка до 500 с. скидка 2%.
                    </p>
                </div>
                <div className="discountsSection__card">
                    <div className="discountsSection__img">
                        <img src={img4} alt="discount "/>
                    </div>
                    <p className="discountsSection__p">
                        Скидка на определенные типы или группы товаров, например, скидка на все товары
                        с желтым ценником.
                    </p>
                </div>
                <div className="discountsSection__card">
                    <div className="discountsSection__img">
                        <img src={img5} alt="discount "/>
                    </div>
                    <p className="discountsSection__p">
                        Накопительная система скидок, например, при каждой потраченной тысячи сомов, последующая скидка возрастает на 1%.
                    </p>
                </div>
                <div className="discountsSection__card">
                    <div className="discountsSection__img">
                        <img src={img6} alt="discount"/>
                    </div>
                    <p className="discountsSection__p">
                        Бонусная программа - отложенная
                        скидка, например, при каждой покупке клиент копит
                        баллы, и при достижении определенного порога, клиент может накопленные баллы
                        обменять на товар или услугу
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DiscountsSection;