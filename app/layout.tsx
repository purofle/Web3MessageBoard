import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";
import {Web3Modal} from "@/context/Web3Modal";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Web3 Message Board',
    description: 'Something shit, do not try it.',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="zh">
        <body className={inter.className}>
        <Web3Modal>{children}</Web3Modal>
        </body>
        </html>
    )
}
