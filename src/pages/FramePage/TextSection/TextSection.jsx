import React from 'react';
import "./textSection.sass"
import {Link} from "react-router-dom";
const TextSection = () => {
    return (
        <section className={'textSection'}>
            <div className="textSection__container container">
                <ul className="textSection__list">
                    <li className="textSection__item">Условия</li>
                    <li className="textSection__item">Описание</li>
                    <li className="textSection__item">Гарантии</li>
                    <li className="textSection__item">Адреса</li>
                    <li className="textSection__item">Отзывы</li>
                </ul>
                <h2 className="textSection__h2">Вы можете предъявить купон в электронном или распечатанном виде.
                    Посмотреть меню службы доставки.</h2>
                <p className="textSection__p"> Один человек может купить неограниченное количество купонов для себя или в подарок.
                    Один купон действует на один заказ.</p>
                <h2 className="textSection__h2">    Купон действует на следующие виды услуг:</h2>
                <p className="textSection__p">
                    — Скидка 64% на 3 пиццы диаметром 34 см и 1 пицца в подарок (972 руб. вместо 2700 руб.)
                    — Скидка 65% на 5 пицц диаметром 34 см и 1 пицца в подарок (1575 руб. вместо 4500 руб.)
                    — Скидка 66% на 7 пицц диаметром 34 см и 1 пицца в подарок (2142 руб. вместо 6300 руб.)
                    — Скидка 67% на 10 пицц диаметром 34 см и 2 пиццы в подарок (2970 руб. вместо 9000 руб.)
                    — Скидка 68% на 15 пицц диаметром 34 см и 2 пиццы в подарок (4320 руб. вместо 13 500 руб.)
                    — Скидка 69% на 20 пицц диаметром 34 см и 2 пиццы в подарок (5580 руб. вместо 18 000 руб.)
                </p>
                 <h2 className="textSection__h2">Дополнительное преимущество:</h2>
                <p className="textSection__p">       доставка в пределах МКАД осуществляется бесплатно.</p>
                <h2 className="textSection__h2">
                    Прочие условия:</h2>
                <p className="textSection__p">
                    — доставка осуществляется с 08:00 до 21:00 ежедневно;
                    — время приготовления и доставки составляет от 1,5 до 3 часов;
                    — условия и время доставки за МКАД необходимо уточнять по телефону +7 (916) 420-30-57;
                    — возможен самовывоз по адресу: г. Москва, пр-т Мира, д. 116;
                    — перед заказом необходимо сообщить номер купона менеджеру пекарни по телефону +7 (916) 420-30-57.
                </p>
                <p className="textSection__p">Посмотреть <Link className={'textSection__link'} to={''} > меню службы доставки</Link></p>
            </div>
        </section>
    );
};

export default TextSection;