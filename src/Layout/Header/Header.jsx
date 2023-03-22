import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import logo from './logo.png'
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

    // const [small, setSmall] = useState(false);
    //
    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //         window.addEventListener("scroll", () =>
    //             setSmall(window.pageYOffset > 200)
    //         );
    //     }
    // }, []);
    return (

        // <header className={`header ${
        //     small ? "scrolled" : ""
        // }`}>
        <header className="header">
            <div className="header__container container ">
                <h1 className="header__h1">
                    <NavLink className="header__logo" to='/'>
                        <img src={logo} alt="
                    Единая карта лояльности
                "/>
                    </NavLink>
                    <span className="header__title">
                        Единая карта лояльности
                    </span>
                </h1>
                <HamburgerToggle toggleClass={toggleClass} isActiveHamburger={isActiveHamburger}/>
                <nav className={`header__menu ${isActiveHamburger ? "header__menu_active" : null}`}>
                    <NavBar toggleClass={toggleClass}/>
                </nav>
            </div>
        </header>

    )
        ;
};

export default Header;