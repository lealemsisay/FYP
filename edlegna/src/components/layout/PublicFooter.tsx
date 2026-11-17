import Link from 'next/link';
import { Logo } from '@/components/common/Logo';

export function PublicFooter() {
  return (
    <footer className="w-full bg-surface-container-low py-space-xl mt-space-xl">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-space-xl pb-space-xl">
          <div className="space-y-space-sm md:col-span-1">
            <Logo imageClassName="h-6 w-auto object-contain" />
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Democratizing higher education access through algorithmic precision and academic prestige.
            </p>
          </div>
          <div className="space-y-space-sm">
            <h4 className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Discovery</h4>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <li><Link className="hover:text-primary transition-colors" href="/scholarships">All Opportunities</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/how-it-works">Verification Protocol</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/how-it-works#resources">Academic Grants</Link></li>
            </ul>
          </div>
          <div className="space-y-space-sm">
            <h4 className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Institution</h4>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <li><Link className="hover:text-primary transition-colors" href="/about">Collegiate Heritage</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/about">Research Fellowships</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/about">Ethics &amp; Algorithmic Trust</Link></li>
            </ul>
          </div>
          <div className="space-y-space-sm">
            <h4 className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Contact &amp; Security</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Archival Hall of Scholars, Boston, MA</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">admissions@edlegna.ac.edu</p>
          </div>
        </div>
        <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <span className="font-body-sm text-body-sm text-on-surface-variant">© 2026 Edlegna Scholarship Discovery Platform. All rights reserved.</span>
          <div className="flex gap-space-lg font-label-md text-label-md text-on-surface-variant">
            <Link href="/about" className="hover:text-on-surface transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-on-surface transition-colors">Terms of Service</Link>
            <Link href="/about" className="hover:text-on-surface transition-colors">Academic Integrity</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
