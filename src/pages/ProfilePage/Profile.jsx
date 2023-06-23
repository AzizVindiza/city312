import React, {useContext} from 'react';
import UserSection from "./UserSection/UserSection";
import {CustomContext} from "../../Context";
 import BankCardSection from "./BankCardSection/BankCardSection";
 import BankSection from "./BankSection/BankSection";
import "./profile.sass"
import EditSection from "./EditSection/EditSection";
const Profile = () => {
    const {category} = useContext(CustomContext)
    return (
        <div className={'profile'}>
            <UserSection/>
            {category === "Моя карта" ? <BankSection/>   : category === "Добавить банковскую карту" ?  <BankCardSection/> : <EditSection/> }
        </div>
    );
};

export default Profile;