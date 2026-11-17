import { AuthLayout } from '@/components/layout/AuthLayout';
import { AuthForm } from '@/components/public/AuthForm';

export default function RegisterPage() {
  return (
    <AuthLayout>
      <AuthForm variant="register" />
    </AuthLayout>
  );
}
