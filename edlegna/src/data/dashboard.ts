import type { AnalyticsPoint, RegionShare, SearchHistory } from '@/types';

export const DASHBOARD_METRICS = [
  { label: 'Total Recommended', value: '28', icon: 'recommend', tone: 'secondary', note: '+4 this week', sub: 'Calibrated against STEM & East Africa criteria' },
  { label: 'Eligible Opportunities', value: '19', icon: 'verified', tone: 'primary', note: '100% verified', sub: 'No missing pre-requisite markers' },
  { label: 'Saved Scholarships', value: '7', icon: 'bookmark', tone: 'tertiary', note: 'Portfolio ready', sub: 'Deadline alerts are active for each item' },
  { label: 'Urgent Deadlines', value: '3', icon: 'event_upcoming', tone: 'error', note: 'Within 14 days', sub: 'Chevening, Rhodes and DAAD close soon' },
] as const;

export const ADMIN_METRICS = [
  { label: 'Total Scholarships', value: '124', icon: 'library_books', tone: 'primary', note: '+12 this month' },
  { label: 'Active Opportunities', value: '98', icon: 'check_circle', tone: 'secondary', note: 'Live in directory' },
  { label: 'Expired / Archived', value: '26', icon: 'inventory_2', tone: 'neutral', note: 'Retained for audit' },
  { label: 'Registered Students', value: '3,482', icon: 'school', tone: 'primary', note: '+184 this month' },
  { label: 'AI Semantic Inquiries', value: '18,204', icon: 'psychology', tone: 'secondary', note: '+8.4% this month' },
  { label: 'Saved Grants in Portfolios', value: '9,706', icon: 'bookmark', tone: 'tertiary', note: 'Across all students' },
] as const;

export const INTAKE_ANALYTICS: AnalyticsPoint[] = [
  { month: 'Jan', additions: 8, closed: 3 },
  { month: 'Feb', additions: 12, closed: 5 },
  { month: 'Mar', additions: 9, closed: 7 },
  { month: 'Apr', additions: 15, closed: 6 },
  { month: 'May', additions: 11, closed: 9 },
  { month: 'Jun', additions: 18, closed: 8 },
  { month: 'Jul', additions: 14, closed: 12 },
  { month: 'Aug', additions: 20, closed: 10 },
  { month: 'Sep', additions: 17, closed: 14 },
  { month: 'Oct', additions: 23, closed: 11 },
];

export const REGION_SHARES: RegionShare[] = [
  { label: 'Germany', value: 28, color: '#006b5f' },
  { label: 'UK', value: 24, color: '#1f3a30' },
  { label: 'USA/Canada', value: 22, color: '#cba72f' },
  { label: 'Nordic', value: 14, color: '#71f8e4' },
  { label: 'Japan / Pan-Asia', value: 12, color: '#afcdbf' },
];

export const SEARCH_HISTORY: SearchHistory[] = [
  { id: 'hist-1', query: 'Fully funded computer science scholarships in Germany for East African students', filters: { Country: 'Germany', Level: 'Masters', Funding: 'Fully Funded' }, resultCount: 14, topMatchIds: ['sch-001', 'sch-009'], semanticWeight: 0.96, createdAt: '2026-11-16T10:24:00Z' },
  { id: 'hist-2', query: 'Leadership fellowships for women in STEM from Africa', filters: { Country: 'United Kingdom', Funding: 'Fully Funded' }, resultCount: 9, topMatchIds: ['sch-002', 'sch-005'], semanticWeight: 0.91, createdAt: '2026-11-14T15:02:00Z' },
  { id: 'hist-3', query: 'IELTS 6.0 accepted masters scholarships closing before December', filters: { Deadline: 'Within 30 days', Level: 'Masters' }, resultCount: 6, topMatchIds: ['sch-006', 'sch-004'], semanticWeight: 0.88, createdAt: '2026-11-11T08:47:00Z' },
  { id: 'hist-4', query: 'Artificial intelligence and public health joint masters programmes', filters: { Field: 'AI', Level: 'Masters' }, resultCount: 11, topMatchIds: ['sch-004', 'sch-010'], semanticWeight: 0.84, createdAt: '2026-11-08T12:30:00Z' },
];

export const UPCOMING_DEADLINES = [
  { id: 'dl-1', scholarship: 'Chevening Scholarships', date: '2026-11-05', urgency: 'urgent' as const, provider: 'FCDO' },
  { id: 'dl-2', scholarship: 'Rhodes Scholarship', date: '2026-10-20', urgency: 'urgent' as const, provider: 'Rhodes Trust' },
  { id: 'dl-3', scholarship: 'DAAD Helmut-Schmidt', date: '2026-11-30', urgency: 'soon' as const, provider: 'DAAD' },
];
