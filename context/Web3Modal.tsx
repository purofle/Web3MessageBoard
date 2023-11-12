"use client";

import {createWeb3Modal, defaultWagmiConfig} from '@web3modal/wagmi/react'

import {WagmiConfig} from 'wagmi'
import {bscTestnet} from 'viem/chains'
import React from "react";

// 1. Get projectId
const projectId = '9bf4b37e8ad6d18bcff95f8549d6b2aa'

// 2. Create wagmiConfig
const metadata = {
    name: 'Web3 Message Board',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [bscTestnet]
const wagmiConfig = defaultWagmiConfig({chains, projectId, metadata})

// 3. Create modal
createWeb3Modal({
    wagmiConfig,
    projectId,
    chains,
    themeVariables: {
        '--w3m-accent': '#F9A8D4FF',
    }
})

// @ts-ignore
export function Web3Modal({children}: { children: React.ReactNode }) {
    return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}