import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import logo from "./logocity.svg"
import "./Header.scss"

import HamburgerToggle from "./HamburgerToggle/HamburgerToggle";
import NavBar from "./NavBar/NavBar";
import {animateScroll} from "react-scroll";

const Header = () => {
    const [isActiveHamburger, setActiveHamburger] = useState(false);
    const [isActiveHamburgerMenu, setActiveHamburgerMenu] = useState(false);

    const toggleClass = () => {
        setActiveHamburger(!isActiveHamburger);
        setActiveHamburgerMenu(!isActiveHamburgerMenu);
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0
        })
    };
    const closeLink = () => {
        setActiveHamburger(false);
        setActiveHamburgerMenu(false);
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0
        })
    };


    return (


        <header className="header">
            <div className="header__container container ">
                <h1 className="header__h1">
                    <NavLink className="header__logo" to='/'>
                        <img src={logo} alt="
                    Единая карта лояльности
                "/>
                    </NavLink>
                    <NavLink to={"/"} className="header__title">
                        Единая карта лояльности

                    </NavLink>

                </h1>
                <HamburgerToggle toggleClass={toggleClass} isActiveHamburger={isActiveHamburger}/>
                <nav className={`header__menu ${isActiveHamburger ? "header__menu_active" : null}`}>
                    <NavBar toggleClass={closeLink}/>
                </nav>
            </div>
        </header>

    )
        ;
};

export default Header;