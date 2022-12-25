import React from 'react'
import './../../Crypto/Team/Team.css'
import './../../Crypto/Trust/Trust.css'
import './TeamMobile.css'
import Team1 from './../../img/team1.png'
import Team2 from './../../img/team2.png'
import Inst2 from './../../Svg/Instagram2'

const TeamMobile = () => {
    return (
        <div className="team-mobile">
            <div className="trust-text">
                <h3>
                    Наша команда
                </h3>
            </div>
            <div className="trust-items-mobile">
                <div className="team-item-mobile">
                    <img src={Team1}/>
                    <div className="team-about">
                        <div className="team-name">
                            <span>Айдар Саляхов</span>
                            <a href="https://t.me/millioner">@millioner</a>
                        </div>
                        <a href="https://t.me/millioner"><Inst2 /></a>
                    </div>
                </div>
                <div className="team-item-mobile">
                    <img src={Team2}/>
                    <div className="team-about">
                        <div className="team-name">
                            <span>Бенедикт Камбербэтч</span>
                            <a href="https://t.me/millioner">@millioner</a>
                        </div>
                        <a href="https://t.me/millioner"><Inst2 /></a>
                    </div>
                </div>
                <div className="team-item-mobile">
                    <img src={Team2}/>
                    <div className="team-about">
                        <div className="team-name">
                            <span>Бенедикт Камбербэтч</span>
                            <a href="https://t.me/millioner">@millioner</a>
                        </div>
                        <a href="https://t.me/millioner"><Inst2 /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamMobile