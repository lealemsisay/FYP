'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Icon } from '@/components/common/Icon';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { AdminPageHeader, AdminSection, AdminStatCard } from '@/components/admin/AdminBits';
import { useAppNotifications } from '@/components/common/AppProviders';

const FILTERS = [
  { value: 'all', label: 'All', icon: 'notifications' },
  { value: 'system', label: 'System', icon: 'settings' },
  { value: 'deadline', label: 'Deadlines', icon: 'event_upcoming' },
  { value: 'eligibility', label: 'Eligibility', icon: 'rule_folder' },
];

export default function AdminNotificationsPage() {
  const { adminNotifications, adminUnreadCount, markAdminAllRead } = useAppNotifications();
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? adminNotifications : adminNotifications.filter((item) => item.category === filter);

  return (
    <AdminLayout>
      <div className="space-y-space-lg">
        <AdminPageHeader
          eyebrow="Operations Inbox"
          title="Notifications"
          description={`${adminUnreadCount} unread operational alerts across verification, content and semantic services.`}
          actions={<button type="button" disabled={adminUnreadCount === 0} onClick={markAdminAllRead} className="rounded-lg border border-outline-variant px-space-md py-2 font-label-md text-label-md text-primary hover:bg-surface-container-low disabled:opacity-50">Mark all as read</button>}
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
          <AdminStatCard label="Unread alerts" value={String(adminUnreadCount)} icon="mark_email_unread" tone="error" />
          <AdminStatCard label="Verification queue" value="3" icon="school" tone="primary" note="Dossiers awaiting review" />
          <AdminStatCard label="Content changes" value="1" icon="edit_note" tone="secondary" note="This cycle" />
        </div>
        <div className="flex flex-wrap gap-space-xs">
          {FILTERS.map((item) => (
            <button key={item.value} type="button" onClick={() => setFilter(item.value)} className={`inline-flex items-center gap-1.5 rounded-lg px-space-md py-2 font-label-md text-label-md transition-colors ${filter === item.value ? 'bg-primary text-on-primary' : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container'}`}>
              <Icon name={item.icon} className="text-[18px]" /> {item.label}
            </button>
          ))}
        </div>
        <AdminSection title="Operational feed">
          <div className="divide-y divide-outline-variant">
            {visible.map((notification) => (
              <article key={notification.id} className={`flex gap-space-md py-space-md ${notification.read ? '' : 'bg-secondary/5'}`}>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-container text-primary"><Icon name={notification.category === 'deadline' ? 'event_upcoming' : 'settings'} /></span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-space-xs"><h3 className="font-headline-sm text-headline-sm text-primary">{notification.title}</h3>{!notification.read ? <span className="h-2 w-2 rounded-full bg-secondary" /> : null}</div>
                  <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">{notification.message}</p>
                  <p className="mt-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">{new Date(notification.createdAt).toLocaleString()}</p>
                </div>
                {notification.href ? <Link href={notification.href} className="self-center font-label-md text-label-md font-semibold text-secondary hover:text-primary">Open</Link> : null}
              </article>
            ))}
          </div>
        </AdminSection>
      </div>
    </AdminLayout>
  );
}
