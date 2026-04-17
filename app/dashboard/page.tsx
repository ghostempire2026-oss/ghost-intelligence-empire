'use client';

import { Sidebar } from '@/components/Sidebar';
import { DashboardContent } from '@/components/DashboardContent';

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-zinc-950 overflow-hidden">
      <Sidebar />
      <DashboardContent />
    </div>
  );
}
