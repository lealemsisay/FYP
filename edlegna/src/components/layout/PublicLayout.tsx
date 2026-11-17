import { PublicHeader } from './PublicHeader';
import { PublicFooter } from './PublicFooter';

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <PublicHeader />
      <div className="flex-1 pt-20">
        <main>{children}</main>
      </div>
      <PublicFooter />
    </div>
  );
}
