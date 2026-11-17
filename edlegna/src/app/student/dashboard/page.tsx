'use client';

import Link from 'next/link';
import { ASSETS } from '@/lib/assets';
import { StudentLayout } from '@/components/layout/StudentLayout';

export default function StudentDashboardPage() {
  return <StudentLayout><div className="relative  bg-surface min-h-screen px-space-md lg:px-space-xl py-space-lg"><div className="flex flex-col w-full">
{/*  Welcome Editorial Banner  */}
<section className="relative overflow-hidden bg-primary-container text-on-primary rounded-xl p-space-lg lg:p-space-xl shadow-xl">
<div className="absolute -right-20 -top-24 w-96 h-96 rounded-full bg-secondary/20 blur-3xl pointer-events-none"></div>
<div className="absolute -left-12 -bottom-20 w-80 h-80 rounded-full bg-tertiary-container/15 blur-2xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-secondary-container/20 text-secondary-fixed mb-space-sm font-label-sm text-label-sm uppercase tracking-wider">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          Algorithmic Curation Active
        </div>
<h1 className="font-headline-xl text-headline-xl text-on-primary tracking-tight">
          Welcome back, Selamawit Tadesse!
        </h1>
<p className="mt-space-xs font-body-lg text-body-lg text-inverse-primary/90 max-w-xl">
          Discover opportunities that bring you closer to your academic goals. You have <span className="text-tertiary-fixed font-bold underline decoration-tertiary-container underline-offset-4">3 high-match scholarships</span> closing this month.
        </p>
</div>
<div className="flex flex-col sm:flex-row items-start lg:items-center gap-space-md shrink-0">
<button className="group relative inline-flex items-center gap-space-sm px-space-lg py-space-sm bg-secondary text-on-secondary rounded-lg font-label-lg text-label-lg font-bold shadow-md hover:bg-secondary/90 transition-all hover:shadow-lg active:scale-95" id="scanTriggerBtn">
<span className="material-symbols-outlined text-xl transition-transform group-hover:rotate-45" style={{ fontVariationSettings: "'FILL' 1" }}>insights</span>
<span>Run AI Scholarship Scan</span>
</button>
<button className="px-space-md py-space-sm rounded-lg bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary font-label-lg text-label-lg transition-colors">
          View Audit Log
        </button>
</div>
</div>
</section>
{/*  Metric Matrix (4 Cards)  */}
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mt-space-lg">
{/*  Total Recommended  */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Total Recommended</span>
<span className="p-2 rounded-lg bg-secondary-container/20 text-secondary">
<span className="material-symbols-outlined text-xl">recommend</span>
</span>
</div>
<div className="mt-space-md flex items-baseline justify-between">
<span className="font-headline-xl text-headline-xl font-bold text-primary">28</span>
<span className="inline-flex items-center gap-0.5 px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">
<span className="material-symbols-outlined text-xs">trending_up</span> +4 this week
        </span>
</div>
<span className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">Calibrated against STEM &amp; East Africa criteria</span>
</div>
{/*  Eligible Opportunities  */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Eligible Opportunities</span>
<span className="p-2 rounded-lg bg-primary-fixed/60 text-primary">
<span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
</span>
</div>
<div className="mt-space-md flex items-baseline justify-between">
<span className="font-headline-xl text-headline-xl font-bold text-primary">19</span>
<span className="inline-flex items-center gap-0.5 px-space-xs py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">
<span className="material-symbols-outlined text-xs">check_circle</span> 100% verified
        </span>
</div>
<span className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">No missing pre-requisite markers</span>
</div>
{/*  Saved Scholarships  */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Saved Scholarships</span>
<span className="p-2 rounded-lg bg-tertiary-fixed/40 text-tertiary">
<span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>bookmark</span>
</span>
</div>
<div className="mt-space-md flex items-baseline justify-between">
<span className="font-headline-xl text-headline-xl font-bold text-primary">7</span>
<span className="inline-flex items-center gap-0.5 px-space-xs py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">
          Portfolio ready
        </span>
</div>
<span className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">2 applications currently in progress</span>
</div>
{/*  Urgent Deadlines  */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Urgent Deadlines</span>
<span className="p-2 rounded-lg bg-error-container text-error">
<span className="material-symbols-outlined text-xl">calendar_clock</span>
</span>
</div>
<div className="mt-space-md flex items-baseline justify-between">
<span className="font-headline-xl text-headline-xl font-bold text-error">3</span>
<span className="inline-flex items-center gap-0.5 px-space-xs py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">
          &lt; 14 Days left
        </span>
</div>
<span className="mt-space-xs font-body-sm text-body-sm text-error">First deadline: Rhodes Scholar (9 days)</span>
</div>
</section>
{/*  Profile Completion Banner  */}
<section className="mt-space-lg bg-surface-container-low rounded-xl p-space-md lg:p-space-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
<svg className="w-14 h-14 -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-variant" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
<path className="text-secondary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="85, 100" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
<span className="absolute font-label-md text-label-md font-bold text-primary">85%</span>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-primary">Your dossier is 85% calibrated.</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
          Add your <strong className="text-on-surface font-semibold">Bachelor's thesis topic</strong> and <strong className="text-on-surface font-semibold">GRE scores</strong> to unlock <span className="text-secondary font-bold">6 additional verified scholarships</span>.
        </p>
</div>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<button className="px-space-md py-space-sm bg-primary text-on-primary rounded-lg font-label-lg text-label-lg font-semibold hover:bg-primary-container transition-colors">
        Complete Profile
      </button>
<button className="p-space-sm text-on-surface-variant hover:text-on-surface transition-colors" title="Dismiss suggestion">
<span className="material-symbols-outlined text-lg">close</span>
</button>
</div>
</section>
{/*  Main Content Layout (Two Panels: Left 8-col Feed, Right 4-col Sidebar)  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mt-space-xl">
{/*  Left Column (8 Columns)  */}
<div className="lg:col-span-8 flex flex-col gap-space-xl">
{/*  Section: AI Recommended  */}
<section>
<div className="flex items-center justify-between mb-space-md">
<div>
<div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-wider font-bold">
<span className="material-symbols-outlined text-base">auto_awesome</span> High Confidence Cohort
            </div>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Recommended For You</h2>
</div>
<Link className="font-label-lg text-label-lg text-secondary hover:underline flex items-center gap-1 font-bold" href="/student/discover">
            View all 28 <span className="material-symbols-outlined text-sm">arrow_forward</span>
</Link>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
{/*  Card 1  */}
<article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="flex items-start justify-between gap-space-xs">
<span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold shadow-[0_0_12px_rgba(20,184,166,0.25)]">
<span className="material-symbols-outlined text-xs">bolt</span> 96% Match
                </span>
<button aria-label="Bookmark scholarship" className="bookmark-btn text-on-surface-variant hover:text-tertiary transition-colors">
<span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>bookmark</span>
</button>
</div>
<div className="mt-space-md">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Gates Foundation</span>
<h3 className="font-headline-sm text-headline-sm text-primary mt-1 line-clamp-2 group-hover:text-secondary transition-colors">
                  Gates Cambridge International Fellowship
                </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-2">
                  Full funding for graduate degrees at the University of Cambridge for students showing academic leadership.
                </p>
</div>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container-low/50 -mx-space-md -mb-space-md p-space-md rounded-b-xl flex flex-col gap-2">
<div className="flex items-center justify-between text-body-sm">
<span className="font-bold text-primary">£45,000 / yr</span>
<span className="inline-flex items-center gap-1 text-primary text-label-sm font-bold bg-primary-fixed/50 px-1.5 py-0.5 rounded">
<span className="material-symbols-outlined text-xs">check</span> Eligible
                </span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Due in 18 days</span>
<span className="font-bold text-secondary hover:underline cursor-pointer">Deep Review</span>
</div>
</div>
</article>
{/*  Card 2  */}
<article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="flex items-start justify-between gap-space-xs">
<span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold shadow-[0_0_12px_rgba(20,184,166,0.25)]">
<span className="material-symbols-outlined text-xs">bolt</span> 93% Match
                </span>
<button aria-label="Bookmark scholarship" className="bookmark-btn text-on-surface-variant hover:text-tertiary transition-colors">
<span className="material-symbols-outlined text-lg">bookmark_border</span>
</button>
</div>
<div className="mt-space-md">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Stanford University</span>
<h3 className="font-headline-sm text-headline-sm text-primary mt-1 line-clamp-2 group-hover:text-secondary transition-colors">
                  Knight-Hennessy Scholars Program
                </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-2">
                  Cultivating a multidisciplinary, multicultural community of graduate scholars addressing complex global challenges.
                </p>
</div>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container-low/50 -mx-space-md -mb-space-md p-space-md rounded-b-xl flex flex-col gap-2">
<div className="flex items-center justify-between text-body-sm">
<span className="font-bold text-primary">Full Tuition + Stipend</span>
<span className="inline-flex items-center gap-1 text-primary text-label-sm font-bold bg-primary-fixed/50 px-1.5 py-0.5 rounded">
<span className="material-symbols-outlined text-xs">check</span> Eligible
                </span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Due in 24 days</span>
<span className="font-bold text-secondary hover:underline cursor-pointer">Deep Review</span>
</div>
</div>
</article>
{/*  Card 3  */}
<article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div>
<div className="flex items-start justify-between gap-space-xs">
<span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold shadow-[0_0_12px_rgba(20,184,166,0.25)]">
<span className="material-symbols-outlined text-xs">bolt</span> 89% Match
                </span>
<button aria-label="Bookmark scholarship" className="bookmark-btn text-on-surface-variant hover:text-tertiary transition-colors">
<span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>bookmark</span>
</button>
</div>
<div className="mt-space-md">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Schwarzman Trust</span>
<h3 className="font-headline-sm text-headline-sm text-primary mt-1 line-clamp-2 group-hover:text-secondary transition-colors">
                  Schwarzman Scholars Leadership Grant
                </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-2">
                  One-year Master’s degree program at Tsinghua University in Beijing designed to prepare the next generation of global leaders.
                </p>
</div>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container-low/50 -mx-space-md -mb-space-md p-space-md rounded-b-xl flex flex-col gap-2">
<div className="flex items-center justify-between text-body-sm">
<span className="font-bold text-primary">$80,000 Value</span>
<span className="inline-flex items-center gap-1 text-primary text-label-sm font-bold bg-primary-fixed/50 px-1.5 py-0.5 rounded">
<span className="material-symbols-outlined text-xs">check</span> Eligible
                </span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Due in 31 days</span>
<span className="font-bold text-secondary hover:underline cursor-pointer">Deep Review</span>
</div>
</div>
</article>
</div>
</section>
{/*  Section: Upcoming Deadlines Timeline Table  */}
<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm mb-space-md">
<div>
<h2 className="font-headline-md text-headline-md text-primary tracking-tight">Upcoming Deadlines</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Time-sensitive grants prioritized by closest deadline window.</p>
</div>
<div className="flex items-center gap-space-xs bg-surface-container-low p-1 rounded-lg">
<button className="px-space-sm py-1 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm font-bold shadow-xs">Next 30 Days</button>
<button className="px-space-sm py-1 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm">Fall 2026 Cycle</button>
</div>
</div>
<div className="overflow-x-auto -mx-space-lg px-space-lg">
<table className="w-full text-left font-body-sm text-body-sm">
<thead>
<tr className="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-space-sm font-bold">Countdown</th>
<th className="py-space-sm font-bold">Program &amp; Institution</th>
<th className="py-space-sm font-bold">Closing Date</th>
<th className="py-space-sm font-bold">Award Value</th>
<th className="py-space-sm font-bold text-right">Action</th>
</tr>
</thead>
<tbody className="space-y-2">
{/*  Row 1 (Urgent)  */}
<tr className="hover:bg-surface-container-low/70 transition-colors">
<td className="py-space-md whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">
<span className="material-symbols-outlined text-xs">alarm</span> 9 days left
                  </span>
</td>
<td className="py-space-md pr-space-md">
<div className="font-bold text-primary font-headline-sm text-headline-sm">Rhodes Scholarship for Global Candidates</div>
<div className="text-on-surface-variant font-label-sm">University of Oxford • Oxford, United Kingdom</div>
</td>
<td className="py-space-md whitespace-nowrap text-on-surface">Oct 14, 2025</td>
<td className="py-space-md whitespace-nowrap font-bold text-primary">£59,490</td>
<td className="py-space-md text-right whitespace-nowrap">
<Link className="inline-flex items-center gap-1 px-space-md py-space-xs bg-primary text-on-primary rounded font-label-sm text-label-sm font-bold hover:bg-primary-container transition-colors shadow-xs" href="/student/discover">
                    Start Application <span className="material-symbols-outlined text-xs">open_in_new</span>
</Link>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-surface-container-low/70 transition-colors">
<td className="py-space-md whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">
<span className="material-symbols-outlined text-xs">alarm</span> 13 days left
                  </span>
</td>
<td className="py-space-md pr-space-md">
<div className="font-bold text-primary font-headline-sm text-headline-sm">DAAD Helmut-Schmidt-Programme</div>
<div className="text-on-surface-variant font-label-sm">German Academic Exchange • Berlin, Germany</div>
</td>
<td className="py-space-md whitespace-nowrap text-on-surface">Oct 18, 2025</td>
<td className="py-space-md whitespace-nowrap font-bold text-primary">€18,600 + Allowance</td>
<td className="py-space-md text-right whitespace-nowrap">
<Link className="inline-flex items-center gap-1 px-space-md py-space-xs bg-primary text-on-primary rounded font-label-sm text-label-sm font-bold hover:bg-primary-container transition-colors shadow-xs" href="/student/discover">
                    Start Application <span className="material-symbols-outlined text-xs">open_in_new</span>
</Link>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-surface-container-low/70 transition-colors">
<td className="py-space-md whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">
<span className="material-symbols-outlined text-xs">schedule</span> 14 days left
                  </span>
</td>
<td className="py-space-md pr-space-md">
<div className="font-bold text-primary font-headline-sm text-headline-sm">Fulbright Foreign Student Fellowship</div>
<div className="text-on-surface-variant font-label-sm">US Department of State • Washington DC, USA</div>
</td>
<td className="py-space-md whitespace-nowrap text-on-surface">Oct 19, 2025</td>
<td className="py-space-md whitespace-nowrap font-bold text-primary">Full Funding</td>
<td className="py-space-md text-right whitespace-nowrap">
<Link className="inline-flex items-center gap-1 px-space-md py-space-xs bg-surface-container-high text-on-surface rounded font-label-sm text-label-sm font-bold hover:bg-surface-container-highest transition-colors" href="/student/discover">
                    Continue Draft <span className="material-symbols-outlined text-xs">edit_note</span>
</Link>
</td>
</tr>
</tbody>
</table>
</div>
</section>
{/*  Section: Recently Viewed & Activity  */}
<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<h2 className="font-headline-md text-headline-md text-primary tracking-tight">Recently Viewed &amp; History</h2>
<span className="font-label-sm text-label-sm text-on-surface-variant">Cleared after 30 days</span>
</div>
<div className="divide-y-0 flex flex-col gap-space-sm">
{/*  Item 1  */}
<div className="p-space-sm bg-surface-container-low/40 rounded-lg flex items-center justify-between hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-space-md">
<span className="p-2 rounded-lg bg-surface-container-lowest text-primary shadow-xs">
<span className="material-symbols-outlined text-xl">school</span>
</span>
<div>
<Link className="font-label-lg text-label-lg font-bold text-primary hover:underline" href="/student/discover">Rotary Peace Fellowship (Duke University)</Link>
<p className="font-body-sm text-body-sm text-on-surface-variant">Viewed 3 hours ago • Match index 88%</p>
</div>
</div>
<div className="flex items-center gap-space-sm">
<button className="toggle-save-btn p-2 rounded hover:bg-surface-container-lowest text-on-surface-variant hover:text-tertiary transition-colors" title="Toggle Saved">
<span className="material-symbols-outlined text-xl">bookmark_border</span>
</button>
<button className="p-2 rounded hover:bg-surface-container-lowest text-on-surface-variant hover:text-primary transition-colors" title="View details">
<span className="material-symbols-outlined text-xl">chevron_right</span>
</button>
</div>
</div>
{/*  Item 2  */}
<div className="p-space-sm bg-surface-container-low/40 rounded-lg flex items-center justify-between hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-space-md">
<span className="p-2 rounded-lg bg-surface-container-lowest text-primary shadow-xs">
<span className="material-symbols-outlined text-xl">biotech</span>
</span>
<div>
<Link className="font-label-lg text-label-lg font-bold text-primary hover:underline" href="/student/discover">Wellcome Trust Doctoral Studentships in Health Data</Link>
<p className="font-body-sm text-body-sm text-on-surface-variant">Viewed yesterday • Match index 91%</p>
</div>
</div>
<div className="flex items-center gap-space-sm">
<button className="toggle-save-btn p-2 rounded hover:bg-surface-container-lowest text-tertiary transition-colors" title="Toggle Saved">
<span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>bookmark</span>
</button>
<button className="p-2 rounded hover:bg-surface-container-lowest text-on-surface-variant hover:text-primary transition-colors" title="View details">
<span className="material-symbols-outlined text-xl">chevron_right</span>
</button>
</div>
</div>
{/*  Item 3  */}
<div className="p-space-sm bg-surface-container-low/40 rounded-lg flex items-center justify-between hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-space-md">
<span className="p-2 rounded-lg bg-surface-container-lowest text-primary shadow-xs">
<span className="material-symbols-outlined text-xl">public</span>
</span>
<div>
<Link className="font-label-lg text-label-lg font-bold text-primary hover:underline" href="/student/discover">Chevening British Foreign Office Grant</Link>
<p className="font-body-sm text-body-sm text-on-surface-variant">Viewed 2 days ago • Match index 94%</p>
</div>
</div>
<div className="flex items-center gap-space-sm">
<button className="toggle-save-btn p-2 rounded hover:bg-surface-container-lowest text-tertiary transition-colors" title="Toggle Saved">
<span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>bookmark</span>
</button>
<button className="p-2 rounded hover:bg-surface-container-lowest text-on-surface-variant hover:text-primary transition-colors" title="View details">
<span className="material-symbols-outlined text-xl">chevron_right</span>
</button>
</div>
</div>
</div>
</section>
</div>
{/*  Right Column: Sidebar Panels & Support (4 Columns)  */}
<div className="lg:col-span-4 flex flex-col gap-space-lg">
{/*  Academic Advisor Office Hours Widget  */}
<aside className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Collegiate Advisory</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-bold bg-primary-fixed/50 px-2 py-0.5 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span> Available Today
            </span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mt-space-sm">
            Academic Advisor Office Hours
          </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            Get personalized review on your personal statements and institutional compliance dossiers.
          </p>
<div className="mt-space-md p-space-md bg-surface-container-low rounded-lg flex items-center gap-space-md">
<img className="w-12 h-12 rounded-full object-cover shrink-0" data-alt="Portrait photo of an African woman academic advisor wearing glasses, professional blazer, softly lit university library office setting with mahogany bookshelves" src={ASSETS.portraitPlaceholder} />
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-primary truncate">Dr. Arsema Haile</span>
<span className="font-label-sm text-label-sm text-on-surface-variant truncate">Global Fellowships Lead</span>
<span className="font-label-sm text-label-sm text-secondary font-bold mt-0.5">Next slot: 3:30 PM EAT</span>
</div>
</div>
</div>
<div className="mt-space-lg flex flex-col gap-space-xs">
<button className="w-full py-space-sm px-space-md bg-primary text-on-primary font-label-lg text-label-lg font-bold rounded-lg hover:bg-primary-container transition-colors shadow-xs">
            Book 20-min Advising Session
          </button>
<button className="w-full py-space-sm px-space-md text-on-surface-variant hover:text-primary font-label-md text-label-md transition-colors text-center">
            Submit Statement of Purpose for Async Review
          </button>
</div>
</aside>
{/*  Algorithmic Profile Snapshot  */}
<aside className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<h3 className="font-headline-sm text-headline-sm text-primary">Dossier Calibration Matrix</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Status of evaluation parameters utilized by Edlegna AI engines.</p>
<div className="mt-space-md space-y-3">
<div>
<div className="flex justify-between font-label-sm text-label-sm mb-1">
<span className="text-on-surface font-semibold">Academic Transcripts &amp; GPA (3.92)</span>
<span className="text-secondary font-bold">Verified</span>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full w-full rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between font-label-sm text-label-sm mb-1">
<span className="text-on-surface font-semibold">Language Proficiency (IELTS 8.5)</span>
<span className="text-secondary font-bold">Verified</span>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full w-full rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between font-label-sm text-label-sm mb-1">
<span className="text-on-surface font-semibold">Research Thesis Abstract</span>
<span className="text-tertiary font-bold">Pending Input</span>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
<div className="bg-tertiary-container h-full w-2/5 rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between font-label-sm text-label-sm mb-1">
<span className="text-on-surface font-semibold">Standardized Testing (GRE)</span>
<span className="text-on-surface-variant">Not Started</span>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
<div className="bg-surface-variant h-full w-0 rounded-full"></div>
</div>
</div>
</div>
<div className="mt-space-md pt-space-md bg-surface-container-low/60 -mx-space-lg -mb-space-lg p-space-md rounded-b-xl">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-lg">lightbulb</span>
<span className="font-body-sm text-body-sm text-on-surface">Uploading thesis drafts unlocks tailored departmental stipends.</span>
</div>
</div>
</aside>
{/*  Quick Resources Banner  */}
<aside className="relative overflow-hidden bg-surface-container-high p-space-lg rounded-xl">
<div className="flex items-center gap-space-sm mb-space-xs text-primary">
<span className="material-symbols-outlined text-xl">library_books</span>
<span className="font-headline-sm text-headline-sm font-bold">Writing Repositories</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Access 45+ sample winning essays tailored for Cambridge, Oxford, and Ivy League applications.</p>
<Link className="mt-space-md inline-flex items-center gap-1 font-label-md text-label-md font-bold text-secondary hover:underline" href="/student/discover">
          Explore Sample Archive <span className="material-symbols-outlined text-xs">arrow_forward</span>
</Link>
</aside>
</div>
</div>
</div>
</div></StudentLayout>;
}
