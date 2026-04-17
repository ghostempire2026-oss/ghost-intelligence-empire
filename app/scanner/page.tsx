'use client';

import { Sidebar } from '@/components/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ScannerPage() {
  return (
    <div className="flex h-screen bg-zinc-950">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-zinc-900 border-b border-zinc-800 px-8 py-6">
          <h1 className="text-4xl font-bold">🔍 Token Scanner</h1>
          <p className="text-zinc-400 mt-2">Real-time token discovery & risk analysis</p>
        </header>
        <div className="flex-1 p-8 overflow-auto">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle>New Pairs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 flex items-center justify-center text-zinc-500">
                WebSocket feed coming soon...
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
