import React from 'react'
import './WeDoingMobile.css'
import Frame from './../../img/Frame.png'

const WeDoingMobile = () => {
    return (
        <div className="wedoing-mobile">
            <h3>Чем мы занимаемся?</h3>
            <p>В закрытой группе мы публикуем сигналы по криптовалюте, инсайдерскую информацию, советы и аналитику.<br/>
                <br/>
                Оплатив подписку вы получаете доступ ко всем закрытым группам: канал с сигналами, чат с участниками, канал с обучением и другие...<br/>
                <br/>
                По обучающим материалам вы сможете получить полную информацию о трейдинге и смело начать торговать.
            </p>
            <div className="wlcrypto-img-mobile">
                <img src={Frame}/>
            </div>
        </div>
    )
}

export default WeDoingMobile