import React from 'react'
import './Team.css'
import Team1 from './../../img/team1.png'
import Team2 from './../../img/team2.png'
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
                            <a href="https://t.me/millioner">@millioner</a>
                        </div>
                        <Inst />
                    </div>
                </div>
                <div className="team-item">
                    <img src={Team2}/>
                    <div className="team-about">
                        <div className="team-name">
                            <span>Бенедикт Суперскотч</span>
                            <a href="https://t.me/millioner">@millioner</a>
                        </div>
                        <Inst />
                    </div>
                </div>
                <div className="team-item">
                    <img src={Team2}/>
                    <div className="team-about">
                        <div className="team-name">
                            <span>Бенедикт Суперскотч</span>
                            <a href="https://t.me/millioner">@millioner</a>
                        </div>
                        <Inst />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team