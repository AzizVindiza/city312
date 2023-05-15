import React, {useState} from 'react';
import logo from "./logo.png"
import cart from "./cart.png"
import "./registerPartner.sass"
import Btn from "../../components/Btn/Btn";
import {useForm} from "react-hook-form";

const RegisterPartner = () => {
    const [day, setDay] = useState('Понедельник')
    const [line, setLine] = useState(false)
    const arr = ['Понедельник ', 'Вторник ', 'Среда', 'Четверг', 'Пятница ', 'Суббота', 'Воскресение']
    const chooseDay = (item) => {
        setDay(item)
        setLine(false)
    }

    const {
        register,
        reset,
        handleSubmit,
        formState:{
            errors
        }
    } = useForm({mode:"onBlur"})
    return (
        <div className={'registerPartner'}>
            <div className="container registerPartner__container">
                <h2 className="registerPartner__h2">РЕГИСТРАЦИЯ ПАРТНЕНРА</h2>
                <form className="registerPartner__form">
                    <div className="registerPartner__wrapp">
                        <div className="registerPartner__box">
                            <div className="registerPartner__wrapper">
                                <div className="registerPartner__logo">
                                    <img src={logo} alt=""/>
                                </div>
                                <h3 className="registerPartner__download">Загрузить логотип </h3>
                            </div>
                            <p className="registerPartner__hat">Шапка </p>
                            <div className="registerPartner__block">
                                <p className="registerPartner__put">Вставить фото шапки </p>
                                <p className="registerPartner__numbers">1440 на 300</p>
                            </div>

                            <label htmlFor="" className="registerPartner__label">
                                <span className="registerPartner__span">Наименование (брендовое название )</span>
                                <input type="text" className="registerPartner__input"/>
                            </label>
                            <label htmlFor="" className="registerPartner__label">
                                <span className="registerPartner__span">Адрес компании</span>
                                <input type="text" className="registerPartner__input"/>
                            </label>
                            <label htmlFor="" className="registerPartner__label">
                                <span className="registerPartner__span">Почта </span>
                                <input type="email" className="registerPartner__input"/>
                            </label>
                            <label htmlFor="" className="registerPartner__label">
                                <span className="registerPartner__span">Организационная праовая форма </span>
                                <input type="text" className="registerPartner__input"/>
                            </label>
                            <label htmlFor="" className="registerPartner__label">
                                <span className="registerPartner__span">ИНН</span>
                                <input type="text" className="registerPartner__input"/>
                            </label>
                            <label htmlFor="" className="registerPartner__label">
                                <span className="registerPartner__span">Тип деятельности</span>
                                <input type="text" className="registerPartner__input"/>
                            </label>
                            <label htmlFor="" className="registerPartner__label">
                                <span className="registerPartner__span">Описание компании </span>
                                <textarea className="registerPartner__input"/>
                            </label>
                        </div>
                        <div className="registerPartner__box registerPartner__box_second">
                            <h4 className="registerPartner__title">Номер дисконтной карты</h4>
                            <label htmlFor="" className="registerPartner__labelNum">
                                <input type="number" className="registerPartner__inputNum"/>
                            </label>
                            <label htmlFor="" className="registerPartner__labelNum">
                                <input type="number" className="registerPartner__inputNum"/>
                            </label>
                            <label htmlFor="" className="registerPartner__labelNum">
                                <input type="number" className="registerPartner__inputNum"/>
                            </label>
                            <label htmlFor="" className="registerPartner__labelNum">
                                <input type="number" className="registerPartner__inputNum"/>
                            </label>
                            <label className="registerPartner__labelSoc">
                            <span className="registerPartner__svg">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                     xmlns="http://www.w3.org/2000/svg"><path
                                    d="M9.82222 6.80519L9.82247 6.80575C9.97989 7.15654 10.2419 7.79459 10.4522 8.30666L10.455 8.31369C10.5377 8.51504 10.6125 8.69719 10.6709 8.83748C10.7001 8.90767 10.7247 8.96624 10.7439 9.0109C10.7535 9.03325 10.7613 9.05119 10.7674 9.06486C10.7733 9.078 10.7761 9.08381 10.7765 9.08477C10.7766 9.0849 10.7766 9.08494 10.7766 9.08489C10.8848 9.30039 10.9861 9.62843 10.8027 10.0043C10.8026 10.0043 10.8026 10.0043 10.8026 10.0044L10.7694 10.0731L10.7694 10.0731L10.7658 10.0805C10.6838 10.2507 10.6051 10.4141 10.4303 10.6148L10.4302 10.6149C10.3781 10.6748 10.3229 10.7414 10.2637 10.8129L9.93523 10.5411L10.2637 10.8129L10.2552 10.8232C10.1588 10.9397 10.0458 11.0763 9.94349 11.1782L9.94327 11.1784C9.90296 11.2185 9.87943 11.2428 9.86166 11.2647C9.86115 11.2654 9.86065 11.266 9.86017 11.2666L9.82222 6.80519ZM9.82222 6.80519C9.68496 6.50051 9.51618 6.28119 9.29317 6.15192C9.07819 6.02731 8.86708 6.02187 8.75558 6.019C8.75265 6.01893 8.74978 6.01885 8.74699 6.01878L9.82222 6.80519ZM13.9319 14.8126C13.8708 14.7822 13.7929 14.7485 13.7153 14.7151L13.7065 14.7113L13.7055 14.7109C13.2823 14.5283 12.4661 14.1761 11.5217 13.3353L11.521 13.3347C10.6455 12.5589 10.0452 11.588 9.87397 11.2928L13.742 15.1943M13.9319 14.8126L13.742 15.1943M13.9319 14.8126C13.9319 14.8126 13.9319 14.8126 13.9319 14.8125L13.742 15.1943M13.9319 14.8126C13.992 14.8425 14.0327 14.8569 14.0586 14.8635C14.0623 14.8645 14.0655 14.8652 14.0684 14.8658M13.742 15.1943C14.0528 15.3489 14.238 15.3251 14.4172 15.117C14.5966 14.9087 15.1941 14.2128 15.4033 13.9036M14.0684 14.8658C14.0677 14.8664 14.067 14.867 14.0664 14.8676C14.06 14.8733 14.0568 14.8752 14.0569 14.8751C14.0594 14.8736 14.0684 14.8695 14.0792 14.8682C14.0864 14.8674 14.0842 14.8691 14.0684 14.8658ZM14.0684 14.8658C14.0747 14.86 14.0833 14.8513 14.0942 14.8387L14.0942 14.8387C14.282 14.6206 14.8561 13.9507 15.049 13.6664M15.049 13.6664C15.0483 13.6674 15.0476 13.6684 15.047 13.6695L15.4033 13.9036M15.049 13.6664C15.0494 13.6658 15.0498 13.6652 15.0502 13.6646L15.4033 13.9036M15.049 13.6664C15.1962 13.4436 15.3973 13.279 15.6716 13.2467C15.9012 13.2197 16.1174 13.2994 16.2515 13.3495L16.2516 13.3495C16.4183 13.4117 16.8958 13.6376 17.3421 13.8525C17.8007 14.0732 18.2625 14.3001 18.4197 14.3783L18.4198 14.3783C18.478 14.4073 18.5328 14.4336 18.5863 14.4592L18.5983 14.465C18.6965 14.5121 18.8043 14.5637 18.8946 14.6189C18.9881 14.676 19.1102 14.7641 19.194 14.9052L16.1025 13.7489M15.4033 13.9036C15.6065 13.5943 15.8156 13.6419 16.1025 13.7489M16.1025 13.7489C16.3893 13.856 17.9191 14.6054 18.2298 14.76L16.1025 13.7489ZM19.05 16.7402L19.049 16.7432C18.8681 17.2425 18.3844 17.6621 17.9438 17.9459C17.4976 18.2334 16.9695 18.4616 16.5842 18.4975M19.05 16.7402L16.3808 18.0914L16.3806 18.0914C15.8549 18.155 15.1875 18.2357 12.8097 17.2998M19.05 16.7402C19.1907 16.3429 19.2626 15.9712 19.288 15.6737M19.05 16.7402L19.288 15.6737M16.5842 18.4975L16.5446 18.073L16.5847 18.4975C16.5845 18.4975 16.5844 18.4975 16.5842 18.4975ZM16.5842 18.4975C16.5366 18.502 16.4883 18.5078 16.4318 18.5147C16.15 18.5487 15.8061 18.5893 15.2192 18.4909C14.648 18.3951 13.8558 18.1697 12.6537 17.6966M12.6537 17.6966L12.8097 17.2998M12.6537 17.6966C12.6537 17.6965 12.6536 17.6965 12.6536 17.6965L12.8097 17.2998M12.6537 17.6966C9.60048 16.4959 7.60636 13.5482 7.20659 12.9573L7.20165 12.95L7.20165 12.95L7.164 12.8945C7.1536 12.8793 7.14974 12.874 7.14955 12.8737L7.14955 12.8737L7.14316 12.8652L7.14312 12.8651L7.14307 12.865C7.04942 12.7397 6.71546 12.2929 6.40441 11.6782C6.09624 11.0692 5.79206 10.2599 5.79206 9.41303C5.79206 7.80892 6.59411 6.95806 6.93989 6.59262L6.9399 6.59262C6.96073 6.57059 6.9781 6.55223 6.99347 6.53566L12.8097 17.2998M19.288 15.6737C19.3007 15.5254 19.3025 15.3892 19.2933 15.273M19.288 15.6737L19.2933 15.273M19.2933 15.273C19.286 15.1796 19.2676 15.0293 19.1941 14.9053L19.2933 15.273ZM6.99522 22.3195C6.90013 22.268 6.78903 22.2546 6.6844 22.2819L1.11868 23.7356C1.07632 23.7467 1.03789 23.7077 1.04951 23.6655L2.5361 18.2694C2.56647 18.1592 2.5513 18.0414 2.49401 17.9425C1.47774 16.1878 0.94321 14.198 0.943936 12.1729V12.1727C0.943936 5.80808 6.15321 0.626064 12.5468 0.626064C15.6551 0.626064 18.5648 1.83049 20.7556 4.01105C22.9459 6.19121 24.1499 9.09209 24.1499 12.1787C24.1499 18.5432 18.9406 23.7252 12.5469 23.7252H12.541C10.5983 23.7252 8.69002 23.2375 6.99522 22.3195Z"
                                    fill="white" stroke="white" strokeWidth="0.852714" strokeLinejoin="round"/>
</svg>

                            </span>
                                <input type="text" className="registerPartner__inputSoc"/>
                            </label>
                            <label className="registerPartner__labelSoc">
                            <span className="registerPartner__svg">
<svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd"
      d="M7.14918 0.265125C11.1787 -0.0501264 15.2267 -0.0501263 19.2562 0.265125L21.963 0.476892C23.4707 0.594846 24.7041 1.72481 24.9533 3.21643C25.5769 6.94858 25.5769 10.7583 24.9533 14.4905C24.7041 15.9821 23.4707 17.1121 21.963 17.23L19.2562 17.4418C15.2267 17.757 11.1787 17.757 7.14918 17.4418L4.44238 17.23C2.9347 17.1121 1.70129 15.9821 1.45206 14.4905C0.828479 10.7583 0.828479 6.94858 1.45206 3.21643C1.70129 1.72481 2.93469 0.594846 4.44238 0.476892L7.14918 0.265125ZM10.7866 11.8374V5.8695C10.7866 5.58781 11.0939 5.41381 11.3355 5.55874L16.3088 8.5427C16.5434 8.68346 16.5434 9.02346 16.3088 9.16422L11.3355 12.1482C11.0939 12.2931 10.7866 12.1191 10.7866 11.8374Z"
      fill="white"/>
</svg>

                            </span>
                                <input type="text" className="registerPartner__inputSoc"/>
                            </label>
                            <label className="registerPartner__labelSoc">
                            <span className="registerPartner__svg">
<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd"
      d="M20.3281 19.8378L20.3289 19.8358L20.3499 19.7832L23.9725 1.51919V1.45987C23.9725 1.0048 23.8043 0.607539 23.4385 0.369247C23.1182 0.160669 22.75 0.145815 22.4919 0.16541C22.2189 0.186133 21.9614 0.254284 21.7832 0.311012C21.6915 0.340197 21.6147 0.368318 21.5599 0.389587C21.5323 0.400262 21.51 0.40932 21.4937 0.416069L21.4778 0.422782L1.28007 8.34605L1.27451 8.34805C1.2636 8.35202 1.24918 8.3574 1.23176 8.36418C1.19702 8.3777 1.14974 8.39705 1.09419 8.42222C0.985133 8.47165 0.834451 8.54793 0.681635 8.65258C0.42209 8.83031 -0.0721249 9.25109 0.0113271 9.91819C0.0804504 10.4707 0.46134 10.8217 0.718126 11.0034C0.855777 11.1008 0.987466 11.171 1.0839 11.2169C1.13276 11.2402 1.17427 11.258 1.20518 11.2706C1.22067 11.2769 1.23363 11.2819 1.24366 11.2857L1.25649 11.2905L1.2647 11.2936L4.79842 12.4832C4.78649 12.7049 4.80848 12.931 4.86728 13.154L6.63736 19.8687C6.84724 20.6648 7.56749 21.2194 8.39083 21.2188C9.12884 21.2182 9.78337 20.7718 10.0614 20.1056L12.825 17.1508L17.5712 20.7896L17.6387 20.819C18.07 21.0072 18.4728 21.0668 18.8412 21.0165C19.209 20.9662 19.5013 20.812 19.7209 20.6363C19.9369 20.4635 20.085 20.2684 20.1782 20.1215C20.2255 20.0469 20.2607 19.9813 20.2852 19.9319C20.2975 19.9071 20.3072 19.8861 20.3144 19.8698L20.3235 19.8488L20.3268 19.841L20.3281 19.8378ZM6.61938 12.6921C6.57915 12.5395 6.64231 12.3784 6.77553 12.2938L18.7614 4.68224C18.7614 4.68224 19.4664 4.25424 19.4412 4.68224C19.4412 4.68224 19.567 4.75782 19.1893 5.11023C18.831 5.44494 10.6466 13.3466 9.81847 14.1462C9.77067 14.1923 9.74213 14.2453 9.72529 14.3096L8.38946 19.4067L6.61938 12.6921Z"
      fill="white"/>
</svg>

                            </span>
                                <input type="text" className="registerPartner__inputSoc"/>
                            </label>
                            <label className="registerPartner__labelSoc">
                            <span className="registerPartner__svg">
<svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
    d="M11.3502 8.07486C9.18194 8.07486 7.42419 9.83261 7.42419 12.0009C7.42419 14.1692 9.18194 15.9269 11.3502 15.9269C13.5185 15.9269 15.2763 14.1692 15.2763 12.0009C15.2763 9.83261 13.5185 8.07486 11.3502 8.07486Z"
    fill="white"/>
<path fillRule="evenodd" clipRule="evenodd"
      d="M5.03177 1.22721C9.19714 0.761666 13.5034 0.761666 17.6687 1.22721C19.962 1.48352 21.8117 3.29043 22.0809 5.59176C22.5789 9.85001 22.5789 14.1518 22.0809 18.41C21.8117 20.7114 19.962 22.5183 17.6687 22.7746C13.5034 23.2401 9.19714 23.2401 5.03177 22.7746C2.73848 22.5183 0.888785 20.7114 0.619624 18.41C0.121584 14.1518 0.121584 9.85001 0.619624 5.59176C0.888785 3.29043 2.73848 1.48352 5.03177 1.22721ZM17.3903 4.75283C16.7231 4.75283 16.1823 5.29367 16.1823 5.96084C16.1823 6.62801 16.7231 7.16885 17.3903 7.16885C18.0575 7.16885 18.5983 6.62801 18.5983 5.96084C18.5983 5.29367 18.0575 4.75283 17.3903 4.75283ZM5.61218 12.0009C5.61218 8.83186 8.18119 6.26284 11.3502 6.26284C14.5193 6.26284 17.0883 8.83186 17.0883 12.0009C17.0883 15.1699 14.5193 17.739 11.3502 17.739C8.18119 17.739 5.61218 15.1699 5.61218 12.0009Z"
      fill="white"/>
</svg>

                            </span>
                                <input type="text" className="registerPartner__inputSoc"/>
                            </label>
                            <label className="registerPartner__labelSoc">
                            <span className="registerPartner__svg">
<svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
    d="M9.15337 0.551636C7.67159 0.551636 6.2505 1.14027 5.20273 2.18805C4.15495 3.23582 3.56632 4.65691 3.56632 6.13869V9.24932H0.57649C0.426377 9.24932 0.304688 9.37101 0.304688 9.52112V13.6284C0.304688 13.7785 0.426378 13.9002 0.57649 13.9002H3.56632V22.326C3.56632 22.4762 3.68801 22.5979 3.83812 22.5979H7.94536C8.09547 22.5979 8.21716 22.4762 8.21716 22.326V13.9002H11.2335C11.3582 13.9002 11.4669 13.8153 11.4972 13.6943L12.524 9.58704C12.5669 9.4155 12.4371 9.24932 12.2603 9.24932H8.21716V6.13869C8.21716 5.89039 8.3158 5.65226 8.49137 5.47669C8.66695 5.30112 8.90508 5.20248 9.15337 5.20248H12.2942C12.4443 5.20248 12.566 5.08079 12.566 4.93068V0.823438C12.566 0.673326 12.4443 0.551636 12.2942 0.551636H9.15337Z"
    fill="white"/>
</svg>

                            </span>
                                <input type="text" className="registerPartner__inputSoc"/>
                            </label>
                        </div>
                    </div>
                    <div className="registerPartner__box registerPartner__box_third">
                        <h5 className="registerPartner__h5">Режим работы:</h5>
                        <div onClick={() => setLine(!line)} className="registerPartner__days">
                            <p className="registerPartner__day">{day}</p>
                            <div className="registerPartner__picture">
                                <svg viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.75 6.707L5.86863 10V0H4.11863V10L1.23725 6.707L0 8.121L3.75638 12.414C4.08455 12.7889 4.52959 12.9996 4.99363 12.9996C5.45766 12.9996 5.9027 12.7889 6.23087 12.414L9.98725 8.121L8.75 6.707Z"
                                        fill="#F8A303"/>
                                </svg>

                            </div>
                            {
                                line ?
                                    <ul className="registerPartner__weeks">
                                        {
                                            arr.map((item, index) => (
                                                <li key={index} onClick={() => chooseDay(item)}
                                                    className="registerPartner__item">{item}</li>
                                            ))
                                        }
                                    </ul>
                                    : ''
                            }
                        </div>


                        <div className="registerPartner__times">
                            <label className="registerPartner__labelTime">
                                <input type="text" className="registerPartner__inputTime"/>
                                <span className="registerPartner__spanTime">
                                     <svg width="21" height="24" viewBox="0 0 21 24" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
<path
    d="M14.2559 12.707L11.3745 16V6H9.62448V16L6.74311 12.707L5.50586 14.121L9.26223 18.414C9.59041 18.7889 10.0354 18.9996 10.4995 18.9996C10.9635 18.9996 11.4086 18.7889 11.7367 18.414L15.4931 14.121L14.2559 12.707Z"
    fill="#F8A303"/>
</svg>

                                </span>
                            </label>
                            <label className="registerPartner__labelTime">
                                <input type="text" className="registerPartner__inputTime"/>
                                <span className="registerPartner__spanTime">
                                     <svg width="21" height="24" viewBox="0 0 21 24" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
<path
    d="M14.2559 12.707L11.3745 16V6H9.62448V16L6.74311 12.707L5.50586 14.121L9.26223 18.414C9.59041 18.7889 10.0354 18.9996 10.4995 18.9996C10.9635 18.9996 11.4086 18.7889 11.7367 18.414L15.4931 14.121L14.2559 12.707Z"
    fill="#F8A303"/>
</svg>
                                </span>
                            </label>
                        </div>
                        <label className="registerPartner__check">
                            <input type="checkbox" className="registerPartner__inputCheck"/>
                            <span className={'registerPartner__spanContract'}>Довогор аферты</span>
                        </label>
                        <div className="registerPartner__submit">
                            <Btn text={'РЕГИСТРАЦИЯ'} theme={'big'}/>
                        </div>
                        <p className="registerPartner__has">у меня есть аккаунт</p>


                    </div>

                </form>
                <div className="registerPartner__cart">
                    <img src={cart} alt="cart" className="registerPartner__cart-city"/>
                </div>
            </div>
        </div>
    );
};

export default RegisterPartner;