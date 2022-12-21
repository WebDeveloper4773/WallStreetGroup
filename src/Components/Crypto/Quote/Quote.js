import React from 'react'
import './Quote.css'
import Avatar from './../../img/Avatar.png'


const Quote = () => {
    return (
        <div className="quote">
            <div className="quote-com">
                <div className="quote-content">
                    <p>«Я перестал судорожно следить за графиками, когда купил подписку в группе. Теперь у меня полно свободного времени...»</p>
                    <div className="quote-user">
                        <img src={Avatar}/>
                        <div className="user-about">
                            <span>Михаил Сычев</span>
                            <p>подписан на нас уже 10 месяцев</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Quote