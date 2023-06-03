import React from 'react';
import "./MapSection.sass"
import Line from "../../../components/Line/Line";

const MapSection = () => {
    return (
        <section className="map">
            <h2 className="map__title title">
                где приобрести карту?
                <Line/>
            </h2>

            <div className="map__container">
                <div className="map__google">
                    <iframe
                        title="mapX"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d826.4433335598899!2d74.59557587177157!3d42.87450592458347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1679463495675!5m2!1sru!2skg"
                        style={{border: "0"}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="map__text">
                    <h3 className="map__h2 title">Наш адрес
                    </h3>
                    <h3 className="map__h3">Бишкек</h3>
                    <ul className="map__ul">
                        <li className="map__li map__li_h">Офис</li>
                        <li className="map__li">Бишкек</li>
                        <li className="map__li">+996 558 999 000</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default MapSection;