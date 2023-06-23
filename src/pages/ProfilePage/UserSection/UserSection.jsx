import React, {useContext} from 'react';
import './UserSection.sass'
import {Link} from "react-router-dom";
import avatar from "./img/Avatar.svg"
import {arr} from "../../../utils/arr";
import {CustomContext} from "../../../Context";

const UserSection = () => {
    const {category,setCategory} = useContext(CustomContext)
    return (
        <section className="user">
            <div className="user__container container">
                <div className="user__wrapper">
                    <h2 className="user__h2">
                        мой профиль
                    </h2>
                    <div className="user__row">
                        <div className="user__img">
                            <img src={avatar} alt=""/>
                        </div>
                        <div className="user__">
                            <h3 className="user__name">Жамшитов Ж.</h3>
                            <span>пользователь </span>
                        </div>
                    </div>
                    <div className="user__box">
                        <div className="user__phone">
                            +996 555 55 55 55
                        </div>
                        <div className="user__redux">
                            Редактировать
                        </div>

                    </div>
                    <div className="user__column">
                        <ul className="user__ul">
                            {
                                arr.map((item) => (
                                    <>
                                        <li  onClick={() => setCategory(item.name)} className={`${category === item.name ? 'user__li_active' : 'user__li'}`}>
                                            <div className="user__pic">
                                                <img src={item.img} alt=""/>
                                            </div>

                                            <span className="user__link">{item.name}</span>
                                        </li>
                                    </>

                                ))
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserSection;