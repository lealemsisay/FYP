'use client';

import Link from 'next/link';
import { Icon } from '@/components/common/Icon';
import { BookmarkButton } from '@/components/common/BookmarkButton';
import { MatchPill, ScholarshipStatusPill } from '@/components/common/StatusPill';
import { ASSETS } from '@/lib/assets';
import type { Scholarship } from '@/types';

export function ScholarshipCard({ scholarship, href, layout = 'grid' }: { scholarship: Scholarship; href: string; layout?: 'grid' | 'list' }) {
  return (
    <article className={`group relative overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest p-space-lg shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${layout === 'list' ? 'lg:flex lg:gap-space-lg' : ''}`}>
      <div className="absolute left-0 top-0 h-full w-1.5 bg-secondary" aria-hidden="true" />
      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-space-md">
          <div className="flex min-w-0 items-start gap-space-md">
            <img src={ASSETS.institutionCrest} alt={`${scholarship.provider} mark`} className="h-12 w-12 shrink-0 rounded-lg bg-surface-container-low p-1.5 object-contain" />
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-space-xs">
                <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary">{scholarship.country}</span>
                <span className="text-outline">•</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">{scholarship.degreeLevels.join(', ')}</span>
              </div>
              <Link href={href} className="mt-0.5 block font-headline-md text-headline-md text-primary transition-colors group-hover:text-secondary">{scholarship.title}</Link>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{scholarship.provider}</p>
            </div>
          </div>
          <BookmarkButton scholarshipId={scholarship.id} />
        </div>

        <div className="mt-space-md grid grid-cols-2 gap-space-sm rounded-lg bg-surface-container-low p-space-sm sm:grid-cols-3">
          <div className="px-space-xs">
            <p className="font-label-sm text-label-sm text-on-surface-variant">Award value</p>
            <p className="font-headline-sm text-headline-sm font-bold text-primary">{scholarship.awardAmount}</p>
          </div>
          <div className="px-space-xs">
            <p className="font-label-sm text-label-sm text-on-surface-variant">Deadline</p>
            <p className="font-headline-sm text-headline-sm font-bold text-primary">{new Date(scholarship.deadline).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
          </div>
          <div className="px-space-xs">
            <p className="font-label-sm text-label-sm text-on-surface-variant">Semantic match</p>
            <MatchPill score={scholarship.semanticScore} />
          </div>
        </div>

        <p className="mt-space-md line-clamp-2 font-body-sm text-body-sm text-on-surface-variant">{scholarship.description}</p>

        <div className="mt-space-md flex flex-wrap items-center gap-space-xs">
          {scholarship.fieldsOfStudy.slice(0, 3).map((field) => (
            <span key={field} className="rounded-full border border-outline-variant px-space-sm py-0.5 font-label-sm text-label-sm text-on-surface-variant">{field}</span>
          ))}
        </div>

        <div className="mt-space-md flex flex-wrap items-center justify-between gap-space-sm border-t border-outline-variant pt-space-md">
          <div className="flex items-center gap-space-xs">
            <ScholarshipStatusPill status={scholarship.status} />
            {scholarship.verified ? <span className="font-label-sm text-label-sm text-secondary"><Icon name="verified" className="text-[14px]" /> Verified</span> : null}
          </div>
          <Link href={href} className="inline-flex items-center gap-1 font-label-md text-label-md font-bold text-secondary transition-colors hover:text-primary">View dossier <Icon name="arrow_forward" className="text-[16px]" /></Link>
        </div>
      </div>
    </article>
  );
}
