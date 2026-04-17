'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface TradeSimulatorProps {
  onClose: () => void;
}

export function TradeSimulator({ onClose }: TradeSimulatorProps) {
  const [receiveAmount, setReceiveAmount] = useState('124,800,000 PEPE-2.0');

  const runSimulation = () => {
    const random = Math.floor(Math.random() * 150000000 + 80000000);
    setReceiveAmount(`${random.toLocaleString()} PEPE-2.0`);
  };

  const mockApprove = () => {
    alert("✅ Trade simulated and approved!\n\nGhost Intelligence Empire logged the preview.");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-zinc-900 rounded-3xl p-8 max-w-md w-full empire-glow relative">
        <button onClick={onClose} className="absolute top-6 right-6 text-zinc-400 hover:text-white">
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-6">Trade Simulator</h2>
        <div className="space-y-8">
          <div className="flex justify-between items-center bg-zinc-950 p-6 rounded-2xl">
            <div>
              <div className="text-sm text-zinc-400">You Pay</div>
              <div className="text-3xl font-mono">5,000 USDC</div>
            </div>
            <div className="text-4xl text-emerald-400">→</div>
            <div className="text-right">
              <div className="text-sm text-zinc-400">You Receive</div>
              <div className="text-3xl font-mono text-emerald-400">{receiveAmount}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-zinc-950 p-5 rounded-2xl">Slippage: <span className="text-amber-400">1.8%</span></div>
            <div className="bg-zinc-950 p-5 rounded-2xl">RiskOracle: Low</div>
          </div>
          <button onClick={mockApprove} className="w-full py-5 bg-white text-zinc-950 rounded-3xl font-bold">Approve in Phantom (Mock)</button>
        </div>
      </div>
    </div>
  );
}
