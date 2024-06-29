import HeaderBox from '@/components/HeaderBox'
import RecentTransactions from '@/components/RecentTransactions'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getAccount, getAccounts } from '@/lib/actions/bank.actions'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const Home = async ({searchParams:{id,page}}:SearchParamProps) => {
    const loggedin = await getLoggedInUser();
    const accounts = await getAccounts({userId : loggedin?.$id});
    const currentPage = Number(page as string) || 1;

    if (!accounts) {
        return;
    }
    const accountsData = accounts?.data;
    const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
    const account = await getAccount({appwriteItemId});
    // console.log("Accounts",{accounts});
    // console.log("accountsData",{accountsData});
    // console.log("account",{account});
    
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox 
                    type='greeting'
                    title='Welcome'
                    user={!loggedin ? 'Guest': loggedin?.firstName}
                    subtext="Access and manage your account and transactions efficiently."
                    />
                    <TotalBalanceBox
                    accounts={accountsData}
                    totalBanks={accounts?.totalBanks}
                    totalCurrentBalance={accounts?.totalCurrentBalance}
                    />
                </header>
                <RecentTransactions 
                    accounts={accountsData}
                    transactions={account?.transactions}
                    appwriteItemId={appwriteItemId}
                    page={currentPage}
                />

            </div>
            <RightSidebar 
                user={loggedin!} 
                banks={accountsData?.slice(0,2)} 
                transactions={accounts?.transactions}/>
        </section>
    )
}

export default Home