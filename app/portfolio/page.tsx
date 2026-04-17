'use client';

import { Sidebar } from '@/components/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect, useState } from 'react';

export default function PortfolioPage() {
  const { publicKey } = useWallet();
  const [holdings, setHoldings] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!publicKey) return;
    
    const fetchPortfolio = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://public-api.birdeye.so/v1/wallet/portfolio?wallet=${publicKey.toBase58()}`,
          {
            headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_BIRDEYE_API_KEY! }
          }
        );
        if (res.ok) {
          const data = await res.json();
          setHoldings(data.data?.items || []);
        }
      } catch (error) {
        console.error('Failed to fetch portfolio:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, [publicKey]);

  return (
    <div className="flex h-screen bg-zinc-950">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-zinc-900 border-b border-zinc-800 px-8 py-6">
          <h1 className="text-4xl font-bold">📊 Portfolio</h1>
          <p className="text-zinc-400 mt-2">Your token holdings & performance</p>
        </header>
        <div className="flex-1 p-8 overflow-auto">
          {!publicKey ? (
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="pt-6 text-center">
                <p className="text-zinc-400">Connect your wallet to view your portfolio</p>
              </CardContent>
            </Card>
          ) : (
            <div>
              {loading ? (
                <p className="text-zinc-400">Loading portfolio...</p>
              ) : holdings.length > 0 ? (
                <div className="grid gap-4">
                  {holdings.map((holding, i) => (
                    <Card key={i} className="bg-zinc-900 border-zinc-800">
                      <CardContent className="pt-6">
                        <div className="flex justify-between">
                          <span className="font-semibold">{holding.symbol}</span>
                          <span className="text-emerald-400">${holding.valueUsd?.toFixed(2)}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="bg-zinc-900 border-zinc-800">
                  <CardContent className="pt-6 text-center">
                    <p className="text-zinc-400">No holdings found</p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
