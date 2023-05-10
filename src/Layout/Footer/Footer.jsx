import React from 'react';
import "./Footer.sass"
import logo from "./logo.png"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="footer__content">
                    <div className="footer__box footer__box_first">
                        <div className="footer__logo">
                            <img src={logo} alt="" className="footer__city"/>
                        </div>
                        <h1 className="footer__h1">дисконтная карта
                            для скидок
                        </h1>
                    </div>
                    <div className="footer__box">
                        <ul className="footer__ul">
                            <li className="footer__item">о Компании</li>
                            <li className="footer__item">Акции</li>
                            <li className="footer__item">Скидки</li>
                            <li className="footer__item">Контакты</li>
                        </ul>
                    </div>
                    <div className="footer__box">
                        <div className="footer__block">
                            <h3 className="footer__contact">Контакты</h3>
                            <h4 className="footer__num">+ 996 (502) 031222</h4>
                            <h4 className="footer__num">+ 996 (505) 031222</h4>
                            <h3 className="footer__address">адрес</h3>
                            <p className="footer__street">ул.Киевская 77</p>
                        </div>
                    </div>
                    <div className="footer__box">
                        <ul className="footer__ul">
                            <li className="footer__item">Сотрудничество</li>
                            <li className="footer__item">Тех.поддержка</li>
                            <li className="footer__item">Вопрос и ответ</li>
                            <li className="footer__item">Условия пользования</li>
                        </ul>
                    </div>
                    <div className="footer__box">
                        <div className="footer__come">
                            <div className="footer__wrapp">
                                <p className="footer__in">вход</p>
                                <p className="footer__reg">регистрация</p>
                            </div>
                            <p className="footer__pay">Pay partner</p>
                        </div>
                    </div>
                    <div className="footer__socials">
                        <div className="footer__instagram">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.28781 1.41822C10.2782 1.41822 10.5496 1.41822 11.3638 1.41822C12.0876 1.41822 12.4495 1.59916 12.7209 1.68964C13.0828 1.87058 13.3542 1.96105 13.6256 2.23246C13.897 2.50388 14.078 2.77529 14.1684 3.13717C14.2589 3.40859 14.3494 3.77047 14.4398 4.49424C14.4398 5.30848 14.4398 5.48942 14.4398 7.57025C14.4398 9.65108 14.4398 9.83203 14.4398 10.6463C14.4398 11.37 14.2589 11.7319 14.1684 12.0033C13.9875 12.3652 13.897 12.6366 13.6256 12.908C13.3542 13.1795 13.0828 13.3604 12.7209 13.4509C12.4495 13.5413 12.0876 13.6318 11.3638 13.7223C10.5496 13.7223 10.3686 13.7223 8.28781 13.7223C6.20698 13.7223 6.02604 13.7223 5.2118 13.7223C4.48803 13.7223 4.12614 13.5413 3.85473 13.4509C3.49285 13.2699 3.22143 13.1795 2.95002 12.908C2.67861 12.6366 2.49767 12.3652 2.4072 12.0033C2.31672 11.7319 2.22625 11.37 2.13578 10.6463C2.13578 9.83203 2.13578 9.65108 2.13578 7.57025C2.13578 5.48942 2.13578 5.30848 2.13578 4.49424C2.13578 3.77047 2.31672 3.40859 2.4072 3.13717C2.58814 2.77529 2.67861 2.50388 2.95002 2.23246C3.22143 1.96105 3.49285 1.78011 3.85473 1.68964C4.12614 1.59916 4.48803 1.50869 5.2118 1.41822C6.02604 1.41822 6.29745 1.41822 8.28781 1.41822ZM8.28781 0.0611572C6.20698 0.0611572 6.02604 0.0611572 5.2118 0.0611572C4.39756 0.0611572 3.85473 0.2421 3.40238 0.423042C2.95002 0.603984 2.49767 0.875397 2.04531 1.32775C1.59296 1.78011 1.41201 2.14199 1.1406 2.68482C0.95966 3.13717 0.869188 3.68 0.778717 4.49424C0.778717 5.30848 0.778717 5.57989 0.778717 7.57025C0.778717 9.65108 0.778717 9.83203 0.778717 10.6463C0.778717 11.4605 0.95966 12.0033 1.1406 12.4557C1.32154 12.908 1.59296 13.3604 2.04531 13.8128C2.49767 14.2651 2.85955 14.446 3.40238 14.7175C3.85473 14.8984 4.39756 14.9889 5.2118 15.0793C6.02604 15.0793 6.29745 15.0793 8.28781 15.0793C10.2782 15.0793 10.5496 15.0793 11.3638 15.0793C12.1781 15.0793 12.7209 14.8984 13.1732 14.7175C13.6256 14.5365 14.078 14.2651 14.5303 13.8128C14.9827 13.3604 15.1636 12.9985 15.435 12.4557C15.616 12.0033 15.7064 11.4605 15.7969 10.6463C15.7969 9.83203 15.7969 9.56061 15.7969 7.57025C15.7969 5.57989 15.7969 5.30848 15.7969 4.49424C15.7969 3.68 15.616 3.13717 15.435 2.68482C15.2541 2.23246 14.9827 1.78011 14.5303 1.32775C14.078 0.875397 13.7161 0.694455 13.1732 0.423042C12.7209 0.2421 12.1781 0.151628 11.3638 0.0611572C10.5496 0.0611572 10.3686 0.0611572 8.28781 0.0611572Z" fill="white"/>
                                <path d="M8.28781 3.68C6.11651 3.68 4.39756 5.39895 4.39756 7.57025C4.39756 9.74156 6.11651 11.4605 8.28781 11.4605C10.4591 11.4605 12.1781 9.74156 12.1781 7.57025C12.1781 5.39895 10.4591 3.68 8.28781 3.68ZM8.28781 10.1034C6.93075 10.1034 5.75462 9.01779 5.75462 7.57025C5.75462 6.21319 6.84028 5.03706 8.28781 5.03706C9.64488 5.03706 10.821 6.12272 10.821 7.57025C10.821 8.92732 9.64488 10.1034 8.28781 10.1034Z" fill="white"/>
                                <path d="M12.2685 4.49424C12.7682 4.49424 13.1732 4.08918 13.1732 3.58953C13.1732 3.08987 12.7682 2.68482 12.2685 2.68482C11.7689 2.68482 11.3638 3.08987 11.3638 3.58953C11.3638 4.08918 11.7689 4.49424 12.2685 4.49424Z" fill="white"/>
                            </svg>

                        </div>
                        <div className="footer__facebook">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.2917 14.413C27.2917 7.00495 21.2306 0.943848 13.8226 0.943848C6.41462 0.943848 0.353516 7.00495 0.353516 14.413C0.353516 21.1475 5.23607 26.7035 11.6339 27.7137V18.2853H8.26662V14.413H11.6339V11.3824C11.6339 8.01513 13.6543 6.16313 16.6848 6.16313C18.2001 6.16313 19.7154 6.49986 19.7154 6.49986V9.86714H18.0317C16.3481 9.86714 15.843 10.8773 15.843 11.8875V14.413H19.547L18.8735 18.2853H15.6746V27.8821C22.4092 26.8719 27.2917 21.1475 27.2917 14.413Z" fill="white"/>
                            </svg>

                        </div>
                        <div className="footer__whats">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M23.0506 4.81622C20.5251 2.29076 17.1578 0.943848 13.6222 0.943848C6.21418 0.943848 0.153076 7.00495 0.153076 14.413C0.153076 16.7701 0.826542 19.1272 2.00509 21.1475L0.153076 27.8821L7.22438 26.0301C9.24475 27.0403 11.4335 27.7137 13.6222 27.7137C21.0302 27.7137 27.0913 21.6526 27.0913 14.2446C27.0913 10.709 25.576 7.34168 23.0506 4.81622ZM13.6222 25.525C11.6018 25.525 9.58147 25.0199 7.89783 24.0097L7.56108 23.8413L3.35198 25.0199L4.53055 20.9792L4.1938 20.4741C3.01525 18.6221 2.51016 16.6017 2.51016 14.5813C2.51016 8.52023 7.56109 3.46931 13.6222 3.46931C16.6527 3.46931 19.3466 4.64785 21.5353 6.66822C23.724 8.85695 24.7342 11.5508 24.7342 14.5813C24.7342 20.4741 19.8517 25.525 13.6222 25.525ZM19.6833 17.1068C19.3466 16.9384 17.6629 16.0966 17.3262 16.0966C16.9895 15.9282 16.8211 15.9282 16.6527 16.265C16.4844 16.6017 15.8109 17.2751 15.6426 17.6119C15.4742 17.7802 15.3058 17.7802 14.9691 17.7802C14.6324 17.6119 13.6222 17.2751 12.2753 16.0966C11.2651 15.2548 10.5917 14.0762 10.4233 13.7395C10.2549 13.4028 10.4233 13.2344 10.5917 13.0661C10.76 12.8977 10.9284 12.7293 11.0967 12.561C11.2651 12.3926 11.2651 12.2242 11.4335 12.0559C11.6018 11.8875 11.4335 11.7191 11.4335 11.5508C11.4335 11.3824 10.76 9.69877 10.4233 9.02532C10.2549 8.52022 9.9182 8.52022 9.74984 8.52022C9.58148 8.52022 9.41307 8.52022 9.07634 8.52022C8.90798 8.52022 8.57125 8.52022 8.23452 8.85695C7.8978 9.19368 7.05601 10.0355 7.05601 11.7191C7.05601 13.4028 8.23453 14.9181 8.4029 15.2548C8.57126 15.4231 10.76 18.9588 14.1273 20.3057C16.9894 21.4842 17.4946 21.1475 18.168 21.1475C18.8415 21.1475 20.1884 20.3057 20.3567 19.6322C20.6935 18.7904 20.6935 18.117 20.5251 18.117C20.3568 17.2752 20.02 17.2752 19.6833 17.1068Z" fill="white"/>
                            </svg>
                        </div>
                    </div>

                </div>
                <div className="footer__wrapper">
                    <div className="footer__logo">
                        <img src={logo} alt="" className="footer__city"/>
                    </div>
                    <h1 className="footer__h1">дисконтная карта
                        для скидок
                    </h1>
                    <ul className="footer__ul">
                        <li className="footer__item">Сотрудничество</li>
                        <li className="footer__item">Тех.поддержка</li>
                        <li className="footer__item">Вопрос и ответ</li>
                        <li className="footer__item">Условия пользования</li>
                    </ul>
                    <div className="footer__block">
                        <h3 className="footer__contact">Контакты</h3>
                        <h4 className="footer__num">+ 996 (502) 031222</h4>
                        <h4 className="footer__num">+ 996 (502) 031222</h4>
                        <h3 className="footer__address">адрес</h3>
                        <p className="footer__street">ул.Киевская 77</p>
                    </div>
                    <div className="footer__come">

                            <p className="footer__in">вход</p>
                            <p className="footer__reg">регистрация</p>

                        <p className="footer__pay">Pay partner</p>
                    </div>


                    <div className="footer__socials">
                        <div className="footer__instagram">
                            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.014 2.96442C17.718 2.96442 18.2231 2.96442 19.7384 2.96442C21.0853 2.96442 21.7587 3.30115 22.2638 3.46952C22.9373 3.80624 23.4424 3.97461 23.9475 4.4797C24.4526 4.98479 24.7893 5.48988 24.9577 6.16334C25.126 6.66843 25.2944 7.34189 25.4627 8.6888C25.4627 10.2041 25.4627 10.5408 25.4627 14.4132C25.4627 18.2855 25.4627 18.6223 25.4627 20.1375C25.4627 21.4845 25.126 22.1579 24.9577 22.663C24.6209 23.3365 24.4526 23.8415 23.9475 24.3466C23.4424 24.8517 22.9373 25.1885 22.2638 25.3568C21.7587 25.5252 21.0853 25.6935 19.7384 25.8619C18.2231 25.8619 17.8864 25.8619 14.014 25.8619C10.1416 25.8619 9.8049 25.8619 8.28963 25.8619C6.94272 25.8619 6.26926 25.5252 5.76417 25.3568C5.09071 25.0201 4.58562 24.8517 4.08053 24.3466C3.57544 23.8415 3.23871 23.3365 3.07035 22.663C2.90198 22.1579 2.73362 21.4845 2.56525 20.1375C2.56525 18.6223 2.56525 18.2855 2.56525 14.4132C2.56525 10.5408 2.56525 10.2041 2.56525 8.6888C2.56525 7.34189 2.90198 6.66843 3.07035 6.16334C3.40707 5.48988 3.57544 4.98479 4.08053 4.4797C4.58562 3.97461 5.09071 3.63788 5.76417 3.46952C6.26926 3.30115 6.94272 3.13279 8.28963 2.96442C9.8049 2.96442 10.31 2.96442 14.014 2.96442ZM14.014 0.438965C10.1416 0.438965 9.8049 0.438965 8.28963 0.438965C6.77435 0.438965 5.76417 0.775694 4.92235 1.11242C4.08053 1.44915 3.23871 1.95424 2.39689 2.79606C1.55507 3.63788 1.21834 4.31134 0.713252 5.32152C0.376524 6.16334 0.208159 7.17352 0.0397949 8.6888C0.0397949 10.2041 0.0397949 10.7092 0.0397949 14.4132C0.0397949 18.2855 0.0397949 18.6223 0.0397949 20.1375C0.0397949 21.6528 0.376524 22.663 0.713252 23.5048C1.04998 24.3466 1.55507 25.1885 2.39689 26.0303C3.23871 26.8721 3.91217 27.2088 4.92235 27.7139C5.76417 28.0506 6.77435 28.219 8.28963 28.3874C9.8049 28.3874 10.31 28.3874 14.014 28.3874C17.718 28.3874 18.2231 28.3874 19.7384 28.3874C21.2536 28.3874 22.2638 28.0506 23.1056 27.7139C23.9475 27.3772 24.7893 26.8721 25.6311 26.0303C26.4729 25.1885 26.8097 24.515 27.3147 23.5048C27.6515 22.663 27.8198 21.6528 27.9882 20.1375C27.9882 18.6223 27.9882 18.1172 27.9882 14.4132C27.9882 10.7092 27.9882 10.2041 27.9882 8.6888C27.9882 7.17352 27.6515 6.16334 27.3147 5.32152C26.978 4.4797 26.4729 3.63788 25.6311 2.79606C24.7893 1.95424 24.1158 1.61751 23.1056 1.11242C22.2638 0.775694 21.2536 0.607329 19.7384 0.438965C18.2231 0.438965 17.8864 0.438965 14.014 0.438965Z" fill="white"/>
                                <path d="M14.014 7.17352C9.97327 7.17352 6.77435 10.3724 6.77435 14.4132C6.77435 18.4539 9.97327 21.6528 14.014 21.6528C18.0547 21.6528 21.2536 18.4539 21.2536 14.4132C21.2536 10.3724 18.0547 7.17352 14.014 7.17352ZM14.014 19.1274C11.4885 19.1274 9.29981 17.107 9.29981 14.4132C9.29981 11.8877 11.3202 9.69898 14.014 9.69898C16.5395 9.69898 18.7282 11.7193 18.7282 14.4132C18.7282 16.9386 16.5395 19.1274 14.014 19.1274Z" fill="white"/>
                                <path d="M21.422 8.6888C22.3519 8.6888 23.1056 7.93501 23.1056 7.00516C23.1056 6.07531 22.3519 5.32152 21.422 5.32152C20.4922 5.32152 19.7384 6.07531 19.7384 7.00516C19.7384 7.93501 20.4922 8.6888 21.422 8.6888Z" fill="white"/>
                            </svg>
                        </div>
                        <div className="footer__facebook">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.2917 14.413C27.2917 7.00495 21.2306 0.943848 13.8226 0.943848C6.41462 0.943848 0.353516 7.00495 0.353516 14.413C0.353516 21.1475 5.23607 26.7035 11.6339 27.7137V18.2853H8.26662V14.413H11.6339V11.3824C11.6339 8.01513 13.6543 6.16313 16.6848 6.16313C18.2001 6.16313 19.7154 6.49986 19.7154 6.49986V9.86714H18.0317C16.3481 9.86714 15.843 10.8773 15.843 11.8875V14.413H19.547L18.8735 18.2853H15.6746V27.8821C22.4092 26.8719 27.2917 21.1475 27.2917 14.413Z" fill="white"/>
                            </svg>

                        </div>
                        <div className="footer__whats">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M23.0506 4.81622C20.5251 2.29076 17.1578 0.943848 13.6222 0.943848C6.21418 0.943848 0.153076 7.00495 0.153076 14.413C0.153076 16.7701 0.826542 19.1272 2.00509 21.1475L0.153076 27.8821L7.22438 26.0301C9.24475 27.0403 11.4335 27.7137 13.6222 27.7137C21.0302 27.7137 27.0913 21.6526 27.0913 14.2446C27.0913 10.709 25.576 7.34168 23.0506 4.81622ZM13.6222 25.525C11.6018 25.525 9.58147 25.0199 7.89783 24.0097L7.56108 23.8413L3.35198 25.0199L4.53055 20.9792L4.1938 20.4741C3.01525 18.6221 2.51016 16.6017 2.51016 14.5813C2.51016 8.52023 7.56109 3.46931 13.6222 3.46931C16.6527 3.46931 19.3466 4.64785 21.5353 6.66822C23.724 8.85695 24.7342 11.5508 24.7342 14.5813C24.7342 20.4741 19.8517 25.525 13.6222 25.525ZM19.6833 17.1068C19.3466 16.9384 17.6629 16.0966 17.3262 16.0966C16.9895 15.9282 16.8211 15.9282 16.6527 16.265C16.4844 16.6017 15.8109 17.2751 15.6426 17.6119C15.4742 17.7802 15.3058 17.7802 14.9691 17.7802C14.6324 17.6119 13.6222 17.2751 12.2753 16.0966C11.2651 15.2548 10.5917 14.0762 10.4233 13.7395C10.2549 13.4028 10.4233 13.2344 10.5917 13.0661C10.76 12.8977 10.9284 12.7293 11.0967 12.561C11.2651 12.3926 11.2651 12.2242 11.4335 12.0559C11.6018 11.8875 11.4335 11.7191 11.4335 11.5508C11.4335 11.3824 10.76 9.69877 10.4233 9.02532C10.2549 8.52022 9.9182 8.52022 9.74984 8.52022C9.58148 8.52022 9.41307 8.52022 9.07634 8.52022C8.90798 8.52022 8.57125 8.52022 8.23452 8.85695C7.8978 9.19368 7.05601 10.0355 7.05601 11.7191C7.05601 13.4028 8.23453 14.9181 8.4029 15.2548C8.57126 15.4231 10.76 18.9588 14.1273 20.3057C16.9894 21.4842 17.4946 21.1475 18.168 21.1475C18.8415 21.1475 20.1884 20.3057 20.3567 19.6322C20.6935 18.7904 20.6935 18.117 20.5251 18.117C20.3568 17.2752 20.02 17.2752 19.6833 17.1068Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;