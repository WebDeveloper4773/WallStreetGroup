import React from 'react'
import './Stat.css'

const Stat = () => {
    return (
        <div className="stat-container">
            <div className="stat">
                <div className="stat-item">
                    <span>214</span>
                    <p>участников</p>
                </div>
                <div className="stat-item">
                    <span>94%</span>
                    <p>успешных прогнозов</p>
                </div>
                <div className="stat-item">
                    <span>30%</span>
                    <p>средняя прибыль сделки</p>
                </div>
            </div>
        </div>
    )
}

export default Stat