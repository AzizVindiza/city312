import React from 'react';
import "./Navbar.scss"
import {Link, NavLink} from "react-router-dom";
import logo from  "../logocity.svg"
import Btn from "../../../components/Btn/Btn";


const NavBar = ({toggleClass}) => {

    return (
        <ul className='nav container'>
            <ul className="nav__block">
                <li className="nav__item">
                    <NavLink className="nav__logo" to='/'>
                        <img className={'nav__img'} src={logo} alt="Единая карта лояльности"/>
                    </NavLink>
                </li>
                <li className="nav__item">
                    <h2 className="header__title">
                        Единая карта лояльности
                    </h2>
                </li>
            </ul>
            <ul className="nav__list">
                <Link onClick={toggleClass} to={'afisha'} className="nav__link">афиши/акции</Link>
                <Link onClick={toggleClass} to={'discount'} className="nav__link">Скидки</Link>
                <Link onClick={toggleClass} to={'contact'} className="nav__link">Контакты</Link>
            </ul>
            {/*<li className="nav__item">*/}
            {/*    <a className="nav__link" href="https://instagram.com">О нас</a>*/}
            {/*</li>*/}
            {/*<li className='nav__item'><NavLink className="nav__link" to="/" onClick={() => {*/}
            {/*    toggleClass()*/}
            {/*}}>Цены</NavLink></li>*/}
            {/*<li className='nav__item'><NavLink className="nav__link" to="/services" onClick={() => {*/}
            {/*    toggleClass()*/}
            {/*}}>Услуги</NavLink></li>*/}
            {/*<Btn text={"ВХОД"} type={"button"} theme={"transparent"}/>*/}
            {/*<Btn text={"РЕГИСТРАЦИЯ"} type={"button"} theme={'second'} />*/}

        </ul>
    );
};

export default NavBar;