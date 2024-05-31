import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedin = {
        firstName: 'Pipo'
    }
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox 
                    type='greeting'
                    title='Welcome'
                    user={'Guest'|| loggedin?.firstName}
                    subtext="Access and manage your account and transactions efficiently."
                    />
                    <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={35000.75}
                    />
                </header>
            </div>
        </section>
    )
}

export default Home