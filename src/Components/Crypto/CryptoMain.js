import React from 'react'
import HeroContainer from './Hero/HeroContainer'
import StatContainer from './Stat/StatContainer'
import WeDoingContainer from './WeDoing/WeDoingContainer'
import TrustContainer from './Trust/Trust'
import Quote from './Quote/Quote'
import History from './History/History'
import Team from './Team/Team'
import FAQ from './FAQ/FAQ'
import Price from './Price/Price'

const CryptoMain = () => {
    return (
        <>
            <HeroContainer />
            <StatContainer />
            <WeDoingContainer />
            <TrustContainer />
            <Quote />
            {/* <History /> */}
            <Team />
            <FAQ />
            <Price />
        </>
    )
}

export default CryptoMain