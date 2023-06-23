import React, {useState} from 'react';
import {createContext} from "react";

export const CustomContext =createContext()
const Context = (props) => {
    const [category,setCategory] = useState('')

    const valueContext = {
        category,setCategory
    }

    return <CustomContext.Provider value={valueContext}>
             {props.children}
           </CustomContext.Provider>
};

export default Context;