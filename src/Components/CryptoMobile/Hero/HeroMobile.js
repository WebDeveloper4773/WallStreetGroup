import React from 'react'
import './../../Crypto/Hero/Hero.css'
import './HeroMobile.css'
import PhoneChat from './../../img/PhoneChat.png'

const Hero = (props) => {
    return (
        <div className="hero-mobile">
            <div className="hero-about-mobile">
                <h2>
                    Хочешь заработать на крипте?
                </h2>
                <h3>
                    Вступай в Wall Street Crypto
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