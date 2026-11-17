'use client';

import { useState } from 'react';
import { Icon } from '@/components/common/Icon';
import { ScholarshipCard } from '@/components/public/ScholarshipCard';
import { StudentLayout } from '@/components/layout/StudentLayout';
import { useToast } from '@/components/common/AppProviders';
import { SCHOLARSHIPS } from '@/data/scholarships';

const BANDS = [
  { id: 'all', label: 'All recommendations', min: 0 },
  { id: 'high', label: 'High match (90%+)', min: 90 },
  { id: 'strong', label: 'Strong match (80%+)', min: 80 },
  { id: 'explore', label: 'Explore (below 80%)', min: 0, max: 80 },
];

export default function RecommendationsPage() {
  const { showToast } = useToast();
  const [band, setBand] = useState('all');
  const [savedOnly, setSavedOnly] = useState(false);
  const selected = BANDS.find((item) => item.id === band) ?? BANDS[0];
  const visible = [...SCHOLARSHIPS]
    .filter((item) => item.semanticScore >= selected.min && (!('max' in selected) || item.semanticScore < (selected.max ?? 101)))
    .sort((a, b) => b.semanticScore - a.semanticScore);

  return (
    <StudentLayout>
      <div className="space-y-space-lg">
        <div className="flex flex-col gap-space-md lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-space-xs flex items-center gap-space-xs text-secondary"><Icon name="auto_awesome" filled className="text-lg" /><span className="font-label-sm text-label-sm font-bold uppercase tracking-widest">AI Semantic Relevance</span></div>
            <h1 className="font-headline-xl text-headline-xl tracking-tight text-primary">Your Recommendation Portfolio</h1>
            <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">Scores reflect illustrative contextual alignment between your sample dossier and each opportunity narrative. They are not eligibility decisions.</p>
          </div>
          <button type="button" onClick={() => showToast('Frontend demonstration: no new semantic request was sent.')} className="inline-flex items-center gap-space-xs self-start rounded-lg bg-primary px-space-md py-space-sm font-label-lg text-label-lg text-on-primary shadow-md transition-all hover:bg-primary-container"><Icon name="refresh" className="text-[18px]" /> Refresh matches</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
          <div className="rounded-xl border border-secondary/30 bg-secondary/5 p-space-md"><p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">High match</p><p className="mt-space-xs font-headline-lg text-headline-lg text-primary">{SCHOLARSHIPS.filter((item) => item.semanticScore >= 90).length}</p><p className="font-body-sm text-body-sm text-on-surface-variant">Scores at or above 90%</p></div>
          <div className="rounded-xl border border-primary/20 bg-primary-fixed/20 p-space-md"><p className="font-label-sm text-label-sm uppercase tracking-wider text-primary">Average score</p><p className="mt-space-xs font-headline-lg text-headline-lg text-primary">{Math.round(SCHOLARSHIPS.reduce((sum, item) => sum + item.semanticScore, 0) / SCHOLARSHIPS.length)}%</p><p className="font-body-sm text-body-sm text-on-surface-variant">Across {SCHOLARSHIPS.length} sample records</p></div>
          <div className="rounded-xl border border-tertiary-container/30 bg-tertiary-fixed/10 p-space-md"><p className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary">Eligibility checks</p><p className="mt-space-xs font-headline-lg text-headline-lg text-primary">Separate</p><p className="font-body-sm text-body-sm text-on-surface-variant">Never inferred from semantic score</p></div>
        </div>

        <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
          <div className="flex flex-wrap items-center gap-space-xs">
            {BANDS.map((item) => (
              <button key={item.id} type="button" onClick={() => setBand(item.id)} className={`rounded-full px-space-md py-1.5 font-label-md text-label-md font-semibold transition-all ${band === item.id ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'}`}>{item.label}</button>
            ))}
            <label className="ml-auto flex cursor-pointer items-center gap-space-xs font-label-md text-label-md text-on-surface-variant"><input type="checkbox" checked={savedOnly} onChange={(event) => setSavedOnly(event.target.checked)} className="h-4 w-4 accent-primary" /> Show only saved</label>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-space-md xl:grid-cols-2">
          {visible.length === 0 ? <div className="rounded-xl border border-dashed border-outline-variant p-space-xl text-center xl:col-span-2"><Icon name="auto_awesome" className="mx-auto text-4xl text-outline" /><p className="mt-space-sm font-body-md text-body-md text-on-surface-variant">No recommendations in this score band.</p></div> : visible.map((scholarship) => (
            <div key={scholarship.id} className={savedOnly && !['sch-001', 'sch-002', 'sch-003', 'sch-006'].includes(scholarship.id) ? 'hidden' : ''}>
              <ScholarshipCard scholarship={scholarship} href={`/student/scholarships/${scholarship.slug}`} />
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-tertiary-container/30 bg-tertiary-fixed/10 p-space-lg">
          <div className="flex items-start gap-space-sm"><Icon name="info" className="mt-0.5 text-tertiary" /><div><h2 className="font-headline-sm text-headline-sm text-primary">How to read these scores</h2><p className="mt-space-xs font-body-sm text-body-sm text-on-tertiary-fixed">Semantic relevance answers “how closely does this opportunity fit your profile?” Open each dossier to review the separate deterministic eligibility breakdown before applying.</p></div></div>
        </div>
      </div>
    </StudentLayout>
  );
}
