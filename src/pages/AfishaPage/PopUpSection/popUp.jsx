import React, {useState} from 'react';
import CatalogSection from "../../DiscountsPage/WrapperSection/CatalogSection/CatalogSection";
import "./popUp.sass"
const PopUp = () => {
    const [open,setOpen] = useState(false)
    return (
        <div className={'popUp'}>
            <div className="container popUp__container">
                <div className="popUp__wrapper">
                    <h2 className="popUp__h2">Афиша Бишкека</h2>
                    <div onClick={() => setOpen(!open)} className="popUp__catalog">
                        <CatalogSection/>
                    </div>
                 </div>
                {
                    open ?
                        <div className="popUp__popUp">
                            <div onClick={() => setOpen(false)} className="popUp__close">
                                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.5 21C3.5 30.665 11.335 38.5 21 38.5C30.665 38.5 38.5 30.665 38.5 21C38.5 11.335 30.665 3.5 21 3.5C11.335 3.5 3.5 11.335 3.5 21Z" stroke="#292D32" stroke-width="1.18868" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M23.2051 14.8225L17.0451 21L23.2051 27.1775" stroke="#292D32" strokeWidth="1.18868" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>

                            </div>

                            <ul className="popUp__list">
                                <li className="popUp__item">Кино </li>
                                <li className="popUp__item">Театры</li>
                                <li className="popUp__item">Концерты</li>
                                <li className="popUp__item">Выставки</li>
                                <li className="popUp__item">Спорт</li>
                                <li className="popUp__item">Для детей </li>
                            </ul>

                        </div>
                        : ''
                }


            </div>
        </div>
    );
};

export default  PopUp