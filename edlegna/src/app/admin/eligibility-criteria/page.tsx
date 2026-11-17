'use client';

import { useState } from 'react';
import { Icon } from '@/components/common/Icon';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { AdminPageHeader, AdminSection, AdminStatCard } from '@/components/admin/AdminBits';
import { useToast } from '@/components/common/AppProviders';
import { SCHOLARSHIPS } from '@/data/scholarships';

export default function EligibilityCriteriaPage() {
  const { showToast } = useToast();
  const [rules, setRules] = useState(() => SCHOLARSHIPS.flatMap((scholarship) => scholarship.requirements.slice(0, 2).map((requirement) => ({ ...requirement, scholarship: scholarship.title }))).slice(0, 10));
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? rules : rules.filter((rule) => rule.status === filter);

  return (
    <AdminLayout>
      <div className="space-y-space-lg">
        <AdminPageHeader
          eyebrow="Verification Engine"
          title="Eligibility Criteria"
          description="Manage the deterministic rules evaluated against scholar credentials. AI relevance scores are never substituted for these checks."
          actions={<button type="button" onClick={() => showToast('Frontend demonstration: rule editor is not persisted.')} className="inline-flex items-center gap-1 rounded-lg bg-primary px-space-md py-2 font-label-md text-label-md text-on-primary shadow-sm hover:bg-primary-container"><Icon name="add" className="text-[18px]" /> New rule</button>}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          <AdminStatCard label="Active rules" value={String(rules.length)} icon="rule_folder" tone="primary" note="Across 10 sample records" />
          <AdminStatCard label="Strict checks" value="6" icon="gpp_good" tone="secondary" note="Cannot be waived" />
          <AdminStatCard label="Missing-evidence rules" value="3" icon="help_outline" tone="tertiary" note="Shown in gold to scholars" />
          <AdminStatCard label="Last policy sync" value="17 Nov" icon="sync" tone="neutral" note="Frontend sample timestamp" />
        </div>
        <AdminSection title="Rule registry" description="Statuses determine how the checker presents each requirement to the scholar.">
          <div className="mb-space-md flex flex-wrap gap-space-xs">
            {[['all', 'All rules'], ['satisfied', 'Satisfied sample'], ['unknown', 'Missing evidence'], ['not-satisfied', 'Not satisfied']].map(([value, label]) => (
              <button key={value} type="button" onClick={() => setFilter(value)} className={`rounded-lg px-space-md py-2 font-label-md text-label-md transition-colors ${filter === value ? 'bg-primary text-on-primary' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'}`}>{label}</button>
            ))}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-left">
              <thead>
                <tr className="border-b border-outline-variant font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                  <th className="py-space-sm pr-space-md">Requirement</th><th className="py-space-sm pr-space-md">Scholarship</th><th className="py-space-sm pr-space-md">Status</th><th className="py-space-sm">Enabled</th>
                </tr>
              </thead>
              <tbody>
                {visible.map((rule) => (
                  <tr key={`${rule.scholarship}-${rule.id}`} className="border-b border-outline-variant last:border-b-0">
                    <td className="py-space-sm pr-space-md"><p className="font-label-md text-label-md font-semibold text-on-surface">{rule.label}</p><p className="font-body-sm text-body-sm text-on-surface-variant">{rule.rule}</p></td>
                    <td className="py-space-sm pr-space-md font-body-sm text-body-sm text-on-surface-variant">{rule.scholarship}</td>
                    <td className="py-space-sm pr-space-md"><span className={`rounded-full px-space-sm py-0.5 font-label-sm text-label-sm font-bold ${rule.status === 'satisfied' ? 'bg-primary-fixed/60 text-primary' : rule.status === 'unknown' ? 'bg-tertiary-fixed/30 text-tertiary' : 'bg-error-container text-error'}`}>{rule.status}</span></td>
                    <td className="py-space-sm"><button type="button" onClick={() => setRules((current) => current.filter((item) => item !== rule))} className="font-label-md text-label-md text-secondary hover:text-error">Remove</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AdminSection>
      </div>
    </AdminLayout>
  );
}
