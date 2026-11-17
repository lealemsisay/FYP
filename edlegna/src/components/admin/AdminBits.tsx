import { Icon } from '@/components/common/Icon';

export function AdminPageHeader({ eyebrow, title, description, actions }: { eyebrow: string; title: string; description: string; actions?: React.ReactNode }) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
      <div>
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">{eyebrow}</span>
        <h1 className="mt-1 font-headline-xl text-headline-xl text-primary tracking-tight">{title}</h1>
        <p className="mt-space-xs max-w-3xl font-body-md text-body-md text-on-surface-variant">{description}</p>
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-space-xs">{actions}</div> : null}
    </div>
  );
}

const TONES: Record<string, string> = {
  primary: 'bg-primary-fixed/60 text-primary',
  secondary: 'bg-secondary-container text-on-secondary-container',
  tertiary: 'bg-tertiary-fixed/30 text-tertiary',
  error: 'bg-error-container text-error',
  neutral: 'bg-surface-container text-on-surface-variant',
};

export function AdminStatCard({ label, value, icon, tone = 'primary', note }: { label: string; value: string; icon: string; tone?: string; note?: string }) {
  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-md shadow-sm">
      <div className="flex items-start justify-between gap-space-sm">
        <div>
          <p className="font-label-md text-label-md text-on-surface-variant">{label}</p>
          <p className="mt-space-xs font-headline-md text-headline-md text-primary">{value}</p>
        </div>
        <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${TONES[tone] ?? TONES.primary}`}><Icon name={icon} /></span>
      </div>
      {note ? <p className="mt-space-sm font-label-sm text-label-sm text-secondary">{note}</p> : null}
    </div>
  );
}

export function SwitchRow({ title, description, checked, onChange }: { title: string; description: string; checked: boolean; onChange: () => void }) {
  return (
    <div className="flex items-center justify-between gap-space-md py-space-md">
      <div>
        <p className="font-label-md text-label-md font-semibold text-on-surface">{title}</p>
        <p className="font-body-sm text-body-sm text-on-surface-variant">{description}</p>
      </div>
      <button type="button" role="switch" aria-checked={checked} aria-label={title} onClick={onChange} className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${checked ? 'bg-secondary' : 'bg-surface-container'}`}>
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-surface-container-lowest shadow-sm transition-all ${checked ? 'left-[22px]' : 'left-0.5'}`} />
      </button>
    </div>
  );
}

export function AdminSection({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-lg shadow-sm">
      <h2 className="font-headline-sm text-headline-sm text-primary">{title}</h2>
      {description ? <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">{description}</p> : null}
      <div className="mt-space-md">{children}</div>
    </section>
  );
}
