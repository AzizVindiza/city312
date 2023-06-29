import React, {useContext} from 'react';
import note from "./Calendar_Days.png"
import "./notification.sass"
import {CustomContext} from "../../../Context";
import NotificationCard from "./NotificationCard/NotificationCard";
const Notification = () => {
    const {notification,setNotification} = useContext(CustomContext)
    const arr = ['За день','За 7 дней','За Месяц',`Период`]
    return (
        <div className={'notification'}>
            <h2 className="notification__h2">Уведомления</h2>
            <div className="notification__wrapper">
                <ul className="notification__list">
                    {
                        arr.map((item) => (
                            <li key={item} onClick={() => setNotification(item)} className={`notification__li ${notification === item ? 'notification__li_active' : ""} 
                            `}>{item}</li>
                        ))
                    }
                </ul>
                <h3 className="notification__del">
                    Удалить все
                </h3>
            </div>
            <div className="notification__content">
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
            </div>
        </div>
    );
};

export default Notification;