'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Icon } from '@/components/common/Icon';
import { Logo } from '@/components/common/Logo';
import { ASSETS } from '@/lib/assets';
import { PUBLIC_NAV } from '@/lib/navigation';

export function PublicHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href.split('#')[0]));

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(31,58,48,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-space-lg" data-active-classes="text-primary font-bold">
          {PUBLIC_NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`font-label-lg text-label-lg transition-colors ${
                isActive(item.href) ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-space-md">
          <Link
            href="/login"
            className="hidden sm:inline-flex font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors px-space-md py-space-sm"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="hidden sm:inline-flex font-label-lg text-label-lg bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary rounded-lg px-space-lg py-space-sm transition-all shadow-[0_1px_3px_rgba(31,58,48,0.06)]"
          >
            Get Started
          </Link>
          <div className="relative hidden sm:block">
            <button
              type="button"
              onClick={() => setProfileOpen((open) => !open)}
              className="flex items-center gap-space-xs rounded-full outline-none ring-primary focus-visible:ring-2"
              aria-label="Open profile menu"
            >
              <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={ASSETS.portraitPlaceholder} />
            </button>
            {profileOpen ? (
              <div className="absolute right-0 top-11 w-52 rounded-xl border border-outline-variant bg-surface-container-lowest p-space-sm shadow-[0px_16px_36px_-8px_rgba(31,41,55,0.14)]">
                <p className="px-space-sm pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                  Selamawit Tadesse
                </p>
                <Link href="/student/dashboard" className="block rounded-lg px-space-sm py-space-xs font-body-sm text-body-sm text-on-surface hover:bg-surface-container-low" onClick={() => setProfileOpen(false)}>
                  Student dashboard
                </Link>
                <Link href="/student/profile" className="block rounded-lg px-space-sm py-space-xs font-body-sm text-body-sm text-on-surface hover:bg-surface-container-low" onClick={() => setProfileOpen(false)}>
                  My profile
                </Link>
                <Link href="/admin/dashboard" className="block rounded-lg px-space-sm py-space-xs font-body-sm text-body-sm text-on-surface hover:bg-surface-container-low" onClick={() => setProfileOpen(false)}>
                  Administration
                </Link>
              </div>
            ) : null}
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-outline-variant text-on-surface lg:hidden"
            aria-label="Toggle navigation menu"
          >
            <Icon name={menuOpen ? 'close' : 'menu'} className="text-xl" />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav className="border-t border-outline-variant bg-surface-container-lowest px-margin py-space-md lg:hidden">
          <div className="flex flex-col gap-space-xs">
            {PUBLIC_NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-space-md py-space-sm font-label-lg text-label-lg text-on-surface hover:bg-surface-container-low"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/login" onClick={() => setMenuOpen(false)} className="rounded-lg px-space-md py-space-sm font-label-lg text-label-lg text-on-surface hover:bg-surface-container-low">
              Sign In
            </Link>
            <Link href="/register" onClick={() => setMenuOpen(false)} className="rounded-lg bg-primary px-space-md py-space-sm text-center font-label-lg text-label-lg text-on-primary">
              Get Started
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
