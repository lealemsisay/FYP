'use client';

import { useState } from 'react';
import { Icon } from '@/components/common/Icon';
import { RequirementPill } from '@/components/common/StatusPill';
import { StudentLayout } from '@/components/layout/StudentLayout';
import { useToast } from '@/components/common/AppProviders';
import { SCHOLARSHIPS, demoEligibilityFor } from '@/data/scholarships';

export default function EligibilityPage() {
  const { showToast } = useToast();
  const [selectedId, setSelectedId] = useState(SCHOLARSHIPS[0].id);
  const scholarship = SCHOLARSHIPS.find((item) => item.id === selectedId) ?? SCHOLARSHIPS[0];
  const result = demoEligibilityFor(scholarship);
  const satisfied = result.satisfiedCount;
  const missing = result.requirements.filter((item) => item.status === 'unknown').length;
  const failed = result.requirements.filter((item) => item.status === 'not-satisfied').length;

  return (
    <StudentLayout>
      <div className="space-y-space-lg">
        <div className="flex flex-col gap-space-md lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-space-xs flex items-center gap-space-xs text-secondary"><Icon name="rule_folder" className="text-lg" /><span className="font-label-sm text-label-sm font-bold uppercase tracking-widest">Deterministic Verification</span></div>
            <h1 className="font-headline-xl text-headline-xl tracking-tight text-primary">Eligibility Checker</h1>
            <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">Published rules are compared against sample credential values. This is demonstration data only, not a real scholarship evaluation.</p>
          </div>
          <button type="button" onClick={() => showToast('Frontend demonstration: no real verification request was sent.')} className="inline-flex items-center gap-space-xs self-start rounded-lg bg-primary px-space-md py-space-sm font-label-lg text-label-lg text-on-primary shadow-md transition-all hover:bg-primary-container"><Icon name="fact_check" className="text-[18px]" /> Run demo check</button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
          <div className="xl:col-span-4 space-y-space-lg">
            <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-lg shadow-sm">
              <h2 className="font-headline-sm text-headline-sm text-primary">Select an opportunity</h2>
              <label htmlFor="eligibility-scholarship" className="mt-space-md block font-label-md text-label-md font-semibold text-on-surface">Scholarship dossier</label>
              <select id="eligibility-scholarship" value={selectedId} onChange={(event) => setSelectedId(event.target.value)} className="mt-space-xs w-full rounded-lg bg-surface-container-low px-space-md py-2.5 font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                {SCHOLARSHIPS.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
              </select>
              <div className="mt-space-md space-y-space-xs">
                {[
                  { label: 'Satisfied', value: satisfied, color: 'bg-primary', text: 'text-primary' },
                  { label: 'Information missing', value: missing, color: 'bg-tertiary-container', text: 'text-tertiary' },
                  { label: 'Not satisfied', value: failed, color: 'bg-error', text: 'text-error' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-lg bg-surface-container-low p-space-sm">
                    <span className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface"><span className={`h-2.5 w-2.5 rounded-full ${item.color}`} /> {item.label}</span>
                    <span className={`font-headline-sm text-headline-sm ${item.text}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-tertiary-container/30 bg-tertiary-fixed/10 p-space-lg">
              <Icon name="gpp_good" className="text-tertiary" />
              <h2 className="mt-space-sm font-headline-sm text-headline-sm text-primary">Status vocabulary</h2>
              <div className="mt-space-md space-y-space-sm">
                <RequirementPill status="satisfied" />
                <RequirementPill status="unknown" />
                <RequirementPill status="not-satisfied" />
              </div>
              <p className="mt-space-md font-body-sm text-body-sm text-on-tertiary-fixed">Missing information is never treated as failure. It identifies a credential you still need to supply.</p>
            </section>
          </div>

          <div className="xl:col-span-8 space-y-space-lg">
            <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-lg shadow-sm">
              <div className="flex flex-col gap-space-sm sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-headline-md text-headline-md text-primary">{scholarship.title}</h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{scholarship.provider} · {scholarship.country}</p>
                </div>
                <RequirementPill status={result.overallStatus} label={result.overallStatus === 'satisfied' ? 'All rules satisfied' : result.overallStatus === 'unknown' ? 'Information still missing' : 'One or more rules unmet'} />
              </div>
              <div className="mt-space-md h-2 w-full overflow-hidden rounded-full bg-surface-container"><div className="h-full rounded-full bg-secondary transition-all" style={{ width: `${(satisfied / result.totalCount) * 100}%` }} /></div>
              <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">{satisfied} of {result.totalCount} published requirements satisfied in this sample check.</p>
            </section>

            <section className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
              <div className="border-b border-outline-variant bg-surface-container-low px-space-lg py-space-sm"><h2 className="font-headline-sm text-headline-sm text-primary">Requirement breakdown</h2></div>
              <div className="divide-y divide-outline-variant">
                {result.requirements.map((requirement) => (
                  <article key={requirement.id} className="flex flex-col gap-space-md p-space-lg sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-xl">
                      <div className="flex flex-wrap items-center gap-space-xs"><h3 className="font-headline-sm text-headline-sm text-primary">{requirement.label}</h3><RequirementPill status={requirement.status} /></div>
                      <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Published rule:</strong> {requirement.rule}</p>
                      <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Credential compared:</strong> {requirement.credential}</p>
                      <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Evidence:</strong> {requirement.evidence}</p>
                    </div>
                    {requirement.status === 'unknown' ? (
                      <button type="button" onClick={() => showToast('Frontend demonstration: document upload is not connected.')} className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-tertiary-container/40 bg-tertiary-fixed/10 px-space-sm py-2 font-label-md text-label-md text-tertiary hover:bg-tertiary-fixed/20"><Icon name="upload_file" className="text-[16px]" /> Add evidence</button>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-error/20 bg-error-container/20 p-space-lg">
              <div className="flex items-start gap-space-sm"><Icon name="warning" className="mt-0.5 text-error" /><div><h2 className="font-headline-sm text-headline-sm text-primary">Not an official decision</h2><p className="mt-space-xs font-body-sm text-body-sm text-on-error-container">Only the donor institution can determine eligibility. Edlegna shows rule comparisons to help you prepare a complete application.</p></div></div>
            </section>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}
