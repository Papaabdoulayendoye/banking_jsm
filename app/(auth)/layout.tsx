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
return (
<main className='flex min-h-screen w-full justify-between font-inter'>
    {children}
    <div className='auth-asset'>
        <div className=''>
            <Image alt='Auth image' src='/assets/icons/auth-image.svg' height={500} width={500} />
        </div>
    </div>
</main>
);
}
