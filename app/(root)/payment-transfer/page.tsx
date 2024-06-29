import HeaderBox from '@/components/HeaderBox'
import PaymentTransferForm from '@/components/PaymentTransferForm'
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Transfer = async () => {
  const loggedin = await getLoggedInUser();
    const accounts = await getAccounts({userId : loggedin?.$id});
  return (
    <section className='payement-transfer ml-4'>
      <HeaderBox title='Payement Transfer' subtext='Please provide any specific details or notes related to the payement transfer' />
      <section className='size-full pt-5'>
        <PaymentTransferForm accounts={accounts} />
      </section>
    </section>
  )
}

export default Transfer