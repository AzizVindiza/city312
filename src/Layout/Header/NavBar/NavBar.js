import React from 'react';
import "./Navbar.scss"
import {NavLink} from "react-router-dom";
import logo from "../logo.png";
import Btn from "../../../components/Btn/Btn";


const NavBar = ({toggleClass}) => {
    // const {user} = useSelector((store) => store.user)
    return (
        <ul className='nav container'>
            <li className="nav__item">
                <NavLink className="header__logo" to='/'>
                    <img src={logo} alt="дисконтная карта
                    для скидок"/>
                </NavLink>
            </li>
            <li className="nav__item">
                <h2 className="header__title">
                    Единая карта лояльности
                </h2>
            </li>
            <li className="nav__item">
                <a className="nav__link" href="https://instagram.com">О нас</a>
            </li>
            <li className='nav__item'><NavLink className="nav__link" to="/" onClick={() => {
                toggleClass()
            }}>Цены</NavLink></li>
            <li className='nav__item'><NavLink className="nav__link" to="/services" onClick={() => {
                toggleClass()
            }}>Услуги</NavLink></li>
            <Btn text={"ВХОД"} type={"button"} theme={"transparent"}/>
            <Btn text={"РЕГИСТРАЦИЯ"} type={"button"} />

            {/*<li className='nav__item'><NavLink className="nav__link" to="/reviews" onClick={() => {*/}
            {/*    toggleClass()*/}
            {/*}}>Отзывы</NavLink></li>*/}
            {/*<li className='nav__item'><NavLink className="nav__link" to="/about" onClick={() => {*/}
            {/*    toggleClass()*/}
            {/*}}>Контакты</NavLink>*/}
            {/*</li>*/}
            {/*<li className='nav__item'>*/}
            {/*    <NavLink className="nav__link" to="/vacancies"*/}
            {/*             onClick={() => {*/}
            {/*                 toggleClass()*/}
            {/*             }}>Карьера</NavLink></li>*/}
            {/*{user.email === "" ? <>*/}
            {/*        <li className='nav__item nav__acc'>*/}
            {/*            <NavLink className="nav__link" to="/register" onClick={toggleClass}>*/}
            {/*                Регистрация </NavLink>*/}
            {/*        </li>*/}
            {/*        <li className='nav__item nav__acc'>*/}
            {/*            <NavLink className="nav__link" to="/login" onClick={toggleClass}>*/}
            {/*                Войти </NavLink>*/}
            {/*        </li>*/}
            {/*    </>*/}

            {/*    :*/}
            {/*    <li className='nav__item '>*/}
            {/*        <NavLink className="nav__link nav__acc" to="/account/info" onClick={toggleClass}>Мой*/}
            {/*            аккаунт</NavLink>*/}
            {/*    </li>}*/}
        </ul>
    );
};

export default NavBar;