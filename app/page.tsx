@ -1,27 +0,0 @@
'use client';

import { Sidebar } from '@/components/Sidebar';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex h-screen bg-zinc-950">
      <Sidebar />
      <div className="flex-1 flex flex-col items-center justify-center overflow-hidden">
        <div className="text-center space-y-6">
          <span className="text-9xl">👻</span>
          <h1 className="text-6xl font-bold tracking-tighter">Ghost Intelligence Empire</h1>
          <p className="text-2xl text-emerald-400">Stake • Command • Earn</p>
          <button
            onClick={() => router.push('/dashboard')}
            className="mt-8 px-12 py-4 bg-emerald-600 hover:bg-emerald-500 rounded-3xl text-xl font-bold transition"
          >
            Enter the Empire →
          </button>
        </div>
      </div>
    </div>
  );
}
