import { StudentLayout } from '@/components/layout/StudentLayout';
import { ScholarshipExplorer } from '@/components/public/ScholarshipExplorer';

export default function DiscoverPage() {
  return (
    <StudentLayout>
      <ScholarshipExplorer audience="student" />
    </StudentLayout>
  );
}
