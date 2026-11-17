import { AuthLayout } from '@/components/layout/AuthLayout';
import { AuthForm } from '@/components/public/AuthForm';

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <AuthForm variant="forgot" />
    </AuthLayout>
  );
}
