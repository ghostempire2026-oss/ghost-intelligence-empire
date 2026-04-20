'use client';

import { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Crown, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function StakingPage() {
  const { publicKey, connected } = useWallet();
  const [stakeAmount, setStakeAmount] = useState(10000);
  const [lockPeriod, setLockPeriod] = useState(30);
  const [isStaking, setIsStaking] = useState(false);

  const apy = lockPeriod > 90 ? 45 : lockPeriod > 30 ? 32 : 18;
  const estimatedReward = Math.floor((stakeAmount * apy / 100 / 365) * lockPeriod);

  const handleStake = async () => {
    if (!connected) {
      alert("👻 Please connect your wallet first.");
      return;
    }
    
    setIsStaking(true);
    
    setTimeout(() => {
      alert(`✅ Successfully staked ${stakeAmount} $GHOST for ${lockPeriod} days!\n\nEmpire tier unlocked + revenue share activated.`);
      setIsStaking(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-3">
            <Crown className="h-10 w-10 text-emerald-400" />
            <h1 className="text-5xl font-bold tracking-tighter">$GHOST Staking</h1>
          </div>
          <WalletMultiButton className="bg-emerald-600 hover:bg-emerald-500" />
        </div>

        <Card className="empire-glow bg-zinc-900 border-emerald-500/30 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">Stake $GHOST • Command the Empire</CardTitle>
            <p className="text-zinc-400">Lock tokens to unlock Empire tier and earn revenue share</p>
          </CardHeader>
          <CardContent className="space-y-8">
            {!connected ? (
              <div className="text-center py-12">
                <AlertCircle className="mx-auto h-12 w-12 text-amber-400 mb-4" />
                <p className="text-lg">Connect your wallet to stake $GHOST</p>
              </div>
            ) : (
              <>
                <div>
                  <label className="text-sm text-zinc-400 block mb-2">Amount to Stake</label>
                  <div className="flex gap-3">
                    <Input
                      type="number"
                      value={stakeAmount}
                      onChange={(e) => setStakeAmount(Number(e.target.value))}
                      className="bg-zinc-950 text-3xl font-mono border-zinc-700"
                    />
                    <div className="flex items-center text-2xl font-bold text-emerald-400">$GHOST</div>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-zinc-400 block mb-3">Lock Period</label>
                  <div className="flex gap-3">
                    {[7, 30, 90, 365].map((days) => (
                      <Button
                        key={days}
                        variant={lockPeriod === days ? "default" : "outline"}
                        onClick={() => setLockPeriod(days)}
                        className="flex-1"
                      >
                        {days} days {days > 90 && "🔒"}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 space-y-4">
                  <div className="flex justify-between">
                    <span>Estimated APY</span>
                    <span className="text-emerald-400 font-bold">{apy}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Est. Rewards</span>
                    <span className="font-mono">≈ {estimatedReward} $GHOST</span>
                  </div>
                </div>

                <Button 
                  onClick={handleStake}
                  disabled={isStaking}
                  size="lg" 
                  className="w-full bg-emerald-600 hover:bg-emerald-500 py-7 text-lg font-bold"
                >
                  {isStaking ? "Staking in Phantom..." : `Stake ${stakeAmount} $GHOST`}
                </Button>

                <p className="text-center text-xs text-zinc-500">
                  30% of all platform revenue flows to stakers • Empire tier unlocked immediately
                </p>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}