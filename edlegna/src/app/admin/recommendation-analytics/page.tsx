import { Icon } from '@/components/common/Icon';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { AdminPageHeader, AdminStatCard, AdminSection } from '@/components/admin/AdminBits';
import { SCHOLARSHIPS } from '@/data/scholarships';

const DISTRIBUTION = [
  { label: '90–100%', value: 18, color: 'bg-secondary' },
  { label: '80–89%', value: 34, color: 'bg-tertiary-container' },
  { label: '70–79%', value: 27, color: 'bg-primary' },
  { label: '60–69%', value: 14, color: 'bg-outline' },
  { label: 'Below 60%', value: 7, color: 'bg-error-container' },
];

export default function RecommendationAnalyticsPage() {
  const top = [...SCHOLARSHIPS].sort((a, b) => b.semanticScore - a.semanticScore).slice(0, 6);
  const max = Math.max(...DISTRIBUTION.map((bucket) => bucket.value));

  return (
    <AdminLayout>
      <div className="space-y-space-lg">
        <AdminPageHeader eyebrow="Recommendation Intelligence" title="Recommendation Analytics" description="Review match-score distribution, scholar feedback and the leading recommendations in the sample registry." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          <AdminStatCard label="Recommendations served" value="42,918" icon="recommend" tone="secondary" note="+12.6% this cycle" />
          <AdminStatCard label="Saved from recommendations" value="9,706" icon="bookmark" tone="primary" note="22.6% save rate" />
          <AdminStatCard label="Average match score" value="82%" icon="psychology" tone="tertiary" />
          <AdminStatCard label="Feedback recorded" value="1,284" icon="thumb_up" tone="neutral" note="86% marked useful" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
          <div className="xl:col-span-5">
            <AdminSection title="Match-score distribution" description="Share of recommendations by semantic score band.">
              <div className="space-y-space-sm">
                {DISTRIBUTION.map((bucket) => (
                  <div key={bucket.label}>
                    <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant"><span>{bucket.label}</span><span>{bucket.value}%</span></div>
                    <div className="mt-1 h-2.5 w-full overflow-hidden rounded-full bg-surface-container">
                      <div className={`h-full rounded-full ${bucket.color}`} style={{ width: `${(bucket.value / max) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </AdminSection>
          </div>
          <div className="xl:col-span-7">
            <AdminSection title="Leading recommendations">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-outline-variant font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                      <th className="py-space-sm pr-space-md">Scholarship</th><th className="py-space-sm pr-space-md">Provider</th><th className="py-space-sm">Match</th>
                    </tr>
                  </thead>
                  <tbody>
                    {top.map((scholarship) => (
                      <tr key={scholarship.id} className="border-b border-outline-variant last:border-b-0">
                        <td className="py-space-sm pr-space-md font-label-md text-label-md font-semibold text-on-surface">{scholarship.title}</td>
                        <td className="py-space-sm pr-space-md font-body-sm text-body-sm text-on-surface-variant">{scholarship.provider}</td>
                        <td className="py-space-sm"><span className="rounded-full bg-secondary-container px-space-sm py-0.5 font-label-sm text-label-sm font-bold text-on-secondary-container">{scholarship.semanticScore}%</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AdminSection>
          </div>
        </div>

        <AdminSection title="Qualitative scholar feedback" description="Illustrative comments from the demonstration dataset.">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            {[
              { quote: 'The eligibility reason was clearer than on the donor page.', author: 'Scholar — Engineering, Ethiopia', icon: 'verified_user' },
              { quote: 'I found a Nordic programme I had never seen in generic search.', author: 'Scholar — Computer Science, Kenya', icon: 'travel_explore' },
              { quote: 'The gold “missing information” marker told me exactly what to upload.', author: 'Scholar — Public Health, Ghana', icon: 'rule_folder' },
            ].map((feedback) => (
              <div key={feedback.quote} className="rounded-lg border border-outline-variant bg-surface-container-low p-space-md">
                <Icon name={feedback.icon} className="text-secondary" />
                <p className="mt-space-sm font-body-sm text-body-sm text-on-surface">“{feedback.quote}”</p>
                <p className="mt-space-xs font-label-sm text-label-sm text-on-surface-variant">{feedback.author}</p>
              </div>
            ))}
          </div>
        </AdminSection>
      </div>
    </AdminLayout>
  );
}
