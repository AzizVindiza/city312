import React, {useState} from 'react';
import Btn from "../../components/Btn/Btn";
import "./registerUser.sass"
const RegisterPartner = () => {

    return (
        <div className={'registerUser'}>
            <div className="container registerUser__container">
                <h2 className="registerUser__h2">РЕГИСТРАЦИЯ  ПОЛЬЗОВАТЕЛЯ</h2>
                <form className="registerUser__form">

                        <div className="registerUser__box">
                            <div className="registerUser__wrapper">
                                <div className="registerUser__logo">
                                    <img src={''} alt=""/>
                                </div>
                                <h3 className="registerUser__download">Загрузить логотип </h3>
                            </div>

                            <label htmlFor="" className="registerUser__label registerUser__label_message">
                                <span className="registerUser__span">Почта</span>
                                <input type="text" className="registerUser__input"/>
                            </label>
                            <div className="registerUser__times">
                                <label  className="registerUser__labelTime">
                                    <span className={'registerUser__name'}>Имя</span>
                                    <input type="text" className="registerUser__inputTime"/>
                                    <span className="registerUser__spanTime">
                                     <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2559 12.707L11.3745 16V6H9.62448V16L6.74311 12.707L5.50586 14.121L9.26223 18.414C9.59041 18.7889 10.0354 18.9996 10.4995 18.9996C10.9635 18.9996 11.4086 18.7889 11.7367 18.414L15.4931 14.121L14.2559 12.707Z" fill="#F8A303"/>
</svg>

                                </span>
                                </label>
                                <label  className="registerUser__labelTime">
                                    <span className={'registerUser__name'}>Фамилия</span>
                                    <input type="text" className="registerPartner__inputTime"/>
                                    <span className="registerUser__spanTime">
                                     <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2559 12.707L11.3745 16V6H9.62448V16L6.74311 12.707L5.50586 14.121L9.26223 18.414C9.59041 18.7889 10.0354 18.9996 10.4995 18.9996C10.9635 18.9996 11.4086 18.7889 11.7367 18.414L15.4931 14.121L14.2559 12.707Z" fill="#F8A303"/>
</svg>
                                </span>
                                </label>
                            </div>
                            <label htmlFor="" className="registerUser__label">
                                <span className="registerUser__span">Номер телефона</span>
                                <input type="number" className="registerUser__input"/>
                            </label>
                            <label htmlFor="" className="registerUser__label">
                                <span className="registerUser__span">Дата рождения</span>
                                <input type="email" className="registerUser__input"/>
                            </label>
                            <h4 className="registerPartner__title">Номер дисконтной карты</h4>
                            <label htmlFor="" className="registerUser__labelNum">
                                <input type="number" className="registerUser__inputNum"/>
                            </label>
                            <label htmlFor="" className="registerUser__labelNum">
                                <span className="registerUser__span">Пароль</span>
                                <input type="password" className="registerUser__inputNum"/>
                            </label>

                        </div>
                    <div className="registerUser__box registerUser__box_third">

                        <label className="registerUser__check">
                            <input type="checkbox" className="registerUser__inputCheck"/>
                            <span className={'registerUser__spanContract'}>Довогор аферты</span>
                        </label>
                        <div className="registerUser__submit">
                            <Btn text={'РЕГИСТРАЦИЯ'} theme={'btnUser'}/>
                        </div>
                        <p className="registerUser__has">у меня есть аккаунт</p>


                    </div>

                </form>
            </div>
        </div>
    );
};

export default RegisterPartner;