import React, {useRef, useState} from 'react';
import Btn from "../../components/Btn/Btn";
import "./registerUser.sass"

import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import axios from "axios";
import {useAddUserMutation} from "../../redux/ApiSlice/ApiSlice";

const RegisterPartner = () => {
    const [image,setImage] = useState('')
    const images = useRef()
    const [addUser] = useAddUserMutation()



    const {
        register,
        reset,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({mode:"onBlur"})

    const addRegister = (data) => {
       addUser(data)
    }


    return (
        <div className={'registerUser'}>
            <div className="container registerUser__container">
                <h2 className="registerUser__h2">РЕГИСТРАЦИЯ  ПОЛЬЗОВАТЕЛЯ</h2>
                <form noValidate onSubmit={handleSubmit(addRegister)} className="registerUser__form">

                    <div className="registerUser__box">
                        <div   className="registerUser__wrapper">
                            <div className="registerUser__logo">
                                <input hidden accept={"image/*,.png,.jpg,.web"}   ref={images} type="name"/>
                                {/*<img src={''} alt=""/>*/}
                                {image}
                            </div>


                            <label htmlFor="" className="registerUser__label registerUser__label_message">
                                <span className="registerUser__span">Почта</span>
                                <input {...register("email",{
                                    required: {
                                        message: "Заполните поле",
                                        value: true
                                    },
                                    maxLength: {
                                        message: 'Максимальная длинна 64 символов',
                                        value: 64
                                    },

                                })} type="email" className="registerUser__input"/>
                                <span className="registerUser__error">{errors.email && errors.email.message}</span>
                            </label>
                            <div className="registerUser__times">
                                <label  className="registerUser__labelTime">
                                    <span className={'registerUser__name'}>Имя</span>
                                    <input {...register("first_name",{
                                        required: {
                                            message: "Заполните поле",
                                            value: ""
                                        },
                                        maxLength: {
                                            message: 'Максимальная длинна 150 символов',
                                            value: 150
                                        },
                                    })} type="text" className="registerUser__inputTime"/>
                                    <span className="registerUser__spanTime">
                                     <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2559 12.707L11.3745 16V6H9.62448V16L6.74311 12.707L5.50586 14.121L9.26223 18.414C9.59041 18.7889 10.0354 18.9996 10.4995 18.9996C10.9635 18.9996 11.4086 18.7889 11.7367 18.414L15.4931 14.121L14.2559 12.707Z" fill="#F8A303"/>
</svg>

                                </span>
                                    <span className="registerUser__error">{errors.first_name && errors.first_name.message}</span>

                                </label>
                                <label  className="registerUser__labelTime">
                                    <span className={'registerUser__name'}>Фамилия</span>
                                    <input {...register("last_name",{
                                        required: {
                                            message: "Заполните поле",
                                            value: true
                                        },
                                        maxLength: {
                                            message: 'Максимальная длинна 150 символов',
                                            value: 150
                                        },

                                    })} type="text" className="registerPartner__inputTime"/>
                                    <span className="registerUser__spanTime">
                                     <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2559 12.707L11.3745 16V6H9.62448V16L6.74311 12.707L5.50586 14.121L9.26223 18.414C9.59041 18.7889 10.0354 18.9996 10.4995 18.9996C10.9635 18.9996 11.4086 18.7889 11.7367 18.414L15.4931 14.121L14.2559 12.707Z" fill="#F8A303"/>
</svg>
                                </span>
                                    <span className="registerUser__error">{errors.last_name && errors.last_name.message}</span>

                                </label>
                            </div>
                            <label htmlFor="" className="registerUser__label">
                                <span className="registerUser__span">Номер телефона</span>
                                <input {...register("phone_one",{
                                    required: {
                                        message: "Заполните поле",
                                        value: ""
                                    },
                                    maxLength: {
                                        message: 'Максимальная длинна 32 символов',
                                        value: 32
                                    },
                                })} type="text" className="registerUser__input"/>
                            </label>
                            <label htmlFor="" className="registerUser__label">
                                <span className="registerUser__span">Дата рождения</span>
                                <input {...register("dob",{
                                    required: {
                                        message: "Заполните поле",
                                        value: true
                                    },
                                    maxLength: {
                                        message: 'Максимальная длинна 16 символов',
                                        value: 16
                                    },

                                })} type="date" className="registerUser__input"/>
                                <span className="registerUser__error">{errors.dob && errors.dob.message}</span>

                            </label>
                            <h4 className="registerPartner__title">Номер дисконтной карты</h4>
                            <label htmlFor="" className="registerUser__labelNum">
                                <input {...register("card",{
                                    required: {
                                        message: "Заполните поле",
                                        value: true
                                    },
                                    maxLength: {
                                        message: 'Максимальная длинна 16 символов',
                                        value: 16
                                    },
                                    minLength:{
                                        message: 'Минимальная длинна 1',
                                        value: 1
                                    }
                                })} type="text" className="registerUser__inputNum"/>
                                <span className="registerUser__error">{errors.card && errors.card.message}</span>

                            </label>
                            <label htmlFor="" className="registerUser__labelNum">
                                <span className="registerUser__span">Пароль</span>
                                <input {...register("resetPasswordUUID",{
                                    required: {
                                        message: "Заполните поле",
                                        value: ""
                                    }
                                })} type="password" className="registerUser__inputNum"/>
                                <span className="registerUser__error">{errors.resetPasswordUUID && errors.resetPasswordUUID.message}</span>

                            </label>


                        </div>


                    </div>
                    <div className="registerUser__box registerUser__box_third">

                        <label className="registerUser__check">
                            <input checked={false} {...register("is_active",{
                                required: {
                                    message: true,
                                    value: ""
                                }
                            })} type="checkbox" className="registerUser__inputCheck"/>
                            <span className={'registerUser__spanContract'}>Довогор аферты</span>

                        </label>
                        <div className="registerUser__submit">
                            <Btn type={"submit"} text={'РЕГИСТРАЦИЯ'} theme={'btnUser'}/>
                        </div>
                        <Link to={"entry"} className="registerUser__has">у меня есть аккаунт</Link>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default RegisterPartner;