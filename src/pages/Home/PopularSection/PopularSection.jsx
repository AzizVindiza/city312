import React from 'react';
import "./PopularSection.sass"
import Line from "../../../components/Line/Line";
import Btn from "../../../components/Btn/Btn";
import DiscountCard from "../../../components/DiscountCard/DiscountCard";
import {useGetCardQuery} from "../../../redux/ApiSlice/ApiSlice";
const PopularSection = () => {
    const {data} = useGetCardQuery()
    return (
        <section className="popularSection">
            <div className="container popularSection__container">
                <h2 className="popularSection__h2 title">
                    популярные скидки
                    <Line/>
                </h2>
                <p className="popularSection__p p">
                    КАЖДЫЙ ДЕНЬ МАГАЗИН БУДЕТ ОБНОВЛЯТСЯ НОВЫМИ СКИДКАМИ, ВЫ БУДЕТЕ УВЕДОМЛЕНЫ, ЕСЛИ БУДЕТЕ ПОДПИСЫВАТЬСЯ НА ТОТ ИЛИ ИНОЙ БРЕНД, ТАКЖЕ ТУТ НУЖЕН КАКОЙ ТО ТЕКСТ ИЛИ ЧТО ТО
                </p>
                <div className="popularSection__cards">
                    {
                        data ?  data.map((item) => (
                            <DiscountCard key={item.id} item={item} />
                        )) : "error"
                    }
                </div>

                <Btn text={"полный список"} type={"button"}/>

            </div>
        </section>
    );
};

export default PopularSection;