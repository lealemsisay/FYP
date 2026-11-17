'use client';

import { useState } from 'react';
import { Icon } from '@/components/common/Icon';
import { StudentLayout } from '@/components/layout/StudentLayout';
import { useToast } from '@/components/common/AppProviders';
import { STUDENT_PROFILE } from '@/data/students';
import { ASSETS } from '@/lib/assets';

const DOCUMENTS = [
  { id: 'doc1', label: 'Degree certificate', status: 'verified', detail: 'Uploaded 14 Oct 2026' },
  { id: 'doc2', label: 'Official transcript', status: 'verified', detail: 'Uploaded 14 Oct 2026' },
  { id: 'doc3', label: 'English test report', status: 'missing', detail: 'Required by 3 shortlisted opportunities' },
  { id: 'doc4', label: 'National identification', status: 'verified', detail: 'Uploaded 12 Oct 2026' },
  { id: 'doc5', label: 'Academic references', status: 'pending', detail: 'Awaiting referee confirmation' },
];

const FIELDS = [
  { key: 'fullName', label: 'Full Name', icon: 'person' },
  { key: 'academicId', label: 'Student ID', icon: 'badge' },
  { key: 'university', label: 'University', icon: 'account_balance' },
  { key: 'department', label: 'Department', icon: 'school' },
  { key: 'degreeLevel', label: 'Degree Level', icon: 'menu_book' },
  { key: 'country', label: 'Country of Citizenship', icon: 'public' },
  { key: 'fieldOfStudy', label: 'Primary Field of Study', icon: 'psychology' },
] as const;

export default function StudentProfilePage() {
  const { showToast } = useToast();
  const [profile, setProfile] = useState({ ...STUDENT_PROFILE });
  const [gpa, setGpa] = useState(STUDENT_PROFILE.gpa.toFixed(2));

  const setField = (key: (typeof FIELDS)[number]['key'], value: string) => setProfile((current) => ({ ...current, [key]: value }));
  const completion = Math.min(100, 84 + (gpa ? 6 : 0) + (profile.fieldOfStudy ? 4 : 0));

  return (
    <StudentLayout>
      <div className="space-y-space-lg">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Scholar Dossier</span>
            <h1 className="mt-1 font-headline-xl text-headline-xl text-primary tracking-tight">My Profile</h1>
            <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">Keep your academic record current so recommendations and eligibility checks remain accurate.</p>
          </div>
          <button type="button" onClick={() => showToast('Frontend demonstration: profile changes were not persisted.')} className="inline-flex items-center justify-center gap-space-xs self-start rounded-lg bg-primary px-space-xl py-space-sm font-label-lg text-label-lg text-on-primary shadow-md transition-all hover:bg-primary-container">
            <Icon name="save" className="text-[18px]" /> Save changes
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
          <div className="xl:col-span-4 space-y-space-lg">
            <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-lg shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <img src={ASSETS.portraitPlaceholder} alt="Scholar profile portrait" className="h-28 w-28 rounded-full object-cover shadow-md ring-4 ring-primary-fixed/40" />
                  <button type="button" onClick={() => showToast('Frontend demonstration: avatar upload is not connected.')} aria-label="Change portrait" className="absolute bottom-0 right-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-on-secondary shadow-md transition-transform hover:scale-105">
                    <Icon name="photo_camera" className="text-[18px]" />
                  </button>
                </div>
                <h2 className="mt-space-md font-headline-md text-headline-md text-primary">{profile.fullName}</h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{profile.university}</p>
                <span className="mt-space-sm rounded-full border border-tertiary-container/30 bg-tertiary-fixed/20 px-space-sm py-0.5 font-label-sm text-label-sm font-bold text-tertiary">{profile.academicId}</span>
              </div>
              <div className="mt-space-lg border-t border-outline-variant pt-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">Dossier calibration</span>
                  <span className="font-headline-sm text-headline-sm text-primary">{completion}%</span>
                </div>
                <div className="mt-space-xs h-2 w-full overflow-hidden rounded-full bg-surface-container">
                  <div className="h-full rounded-full bg-secondary transition-all" style={{ width: `${completion}%` }} />
                </div>
                <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">Add your English test report to reach 100% calibration.</p>
              </div>
            </section>

            <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-lg shadow-sm">
              <h2 className="font-headline-sm text-headline-sm text-primary">Academic documents</h2>
              <div className="mt-space-md space-y-space-sm">
                {DOCUMENTS.map((doc) => (
                  <div key={doc.id} className="flex items-start gap-space-sm rounded-lg border border-outline-variant p-space-sm">
                    <span className={`mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                      doc.status === 'verified' ? 'bg-primary-fixed/60 text-primary' : doc.status === 'pending' ? 'bg-tertiary-fixed/30 text-tertiary' : 'bg-error-container text-error'
                    }`}>
                      <Icon name={doc.status === 'verified' ? 'check' : doc.status === 'pending' ? 'schedule' : 'upload_file'} className="text-[16px]" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-label-md text-label-md font-semibold text-on-surface">{doc.label}</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">{doc.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button type="button" onClick={() => showToast('Frontend demonstration: document upload is not connected.')} className="mt-space-md w-full rounded-lg border border-dashed border-outline-variant py-space-sm font-label-md text-label-md text-secondary transition-colors hover:bg-surface-container-low">
                + Upload document
              </button>
            </section>
          </div>

          <div className="xl:col-span-8 space-y-space-lg">
            <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-lg shadow-sm">
              <div className="flex items-center gap-space-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-fixed/50 text-primary"><Icon name="person_outline" /></span>
                <div>
                  <h2 className="font-headline-sm text-headline-sm text-primary">Personal and academic information</h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Fields marked in gold strengthen eligibility verification.</p>
                </div>
              </div>
              <div className="mt-space-lg grid grid-cols-1 md:grid-cols-2 gap-space-md">
                {FIELDS.map((field) => (
                  <div key={field.key} className="space-y-1">
                    <label htmlFor={`field-${field.key}`} className="font-label-md text-label-md font-semibold text-on-surface">{field.label}</label>
                    <div className="relative flex items-center">
                      <Icon name={field.icon} className="absolute left-3 text-outline text-[19px] pointer-events-none" />
                      <input
                        id={`field-${field.key}`}
                        value={profile[field.key]}
                        onChange={(event) => setField(field.key, event.target.value)}
                        className="w-full rounded-lg bg-surface-container-low py-2.5 pl-10 pr-space-md font-body-sm text-body-sm text-on-surface shadow-inner focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                ))}
                <div className="space-y-1">
                  <label htmlFor="gpa" className="font-label-md text-label-md font-semibold text-on-surface">Cumulative GPA</label>
                  <div className="relative flex items-center">
                    <Icon name="grading" className="absolute left-3 text-outline text-[19px] pointer-events-none" />
                    <input id="gpa" value={gpa} onChange={(event) => setGpa(event.target.value)} inputMode="decimal" className="w-full rounded-lg bg-surface-container-low py-2.5 pl-10 pr-space-md font-body-sm text-body-sm text-on-surface shadow-inner focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="graduation" className="font-label-md text-label-md font-semibold text-on-surface">Graduation Year</label>
                  <div className="relative flex items-center">
                    <Icon name="calendar_today" className="absolute left-3 text-outline text-[19px] pointer-events-none" />
                    <input id="graduation" type="number" value={profile.graduationYear} onChange={(event) => setProfile((current) => ({ ...current, graduationYear: Number(event.target.value) }))} className="w-full rounded-lg bg-surface-container-low py-2.5 pl-10 pr-space-md font-body-sm text-body-sm text-on-surface shadow-inner focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-xl border border-tertiary-container/30 bg-tertiary-fixed/10 p-space-lg">
              <div className="flex items-start gap-space-sm">
                <Icon name="info" className="mt-0.5 shrink-0 text-tertiary" />
                <div>
                  <h2 className="font-headline-sm text-headline-sm text-primary">Why completeness matters</h2>
                  <p className="mt-space-xs font-body-sm text-body-sm text-on-tertiary-fixed">Deterministic eligibility checks can only evaluate credentials that are present. Missing values appear in gold rather than being treated as a failed requirement.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}
