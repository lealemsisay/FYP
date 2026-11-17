'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Icon } from '@/components/common/Icon';
import { ASSETS } from '@/lib/assets';
import { useAppNotifications } from '@/components/common/AppProviders';

interface StudentHeaderProps {
  onMenuClick: () => void;
}

export function StudentHeader({ onMenuClick }: StudentHeaderProps) {
  const [search, setSearch] = useState('');
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { notifications, unreadCount } = useAppNotifications();

  return (
    <header className="fixed top-0 left-0 right-0 lg:left-72 h-20 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(31,58,48,0.04)] z-40 flex items-center justify-between px-space-lg lg:px-margin-desktop">
      <div className="flex items-center gap-space-md">
        <button type="button" onClick={onMenuClick} className="text-on-surface lg:hidden" aria-label="Open navigation">
          <Icon name="menu" className="text-2xl" />
        </button>
        <img alt="Edlegna Official Logo" className="h-7 w-auto object-contain" src={ASSETS.logo} />
        <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-semibold hidden md:inline-block">
          Edlegna Academic Portfolio
        </span>
      </div>
      <div className="flex items-center gap-space-lg">
        <form
          className="relative hidden sm:block w-72"
          onSubmit={(event) => {
            event.preventDefault();
            window.location.assign(`/student/discover?q=${encodeURIComponent(search)}`);
          }}
        >
          <span className="material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-on-surface-variant text-lg" aria-hidden="true">search</span>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full pl-10 pr-space-md py-space-xs bg-surface-container-lowest text-on-surface font-body-sm text-body-sm rounded-lg outline-none ring-1 ring-outline-variant focus:ring-primary"
            placeholder="Search grants, donors, fields..."
            type="text"
          />
        </form>
        <div className="relative">
          <button
            type="button"
            onClick={() => { setNotificationsOpen((open) => !open); setProfileOpen(false); }}
            className="relative p-space-xs text-on-surface-variant hover:text-on-surface transition-colors"
            aria-label="Open notifications"
          >
            <Icon name="notifications" className="text-2xl" />
            {unreadCount > 0 ? <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-error rounded-full" /> : null}
          </button>
          {notificationsOpen ? (
            <div className="absolute right-0 top-11 w-80 max-w-[calc(100vw-2rem)] rounded-xl border border-outline-variant bg-surface-container-lowest p-space-sm shadow-[0px_16px_36px_-8px_rgba(31,41,55,0.14)]">
              <div className="flex items-center justify-between px-space-sm pb-space-xs">
                <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Notifications</p>
                <Link href="/student/notifications" onClick={() => setNotificationsOpen(false)} className="font-label-sm text-label-sm text-secondary">View all</Link>
              </div>
              {notifications.slice(0, 4).map((notification) => (
                <Link
                  key={notification.id}
                  href={notification.href ?? '/student/notifications'}
                  onClick={() => setNotificationsOpen(false)}
                  className={`block rounded-lg px-space-sm py-space-xs hover:bg-surface-container-low ${notification.read ? '' : 'bg-secondary/5'}`}
                >
                  <p className="font-label-md text-label-md font-bold text-on-surface">{notification.title}</p>
                  <p className="mt-0.5 line-clamp-2 font-body-sm text-body-sm text-on-surface-variant">{notification.message}</p>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
        <div className="relative flex items-center gap-space-sm pl-space-sm">
          <button
            type="button"
            onClick={() => { setProfileOpen((open) => !open); setNotificationsOpen(false); }}
            className="flex items-center gap-space-sm rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Open profile menu"
          >
            <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={ASSETS.portraitPlaceholder} />
            <span className="font-label-md text-label-md font-bold text-on-surface hidden lg:inline">S. Tadesse</span>
            <Icon name="expand_more" className="text-base text-on-surface-variant hidden sm:block" />
          </button>
          {profileOpen ? (
            <div className="absolute right-0 top-12 w-56 rounded-xl border border-outline-variant bg-surface-container-lowest p-space-sm shadow-[0px_16px_36px_-8px_rgba(31,41,55,0.14)]">
              <Link href="/student/profile" onClick={() => setProfileOpen(false)} className="block rounded-lg px-space-sm py-space-xs font-body-sm text-body-sm text-on-surface hover:bg-surface-container-low">My profile</Link>
              <Link href="/student/settings" onClick={() => setProfileOpen(false)} className="block rounded-lg px-space-sm py-space-xs font-body-sm text-body-sm text-on-surface hover:bg-surface-container-low">Settings</Link>
              <Link href="/admin/dashboard" onClick={() => setProfileOpen(false)} className="block rounded-lg px-space-sm py-space-xs font-body-sm text-body-sm text-on-surface hover:bg-surface-container-low">Administration</Link>
              <Link href="/login" onClick={() => setProfileOpen(false)} className="block rounded-lg px-space-sm py-space-xs font-body-sm text-body-sm text-error hover:bg-error-container/40">Sign out</Link>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
