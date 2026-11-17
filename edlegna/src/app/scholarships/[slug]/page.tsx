import { notFound } from 'next/navigation';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { ScholarshipDetail } from '@/components/public/ScholarshipDetail';
import { getScholarship, SCHOLARSHIPS } from '@/data/scholarships';

export function generateStaticParams() {
  return SCHOLARSHIPS.map((scholarship) => ({ slug: scholarship.slug }));
}

export default function ScholarshipDetailsPage({ params }: { params: { slug: string } }) {
  const scholarship = getScholarship(params.slug);
  if (!scholarship) notFound();
  return (
    <PublicLayout>
      <ScholarshipDetail scholarship={scholarship} audience="public" />
    </PublicLayout>
  );
}
