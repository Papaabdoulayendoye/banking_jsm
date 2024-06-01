"use client"
import React from "react";
import {
Sheet,
    SheetClose,
SheetContent,
SheetDescription,
SheetHeader,
SheetTitle,
SheetTrigger,
} from "@/components/ui/sheet";
import Image from 'next/image';
import { sidebarLinks } from '@/constants';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const MobileNav = ({ user }: MobileNavProps) => {
    const pathName = usePathname()
return (
    <section className='w-full max-w-[264px]'>
        <Sheet>
            <SheetTrigger>
                <Image alt='menu' className='cursor-pointer' height={30} width={30} src={'assets/icons/hamburger.svg'} />
            </SheetTrigger>
            <SheetContent side={'left'} className="border-none bg-white">
            <Link href={'/'} className='cursor-pointer flex items-center gap-1 px-4'>
                <Image src={'/assets/icons/logo.svg'} width={34} height={34} alt='Horizon logo' />
                <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Horizon</h1>
            </Link>
            <div className='mobilenav-sheet'>
                <SheetClose asChild>
                    <nav className='flex h-full flex-col pt-16 text-white gap-6'>
                        {
                            sidebarLinks.map((item) => {
                                const isActive = pathName === item.route || pathName.startsWith(`${item.route}`)
                                return (
                                    <SheetClose asChild>
                                        <Link href={item.route} key={item.label} className={cn('mobilenav-sheet_close w-full', {'bg-bank-gradient': isActive})}>
                                            
                                            <Image src={item.imgURL} alt={item.label} height={20} width={20} className={cn({'brightness-[3] invert-0': isActive})} />
                                            
                                            <p className={cn('text-16 font-semibold text-black-2', {'!text-white': isActive})}>
                                                {item.label}
                                            </p>
                                            
                                        </Link>
                                    </SheetClose>
                            )})
                        }

                        USER
                    </nav>
                </SheetClose>
                FOOTER
            </div>
            </SheetContent>
        </Sheet>
    </section>
);
};

export default MobileNav;
