'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Icon } from '@/components/common/Icon';
import { StudentLayout } from '@/components/layout/StudentLayout';
import { useToast } from '@/components/common/AppProviders';
import { SEARCH_HISTORY } from '@/data/dashboard';
import { getScholarship } from '@/data/scholarships';

export default function SearchHistoryPage() {
  const { showToast } = useToast();
  const [entries, setEntries] = useState(SEARCH_HISTORY);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<'newest' | 'weight'>('newest');

  const visible = entries.filter((entry) => entry.query.toLowerCase().includes(query.toLowerCase())).sort((a, b) => sort === 'weight' ? b.semanticWeight - a.semanticWeight : b.createdAt.localeCompare(a.createdAt));

  return (
    <StudentLayout>
      <div className="space-y-space-lg">
        <div className="flex flex-col gap-space-md lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-space-xs flex items-center gap-space-xs text-secondary"><Icon name="manage_search" className="text-base" /><span className="font-label-sm text-label-sm font-bold uppercase tracking-widest">Inquiry Audit Trail</span><span className="text-outline-variant">•</span><span className="font-label-sm text-label-sm text-on-surface-variant">Session Ledger #8042-EV</span></div>
            <h1 className="font-headline-xl text-headline-xl font-semibold tracking-tight text-primary">Search History &amp; Discovery Queries</h1>
            <p className="mt-space-xs font-body-md text-body-md leading-relaxed text-on-surface-variant">Review previous semantic inquiries, retrieve generated shortlists, or replay queries with updated profile parameters.</p>
          </div>
          <div className="flex items-center gap-space-sm self-start">
            <span className="hidden items-center gap-space-xs rounded-full bg-secondary-container/30 px-space-md py-space-xs font-label-md text-label-md text-on-secondary-container sm:flex"><span className="h-2 w-2 animate-pulse rounded-full bg-secondary" /> Vector Index Synced</span>
            <button type="button" onClick={() => { setEntries([]); showToast('Frontend demonstration: local search history cleared.'); }} className="flex items-center gap-space-xs rounded-lg bg-surface-container-low px-space-md py-space-sm font-label-lg text-label-lg text-on-surface-variant transition-all hover:bg-surface-container-high hover:text-error"><Icon name="delete_sweep" className="text-base" /> Clear All History</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm"><p className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-on-surface-variant">Total queries run</p><div className="mt-space-xs flex items-baseline gap-space-xs"><span className="font-headline-lg text-headline-lg font-bold text-primary">{entries.length}</span><span className="font-label-md text-label-md font-semibold text-secondary">sample records</span></div></div>
          <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm"><p className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-on-surface-variant">Highest semantic weight</p><div className="mt-space-xs flex items-baseline gap-space-xs"><span className="font-headline-lg text-headline-lg font-bold text-primary">{entries.length ? Math.max(...entries.map((item) => item.semanticWeight)).toFixed(2) : '—'}</span><span className="font-label-md text-label-md font-semibold text-secondary">0–1 scale</span></div></div>
          <div className="rounded-xl bg-primary-container p-space-md text-on-primary shadow-sm"><p className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-on-primary-container">Latest discovery</p><p className="mt-space-xs truncate font-headline-sm text-headline-sm text-on-primary">{entries[0]?.query ?? 'No recent inquiries'}</p><p className="font-label-md text-label-md text-on-primary-container">Stored only in local mock data</p></div>
        </div>

        <div className="flex flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-md shadow-sm md:flex-row md:items-center md:justify-between">
          <div className="relative flex-1"><Icon name="travel_explore" className="absolute left-space-md top-1/2 -translate-y-1/2 text-xl text-on-surface-variant" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filter query history by keyword, field or target nation..." className="w-full rounded-lg bg-surface-container-low py-space-sm pl-11 pr-space-md font-body-sm text-body-sm text-on-surface shadow-inner outline-none focus:bg-surface-container-lowest" /></div>
          <button type="button" onClick={() => setSort((current) => current === 'newest' ? 'weight' : 'newest')} className="flex items-center gap-1 px-space-xs font-label-md text-label-md text-on-surface-variant hover:text-primary"><Icon name="swap_vert" className="text-base" /> {sort === 'newest' ? 'Newest First' : 'Highest Weight'}</button>
        </div>

        <div className="space-y-space-md">
          {visible.length === 0 ? (
            <div className="rounded-xl border border-dashed border-outline-variant bg-surface-container-lowest p-space-xl text-center"><Icon name="history_edu" className="mx-auto text-4xl text-outline" /><p className="mt-space-sm font-body-md text-body-md text-on-surface-variant">No matching search history.</p></div>
          ) : visible.map((entry) => (
            <article key={entry.id} className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all hover:shadow-md lg:p-space-lg">
              <div className="flex flex-col gap-space-sm lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1 space-y-space-xs">
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <span className="inline-flex items-center gap-1 rounded-full bg-secondary-container/40 px-space-sm py-0.5 font-label-sm text-label-sm font-bold text-on-secondary-container"><Icon name="auto_awesome" className="text-sm" /> AI Semantic Vector Search</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-surface-container-low px-space-sm py-0.5 font-label-sm text-label-sm text-on-surface-variant"><Icon name="schedule" className="text-sm" /> {new Date(entry.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-tertiary-container/30 px-space-sm py-0.5 font-label-sm text-label-sm font-bold text-on-tertiary-container"><Icon name="verified" className="text-sm" /> {entry.resultCount} programs identified</span>
                  </div>
                  <h2 className="font-headline-sm text-headline-sm text-primary">“{entry.query}”</h2>
                  <div className="flex flex-wrap gap-space-xs">
                    {Object.entries(entry.filters).map(([key, value]) => <span key={key} className="rounded-full border border-outline-variant px-space-sm py-0.5 font-label-sm text-label-sm text-on-surface-variant">{key}: {value}</span>)}
                  </div>
                </div>
                <div className="flex shrink-0 flex-col items-start gap-space-xs lg:items-end">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Semantic weight <strong className="text-secondary">{entry.semanticWeight.toFixed(2)}</strong></span>
                  <button type="button" onClick={() => showToast('Frontend demonstration: the saved query was replayed locally.')} className="inline-flex items-center gap-1 rounded-lg bg-surface-container px-space-sm py-2 font-label-md text-label-md text-primary hover:bg-surface-container-high"><Icon name="replay" className="text-[16px]" /> Replay query</button>
                </div>
              </div>
              <div className="mt-space-md grid grid-cols-1 gap-space-sm border-t border-outline-variant pt-space-md sm:grid-cols-2">
                {entry.topMatchIds.map((id) => {
                  const scholarship = getScholarship(id);
                  if (!scholarship) return null;
                  return <Link key={id} href={`/student/scholarships/${scholarship.slug}`} className="flex items-center justify-between gap-space-sm rounded-lg bg-surface-container-low p-space-sm transition-colors hover:bg-surface-variant"><span className="min-w-0 truncate font-body-sm text-body-sm text-on-surface">{scholarship.title}</span><span className="shrink-0 font-label-sm text-label-sm font-bold text-secondary">{scholarship.semanticScore}%</span></Link>;
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </StudentLayout>
  );
}
