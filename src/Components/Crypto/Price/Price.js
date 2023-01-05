import React from 'react'
import './Price.css'
import Vector2 from './../../Svg/Vector2'
import Telegram2 from './../../Svg/Telegram2'

const Price = () => {
    return (
        <div className="price">
            <div className="price-title">
                <h3>
                    Wall Street Crypto стоит $390 первый месяц, следующие месяцы — $190.
                </h3>
            </div>
            <div className="price-content">
                <div className="price-get-content">
                    <h4>
                        Оплатив подписку вы получите:
                    </h4>
                    <div className="price-item">
                        <Vector2 />
                        <span>
                            Доступ к обучению
                        </span>
                    </div>
                    <div className="price-item">
                        <Vector2 />
                        <span>
                            Круглосуточную поддержку
                        </span>
                    </div>
                    <div className="price-item">
                        <Vector2 />
                        <span>
                            Канал с IDO, проектами web3
                        </span>
                    </div>
                    <div className="price-item">
                        <Vector2 />
                        <span>
                            Канал с сигналами
                        </span>
                    </div>
                </div>
                <div className="price-about">
                    <div className="price-about">
                        <h4>Свяжитесь с нами,<br/> чтобы приобрести подписку</h4>
                        <a target="_blank" href="https://t.me/millioner" className="price-link">
                            <Telegram2 />
                            <span>
                                @millioner
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Price