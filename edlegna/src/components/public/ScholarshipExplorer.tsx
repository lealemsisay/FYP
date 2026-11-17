'use client';

import { useState } from 'react';
import { Icon } from '@/components/common/Icon';
import { Pagination } from '@/components/common/Pagination';
import { ScholarshipCard } from '@/components/public/ScholarshipCard';
import { useToast } from '@/components/common/AppProviders';
import { SCHOLARSHIPS } from '@/data/scholarships';

const PAGE_SIZE = 6;
const QUICK_SEARCHES = ['Computer Science', 'Fully Funded', 'Germany', 'Public Health', 'Masters'];

function unique(values: string[]) {
  return Array.from(new Set(values)).sort();
}

const COUNTRIES = unique(SCHOLARSHIPS.map((item) => item.country));
const LEVELS = unique(SCHOLARSHIPS.flatMap((item) => item.degreeLevels));
const FUNDING = unique(SCHOLARSHIPS.map((item) => item.fundingType));
const FIELDS = unique(SCHOLARSHIPS.flatMap((item) => item.fieldsOfStudy));

function FilterGroup({ title, icon, options, selected, onToggle }: { title: string; icon: string; options: string[]; selected: string[]; onToggle: (value: string) => void }) {
  return (
    <div className="space-y-space-sm">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-space-xs font-label-lg text-label-lg font-bold text-primary"><Icon name={icon} className="text-base text-secondary" /> {title}</h3>
        <span className="font-label-md text-label-md text-on-surface-variant">{selected.length} selected</span>
      </div>
      <div className="max-h-44 space-y-space-xs overflow-y-auto pr-1">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center justify-between rounded-lg p-2 transition-colors hover:bg-surface-container-low">
            <span className="flex items-center gap-space-sm">
              <input type="checkbox" checked={selected.includes(option)} onChange={() => onToggle(option)} className="h-4 w-4 rounded accent-primary focus:ring-primary" />
              <span className="font-body-md text-body-md text-on-surface">{option}</span>
            </span>
            <span className="rounded bg-surface-container px-2 py-0.5 font-label-md text-label-md text-on-surface-variant">{SCHOLARSHIPS.filter((item) => [item.country, ...item.degreeLevels, item.fundingType, ...item.fieldsOfStudy].includes(option)).length}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export function ScholarshipExplorer({ audience }: { audience: 'public' | 'student' }) {
  const { showToast } = useToast();
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState<string[]>([]);
  const [levels, setLevels] = useState<string[]>([]);
  const [funding, setFunding] = useState<string[]>([]);
  const [fields, setFields] = useState<string[]>([]);
  const [sort, setSort] = useState('match');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [page, setPage] = useState(1);

  const toggle = (setter: React.Dispatch<React.SetStateAction<string[]>>) => (value: string) => {
    setter((current) => current.includes(value) ? current.filter((item) => item !== value) : [...current, value]);
    setPage(1);
  };

  const results = SCHOLARSHIPS.filter((item) => {
    const haystack = [item.title, item.provider, item.institution, item.country, item.description, ...item.degreeLevels, ...item.fieldsOfStudy, item.fundingType].join(' ').toLowerCase();
    const matchesQuery = !query || haystack.includes(query.toLowerCase());
    return matchesQuery
      && (!countries.length || countries.includes(item.country))
      && (!levels.length || levels.some((level) => item.degreeLevels.includes(level)))
      && (!funding.length || funding.includes(item.fundingType))
      && (!fields.length || fields.some((field) => item.fieldsOfStudy.includes(field)));
  }).sort((a, b) => {
    if (sort === 'deadline') return a.deadline.localeCompare(b.deadline);
    if (sort === 'title') return a.title.localeCompare(b.title);
    if (sort === 'verified') return Number(b.verified) - Number(a.verified);
    return b.semanticScore - a.semanticScore;
  });

  const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visible = results.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const clearAll = () => { setQuery(''); setCountries([]); setLevels([]); setFunding([]); setFields([]); setPage(1); };
  const prefix = audience === 'public' ? '/scholarships' : '/student/scholarships';

  return (
    <div className="w-full bg-surface">
      <section className="relative overflow-hidden bg-surface-container-low py-space-xl shadow-sm">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-tertiary-fixed/15 blur-2xl pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-margin md:px-margin-tablet lg:px-margin-desktop">
          <div className="mb-space-sm flex items-center gap-space-sm">
            <span className="font-label-sm text-label-sm font-bold uppercase tracking-widest text-secondary">Scholarship Registry</span>
            <span className="text-on-surface-variant">/</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Verified Directory</span>
            <span className="ml-auto inline-flex items-center gap-space-xs rounded-full bg-surface-container px-space-sm py-0.5 font-label-md text-label-md text-on-primary-fixed-variant"><span className="h-2 w-2 animate-pulse rounded-full bg-secondary" /> Live Verified Directory</span>
          </div>
          <div className="max-w-3xl space-y-space-sm">
            <h1 className="font-display-lg text-display-lg font-bold tracking-tight text-primary">Explore Global Scholarship Opportunities</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Search verified undergraduate, master&apos;s and doctoral funding programmes with transparent eligibility and semantic fit signals.</p>
          </div>
          <form onSubmit={(event) => { event.preventDefault(); showToast(`Frontend demonstration: ${results.length} local records matched your query.`); }} className="mt-space-lg flex flex-col items-stretch rounded-xl bg-surface-container-lowest p-space-xs shadow-[0_4px_24px_rgba(31,58,48,0.06)] transition-all focus-within:shadow-[0_8px_32px_rgba(31,58,48,0.12)] md:flex-row">
            <div className="flex flex-1 items-center gap-space-sm px-space-md py-space-sm">
              <Icon name="manage_search" className="shrink-0 text-2xl text-secondary" />
              <input value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} aria-label="Natural language scholarship search" placeholder="e.g., Fully funded Master's in Computer Science in Europe..." className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none" />
            </div>
            <div className="flex items-center gap-space-xs p-space-xs">
              <button type="button" onClick={() => showToast('Frontend demonstration: the AI synthesizer model is not connected.')} className="hidden items-center gap-1.5 rounded-lg bg-surface-container px-space-md py-space-sm font-label-md text-label-md text-on-surface-variant transition-colors hover:bg-surface-variant sm:inline-flex"><Icon name="auto_awesome" className="text-base" /> AI Synthesizer</button>
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-space-xl py-space-sm font-label-lg text-label-lg text-on-primary shadow-sm transition-all hover:bg-primary-container"><span>Find Matches</span><Icon name="arrow_forward" className="text-lg" /></button>
            </div>
          </form>
          <div className="mt-space-sm flex flex-wrap items-center gap-space-xs">
            <span className="mr-1 font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Popular searches:</span>
            {QUICK_SEARCHES.map((term) => (
              <button key={term} type="button" onClick={() => { setQuery(term); setPage(1); }} className="rounded-full bg-surface-container-lowest px-space-sm py-1 font-label-md text-label-md text-on-surface-variant shadow-sm transition-colors hover:bg-surface-variant hover:text-primary">{term}</button>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-margin py-space-xl md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 gap-space-xl lg:grid-cols-12 items-start">
          <aside className="w-full space-y-space-lg lg:col-span-4">
            <div className="space-y-space-lg rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
              <div className="flex items-center justify-between border-b border-outline-variant pb-space-xs">
                <h2 className="flex items-center gap-space-xs font-headline-sm text-headline-sm text-primary"><Icon name="tune" className="text-xl text-primary" /> Filters</h2>
                <button type="button" onClick={clearAll} className="flex items-center gap-1 font-label-md text-label-md font-semibold text-secondary hover:text-primary"><Icon name="refresh" className="text-sm" /> Clear All</button>
              </div>
              <div className="space-y-space-xs rounded-lg bg-surface-container-low p-space-md">
                <div className="flex items-center justify-between"><span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary">Ethiopian Scholar Profile</span><span className="rounded-full bg-secondary px-2 py-0.5 font-label-sm text-label-sm font-bold text-on-secondary">88% Match Ready</span></div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Profile criteria configured for Graduate STEM &amp; Social Policy tracks.</p>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-container"><div className="h-full w-[88%] rounded-full bg-secondary" /></div>
              </div>
              <FilterGroup title="Study Destination" icon="public" options={COUNTRIES} selected={countries} onToggle={toggle(setCountries)} />
              <FilterGroup title="Degree Level" icon="menu_book" options={LEVELS} selected={levels} onToggle={toggle(setLevels)} />
              <FilterGroup title="Funding Type" icon="payments" options={FUNDING} selected={funding} onToggle={toggle(setFunding)} />
              <FilterGroup title="Field of Study" icon="psychology" options={FIELDS} selected={fields} onToggle={toggle(setFields)} />
            </div>
          </aside>

          <div className="lg:col-span-8">
            <div className="mb-space-md flex flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-md shadow-sm md:flex-row md:items-center md:justify-between">
              <div><p className="font-headline-sm text-headline-sm text-primary">Verified results</p><p className="font-body-sm text-body-sm text-on-surface-variant">{results.length} opportunities match the current criteria</p></div>
              <div className="flex flex-wrap items-center gap-space-xs">
                <select value={sort} onChange={(event) => { setSort(event.target.value); setPage(1); }} aria-label="Sort scholarships" className="rounded-lg bg-surface-container-low px-space-sm py-2 font-label-md text-label-md text-on-surface outline-none focus:ring-2 focus:ring-primary">
                  <option value="match">Sort: AI Match Score</option>
                  <option value="deadline">Sort: Deadline</option>
                  <option value="title">Sort: Title</option>
                  <option value="verified">Sort: Verified first</option>
                </select>
                <div className="flex overflow-hidden rounded-lg border border-outline-variant">
                  <button type="button" onClick={() => setView('grid')} aria-label="Grid view" className={`flex h-9 w-9 items-center justify-center ${view === 'grid' ? 'bg-primary text-on-primary' : 'bg-surface-container-lowest text-on-surface-variant'}`}><Icon name="grid_view" className="text-[18px]" /></button>
                  <button type="button" onClick={() => setView('list')} aria-label="List view" className={`flex h-9 w-9 items-center justify-center ${view === 'list' ? 'bg-primary text-on-primary' : 'bg-surface-container-lowest text-on-surface-variant'}`}><Icon name="view_list" className="text-[18px]" /></button>
                </div>
              </div>
            </div>

            {visible.length === 0 ? (
              <div className="rounded-xl border border-dashed border-outline-variant bg-surface-container-lowest p-space-xl text-center">
                <Icon name="search_off" className="mx-auto text-4xl text-outline" />
                <h2 className="mt-space-sm font-headline-sm text-headline-sm text-primary">No opportunities matched</h2>
                <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">Try removing a filter or using a broader search term.</p>
                <button type="button" onClick={clearAll} className="mt-space-md rounded-lg bg-primary px-space-md py-2 font-label-md text-label-md text-on-primary">Clear all filters</button>
              </div>
            ) : (
              <div className={view === 'grid' ? 'grid grid-cols-1 xl:grid-cols-2 gap-space-md' : 'flex flex-col gap-space-md'}>
                {visible.map((scholarship) => <ScholarshipCard key={scholarship.id} scholarship={scholarship} href={`${prefix}/${scholarship.slug}`} layout={view} />)}
              </div>
            )}

            {totalPages > 1 ? <div className="mt-space-lg"><Pagination page={currentPage} totalPages={totalPages} onChange={setPage} /></div> : null}
            <p className="mt-space-md text-center font-body-sm text-body-sm text-on-surface-variant">Showing page {currentPage} of {totalPages} · all scores are illustrative frontend data.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
