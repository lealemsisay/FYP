'use client';

import { useBookmarks, useToast } from './AppProviders';
import { Icon } from './Icon';

interface BookmarkButtonProps {
  scholarshipId: string;
  variant?: 'icon' | 'full';
}

export function BookmarkButton({ scholarshipId, variant = 'icon' }: BookmarkButtonProps) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { showToast } = useToast();
  const saved = isBookmarked(scholarshipId);

  const handleClick = () => {
    toggleBookmark(scholarshipId);
    showToast(saved ? 'Removed from saved scholarships' : 'Added to saved scholarships');
  };

  if (variant === 'full') {
    return (
      <button
        type="button"
        onClick={handleClick}
        className="inline-flex items-center justify-center gap-space-xs rounded-lg border border-outline-variant px-space-md py-space-sm font-label-lg text-label-lg text-primary transition-colors hover:border-primary hover:bg-surface-container-low"
      >
        <Icon name={saved ? 'bookmark' : 'bookmark_border'} className="text-lg" filled={saved} />
        {saved ? 'Saved' : 'Save scholarship'}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={saved ? 'Remove bookmark' : 'Add bookmark'}
      title={saved ? 'Remove bookmark' : 'Add bookmark'}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-colors ${
        saved
          ? 'border-tertiary-container/50 bg-tertiary-fixed/30 text-tertiary'
          : 'border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary'
      }`}
    >
      <Icon name={saved ? 'bookmark' : 'bookmark_border'} className="text-lg" filled={saved} />
    </button>
  );
}
