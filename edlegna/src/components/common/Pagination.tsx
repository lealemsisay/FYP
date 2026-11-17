'use client';

import { Icon } from './Icon';

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export function Pagination({ page, totalPages, onChange }: PaginationProps) {
  const pages = Array.from({ length: Math.max(totalPages, 1) }, (_, index) => index + 1);
  return (
    <nav className="flex items-center justify-center gap-space-xs" aria-label="Pagination">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface-variant transition-colors hover:border-primary disabled:opacity-40"
        aria-label="Previous page"
      >
        <Icon name="chevron_left" className="text-lg" />
      </button>
      {pages.map((number) => (
        <button
          key={number}
          type="button"
          onClick={() => onChange(number)}
          className={`h-9 min-w-9 rounded-lg px-space-sm font-label-md text-label-md transition-colors ${
            number === page
              ? 'bg-primary text-on-primary font-bold'
              : 'border border-outline-variant bg-surface-container-lowest text-on-surface-variant hover:border-primary'
          }`}
        >
          {number}
        </button>
      ))}
      <button
        type="button"
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface-variant transition-colors hover:border-primary disabled:opacity-40"
        aria-label="Next page"
      >
        <Icon name="chevron_right" className="text-lg" />
      </button>
    </nav>
  );
}
