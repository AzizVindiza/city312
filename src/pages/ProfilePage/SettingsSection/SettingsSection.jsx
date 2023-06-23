import React from 'react';
import './settingsSection.sass'

import settings from './settings.svg'


const SettingsSection = () => {
    return (
        <section className="settings">
            <div className="settings__container container">
                <div className="settings__wrapper">
                    <div className="settings__row">
                        <div className="settings__img">
                            <img src={settings} alt=""/>
                        </div>

                        <h2 className="settings__h2">Настройки </h2>
                    </div>
                    <h3 className="settings__h3">Язык:</h3>
                    <select name="" id="" className="settings__select">
                        <option value="" className="settings__option">Русский</option>
                        <option value="" className="settings__option">Кыргызский</option>
                        <option value="" className="settings__option">Английский</option>
                    </select>
                    <form action="" className="settings__form">
                        <label htmlFor="" className="settings__label">
                            <span className="settings__span">Получать уведомление </span>
                            <input type="checkbox" className="settings__input"/>
                        </label>
                        <label htmlFor="" className="settings__label">
                            <span className="settings__span">Получать уведомления о начислении/списании баллов</span>
                            <input type="checkbox" className="settings__input"/>
                        </label>
                        <label htmlFor="" className="settings__label">
                            <span className="settings__span">Получать уведомление о новых  акциях</span>
                            <input type="checkbox" className="settings__input"/>
                        </label>
                    </form>


                </div>
            </div>

        </section>
    );
};

export default SettingsSection;