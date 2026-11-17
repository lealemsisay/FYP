import type { RequirementStatus, ScholarshipStatus } from '@/types';
import { Icon } from './Icon';

const requirementStyles: Record<RequirementStatus, { label: string; className: string; icon: string }> = {
  satisfied: {
    label: 'Satisfied',
    className: 'bg-primary-fixed/60 text-on-primary-fixed-variant',
    icon: 'check_circle',
  },
  'not-satisfied': {
    label: 'Not Satisfied',
    className: 'bg-error-container text-on-error-container',
    icon: 'error',
  },
  unknown: {
    label: 'Information Missing',
    className: 'bg-tertiary-fixed/60 text-on-tertiary-fixed',
    icon: 'help',
  },
};

export function RequirementPill({ status, label }: { status: RequirementStatus; label?: string }) {
  const style = requirementStyles[status];
  return (
    <span className={`inline-flex items-center gap-space-xs rounded-full px-space-sm py-0.5 font-label-sm text-label-sm font-bold ${style.className}`}>
      <Icon name={style.icon} className="text-xs" filled={status === 'satisfied'} />
      {label ?? style.label}
    </span>
  );
}

const scholarshipStatusStyles: Record<ScholarshipStatus, string> = {
  active: 'bg-primary-fixed/60 text-on-primary-fixed-variant',
  draft: 'bg-surface-container text-on-surface-variant',
  closed: 'bg-error-container text-on-error-container',
  archived: 'bg-surface-container-high text-on-surface-variant',
};

export function ScholarshipStatusPill({ status }: { status: ScholarshipStatus }) {
  return (
    <span className={`inline-flex items-center gap-space-xs rounded-full px-space-sm py-0.5 font-label-sm text-label-sm font-bold ${scholarshipStatusStyles[status]}`}>
      <span className="h-2 w-2 rounded-full bg-current" />
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

export function MatchPill({ score }: { score: number }) {
  return (
    <span className="inline-flex items-center gap-space-xs rounded-full border border-secondary/30 bg-secondary/10 px-space-sm py-0.5 font-label-sm text-label-sm font-bold text-secondary">
      <Icon name="auto_awesome" className="text-xs" filled />
      {score}% semantic match
    </span>
  );
}
