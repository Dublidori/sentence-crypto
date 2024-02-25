import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Pricing from './routes/Pricing';
import Training from './routes/Training';
import About from './routes/About';
import './index.css';

// import { WagmiProvider, useAccount } from 'wagmi';
// import { wagmiConfig } from './config/wagmiConfig';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { Web3AccountProvider } from './providers/Web3AccountProvider'; 
// import { ConnectProvider } from './providers/ConnectProvider'; 

import { WalletConnectProvider} from './providers/WalletConnectProvider';

// const queryClient = new QueryClient();

// Added this for github pages setup ( Still need better config with HashRouter to work -> https://reactrouter.com/en/main/router-components/hash-router)
const isGithubPages = window.location.hostname === 'dublidori.github.io';
const basePath = isGithubPages ? '/sentence-crypto/' : '/';

// function ConnectWallet() {
//     const { isConnected } = useAccount();
//     return (
//       <div className="container">{isConnected ? <Web3AccountProvider /> : <ConnectProvider />}</div>
//     );
// }

function App() {
    return (
        // Wagmi Config for web3
        // <WagmiProvider config={wagmiConfig}>
        //     <QueryClientProvider client={queryClient}>
        //         <ConnectWallet />
        //         <Routes>
        //             <Route path={`${basePath}/`} element={<Home />} />
        //             <Route path={`${basePath}/pricing`} element={<Pricing />} />
        //             <Route path={`${basePath}/training`} element={<Training />} />
        //             <Route path={`${basePath}/about`} element={<About />} />
        //         </Routes>
        //     </QueryClientProvider>
        // </WagmiProvider>

        //Wallet Connect Config for web3
        // This config worked looks okey in windows 10
        <WalletConnectProvider>
            <Routes>
                <Route path={`${basePath}/`} element={<Home />} />
                <Route path={`${basePath}/pricing`} element={<Pricing />} />
                <Route path={`${basePath}/training`} element={<Training />} />
                <Route path={`${basePath}/about`} element={<About />} />
            </Routes>
        </WalletConnectProvider>
    )
}

export default App
