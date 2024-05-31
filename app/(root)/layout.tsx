import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";

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
<main>
    SIDEBAR
    {children}
</main>
);
}
