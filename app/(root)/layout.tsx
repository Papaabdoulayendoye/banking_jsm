import MobileNav from '@/components/MobileNav';
import Sidebar from '@/components/Sidebar';
import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import Image from 'next/image';

const inter = Inter({ subsets: ["latin"] });
const ibmPlexSerif = IBM_Plex_Serif(
{
subsets : ['latin'],
weight : ['400','700'],
variable: '--font-ibm-plex-serif'
}
)
export const metadata: Metadata = {
title: "Horizon",
description: "Horizon is a modern banking platform for everyone",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
    const loggedin = {
        firstName : 'Pipo',
        lastName : 'Ndoye'
    }
return (
<main className='flex w-full h-screen font-inter'>
    <Sidebar user={loggedin} />

    <div className='flex size-full flex-col'>
        <div className='root-layout'>
            <Image src={'/assets/icons/logo.svg'} height={30} width={30} alt='menu icon'/>
            <div>
                <MobileNav user={loggedin}/>
            </div>
        </div>
    {children}
    </div>

</main>
);
}
