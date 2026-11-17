import { PublicLayout } from '@/components/layout/PublicLayout';
import { ScholarshipExplorer } from '@/components/public/ScholarshipExplorer';

export default function ScholarshipsPage() {
  return (
    <PublicLayout>
      <ScholarshipExplorer audience="public" />
    </PublicLayout>
  );
}
