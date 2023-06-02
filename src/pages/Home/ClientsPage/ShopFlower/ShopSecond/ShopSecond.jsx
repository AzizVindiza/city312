import React from 'react';
import Btn from "../../../../../components/Btn/Btn";
import "./shopSecond.sass"
const ShopSecond = () => {
    return (
        <div className={'shopSecond'}>
            <div className="shopSecond__btn">
                <Btn theme={'shop'} type={''} text={'Отправить сообщение '}/>
            </div>

            <div className="shopSecond__wrapper">
                <div className="shopSecond__block">
                    <h2 className="shopSecond__h2">Контакты </h2>
                    <div className="shopSecond__numbers">
                        <div className="shopSecond__num">
                            <p className={'shopSecond__number'}>+996 555 345 534</p>
                            <p className={'shopSecond__number shopSecond__number_add'}>+996 555 345 534</p>
                        </div>
                        <div className="shopSecond__num">
                            <p className={'shopSecond__number'}>+996 555 345 534</p>
                            <p className={'shopSecond__number'}>+996 555 345 534</p>
                        </div>
                    </div>
                </div>
                <div className="shopSecond__soc">
                    <div className="shopSecond__inst">
                        <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.0478516 14.0912C0.0478516 21.7871 6.28668 28.026 13.9827 28.026C21.6787 28.026 27.9175 21.7871 27.9175 14.0912C27.9175 6.39517 21.6787 0.156342 13.9827 0.156342C6.28668 0.156342 0.0478516 6.39517 0.0478516 14.0912Z" fill="#F00073"/>
                            <path d="M13.9816 8.16904C15.8977 8.16904 16.1589 8.16904 16.9428 8.16904C17.6395 8.16904 17.9879 8.34323 18.2491 8.43032C18.5975 8.60451 18.8588 8.6916 19.1201 8.95288C19.3814 9.21416 19.5555 9.47543 19.6426 9.8238C19.7297 10.0851 19.8168 10.4335 19.9039 11.1302C19.9039 11.914 19.9039 12.0882 19.9039 14.0913C19.9039 16.0945 19.9039 16.2687 19.9039 17.0525C19.9039 17.7492 19.7297 18.0976 19.6426 18.3589C19.4684 18.7072 19.3814 18.9685 19.1201 19.2298C18.8588 19.4911 18.5975 19.6653 18.2491 19.7524C17.9879 19.8394 17.6395 19.9265 16.9428 20.0136C16.1589 20.0136 15.9847 20.0136 13.9816 20.0136C11.9785 20.0136 11.8043 20.0136 11.0205 20.0136C10.3237 20.0136 9.97536 19.8394 9.71408 19.7524C9.36571 19.5782 9.10443 19.4911 8.84315 19.2298C8.58187 18.9685 8.40769 18.7072 8.3206 18.3589C8.2335 18.0976 8.14641 17.7492 8.05932 17.0525C8.05932 16.2687 8.05932 16.0945 8.05932 14.0913C8.05932 12.0882 8.05932 11.914 8.05932 11.1302C8.05932 10.4335 8.2335 10.0851 8.3206 9.8238C8.49478 9.47543 8.58187 9.21416 8.84315 8.95288C9.10443 8.6916 9.36571 8.51741 9.71408 8.43032C9.97536 8.34323 10.3237 8.25614 11.0205 8.16904C11.8043 8.16904 12.0656 8.16904 13.9816 8.16904ZM13.9816 6.86266C11.9785 6.86266 11.8043 6.86266 11.0205 6.86266C10.2366 6.86266 9.71408 7.03684 9.27861 7.21103C8.84315 7.38521 8.40769 7.64649 7.97223 8.08195C7.53676 8.51742 7.36258 8.86579 7.1013 9.38834C6.92712 9.8238 6.84002 10.3464 6.75293 11.1302C6.75293 11.914 6.75293 12.1753 6.75293 14.0913C6.75293 16.0945 6.75293 16.2687 6.75293 17.0525C6.75293 17.8363 6.92712 18.3589 7.1013 18.7943C7.27549 19.2298 7.53676 19.6653 7.97223 20.1007C8.40769 20.5362 8.75606 20.7104 9.27861 20.9717C9.71408 21.1458 10.2366 21.2329 11.0205 21.32C11.8043 21.32 12.0656 21.32 13.9816 21.32C15.8977 21.32 16.1589 21.32 16.9428 21.32C17.7266 21.32 18.2491 21.1458 18.6846 20.9717C19.1201 20.7975 19.5555 20.5362 19.991 20.1007C20.4265 19.6653 20.6007 19.3169 20.8619 18.7943C21.0361 18.3589 21.1232 17.8363 21.2103 17.0525C21.2103 16.2687 21.2103 16.0074 21.2103 14.0913C21.2103 12.1753 21.2103 11.914 21.2103 11.1302C21.2103 10.3464 21.0361 9.8238 20.8619 9.38834C20.6877 8.95288 20.4265 8.51742 19.991 8.08195C19.5555 7.64649 19.2072 7.4723 18.6846 7.21103C18.2491 7.03684 17.7266 6.94975 16.9428 6.86266C16.1589 6.86266 15.9847 6.86266 13.9816 6.86266Z" fill="white"/>
                            <path d="M13.9816 10.3464C11.8914 10.3464 10.2366 12.0011 10.2366 14.0913C10.2366 16.1816 11.8914 17.8363 13.9816 17.8363C16.0718 17.8363 17.7266 16.1816 17.7266 14.0913C17.7266 12.0011 16.0718 10.3464 13.9816 10.3464ZM13.9816 16.5299C12.6752 16.5299 11.543 15.4848 11.543 14.0913C11.543 12.785 12.5881 11.6527 13.9816 11.6527C15.288 11.6527 16.4202 12.6979 16.4202 14.0913C16.4202 15.3977 15.288 16.5299 13.9816 16.5299Z" fill="white"/>
                            <path d="M17.8137 11.1302C18.2947 11.1302 18.6846 10.7403 18.6846 10.2593C18.6846 9.77827 18.2947 9.38834 17.8137 9.38834C17.3327 9.38834 16.9428 9.77827 16.9428 10.2593C16.9428 10.7403 17.3327 11.1302 17.8137 11.1302Z" fill="white"/>
                        </svg>


                    </div>
                    <div className="shopSecond__fc">
                        <svg width="31" height="29" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.917969 14.0912C0.917969 21.7871 7.1568 28.026 14.8528 28.026C22.5488 28.026 28.7876 21.7871 28.7876 14.0912C28.7876 6.39517 22.5488 0.156342 14.8528 0.156342C7.1568 0.156342 0.917969 6.39517 0.917969 14.0912Z" fill="#1877F2"/>
                            <path d="M21.8245 14.0912C21.8245 10.2591 18.6891 7.12381 14.8571 7.12381C11.025 7.12381 7.88965 10.2591 7.88965 14.0912C7.88965 17.5749 10.4153 20.449 13.7249 20.9715V16.0943H11.983V14.0912H13.7249V12.5236C13.7249 10.7817 14.77 9.82368 16.3376 9.82368C17.1215 9.82368 17.9053 9.99787 17.9053 9.99787V11.7397H17.0344C16.1634 11.7397 15.9022 12.2623 15.9022 12.7848V14.0912H17.8182L17.4698 16.0943H15.8151V21.0586C19.2988 20.5361 21.8245 17.5749 21.8245 14.0912Z" fill="white"/>
                        </svg>


                    </div>
                    <div className="shopSecond__wh">
                        <svg width="31" height="29" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.787109 14.0912C0.787109 21.7871 7.02594 28.026 14.7219 28.026C22.4179 28.026 28.6567 21.7871 28.6567 14.0912C28.6567 6.39517 22.4179 0.156342 14.7219 0.156342C7.02594 0.156342 0.787109 6.39517 0.787109 14.0912Z" fill="#25D366"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6034 9.12694C18.297 7.82055 16.5551 7.12381 14.7262 7.12381C10.8941 7.12381 7.75879 10.2591 7.75879 14.0912C7.75879 15.3105 8.10716 16.5298 8.71681 17.5749L7.75879 21.0586L11.4167 20.1006C12.4618 20.6232 13.594 20.9715 14.7262 20.9715C18.5583 20.9715 21.6936 17.8362 21.6936 14.0041C21.6936 12.1752 20.9098 10.4333 19.6034 9.12694ZM14.7262 19.8393C13.6811 19.8393 12.636 19.5781 11.7651 19.0555L11.5909 18.9684L9.41354 19.578L10.0232 17.4878L9.84901 17.2266C9.23936 16.2685 8.97808 15.2234 8.97808 14.1783C8.97808 11.043 11.5909 8.4302 14.7262 8.4302C16.2939 8.4302 17.6874 9.03985 18.8196 10.085C19.9518 11.2172 20.4743 12.6106 20.4743 14.1783C20.4743 17.2266 17.9486 19.8393 14.7262 19.8393ZM17.8615 15.4847C17.6873 15.3976 16.8164 14.9621 16.6422 14.9621C16.4681 14.8751 16.3809 14.8751 16.2939 15.0492C16.2068 15.2234 15.8584 15.5718 15.7713 15.746C15.6842 15.8331 15.5971 15.8331 15.4229 15.8331C15.2487 15.746 14.7262 15.5718 14.0295 14.9621C13.5069 14.5267 13.1585 13.917 13.0714 13.7428C12.9843 13.5687 13.0714 13.4816 13.1585 13.3945C13.2456 13.3074 13.3327 13.2203 13.4198 13.1332C13.5069 13.0461 13.5069 12.959 13.594 12.8719C13.6811 12.7848 13.594 12.6977 13.594 12.6106C13.594 12.5236 13.2456 11.6526 13.0714 11.3043C12.9843 11.043 12.8102 11.043 12.7231 11.043C12.636 11.043 12.5489 11.043 12.3747 11.043C12.2876 11.043 12.1134 11.043 11.9392 11.2172C11.765 11.3913 11.3296 11.8268 11.3296 12.6977C11.3296 13.5687 11.9392 14.3525 12.0263 14.5267C12.1134 14.6138 13.2456 16.4427 14.9875 17.1395C16.468 17.7491 16.7293 17.5749 17.0777 17.5749C17.4261 17.5749 18.1228 17.1395 18.2099 16.7911C18.3841 16.3556 18.3841 16.0073 18.297 16.0073C18.2099 15.5718 18.0357 15.5718 17.8615 15.4847Z" fill="white"/>
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopSecond;