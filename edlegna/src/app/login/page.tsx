import { AuthLayout } from '@/components/layout/AuthLayout';
import { AuthForm } from '@/components/public/AuthForm';

export default function LoginPage() {
  return (
    <AuthLayout>
      <AuthForm variant="login" />
    </AuthLayout>
  );
}
