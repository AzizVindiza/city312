import React from 'react';
import FirstSection from "./FirstSection/FirstSection";
import HowItWorkSection from "./HowItWorkSection/HowItWorkSection";
import BenefitsSection from "./BenefitsSection/BenefitsSection";
import DiscountsSection from "./DiscountsSection/DiscountsSection";
import PopularSection from "./PopularSection/PopularSection";
import PartnersSection from "./PartnersSection/PartnersSection";
import MapSection from "./MapSection/MapSection";
import FeedbackSection from "./FeedbackSection/FeedbackSection";
const Home = () => {
    return (
        <>
            <FirstSection/>
            <HowItWorkSection/>
            <BenefitsSection/>
            <DiscountsSection/>
            <PopularSection/>
            <PartnersSection/>
            <MapSection/>
            <FeedbackSection/>
        </>
    );
};

export default Home;