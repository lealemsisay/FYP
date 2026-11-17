import type { AppNotification } from '@/types';

export const STUDENT_NOTIFICATIONS: AppNotification[] = [
  { id: 'ntf-1', title: 'Deadline approaching', message: 'Chevening Scholarships closes in 18 days. Your IELTS report is still marked as information missing.', category: 'deadline', read: false, createdAt: '2026-11-17T08:30:00Z', href: '/student/saved' },
  { id: 'ntf-2', title: 'New high-match opportunity', message: 'A new DAAD programme with a 96% semantic match was added to your discovery feed.', category: 'recommendation', read: false, createdAt: '2026-11-16T14:10:00Z', href: '/student/recommendations' },
  { id: 'ntf-3', title: 'Profile calibration update', message: 'Your dossier is now 94% calibrated. Add your English test report to reach 100%.', category: 'eligibility', read: false, createdAt: '2026-11-15T11:00:00Z', href: '/student/profile' },
  { id: 'ntf-4', title: 'Weekly digest ready', message: 'Your weekly scholarship digest is available in your saved portfolio.', category: 'system', read: true, createdAt: '2026-11-10T07:00:00Z', href: '/student/saved' },
];

export const ADMIN_NOTIFICATIONS: AppNotification[] = [
  { id: 'ant-1', title: 'Verification queue', message: '3 student dossiers require transcript verification.', category: 'system', read: false, createdAt: '2026-11-17T07:45:00Z', href: '/admin/students' },
  { id: 'ant-2', title: 'Deadline change', message: 'Chevening Scholarships deadline was updated by the content team.', category: 'deadline', read: false, createdAt: '2026-11-16T16:20:00Z', href: '/admin/scholarships' },
  { id: 'ant-3', title: 'Embedding refresh', message: 'Semantic embeddings for 124 records were refreshed successfully.', category: 'system', read: true, createdAt: '2026-11-15T02:10:00Z', href: '/admin/search-analytics' },
];
