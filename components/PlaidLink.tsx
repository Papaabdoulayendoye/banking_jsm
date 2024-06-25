"use client";
import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from "react-plaid-link";
import { useRouter } from 'next/navigation';
import { createLinkToken, exhangePublicToken } from '@/lib/actions/user.actions';
const PlaidLink = ({user, variant}:PlaidLinkProps) => {
  const [token, setToken] = useState('');
  const router = useRouter()
  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user);
      setToken(data?.linkToken);
    }
    getLinkToken();
  }, [user]);

  const onSuccess = useCallback<PlaidLinkOnSuccess>( async (public_token:string) => {
    await exhangePublicToken({
      publicToken : public_token,
      user
    })
    router.push('/');
  },[user]);

  const config:PlaidLinkOptions = {
    token,
    onSuccess
  }

  const {open, ready} = usePlaidLink(config);

  return (
    <>
    {variant === 'primary' ? (
      <Button 
      className="plaidlink-primary"
      onClick={() => open()}
      disabled={!ready}
      >
        Connect Bank
      </Button>
    ) : variant === 'ghost' ? (
      <Button className='plaidlink-ghost'>
        Connect Bank
      </Button>
    ) : (
      <Button className='plaidlink-default'>
        Connect Bank
      </Button>
    )}
    </>
  )
}

export default PlaidLink