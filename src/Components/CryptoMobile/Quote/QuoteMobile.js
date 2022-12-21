import React from 'react'
import './../../Crypto/Quote/Quote.css'
import './QuoteMobile.css'
import Avatar from './../../img/Avatar.png'


const QuoteMobile = () => {
    return (
        <div className="quote-mobile">
            <p>«Я перестал судорожно следить за графиками, когда купил подписку в группе. Теперь у меня полно свободного времени...»</p>
            <div className="quote-user">
                <img src={Avatar}/>
                <div className="user-about">
                    <span>Михаил Сычев</span>
                    <p>подписан на нас уже 10 месяцев</p>
                </div>
            </div>
        </div>
        
    )
}

export default QuoteMobile