import React from 'react'
import './StatMobile.css'
import '../../Crypto/Stat/Stat.css'

const StatMobile = () => {
    return (
        <div className="stat-container-mobile">
            <div className="stat-mobile">
                <div className="stat-item">
                    <span>214</span>
                    <p>участников</p>
                </div>
                <div className="stat-item">
                    <span>94%</span>
                    <p>успешных прогнозов</p>
                </div>
                <div className="stat-item stat-last">
                    <span>30%</span>
                    <p>средняя прибыль сделки</p>
                </div>
            </div>
        </div>
    )
}

export default StatMobile