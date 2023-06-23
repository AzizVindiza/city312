import React from 'react';
import CardLike from "./CardLike/CardLike";
import "./like.sass"
const LikeSection = () => {
    return (
        <div className={'like'}>
            <div className="like__container">
                <h2 className="like__h2">Ваши понравившееся публикации</h2>
                <div className="like__wrapper">
                    <CardLike/>
                    <CardLike/>
                    <CardLike/>

                </div>
            </div>
        </div>
    );
};

export default LikeSection;