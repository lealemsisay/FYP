'use client';

import Link from 'next/link';
import { Icon } from '@/components/common/Icon';
import { BookmarkButton } from '@/components/common/BookmarkButton';
import { MatchPill, RequirementPill, ScholarshipStatusPill } from '@/components/common/StatusPill';
import { useToast } from '@/components/common/AppProviders';
import { ASSETS } from '@/lib/assets';
import { SCHOLARSHIPS } from '@/data/scholarships';
import type { Scholarship } from '@/types';

export function ScholarshipDetail({ scholarship, audience }: { scholarship: Scholarship; audience: 'public' | 'student' }) {
  const { showToast } = useToast();
  const prefix = audience === 'public' ? '/scholarships' : '/student/scholarships';
  const related = SCHOLARSHIPS.filter((item) => item.id !== scholarship.id && item.fieldsOfStudy.some((field) => scholarship.fieldsOfStudy.includes(field))).slice(0, 3);

  return (
    <div className="w-full bg-surface">
      <section className="relative overflow-hidden border-b border-outline-variant bg-surface-container-low py-space-lg">
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-margin md:px-margin-tablet lg:px-margin-desktop">
          <div className="mb-space-md flex flex-wrap items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant"><Link href={prefix} className="hover:text-secondary">Scholarship registry</Link><span>/</span><span>{scholarship.country}</span><span>/</span><span className="text-primary">{scholarship.provider}</span></div>
          <div className="flex flex-col gap-space-lg lg:flex-row lg:items-start lg:justify-between">
            <div className="flex max-w-4xl items-start gap-space-md">
              <img src={ASSETS.institutionCrest} alt={`${scholarship.provider} mark`} className="h-16 w-16 shrink-0 rounded-xl bg-surface-container-lowest p-2 object-contain shadow-sm" />
              <div>
                <div className="flex flex-wrap items-center gap-space-xs"><span className="font-label-sm text-label-sm font-bold uppercase tracking-widest text-secondary">{scholarship.institution}</span><ScholarshipStatusPill status={scholarship.status} />{scholarship.verified ? <span className="font-label-sm text-label-sm text-primary"><Icon name="verified" className="text-[14px]" /> Source verified</span> : null}</div>
                <h1 className="mt-space-xs font-headline-xl text-headline-xl tracking-tight text-primary">{scholarship.title}</h1>
                <p className="mt-space-sm max-w-3xl font-body-md text-body-md text-on-surface-variant">{scholarship.description}</p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-space-xs">
              <BookmarkButton scholarshipId={scholarship.id} variant="full" />
              <button type="button" onClick={() => showToast('Frontend demonstration: share link copied locally.')} aria-label="Share scholarship" className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant transition-colors hover:border-primary hover:text-primary"><Icon name="share" /></button>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-margin py-space-xl md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 gap-space-xl lg:grid-cols-12 items-start">
          <div className="space-y-space-lg lg:col-span-8">
            <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-lg shadow-sm">
              <h2 className="font-headline-md text-headline-md text-primary">Opportunity overview</h2>
              <p className="mt-space-md font-body-md text-body-md leading-relaxed text-on-surface-variant">{scholarship.description}</p>
              <div className="mt-space-md grid grid-cols-1 gap-space-sm sm:grid-cols-3">
                {[
                  ['Level', scholarship.degreeLevels.join(', ')],
                  ['Fields', scholarship.fieldsOfStudy.join(', ')],
                  ['Funding', scholarship.fundingType],
                ].map(([label, value]) => <div key={label} className="rounded-lg bg-surface-container-low p-space-sm"><p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">{label}</p><p className="mt-1 font-label-md text-label-md font-semibold text-on-surface">{value}</p></div>)}
              </div>
            </section>

            <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-lg shadow-sm">
              <h2 className="font-headline-md text-headline-md text-primary">Benefits</h2>
              <div className="mt-space-md grid grid-cols-1 gap-space-sm sm:grid-cols-2">
                {scholarship.benefits.map((benefit) => <div key={benefit} className="flex items-start gap-space-xs rounded-lg bg-surface-container-low p-space-sm"><Icon name="check_circle" className="mt-0.5 shrink-0 text-primary" filled /><span className="font-body-sm text-body-sm text-on-surface">{benefit}</span></div>)}
              </div>
            </section>

            <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-lg shadow-sm">
              <div className="flex items-center gap-space-sm"><span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-fixed/50 text-primary"><Icon name="rule_folder" /></span><div><h2 className="font-headline-md text-headline-md text-primary">Deterministic eligibility rules</h2><p className="font-body-sm text-body-sm text-on-surface-variant">Sample comparison against the current scholar dossier.</p></div></div>
              <div className="mt-space-md divide-y divide-outline-variant">
                {scholarship.requirements.map((requirement) => (
                  <div key={requirement.id} className="py-space-md">
                    <div className="flex flex-wrap items-center justify-between gap-space-xs"><h3 className="font-headline-sm text-headline-sm text-primary">{requirement.label}</h3><RequirementPill status={requirement.status} /></div>
                    <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">{requirement.rule}</p>
                    <p className="mt-space-xs font-body-sm text-body-sm text-on-surface"><strong>Credential compared:</strong> {requirement.credential}</p>
                    <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">Evidence: {requirement.evidence}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-lg shadow-sm">
              <h2 className="font-headline-md text-headline-md text-primary">Application documents</h2>
              <ul className="mt-space-md grid grid-cols-1 gap-space-sm sm:grid-cols-2">
                {scholarship.documents.map((document) => <li key={document.id} className="flex items-center gap-space-xs rounded-lg bg-surface-container-low p-space-sm font-body-sm text-body-sm text-on-surface"><Icon name={document.required ? 'check_circle' : 'info'} className={document.required ? 'text-primary' : 'text-outline'} /> {document.label}{document.required ? '' : ' (optional)'}</li>)}
              </ul>
            </section>
          </div>

          <aside className="space-y-space-lg lg:col-span-4">
            <section className="sticky top-24 space-y-space-lg">
              <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-lg shadow-md">
                <h2 className="font-headline-sm text-headline-sm text-primary">Application snapshot</h2>
                <div className="mt-space-md space-y-space-sm">
                  <div className="flex items-center justify-between border-b border-outline-variant pb-space-sm"><span className="font-body-sm text-body-sm text-on-surface-variant">Award value</span><span className="font-headline-sm text-headline-sm font-bold text-primary">{scholarship.awardAmount}</span></div>
                  <div className="flex items-center justify-between border-b border-outline-variant pb-space-sm"><span className="font-body-sm text-body-sm text-on-surface-variant">Deadline</span><span className="font-label-md text-label-md font-semibold text-on-surface">{new Date(scholarship.deadline).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span></div>
                  <div className="flex items-center justify-between"><span className="font-body-sm text-body-sm text-on-surface-variant">AI relevance</span><MatchPill score={scholarship.semanticScore} /></div>
                </div>
                <button type="button" onClick={() => showToast('Frontend demonstration: no external application form was opened.')} className="mt-space-md flex w-full items-center justify-center gap-space-xs rounded-lg bg-primary px-space-md py-3 font-label-lg text-label-lg text-on-primary shadow-md transition-all hover:bg-primary-container">Apply on official site <Icon name="open_in_new" className="text-[18px]" /></button>
                <p className="mt-space-xs text-center font-body-sm text-body-sm text-on-surface-variant">Applications are submitted only on donor systems.</p>
              </div>

              <div className="rounded-xl border border-secondary/30 bg-secondary/5 p-space-lg">
                <Icon name="psychology" className="text-secondary" filled />
                <h2 className="mt-space-sm font-headline-sm text-headline-sm text-primary">Why this appeared for you</h2>
                <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">{scholarship.embeddedReason}</p>
                <p className="mt-space-xs font-label-sm text-label-sm uppercase tracking-wider text-secondary">AI semantic relevance — illustrative</p>
              </div>
            </section>
          </aside>
        </div>

        {related.length ? (
          <section className="mt-space-xl border-t border-outline-variant pt-space-lg">
            <h2 className="font-headline-md text-headline-md text-primary">Related opportunities</h2>
            <div className="mt-space-md grid grid-cols-1 gap-space-sm md:grid-cols-3">
              {related.map((item) => <Link key={item.id} href={`${prefix}/${item.slug}`} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-space-md transition-all hover:border-primary hover:shadow-sm"><p className="font-headline-sm text-headline-sm text-primary">{item.title}</p><p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">{item.provider} · {item.country}</p><p className="mt-space-xs font-label-sm text-label-sm font-bold text-secondary">{item.semanticScore}% match</p></Link>)}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
