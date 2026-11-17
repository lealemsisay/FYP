'use client';

import { useState } from 'react';
import { Icon } from '@/components/common/Icon';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { AdminPageHeader, AdminSection, AdminStatCard } from '@/components/admin/AdminBits';
import { useToast } from '@/components/common/AppProviders';

const CATEGORIES = [
  { id: 'destination', label: 'Destination country', values: ['Germany', 'United Kingdom', 'Sweden', 'Japan', 'Switzerland', 'Saudi Arabia'], icon: 'public' },
  { id: 'level', label: 'Degree level', values: ['Masters', 'PhD', 'Bachelors'], icon: 'menu_book' },
  { id: 'funding', label: 'Funding type', values: ['Fully Funded', 'Partial Tuition', 'Stipend'], icon: 'payments' },
  { id: 'field', label: 'Field of study', values: ['Computer Science', 'Engineering', 'Public Health', 'Economics', 'AI'], icon: 'psychology' },
];

export default function CategoriesPage() {
  const { showToast } = useToast();
  const [categories, setCategories] = useState(CATEGORIES);
  const [newValue, setNewValue] = useState('');
  const [active, setActive] = useState('destination');

  const addValue = () => {
    if (!newValue.trim()) return;
    setCategories((current) => current.map((category) => category.id === active ? { ...category, values: [...category.values, newValue.trim()] } : category));
    setNewValue('');
    showToast('Filter value added to the local demonstration state.');
  };

  return (
    <AdminLayout>
      <div className="space-y-space-lg">
        <AdminPageHeader eyebrow="Directory Taxonomy" title="Categories & Filters" description="Control the taxonomy used by scholarship discovery, recommendation tuning and public browsing." />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
          <AdminStatCard label="Filter groups" value={String(categories.length)} icon="category" tone="primary" />
          <AdminStatCard label="Total values" value={String(categories.reduce((sum, category) => sum + category.values.length, 0))} icon="tune" tone="secondary" />
          <AdminStatCard label="Last revision" value="17 Nov" icon="history" tone="neutral" note="Frontend sample timestamp" />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
          <AdminSection title="Filter groups">
            <div className="space-y-space-xs">
              {categories.map((category) => (
                <button key={category.id} type="button" onClick={() => setActive(category.id)} className={`flex w-full items-center justify-between rounded-lg border p-space-md text-left transition-colors ${active === category.id ? 'border-secondary bg-secondary/5' : 'border-outline-variant hover:bg-surface-container-low'}`}>
                  <span className="flex items-center gap-space-sm"><Icon name={category.icon} className={active === category.id ? 'text-secondary' : 'text-outline'} /><span className="font-label-md text-label-md font-semibold text-on-surface">{category.label}</span></span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{category.values.length} values</span>
                </button>
              ))}
            </div>
          </AdminSection>
          <div className="xl:col-span-8">
            <AdminSection title={`Values — ${categories.find((category) => category.id === active)?.label}`} description="Added values appear in public filter menus immediately in this local state.">
              <div className="flex flex-wrap gap-space-xs">
                {categories.find((category) => category.id === active)?.values.map((value) => (
                  <span key={value} className="inline-flex items-center gap-1 rounded-full bg-surface-container px-space-sm py-1 font-label-md text-label-md text-on-surface-variant">
                    {value}
                    <button type="button" aria-label={`Remove ${value}`} onClick={() => setCategories((current) => current.map((category) => category.id === active ? { ...category, values: category.values.filter((item) => item !== value) } : category))} className="text-outline hover:text-error"><Icon name="close" className="text-[14px]" /></button>
                  </span>
                ))}
              </div>
              <div className="mt-space-md flex gap-space-xs">
                <input value={newValue} onChange={(event) => setNewValue(event.target.value)} placeholder="Add a filter value" className="flex-1 rounded-lg bg-surface-container-low px-space-md py-2.5 font-body-sm text-body-sm text-on-surface shadow-inner focus:outline-none focus:ring-2 focus:ring-primary" />
                <button type="button" onClick={addValue} className="rounded-lg bg-primary px-space-md py-2.5 font-label-md text-label-md text-on-primary shadow-sm hover:bg-primary-container">Add</button>
              </div>
            </AdminSection>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
