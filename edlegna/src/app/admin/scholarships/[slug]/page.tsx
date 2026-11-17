import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Icon } from '@/components/common/Icon';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { AdminPageHeader } from '@/components/admin/AdminBits';
import { ScholarshipStatusPill } from '@/components/common/StatusPill';
import { getScholarship, SCHOLARSHIPS } from '@/data/scholarships';

export function generateStaticParams() {
  return SCHOLARSHIPS.map((scholarship) => ({ slug: scholarship.slug }));
}

export default function AdminScholarshipDetailsPage({ params }: { params: { slug: string } }) {
  const scholarship = getScholarship(params.slug);
  if (!scholarship) notFound();

  return (
    <AdminLayout>
      <div className="space-y-space-lg">
        <AdminPageHeader
          eyebrow="Scholarship Dossier"
          title={scholarship.title}
          description={`${scholarship.provider} · ${scholarship.institution} · ${scholarship.country}`}
          actions={
            <>
              <ScholarshipStatusPill status={scholarship.status} />
              <Link href={`/admin/scholarships/${scholarship.slug}/edit`} className="inline-flex items-center gap-1 rounded-lg bg-primary px-space-md py-2 font-label-md text-label-md text-on-primary shadow-sm transition-all hover:bg-primary-container"><Icon name="edit" className="text-[18px]" /> Edit dossier</Link>
              <Link href="/admin/scholarships" className="rounded-lg border border-outline-variant px-space-md py-2 font-label-md text-label-md text-primary hover:bg-surface-container-low">Back</Link>
            </>
          }
        />

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
          <div className="xl:col-span-8 space-y-space-lg">
            <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-lg shadow-sm">
              <h2 className="font-headline-sm text-headline-sm text-primary">Editorial summary</h2>
              <p className="mt-space-md font-body-md text-body-md text-on-surface-variant">{scholarship.description}</p>
              <div className="mt-space-md flex flex-wrap gap-space-xs">
                {scholarship.benefits.map((benefit) => (
                  <span key={benefit} className="rounded-full bg-surface-container px-space-sm py-1 font-label-sm text-label-sm text-on-surface-variant">{benefit}</span>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-lg shadow-sm">
              <h2 className="font-headline-sm text-headline-sm text-primary">Deterministic eligibility rules</h2>
              <div className="mt-space-md overflow-x-auto">
                <table className="w-full min-w-[680px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-outline-variant font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                      <th className="py-space-sm pr-space-md">Requirement</th>
                      <th className="py-space-sm pr-space-md">Published rule</th>
                      <th className="py-space-sm">Sample credential</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scholarship.requirements.map((requirement) => (
                      <tr key={requirement.id} className="border-b border-outline-variant last:border-b-0">
                        <td className="py-space-sm pr-space-md font-label-md text-label-md font-semibold text-on-surface">{requirement.label}</td>
                        <td className="py-space-sm pr-space-md font-body-sm text-body-sm text-on-surface-variant">{requirement.rule}</td>
                        <td className="py-space-sm font-body-sm text-body-sm text-on-surface-variant">{requirement.credential}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-lg shadow-sm">
              <h2 className="font-headline-sm text-headline-sm text-primary">Required documents</h2>
              <ul className="mt-space-md grid grid-cols-1 md:grid-cols-2 gap-space-sm">
                {scholarship.documents.map((document) => (
                  <li key={document.id} className="flex items-center gap-space-xs rounded-lg bg-surface-container-low p-space-sm font-body-sm text-body-sm text-on-surface">
                    <Icon name={document.required ? 'check_circle' : 'remove_circle_outline'} className={document.required ? 'text-primary' : 'text-outline'} />
                    {document.label}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="xl:col-span-4 space-y-space-lg">
            <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-lg shadow-sm">
              <h2 className="font-headline-sm text-headline-sm text-primary">Record metadata</h2>
              <dl className="mt-space-md space-y-space-sm">
                {[
                  ['Record ID', scholarship.id],
                  ['Deadline', scholarship.deadline],
                  ['Award', scholarship.awardAmount],
                  ['Funding type', scholarship.fundingType],
                  ['Region', scholarship.region],
                  ['Semantic score', `${scholarship.semanticScore}%`],
                  ['Created', scholarship.createdAt],
                  ['Verified', scholarship.verified ? 'Yes' : 'Awaiting review'],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-space-md border-b border-outline-variant pb-space-xs last:border-b-0">
                    <dt className="font-body-sm text-body-sm text-on-surface-variant">{label}</dt>
                    <dd className="text-right font-label-md text-label-md font-semibold text-on-surface">{value}</dd>
                  </div>
                ))}
              </dl>
            </section>
            <section className="rounded-xl border border-secondary/30 bg-secondary/5 p-space-lg">
              <Icon name="auto_awesome" className="text-secondary" filled />
              <h2 className="mt-space-sm font-headline-sm text-headline-sm text-primary">Semantic rationale</h2>
              <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">{scholarship.embeddedReason}</p>
            </section>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
