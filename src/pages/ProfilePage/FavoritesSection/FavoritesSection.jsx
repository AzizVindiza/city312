import React from 'react';
import FavoritesCard from "./FavoritesCard/FavoritesCard";
import "./favoritesSection.sass"
const FavoritesSection = () => {
    return (
        <div className={'favoritesSection'}>
            <div className="favoritesSection__container">
                <h2 className="favoritesSection__h2">Избранное</h2>
                <div className="favoritesSection__wrapper">
                    <FavoritesCard/>
                    <FavoritesCard/>
                    <FavoritesCard/>
                    <FavoritesCard/>
                </div>
            </div>
        </div>
    );
};

export default FavoritesSection;