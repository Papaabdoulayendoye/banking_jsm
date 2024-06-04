import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const Home = async () => {
    const loggedin = await getLoggedInUser();
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox 
                    type='greeting'
                    title='Welcome'
                    user={!loggedin ? 'Guest': loggedin?.name}
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
                user={loggedin!} 
                banks={[
                        { currentBalance : 125.501},
                        {currentBalance : 500.75}
                    ]} 
                transactions={[]}/>
        </section>
    )
}

export default Home