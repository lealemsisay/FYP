'use client';

import { useState } from 'react';
import { Icon } from '@/components/common/Icon';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { AdminPageHeader, AdminSection, AdminStatCard, SwitchRow } from '@/components/admin/AdminBits';
import { useToast } from '@/components/common/AppProviders';

export default function AdminSettingsPage() {
  const { showToast } = useToast();
  const [settings, setSettings] = useState({ autoFlag: true, humanReview: true, embeddings: true, weeklyReports: false, emailAlerts: true, auditLog: true });
  const [threshold, setThreshold] = useState(90);
  const [semanticWeight, setSemanticWeight] = useState(65);
  const toggle = (key: keyof typeof settings) => () => setSettings((current) => ({ ...current, [key]: !current[key] }));

  return (
    <AdminLayout>
      <div className="space-y-space-lg">
        <AdminPageHeader
          eyebrow="Platform Governance"
          title="System Settings"
          description="Configure verification policy, semantic matching parameters and administrative alerts for this frontend demonstration."
          actions={<button type="button" onClick={() => showToast('Frontend demonstration: settings were not persisted.')} className="inline-flex items-center gap-1 rounded-lg bg-primary px-space-md py-2 font-label-md text-label-md text-on-primary shadow-sm hover:bg-primary-container"><Icon name="save" className="text-[18px]" /> Save settings</button>}
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
          <AdminStatCard label="Deployment" value="Frontend" icon="cloud" tone="secondary" note="No backend connected" />
          <AdminStatCard label="Data store" value="Local mock" icon="database" tone="primary" />
          <AdminStatCard label="Policy version" value="v1.0" icon="history" tone="neutral" note="17 Nov 2026" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
          <div className="xl:col-span-7 space-y-space-lg">
            <AdminSection title="Verification policy" description="Human review remains mandatory before deterministic rule changes become published.">
              <div className="divide-y divide-outline-variant">
                <SwitchRow title="Automatic deadline flagging" description="Mark opportunities as urgent when the deadline is within 14 days." checked={settings.autoFlag} onChange={toggle('autoFlag')} />
                <SwitchRow title="Human review gate" description="Require registrar approval before a scholarship becomes active." checked={settings.humanReview} onChange={toggle('humanReview')} />
                <SwitchRow title="Immutable audit log" description="Retain every status and criteria change for compliance reporting." checked={settings.auditLog} onChange={toggle('auditLog')} />
              </div>
            </AdminSection>
            <AdminSection title="Semantic matching parameters">
              <div className="space-y-space-md">
                <div>
                  <div className="flex items-center justify-between font-label-md text-label-md font-semibold text-on-surface"><span>High-match threshold</span><span className="text-secondary">{threshold}%</span></div>
                  <input type="range" min={70} max={99} value={threshold} onChange={(event) => setThreshold(Number(event.target.value))} className="mt-space-xs w-full accent-secondary" />
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Recommendations at or above this score are flagged to scholars.</p>
                </div>
                <div>
                  <div className="flex items-center justify-between font-label-md text-label-md font-semibold text-on-surface"><span>Semantic weight in ranking</span><span className="text-secondary">{semanticWeight}%</span></div>
                  <input type="range" min={0} max={100} value={semanticWeight} onChange={(event) => setSemanticWeight(Number(event.target.value))} className="mt-space-xs w-full accent-secondary" />
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Deterministic eligibility remains a separate, non-negotiable check.</p>
                </div>
                <SwitchRow title="Nightly embedding refresh" description="Simulated schedule shown for platform configuration purposes only." checked={settings.embeddings} onChange={toggle('embeddings')} />
              </div>
            </AdminSection>
          </div>
          <div className="xl:col-span-5 space-y-space-lg">
            <AdminSection title="Administrative alerts">
              <div className="divide-y divide-outline-variant">
                <SwitchRow title="Weekly compliance reports" description="Prepare a summary every Monday." checked={settings.weeklyReports} onChange={toggle('weeklyReports')} />
                <SwitchRow title="Email alerts" description="Notify administrators about verification queue changes." checked={settings.emailAlerts} onChange={toggle('emailAlerts')} />
              </div>
            </AdminSection>
            <AdminSection title="Maintainers">
              <div className="space-y-space-sm">
                {[
                  ['Registry lead', 'Registrar administration'],
                  ['AI service owner', 'Semantic platform team'],
                  ['Compliance officer', 'Academic governance office'],
                ].map(([role, owner]) => (
                  <div key={role} className="flex items-center justify-between rounded-lg bg-surface-container-low p-space-sm">
                    <span className="font-label-md text-label-md font-semibold text-on-surface">{role}</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{owner}</span>
                  </div>
                ))}
              </div>
            </AdminSection>
            <div className="rounded-xl border border-error/20 bg-error-container/20 p-space-lg">
              <Icon name="warning" className="text-error" />
              <h2 className="mt-space-sm font-headline-sm text-headline-sm text-primary">No live services</h2>
              <p className="mt-space-xs font-body-sm text-body-sm text-on-error-container">Changing these controls affects only the local interface state and is reset on refresh.</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
