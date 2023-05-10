import React from 'react';
import DiscountCard from "../../../components/DiscountCard/DiscountCard";
import "./sortSection.sass"
const SortSection = () => {
    return (
        <section className={'sortSection'}>
            <div className="container sortSection__container">
                <h2 className={'sortSection__h2'}>Главное</h2>
                <div className="sortSection__wrapper">
                    <DiscountCard/>
                    <DiscountCard/>
                    <DiscountCard/>
                    <DiscountCard/>
                </div>

            </div>
        </section>
    );
};

export default SortSection;