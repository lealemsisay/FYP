'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/common/Icon';

interface AdminNavEntry {
  label: string;
  href: string;
  icon: string;
  badge?: string;
  badgeClass?: string;
}

const NAV_GROUPS: { title: string; items: AdminNavEntry[] }[] = [
  {
    title: 'Core Governance',
    items: [
      { label: 'Dashboard', href: '/admin/dashboard', icon: 'dashboard' },
      { label: 'Scholarships', href: '/admin/scholarships', icon: 'folder_open', badge: '124', badgeClass: 'bg-surface-container-high text-on-surface' },
      { label: 'Add Scholarship', href: '/admin/scholarships/new', icon: 'add_circle' },
      { label: 'Eligibility Engine', href: '/admin/eligibility-criteria', icon: 'tune' },
      { label: 'Categories & Rules', href: '/admin/categories', icon: 'filter_list' },
    ],
  },
  {
    title: 'Student & Access Registry',
    items: [
      { label: 'Students', href: '/admin/students', icon: 'group', badge: '24.8k', badgeClass: 'bg-surface-container-high text-on-surface' },
      { label: 'Verification', href: '/admin/students?view=verification', icon: 'verified_user', badge: '18 Pending', badgeClass: 'bg-tertiary-fixed text-on-tertiary-fixed font-semibold' },
    ],
  },
  {
    title: 'Analytics & Oversight',
    items: [
      { label: 'Search & AI Analytics', href: '/admin/search-analytics', icon: 'query_stats' },
      { label: 'Recommendation AI', href: '/admin/recommendation-analytics', icon: 'psychology' },
      { label: 'Audit & Compliance', href: '/admin/reports', icon: 'policy' },
    ],
  },
  {
    title: 'System Configuration',
    items: [
      { label: 'Alerts & Logs', href: '/admin/notifications', icon: 'notifications', badge: '3', badgeClass: 'bg-error text-on-error' },
      { label: 'System Settings', href: '/admin/settings', icon: 'settings' },
      { label: 'Sign Out', href: '/login', icon: 'logout' },
    ],
  },
];

interface AdminSidebarProps {
  open?: boolean;
  onClose?: () => void;
}

export function AdminSidebar({ open = false, onClose }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {open ? (
        <button type="button" aria-label="Close navigation" onClick={onClose} className="fixed inset-0 z-40 bg-primary/20 backdrop-blur-sm lg:hidden" />
      ) : null}
      <aside
        className={`fixed left-0 top-0 h-full w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto transition-transform ${
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col">
          <div className="px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-on-primary font-headline-md text-headline-md shadow-[0_2px_8px_rgba(8,36,27,0.18)]">E</div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary leading-tight tracking-tight">Edlegna</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Scholarly AI Suite</span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-tertiary-container/20 text-on-tertiary-container font-label-sm text-label-sm">ADMIN</span>
          </div>
          <div className="px-4 py-2 flex items-center justify-between">
            <div className="px-3 py-1.5 rounded-lg bg-surface-container-low flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span>Engine Sync: 99.8%</span>
            </div>
            <button type="button" onClick={onClose} className="text-on-surface-variant lg:hidden" aria-label="Close sidebar">
              <Icon name="close" className="text-lg" />
            </button>
          </div>
          <nav className="px-3 py-3 flex flex-col gap-6" data-active-classes="bg-primary text-on-primary rounded-lg">
            {NAV_GROUPS.map((group) => (
              <div key={group.title} className="flex flex-col gap-1">
                <div className="px-3 py-1 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">{group.title}</div>
                {group.items.map((item) => {
                  const active = pathname === item.href.split('?')[0] && (item.href.includes('?') ? false : true);
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={`flex items-center justify-between px-3 py-2 transition-colors font-label-lg text-label-lg ${
                        active
                          ? 'bg-primary text-on-primary rounded-lg'
                          : 'rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[20px]" aria-hidden="true">{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                      {item.badge ? (
                        <span className={`px-2 py-0.5 rounded-full font-label-sm text-label-sm ${item.badgeClass ?? ''}`}>{item.badge}</span>
                      ) : null}
                    </Link>
                  );
                })}
              </div>
            ))}
          </nav>
        </div>
        <div className="p-4 flex flex-col gap-3">
          <div className="p-3 rounded-xl bg-surface-container-low flex flex-col gap-2">
            <div className="flex items-center justify-between text-on-surface font-label-sm text-label-sm">
              <span className="font-medium">Addis-01 Cluster</span>
              <span className="text-secondary font-semibold">Healthy</span>
            </div>
            <div className="w-full bg-surface-container-highest rounded-full h-1.5">
              <div className="bg-secondary h-1.5 rounded-full w-[42%]" />
            </div>
            <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
              <span>Storage 42%</span>
              <span>NVMe High-IO</span>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] flex items-center justify-between">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-on-primary text-[18px]" aria-hidden="true">person</span>
              </div>
              <div className="flex flex-col truncate">
                <span className="font-label-md text-label-md text-on-surface font-semibold truncate">Dr. Aster Berhanu</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant truncate">Lead Administrator</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant text-[18px]" aria-hidden="true">more_vert</span>
          </div>
        </div>
      </aside>
    </>
  );
}
