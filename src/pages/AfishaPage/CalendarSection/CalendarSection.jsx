import React from 'react';
import "./calendarSection.sass"
import Btn from "../../../components/Btn/Btn";
const CalendarSection = () => {
    return (
        <div className={'calendarSection'}>
            <div className="container">
                <div className="calendarSection__wrapper">
                    <div className="calendarSection__box">
                        <h2 className="calendarSection__h2">На выходных</h2>
                        <p className="calendarSection__p">12–13 ноября</p>
                    </div>
                    <div className="calendarSection__box">
                        <h2 className="calendarSection__h2">В этом месяце</h2>
                        <p className="calendarSection__p">Ноябрь</p>
                    </div>
                    <div className="calendarSection__box">
                        <h2 className="calendarSection__h2">Сегодня</h2>
                        <p className="calendarSection__p">7 ноября</p>
                    </div>
                    <div className="calendarSection__box">
                        <h2 className="calendarSection__h2">На этой неделе</h2>
                        <p className="calendarSection__p">7–13 ноября</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default CalendarSection;