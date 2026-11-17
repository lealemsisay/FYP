'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Icon } from '@/components/common/Icon';
import { useToast } from '@/components/common/AppProviders';
import type { Scholarship } from '@/types';

interface FormValues {
  title: string;
  provider: string;
  institution: string;
  country: string;
  degreeLevel: string;
  fieldOfStudy: string;
  fundingType: string;
  awardAmount: string;
  deadline: string;
  description: string;
  status: string;
}

const EMPTY: FormValues = {
  title: '',
  provider: '',
  institution: '',
  country: '',
  degreeLevel: 'Masters',
  fieldOfStudy: 'Computer Science',
  fundingType: 'Fully Funded',
  awardAmount: '',
  deadline: '',
  description: '',
  status: 'draft',
};

const FIELDS: { key: keyof FormValues; label: string; icon: string; type?: string }[] = [
  { key: 'title', label: 'Scholarship title', icon: 'title' },
  { key: 'provider', label: 'Donor / provider', icon: 'account_balance' },
  { key: 'institution', label: 'Host institution', icon: 'school' },
  { key: 'country', label: 'Destination country', icon: 'public' },
  { key: 'degreeLevel', label: 'Degree level', icon: 'menu_book' },
  { key: 'fieldOfStudy', label: 'Primary field of study', icon: 'psychology' },
  { key: 'fundingType', label: 'Funding type', icon: 'payments' },
  { key: 'awardAmount', label: 'Award amount', icon: 'monetization_on' },
  { key: 'deadline', label: 'Application deadline', icon: 'event', type: 'date' },
];

export function ScholarshipEditor({ mode, scholarship }: { mode: 'create' | 'edit'; scholarship?: Scholarship }) {
  const { showToast } = useToast();
  const [values, setValues] = useState<FormValues>(() => scholarship ? {
    title: scholarship.title,
    provider: scholarship.provider,
    institution: scholarship.institution,
    country: scholarship.country,
    degreeLevel: scholarship.degreeLevels[0] ?? 'Masters',
    fieldOfStudy: scholarship.fieldsOfStudy[0] ?? 'Computer Science',
    fundingType: scholarship.fundingType,
    awardAmount: scholarship.awardAmount,
    deadline: scholarship.deadline,
    description: scholarship.description,
    status: scholarship.status,
  } : EMPTY);
  const [criteria, setCriteria] = useState(['Academic excellence in a relevant field', 'Valid nationality for the destination programme']);

  const set = (key: keyof FormValues) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setValues((current) => ({ ...current, [key]: event.target.value }));

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!values.title || !values.provider || !values.deadline) {
      showToast('Title, provider and deadline are required.');
      return;
    }
    showToast(`Frontend demonstration: scholarship ${mode === 'create' ? 'created' : 'updated'} locally only.`);
  };

  return (
    <form onSubmit={submit} className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
      <div className="xl:col-span-8 space-y-space-lg">
        <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-lg shadow-sm">
          <h2 className="font-headline-sm text-headline-sm text-primary">Core dossier information</h2>
          <div className="mt-space-md grid grid-cols-1 md:grid-cols-2 gap-space-md">
            {FIELDS.map((field) => (
              <div key={field.key} className="space-y-1">
                <label htmlFor={`f-${field.key}`} className="font-label-md text-label-md font-semibold text-on-surface">{field.label}</label>
                <div className="relative flex items-center">
                  <Icon name={field.icon} className="absolute left-3 text-outline text-[19px] pointer-events-none" />
                  <input id={`f-${field.key}`} type={field.type ?? 'text'} value={values[field.key]} onChange={set(field.key)} className="w-full rounded-lg bg-surface-container-low py-2.5 pl-10 pr-space-md font-body-sm text-body-sm text-on-surface shadow-inner focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-space-md space-y-1">
            <label htmlFor="f-description" className="font-label-md text-label-md font-semibold text-on-surface">Public description</label>
            <textarea id="f-description" rows={5} value={values.description} onChange={set('description')} className="w-full rounded-lg bg-surface-container-low p-space-md font-body-sm text-body-sm text-on-surface shadow-inner focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Describe the opportunity for scholars." />
          </div>
        </section>

        <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-headline-sm text-headline-sm text-primary">Eligibility criteria</h2>
              <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">Each criterion will be verified deterministically against scholar credentials.</p>
            </div>
            <button type="button" onClick={() => setCriteria((current) => [...current, ''])} className="inline-flex items-center gap-1 rounded-lg border border-outline-variant px-space-sm py-2 font-label-md text-label-md text-secondary hover:bg-surface-container-low">
              <Icon name="add" className="text-[18px]" /> Add rule
            </button>
          </div>
          <div className="mt-space-md space-y-space-sm">
            {criteria.map((criterion, index) => (
              <div key={index} className="flex items-center gap-space-sm">
                <span className="font-label-md text-label-md text-outline">{String(index + 1).padStart(2, '0')}</span>
                <input value={criterion} onChange={(event) => setCriteria((current) => current.map((item, position) => position === index ? event.target.value : item))} className="flex-1 rounded-lg bg-surface-container-low px-space-md py-2.5 font-body-sm text-body-sm text-on-surface shadow-inner focus:outline-none focus:ring-2 focus:ring-primary" />
                <button type="button" aria-label="Remove rule" onClick={() => setCriteria((current) => current.filter((_, position) => position !== index))} className="text-outline hover:text-error"><Icon name="delete_outline" /></button>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="xl:col-span-4 space-y-space-lg">
        <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-lg shadow-sm">
          <h2 className="font-headline-sm text-headline-sm text-primary">Publication</h2>
          <div className="mt-space-md space-y-1">
            <label htmlFor="f-status" className="font-label-md text-label-md font-semibold text-on-surface">Status</label>
            <select id="f-status" value={values.status} onChange={set('status')} className="w-full rounded-lg bg-surface-container-low px-space-md py-2.5 font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="draft">Draft — not visible</option>
              <option value="active">Active — live in directory</option>
              <option value="closed">Closed — retains audit record</option>
              <option value="archived">Archived</option>
            </select>
          </div>
          <button type="submit" className="mt-space-md w-full rounded-lg bg-primary py-2.5 font-label-lg text-label-lg text-on-primary shadow-md transition-all hover:bg-primary-container">
            {mode === 'create' ? 'Create scholarship' : 'Save changes'}
          </button>
          <Link href="/admin/scholarships" className="mt-space-sm block text-center font-label-md text-label-md text-secondary hover:text-primary">Cancel and return</Link>
        </section>
        <section className="rounded-xl border border-tertiary-container/30 bg-tertiary-fixed/10 p-space-lg">
          <Icon name="info" className="text-tertiary" />
          <h2 className="mt-space-sm font-headline-sm text-headline-sm text-primary">Verification first</h2>
          <p className="mt-space-xs font-body-sm text-body-sm text-on-tertiary-fixed">Records should only be published after donor details and eligibility rules have been checked against an official source.</p>
        </section>
      </div>
    </form>
  );
}
