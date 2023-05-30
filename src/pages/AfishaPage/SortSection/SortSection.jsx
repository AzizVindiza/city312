import React from 'react';
import DiscountCard from "../../../components/DiscountCard/DiscountCard";
import "./sortSection.sass"
import {useGetCard} from "../../../redux/ApiSlice/ApiSlice";

const SortSection = () => {
    const {data,isLoading} = useGetCard()
    console.log(data)
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
                {
                    data.map((item) => (
                        <p>{item.name}</p>
                    ))
                }
            </div>
        </section>
    );
};

export default SortSection;