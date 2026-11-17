'use client';

import { useState } from 'react';
import { Icon } from '@/components/common/Icon';
import { ScholarshipCard } from '@/components/public/ScholarshipCard';
import { StudentLayout } from '@/components/layout/StudentLayout';
import { useBookmarks, useToast } from '@/components/common/AppProviders';
import { SCHOLARSHIPS } from '@/data/scholarships';

const FILTERS = [
  { id: 'all', label: 'All saved' },
  { id: 'urgent', label: 'Urgent deadlines' },
  { id: 'funded', label: 'Full funding' },
  { id: 'action', label: 'Action required' },
] as const;

export default function SavedScholarshipsPage() {
  const { savedIds } = useBookmarks();
  const { showToast } = useToast();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<string>('all');
  const [sort, setSort] = useState('deadline');

  const saved = SCHOLARSHIPS.filter((item) => savedIds.includes(item.id));
  const visible = saved.filter((item) => {
    const text = `${item.title} ${item.provider} ${item.institution} ${item.country} ${item.fieldsOfStudy.join(' ')}`.toLowerCase();
    if (query && !text.includes(query.toLowerCase())) return false;
    if (filter === 'urgent') return item.deadline <= '2026-12-01';
    if (filter === 'funded') return item.fundingType === 'Fully Funded';
    if (filter === 'action') return item.requirements.some((requirement) => requirement.status === 'unknown');
    return true;
  }).sort((a, b) => sort === 'match' ? b.semanticScore - a.semanticScore : sort === 'provider' ? a.provider.localeCompare(b.provider) : a.deadline.localeCompare(b.deadline));

  return (
    <StudentLayout>
      <div className="relative space-y-space-lg">
        <div className="absolute -right-12 -top-12 h-96 w-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none" />
        <div className="relative flex flex-col gap-space-md lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-space-xs flex items-center gap-space-xs text-secondary"><Icon name="bookmarks" className="text-lg" /><span className="font-label-sm text-label-sm font-bold uppercase tracking-widest">Curated Dossier &amp; Deadlines</span></div>
            <h1 className="font-headline-xl text-headline-xl tracking-tight text-primary">Saved Scholarships &amp; Portfolio</h1>
            <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">Track bookmarked grants, synchronized deadlines and algorithmic eligibility readiness in one scholarly dossier.</p>
          </div>
          <div className="flex flex-wrap items-center gap-space-sm self-start">
            <button type="button" onClick={() => showToast('Frontend demonstration: portfolio export is not connected.')} className="flex items-center gap-space-xs rounded-lg bg-surface-container-lowest px-space-md py-space-sm font-label-lg text-label-lg text-primary shadow-sm transition-colors hover:bg-surface-container-high"><Icon name="event_upcoming" className="text-lg text-secondary" /> Export Portfolio</button>
            <button type="button" onClick={() => showToast('Frontend demonstration: custom grants are not stored.')} className="flex items-center gap-space-xs rounded-lg bg-primary px-space-md py-space-sm font-label-lg text-label-lg text-on-primary shadow-md transition-all hover:bg-primary-container"><Icon name="add_circle" className="text-lg" /> Add Custom Grant</button>
          </div>
        </div>

        <div className="relative rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
          <div className="flex flex-col gap-space-md md:flex-row md:items-center md:justify-between">
            <div className="relative max-w-md flex-1">
              <Icon name="manage_search" className="absolute left-space-md top-1/2 -translate-y-1/2 text-lg text-on-surface-variant" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search within saved scholarships..." className="w-full rounded-lg bg-surface-container-low py-space-sm pl-10 pr-space-md font-body-sm text-body-sm text-on-surface outline-none focus:bg-surface-container-lowest" />
            </div>
            <div className="flex items-center justify-between gap-space-md md:justify-end">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Showing: <strong className="text-primary">{visible.length} Opportunities</strong></span>
              <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort saved scholarships" className="rounded-lg bg-surface-container-low px-space-sm py-2 font-label-md text-label-md text-on-surface outline-none focus:ring-2 focus:ring-primary">
                <option value="deadline">Sort: Deadline (soonest)</option>
                <option value="match">Sort: AI match score</option>
                <option value="provider">Sort: Provider</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap gap-space-xs pt-space-md">
            {FILTERS.map((item) => (
              <button key={item.id} type="button" onClick={() => setFilter(item.id)} className={`rounded-full px-space-md py-1.5 font-label-md text-label-md font-semibold transition-all ${filter === item.id ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'}`}>{item.label}</button>
            ))}
          </div>
        </div>

        <div className="relative grid grid-cols-1 gap-space-lg xl:grid-cols-12 items-start">
          <div className="space-y-space-lg xl:col-span-8">
            {visible.length === 0 ? (
              <div className="rounded-xl border border-dashed border-outline-variant bg-surface-container-lowest p-space-xl text-center">
                <Icon name="bookmark_border" className="mx-auto text-4xl text-outline" />
                <h2 className="mt-space-sm font-headline-sm text-headline-sm text-primary">No saved scholarships yet</h2>
                <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">Use the bookmark icon on any scholarship dossier to add it here.</p>
              </div>
            ) : visible.map((scholarship) => <ScholarshipCard key={scholarship.id} scholarship={scholarship} href={`/student/scholarships/${scholarship.slug}`} />)}
          </div>

          <aside className="space-y-space-lg xl:col-span-4">
            <section className="rounded-xl bg-primary-container p-space-lg text-on-primary shadow-xl">
              <Icon name="event_upcoming" className="text-2xl text-secondary-fixed" />
              <h2 className="mt-space-sm font-headline-sm text-headline-sm text-on-primary">Deadline matrix</h2>
              <div className="mt-space-md space-y-space-sm">
                {saved.slice(0, 4).map((item) => (
                  <div key={item.id} className="flex items-center justify-between gap-space-sm border-b border-on-primary/10 pb-space-xs last:border-b-0">
                    <span className="min-w-0 truncate font-body-sm text-body-sm text-on-primary">{item.title}</span>
                    <span className="shrink-0 font-label-sm text-label-sm text-secondary-fixed">{new Date(item.deadline).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</span>
                  </div>
                ))}
              </div>
            </section>
            <section className="rounded-xl border border-tertiary-container/30 bg-tertiary-fixed/10 p-space-lg">
              <Icon name="rule_folder" className="text-tertiary" />
              <h2 className="mt-space-sm font-headline-sm text-headline-sm text-primary">Readiness review</h2>
              <p className="mt-space-xs font-body-sm text-body-sm text-on-tertiary-fixed">Gold requirement markers indicate missing information. Review each dossier before an official application.</p>
            </section>
          </aside>
        </div>
      </div>
    </StudentLayout>
  );
}
