'use client';

import { useRouter } from 'next/navigation';
import { useWallet } from '@solana/wallet-adapter-react';
import dynamic from 'next/dynamic';

// Dynamically import WalletMultiButton to avoid SSR issues
const WalletMultiButton = dynamic(
  async () =>
    (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

const navItems = [
  { href: '/dashboard', icon: '🏠', label: 'Dashboard' },
  { href: '/scanner', icon: '🔍', label: 'Scanner' },
  { href: '/portfolio', icon: '📊', label: 'Portfolio' },
  { href: '/agents', icon: '🤖', label: 'Agents' },
  { href: '/staking', icon: '🔐', label: '$GHOST Staking' },
];

export function Sidebar() {
  const router = useRouter();
  const { publicKey } = useWallet();

  return (
    <div className="w-72 bg-zinc-950 border-r border-zinc-800 p-6 flex flex-col">
      <div
        className="flex items-center gap-3 mb-10 cursor-pointer"
        onClick={() => router.push('/dashboard')}
      >
        <span className="text-5xl">👻</span>
        <div>
          <h1 className="text-3xl font-bold tracking-tighter">Ghost Intelligence</h1>
          <p className="text-emerald-400 text-xs">EMPIRE</p>
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.href}
            onClick={() => router.push(item.href)}
            className="w-full text-left block px-4 py-3 hover:bg-zinc-900 rounded-2xl transition"
          >
            {item.icon} {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-zinc-800 text-xs text-zinc-500">
        {publicKey ? (
          <>
            Connected:{' '}
            <span className="text-emerald-400">
              {publicKey.toBase58().slice(0, 8)}...
              {publicKey.toBase58().slice(-4)}
            </span>
          </>
        ) : (
          <div className="text-center">
            <WalletMultiButton />
          </div>
        )}
      </div>
    </div>
  );
}
