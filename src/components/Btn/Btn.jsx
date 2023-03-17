import React from 'react';
import "./Btn.sass"
const Btn = ({text,type,theme}) => {
    return (
        <button className={`btn ${theme ? "btn_transparent" : ""}`} type={type}>
            <h4 className="btn__text">{text}</h4>
        </button>
    );
};

export default Btn;