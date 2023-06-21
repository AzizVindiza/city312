import React from 'react';
import person from "../Ellipse 3021 (2).png";
import "./commetCard.sass"
const CommetCard = () => {
    return (
        <div className={'commetCard'}>
            <div className="commetCard__person">
                <div className="commetCard__image">
                    <img className={'img'} src={person} alt="image"/>
                </div>
                <div className="commetCard__wrapp">
                    <h3 className="commetCard__name">Ирина Мирная </h3>
                    <div className="commetCard__line"></div>
                    <p className="commetCard__txt">озможно просто показалось,но постановка голоса стала намного лучше.Очень приятно слушать)))Так держать!</p>
                </div>
            </div>

        </div>
    );
};

export default CommetCard;