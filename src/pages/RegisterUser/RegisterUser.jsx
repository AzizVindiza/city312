import React, {useRef, useState} from 'react';
import Btn from "../../components/Btn/Btn";
import "./registerUser.sass"
import {useAddUserMutation} from "../../redux/ApiSlice/ApiSlice";
// import {fillUser} from "../../redux/reducers/registerSlice";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import axios from "axios";

const RegisterPartner = () => {
    const [image,setImage] = useState('')
    const images = useRef()

    const [ sendRequest,{data,isSuccess}] =  useAddUserMutation()

    const {
        register,
        reset,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({mode:"onBlur"})

    const addRegister = (data) => {
        sendRequest(data)
    }
    const  changeImage = async (e) => {
        try {
            const formData = new FormData()
            const file = e.target.files[0]
            formData.append("image",file)
            await axios.post("https://card-312.herokuapp.com/user",formData)
                .then(({data}) => {
                    return setImage(data.url)
                })

        }catch (err){
            console.log(e)
            console.log(err,"Ошибка")
            alert("Ошибка при загрузке")

        }
    }


    return (
        <div className={'registerUser'}>
            <div className="container registerUser__container">
                <h2 className="registerUser__h2">РЕГИСТРАЦИЯ  ПОЛЬЗОВАТЕЛЯ</h2>
                <form onSubmit={handleSubmit(addRegister)} className="registerUser__form">

                    <div className="registerUser__box">
                        <div onClick={() => images.current.click()} className="registerUser__wrapper">
                            <div className="registerUser__logo">
                                <input hidden accept={"image/*,.png,.jpg,.web"}  onChange={changeImage} ref={images} type="file"/>
                                {/*<img src={''} alt=""/>*/}
                                {image}
                            </div>
                            <h3 className="registerUser__download">Загрузить логотип </h3>
                        </div>

                        <label htmlFor="" className="registerUser__label registerUser__label_message">
                            <span className="registerUser__span">Почта</span>
                            <input {...register("email",{
                                required: {
                                    message: "",
                                    value: ""
                                }
                            })} type="email" className="registerUser__input"/>
                            <span className="registerUser__error">{errors.email && errors.email.message}</span>
                        </label>
                        <div className="registerUser__times">
                            <label  className="registerUser__labelTime">
                                <span className={'registerUser__name'}>Имя</span>
                                <input {...register("name",{
                                    required: {
                                        message: "",
                                        value: ""
                                    }
                                })} type="text" className="registerUser__inputTime"/>
                                <span className="registerUser__spanTime">
                                     <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2559 12.707L11.3745 16V6H9.62448V16L6.74311 12.707L5.50586 14.121L9.26223 18.414C9.59041 18.7889 10.0354 18.9996 10.4995 18.9996C10.9635 18.9996 11.4086 18.7889 11.7367 18.414L15.4931 14.121L14.2559 12.707Z" fill="#F8A303"/>
</svg>

                                </span>
                                <span className="registerUser__error">{errors.name && errors.name.message}</span>

                            </label>
                            <label  className="registerUser__labelTime">
                                <span className={'registerUser__name'}>Фамилия</span>
                                <input {...register("lastname",{
                                    required: {
                                        message: "",
                                        value: ""
                                    }
                                })} type="text" className="registerPartner__inputTime"/>
                                <span className="registerUser__spanTime">
                                     <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2559 12.707L11.3745 16V6H9.62448V16L6.74311 12.707L5.50586 14.121L9.26223 18.414C9.59041 18.7889 10.0354 18.9996 10.4995 18.9996C10.9635 18.9996 11.4086 18.7889 11.7367 18.414L15.4931 14.121L14.2559 12.707Z" fill="#F8A303"/>
</svg>
                                </span>
                                <span className="registerUser__error">{errors.lastname && errors.lastname.message}</span>

                            </label>
                        </div>
                        <label htmlFor="" className="registerUser__label">
                            <span className="registerUser__span">Номер телефона</span>
                            <input {...register("email",{
                                required: {
                                    message: "",
                                    value: ""
                                }
                            })} type="number" className="registerUser__input"/>
                        </label>
                        <label htmlFor="" className="registerUser__label">
                            <span className="registerUser__span">Дата рождения</span>
                            <input {...register("data",{
                                required: {
                                    message: "",
                                    value: ""
                                }
                            })} type="date" className="registerUser__input"/>
                            <span className="registerUser__error">{errors.data && errors.data.message}</span>

                        </label>
                        <h4 className="registerPartner__title">Номер дисконтной карты</h4>
                        <label htmlFor="" className="registerUser__labelNum">
                            <input {...register("card",{
                                required: {
                                    message: "",
                                    value: ""
                                }
                            })} type="text" className="registerUser__inputNum"/>
                            <span className="registerUser__error">{errors.cart && errors.cart.message}</span>

                        </label>
                        <label htmlFor="" className="registerUser__labelNum">
                            <span className="registerUser__span">Пароль</span>
                            <input {...register("password",{
                                required: {
                                    message: "",
                                    value: ""
                                }
                            })} type="password" className="registerUser__inputNum"/>
                            <span className="registerUser__error">{errors.password && errors.password.message}</span>

                        </label>

                    </div>
                    <div className="registerUser__box registerUser__box_third">

                        <label className="registerUser__check">
                            <input checked={false} {...register("check",{
                                required: {
                                    message: true,
                                    value: ""
                                }
                            })} type="checkbox" className="registerUser__inputCheck"/>
                            <span className={'registerUser__spanContract'}>Довогор аферты</span>
                            <span className="registerUser__error">{errors.check && errors.check.message}</span>

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