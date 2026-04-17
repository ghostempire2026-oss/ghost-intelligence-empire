'use client';

import { useState } from 'react';
import { Crown, TrendingUp, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useEmpireWebSocket } from '@/hooks/useEmpireWebSocket'; // Reuse for live feel

export default function StakingPage() {
  const [stakeAmount, setStakeAmount] = useState(10000);
  const [lockPeriod, setLockPeriod] = useState(30); // days
  const [totalStaked, setTotalStaked] = useState(24500000); // mock global
  const { prices } = useEmpireWebSocket(); // Optional live price tie-in for $BEI

  const apy = lockPeriod > 90 ? 45 : lockPeriod > 30 ? 32 : 18; // tiered APY
  const estimatedReward = (stakeAmount * apy / 100 / 365) * lockPeriod;
  const yourShare = (stakeAmount / totalStaked) * 100;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-3">
              <Crown className="h-10 w-10 text-emerald-400" />
              <h1 className="text-5xl font-bold tracking-tighter">$BEI Staking Empire</h1>
            </div>
            <p className="text-emerald-400 mt-2 text-xl">Stake → Own the Intelligence Layer • Earn Revenue Share</p>
          </div>
          <Badge variant="outline" className="text-lg px-6 py-2 border-emerald-500 text-emerald-400">
            Live APY: up to {apy}%
          </Badge>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-zinc-400 flex items-center gap-2"><TrendingUp className="h-4 w-4" /> Total Staked</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{totalStaked.toLocaleString()} $BEI</div>
              <p className="text-xs text-emerald-400 mt-1">+2.4% this week</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-zinc-400">Your Staked</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">0 $BEI</div>
              <p className="text-xs text-zinc-500">Connect wallet to stake</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-zinc-400 flex items-center gap-2"><Users className="h-4 w-4" /> Stakers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">8,942</div>
              <p className="text-xs text-emerald-400">Active empire builders</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-zinc-400">Revenue Distributed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">$184k</div>
              <p className="text-xs text-emerald-400">This month to stakers</p>
            </CardContent>
          </Card>
        </div>

        {/* Staking Card */}
        <Card className="empire-glow bg-zinc-900 border-emerald-500/30 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              Stake Your $BEI • Build the Empire
            </CardTitle>
            <p className="text-zinc-400">Lock tokens to earn yield from platform fees + governance power</p>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <label className="text-sm text-zinc-400 block mb-2">Amount to Stake</label>
              <div className="flex gap-3">
                <Input
                  type="number"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(Number(e.target.value))}
                  className="bg-zinc-950 text-3xl font-mono border-zinc-700"
                />
                <div className="flex items-center text-2xl font-bold text-emerald-400">$BEI</div>
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
                    {days}d {days > 90 && "🔒"}
                  </Button>
                ))}
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-zinc-400">Estimated APY</span>
                <span className="text-3xl font-bold text-emerald-400">{apy}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Est. Rewards (over lock)</span>
                <span className="font-mono text-xl">≈ {estimatedReward.toFixed(0)} $BEI</span>
              </div>
              <div className="flex justify-between text-xs text-zinc-500">
                <span>Your ownership of rewards pool</span>
                <span>{yourShare.toFixed(2)}%</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-lg py-7 font-bold"
              onClick={() => alert("👑 In production: Connect Phantom → Approve → Stake on Solana")}
            >
              Stake $BEI & Claim Empire Tier
            </Button>

            <p className="text-center text-xs text-zinc-500">
              30% of all Bot Empire revenue flows to stakers • Unstake with penalty after lock
            </p>
          </CardContent>
        </Card>

        {/* Problems Solved Reminder */}
        <div className="mt-16 max-w-2xl mx-auto text-center text-zinc-400">
          <h3 className="text-emerald-400 font-semibold mb-4">Why Stake $BEI?</h3>
          <ul className="space-y-3 text-sm">
            <li>→ Unlimited agents + priority WebSockets (no more data lag)</li>
            <li>→ 30% revenue share from premium users & boosts</li>
            <li>→ Vote on new chains, agents, and features</li>
            <li>→ God-mode RiskOracle & custom swarm builder</li>
            <li>→ Aligns the entire empire — no more fragmented tools</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
