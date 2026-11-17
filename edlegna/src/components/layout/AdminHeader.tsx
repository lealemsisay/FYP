'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Icon } from '@/components/common/Icon';
import { useAppNotifications } from '@/components/common/AppProviders';

interface AdminHeaderProps {
  onMenuClick: () => void;
}

export function AdminHeader({ onMenuClick }: AdminHeaderProps) {
  const [search, setSearch] = useState('');
  const [openMenu, setOpenMenu] = useState<'notifications' | 'profile' | null>(null);
  const { adminNotifications, adminUnreadCount } = useAppNotifications();

  return (
    <header className="fixed top-0 left-0 right-0 lg:left-72 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-space-md lg:px-gutter-desktop">
      <div className="h-16 flex items-center justify-between gap-6">
        <div className="flex items-center gap-4 min-w-0">
          <button type="button" onClick={onMenuClick} className="text-on-surface lg:hidden" aria-label="Open navigation">
            <Icon name="menu" className="text-xl" />
          </button>
          <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
            <span className="material-symbols-outlined text-[18px] text-primary" aria-hidden="true">account_balance</span>
            <span className="text-on-surface font-semibold hidden sm:inline">Edlegna Portal</span>
            <span className="text-outline-variant hidden sm:inline">/</span>
            <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-mono">v4.2.1-prod</span>
          </div>
        </div>
        <form
          className="flex-1 max-w-md"
          onSubmit={(event) => {
            event.preventDefault();
            window.location.assign(`/admin/scholarships?q=${encodeURIComponent(search)}`);
          }}
        >
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-3 text-outline text-[18px]" aria-hidden="true">search</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_rgba(8,36,27,0.12)] transition-all"
              placeholder="Search scholarships, students, audit logs, rules..."
              type="text"
            />
          </div>
        </form>
        <div className="flex items-center gap-4 flex-shrink-0">
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low font-label-sm text-label-sm text-on-surface">
            <span className="w-2 h-2 rounded-full bg-secondary-container" />
            <span className="font-medium text-on-surface-variant">AI Semantic Engine Active</span>
          </div>
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenMenu((menu) => (menu === 'notifications' ? null : 'notifications'))}
              className="relative p-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
              aria-label="Open notifications"
            >
              <Icon name="notifications" className="text-[20px]" />
              {adminUnreadCount > 0 ? <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error" /> : null}
            </button>
            {openMenu === 'notifications' ? (
              <div className="absolute right-0 top-12 w-80 max-w-[calc(100vw-2rem)] rounded-xl border border-outline-variant bg-surface-container-lowest p-space-sm shadow-[0px_16px_36px_-8px_rgba(31,41,55,0.14)]">
                <p className="px-space-sm pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Alerts &amp; Logs</p>
                {adminNotifications.slice(0, 4).map((item) => (
                  <Link
                    key={item.id}
                    href={item.href ?? '/admin/notifications'}
                    onClick={() => setOpenMenu(null)}
                    className="block rounded-lg px-space-sm py-space-xs hover:bg-surface-container-low"
                  >
                    <p className="font-label-md text-label-md font-bold text-on-surface">{item.title}</p>
                    <p className="mt-0.5 line-clamp-2 font-body-sm text-body-sm text-on-surface-variant">{item.message}</p>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          <div className="h-6 w-px bg-surface-container-highest hidden sm:block" />
          <div className="relative flex items-center gap-3 pl-1">
            <button
              type="button"
              onClick={() => setOpenMenu((menu) => (menu === 'profile' ? null : 'profile'))}
              className="flex items-center gap-3 rounded-lg"
              aria-label="Open profile menu"
            >
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]" aria-hidden="true">person</span>
              </div>
              <div className="hidden md:flex flex-col text-left">
                <span className="font-label-md text-label-md text-on-surface font-semibold leading-tight">Dr. Aster Berhanu</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">Lead Administrator</span>
              </div>
              <Icon name="expand_more" className="text-on-surface-variant text-[18px] hidden sm:block" />
            </button>
            {openMenu === 'profile' ? (
              <div className="absolute right-0 top-12 w-52 rounded-xl border border-outline-variant bg-surface-container-lowest p-space-sm shadow-[0px_16px_36px_-8px_rgba(31,41,55,0.14)]">
                <Link href="/admin/settings" onClick={() => setOpenMenu(null)} className="block rounded-lg px-space-sm py-space-xs font-body-sm text-body-sm text-on-surface hover:bg-surface-container-low">System settings</Link>
                <Link href="/admin/reports" onClick={() => setOpenMenu(null)} className="block rounded-lg px-space-sm py-space-xs font-body-sm text-body-sm text-on-surface hover:bg-surface-container-low">Audit &amp; compliance</Link>
                <Link href="/login" onClick={() => setOpenMenu(null)} className="block rounded-lg px-space-sm py-space-xs font-body-sm text-body-sm text-error hover:bg-error-container/40">Sign out</Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
