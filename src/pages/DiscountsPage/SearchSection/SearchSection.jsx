import React from 'react';
import "./SearchSection.sass"
const SearchSection = () => {
    return (
        <div className={'searchSection'}>
            <div className=" searchSection__container container">
                <div className="searchSection__wrapper">
                    <label  className="searchSection__label">
                        <input placeholder={'Искать скидки '} type="text" className="searchSection__input"/>
                    </label>
                    <button type={"submit"} className="searchSection__btn">Найти </button>
                </div>
            </div>
        </div>
    );
};

export default SearchSection;