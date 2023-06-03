import React from 'react';

import "./sortSection.sass"

import AfishaCard from "./AfishaCard/AfishaCard";
import {useGetPlayBillQuery} from "../../../redux/ApiSlice/ApiSlice";



const SortSection = () => {
    const {data} = useGetPlayBillQuery()
    console.log(data)
    return (
        <section className={'sortSection'}>
            <div className="container sortSection__container">
                <h2 className={'sortSection__h2'}>Главное</h2>
                <div className="sortSection__wrapper">
                    {
                        data ? data.map((el)=>{
                            return <AfishaCard key={el.id} item={el}/>
                        }) : "error"
                    }

                </div>

            </div>
        </section>
    );
};

export default SortSection;