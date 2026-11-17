'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Icon } from '@/components/common/Icon';
import { StudentLayout } from '@/components/layout/StudentLayout';
import { useAppNotifications, useToast } from '@/components/common/AppProviders';

const FILTERS = [
  { value: 'all', label: 'All', icon: 'notifications' },
  { value: 'deadline', label: 'Deadlines', icon: 'event_upcoming' },
  { value: 'recommendation', label: 'Recommendations', icon: 'auto_awesome' },
  { value: 'eligibility', label: 'Eligibility', icon: 'rule_folder' },
  { value: 'system', label: 'System', icon: 'settings' },
] as const;

const CATEGORY_STYLES: Record<string, string> = {
  deadline: 'bg-error-container text-error',
  recommendation: 'bg-secondary-container text-on-secondary-container',
  eligibility: 'bg-tertiary-fixed/30 text-tertiary',
  system: 'bg-surface-container text-on-surface-variant',
};

export default function StudentNotificationsPage() {
  const { notifications, unreadCount, markAllRead } = useAppNotifications();
  const { showToast } = useToast();
  const [filter, setFilter] = useState<string>('all');
  const visible = filter === 'all' ? notifications : notifications.filter((item) => item.category === filter);

  return (
    <StudentLayout>
      <div className="space-y-space-lg">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Scholar Inbox</span>
            <h1 className="mt-1 font-headline-xl text-headline-xl text-primary tracking-tight">Notifications</h1>
            <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">{unreadCount} unread updates across deadlines, recommendations and dossier calibration.</p>
          </div>
          <button type="button" disabled={unreadCount === 0} onClick={() => { markAllRead(); showToast('All notifications marked as read.'); }} className="inline-flex items-center justify-center gap-space-xs self-start rounded-lg border border-outline-variant bg-surface-container-lowest px-space-lg py-space-sm font-label-md text-label-md text-primary transition-colors hover:bg-surface-container-low disabled:cursor-not-allowed disabled:opacity-50">
            <Icon name="done_all" className="text-[18px]" /> Mark all as read
          </button>
        </div>

        <div className="flex flex-wrap gap-space-xs border-b border-outline-variant pb-space-md">
          {FILTERS.map((item) => (
            <button key={item.value} type="button" onClick={() => setFilter(item.value)} className={`inline-flex items-center gap-1.5 rounded-lg px-space-md py-2 font-label-md text-label-md transition-colors ${
              filter === item.value ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container'
            }`}>
              <Icon name={item.icon} className="text-[18px]" /> {item.label}
            </button>
          ))}
        </div>

        <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
          {visible.length === 0 ? (
            <div className="p-space-xl text-center">
              <Icon name="notifications_off" className="mx-auto text-4xl text-outline" />
              <p className="mt-space-sm font-body-md text-body-md text-on-surface-variant">No notifications in this category.</p>
            </div>
          ) : visible.map((notification) => (
            <article key={notification.id} className={`flex gap-space-md border-b border-outline-variant p-space-lg last:border-b-0 ${notification.read ? 'bg-surface-container-lowest' : 'bg-secondary/5'}`}>
              <span className={`mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${CATEGORY_STYLES[notification.category]}`}>
                <Icon name={notification.category === 'deadline' ? 'event_upcoming' : notification.category === 'recommendation' ? 'auto_awesome' : notification.category === 'eligibility' ? 'rule_folder' : 'settings'} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-space-sm">
                  <h2 className="font-headline-sm text-headline-sm text-primary">{notification.title}</h2>
                  {!notification.read ? <span className="h-2 w-2 rounded-full bg-secondary" aria-label="Unread" /> : null}
                </div>
                <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">{notification.message}</p>
                <p className="mt-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">{new Date(notification.createdAt).toLocaleString()}</p>
                {notification.href ? (
                  <Link href={notification.href} className="mt-space-sm inline-flex items-center gap-1 font-label-md text-label-md font-semibold text-secondary hover:text-primary">Open related page <Icon name="arrow_forward" className="text-[16px]" /></Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </StudentLayout>
  );
}
