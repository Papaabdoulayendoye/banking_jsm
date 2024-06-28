"use client"
import Link from 'next/link'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BankTabItem } from './BankTabItem'
import BankInfo from './BankInfo'
import TransactionsTable from './TransactionsTable'

const RececntTransactions = (
{accounts, page = 1, appwriteItemId, transactions = []}:RecentTransactionsProps) => {
return (
    <section className="recent-transactions">
    <header className="flex items-center justify-between">
        <h2 className="recent-transactions-label">Recent transactions</h2>
        <Link
        href={`/transction-history/?id=${appwriteItemId}`}
        className="view-all-btn"
        >
        View all
        </Link>
    </header>
    <Tabs defaultValue={appwriteItemId} className="w-full">
        <TabsList className='recent-transactions-tablist'>
        {accounts.map((account: Account) => (
            <TabsTrigger key={account.id} value={account.appwriteItemId}>
                <BankTabItem account={account} key={account?.id} appwriteItemId={appwriteItemId} />
            </TabsTrigger>
        ))}
        </TabsList>
        {accounts.map((account: Account) => (
            <TabsContent value={account.appwriteItemId} key={account?.id} className='space-y-4'>
                <BankInfo type='full' account={account} appwriteItemId={appwriteItemId} key={account?.id}/>
                <TransactionsTable transactions={transactions} />
            </TabsContent>
        ))}
    </Tabs>
    </section>
);
}

export default RececntTransactions