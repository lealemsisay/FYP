import Link from 'next/link';
import { Icon } from '@/components/common/Icon';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Logo } from '@/components/common/Logo';
import { SCHOLARSHIPS } from '@/data/scholarships';

const PILLARS = [
  { icon: 'verified_user', title: 'Trustworthy Information', description: 'Every opportunity is checked against donor sources before it enters the registry, with visible provenance on each dossier.' },
  { icon: 'psychology', title: 'Algorithmic Precision', description: 'Semantic relevance and deterministic eligibility are shown separately, so you always know why a match appears.' },
  { icon: 'group', title: 'Student-Centered Experience', description: 'Your profile, deadlines and saved portfolio stay in one calm workspace designed around how scholars actually decide.' },
  { icon: 'lock', title: 'Scholar-First Covenant', description: 'Your academic data is never sold, commercialised or used to target advertising. It exists to serve your search.' },
];

const STATS = [
  { value: '124', label: 'Verified opportunities' },
  { value: '18,204', label: 'Semantic inquiries processed' },
  { value: '3,482', label: 'Scholars with active dossiers' },
  { value: '42', label: 'Partner institutions' },
];

export default function AboutPage() {
  return (
    <PublicLayout>
      <div className="w-full bg-surface min-h-screen">
        <section className="relative overflow-hidden bg-surface-container-low py-space-xl">
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-secondary-container/30 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 bottom-0 w-80 h-80 rounded-full bg-tertiary-fixed/20 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
            <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-lowest shadow-sm mb-space-md">
              <Icon name="account_balance" className="text-secondary text-sm" filled />
              <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">Our Institutional Charter</span>
            </div>
            <h1 className="font-display-lg text-display-lg md:text-display-lg text-primary font-bold leading-tight max-w-3xl">
              Scholarship discovery with the dignity of a collegiate institution.
            </h1>
            <p className="font-headline-sm text-headline-sm text-tertiary font-serif italic mt-space-sm">A Chance to Find. A Place to Belong.</p>
            <p className="mt-space-md font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Edlegna was built for students who are qualified, ambitious and still overlooked by conventional scholarship search. We combine a verified opportunity registry with transparent AI assistance and clear eligibility guidance.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            <div className="lg:col-span-5">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Our Heritage</span>
              <h2 className="mt-space-sm font-headline-xl text-headline-xl text-primary tracking-tight">Modern academic editorial, built for real decisions.</h2>
            </div>
            <div className="lg:col-span-7 space-y-space-md font-body-lg text-body-lg text-on-surface-variant">
              <p>
                The interface draws from the quiet authority of university libraries and archival records: measured composition, generous margins and clear typographic contrast. That aesthetic is not decoration. It keeps attention on the details that determine whether an application succeeds.
              </p>
              <p>
                Our brand palette pairs deep ivy with academic teal, endowment gold and warm parchment. Teal marks computational inference, gold marks prestige and missing documentation, and forest green confirms a satisfied requirement. Every colour carries meaning.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-md pt-space-md">
                {STATS.map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-space-md shadow-sm">
                    <p className="font-headline-md text-headline-md text-primary">{stat.value}</p>
                    <p className="mt-1 font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-space-xl">
          <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Why Choose Edlegna</span>
            <h2 className="mt-space-sm font-headline-xl text-headline-xl text-primary tracking-tight">Four commitments to every scholar.</h2>
            <div className="mt-space-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
              {PILLARS.map((pillar) => (
                <div key={pillar.title} className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-all">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary-fixed/60 text-primary">
                    <Icon name={pillar.icon} className="text-xl" />
                  </span>
                  <h3 className="mt-space-md font-headline-sm text-headline-sm text-primary">{pillar.title}</h3>
                  <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-7">
              <Logo showWordmark={false} href="/" imageClassName="h-12 w-auto object-contain" />
              <h2 className="mt-space-md font-headline-xl text-headline-xl text-primary tracking-tight">A dual-engine system you can audit.</h2>
              <p className="mt-space-md max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                Semantic relevance answers “how closely does this opportunity fit your profile?” Deterministic verification answers “which published rules can we confirm you meet?” Edlegna never presents one as the other, and it never claims a real evaluation in this frontend phase.
              </p>
              <div className="mt-space-lg flex flex-wrap gap-space-md">
                <Link href="/how-it-works" className="inline-flex items-center gap-space-xs rounded-lg bg-primary px-space-xl py-space-md font-label-lg text-label-lg text-on-primary shadow-md transition-all hover:bg-primary-container">
                  <span>See how it works</span>
                  <Icon name="arrow_forward" className="text-tertiary-fixed-dim" />
                </Link>
                <Link href="/scholarships" className="inline-flex items-center gap-space-xs rounded-lg border border-outline-variant bg-surface-container-lowest px-space-xl py-space-md font-label-lg text-label-lg text-primary transition-colors hover:bg-surface-container-low">
                  Browse the registry
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-space-md">
              {SCHOLARSHIPS.slice(0, 3).map((scholarship) => (
                <Link key={scholarship.id} href={`/scholarships/${scholarship.slug}`} className="flex items-center justify-between gap-space-md rounded-lg border border-outline-variant bg-surface-container-lowest p-space-md shadow-sm transition-all hover:border-primary">
                  <div className="min-w-0">
                    <p className="truncate font-headline-sm text-headline-sm text-primary">{scholarship.title}</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{scholarship.provider} · {scholarship.country}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-secondary/30 bg-secondary/10 px-space-sm py-0.5 font-label-sm text-label-sm font-bold text-secondary">{scholarship.semanticScore}%</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
