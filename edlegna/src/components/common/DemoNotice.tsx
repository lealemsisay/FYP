import { Icon } from './Icon';
import { DEMO_BANNER } from '@/lib/navigation';

interface DemoNoticeProps {
  compact?: boolean;
  className?: string;
}

export function DemoNotice({ compact = false, className = '' }: DemoNoticeProps) {
  if (compact) {
    return (
      <span
        className={`inline-flex items-center gap-space-xs rounded-full bg-tertiary-fixed/40 px-space-sm py-0.5 font-label-sm text-label-sm text-on-tertiary-fixed ${className}`}
      >
        <Icon name="info" className="text-sm" />
        Demonstration data
      </span>
    );
  }
  return (
    <div
      className={`flex items-start gap-space-sm rounded-lg border border-tertiary-container/40 bg-tertiary-fixed/20 px-space-md py-space-sm text-body-sm text-on-tertiary-fixed ${className}`}
    >
      <Icon name="info" className="mt-0.5 text-base" />
      <span>{DEMO_BANNER}</span>
    </div>
  );
}
