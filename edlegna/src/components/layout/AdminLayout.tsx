'use client';

import { useState } from 'react';
import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';
import { DemoNotice } from '@/components/common/DemoNotice';

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface">
      <AdminSidebar open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <div className="lg:pl-72">
        <AdminHeader onMenuClick={() => setDrawerOpen(true)} />
        <main className="relative pt-16 bg-surface min-h-screen p-space-md lg:p-space-lg">
          <DemoNotice className="mb-space-md" />
          {children}
        </main>
      </div>
    </div>
  );
}
