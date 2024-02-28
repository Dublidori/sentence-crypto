import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { http, WagmiProvider, createConfig, createStorage } from 'wagmi';
import { arbitrum, mainnet, sepolia } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'
import { wagmiConfig } from "../config/wagmiConfig";


// 0. Setup queryClient for WAGMIv2
const queryClient = new QueryClient()

// @ts-expect-error 1. Get projectId
const projectId = '36cac5156311413d288cbb0faaa4f367'

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

export function WalletConnectProvider({ children }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}