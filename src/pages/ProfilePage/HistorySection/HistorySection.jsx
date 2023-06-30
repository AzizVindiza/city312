import React from 'react';
import NotificationComponent from "../NotificationComponent/NotificationComponent";
import "./history.sass"
import HistoryCard from "./HistoryCard/HistoryCard";
const HistorySection = () => {
    return (
        <div className={'historySection'}>
            <h2 className="historySection__h2">История пользования</h2>
            <NotificationComponent/>
            <div className="historySection__date">
                <h3 className="historySection__h3">25.03.23</h3>
                <h4 className="historySection__h4">12:03</h4>
            </div>
            <div className="historySection__wrapper">
                <HistoryCard/>
                <HistoryCard/>
                <HistoryCard/>
            </div>

        </div>
    );
};

export default HistorySection;