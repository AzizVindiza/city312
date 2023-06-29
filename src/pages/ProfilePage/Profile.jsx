import React, {useContext} from 'react';
import UserSection from "./UserSection/UserSection";
import {CustomContext} from "../../Context";
 import BankCardSection from "./BankCardSection/BankCardSection";
 import BankSection from "./BankSection/BankSection";
import "./profile.sass"
import EditSection from "./EditSection/EditSection";
import SettingsSection from "./SettingsSection/SettingsSection";
import SubscriptionSection from "./SubscriptionSection/SubscriptionSection";
import CometSection from "./CommetSection/CometSection";
import CardLike from "./LikeSection/CardLike/CardLike";
import LikeSection from "./LikeSection/LikeSection";
import Basket from "./BasketSection/Basket";
import FavoritesCard from "./FavoritesSection/FavoritesCard/FavoritesCard";
import FavoritesSection from "./FavoritesSection/FavoritesSection";
import Notifaction from "./NotifactionSection/Notifaction";


const Profile = () => {
    const {category} = useContext(CustomContext)
    return (
        <div className={'profile profile__container container'}>
            <UserSection/>
            {
                category === "Моя карта" ? <BankSection/> : category === "Добавить банковскую карту" ?  <BankCardSection/> : category === "Настройки" ? <SettingsSection/> :
                category === "Подписки" ? <SubscriptionSection/>   : category === "Комментарии" ? <CometSection/> : category === 'Лайки' ? <LikeSection/> :category === "Корзина" ? <Basket/> : category === 'Избранное' ? <FavoritesSection/> : category === "Уведомления" ? <Notifaction/> :  <EditSection/> }
        </div>

    );
};

export default Profile;