import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './screens/Home';
import About from './screens/About';
import './index.css';

import { Web3Provider } from './providers/Web3Context.jsx';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react';

// Web3Modal setup
const projectId = '36cac5156311413d288cbb0faaa4f367';

const mainnet = {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://cloudflare-eth.com'
};

const sepolia = {
    chainId: 11155111,
    name: 'Sepolia',
    currency: 'sepoliaETH',
    explorerUrl: 'https://sepolia.etherscan.io',
    rpcUrl: 'https://sepolia.infura.io/v3/'
};

const bsc = {
    chainId: 56,
    name: 'Binance Smart Chain',
    currency: 'BNB',
    explorerUrl: 'https://bscscan.com',
    rpcUrl: 'https://bsc-dataseed.binance.org/'
};

const polygon = {
    chainId: 137,
    name: 'Polygon',
    currency: 'MATIC',
    explorerUrl: 'https://polygonscan.com',
    rpcUrl: 'https://polygon-rpc.com/'
};

const metadata = {
    name: 'My Website',
    description: 'My Website description',
    url: 'https://mywebsite.com',
    icons: ['https://avatars.mywebsite.com/']
};

const ethersConfig = defaultConfig({
    metadata,
    enableEIP6963: true,
    enableInjected: true,
    enableCoinbase: true,
    rpcUrl: 'https://sepolia.infura.io/v3/', // Please replace '...' with your actual RPC URL
    defaultChainId: 1,
});

createWeb3Modal({
    ethersConfig,
    chains: [mainnet, sepolia, bsc, polygon], // Include the chains here
    projectId,
    enableAnalytics: true,
    themeMode: 'dark',
    themeVariables: {
        '--w3m-font-family': 'Courier New',
        '--w3m-accent': '#090909',
        '--w3m-color-mix': '#0f0',
        '--w3m-color-mix-strength': 15
    }
});

// Your existing App component with Web3Provider
function App() {
    const isGithubPages = window.location.hostname === 'dublidori.github.io';
    const basePath = isGithubPages ? '/sentence-crypto/' : '/';

    return (
        <Web3Provider>
            <Routes>
                <Route path={`${basePath}/`} element={<Home />} />
                <Route path={`${basePath}/about`} element={<About />} />
            </Routes>
        </Web3Provider>
    );
}

export default App;
