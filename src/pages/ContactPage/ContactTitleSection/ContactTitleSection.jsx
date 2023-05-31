import React from 'react';
import './ContactTitleSection.sass'

const ContactTitleSection = ({m}) => {
    return (
        <section className= {`contactTitleSection ${m ? `contactTitleSection_${m}` : ""}`}>
            <div className="contactTitleSection__container container">
                <div className="contactTitleSection__questions">
                    <h2 className="contactTitleSection__h2">Остались вопросы </h2>
                    <p className="contactTitleSection__p">Оставтье заявку, мы свяжемся с вами в ближайщее время</p>
                </div >
            </div>

        </section>
    );
};

export default ContactTitleSection;