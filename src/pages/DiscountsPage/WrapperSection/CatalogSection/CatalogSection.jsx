import React from 'react';
import "./catalogSection.sass"
const CatalogSection = () => {
    return (
        <div className={'catalogSection'}>

                <div className="catalogSection__block">
                    <div className="catalogSection__burger">
                        <div className="catalogSection__line"></div>
                        <div className="catalogSection__line"></div>
                        <div className="catalogSection__line"></div>
                    </div>
                    <h2 className="catalogSection__h2">Каталог</h2>
                </div>

        </div>
    );
};

export default CatalogSection;