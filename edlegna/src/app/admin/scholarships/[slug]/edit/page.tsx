import { notFound } from 'next/navigation';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { AdminPageHeader } from '@/components/admin/AdminBits';
import { ScholarshipEditor } from '@/components/admin/ScholarshipEditor';
import { getScholarship, SCHOLARSHIPS } from '@/data/scholarships';

export function generateStaticParams() {
  return SCHOLARSHIPS.map((scholarship) => ({ slug: scholarship.slug }));
}

export default function EditScholarshipPage({ params }: { params: { slug: string } }) {
  const scholarship = getScholarship(params.slug);
  if (!scholarship) notFound();

  return (
    <AdminLayout>
      <div className="space-y-space-lg">
        <AdminPageHeader eyebrow="Scholarship Management" title="Edit Scholarship" description={`Updating ${scholarship.title}. Changes are local to this frontend demonstration.`} />
        <ScholarshipEditor mode="edit" scholarship={scholarship} />
      </div>
    </AdminLayout>
  );
}
