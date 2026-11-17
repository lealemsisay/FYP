'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ADMIN_NOTIFICATIONS, STUDENT_NOTIFICATIONS } from '@/data/notifications';
import type { AppNotification } from '@/types';

interface BookmarkContextValue {
  savedIds: string[];
  isBookmarked: (id: string) => boolean;
  toggleBookmark: (id: string) => void;
}

interface ToastContextValue {
  toast: string | null;
  showToast: (message: string) => void;
}

interface NotificationContextValue {
  notifications: AppNotification[];
  adminNotifications: AppNotification[];
  unreadCount: number;
  adminUnreadCount: number;
  markAllRead: () => void;
  markAdminAllRead: () => void;
}

interface DemoAuthContextValue {
  signedIn: boolean;
  signIn: () => void;
  signOut: () => void;
}

const BookmarkContext = createContext<BookmarkContextValue | null>(null);
const ToastContext = createContext<ToastContextValue | null>(null);
const NotificationContext = createContext<NotificationContextValue | null>(null);
const DemoAuthContext = createContext<DemoAuthContextValue | null>(null);

const STORAGE_KEY = 'edlegna.bookmarks';

function useStoredBookmarks() {
  const [savedIds, setSavedIds] = useState<string[]>(['sch-001', 'sch-002', 'sch-003', 'sch-006']);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.every((item) => typeof item === 'string')) {
          setSavedIds(parsed);
        }
      }
    } catch {
      /* localStorage unavailable — keep in-memory demo state */
    }
  }, []);

  const toggleBookmark = useCallback((id: string) => {
    setSavedIds((current) => {
      const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore storage errors */
      }
      return next;
    });
  }, []);

  const isBookmarked = useCallback((id: string) => savedIds.includes(id), [savedIds]);

  return useMemo(() => ({ savedIds, isBookmarked, toggleBookmark }), [savedIds, isBookmarked, toggleBookmark]);
}

export function AppProviders({ children }: { children: React.ReactNode }) {
  const bookmarks = useStoredBookmarks();
  const [toast, setToast] = useState<string | null>(null);
  const [notifications, setNotifications] = useState<AppNotification[]>(STUDENT_NOTIFICATIONS);
  const [adminNotifications, setAdminNotifications] = useState<AppNotification[]>(ADMIN_NOTIFICATIONS);
  const [signedIn, setSignedIn] = useState(true);

  const showToast = useCallback((message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 3200);
  }, []);

  const markAllRead = useCallback(() => {
    setNotifications((current) => current.map((item) => ({ ...item, read: true })));
  }, []);

  const markAdminAllRead = useCallback(() => {
    setAdminNotifications((current) => current.map((item) => ({ ...item, read: true })));
  }, []);

  const notificationValue = useMemo<NotificationContextValue>(
    () => ({
      notifications,
      adminNotifications,
      unreadCount: notifications.filter((item) => !item.read).length,
      adminUnreadCount: adminNotifications.filter((item) => !item.read).length,
      markAllRead,
      markAdminAllRead,
    }),
    [notifications, adminNotifications, markAllRead, markAdminAllRead],
  );

  const authValue = useMemo<DemoAuthContextValue>(
    () => ({ signedIn, signIn: () => setSignedIn(true), signOut: () => setSignedIn(false) }),
    [signedIn],
  );

  return (
    <BookmarkContext.Provider value={bookmarks}>
      <ToastContext.Provider value={{ toast, showToast }}>
        <NotificationContext.Provider value={notificationValue}>
          <DemoAuthContext.Provider value={authValue}>
            {children}
            {toast ? (
              <div className="fixed bottom-space-lg right-space-lg z-[100] max-w-sm rounded-xl border border-outline-variant bg-surface-container-lowest p-space-md text-body-sm text-on-surface shadow-[0px_16px_36px_-8px_rgba(31,41,55,0.14)]">
                {toast}
              </div>
            ) : null}
          </DemoAuthContext.Provider>
        </NotificationContext.Provider>
      </ToastContext.Provider>
    </BookmarkContext.Provider>
  );
}

function useRequiredContext<T>(context: React.Context<T | null>, name: string): T {
  const value = useContext(context);
  if (!value) throw new Error(`${name} must be used inside AppProviders`);
  return value;
}

export const useBookmarks = () => useRequiredContext(BookmarkContext, 'useBookmarks');
export const useToast = () => useRequiredContext(ToastContext, 'useToast');
export const useAppNotifications = () => useRequiredContext(NotificationContext, 'useAppNotifications');
export const useDemoAuth = () => useRequiredContext(DemoAuthContext, 'useDemoAuth');
