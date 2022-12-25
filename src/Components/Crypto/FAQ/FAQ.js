import React, {useState, useEffect} from 'react'
import './FAQ.css'
import Vector15 from './../../Svg/Vector15'
import Telegram3 from './../../Svg/Telegram3'
import classNames from 'classnames'


const FAQ = () => {
    const [active, setActive] = useState(0)

    let onClick = (q) => {
        active == 0 ? setActive(q) : setActive(0)
    }

    let answ1 = classNames({
        'faq-item': true,
        'answ-active-1': active==1
    });
    let answ2 = classNames({
        'faq-item': true,
        'answ-active-2': active==2
    });
    let answ3 = classNames({
        'faq-item': true,
        'answ-active-3': active==3
    });
    let answ4 = classNames({
        'faq-item': true,
        'answ-active-4': active==4
    });
    let answ5 = classNames({
        'faq-item': true,
        'answ-active-5': active==5
    });

    return (
        <div className="faq">
            <div className="trust-text">
                <h3>
                    Вопрос-ответ
                </h3>
            </div>
            <div className="faq-content">
                <div className="faq-about">
                    <p>Есть вопрос? Напиши нам в<br/>телеграме.</p>
                    <a href="https://t.me/millioner"><Telegram3 /></a>
                </div>
                <div className="faq-items">
                    <div className={answ1} onClick={() => onClick(1)}>
                        <div className="faq-item-q" >
                            <p>Что такое сигналы?</p>
                            <Vector15/>
                        </div>
                        <div className="faq-answer">
                            Да, у нас есть партнерская программа. Для того, чтобы пригласить человека вы должны запросить у менеджера уникальный промокод. Вы сможете получать от 3 до 8% с каждого подписчика. За более подробной информацией обращайтесь в телеграм — @sales_wsb
                        </div>
                    </div>
                    <div className={answ2} onClick={() => onClick(2)}>
                        <div className="faq-item-q">
                            <p>Впервые слышу про трейдинг. Это подойдет для меня?</p>
                            <Vector15/>
                        </div>
                        <div className="faq-answer">
                            Да, у нас есть партнерская программа. Для того, чтобы пригласить человека вы должны запросить у менеджера уникальный промокод. Вы сможете получать от 3 до 8% с каждого подписчика. За более подробной информацией обращайтесь в телеграм — @sales_wsb                        
                        </div>
                    </div>
                    <div className={answ3} onClick={() => onClick(3)}>
                        <div className="faq-item-q">
                            <p>В каком формате будет проходить обучение?</p>
                            <Vector15/>
                        </div>
                        <div className="faq-answer">
                            Да, у нас есть партнерская программа. Для того, чтобы пригласить человека вы должны запросить у менеджера уникальный промокод. Вы сможете получать от 3 до 8% с каждого подписчика. За более подробной информацией обращайтесь в телеграм — @sales_wsb
                        </div>
                    </div>
                    <div className={answ4} onClick={() => onClick(4)}>
                        <div className="faq-item-q">
                            <p>Какие способы оплаты доступны?</p>
                            <Vector15/>
                        </div>
                        <div className="faq-answer">
                            Да, у нас есть партнерская программа. Для того, чтобы пригласить человека вы должны запросить у менеджера уникальный промокод. Вы сможете получать от 3 до 8% с каждого подписчика. За более подробной информацией обращайтесь в телеграм — @sales_wsb                        </div>
                        </div>
                    <div className={answ5} onClick={() => onClick(5)}>
                        <div className="faq-item-q">
                            <p>Есть ли партнерская программа?</p>
                            <Vector15/>
                        </div>
                        <div className="faq-answer">
                            Да, у нас есть партнерская программа. Для того, чтобы пригласить человека вы должны запросить у менеджера уникальный промокод. Вы сможете получать от 3 до 8% с каждого подписчика. За более подробной информацией обращайтесь в телеграм — @sales_wsb
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ