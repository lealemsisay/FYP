'use client';

import Link from 'next/link';
import { Icon } from '@/components/common/Icon';
import { ASSETS } from '@/lib/assets';
import { DemoNotice } from '@/components/common/DemoNotice';

const FEATURES = [
  { icon: 'psychology', title: 'AI Semantic Matching', description: 'Multi-variable alignment beyond mere GPA parameters.' },
  { icon: 'verified_user', title: 'Eligibility Verification', description: 'Deterministic rule matching against official donor charters.' },
  { icon: 'notifications_active', title: 'Deadline Safeguards', description: 'Synchronized milestone alerts for essay submittals & transcripts.' },
];

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center p-margin bg-surface">
      <div className="w-full max-w-6xl mx-auto my-auto shadow-2xl rounded-full overflow-hidden flex flex-col md:flex-row bg-surface-container-lowest">
        <div className="w-full md:w-[45%] bg-primary-container text-on-primary p-space-lg md:p-space-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-secondary opacity-20 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 bottom-10 w-80 h-80 rounded-full bg-tertiary-container opacity-10 blur-2xl pointer-events-none" />
          <svg className="absolute right-0 bottom-0 opacity-5 w-96 h-96 text-on-primary pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" strokeDasharray="8 8" strokeWidth="4" />
            <path d="M40 160 C 40 70, 160 70, 160 160" strokeLinecap="round" strokeWidth="8" />
            <polygon fill="currentColor" points="150,55 155,42 168,47 157,56 162,69 150,60 138,69 143,56 132,47 145,42" />
          </svg>

          <div className="relative z-10">
            <Link href="/" className="flex items-center gap-space-sm mb-space-md">
              <div className="w-12 h-12 rounded-xl bg-surface-container-lowest/10 backdrop-blur-md flex items-center justify-center relative">
                <img alt="Edlegna Official Logo" className="w-8 h-8" src={ASSETS.logo} />
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm text-surface-container-lowest tracking-tight flex items-center gap-1.5">
                  Edlegna
                  <span className="text-tertiary-fixed text-body-sm font-label-sm uppercase tracking-widest px-1.5 py-0.5 rounded bg-surface-container-lowest/10">Scholars</span>
                </div>
                <p className="font-label-sm text-label-sm text-secondary-fixed tracking-widest uppercase">Scholarship Platform</p>
              </div>
            </Link>
            <p className="font-headline-md text-headline-md text-surface-container-lowest italic leading-snug mt-space-sm">
              “A Chance to Find. A Place to Belong.”
            </p>
            <p className="font-body-sm text-body-sm text-on-primary-container mt-space-xs leading-relaxed max-w-sm">
              Education is the premise of progress, in every society, in every family. Discover the scholarship precision-crafted for your intellectual trajectory.
            </p>
          </div>

          <div className="my-space-lg space-y-space-md relative z-10">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="flex items-start gap-space-sm">
                <div className="p-1 rounded bg-secondary/30 text-secondary-fixed flex items-center justify-center mt-0.5">
                  <Icon name={feature.icon} className="text-[18px]" />
                </div>
                <div>
                  <h4 className="font-label-lg text-label-lg text-surface-container-lowest font-semibold">{feature.title}</h4>
                  <p className="font-body-sm text-body-sm text-on-primary-container">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative z-10 bg-surface-container-lowest/10 backdrop-blur-sm rounded-xl p-space-md mt-space-xs">
            <div className="flex items-center gap-space-sm mb-space-xs">
              <img
                alt="Portrait of a young scholarly Ethiopian university woman"
                className="w-10 h-10 rounded-full object-cover shadow-sm ring-1 ring-secondary-fixed/30"
                src={ASSETS.portraitPlaceholder}
              />
              <div>
                <p className="font-label-md text-label-md text-surface-container-lowest font-semibold">Selamawit Tadesse</p>
                <p className="font-label-sm text-label-sm text-secondary-fixed">Honors Fellow &amp; AI Scholar Recipient</p>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-primary-container italic">
              “Edlegna showed me three fully funded programmes I did not know existed. The eligibility breakdown made every step clear.”
            </p>
          </div>
        </div>

        <div className="w-full md:w-[55%] p-space-lg md:p-space-xl flex flex-col justify-center">
          <DemoNotice compact className="self-start mb-space-md" />
          {children}
        </div>
      </div>
    </div>
  );
}
