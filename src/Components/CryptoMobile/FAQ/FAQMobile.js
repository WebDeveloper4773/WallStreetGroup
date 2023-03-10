import React, {useState} from 'react'
import './../../Crypto/FAQ/FAQ.css'
import './FAQMobile.css'
import Vector16 from './../../Svg/Vector16'
import Telegram3 from './../../Svg/Telegram3'
import classNames from 'classnames'

const FAQMobile = () => {
    const [active, setActive] = useState(0)

    let onClick = (q) => {
        active == 0 ? setActive(q) : setActive(0)
    }

    let answ1 = classNames({
        'faq-item-mobile': true,
        'answ-active-1': active==1
    });
    let answ2 = classNames({
        'faq-item-mobile': true,
        'answ-active-2': active==2
    });
    let answ3 = classNames({
        'faq-item-mobile': true,
        'answ-active-3': active==3
    });
    let answ4 = classNames({
        'faq-item-mobile': true,
        'answ-active-4': active==4
    });
    let answ5 = classNames({
        'faq-item-mobile': true,
        'answ-active-5': active==5
    });

    return (
        <div className="faq-mobile">
            <div className="trust-text">
                <h3>
                    Вопрос-Ответ
                </h3>
            </div>
            <div className="faq-content-mobile">
                <div className={answ1} onClick={() => onClick(1)}>
                    <div className="faq-item-q">
                        <p>Что такое сигналы?</p>
                        <Vector16/>
                    </div>
                    <div className="faq-answer">
                        Это оповещения о точках входа на покупку или продажу различных монет, с указанием стоп-лоссов и целей.
                    </div>
                </div>
                <div className={answ2} onClick={() => onClick(2)}>
                    <div className="faq-item-q">
                        <p>Впервые слышу про трейдинг. Это подойдет для меня?</p>
                        <Vector16/>
                    </div>
                    <div className="faq-answer">
                        Для торговали по нашим сигналам, вам не требуются определенные знания в трейдинге. При возникновении проблем вы всегда можете обратиться в нашу поддержку.                        
                    </div>
                </div>
                <div className={answ3} onClick={() => onClick(3)}>
                    <div className="faq-item-q">
                        <p>Существует ли поддержка?</p>
                        <Vector16/>
                    </div>
                    <div className="faq-answer">
                        По всем вопросам касательно торговли вы всегда можете обратиться в нашу поддержку @WallStreetHelp. 
                    </div>
                </div>
                <div className={answ4} onClick={() => onClick(4)}>
                    <div className="faq-item-q">
                        <p>Какие способы оплаты доступны?</p>
                        <Vector16/>
                    </div>
                    <div className="faq-answer">
                        Вы можете использовать любой удобный для вас способ оплаты.                     
                    </div>
                </div>    
                <div className={answ5} onClick={() => onClick(5)}>
                    <div className="faq-item-q">
                        <p>Есть ли партнерская программа?</p>
                        <Vector16/>
                    </div>
                    <div className="faq-answer">
                        Да, у нас есть партнерская программа. Для того, чтобы пригласить человека вы должны запросить у менеджера уникальный промокод. Вы сможете получать определенный % с каждого подписчика. За более подробной информацией обращайтесь в телеграм — @millioner
                    </div>
                </div>
                <div className="faq-about">
                    <p>Есть вопрос? Напиши нам в телеграме.</p>
                    <a target="_blank" href="https://t.me/WallStreetHelp"><Telegram3 /></a>
                </div>
            </div>
        </div>
    )
}

export default FAQMobile