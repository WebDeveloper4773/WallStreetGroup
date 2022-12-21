import React from 'react'
import './Trust.css'
import Frame44 from './../../img/Frame44.png'
import Frame58 from './../../img/Frame58.png'
import Frame59 from './../../img/Frame59.png'
import Frame60 from './../../img/Frame60.png'


const Trust = () => {
    return (
        <div className="trust">
            <div className="trust-text">
                <h3>
                    Нам можно довериться
                </h3>
            </div>
            <div className="trust-items">
                <div className="trust-item">
                    <div className="trust-about">
                        <h4>Открытая статистика</h4>
                        <p>Публикуем результаты сделок в открытой группе.</p>
                        <a>Посмотреть <img src={Frame44} href="#"/></a>
                    </div>
                    <img src={Frame58} className="trust-img1" href='#'/>
                </div>
                <div className="trust-item">
                    <img src={Frame59} className="trust-img2" href='#'/>
                    <div className="trust-about">
                        <h4>Безопасные сделки</h4>
                        <p>Мы не имеет доступ к вашим средствам. Вы оплачиваете только подписку. Пройдя наше обучение вы узнаете основы безопасности в сети и никто не сможет вас заскамить.</p>
                    </div>
                </div>
                <div className="trust-item">
                    <div className="trust-about">
                        <h4>Качественное обучение</h4>
                        <p>У нас одно из лучших обучений. Вы узнаете теорию и получите практику. На заключительном этапе вы можете пройти тестирование.</p>
                    </div>
                    <img src={Frame60} className="trust-img1" href='#'/>
                </div>
            </div>
        </div>
    )
}

export default Trust