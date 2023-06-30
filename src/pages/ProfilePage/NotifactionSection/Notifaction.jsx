import React, {useContext} from 'react';
import note from "./Calendar_Days.png"
import "./notification.sass"
import {CustomContext} from "../../../Context";
import NotificationCard from "./NotificationCard/NotificationCard";
import NotificationComponent from "../NotificationComponent/NotificationComponent";
const Notification = () => {

    return (
        <div className={'notification'}>
            <h2 className="notification__h2">Уведомления</h2>
            <div className="notification__wrapper">
                <NotificationComponent/>
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