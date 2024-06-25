"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
} from "@/components/ui/form";
import CustomInput from './CustomInput';
import { authFormSchema } from '@/lib/utils';
import { Loader2 } from "lucide-react";
import { useRouter } from 'next/navigation';
import { signIn, signUp } from '@/lib/actions/user.actions';
import PlaidLink from './PlaidLink';

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // 2. Define a submit handler.
  async function onSubmit(data: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
      setIsLoading(true)
    try {
      // Sign Up with appwite


      if (type === 'sign-up') {
        const userData = {
          firstName : data.firstName!,
          lastName : data.lastName!,
          address1 : data.address1!,
          city : data.city!,
          state : data.state!,
          postalCode : data.postalCode!,
          dateOfBirth : data.dateOfBirth!,
          ssn : data.ssn!,
          email : data.email,
          password : data.password,
        }
        const newUser = await signUp(userData);
        setUser(newUser);
        if(newUser) router.push('/sign-in');
      }

      // Sign Ip with appwite
      if (type === 'sign-in') {
        console.log(data);
        const response = await signIn({
          email : data.email,
          password : data.password
        });
        if(response) router.push('/');
      }
      
      setIsLoading(false)
      
    } catch (error) {
      console.log('====================================');
      console.log("ERROR", error);
      console.log('====================================');
    }finally{
      setIsLoading(false)
    }
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href={"/"} className="cursor-pointer flex items-center gap-1">
          <Image
            src={"/assets/icons/logo.svg"}
            width={34}
            height={34}
            alt="Horizon logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign-In" : "Sign-Up"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">
          <PlaidLink user={user} variant="primary" />
        </div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type=== 'sign-up' && (
                <>

                  <div className='flex gap-4'>
                  <CustomInput 
                    name={"firstName"} 
                    placeholder={"Enter your first name"} 
                    control={form.control} 
                    label={"First Name"} 
                  />
                  <CustomInput 
                    name={"lastName"} 
                    placeholder={"Enter your last name"} 
                    control={form.control} 
                    label={"Last Name"} 
                  />
                  </div>
                  <CustomInput 
                    name={"address1"} 
                    placeholder={"Enter your specific address"} 
                    control={form.control} 
                    label={"Address"} 
                  />
                  <CustomInput 
                    name={"city"} 
                    placeholder={"Enter your specific city"} 
                    control={form.control} 
                    label={"City"} 
                  />
                  <div className="flex gap-4">
                  <CustomInput 
                    name={"state"} 
                    placeholder={"Example: NY"} 
                    control={form.control} 
                    label={"State"} 
                  />

                  <CustomInput 
                    name={"postalCode"} 
                    placeholder={"Example: 11101"} 
                    control={form.control} 
                    label={"Postal Code"} 
                  />
                  </div>
                  <div className="flex gap-4">
                  <CustomInput 
                    name={"dateOfBirth"} 
                    placeholder={"YYYY-MM-DD"} 
                    control={form.control} 
                    label={"Date Of Birth"} 
                  />
                  <CustomInput 
                    name={"ssn"} 
                    placeholder={"SSN"} 
                    control={form.control} 
                    label={"Example: 1234"} 
                  />
                  </div>

                </>
              ) }
              <CustomInput 
                name={"email"} 
                placeholder={"Enter your email"} 
                control={form.control} 
                label={"Email"} 
              />
              <CustomInput 
                name={"password"} 
                placeholder={"Enter your password"} 
                type={"password"} 
                control={form.control} 
                label={"Password"} 
              />
              <div className="flex flex-col gap-4">
              <Button type="submit" className='form-btn' disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 size={26} className="animate-spin" /> &nbsp; Loading...
                  </>
                  ) 
                  : type === "sign-in" ? "Sign In" : "Sign Up"
                }
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">{type === 'sign-in' ? 'Don\'t have an account?' : "Already have an account?"}</p>
            <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className='form-link'>
              {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
