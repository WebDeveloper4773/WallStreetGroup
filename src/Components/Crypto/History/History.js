import React from 'react'
import './History.css'
import './../Quote/Quote.css'

const History = () => {
    return (
        <div className="history">
            <div className="trust-text">
                <h3>
                    Истории участников
                </h3>
            </div>
            <div className="trust-items">
                <div className="history-item">
                    <div className="history-item-img history-img-1"></div>
                    <div className="history-absolute">
                        <p>Кирилл смог уволиться с работы и посвятить освободившееся время предпринимательству</p>
                    </div>
                </div>
                <div className="history-item">
                    <div className="history-item-img history-img-2"></div>
                    <div className="history-absolute">
                        <p>Саня купил автомобиль без кредита и совмещает инвестиции с работой</p>
                    </div>
                </div>
                <div className="history-item">
                    <div className="history-item-img history-img-3"></div>
                    <div className="history-absolute">
                        <p>Диму трейдинг замотивировал на обучение </p>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default History