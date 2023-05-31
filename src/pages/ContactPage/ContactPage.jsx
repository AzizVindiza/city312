import React from 'react';
import './ContactPage.sass'
import ContactSection from "./ContactSection/ContactSection";
import MobileSection from "./MobileSection/MobileSection";
import ContactMap from "./ContactMap/ContactMap";

const ContactPage = () => {
    return (
        <>
            <div className={'contact'}>
                <ContactSection/>
                <MobileSection/>

            </div>
            <ContactMap/>


        </>
    );
};

export default ContactPage;