import React from 'react';
import "./Btn.sass"
const Btn = ({text,type,theme}) => {
    return (
        <button   className={`btn ${theme ? `btn_${theme}` : ""}`} type={type}>
             {text}
        </button>
    );
};

export default Btn;