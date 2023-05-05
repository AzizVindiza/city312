import React, {useState} from 'react';
import "./sortSection.sass"
const SortSection = () => {
    const sort = ['Без сортировки','Выбор пользователя','Новые','Лидеры продаж','Сначало дешевые','Сначало дешевые ']
    const [open,setOpen] = useState(false)
    const [choose, setChoose] = useState('Без сортировки')

    const chooseCategory = (item) => {
        setChoose(item)
        setOpen(false)
    }
    return (
        <div className={'sortSection'}>
            <div className="container sortSection__container">
                <div onClick={() => setOpen(!open)} className="sortSection__block">
                    <h2   className="sortSection__h2">{choose}</h2>
                    <div className="sortSection__svg">
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.05217 6.29251L5.18778 2.99951L5.18778 12.9995L7.09219 12.9995L7.09219 2.99951L10.2278 6.29251L11.5742 4.87851L7.4864 0.585513C7.12927 0.210571 6.64496 -5.96855e-05 6.13998 -5.96449e-05C5.635 -5.96044e-05 5.1507 0.210571 4.79357 0.585514L0.70575 4.87851L2.05217 6.29251Z" fill="#F8A303"/>
                        </svg>
                    </div>
                </div>
                {
                    open ?
                        <ul className="sortSection__ul">
                            {
                                sort.map((item,i) => (
                                    <li onClick={() => chooseCategory(item) } className="sortSection__item">{item}</li>
                                ))
                            }
                        </ul> : ''
                }

            </div>
        </div>
    );
};

export default SortSection;