import "./notificationCard.sass"

const NotificationCard = () => {
    return (
        <div className={'notificationCard'}>
            <div className="notificationCard__left">
                <h2 className="notificationCard__h2">12.02.23</h2>
                <p className="notificationCard__p">Компания “FLowers” - добавил акцию на цветы</p>
            </div>
            <div className="notificationCard__right">
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.57143 5V2.8C4.57143 2.32261 4.75204 1.86477 5.07353 1.52721C5.39502 1.18964 5.83106 1 6.28571 1H9.71429C10.1689 1 10.605 1.18964 10.9265 1.52721C11.248 1.86477 11.4286 2.32261 11.4286 2.8V5M15 5L14 17.2C14 17.6774 13.8194 18.1352 13.4979 18.4728C13.1764 18.8104 12.7404 19 12.2857 19H3.71429C3.25963 19 2.82359 18.8104 2.5021 18.4728C2.18061 18.1352 2 17.6774 2 17.2L1 5H15Z" stroke="#14181F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

            </div>

        </div>
    );
};

export default NotificationCard;