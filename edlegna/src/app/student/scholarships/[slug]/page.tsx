import { notFound } from 'next/navigation';
import { StudentLayout } from '@/components/layout/StudentLayout';
import { ScholarshipDetail } from '@/components/public/ScholarshipDetail';
import { getScholarship, SCHOLARSHIPS } from '@/data/scholarships';

export function generateStaticParams() {
  return SCHOLARSHIPS.map((scholarship) => ({ slug: scholarship.slug }));
}

export default function StudentScholarshipDetailsPage({ params }: { params: { slug: string } }) {
  const scholarship = getScholarship(params.slug);
  if (!scholarship) notFound();
  return (
    <StudentLayout>
      <ScholarshipDetail scholarship={scholarship} audience="student" />
    </StudentLayout>
  );
}
