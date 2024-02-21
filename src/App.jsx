import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './routes/Home'
import Pricing from './routes/Pricing'
import Training from './routes/Training';
import About from './routes/About';
import './index.css'

import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import {
    createWeb3Modal,
    useWeb3Modal,
    useWeb3ModalEvents,
    useWeb3ModalState,
    useWeb3ModalTheme
} from '@web3modal/wagmi/react'
import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// 0. Setup queryClient for WAGMIv2
const queryClient = new QueryClient()

// @ts-expect-error 1. Get projectId
const projectId = '36cac5156311413d288cbb0faaa4f367'
if (!projectId) {
    throw new Error('VITE_PROJECT_ID is not set')
}

// 2. Create wagmiConfig
const wagmiConfig = defaultWagmiConfig({
    chains: [mainnet, arbitrum],
    projectId,
    metadata: {
        name: 'Web3Modal React Example',
        description: 'Web3Modal React Example',
        url: '',
        icons: []
    }
})

// 3. Create modal
createWeb3Modal({
    wagmiConfig,
    projectId,
    themeMode: 'dark',
    themeVariables: {
        '--w3m-color-mix': '#392467',
        '--w3m-color-mix-strength': 30
    }
})

// Added this for github pages setup ( Still need better config with HashRouter to work -> https://reactrouter.com/en/main/router-components/hash-router)
const isGithubPages = window.location.hostname === 'dublidori.github.io';
const basePath = isGithubPages ? '/sentence-crypto/' : '/';

function App() {
    // 4. Use modal hook
    const modal = useWeb3Modal()
    const state = useWeb3ModalState()
    const { themeMode, themeVariables, setThemeMode } = useWeb3ModalTheme()
    const events = useWeb3ModalEvents()

    return (
        <WagmiProvider config={wagmiConfig}>
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route path={`${basePath}/`} element={<Home />} />
                    <Route path={`${basePath}/pricing`} element={<Pricing />} />
                    <Route path={`${basePath}/training`} element={<Training />} />
                    <Route path={`${basePath}/about`} element={<About />} />
                </Routes>
            </QueryClientProvider>
        </WagmiProvider>
    )
}

export default App
