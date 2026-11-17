export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  badge?: string;
  badgeTone?: 'secondary' | 'error' | 'neutral' | 'gold';
}

export const PUBLIC_NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Scholarships', href: '/scholarships' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/how-it-works#resources' },
];

export const STUDENT_NAV: NavItem[] = [
  { label: 'Dashboard', href: '/student/dashboard', icon: 'space_dashboard' },
  { label: 'Discover Scholarships', href: '/student/discover', icon: 'travel_explore' },
  { label: 'AI Recommendations', href: '/student/recommendations', icon: 'auto_awesome', badge: '12', badgeTone: 'secondary' },
  { label: 'Eligibility Checker', href: '/student/eligibility', icon: 'rule_folder' },
  { label: 'Saved Scholarships', href: '/student/saved', icon: 'bookmark', badge: '8', badgeTone: 'neutral' },
  { label: 'Search History', href: '/student/history', icon: 'history_edu' },
];

export const STUDENT_DOSSIER_NAV: NavItem[] = [
  { label: 'My Profile', href: '/student/profile', icon: 'account_circle', badge: '94%', badgeTone: 'gold' },
  { label: 'Notifications', href: '/student/notifications', icon: 'notifications', badge: '3', badgeTone: 'error' },
  { label: 'Settings', href: '/student/settings', icon: 'settings' },
];

export const ADMIN_NAV: NavItem[] = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: 'space_dashboard' },
  { label: 'Scholarship Management', href: '/admin/scholarships', icon: 'library_books' },
  { label: 'Eligibility Engine', href: '/admin/eligibility-criteria', icon: 'rule_folder' },
  { label: 'Categories & Filters', href: '/admin/categories', icon: 'category' },
  { label: 'Student Management', href: '/admin/students', icon: 'school' },
  { label: 'Search & AI Analytics', href: '/admin/search-analytics', icon: 'query_stats' },
  { label: 'Recommendation Analytics', href: '/admin/recommendation-analytics', icon: 'auto_awesome' },
  { label: 'Reports & Compliance', href: '/admin/reports', icon: 'description' },
  { label: 'Notifications', href: '/admin/notifications', icon: 'notifications', badge: '3', badgeTone: 'error' },
  { label: 'System Settings', href: '/admin/settings', icon: 'settings' },
];

export const DEMO_BANNER =
  'Frontend demonstration only — sample data, no real accounts, AI evaluation, or backend services are connected.';
