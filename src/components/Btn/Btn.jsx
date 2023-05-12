import React from 'react';
import "./Btn.sass"
const Btn = ({text,type,theme}) => {
    return (
        <button  className={`btn ${theme ? `btn_${theme}` : ""}`} type={type}>
            <h4 className="btn__text">{text}</h4>
        </button>
    );
};

export default Btn;