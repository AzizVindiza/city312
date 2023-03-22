import React from 'react';
import "./FeedbackSection.sass"
import Line from "../../../components/Line/Line";
import {useForm} from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ky from "ky";
import Btn from "../../../components/Btn/Btn";
import InputMask from "react-input-mask"

const FeedbackSection = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        }
    } = useForm({mode: "onChange"})

    const feedback = async (data) => {
        console.log(data)
        try {
            await ky.post("https://mtk-smart.herokuapp.com/feedback/", {json: data})
                .json()
            toast.success("Контакты успешно отправлены!");
            reset()
        } catch (error) {
            console.log(error.message)
            toast.error("Произошла ошибка!")
        }
    }
    return (
        <section className="feedback">
            <div className="container feedback__container">
                <h2 className="feedback__title title">
                    ОБРАТНАЯ СВЯЗЬ
                    <Line/>
                </h2>
                <form className="form" onSubmit={handleSubmit(feedback)}>
                    <label className='form__label'>
                        <InputMask mask={`+\\9\\96(999)99-99-99`} type='tel'  {...register('phone', {
                            required: {
                                value: true,
                                message: 'Это поле обязательное'
                            },
                            pattern: {
                                value: /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/,
                                message: 'Заполните номер телефона'
                            }
                        })} className={`form__input ${errors.number ? 'form__input_error' : ''}`} placeholder='+996 (000) 000 000'/>

                    </label>
                    <p className='form__error'>
                        {errors.phone && errors.phone?.message}
                    </p>
                    <label className='form__label'>
                        <textarea {...register('message', {
                            required: {
                                message: 'сообщение обязательно к заполнению',
                                value: true
                            }
                        })} className={`form__text-area ${errors.message ? 'form__text-area_error' : ''}`} placeholder='СООБЩЕНИЕ' />

                    </label>
                    <p className='form__error'>
                        {errors.message && errors.message?.message}
                    </p>
                    <Btn text={"отправить"} type={"submit"} theme={""}/>

                </form>
            </div>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
                theme="light"
            />
        </section>
    );
};

export default FeedbackSection;