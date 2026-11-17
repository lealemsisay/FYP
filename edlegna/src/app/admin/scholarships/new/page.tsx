import { AdminLayout } from '@/components/layout/AdminLayout';
import { AdminPageHeader } from '@/components/admin/AdminBits';
import { ScholarshipEditor } from '@/components/admin/ScholarshipEditor';

export default function NewScholarshipPage() {
  return (
    <AdminLayout>
      <div className="space-y-space-lg">
        <AdminPageHeader eyebrow="Scholarship Management" title="Add Scholarship" description="Create a new verified opportunity record and define the rules that will be checked against scholar dossiers." />
        <ScholarshipEditor mode="create" />
      </div>
    </AdminLayout>
  );
}
