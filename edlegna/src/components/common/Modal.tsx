'use client';

interface ModalProps {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  footer?: React.ReactNode;
}

export function Modal({ open, title, children, onClose, footer }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-primary/20 p-margin backdrop-blur-sm">
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="w-full max-w-lg rounded-xl border border-outline-variant bg-surface-container-lowest p-space-lg shadow-[0px_16px_36px_-8px_rgba(31,41,55,0.14)]"
      >
        <h2 className="font-headline-md text-headline-md text-primary">{title}</h2>
        <div className="mt-space-md text-body-sm text-on-surface-variant">{children}</div>
        {footer ? <div className="mt-space-lg flex justify-end gap-space-sm">{footer}</div> : null}
      </div>
    </div>
  );
}
