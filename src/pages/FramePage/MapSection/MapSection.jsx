import React from 'react';
import "./mapSection.sass"
const MapSection = () => {
    return (
        <section className={'mapSection'}>
            <div className="container mapSection__container ">
                <div className="mapSection__map">
                    <iframe
                        className={'mapSection__iframe'}
                        title="mapX"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d826.4433335598899!2d74.59557587177157!3d42.87450592458347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1679463495675!5m2!1sru!2skg"
                        style={{border: "0"}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">

                    </iframe>

                </div>
            </div>
        </section>
    );
};

export default MapSection;