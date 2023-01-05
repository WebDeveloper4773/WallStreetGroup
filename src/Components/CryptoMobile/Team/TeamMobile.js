import React from 'react'
import './../../Crypto/Team/Team.css'
import './../../Crypto/Trust/Trust.css'
import './TeamMobile.css'
import Team1 from './../../img/team1.png'
import Team2 from './../../img/mars.jpg'
import Team3 from './../../img/Anon.png'
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
                            <a target="_blank" href="https://t.me/millioner">@millioner</a>
                        </div>
                        <a target="_blank" href="https://instagram.com/aidar.salyakhov?igshid=YmMyMTA2M2Y=r"><Inst2/></a>
                    </div>
                </div>
                <div className="team-item-mobile">
                    <img src={Team2}/>
                    <div className="team-about">
                        <div className="team-name">
                            <span>Ахметшин Марсель</span>
                            <a target="_blank" href="https://t.me/millioner">@millioner</a>
                        </div>
                        <a target="_blank" href="https://instagram.com/mars.amr?igshid=YmMyMTA2M2Y="><Inst2 /></a>
                    </div>
                </div>
                <div className="team-item-mobile">
                    <img src={Team3}/>
                    <div className="team-about">             
                        <div className="team-name">
                            <span>Трейдеры WallStreet</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamMobile