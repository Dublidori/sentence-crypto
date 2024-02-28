import { http, createConfig } from 'wagmi';
import { base, mainnet, optimism, sepolia, polygon } from 'wagmi/chains';
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors';

const projectId = '36cac5156311413d288cbb0faaa4f367';

export const wagmiConfig = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    walletConnect({ projectId }),
    injected({ target: 'metaMask' }), // This is important for metamask behaviors. Font: Wagmi Docs recent version
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})