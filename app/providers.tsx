'use client';

import { useMemo } from 'react';

// Solana wallet adapter core
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';

// UI modal (must be client-side)
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';

// Wallets
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  BackpackWalletAdapter,
} from '@solana/wallet-adapter-wallets';

// Solana RPC
import { clusterApiUrl } from '@solana/web3.js';

// Wallet UI styles (must be inside a client component)
import '@solana/wallet-adapter-react-ui/styles.css';

export function Providers({ children }: { children: React.ReactNode }) {
  const network = 'mainnet-beta'; // or 'devnet'
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new BackpackWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
