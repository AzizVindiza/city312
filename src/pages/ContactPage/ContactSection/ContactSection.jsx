import React from 'react';
import './ContactSection.sass'
import Btn from "../../../components/Btn/Btn";
import ContactTitleSection from "../ContactTitleSection/ContactTitleSection";

const ContactSection = () => {
    return (
        <section className="contactSection">
            <div className="contactSection__container container">
                <div className="contactSection__wrapper">
                    <ContactTitleSection />
                    <form action="" className="contactSection__form">
                        <div className="contactSection__box">
                            <label htmlFor="" className="contactSection__label">
                                <span className="contactSection__span">Ф.И.О.</span>
                                <div className="contactSection__row">
                                    <input type="text" className="contactSection__input"/>
                                    <svg className="contactSection__svg" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.24072 9C11.3118 9 12.9907 7.32107 12.9907 5.25C12.9907 3.17893 11.3118 1.5 9.24072 1.5C7.16965 1.5 5.49072 3.17893 5.49072 5.25C5.49072 7.32107 7.16965 9 9.24072 9Z" stroke="#292D32" strokeWidth="1.07062" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M15.6828 16.5C15.6828 13.5975 12.7953 11.25 9.24035 11.25C5.68535 11.25 2.79785 13.5975 2.79785 16.5" stroke="#292D32" strokeWidth="1.07062" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>

                            </label>
                            <label htmlFor="" className="contactSection__label">
                                <span className="contactSection__span">Телефон</span>
                                <div className="contactSection__row">
                                    <input type="text" className="contactSection__input"/>
                                    <svg className="contactSection__svg" width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 18.8948C19 19.2787 18.9279 19.6732 18.7747 20.0571C18.6214 20.441 18.4231 20.8035 18.1617 21.1448C17.7201 21.7206 17.2334 22.1364 16.6835 22.403C16.1427 22.6696 15.5568 22.8082 14.9259 22.8082C14.0065 22.8082 13.024 22.5523 11.9875 22.0298C10.9509 21.5073 9.91437 20.8035 8.88683 19.9185C7.85028 19.0228 6.8678 18.0311 5.9304 16.9328C5.002 15.8238 4.16375 14.6616 3.41562 13.446C2.67651 12.2304 2.08162 11.0148 1.64897 9.80984C1.21632 8.59424 1 7.43196 1 6.323C1 5.5979 1.10816 4.9048 1.32449 4.26501C1.54081 3.61456 1.88333 3.01742 2.36104 2.48427C2.93791 1.81249 3.56885 1.48193 4.23585 1.48193C4.48823 1.48193 4.74061 1.54591 4.96595 1.67387C5.2003 1.80183 5.40761 1.99376 5.56986 2.27101L7.66099 5.75785C7.82324 6.02443 7.94041 6.26968 8.02153 6.50427C8.10265 6.7282 8.14772 6.95212 8.14772 7.15472C8.14772 7.41064 8.08463 7.66655 7.95844 7.9118C7.84126 8.15706 7.67001 8.41297 7.45368 8.66889L6.76865 9.51127C6.6695 9.62857 6.62444 9.76719 6.62444 9.9378C6.62444 10.0231 6.63345 10.0977 6.65148 10.1831C6.67852 10.2684 6.70556 10.3323 6.72359 10.3963C6.88583 10.7482 7.16525 11.2067 7.56184 11.7612C7.96745 12.3157 8.4001 12.8808 8.8688 13.446C9.35553 14.0111 9.82424 14.5336 10.302 15.0135C10.7707 15.4826 11.1582 15.8025 11.4647 15.9945C11.5098 16.0158 11.5638 16.0478 11.6269 16.0798C11.699 16.1118 11.7712 16.1224 11.8523 16.1224C12.0055 16.1224 12.1227 16.0584 12.2218 15.9411L12.9069 15.1414C13.1322 14.8748 13.3485 14.6722 13.5558 14.5443C13.7631 14.395 13.9705 14.3203 14.1958 14.3203C14.3671 14.3203 14.5473 14.363 14.7456 14.459C14.9439 14.5549 15.1512 14.6936 15.3766 14.8748L18.36 17.3807C18.5944 17.5726 18.7566 17.7965 18.8558 18.0631C18.9459 18.3297 19 18.5963 19 18.8948Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"/>
                                    </svg>


                                </div>

                            </label>
                            <label htmlFor="" className="contactSection__label">
                                <span className="contactSection__span">Почта</span>
                                <div className="contactSection__row">
                                    <input type="text" className="contactSection__input"/>
                                    <svg className="contactSection__svg" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.30273 6.375C2.30273 3.75 3.80273 2.625 6.05273 2.625H13.5527C15.8027 2.625 17.3027 3.75 17.3027 6.375V11.625C17.3027 14.25 15.8027 15.375 13.5527 15.375H6.05273" stroke="#292D32" strokeWidth="1.07062" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M13.5527 6.75L11.2052 8.625C10.4327 9.24 9.16523 9.24 8.39273 8.625L6.05273 6.75" stroke="#292D32" strokeWidth="1.07062" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M2.30273 12.375H6.80273" stroke="#292D32" strokeWidth="1.07062" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M2.30273 9.375H4.55273" stroke="#292D32" strokeWidth="1.07062" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>

                                </div>

                            </label>
                            <div className={"contactSection__btn"}>
                                <Btn text={'Отправить заявку'} theme={'contactSection'}/>
                            </div>

                        </div>
                    </form>
                </div>

            </div>

        </section>
    );
};

export default ContactSection;