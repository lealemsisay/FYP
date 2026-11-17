export type UserRole = 'student' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
}

export interface StudentProfile {
  id: string;
  userId: string;
  fullName: string;
  academicId: string;
  university: string;
  department: string;
  degreeLevel: string;
  graduationYear: number;
  gpa: number;
  country: string;
  fieldOfStudy: string;
  completionPercentage: number;
  avatarUrl?: string;
}

export type RequirementStatus = 'satisfied' | 'not-satisfied' | 'unknown';

export interface EligibilityRequirement {
  id: string;
  label: string;
  rule: string;
  credential: string;
  status: RequirementStatus;
  evidence: string;
}

export interface EligibilityResult {
  scholarshipId: string;
  overallStatus: RequirementStatus;
  satisfiedCount: number;
  totalCount: number;
  requirements: EligibilityRequirement[];
  evaluatedAt: string;
  demonstrationOnly: true;
}

export type ScholarshipStatus = 'active' | 'draft' | 'closed' | 'archived';

export interface Scholarship {
  id: string;
  slug: string;
  title: string;
  provider: string;
  institution: string;
  country: string;
  region: string;
  degreeLevels: string[];
  fieldsOfStudy: string[];
  fundingType: string;
  awardAmount: string;
  deadline: string;
  semanticScore: number;
  status: ScholarshipStatus;
  verified: boolean;
  featured: boolean;
  description: string;
  benefits: string[];
  requirements: EligibilityRequirement[];
  documents: { id: string; label: string; required: boolean }[];
  embeddedReason: string;
  createdAt: string;
  crest?: string;
}

export interface Bookmark {
  id: string;
  scholarshipId: string;
  createdAt: string;
}

export interface SearchHistory {
  id: string;
  query: string;
  filters: Record<string, string>;
  resultCount: number;
  topMatchIds: string[];
  semanticWeight: number;
  createdAt: string;
}

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  category: 'deadline' | 'recommendation' | 'eligibility' | 'system';
  read: boolean;
  createdAt: string;
  href?: string;
}

export interface AdminStudentRecord {
  id: string;
  name: string;
  academicId: string;
  university: string;
  department: string;
  level: string;
  country: string;
  status: 'verified' | 'pending' | 'action-required' | 'rejected';
  submittedAt: string;
}

export interface AdminActivity {
  id: string;
  actor: string;
  action: string;
  target: string;
  timestamp: string;
}

export interface AnalyticsPoint {
  month: string;
  additions: number;
  closed: number;
}

export interface RegionShare {
  label: string;
  value: number;
  color: string;
}
