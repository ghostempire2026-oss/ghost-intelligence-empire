'use client';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export function Header() {
  return (
    <header className="bg-zinc-950 border-b border-zinc-800 px-8 py-5 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="text-4xl">👻</span>
        <div>
          <h1 className="text-3xl font-bold">Ghost Intelligence Empire</h1>
          <p className="text-emerald-400 text-sm">LIVE • 100+ Chains • $GHOST</p>
        </div>
      </div>
      <WalletMultiButton className="bg-emerald-600 hover:bg-emerald-500 px-6 py-2 rounded-2xl" />
    </header>
  );
}
