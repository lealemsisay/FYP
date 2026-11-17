import { Icon } from '@/components/common/Icon';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { AdminPageHeader, AdminStatCard, AdminSection } from '@/components/admin/AdminBits';
import { INTAKE_ANALYTICS, SEARCH_HISTORY } from '@/data/dashboard';

const TOP_QUERIES = [
  { query: 'fully funded computer science germany', count: 1_842, trend: '+18%' },
  { query: 'africa women stem leadership fellowship', count: 1_204, trend: '+11%' },
  { query: 'masters scholarships without ielts', count: 963, trend: '+7%' },
  { query: 'ai public health joint masters', count: 741, trend: '+4%' },
];

export default function SearchAnalyticsPage() {
  const max = Math.max(...INTAKE_ANALYTICS.flatMap((point) => [point.additions, point.closed]));

  return (
    <AdminLayout>
      <div className="space-y-space-lg">
        <AdminPageHeader eyebrow="Discovery Intelligence" title="Search & AI Analytics" description="Aggregate search behaviour, filter usage and semantic service performance across the sample platform." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          <AdminStatCard label="Semantic inquiries" value="18,204" icon="psychology" tone="secondary" note="+8.4% this month" />
          <AdminStatCard label="Avg. semantic weight" value="0.91" icon="speed" tone="primary" note="Across sampled searches" />
          <AdminStatCard label="Zero-result rate" value="2.3%" icon="search_off" tone="error" note="Below 5% target" />
          <AdminStatCard label="Filter adoption" value="68%" icon="tune" tone="tertiary" note="Searches using 2+ filters" />
        </div>

        <AdminSection title="Registry intake activity" description="Monthly additions and closures represented from local analytics mock data.">
          <div className="flex h-64 items-end gap-2">
            {INTAKE_ANALYTICS.map((point) => (
              <div key={point.month} className="group flex h-full flex-1 flex-col items-center justify-end gap-1">
                <div className="flex w-full items-end justify-center gap-0.5">
                  <div title={`${point.additions} additions`} className="w-1/2 max-w-6 rounded-t bg-secondary/80 transition-all group-hover:bg-secondary" style={{ height: `${(point.additions / max) * 100}%` }} />
                  <div title={`${point.closed} closed`} className="w-1/2 max-w-6 rounded-t bg-tertiary-container/70 transition-all group-hover:bg-tertiary-container" style={{ height: `${(point.closed / max) * 100}%` }} />
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">{point.month}</span>
              </div>
            ))}
          </div>
          <div className="mt-space-md flex items-center gap-space-md font-label-sm text-label-sm text-on-surface-variant">
            <span className="inline-flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-sm bg-secondary" /> Additions</span>
            <span className="inline-flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-sm bg-tertiary-container" /> Closed</span>
          </div>
        </AdminSection>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-space-lg">
          <AdminSection title="Top search intents">
            <div className="space-y-space-sm">
              {TOP_QUERIES.map((item) => (
                <div key={item.query} className="flex items-center justify-between gap-space-md border-b border-outline-variant pb-space-sm last:border-b-0">
                  <div><p className="font-label-md text-label-md font-semibold text-on-surface">{item.query}</p><p className="font-body-sm text-body-sm text-on-surface-variant">{item.count.toLocaleString()} inquiries</p></div>
                  <span className="rounded-full bg-secondary-container px-space-sm py-0.5 font-label-sm text-label-sm font-bold text-on-secondary-container">{item.trend}</span>
                </div>
              ))}
            </div>
          </AdminSection>
          <AdminSection title="Recent semantic inquiries" description="Illustrative values from the scholar search history dataset.">
            <div className="space-y-space-sm">
              {SEARCH_HISTORY.map((entry) => (
                <div key={entry.id} className="rounded-lg bg-surface-container-low p-space-sm">
                  <p className="font-body-sm text-body-sm text-on-surface">“{entry.query}”</p>
                  <div className="mt-space-xs flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                    <span>{entry.resultCount} results · {Object.keys(entry.filters).length} filters</span>
                    <span className="font-bold text-secondary">weight {entry.semanticWeight.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          </AdminSection>
        </div>

        <div className="rounded-xl border border-tertiary-container/30 bg-tertiary-fixed/10 p-space-lg">
          <div className="flex items-start gap-space-sm"><Icon name="info" className="mt-0.5 text-tertiary" /><div><h2 className="font-headline-sm text-headline-sm text-primary">Interpretation boundary</h2><p className="mt-space-xs font-body-sm text-body-sm text-on-tertiary-fixed">All analytics are static demonstration records. No live search events, embeddings or model requests are collected in this phase.</p></div></div>
        </div>
      </div>
    </AdminLayout>
  );
}
