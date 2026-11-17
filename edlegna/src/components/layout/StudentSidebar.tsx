'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/common/Icon';
import { Logo } from '@/components/common/Logo';
import { ASSETS } from '@/lib/assets';
import { STUDENT_DOSSIER_NAV, STUDENT_NAV, type NavItem } from '@/lib/navigation';
import { useDemoAuth } from '@/components/common/AppProviders';

const badgeClasses = {
  secondary: 'bg-secondary-container text-on-secondary-container',
  error: 'bg-error text-on-error font-bold',
  neutral: 'bg-surface-container-high text-on-surface',
  gold: 'text-tertiary font-bold',
};

function NavGroup({ items, title }: { items: NavItem[]; title: string }) {
  const pathname = usePathname();
  return (
    <>
      <div className="px-space-md py-space-sm">
        <span className="px-space-md font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
          {title}
        </span>
      </div>
      <nav className="flex flex-col gap-space-xs px-space-md" data-active-classes="bg-primary-container text-on-primary font-bold">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? 'page' : undefined}
              className={`flex items-center justify-between px-space-md py-space-sm rounded-lg transition-all ${
                active
                  ? 'bg-primary-container text-on-primary font-bold'
                  : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-label-lg text-label-lg'
              }`}
            >
              <div className="flex items-center gap-space-md">
                <span className={`material-symbols-outlined text-xl ${item.icon === 'auto_awesome' ? 'text-secondary' : ''}`} aria-hidden="true">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </div>
              {item.badge ? (
                <span className={`font-label-sm text-label-sm px-space-xs py-0.5 rounded-full ${badgeClasses[item.badgeTone ?? 'neutral']}`}>
                  {item.badge}
                </span>
              ) : null}
            </Link>
          );
        })}
      </nav>
    </>
  );
}

interface StudentSidebarProps {
  open?: boolean;
  onClose?: () => void;
}

export function StudentSidebar({ open = false, onClose }: StudentSidebarProps) {
  const { signOut } = useDemoAuth();

  return (
    <>
      {open ? (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-primary/20 backdrop-blur-sm lg:hidden"
        />
      ) : null}
      <aside
        className={`fixed left-0 top-0 h-full w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(31,58,48,0.04)] z-50 flex flex-col justify-between overflow-y-auto transition-transform ${
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col">
          <div className="h-20 px-space-lg flex items-center justify-between gap-space-sm">
            <Logo href="/student/dashboard" subtitle="Scholar Portal" imageClassName="h-8 w-auto object-contain" />
            <button type="button" onClick={onClose} className="text-on-surface-variant lg:hidden" aria-label="Close sidebar">
              <Icon name="close" />
            </button>
          </div>
          <NavGroup items={STUDENT_NAV} title="Discovery Suite" />
          <NavGroup items={STUDENT_DOSSIER_NAV} title="Personal Dossier" />
        </div>
        <div className="p-space-md bg-surface-container-low/60 m-space-md rounded-lg flex items-center gap-space-md">
          <img alt="Profile" className="w-10 h-10 rounded-full object-cover" src={ASSETS.portraitPlaceholder} />
          <div className="flex flex-col min-w-0 flex-1">
            <span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Selamawit Tadesse</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant truncate">AAU CS &apos;24</span>
          </div>
          <Link href="/login" onClick={signOut} className="text-on-surface-variant hover:text-error transition-colors" title="Sign Out">
            <span className="material-symbols-outlined text-lg" aria-hidden="true">logout</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
