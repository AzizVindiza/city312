import React from 'react';
import './MobileSection.sass'
import ContactTitleSection from "../ContactTitleSection/ContactTitleSection";


const MobileSection = () => {
    return (
        <section className="mobileSection">
            <div className="mobileSection__container container">
                <div className="mobileSection__wrapper">
                    <ContactTitleSection m={'name'}/>
                    <div className="mobileSection__tel">
                        <h3 className="mobileSection__h3">
                            Телефон
                        </h3>
                        <div className="mobileSection__number">
                            <span className="mobileSection__span">+ 996 (502) 031222</span>
                            <span className="mobileSection__span">+ 996 (502) 031222</span>
                        </div>
                    </div>
                    <div className="mobileSection__email">
                        <h3 className="mobileSection__h3">
                            Почта
                        </h3>
                        <div className="mobileSection__mail">
                           office@city312.kg
                        </div>
                    </div>
                    <div className="mobileSection__social">
                        <h3 className="mobileSection__h3">
                            Наши социальные сети
                        </h3>
                        <div className="mobileSection__icons">
                            <svg className="mobileSection__svg" width="52" height="50" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.750488 25.3054C0.750488 38.6637 11.5795 49.4927 24.9378 49.4927C38.296 49.4927 49.125 38.6637 49.125 25.3054C49.125 11.9472 38.296 1.11816 24.9378 1.11816C11.5795 1.11816 0.750488 11.9472 0.750488 25.3054Z" fill="#F00073"/>
                                <path d="M24.9363 15.0261C28.2621 15.0261 28.7156 15.0261 30.0761 15.0261C31.2855 15.0261 31.8901 15.3284 32.3437 15.4796C32.9483 15.782 33.4019 15.9331 33.8554 16.3866C34.3089 16.8401 34.6112 17.2937 34.7624 17.8983C34.9136 18.3519 35.0647 18.9565 35.2159 20.1659C35.2159 21.5264 35.2159 21.8288 35.2159 25.3057C35.2159 28.7826 35.2159 29.085 35.2159 30.4455C35.2159 31.6549 34.9136 32.2595 34.7624 32.713C34.46 33.3177 34.3089 33.7712 33.8554 34.2247C33.4019 34.6783 32.9483 34.9806 32.3437 35.1318C31.8901 35.2829 31.2855 35.4341 30.0761 35.5853C28.7156 35.5853 28.4132 35.5853 24.9363 35.5853C21.4594 35.5853 21.157 35.5853 19.7965 35.5853C18.5871 35.5853 17.9825 35.2829 17.529 35.1318C16.9243 34.8294 16.4708 34.6783 16.0173 34.2247C15.5637 33.7712 15.2614 33.3177 15.1102 32.713C14.9591 32.2595 14.8079 31.6549 14.6567 30.4455C14.6567 29.085 14.6567 28.7826 14.6567 25.3057C14.6567 21.8288 14.6567 21.5264 14.6567 20.1659C14.6567 18.9565 14.9591 18.3519 15.1102 17.8983C15.4126 17.2937 15.5637 16.8401 16.0173 16.3866C16.4708 15.9331 16.9243 15.6308 17.529 15.4796C17.9825 15.3284 18.5871 15.1773 19.7965 15.0261C21.157 15.0261 21.6106 15.0261 24.9363 15.0261ZM24.9363 12.7585C21.4594 12.7585 21.157 12.7585 19.7965 12.7585C18.436 12.7585 17.529 13.0609 16.7731 13.3632C16.0173 13.6656 15.2614 14.1191 14.5055 14.8749C13.7497 15.6308 13.4474 16.2355 12.9938 17.1425C12.6915 17.8983 12.5403 18.8054 12.3892 20.1659C12.3892 21.5264 12.3892 21.9799 12.3892 25.3057C12.3892 28.7826 12.3892 29.085 12.3892 30.4455C12.3892 31.806 12.6915 32.713 12.9938 33.4689C13.2962 34.2247 13.7497 34.9806 14.5055 35.7365C15.2614 36.4923 15.8661 36.7946 16.7731 37.2482C17.529 37.5505 18.436 37.7017 19.7965 37.8528C21.157 37.8528 21.6106 37.8528 24.9363 37.8528C28.2621 37.8528 28.7156 37.8528 30.0761 37.8528C31.4366 37.8528 32.3437 37.5505 33.0995 37.2482C33.8554 36.9458 34.6112 36.4923 35.3671 35.7365C36.1229 34.9806 36.4253 34.3759 36.8788 33.4689C37.1811 32.713 37.3323 31.806 37.4835 30.4455C37.4835 29.085 37.4835 28.6314 37.4835 25.3057C37.4835 21.9799 37.4835 21.5264 37.4835 20.1659C37.4835 18.8054 37.1811 17.8983 36.8788 17.1425C36.5764 16.3866 36.1229 15.6308 35.3671 14.8749C34.6112 14.1191 34.0065 13.8167 33.0995 13.3632C32.3437 13.0609 31.4366 12.9097 30.0761 12.7585C28.7156 12.7585 28.4132 12.7585 24.9363 12.7585Z" fill="white"/>
                                <path d="M24.9363 18.8054C21.3082 18.8054 18.436 21.6776 18.436 25.3057C18.436 28.9338 21.3082 31.806 24.9363 31.806C28.5644 31.806 31.4366 28.9338 31.4366 25.3057C31.4366 21.6776 28.5644 18.8054 24.9363 18.8054ZM24.9363 29.5385C22.6688 29.5385 20.7035 27.7244 20.7035 25.3057C20.7035 23.0381 22.5176 21.0729 24.9363 21.0729C27.2039 21.0729 29.1691 22.887 29.1691 25.3057C29.1691 27.5732 27.2039 29.5385 24.9363 29.5385Z" fill="white"/>
                                <path d="M31.5878 20.1659C32.4227 20.1659 33.0995 19.4891 33.0995 18.6542C33.0995 17.8193 32.4227 17.1425 31.5878 17.1425C30.7529 17.1425 30.0761 17.8193 30.0761 18.6542C30.0761 19.4891 30.7529 20.1659 31.5878 20.1659Z" fill="white"/>
                            </svg>
                            <svg className="mobileSection__svg" width="53" height="50" viewBox="0 0 53 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.953125 25.3054C0.953125 38.6637 11.7821 49.4927 25.1404 49.4927C38.4987 49.4927 49.3277 38.6637 49.3277 25.3054C49.3277 11.9472 38.4987 1.11816 25.1404 1.11816C11.7821 1.11816 0.953125 11.9472 0.953125 25.3054Z" fill="#1877F2"/>
                                <path d="M37.2405 25.3056C37.2405 18.6541 31.7984 13.2119 25.1469 13.2119C18.4954 13.2119 13.0532 18.6541 13.0532 25.3056C13.0532 31.3524 17.4372 36.341 23.1816 37.248V28.7825H20.1582V25.3056H23.1816V22.5845C23.1816 19.5611 24.9957 17.8982 27.7168 17.8982C29.0773 17.8982 30.4378 18.2005 30.4378 18.2005V21.2239H28.9261C27.4144 21.2239 26.9609 22.131 26.9609 23.038V25.3056H30.2867L29.682 28.7825H26.8097V37.3992C32.8566 36.4922 37.2405 31.3524 37.2405 25.3056Z" fill="white"/>
                            </svg>
                            <svg className="mobileSection__svg" width="52" height="50" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.155762 25.3054C0.155762 38.6637 10.9848 49.4927 24.343 49.4927C37.7013 49.4927 48.5303 38.6637 48.5303 25.3054C48.5303 11.9472 37.7013 1.11816 24.343 1.11816C10.9848 1.11816 0.155762 11.9472 0.155762 25.3054Z" fill="#25D366"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M32.8151 16.6888C30.5475 14.4213 27.5241 13.2119 24.3495 13.2119C17.698 13.2119 12.2559 18.6541 12.2559 25.3056C12.2559 27.4219 12.8606 29.5383 13.9187 31.3524L12.2559 37.3992L18.605 35.7363C20.4191 36.6433 22.3843 37.248 24.3495 37.248C31.001 37.248 36.4431 31.8059 36.4431 25.1544C36.4431 21.9798 35.0826 18.9564 32.8151 16.6888ZM24.3495 35.2828C22.5354 35.2828 20.7214 34.8293 19.2097 33.9223L18.9074 33.7711L15.1281 34.8293L16.1863 31.2012L15.8839 30.7477C14.8257 29.0848 14.3722 27.2708 14.3722 25.4567C14.3722 20.0146 18.9074 15.4795 24.3495 15.4795C27.0706 15.4795 29.4893 16.5377 31.4545 18.3517C33.4197 20.3169 34.3268 22.7357 34.3268 25.4567C34.3268 30.7477 29.9428 35.2828 24.3495 35.2828ZM29.7916 27.7243C29.4893 27.5731 27.9776 26.8173 27.6753 26.8173C27.3729 26.6661 27.2217 26.6661 27.0705 26.9684C26.9194 27.2708 26.3147 27.8754 26.1636 28.1778C26.0124 28.329 25.8612 28.329 25.5588 28.329C25.2565 28.1778 24.3495 27.8754 23.1402 26.8173C22.2331 26.0614 21.6284 25.0032 21.4773 24.7009C21.3261 24.3985 21.4773 24.2474 21.6284 24.0962C21.7796 23.945 21.9308 23.7938 22.0819 23.6427C22.2331 23.4915 22.2331 23.3403 22.3843 23.1892C22.5355 23.038 22.3843 22.8868 22.3843 22.7357C22.3843 22.5845 21.7796 21.0728 21.4773 20.4681C21.3261 20.0146 21.0238 20.0146 20.8726 20.0146C20.7214 20.0146 20.5702 20.0146 20.2679 20.0146C20.1167 20.0146 19.8144 20.0146 19.512 20.3169C19.2097 20.6193 18.4539 21.3751 18.4539 22.8868C18.4539 24.3985 19.512 25.7591 19.6632 26.0614C19.8144 26.2126 21.7796 29.3872 24.803 30.5965C27.3729 31.6547 27.8264 31.3524 28.4311 31.3524C29.0358 31.3524 30.2451 30.5965 30.3963 29.9918C30.6987 29.236 30.6987 28.6313 30.5475 28.6313C30.3963 27.8754 30.094 27.8754 29.7916 27.7243Z" fill="white"/>
                            </svg>




                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default MobileSection;