'use client';

import { useState } from 'react';
import { StudentSidebar } from './StudentSidebar';
import { StudentHeader } from './StudentHeader';
import { DemoNotice } from '@/components/common/DemoNotice';

export function StudentLayout({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface">
      <StudentSidebar open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <div className="lg:pl-72">
        <StudentHeader onMenuClick={() => setDrawerOpen(true)} />
        <main className="relative pt-20 bg-surface min-h-screen px-space-md lg:px-space-xl py-space-lg">
          <DemoNotice className="mb-space-md" />
          {children}
        </main>
      </div>
    </div>
  );
}
