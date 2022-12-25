import React from 'react'
import './../../Crypto/History/History'
import './HistoryMobile.css'
import './../../Crypto/Quote/Quote.css'
import History1 from './../../img/history1.png'
import History2 from './../../img/history2.png'
import History3 from './../../img/history3.png'

const HistoryMobile = () => {
    return (
        <div className="history-mobile">
            <div className="trust-text">
                <h3>
                    Истории участников
                </h3>
            </div>
            <div className="trust-items-mobile">
                <div className="history-item-mobile">
                    <img src={History1} className="history-img-mobile"></img>
                    <div className="history-absolute-mobile">
                        <p>Кирилл смог уволиться с работы и посвятить освободившееся время предпринимательству</p>
                    </div>
                </div>
                <div className="history-item-mobile">
                    <img src={History2} className="history-img-mobile"></img>
                    <div className="history-absolute-mobile">
                        <p>Саня купил автомобиль без кредита и совмещает инвестиции с работой</p>
                    </div>
                </div>
                <div className="history-item-mobile">
                    <img src={History3} className="history-img-mobile"></img>
                    <div className="history-absolute-mobile">
                        <p>Диму трейдинг замотивировал на обучение </p>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default HistoryMobile