'use client';

import { useState } from 'react';
import { Icon } from '@/components/common/Icon';
import { StudentLayout } from '@/components/layout/StudentLayout';
import { useToast } from '@/components/common/AppProviders';
import { CURRENT_USER } from '@/data/students';

const PREFERENCES = [
  { id: 'deadlines', title: 'Deadline alerts', description: 'Notify me when a saved scholarship closes within 14 days.', defaultOn: true },
  { id: 'matches', title: 'New high-match recommendations', description: 'Notify me when semantic relevance exceeds 90%.', defaultOn: true },
  { id: 'eligibility', title: 'Eligibility updates', description: 'Notify me when a requirement changes from missing to verified.', defaultOn: true },
  { id: 'digest', title: 'Weekly academic digest', description: 'Send a weekly summary of deadlines and new opportunities.', defaultOn: false },
  { id: 'product', title: 'Platform announcements', description: 'Receive non-academic product and maintenance updates.', defaultOn: false },
];

export default function StudentSettingsPage() {
  const { showToast } = useToast();
  const [preferences, setPreferences] = useState(() => Object.fromEntries(PREFERENCES.map((item) => [item.id, item.defaultOn])));
  const [visibility, setVisibility] = useState('institutions');
  const [language, setLanguage] = useState('en');

  const toggle = (id: string) => setPreferences((current) => ({ ...current, [id]: !current[id] }));

  return (
    <StudentLayout>
      <div className="space-y-space-lg">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Scholar Preferences</span>
          <h1 className="mt-1 font-headline-xl text-headline-xl text-primary tracking-tight">Settings</h1>
          <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">Control alerts, dossier visibility and language. This frontend phase stores nothing permanently.</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
          <div className="xl:col-span-8 space-y-space-lg">
            <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-lg shadow-sm">
              <h2 className="font-headline-sm text-headline-sm text-primary">Notification preferences</h2>
              <div className="mt-space-md divide-y divide-outline-variant">
                {PREFERENCES.map((item) => (
                  <div key={item.id} className="flex items-center justify-between gap-space-md py-space-md">
                    <div>
                      <p className="font-label-md text-label-md font-semibold text-on-surface">{item.title}</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">{item.description}</p>
                    </div>
                    <button type="button" role="switch" aria-checked={preferences[item.id]} aria-label={item.title} onClick={() => toggle(item.id)} className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${preferences[item.id] ? 'bg-secondary' : 'bg-surface-container'}`}>
                      <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-surface-container-lowest shadow-sm transition-all ${preferences[item.id] ? 'left-[22px]' : 'left-0.5'}`} />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-lg shadow-sm">
              <h2 className="font-headline-sm text-headline-sm text-primary">Dossier visibility</h2>
              <div className="mt-space-md grid grid-cols-1 md:grid-cols-3 gap-space-sm">
                {[
                  { value: 'private', label: 'Private', icon: 'lock', text: 'Only you can view your dossier.' },
                  { value: 'institutions', label: 'Institutions', icon: 'school', text: 'Verified partner institutions may view it.' },
                  { value: 'public', label: 'Public profile', icon: 'public', text: 'Name and field are visible to scholars.' },
                ].map((option) => (
                  <button key={option.value} type="button" onClick={() => setVisibility(option.value)} className={`rounded-lg border p-space-md text-left transition-all ${visibility === option.value ? 'border-secondary bg-secondary/5 shadow-sm' : 'border-outline-variant hover:bg-surface-container-low'}`}>
                    <Icon name={option.icon} className={`text-xl ${visibility === option.value ? 'text-secondary' : 'text-outline'}`} />
                    <p className="mt-space-xs font-label-md text-label-md font-semibold text-on-surface">{option.label}</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{option.text}</p>
                  </button>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-lg shadow-sm">
              <h2 className="font-headline-sm text-headline-sm text-primary">Account</h2>
              <div className="mt-space-md space-y-space-sm">
                <button type="button" onClick={() => showToast('Frontend demonstration: password reset is not connected.')} className="flex w-full items-center justify-between rounded-lg bg-surface-container-low p-space-md text-left transition-colors hover:bg-surface-container">
                  <span className="flex items-center gap-space-sm"><Icon name="lock" className="text-secondary" /><span className="font-label-md text-label-md font-semibold text-on-surface">Change password</span></span>
                  <Icon name="chevron_right" className="text-outline" />
                </button>
                <button type="button" onClick={() => showToast('Frontend demonstration: export is not connected.')} className="flex w-full items-center justify-between rounded-lg bg-surface-container-low p-space-md text-left transition-colors hover:bg-surface-container">
                  <span className="flex items-center gap-space-sm"><Icon name="download" className="text-secondary" /><span className="font-label-md text-label-md font-semibold text-on-surface">Export my dossier</span></span>
                  <Icon name="chevron_right" className="text-outline" />
                </button>
              </div>
            </section>
          </div>

          <div className="xl:col-span-4 space-y-space-lg">
            <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-lg shadow-sm">
              <div className="flex items-center gap-space-sm">
                <img src={CURRENT_USER.avatarUrl} alt="Account avatar" className="h-12 w-12 rounded-full object-cover" />
                <div className="min-w-0">
                  <p className="truncate font-headline-sm text-headline-sm text-primary">{CURRENT_USER.name}</p>
                  <p className="truncate font-body-sm text-body-sm text-on-surface-variant">{CURRENT_USER.email}</p>
                </div>
              </div>
              <div className="mt-space-md space-y-1">
                <label htmlFor="language" className="font-label-md text-label-md font-semibold text-on-surface">Interface language</label>
                <select id="language" value={language} onChange={(event) => setLanguage(event.target.value)} className="w-full rounded-lg bg-surface-container-low px-space-md py-2.5 font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="en">English</option>
                  <option value="am">Amharic (coming soon)</option>
                  <option value="fr">Français (coming soon)</option>
                </select>
              </div>
              <button type="button" onClick={() => showToast('Frontend demonstration: preferences were not persisted.')} className="mt-space-md w-full rounded-lg bg-primary py-2.5 font-label-lg text-label-lg text-on-primary shadow-md transition-all hover:bg-primary-container">Save preferences</button>
            </section>
            <section className="rounded-xl border border-error/20 bg-error-container/20 p-space-lg">
              <Icon name="warning" className="text-error" />
              <h2 className="mt-space-sm font-headline-sm text-headline-sm text-primary">Demonstration boundary</h2>
              <p className="mt-space-xs font-body-sm text-body-sm text-on-error-container">No account data, alert rules or privacy choices are saved to a server in this phase.</p>
            </section>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}
