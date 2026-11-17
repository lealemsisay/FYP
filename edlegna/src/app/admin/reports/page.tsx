'use client';

import { Icon } from '@/components/common/Icon';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { AdminPageHeader, AdminSection, AdminStatCard } from '@/components/admin/AdminBits';
import { useToast } from '@/components/common/AppProviders';

const REPORTS = [
  { id: 'rep-1', title: 'Scholarship directory audit', period: 'November 2026', format: 'PDF', status: 'Ready', icon: 'library_books' },
  { id: 'rep-2', title: 'Eligibility verification log', period: 'Q4 2026', format: 'CSV', status: 'Ready', icon: 'rule_folder' },
  { id: 'rep-3', title: 'Semantic recommendation transparency', period: 'October 2026', format: 'PDF', status: 'Ready', icon: 'psychology' },
  { id: 'rep-4', title: 'Scholar dossier compliance summary', period: 'November 2026', format: 'XLSX', status: 'Processing', icon: 'school' },
  { id: 'rep-5', title: 'Deadline change history', period: 'Academic year 2026/27', format: 'CSV', status: 'Ready', icon: 'event_upcoming' },
];

export default function ReportsPage() {
  const { showToast } = useToast();

  return (
    <AdminLayout>
      <div className="space-y-space-lg">
        <AdminPageHeader eyebrow="Governance" title="Reports & Compliance" description="Generate audit-ready summaries of registry changes, verification decisions and recommendation transparency." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          <AdminStatCard label="Available reports" value="12" icon="description" tone="primary" />
          <AdminStatCard label="Verified records" value="118" icon="verified_user" tone="secondary" note="Of 124 total" />
          <AdminStatCard label="Pending review" value="6" icon="schedule" tone="tertiary" />
          <AdminStatCard label="Audit exceptions" value="0" icon="gpp_good" tone="neutral" note="Current reporting period" />
        </div>

        <AdminSection title="Report library">
          <div className="space-y-space-sm">
            {REPORTS.map((report) => (
              <div key={report.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md rounded-lg border border-outline-variant p-space-md">
                <div className="flex items-start gap-space-sm">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-fixed/50 text-primary"><Icon name={report.icon} /></span>
                  <div>
                    <p className="font-label-md text-label-md font-semibold text-on-surface">{report.title}</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{report.period} · {report.format}</p>
                  </div>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className={`rounded-full px-space-sm py-0.5 font-label-sm text-label-sm font-bold ${report.status === 'Ready' ? 'bg-secondary-container text-on-secondary-container' : 'bg-tertiary-fixed/30 text-tertiary'}`}>{report.status}</span>
                  <button type="button" onClick={() => showToast(`Frontend demonstration: ${report.title} download is not connected.`)} className="inline-flex items-center gap-1 rounded-lg bg-surface-container px-space-sm py-2 font-label-md text-label-md text-primary hover:bg-surface-container-low">
                    <Icon name="download" className="text-[18px]" /> Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </AdminSection>

        <AdminSection title="Compliance posture" description="Demonstration controls aligned with the transparency rules described in the product brief.">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            {[
              { icon: 'gpp_good', title: 'Human-verified registry', text: 'No scholarship enters the public directory without source verification.' },
              { icon: 'transparency', title: 'Separated AI output', text: 'Semantic relevance is labelled distinctly from deterministic eligibility checks.' },
              { icon: 'lock', title: 'Scholar data covenant', text: 'Dossier information is not sold, commercialised or used for advertising.' },
            ].map((item) => (
              <div key={item.title} className="rounded-lg bg-surface-container-low p-space-md">
                <Icon name={item.icon} className="text-secondary" />
                <h3 className="mt-space-sm font-headline-sm text-headline-sm text-primary">{item.title}</h3>
                <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">{item.text}</p>
              </div>
            ))}
          </div>
        </AdminSection>
      </div>
    </AdminLayout>
  );
}
