import React, {useContext} from 'react';
import {CustomContext} from "../../../Context";

const NotificationComponent = () => {
    const {notification,setNotification} = useContext(CustomContext)
    const arr = ['За день','За 7 дней','За Месяц',`Период`]
    return (
        <div>
            <ul className="notification__list">
                {
                    arr.map((item) => (
                        <li key={item} onClick={() => setNotification(item)} className={`notification__li ${notification === item ? 'notification__li_active' : ""} 
                            `}>{item}</li>
                    ))
                }
            </ul>

        </div>
    );
};

export default NotificationComponent;