import type { AdminActivity, AdminStudentRecord, StudentProfile, User } from '@/types';
import { ASSETS } from '@/lib/assets';

export const CURRENT_USER: User = {
  id: 'user-001',
  name: 'Selamawit Tadesse',
  email: 'selamawit.tadesse@student.aau.edu.et',
  role: 'student',
  avatarUrl: ASSETS.portraitPlaceholder,
};

export const STUDENT_PROFILE: StudentProfile = {
  id: 'student-001',
  userId: 'user-001',
  fullName: 'Selamawit Tadesse',
  academicId: 'AAU-CS-2019-0421',
  university: 'Addis Ababa University',
  department: 'Computer Science',
  degreeLevel: 'Bachelor of Science',
  graduationYear: 2024,
  gpa: 3.7,
  country: 'Ethiopia',
  fieldOfStudy: 'Computer Science',
  completionPercentage: 94,
  avatarUrl: ASSETS.portraitPlaceholder,
};

export const ADMIN_STUDENTS: AdminStudentRecord[] = [
  { id: 'stu-001', name: 'Selamawit Tadesse', academicId: 'AAU-CS-2019-0421', university: 'Addis Ababa University', department: 'Computer Science', level: 'BSc', country: 'Ethiopia', status: 'verified', submittedAt: '2026-11-02' },
  { id: 'stu-002', name: 'Julian Vance', academicId: 'STN-ENG-2020-118', university: 'Stanford University', department: 'Engineering', level: 'BSc', country: 'United States', status: 'verified', submittedAt: '2026-11-01' },
  { id: 'stu-003', name: 'Dr. Hana Kebede', academicId: 'AAU-MED-2017-088', university: 'Addis Ababa University', department: 'Public Health', level: 'PhD', country: 'Ethiopia', status: 'pending', submittedAt: '2026-10-30' },
  { id: 'stu-004', name: 'Bereket Yohannes', academicId: 'AAU-ECON-2021-234', university: 'Addis Ababa University', department: 'Economics', level: 'BSc', country: 'Ethiopia', status: 'verified', submittedAt: '2026-10-28' },
  { id: 'stu-005', name: 'Blen Tessema', academicId: 'AAU-CS-2022-091', university: 'Addis Ababa University', department: 'Computer Science', level: 'BSc', country: 'Ethiopia', status: 'pending', submittedAt: '2026-10-26' },
  { id: 'stu-006', name: 'Dawit Mengistu', academicId: 'AAU-ENG-2019-310', university: 'Addis Ababa University', department: 'Engineering', level: 'BSc', country: 'Ethiopia', status: 'verified', submittedAt: '2026-10-24' },
  { id: 'stu-007', name: 'Yonas Alemu', academicId: 'AAU-CS-2020-177', university: 'Addis Ababa University', department: 'Computer Science', level: 'BSc', country: 'Ethiopia', status: 'action-required', submittedAt: '2026-10-22' },
  { id: 'stu-008', name: 'Meron Haile', academicId: 'AAU-STAT-2021-056', university: 'Addis Ababa University', department: 'Statistics', level: 'BSc', country: 'Ethiopia', status: 'verified', submittedAt: '2026-10-20' },
];

export const PRIORITY_VERIFICATION = ADMIN_STUDENTS.filter((student) => student.status !== 'verified').slice(0, 3);

export const ADMIN_ACTIVITY: AdminActivity[] = [
  { id: 'act-1', actor: 'Admin — Registrar', action: 'verified the dossier of', target: 'Selamawit Tadesse', timestamp: '12 minutes ago' },
  { id: 'act-2', actor: 'System', action: 'refreshed semantic embeddings for', target: '124 scholarship records', timestamp: '1 hour ago' },
  { id: 'act-3', actor: 'Admin — Content', action: 'published', target: 'DAAD Helmut-Schmidt Programme', timestamp: '3 hours ago' },
  { id: 'act-4', actor: 'System', action: 'flagged a deadline change for', target: 'Chevening Scholarships', timestamp: 'Yesterday' },
];
