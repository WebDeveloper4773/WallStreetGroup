import React from 'react'
import './Hero.css'
import PhoneChat from './../../img/PhoneChat.png'

const Hero = (props) => {
    return (
        <div className="hero">
            <div className="hero-about">
                <h2>
                    Хочешь заработать <br/>на крипте?
                </h2>
                <h3>
                    Вступай в Wall Street<br/> Crypto
                </h3>
                <span >
                    Закрытый Telegram-канал с надёжными прогнозами и качественной системой обучения по подписке.
                </span>
            </div>
            <img src={PhoneChat}/>
        </div>
    )
}

export default Hero