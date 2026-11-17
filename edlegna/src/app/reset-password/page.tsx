import { AuthLayout } from '@/components/layout/AuthLayout';
import { AuthForm } from '@/components/public/AuthForm';

export default function ResetPasswordPage() {
  return (
    <AuthLayout>
      <AuthForm variant="reset" />
    </AuthLayout>
  );
}
