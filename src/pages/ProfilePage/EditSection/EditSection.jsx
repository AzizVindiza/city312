import React from 'react';
import './editSection.sass'
import photo from "./photo.svg"
import Btn from "../../../components/Btn/Btn";

const EditSection = () => {
    return (
        <section className="edit">
            <div className="edit__container container">
                <div className="edit__wrapper">
                    <form className="edit__form" action="">
                        <h2 className="edit__h2">Редактировать профиль</h2>
                        <div className="edit__img">
                            <img src={photo} alt=""/>
                            <a href="">сменить фото</a>
                        </div>
                        <label htmlFor="" className="edit__label">
                            <span className="edit__span">Фамилия</span>
                            <input type="text" className="edit__input"/>
                        </label>
                        <label htmlFor="" className="edit__label">
                            <span className="edit__span">Имя</span>
                            <input type="text" className="edit__input"/>
                        </label>
                        <label htmlFor="" className="edit__label">
                            <span className="edit__span">Номер телефона</span>
                            <input type="text" className="edit__input"/>
                        </label>
                        <label htmlFor="" className="edit__label">
                            <span className="edit__span">Электронная почта</span>
                            <input type="text" className="edit__input"/>
                        </label>
                        <label htmlFor="" className="edit__label">
                            <span className="edit__span">Дата рождения </span>
                            <input type="text" className="edit__input"/>
                        </label>
                        <label htmlFor="" className="edit__label">
                            <span className="edit__span">Номер дисконтной карты</span>
                            <input type="text" className="edit__input"/>
                        </label>
                        <label htmlFor="" className="edit__label">
                            <span className="edit__span">Пароль</span>
                            <input type="text" className="edit__input"/>
                        </label>
                        <div className="edit__btn">
                            <Btn text={"Сохранить"} theme={"edit"}/>
                            <span>удалить аккаунт</span>
                        </div>


                    </form>
                </div>
            </div>

        </section>
    );
};

export default EditSection;