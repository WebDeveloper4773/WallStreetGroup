import React from 'react'
import './CryptoMobile.css'
import HeroMobile from './Hero/HeroMobile'
import StatMobile from './Stat/StatMobile'
import WeDoingMobile from './WeDoingMobile/WeDoingMobile'
import TrustMobile from './Trust/TrustMobile'
import QuoteMobile from './Quote/QuoteMobile'
import HistoryMobile from './History/HistoryMobile'
import TeamMobile from './Team/TeamMobile'
import FAQMobile from './FAQ/FAQMobile'
import PriceMobile from './Price/PriceMobile'


const CryptoMainMobile = () => {
    return (
        <div className="mobile-container">
            <HeroMobile />
            <StatMobile />
            <WeDoingMobile />
            <TrustMobile />
            <QuoteMobile />
            <HistoryMobile />
            <TeamMobile />
            <FAQMobile />
            <PriceMobile />
            <div className='footer-mobile'>
                <span className='footer-mobile-span'>
                    Договор-оферта
                </span>
                <span>
                    Условия использования
                </span>
            </div>
        </div>
    )
}

export default CryptoMainMobile