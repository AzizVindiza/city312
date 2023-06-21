import React, {useRef, useState} from 'react';
import person from "./Ellipse 3021 (2).png"
import "./cometSection.sass"
import logo from "./logo.png"
import SwiperComet from "./SwiperComet/SwiperComet";
import Btn from "../../../components/Btn/Btn";
import next from "./SwiperComet/next.png";
import prev from "./SwiperComet/prev.png";

const CometSection = () => {


    return (
        <section className={'cometSection'}>
            <div className="container cometSection__container">
                    <SwiperComet/>
                    <div className="cometSection__wrapper">
                        <div className="cometSection__block">
                            <div className="cometSection__logo">
                                <img src={logo} alt=""/>
                            </div>
                            <label  className="cometSection__label">
                                <input placeholder={'Введите текст комментария'} type="text" className={'cometSection__input'}/>
                            </label>
                        </div>
                        <Btn type={'button'} text={'Отправить'} theme={'comet'}/>

                    </div>


            </div>

        </section>
    );
};

export default CometSection;