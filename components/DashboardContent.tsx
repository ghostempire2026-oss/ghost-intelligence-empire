'use client';
import { useState } from 'react';
import { Header } from './Header';
import { TradeSimulator } from './TradeSimulator';

export function DashboardContent() {
  const [showSimulator, setShowSimulator] = useState(false);

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <Header />
      <div className="flex-1 p-8">
        <h2 className="text-4xl font-bold mb-8">Ghost Intelligence Empire</h2>
        <div className="bg-zinc-900 rounded-3xl p-12 text-center empire-glow">
          <div className="text-8xl mb-6">👻</div>
          <h3 className="text-2xl font-bold">Welcome to the Empire</h3>
          <p className="text-emerald-400 mt-4">Real-time DEX Intelligence + AI Agent Swarm</p>
          <button 
            onClick={() => setShowSimulator(true)}
            className="mt-8 bg-emerald-600 hover:bg-emerald-500 px-10 py-4 rounded-3xl text-xl font-bold"
          >
            Simulate a Trade
          </button>
        </div>
      </div>
      {showSimulator && <TradeSimulator onClose={() => setShowSimulator(false)} />}
    </div>
  );
}