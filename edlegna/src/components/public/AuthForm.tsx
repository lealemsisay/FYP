'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Icon } from '@/components/common/Icon';
import { useDemoAuth, useToast } from '@/components/common/AppProviders';

type AuthVariant = 'login' | 'register' | 'forgot' | 'reset';

const COPY: Record<AuthVariant, { eyebrow: string; title: string; description: string; submit: string }> = {
  login: {
    eyebrow: 'Collegiate Access Portal',
    title: 'Welcome Back',
    description: 'Sign in to access your personalized scholarship recommendations, active dossiers, and verified deadlines.',
    submit: 'Sign In to Edlegna',
  },
  register: {
    eyebrow: 'Scholar Registration',
    title: 'Create Your Dossier',
    description: 'Build your academic profile once, then discover opportunities calibrated to your background and goals.',
    submit: 'Create Scholar Account',
  },
  forgot: {
    eyebrow: 'Account Recovery',
    title: 'Reset Your Credentials',
    description: 'Enter your registered university email. In this frontend demonstration, no recovery email is actually sent.',
    submit: 'Continue',
  },
  reset: {
    eyebrow: 'Credential Renewal',
    title: 'Choose a New Password',
    description: 'Create a strong new password for your scholar account. This demonstration state does not update any real account.',
    submit: 'Update Password',
  },
};

interface FieldProps {
  id: string;
  label: string;
  icon: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  trailing?: React.ReactNode;
}

function Field({ id, label, icon, type, placeholder, value, onChange, error, trailing }: FieldProps) {
  return (
    <div className="space-y-1">
      <label className="font-label-md text-label-md text-on-surface font-semibold block" htmlFor={id}>{label}</label>
      <div className="relative flex items-center">
        <span className="material-symbols-outlined absolute left-3 text-outline text-[20px] pointer-events-none" aria-hidden="true">{icon}</span>
        <input
          id={id}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className={`w-full pl-10 ${trailing ? 'pr-10' : 'pr-space-md'} py-2.5 bg-surface-container-low text-on-surface rounded-lg font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-inner ${
            error ? 'ring-2 ring-error' : ''
          }`}
        />
        {trailing}
      </div>
      {error ? <p className="font-body-sm text-body-sm text-error">{error}</p> : null}
    </div>
  );
}

export function AuthForm({ variant }: { variant: AuthVariant }) {
  const router = useRouter();
  const { signIn } = useDemoAuth();
  const { showToast } = useToast();
  const [values, setValues] = useState({ identity: '', password: '', confirm: '', name: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);

  const set = (key: keyof typeof values) => (value: string) => setValues((current) => ({ ...current, [key]: value }));
  const copy = COPY[variant];

  const validate = () => {
    const next: Record<string, string> = {};
    if (variant === 'register' && !values.name.trim()) next.name = 'Full name is required.';
    if (!values.identity.trim()) {
      next.identity = variant === 'forgot' ? 'University email is required.' : 'Email or student ID is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(values.identity) && variant !== 'login') {
      next.identity = 'Enter a valid email address.';
    }
    if (variant !== 'forgot' && !values.password) next.password = 'Password is required.';
    if (variant !== 'forgot' && values.password.length < 8) next.password = 'Password must be at least 8 characters.';
    if (variant === 'register' && values.password !== values.confirm) next.confirm = 'Passwords do not match.';
    if (variant === 'reset' && values.password !== values.confirm) next.confirm = 'Passwords do not match.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    if (variant === 'login') {
      signIn();
      showToast('Frontend demonstration: signed in with sample state.');
      router.push('/student/dashboard');
      return;
    }
    if (variant === 'forgot') {
      showToast('Frontend demonstration: no recovery email was sent.');
      return;
    }
    if (variant === 'reset') {
      showToast('Frontend demonstration: password change was not persisted.');
      router.push('/login');
      return;
    }
    showToast('Frontend demonstration: no real account was created.');
    router.push('/student/dashboard');
  };

  const passwordToggle = (
    <button
      type="button"
      aria-label="Toggle password visibility"
      onClick={() => setShowPassword((visible) => !visible)}
      className="absolute right-3 text-outline hover:text-on-surface transition-colors p-1 flex items-center justify-center"
    >
      <Icon name={showPassword ? 'visibility_off' : 'visibility'} className="text-[18px]" />
    </button>
  );

  return (
    <div className="w-full flex flex-col justify-between bg-surface-container-lowest">
      <div>
        <div className="flex items-center justify-between mb-space-sm">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">{copy.eyebrow}</span>
          <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" /> 2026 Cycle
          </span>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface text-primary font-serif">{copy.title}</h1>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{copy.description}</p>

        <form className="mt-space-lg space-y-space-md" onSubmit={handleSubmit} noValidate>
          {variant === 'register' ? (
            <Field id="full-name" label="Full Name" icon="person" type="text" placeholder="Selamawit Tadesse" value={values.name} onChange={set('name')} error={errors.name} />
          ) : null}
          <Field
            id="academic-id"
            label={variant === 'forgot' ? 'University Email' : 'University Email or Student ID'}
            icon="school"
            type="email"
            placeholder="name@institution.edu"
            value={values.identity}
            onChange={set('identity')}
            error={errors.identity}
          />
          {variant !== 'forgot' ? (
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="font-label-md text-label-md text-on-surface font-semibold block" htmlFor="password">Password</label>
                {variant === 'login' ? (
                  <Link className="font-label-md text-label-md text-secondary hover:text-primary transition-colors font-medium" href="/forgot-password">Forgot password?</Link>
                ) : null}
              </div>
              <Field id="password" label="" icon="lock" type={showPassword ? 'text' : 'password'} placeholder="Enter password" value={values.password} onChange={set('password')} error={errors.password} trailing={passwordToggle} />
            </div>
          ) : null}
          {variant === 'register' || variant === 'reset' ? (
            <Field id="confirm-password" label="Confirm Password" icon="lock" type={showPassword ? 'text' : 'password'} placeholder="Repeat password" value={values.confirm} onChange={set('confirm')} error={errors.confirm} />
          ) : null}
          {variant === 'login' ? (
            <div className="flex items-center justify-between pt-1">
              <label className="inline-flex items-center gap-2 cursor-pointer select-none">
                <input defaultChecked className="w-4 h-4 rounded text-primary accent-primary focus:ring-0 cursor-pointer" type="checkbox" />
                <span className="font-body-sm text-body-sm text-on-surface-variant">Remember credentials on this terminal</span>
              </label>
            </div>
          ) : null}
          <button className="w-full py-3 bg-primary text-on-primary rounded-lg font-label-lg text-label-lg font-medium hover:bg-primary-container active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg" type="submit">
            <span>{copy.submit}</span>
            <Icon name="arrow_forward" className="text-[18px]" />
          </button>
        </form>
      </div>

      {variant === 'login' ? (
        <>
          <div className="relative my-space-md flex items-center justify-center">
            <div className="w-full h-px bg-surface-variant" />
            <span className="absolute px-3 bg-surface-container-lowest font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Institutional Single Sign-On</span>
          </div>
          <div className="grid grid-cols-2 gap-space-sm">
            <button type="button" onClick={() => showToast('Frontend demonstration: SSO is not connected.')} className="py-2.5 px-space-sm bg-surface-container-low hover:bg-surface-container text-on-surface rounded-lg font-label-md text-label-md font-medium flex items-center justify-center gap-2 transition-colors shadow-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
              </svg>
              <span>Google Account</span>
            </button>
            <button type="button" onClick={() => showToast('Frontend demonstration: EduID is not connected.')} className="py-2.5 px-space-sm bg-surface-container-low hover:bg-surface-container text-on-surface rounded-lg font-label-md text-label-md font-medium flex items-center justify-center gap-2 transition-colors shadow-sm">
              <Icon name="account_balance" className="text-secondary text-[18px]" />
              <span>University EduID</span>
            </button>
          </div>
        </>
      ) : null}

      <div className="mt-space-lg pt-space-md space-y-space-sm">
        <p className="text-center font-body-sm text-body-sm text-on-surface-variant">
          {variant === 'login' ? (
            <>Don&apos;t have an Edlegna profile? <Link className="font-semibold text-secondary hover:text-primary transition-colors underline underline-offset-4" href="/register">Register your scholar account</Link></>
          ) : variant === 'register' ? (
            <>Already have a profile? <Link className="font-semibold text-secondary hover:text-primary transition-colors underline underline-offset-4" href="/login">Sign in instead</Link></>
          ) : (
            <Link className="font-semibold text-secondary hover:text-primary transition-colors underline underline-offset-4" href="/login">Return to sign in</Link>
          )}
        </p>
        <div className="flex items-center justify-center gap-1.5 text-on-surface-variant opacity-80 font-label-sm text-label-sm">
          <Icon name="encrypted" className="text-[15px] text-secondary" />
          <span>Secure 256-bit encrypted academic network portal — frontend demonstration</span>
        </div>
      </div>
    </div>
  );
}
