import React from 'react';
import DiscountCard from "../../../components/DiscountCard/DiscountCard";
import "./sortSection.sass"
import {useGetCardQuery} from "../../../redux/ApiSlice/ApiSlice";
import AfishaCard from "./AfishaCard/AfishaCard";



const SortSection = () => {
    const {data} = useGetCardQuery()
    console.log(data)
    return (
        <section className={'sortSection'}>
            <div className="container sortSection__container">
                <h2 className={'sortSection__h2'}>Главное</h2>
                <div className="sortSection__wrapper">
                  <AfishaCard/>
                </div>

            </div>
        </section>
    );
};

export default SortSection;