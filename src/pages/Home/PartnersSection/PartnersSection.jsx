import React from 'react';
import "./PartnersSection.sass"
import PartnerCard from "../../../components/PartnerCard/PartnerCard";
import {useGetPartnersQuery} from "../../../redux/ApiSlice/ApiSlice";
const PartnersSection = () => {
   const {data,isLoading} = useGetPartnersQuery()
    return (
        <section className="partnersSection">
            <div className="container partnersSection__container">
                <h2 className="partnersSection__h2 title">
                    ПАРТНЕРЫ
                </h2>
                <div className="partnersSection__cards">
                            <PartnerCard  />


                </div>
            </div>
        </section>
    );
};

export default PartnersSection;