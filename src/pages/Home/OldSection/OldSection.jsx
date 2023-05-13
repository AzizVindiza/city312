import React from 'react';
import './OldSection.sass'
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img4.png'
import img5 from './img5.png'
import img6 from './img6.png'

const OldSection = () => {
    return (
        <section className="old">
            <div className="old__container container">
                <div className="old__img">
                    <img src={img1} alt="partners logo"/>
                </div>
                <div className="old__img">
                    <img src={img2} alt="partners logo"/>
                </div>
                <div className="old__img">
                    <img src={img3} alt="partners logo"/>
                </div>
                <div className="old__img">
                    <img src={img4} alt="partners logo"/>
                </div>
                <div className="old__img">
                    <img src={img5} alt="partners logo"/>
                </div>
                <div className="old__img">
                    <img src={img6} alt="partners logo"/>
                </div>

            </div>
        </section>
    );
};

export default OldSection;