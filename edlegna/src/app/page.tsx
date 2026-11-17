'use client';

import Link from 'next/link';
import { ASSETS } from '@/lib/assets';
import { PublicLayout } from '@/components/layout/PublicLayout';

export default function LandingPage() {
  return <PublicLayout><div className="w-full  bg-surface min-h-screen"><div className="flex flex-col w-full">
{/*  HERO SECTION  */}
<section className="relative w-full overflow-hidden bg-surface-container-low py-space-xl lg:py-space-xl">
<div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
<div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-tertiary-fixed-dim/20 blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
{/*  Hero Text  */}
<div className="lg:col-span-7 flex flex-col items-start gap-space-md z-10">
<div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-lowest shadow-sm">
<span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
<span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">Algorithmic Precision in Education</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-primary font-bold leading-tight">
            Your Future Deserves the Right Opportunities.
          </h1>
<p className="font-headline-sm text-headline-sm text-tertiary font-serif italic">
            A Chance to Find. A Place to Belong.
          </p>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Discover scholarships that match your academic background, interests, and goals. Let Edlegna illuminate verified pathways to achieve your collegiate aspirations without administrative anxiety.
          </p>
<div className="flex flex-wrap items-center gap-space-md pt-space-sm w-full sm:w-auto">
<Link className="inline-flex items-center justify-center gap-space-xs px-space-xl py-space-md rounded-lg bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary-container transition-all group" href="/register">
<span>Get Started</span>
<span className="material-symbols-outlined text-tertiary-fixed-dim transition-transform group-hover:translate-x-1">arrow_forward</span>
</Link>
<Link className="inline-flex items-center justify-center gap-space-xs px-space-xl py-space-md rounded-lg bg-surface-container-lowest text-primary font-label-lg text-label-lg shadow-sm hover:bg-surface-variant transition-all" href="/scholarships">
<span className="material-symbols-outlined text-secondary text-sm">explore</span>
<span>Explore Scholarships</span>
</Link>
</div>
<div className="pt-space-md flex items-center gap-space-lg text-on-surface-variant">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
<span className="font-label-sm text-label-sm">100% Verified Providers</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-tertiary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
<span className="font-label-sm text-label-sm">Sub-second Matching</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
<span className="font-label-sm text-label-sm">Zero Data Commercialization</span>
</div>
</div>
</div>
{/*  Hero Visual / Portrait Card Mosaic  */}
<div className="lg:col-span-5 relative flex justify-center">
<div className="relative w-full max-w-md">
<div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-surface-container-high">
<img className="w-full h-full object-cover" data-alt="Dignified close-up photographic portrait of an ambitious young Ethiopian university scholar standing in a sunlit collegiate library hall with towering academic bookshelves, warm golden hour ambient sunlight, dressed in classic forest green collegiate blazer, intellectual expression, cinematic depth of field, premium university brochure style." src={ASSETS.portraitPlaceholder} />
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 text-on-primary">
<span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-widest font-bold">Addis Ababa University • Technology</span>
<p className="font-headline-sm text-headline-sm font-semibold">Selamawit Tadesse</p>
<p className="font-body-sm text-body-sm text-surface-container-high opacity-90">Honors Fellow &amp; Global AI Scholar Recipient</p>
</div>
</div>
{/*  Overlay Badge Card: 98% Match  */}
<div className="absolute -top-6 -left-6 sm:-left-10 bg-surface-container-lowest rounded-xl p-space-md shadow-xl flex items-center gap-space-md max-w-xs animate-bounce" style={{ animationDuration: "4s" }}>
<div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0 text-on-secondary-container">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-space-xs">
<span className="inline-block px-1.5 py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm font-bold">98% Match</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Fully Funded</span>
</div>
<p className="font-headline-sm text-headline-sm text-primary font-bold truncate">Mastercard Foundation</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Scholars Program Fellowship</p>
</div>
</div>
{/*  Overlay Badge Card: Next Deadline  */}
<div className="absolute -bottom-6 -right-6 sm:-right-8 bg-surface-container-lowest rounded-xl p-space-md shadow-xl flex items-center gap-space-md">
<div className="w-10 h-10 rounded-lg bg-tertiary-container/30 flex items-center justify-center text-on-tertiary-container">
<span className="material-symbols-outlined">event_upcoming</span>
</div>
<div>
<p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Next Cycle Priority</p>
<p className="font-headline-sm text-headline-sm text-primary font-bold">Nov 15, 2024</p>
<p className="font-label-sm text-label-sm text-secondary font-medium">Verified Official Portal</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  KEY STATISTICS METRICS  */}
<section className="w-full bg-surface-container-lowest py-space-xl">
<div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-space-lg">
<div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-xs hover:shadow-md transition-shadow">
<div className="flex items-center justify-between">
<span className="material-symbols-outlined text-secondary text-2xl">verified</span>
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-widest">Active</span>
</div>
<span className="font-display-lg text-display-lg text-primary font-bold">1,400+</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-medium">Verified Scholarships</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Independently vetted with accredited institutional registries.</p>
</div>
<div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-xs hover:shadow-md transition-shadow">
<div className="flex items-center justify-between">
<span className="material-symbols-outlined text-tertiary text-2xl">payments</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold uppercase tracking-widest">Aggregate</span>
</div>
<span className="font-display-lg text-display-lg text-primary font-bold">$42M+</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-medium">Total Aid Available</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Global grants, full tuition endowments, and stipend programs.</p>
</div>
<div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-xs hover:shadow-md transition-shadow">
<div className="flex items-center justify-between">
<span className="material-symbols-outlined text-secondary text-2xl">account_balance</span>
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-widest">Collegiate</span>
</div>
<span className="font-display-lg text-display-lg text-primary font-bold">85+</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-medium">Partner Institutions</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Premier universities across Africa, Europe, and North America.</p>
</div>
<div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-space-xs hover:shadow-md transition-shadow">
<div className="flex items-center justify-between">
<span className="material-symbols-outlined text-tertiary text-2xl">psychology</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold uppercase tracking-widest">Benchmarked</span>
</div>
<span className="font-display-lg text-display-lg text-primary font-bold">94%</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-medium">Match Accuracy</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Validated through strict requirement-matching algorithms.</p>
</div>
</div>
</div>
</section>
{/*  HOW EDLEGNA WORKS  */}
<section className="w-full bg-surface py-space-xl">
<div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-space-xl">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Methodology</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold mt-space-xs">How Edlegna Works</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
          A four-stage systemic pipeline engineered to remove ambiguity, preserve application dignity, and connect students directly to verified academic grants.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
{/*  Step 1  */}
<div className="relative bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-md">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-2xl">badge</span>
</div>
<span className="font-display-lg text-display-lg text-outline-variant font-serif select-none">01</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">Create Profile</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Input your academic background, degree goals, GPA benchmarks, research interests, and preferred study regions into our confidential profile engine.
            </p>
</div>
<div className="mt-space-lg pt-space-sm">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider flex items-center gap-space-xs">
<span>Personalized Identity</span>
<span className="material-symbols-outlined text-xs">done</span>
</span>
</div>
</div>
{/*  Step 2  */}
<div className="relative bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-md">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-2xl">manage_search</span>
</div>
<span className="font-display-lg text-display-lg text-outline-variant font-serif select-none">02</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">Discover Scholarships</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Our multi-parameter algorithm searches thousands of endowed grants, sorting by relevance score, award fullness, and deadline proximity.
            </p>
</div>
<div className="mt-space-lg pt-space-sm">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider flex items-center gap-space-xs">
<span>Algorithmic Matching</span>
<span className="material-symbols-outlined text-xs">done</span>
</span>
</div>
</div>
{/*  Step 3  */}
<div className="relative bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-md">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-2xl">fact_check</span>
</div>
<span className="font-display-lg text-display-lg text-outline-variant font-serif select-none">03</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">Check Eligibility</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Instantly view deterministic criteria breakdowns: satisfied credentials, unmet requirements, and missing documents clearly demarcated.
            </p>
</div>
<div className="mt-space-lg pt-space-sm">
<span className="font-label-sm text-label-sm text-tertiary font-bold uppercase tracking-wider flex items-center gap-space-xs">
<span>Zero Guesswork</span>
<span className="material-symbols-outlined text-xs">done</span>
</span>
</div>
</div>
{/*  Step 4  */}
<div className="relative bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-md">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-2xl">open_in_new</span>
</div>
<span className="font-display-lg text-display-lg text-outline-variant font-serif select-none">04</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">Apply Officially</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Access authenticated direct application portals without intermediary third-party fees, redirect traps, or spam registries.
            </p>
</div>
<div className="mt-space-lg pt-space-sm">
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider flex items-center gap-space-xs">
<span>Official Links</span>
<span className="material-symbols-outlined text-xs">done</span>
</span>
</div>
</div>
</div>
</div>
</section>
{/*  WHY CHOOSE EDLEGNA (CORE PILLARS)  */}
<section className="w-full bg-surface-container-low py-space-xl">
<div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
<div className="lg:col-span-5 flex flex-col gap-space-sm">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Institutional Ethos</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold leading-tight">
            Why Choose Edlegna?
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
            Traditional scholarship searching is broken—riddled with dead links, expired deadlines, predatory advertising, and hidden fees. Edlegna rebuilds academic discovery on classical integrity and contemporary computational standards.
          </p>
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm mt-space-md">
<div className="flex items-center gap-space-sm mb-space-xs">
<span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
<h4 className="font-headline-sm text-headline-sm text-primary font-bold">Scholar-First Covenant</h4>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              We never charge students to view, filter, or apply for verified grants. Academic advancement should belong to merit and determination alone.
            </p>
</div>
</div>
<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-lg">
{/*  Pillar 1  */}
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
<span className="material-symbols-outlined">security</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Trustworthy Information</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Every listing undergoes programmatic and editorial verification against university registries and official foundations. Expired opportunities are pruned hourly.
            </p>
</div>
{/*  Pillar 2  */}
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined">person_pin</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Student-Centered Experience</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Distraction-free interface designed without clickbait banners, pop-up survey walls, or unsolicited sponsor broadcasts. Focused purely on research and applications.
            </p>
</div>
{/*  Pillar 3  */}
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined">public</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Inclusive Opportunities</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Dedicated indexing of awards explicitly open to African applicants, underrepresented STEM researchers, refugee students, and first-generation scholars worldwide.
            </p>
</div>
{/*  Pillar 4  */}
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
<span className="material-symbols-outlined">trending_up</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Impactful Results</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Over 78% of active users submit at least two high-compatibility grant applications within their first 14 days of joining the platform.
            </p>
</div>
</div>
</div>
</div>
</section>
{/*  CURATED SCHOLARSHIP PREVIEW  */}
<section className="w-full bg-surface py-space-xl">
<div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-md">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Active Opportunities</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold mt-space-xs">Featured Opportunities This Month</h2>
</div>
<Link className="inline-flex items-center gap-space-xs text-primary font-label-lg text-label-lg font-bold hover:text-secondary transition-colors" href="/scholarships">
<span>View All 1,400+ Grants</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</Link>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
{/*  Scholarship Card 1  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container/30 text-on-secondary-fixed-variant font-label-sm text-label-sm font-bold">
<span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span> 98% Match
              </span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Deadline: Dec 1, 2024</span>
</div>
<div>
<p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Mastercard Foundation • Global</p>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-1">Mastercard Scholars Leadership Fellowship</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
              Full tuition, comprehensive living stipend, international travel, and academic health insurance for African students pursuing Masters in Engineering or Public Health.
            </p>
<div className="flex flex-wrap gap-1.5 pt-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Fully Funded</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Masters / PhD</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Sub-Saharan Africa</span>
</div>
</div>
<div className="mt-space-lg pt-space-md flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Estimated Value</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">$78,000 / yr</span>
</div>
<Link className="px-space-md py-space-xs rounded-lg bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary font-label-md text-label-md transition-colors font-bold" href="/scholarships">
              Details
            </Link>
</div>
</div>
{/*  Scholarship Card 2  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container/30 text-on-secondary-fixed-variant font-label-sm text-label-sm font-bold">
<span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span> 95% Match
              </span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Deadline: Jan 15, 2025</span>
</div>
<div>
<p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">University of Oxford • UK</p>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-1">Clarendon Fund Postgraduate Award</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
              Prestigious collegiate merit endowment providing full course fees and a substantial living grant across all graduate academic disciplines at Oxford.
            </p>
<div className="flex flex-wrap gap-1.5 pt-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Tuition + Stipend</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Postgraduate</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">All Subjects</span>
</div>
</div>
<div className="mt-space-lg pt-space-md flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Estimated Value</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">£45,000 / yr</span>
</div>
<Link className="px-space-md py-space-xs rounded-lg bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary font-label-md text-label-md transition-colors font-bold" href="/scholarships">
              Details
            </Link>
</div>
</div>
{/*  Scholarship Card 3  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-container/30 text-on-tertiary-container font-label-sm text-label-sm font-bold">
<span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span> 92% Match
              </span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Deadline: Dec 10, 2024</span>
</div>
<div>
<p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">DAAD • Germany</p>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-1">Helmut-Schmidt Development Governance</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
              Targeted for future leaders in developing countries seeking Master's degrees in Public Policy, Economics, and Social Sciences at top German universities.
            </p>
<div className="flex flex-wrap gap-1.5 pt-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Full Allowance</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Masters</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Governance</span>
</div>
</div>
<div className="mt-space-lg pt-space-md flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Estimated Value</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">€28,500 / yr</span>
</div>
<Link className="px-space-md py-space-xs rounded-lg bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary font-label-md text-label-md transition-colors font-bold" href="/scholarships">
              Details
            </Link>
</div>
</div>
</div>
</div>
</section>
{/*  TESTIMONIALS SECTION  */}
<section className="w-full bg-surface-container-low py-space-xl">
<div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="text-center max-w-2xl mx-auto mb-space-xl">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Scholarly Testimonials</span>
<h2 className="font-headline-xl text-headline-xl text-primary font-bold mt-space-xs">Voices from the Collegiate Community</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
          Real stories from scholars in Addis Ababa and internationally who turned algorithmic alignment into matriculated university success.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
{/*  Testimonial 1  */}
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center text-tertiary gap-1">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="font-headline-sm text-headline-sm text-primary font-serif italic">
              "Finding legitimate fully funded STEM opportunities from Addis Ababa used to feel like searching in total darkness. Edlegna pinpointed three specific awards matching my civil engineering background within ten minutes."
            </p>
</div>
<div className="flex items-center gap-space-md pt-space-lg mt-space-md">
<div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait of an Ethiopian male collegiate researcher with glasses and a warm smile, wearing a dark green wool sweater in an academic seminar room, natural lighting, thoughtful and professional aesthetic." src={ASSETS.portraitPlaceholder} />
</div>
<div>
<p className="font-headline-sm text-headline-sm text-primary font-bold">Bereket Yohannes</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Mastercard Scholar • McGill Univ.</p>
</div>
</div>
</div>
{/*  Testimonial 2  */}
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center text-tertiary gap-1">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="font-headline-sm text-headline-sm text-primary font-serif italic">
              "The deterministic eligibility tracker is brilliant. It told me plainly that I had met 4 out of 5 criteria and only lacked an official letter of endorsement. No anxiety, no wasted application fees."
            </p>
</div>
<div className="flex items-center gap-space-md pt-space-lg mt-space-md">
<div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Close up portrait photo of an East African female medical researcher wearing white academic attire in a university library setting, soft daylight through classic collegiate windows, confident demeanor." src={ASSETS.portraitPlaceholder} />
</div>
<div>
<p className="font-headline-sm text-headline-sm text-primary font-bold">Dr. Hana Kebede</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Chevening Scholar • Oxford Health</p>
</div>
</div>
</div>
{/*  Testimonial 3  */}
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center text-tertiary gap-1">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="font-headline-sm text-headline-sm text-primary font-serif italic">
              "Edlegna treats the applicant with dignity. Clean typography, verified portals directly to official committees, and total transparency about match calculations. Every university counselor should use this."
            </p>
</div>
<div className="flex items-center gap-space-md pt-space-lg mt-space-md">
<div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait photo of a young male Ethiopian computer science student at Addis Ababa Institute of Technology with laptop and notebooks, modern campus library setting, focused and confident smile." src={ASSETS.portraitPlaceholder} />
</div>
<div>
<p className="font-headline-sm text-headline-sm text-primary font-bold">Dawit Mengistu</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">DAAD Awardee • TU Munich</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  CALL TO ACTION BANNER  */}
<section className="w-full bg-primary text-on-primary py-space-xl relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-container to-primary opacity-95 pointer-events-none"></div>
<div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-secondary-fixed/10 blur-3xl pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop text-center flex flex-col items-center gap-space-md">
<div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-primary-container text-tertiary-fixed shadow-sm">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
<span className="font-label-md text-label-md uppercase tracking-wider font-bold">Start Your Journey Today</span>
</div>
<h2 className="font-display-lg text-display-lg font-bold max-w-3xl leading-tight">
        Your Academic Potential Has No Geographic Boundary.
      </h2>
<p className="font-body-lg text-body-lg text-surface-variant max-w-2xl">
        Join over 14,000 scholars finding verified full endowments, tuition awards, and fellowship opportunities tailored to their precise credentials.
      </p>
<div className="flex flex-wrap items-center justify-center gap-space-md pt-space-sm">
<Link className="inline-flex items-center justify-center gap-space-xs px-space-xl py-space-md rounded-lg bg-tertiary-container text-on-tertiary-container font-label-lg text-label-lg font-bold shadow-lg hover:bg-tertiary-fixed transition-all" href="/register">
<span>Create Free Scholar Profile</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</Link>
<Link className="inline-flex items-center justify-center gap-space-xs px-space-xl py-space-md rounded-lg bg-primary-container text-surface-bright font-label-lg text-label-lg font-bold hover:bg-surface-variant hover:text-primary transition-all" href="/scholarships">
<span>Browse All Opportunities</span>
</Link>
</div>
<p className="font-label-sm text-label-sm text-on-primary-container pt-space-xs">
        No credit card required • Always free for scholars • Verified application portals
      </p>
</div>
</section>
</div></div></PublicLayout>;
}
