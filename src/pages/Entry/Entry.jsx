import React from 'react';
import google from "./Google Logos By hrhasnai (2).png"
import "./entry.sass"
import first from "./first.png"
import second from "./second.png"
import women from "./women.png"
import {useForm} from "react-hook-form";

const Entry = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({mode: "onBlur"})


    return (
        <div className={'entry'}>

            <div className="entry__first">
                <img className={'entry__picture'} src={first} alt=""/>
            </div>
            <div className="entry__container">
                <div className="entry__left">
                    <img src={second} className={'entry__image'} alt=""/>
                    <img src={women} className={'entry__image-2'} alt=""/>
                </div>
                <div className="entry__right">
                    <h2 className="entry__h2">ВОЙТИ</h2>
                    <form  className="entry__form">
                        <label htmlFor="" className="entry__label">
                            <span className={'entry__span'}>   Почта</span>

                            <input {...register("email", {
                                required: {
                                    message:"Заполните логин",
                                    value:true
                                },
                                maxLength: {
                                    message: 'Максимальная длинна 15 символов',
                                    value: 15
                                },
                                minLength: {
                                    message: 'Минимальная длинна 3 символов',
                                    value: 3
                                }
                            })} placeholder={''} type="text" className="entry__input"/>
                            <span className={'entry__message'}> {errors.email && errors.email.message}</span>
                        </label>
                        <label htmlFor="" className="entry__label">
                            <span className={'entry__span-2'}>Пароль</span>

                            <input {...register("password", {
                                required: {
                                    message:"Заполните пароль",
                                    value:true
                                },
                                maxLength: {
                                    message: 'Максимальная длинна 15 символов',
                                    value: 15
                                },
                                minLength: {
                                    message: 'Минимальная длинна 3 символов',
                                    value: 3
                                }
                            })} placeholder={''} type="text" className="entry__input"/>
                            <span className={'entry__message'}> {errors.password && errors.password.message}</span>
                        </label>
                        <button type={"submit"} className={'entry__btn'}>Авторизоваться</button>
                    </form>
                    <div className="entry__wrapper">
                        <div className="entry__line"></div>
                        <h3 className="entry__h3">войти с помощью </h3>
                        <div className="entry__line"></div>
                    </div>
                    <div className="entry__google">
                        <img src={google} className={'entry__img'} alt=""/>
                    </div>
                    <p className="entry__link">забыли логин или пароль?</p>
                </div>
            </div>


        </div>
    );
};

export default Entry;