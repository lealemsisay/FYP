import { Icon } from './Icon';

interface EmptyStateProps {
  icon?: string;
  title: string;
  description: string;
}

export function EmptyState({ icon = 'search_off', title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-outline-variant bg-surface-container-lowest px-space-lg py-space-xl text-center">
      <span className="mb-space-md flex h-12 w-12 items-center justify-center rounded-full bg-surface-container text-secondary">
        <Icon name={icon} className="text-2xl" />
      </span>
      <p className="font-headline-sm text-headline-sm text-primary">{title}</p>
      <p className="mt-space-xs max-w-sm font-body-sm text-body-sm text-on-surface-variant">{description}</p>
    </div>
  );
}
