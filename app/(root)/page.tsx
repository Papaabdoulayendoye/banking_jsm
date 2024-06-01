import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedin = {
        firstName: 'Pipo',
        lastName: 'Ndoye',
        email : 'papaabdoulaye.ndoye01@gmail.com'
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
                RECENTS TRANSACTIONS
            </div>
            <RightSidebar 
                user={loggedin} 
                banks={[
                        { currentBalance : 125.501},
                        {currentBalance : 500.75}
                    ]} 
                transactions={[]}/>
        </section>
    )
}

export default Home