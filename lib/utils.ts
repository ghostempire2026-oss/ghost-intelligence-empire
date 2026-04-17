// lib/utils.ts
import { useWallet } from '@solana/wallet-adapter-react';

export async function fetchPortfolioAPI(publicKey: string, apiKey: string) {
  const res = await fetch(
    `https://public-api.birdeye.so/v1/wallet/portfolio?wallet=${publicKey}`,
    {
      headers: { 'X-API-KEY': apiKey }
    }
  );
  if (!res.ok) throw new Error('Failed to fetch portfolio');
  return res.json();
}

export function formatAddress(address: string, chars = 8): string {
  return `${address.slice(0, chars)}...${address.slice(-4)}`;
}
