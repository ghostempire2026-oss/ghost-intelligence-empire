'use client';
import { useState } from 'react';
import { Header } from './Header';
import { TradeSimulator } from './TradeSimulator';

export function DashboardContent() {
  const [showSimulator, setShowSimulator] = useState(false);

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <Header />
      <div className="flex-1 p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-auto">
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-zinc-900 rounded-3xl p-8 empire-glow">
            <h2 className="text-2xl font-bold mb-4">Live Intelligence Dashboard</h2>
            <div className="h-96 bg-zinc-950 rounded-2xl flex items-center justify-center text-7xl border border-zinc-700">📈</div>
            <p className="text-center text-emerald-400 mt-6">Real-time charts • WebSockets active</p>
          </div>
          <button onClick={() => setShowSimulator(true)} className="w-full py-6 bg-emerald-600 hover:bg-emerald-500 rounded-3xl text-xl font-bold">
            Simulate a Trade Now
          </button>
        </div>

        <div className="lg:col-span-4 bg-zinc-900 rounded-3xl p-6 flex flex-col empire-glow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <h3 className="font-semibold text-lg">Orchestrator Supreme 👻</h3>
          </div>
          <div id="chat-messages" className="flex-1 overflow-auto space-y-4 text-sm"></div>
          <div className="flex gap-2 mt-4">
            <input id="chat-input" type="text" placeholder="Ask anything..." className="flex-1 bg-zinc-950 border border-zinc-700 rounded-2xl px-5 py-3" onKeyPress={(e) => e.key === 'Enter' && sendChat()} />
            <button onClick={sendChat} className="bg-emerald-600 px-6 rounded-2xl">Send</button>
          </div>
        </div>
      </div>
      {showSimulator && <TradeSimulator onClose={() => setShowSimulator(false)} />}
    </div>
  );
}

function sendChat() {
  const input = document.getElementById('chat-input') as HTMLInputElement;
  const messages = document.getElementById('chat-messages');
  if (!input || !messages) return;

  const userMsg = document.createElement('div');
  userMsg.className = 'bg-emerald-600 p-4 rounded-2xl ml-auto max-w-[75%]';
  userMsg.textContent = input.value;
  messages.appendChild(userMsg);

  setTimeout(() => {
    const reply = document.createElement('div');
    reply.className = 'bg-zinc-800 p-4 rounded-2xl';
    reply.textContent = '👻 Analyzed. RiskOracle clear. Strong $GHOST staking signal.';
    messages.appendChild(reply);
    messages.scrollTop = messages.scrollHeight;
  }, 800);

  input.value = '';
  messages.scrollTop = messages.scrollHeight;
}
