import React, {useContext} from 'react';
import UserSection from "./UserSection/UserSection";
import {CustomContext} from "../../Context";
 import BankCardSection from "./BankCardSection/BankCardSection";
 import BankSection from "./BankSection/BankSection";
import "./profile.sass"
import EditSection from "./EditSection/EditSection";
import SettingsSection from "./SettingsSection/SettingsSection";
import SubscriptionSection from "./SubscriptionSection/SubscriptionSection";


const Profile = () => {
    const {category} = useContext(CustomContext)
    return (
        <div className={'profile profile__container container'}>
            <UserSection/>
            {category === "Моя карта" ? <BankSection/> : category === "Добавить банковскую карту" ?  <BankCardSection/> : category === "Настройки" ? <SettingsSection/> :
                category === "Подписки" ? <SubscriptionSection/>   : <EditSection/> }
        </div>

    );
};

export default Profile;