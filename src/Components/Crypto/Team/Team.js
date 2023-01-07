import React from 'react'
import './Team.css'
import Team1 from './../../img/team1.png'
import Team2 from './../../img/mars.jpg'
import Team3 from './../../img/Anon.png'
import Inst from './../../Svg/Instagram'

const Team = () => {
    return (
        <div className="team">
            <div className="trust-text">
                <h3>
                    Наша команда
                </h3>
            </div>
            <div className="trust-items">
                <div className="team-item">
                    <img src={Team1}/>
                    <div className="team-about">
                        <div className="team-name">
                            <span>Айдар Саляхов</span>
                            <a target="_blank" href="https://t.me/millioner">@millioner</a>
                        </div>
                        <a target="_blank" href="https://t.me/millioner"><Inst /></a>
                    </div>
                </div>
                <div className="team-item">
                    <img src={Team2}/>
                    <div className="team-about">
                        <div className="team-name">
                            <span>Ахметшин Марсель</span>
                            <a target="_blank" href="https://t.me/millioner">@millioner</a>
                        </div>
                        <a target="_blank" href="https://instagram.com/mars.amr?igshid=YmMyMTA2M2Y="><Inst /></a>
                    </div>
                </div>
                <div className="team-item">
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

export default Team