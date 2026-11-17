import Link from 'next/link';
import { Icon } from '@/components/common/Icon';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { DemoNotice } from '@/components/common/DemoNotice';

const STEPS = [
  {
    number: '01',
    icon: 'person_outline',
    title: 'Create Profile',
    description: 'Record your degree, field, country, graduation year and performance. The profile strength meter shows exactly which parameters are still missing.',
    detail: 'No documents are uploaded in this frontend phase — the dossier is represented by sample data only.',
  },
  {
    number: '02',
    icon: 'travel_explore',
    title: 'Discover Scholarships',
    description: 'Search the registry with natural language, then narrow by destination, level, field, funding type and deadline.',
    detail: 'Search, filters, sorting, view switching and pagination all work against local mock records.',
  },
  {
    number: '03',
    icon: 'rule_folder',
    title: 'Check Eligibility',
    description: 'Review each published requirement as Satisfied, Not Satisfied or Information Missing, with the credential used for the comparison.',
    detail: 'This is demonstration data only; Edlegna is not claiming to have evaluated a real application.',
  },
  {
    number: '04',
    icon: 'send',
    title: 'Apply Officially',
    description: 'When you are ready, follow the official donor link from the scholarship dossier and complete the application on provider systems.',
    detail: 'Edlegna does not submit applications or collect fees in this phase.',
  },
];

export default function HowItWorksPage() {
  return (
    <PublicLayout>
      <div className="w-full bg-surface min-h-screen">
        <section className="relative overflow-hidden bg-primary-container py-space-xl text-on-primary">
          <div className="absolute -right-20 -top-24 w-96 h-96 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
          <div className="absolute -left-12 -bottom-20 w-80 h-80 rounded-full bg-tertiary-container/15 blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
            <div className="inline-flex items-center gap-space-xs rounded-full bg-secondary-container/20 px-space-sm py-1 font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed">
              <Icon name="auto_awesome" className="text-sm" filled /> The Edlegna Method
            </div>
            <h1 className="mt-space-sm font-headline-xl text-headline-xl tracking-tight text-on-primary">From uncertainty to a clear, evidenced shortlist.</h1>
            <p className="mt-space-md max-w-2xl font-body-lg text-body-lg text-inverse-primary/90">
              Four deliberate steps separate broad opportunity discovery from a decision you can defend. Each step keeps semantic possibility and deterministic verification visibly apart.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
          <DemoNotice className="mb-space-lg" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
            {STEPS.map((step) => (
              <article key={step.number} className="relative overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-all">
                <div className="absolute -right-4 -top-6 font-display-lg text-display-lg text-surface-container leading-none select-none">{step.number}</div>
                <div className="relative z-10">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-fixed/60 text-primary">
                    <Icon name={step.icon} className="text-2xl" />
                  </span>
                  <h2 className="mt-space-md font-headline-md text-headline-md text-primary">{step.title}</h2>
                  <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">{step.description}</p>
                  <p className="mt-space-sm border-l-4 border-l-tertiary-container bg-tertiary-fixed/10 px-space-md py-space-xs font-body-sm text-body-sm text-on-tertiary-fixed">{step.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-surface-container-low py-space-xl">
          <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
              <div className="lg:col-span-5">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Verification Protocol</span>
                <h2 className="mt-space-sm font-headline-xl text-headline-xl text-primary tracking-tight">Two engines, never conflated.</h2>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="rounded-xl border border-secondary/30 bg-secondary/5 p-space-lg">
                  <Icon name="psychology" className="text-2xl text-secondary" filled />
                  <h3 className="mt-space-md font-headline-sm text-headline-sm text-primary">AI Semantic Relevance</h3>
                  <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                    Scores contextual fit between your academic profile and a scholarship narrative. The score is illustrative in this frontend phase and will later come from a dedicated semantic service.
                  </p>
                </div>
                <div className="rounded-xl border border-primary/20 bg-primary-fixed/20 p-space-lg">
                  <Icon name="rule_folder" className="text-2xl text-primary" />
                  <h3 className="mt-space-md font-headline-sm text-headline-sm text-primary">Deterministic Rule Verification</h3>
                  <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                    Compares published criteria against credential values. Results use forest green for satisfied, crimson for unmet and gold when information is missing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="resources" className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Academic Resources</span>
          <h2 className="mt-space-sm font-headline-xl text-headline-xl text-primary tracking-tight">Prepare with confidence.</h2>
          <div className="mt-space-lg grid grid-cols-1 md:grid-cols-3 gap-space-md">
            {[
              { icon: 'description', title: 'Document checklist', text: 'See which certificates, transcripts and test reports each opportunity expects before you begin.' },
              { icon: 'event_upcoming', title: 'Deadline calendar', text: 'Saved scholarships appear in a single deadline matrix with urgent items surfaced first.' },
              { icon: 'school', title: 'Advisor guidance', text: 'Understand how institutions evaluate academic fit and where missing information usually appears.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-lg shadow-sm">
                <Icon name={item.icon} className="text-xl text-secondary" />
                <h3 className="mt-space-md font-headline-sm text-headline-sm text-primary">{item.title}</h3>
                <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-space-lg rounded-xl bg-primary-container p-space-lg text-on-primary shadow-xl lg:p-space-xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-on-primary">Ready to explore the registry?</h2>
                <p className="mt-space-xs font-body-md text-body-md text-inverse-primary/90">Start with the public explorer, then sign in to save opportunities to your portfolio.</p>
              </div>
              <Link href="/scholarships" className="inline-flex items-center gap-space-xs rounded-lg bg-secondary px-space-lg py-space-sm font-label-lg text-label-lg text-on-secondary shadow-md transition-all hover:bg-secondary/90">
                Explore scholarships <Icon name="arrow_forward" className="text-[18px]" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
