import React from 'react'
import './../../Crypto/Price/Price.css'
import './PriceMobile.css'
import Vector2 from './../../Svg/Vector2'
import TG2 from './../../Svg/TG2'

const PriceMobile = () => {
    return (
        <div className="price-mobile">
            <div className="price-title">
                <h3>
                    Wall Street Crypto стоит $390 первый месяц, следующие месяцы — $190.
                </h3>
            </div>
            <div className='price-get-container'> 
                <div className="price-get-content-mobile">
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
                            Чат с участниками
                        </span>
                    </div>
                    <div className="price-item">
                        <Vector2 />
                        <span>
                            Канал с сигналами
                        </span>
                    </div>
                    <div className="price-item price-last">
                        <Vector2 />
                        <span>
                            Канал с аналитикой и новостями
                        </span>
                    </div>
                </div>
            </div>
            <div className="price-about">
                <h4>Свяжитесь с нами,<br/> чтобы приобрести подписку</h4>
                <a href="https://t.me/millioner" className="price-link">
                    <TG2 />
                    <span>
                        @millioner
                    </span>
                </a>
            </div>
        </div>
    )
}

export default PriceMobile