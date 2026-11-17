'use client';

import Link from 'next/link';
import { AdminLayout } from '@/components/layout/AdminLayout';

export default function AdminDashboardPage() {
  return <AdminLayout><div className="relative  w-full px-gutter-desktop bg-surface min-h-screen"><div className="flex flex-col w-full">
<div className="py-space-lg flex flex-col gap-space-xl">
{/*  Header Greeting & Administrative Actions  */}
<div className="flex flex-col xl:flex-row items-start xl:items-end justify-between gap-space-lg">
<div className="flex flex-col gap-space-xs max-w-2xl">
<div className="flex items-center gap-2">
<span className="px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm tracking-wider uppercase font-semibold">Live System Oversight</span>
<span className="text-outline-variant font-label-sm text-label-sm">|</span>
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
            Sync Interval: 60s
          </span>
</div>
<h1 className="font-headline-xl text-headline-xl text-primary tracking-tight">Welcome to Edlegna Administration</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Real-time overview of scholarship registries, applicant engagement, AI matching health, and system governance.</p>
</div>
<div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
<button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-lowest text-primary font-label-lg text-label-lg shadow-sm hover:bg-surface-container-high transition-all active:scale-95">
<span className="material-symbols-outlined text-[18px] text-secondary">sync</span>
<span>Run Verification Sync</span>
</button>
<button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-lowest text-primary font-label-lg text-label-lg shadow-sm hover:bg-surface-container-high transition-all active:scale-95">
<span className="material-symbols-outlined text-[18px] text-primary">download</span>
<span>Generate Audit Report</span>
</button>
<button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary-container transition-all active:scale-95">
<span className="material-symbols-outlined text-[20px]">add</span>
<span>+ Add New Scholarship</span>
</button>
</div>
</div>
{/*  6 KPI Metric Cards Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-space-md">
{/*  1. Total Scholarships  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-start justify-between gap-2">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Total Scholarships</span>
<span className="font-headline-lg text-headline-lg text-primary mt-1 font-bold">1,428</span>
</div>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary flex-shrink-0">
<span className="material-symbols-outlined text-[18px]">account_balance</span>
</div>
</div>
<div className="mt-4 pt-3 flex flex-col gap-1.5">
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="text-secondary font-semibold flex items-center gap-0.5">
<span className="material-symbols-outlined text-[14px]">trending_up</span>+34 (+2.8%)
            </span>
<span className="text-outline">this month</span>
</div>
<div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full w-[78%]"></div>
</div>
</div>
</div>
{/*  2. Active Opportunities  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-start justify-between gap-2">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Active Opportunities</span>
<span className="font-headline-lg text-headline-lg text-primary mt-1 font-bold">1,294</span>
</div>
<div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
<span className="material-symbols-outlined text-[18px]">verified</span>
</div>
</div>
<div className="mt-4 pt-3 flex flex-col gap-1.5">
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="text-secondary font-semibold">90.6% Live</span>
<span className="text-outline">open intake</span>
</div>
<div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full w-[90.6%]"></div>
</div>
</div>
</div>
{/*  3. Expired / Archived  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-start justify-between gap-2">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Archived / Expired</span>
<span className="font-headline-lg text-headline-lg text-on-surface mt-1 font-bold">134</span>
</div>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-outline flex-shrink-0">
<span className="material-symbols-outlined text-[18px]">archive</span>
</div>
</div>
<div className="mt-4 pt-3 flex flex-col gap-1.5">
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="text-tertiary font-semibold">12 Pending Purge</span>
<span className="text-outline">review queue</span>
</div>
<div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
<div className="bg-tertiary h-full rounded-full w-[28%]"></div>
</div>
</div>
</div>
{/*  4. Registered Students  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-start justify-between gap-2">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Registered Students</span>
<span className="font-headline-lg text-headline-lg text-primary mt-1 font-bold">24,850</span>
</div>
<div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
<span className="material-symbols-outlined text-[18px]">school</span>
</div>
</div>
<div className="mt-4 pt-3 flex flex-col gap-1.5">
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="text-secondary font-semibold">+1,240</span>
<span className="text-outline">94.2% dossiers</span>
</div>
<div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full w-[94.2%]"></div>
</div>
</div>
</div>
{/*  5. AI Semantic Inquiries  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-start justify-between gap-2">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">AI Inquiries</span>
<span className="font-headline-lg text-headline-lg text-primary mt-1 font-bold">184.2k</span>
</div>
<div className="w-8 h-8 rounded-lg bg-secondary-container/20 flex items-center justify-center text-on-secondary-container flex-shrink-0">
<span className="material-symbols-outlined text-[18px]">psychology</span>
</div>
</div>
<div className="mt-4 pt-3 flex flex-col gap-1.5">
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="text-on-secondary-container font-semibold">142ms avg</span>
<span className="text-outline">96.4% vector acc</span>
</div>
<div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
<div className="bg-on-secondary-container h-full rounded-full w-[96.4%]"></div>
</div>
</div>
</div>
{/*  6. Saved Grants in Portfolios  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-start justify-between gap-2">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Saved Grants</span>
<span className="font-headline-lg text-headline-lg text-primary mt-1 font-bold">52,190</span>
</div>
<div className="w-8 h-8 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed flex-shrink-0">
<span className="material-symbols-outlined text-[18px]">bookmark_heart</span>
</div>
</div>
<div className="mt-4 pt-3 flex flex-col gap-1.5">
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="text-tertiary font-semibold">€42.8M total</span>
<span className="text-outline">tracked endowment</span>
</div>
<div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
<div className="bg-tertiary h-full rounded-full w-[82%]"></div>
</div>
</div>
</div>
</div>
{/*  Middle Analytical Section (60% / 40%)  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
{/*  Column 1: Intake & Upcoming Deadlines (60% = 7 cols)  */}
<div className="lg:col-span-7 flex flex-col gap-space-xl">
{/*  Scholarship Intake & Growth Analytics  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Volume Velocity</span>
<h2 className="font-headline-md text-headline-md text-primary">Scholarship Intake &amp; Growth Analytics</h2>
</div>
<div className="flex items-center bg-surface-container-low p-1 rounded-lg text-on-surface-variant font-label-sm text-label-sm">
<button className="px-3 py-1 rounded bg-surface-container-lowest text-primary font-semibold shadow-xs">Last 30 Days</button>
<button className="px-3 py-1 rounded hover:text-on-surface transition-colors">Q3 2025</button>
<button className="px-3 py-1 rounded hover:text-on-surface transition-colors">YTD</button>
</div>
</div>
{/*  Rich SVG Area/Bar Graph Visualization  */}
<div className="w-full h-56 pt-4 flex flex-col justify-end">
<svg className="w-full h-44 overflow-visible" fill="none" preserveAspectRatio="none" viewBox="0 0 680 160">
{/*  Grid lines  */}
<line className="text-surface-container-high" stroke="currentColor" strokeDasharray="4 4" x1="0" x2="680" y1="20" y2="20"></line>
<line className="text-surface-container-high" stroke="currentColor" strokeDasharray="4 4" x1="0" x2="680" y1="65" y2="65"></line>
<line className="text-surface-container-high" stroke="currentColor" strokeDasharray="4 4" x1="0" x2="680" y1="110" y2="110"></line>
<line className="text-surface-container-high" stroke="currentColor" x1="0" x2="680" y1="155" y2="155"></line>
{/*  Monthly additions area gradient fill  */}
<defs>
<linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#006b5f" stopOpacity="0.25"></stop>
<stop offset="100%" stopColor="#006b5f" stopOpacity="0.0"></stop>
</linearGradient>
</defs>
<path d="M0,130 C60,115 100,95 160,85 C220,75 260,110 320,60 C380,10 440,70 500,45 C560,20 620,35 680,25 L680,155 L0,155 Z" fill="url(#areaGradient)"></path>
{/*  Line 1: New Additions  */}
<path d="M0,130 C60,115 100,95 160,85 C220,75 260,110 320,60 C380,10 440,70 500,45 C560,20 620,35 680,25" fill="none" stroke="#006b5f" strokeLinecap="round" strokeWidth="2.5"></path>
{/*  Line 2: Closed Applications (Dotted)  */}
<path d="M0,145 C60,140 100,120 160,125 C220,130 260,100 320,115 C380,80 440,90 500,75 C560,85 620,65 680,50" fill="none" stroke="#727975" strokeDasharray="5 4" strokeWidth="2"></path>
{/*  Data Node Highlights  */}
<circle cx="320" cy="60" fill="#006b5f" r="4.5" stroke="#ffffff" strokeWidth="2"></circle>
<circle cx="500" cy="45" fill="#006b5f" r="4.5" stroke="#ffffff" strokeWidth="2"></circle>
<circle cx="680" cy="25" fill="#08241b" r="5" stroke="#ffffff" strokeWidth="2"></circle>
</svg>
<div className="flex justify-between text-outline font-label-sm text-label-sm pt-2">
<span>Aug 01</span>
<span>Aug 08</span>
<span>Aug 15</span>
<span>Aug 22</span>
<span>Aug 29</span>
<span>Sep 05</span>
<span>Sep 12 (Today)</span>
</div>
</div>
<div className="flex items-center justify-between pt-3 border-t-0 bg-surface-container-low p-3 rounded-lg">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm text-on-surface">New Registrations (+342)</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-outline"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Closed Applications (-118)</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold">Net +224 Openings</span>
</div>
{/*  Breakdown pills  */}
<div className="grid grid-cols-3 gap-2 pt-1">
<div className="p-2.5 rounded-lg bg-surface-container-high/40 flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Undergraduate Grants</span>
<div className="flex items-baseline justify-between mt-1">
<span className="font-headline-sm text-headline-sm text-primary font-bold">38%</span>
<span className="font-label-sm text-label-sm text-outline">542 progs</span>
</div>
</div>
<div className="p-2.5 rounded-lg bg-surface-container-high/40 flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Master's &amp; Postgrad</span>
<div className="flex items-baseline justify-between mt-1">
<span className="font-headline-sm text-headline-sm text-primary font-bold">44%</span>
<span className="font-label-sm text-label-sm text-outline">628 progs</span>
</div>
</div>
<div className="p-2.5 rounded-lg bg-surface-container-high/40 flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Doctoral / Postdoc</span>
<div className="flex items-baseline justify-between mt-1">
<span className="font-headline-sm text-headline-sm text-primary font-bold">18%</span>
<span className="font-label-sm text-label-sm text-outline">258 progs</span>
</div>
</div>
</div>
</div>
{/*  Upcoming Critical Deadlines (Next 14 Days)  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-error font-semibold">Priority Action</span>
<h2 className="font-headline-md text-headline-md text-primary">Upcoming Critical Deadlines (Next 14 Days)</h2>
</div>
<span className="px-2.5 py-1 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">
              3 High Urgency
            </span>
</div>
<div className="flex flex-col gap-3">
{/*  Rhodes Scholarship  */}
<div className="p-4 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-start gap-3.5 min-w-0">
<div className="w-10 h-10 rounded-lg bg-primary text-on-primary font-headline-sm text-headline-sm flex items-center justify-center flex-shrink-0">
                  R
                </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">Rhodes Scholarship for Global Candidates</span>
<span className="px-2 py-0.5 rounded bg-error/10 text-error font-label-sm text-label-sm font-bold flex-shrink-0">9 Days Left</span>
</div>
<div className="flex items-center gap-3 text-on-surface-variant font-label-sm text-label-sm mt-0.5">
<span>Oxford University, UK</span>
<span>•</span>
<span className="font-semibold text-secondary">412 active applicants</span>
<span>•</span>
<span>Full Tuition + £19,237</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 self-end sm:self-center flex-shrink-0">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-primary hover:bg-surface-container-highest font-label-sm text-label-sm transition-colors shadow-xs">
                  View Applicants
                </button>
<button className="p-1.5 rounded-lg bg-surface-container-lowest text-secondary hover:bg-surface-container-highest transition-colors shadow-xs" title="Broadcast Reminder">
<span className="material-symbols-outlined text-[18px]">send</span>
</button>
</div>
</div>
{/*  DAAD Helmut-Schmidt Programme  */}
<div className="p-4 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-start gap-3.5 min-w-0">
<div className="w-10 h-10 rounded-lg bg-secondary text-on-secondary font-headline-sm text-headline-sm flex items-center justify-center flex-shrink-0">
                  D
                </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">DAAD Helmut-Schmidt Programme (PPGG)</span>
<span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold flex-shrink-0">13 Days Left</span>
</div>
<div className="flex items-center gap-3 text-on-surface-variant font-label-sm text-label-sm mt-0.5">
<span>Federal Republic of Germany</span>
<span>•</span>
<span className="font-semibold text-secondary">680 active applicants</span>
<span>•</span>
<span>€934/mo + Travel</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 self-end sm:self-center flex-shrink-0">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-primary hover:bg-surface-container-highest font-label-sm text-label-sm transition-colors shadow-xs">
                  View Applicants
                </button>
<button className="p-1.5 rounded-lg bg-surface-container-lowest text-secondary hover:bg-surface-container-highest transition-colors shadow-xs" title="Audit Donor Portal">
<span className="material-symbols-outlined text-[18px]">fact_check</span>
</button>
</div>
</div>
{/*  Chevening Leadership Grant  */}
<div className="p-4 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-start gap-3.5 min-w-0">
<div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-headline-sm flex items-center justify-center flex-shrink-0">
                  C
                </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">Chevening Global Leadership Grant</span>
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm font-semibold flex-shrink-0">Closing in 28 Days</span>
</div>
<div className="flex items-center gap-3 text-on-surface-variant font-label-sm text-label-sm mt-0.5">
<span>Foreign, Commonwealth &amp; Dev Office (UK)</span>
<span>•</span>
<span className="font-semibold text-secondary">1,024 active applicants</span>
<span>•</span>
<span>Full Degree Funding</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 self-end sm:self-center flex-shrink-0">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-primary hover:bg-surface-container-highest font-label-sm text-label-sm transition-colors shadow-xs">
                  View Applicants
                </button>
<button className="p-1.5 rounded-lg bg-surface-container-lowest text-secondary hover:bg-surface-container-highest transition-colors shadow-xs" title="Broadcast Reminder">
<span className="material-symbols-outlined text-[18px]">send</span>
</button>
</div>
</div>
</div>
</div>
</div>
{/*  Column 2: Regional Distribution & Admin Activity (40% = 5 cols)  */}
<div className="lg:col-span-5 flex flex-col gap-space-xl">
{/*  Scholarship Distribution by Host Region / Country  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Geographic Governance</span>
<h2 className="font-headline-md text-headline-md text-primary">Distribution by Host Region</h2>
</div>
<div className="flex items-center gap-6 py-2">
{/*  Inline SVG Donut Chart  */}
<div className="relative w-36 h-36 flex-shrink-0 flex items-center justify-center">
<svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="38" stroke="#eff4ff" strokeWidth="12"></circle>
{/*  28% Germany  */}
<circle cx="50" cy="50" fill="none" r="38" stroke="#08241b" strokeDasharray="66.85 238.76" strokeDashoffset="0" strokeWidth="12"></circle>
{/*  24% UK  */}
<circle cx="50" cy="50" fill="none" r="38" stroke="#006b5f" strokeDasharray="57.3 238.76" strokeDashoffset="-66.85" strokeWidth="12"></circle>
{/*  22% USA/Canada  */}
<circle cx="50" cy="50" fill="none" r="38" stroke="#6df5e1" strokeDasharray="52.52 238.76" strokeDashoffset="-124.15" strokeWidth="12"></circle>
{/*  14% Nordic  */}
<circle cx="50" cy="50" fill="none" r="38" stroke="#cba72f" strokeDasharray="33.42 238.76" strokeDashoffset="-176.67" strokeWidth="12"></circle>
{/*  12% Japan / Pan-Asia  */}
<circle cx="50" cy="50" fill="none" r="38" stroke="#727975" strokeDasharray="28.65 238.76" strokeDashoffset="-210.09" strokeWidth="12"></circle>
</svg>
<div className="absolute flex flex-col items-center justify-center text-center">
<span className="font-headline-sm text-headline-sm text-primary font-bold leading-none">1,428</span>
<span className="font-label-sm text-label-sm text-on-surface-variant text-[10px]">Indexed</span>
</div>
</div>
{/*  Legend with Counts  */}
<div className="flex flex-col gap-2 flex-1">
<div className="flex items-center justify-between text-on-surface font-label-sm text-label-sm">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0"></span>
<span className="truncate">Germany &amp; DAAD</span>
</div>
<span className="font-semibold">28% (400)</span>
</div>
<div className="flex items-center justify-between text-on-surface font-label-sm text-label-sm">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-secondary flex-shrink-0"></span>
<span className="truncate">United Kingdom &amp; FCDO</span>
</div>
<span className="font-semibold">24% (343)</span>
</div>
<div className="flex items-center justify-between text-on-surface font-label-sm text-label-sm">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-secondary-container flex-shrink-0"></span>
<span className="truncate">US &amp; Canada</span>
</div>
<span className="font-semibold">22% (314)</span>
</div>
<div className="flex items-center justify-between text-on-surface font-label-sm text-label-sm">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary-container flex-shrink-0"></span>
<span className="truncate">Nordic Councils</span>
</div>
<span className="font-semibold">14% (200)</span>
</div>
<div className="flex items-center justify-between text-on-surface font-label-sm text-label-sm">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-outline flex-shrink-0"></span>
<span className="truncate">Japan (MEXT) / Asia</span>
</div>
<span className="font-semibold">12% (171)</span>
</div>
</div>
</div>
<div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-secondary">verified_user</span>
              Embassy &amp; Cultural Attache Linkages
            </span>
<span className="font-semibold text-primary">All 52 Sovereign Portals Live</span>
</div>
</div>
{/*  Recent Administrative & System Activities  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Audit Trail</span>
<h2 className="font-headline-md text-headline-md text-primary">System Activities</h2>
</div>
<Link className="font-label-sm text-label-sm text-secondary hover:underline font-semibold" href="/admin/dashboard">View Master Log</Link>
</div>
<div className="flex flex-col gap-3">
{/*  Feed Item 1  */}
<div className="p-3 rounded-lg bg-surface-container-low flex items-start gap-3">
<div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center flex-shrink-0 text-[12px] font-bold">
                AB
              </div>
<div className="flex flex-col min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-primary font-semibold">Dr. Aster Berhanu</span>
<span className="font-label-sm text-label-sm text-outline">14m ago</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-snug">
                  Approved funding tier for <span className="text-on-surface font-semibold">Mastercard Foundation Cambridge</span> (€59k/yr).
                </p>
<span className="mt-1.5 self-start px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                  Tier-1 Endorsement
                </span>
</div>
</div>
{/*  Feed Item 2  */}
<div className="p-3 rounded-lg bg-surface-container-low flex items-start gap-3">
<div className="w-7 h-7 rounded-full bg-secondary/20 text-secondary flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-[15px]">smart_toy</span>
</div>
<div className="flex flex-col min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Automated Sync Daemon</span>
<span className="font-label-sm text-label-sm text-outline">42m ago</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-snug">
                  Crawled and verified 14 partner university admission portals. Zero 404 links found.
                </p>
<span className="mt-1.5 self-start px-2 py-0.5 rounded bg-secondary-container/30 text-on-secondary-container font-label-sm text-label-sm">
                  Crawl: Success 100%
                </span>
</div>
</div>
{/*  Feed Item 3  */}
<div className="p-3 rounded-lg bg-surface-container-low flex items-start gap-3">
<div className="w-7 h-7 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center flex-shrink-0 text-[12px] font-bold">
                AK
              </div>
<div className="flex flex-col min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-primary font-semibold">Abebe K. (Admin)</span>
<span className="font-label-sm text-label-sm text-outline">2h ago</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-snug">
                  Flagged eligibility criteria update for Chevening IELTS requirement (7.0 band threshold).
                </p>
<span className="mt-1.5 self-start px-2 py-0.5 rounded bg-tertiary-container/20 text-on-tertiary-container font-label-sm text-label-sm">
                  Rule Trigger Updated
                </span>
</div>
</div>
{/*  Feed Item 4  */}
<div className="p-3 rounded-lg bg-surface-container-low flex items-start gap-3">
<div className="w-7 h-7 rounded-full bg-surface-container-high text-outline flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-[15px]">security</span>
</div>
<div className="flex flex-col min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Security Guardrail</span>
<span className="font-label-sm text-label-sm text-outline">4h ago</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-snug">
                  Rate limit trigger resolved for student bulk export. Identity challenge passed.
                </p>
<span className="mt-1.5 self-start px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                  Auth Resolved
                </span>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Bottom Section: Recently Added Opportunities Grid  */}
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Registry Influx</span>
<h2 className="font-headline-md text-headline-md text-primary">Recently Added Opportunities</h2>
</div>
<button className="px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-primary font-label-sm text-label-sm hover:bg-surface-container-high transition-colors shadow-xs flex items-center gap-1.5">
<span>View All in Catalog</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
{/*  Card 1  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-3">
<div className="flex items-start justify-between gap-2">
<div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-headline-sm flex items-center justify-center font-bold">
              MF
            </div>
<span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold">
              Active / Published
            </span>
</div>
<div className="flex flex-col">
<h3 className="font-headline-sm text-headline-sm text-primary font-semibold line-clamp-1">Mastercard Scholars at Cambridge</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">United Kingdom • Cambridge Trust</span>
</div>
<div className="pt-2 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="text-primary font-semibold">€59,000 / yr</span>
<span>Deadline: Nov 15</span>
</div>
</div>
{/*  Card 2  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-3">
<div className="flex items-start justify-between gap-2">
<div className="w-10 h-10 rounded-lg bg-secondary text-on-secondary font-headline-sm text-headline-sm flex items-center justify-center font-bold">
              KA
            </div>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
              Draft Review
            </span>
</div>
<div className="flex flex-col">
<h3 className="font-headline-sm text-headline-sm text-primary font-semibold line-clamp-1">KAUST Global Fellowship in Energy</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Saudi Arabia • Graduate Studies</span>
</div>
<div className="pt-2 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="text-primary font-semibold">$75,000 / yr + Lab</span>
<span>Deadline: Oct 30</span>
</div>
</div>
{/*  Card 3  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-3">
<div className="flex items-start justify-between gap-2">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest text-primary font-headline-sm text-headline-sm flex items-center justify-center font-bold">
              SI
            </div>
<span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold">
              Active / Published
            </span>
</div>
<div className="flex flex-col">
<h3 className="font-headline-sm text-headline-sm text-primary font-semibold line-clamp-1">Swedish Institute Global Leaders (SISGP)</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Sweden • Ministry of Foreign Affairs</span>
</div>
<div className="pt-2 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="text-primary font-semibold">12,000 SEK / mo</span>
<span>Deadline: Jan 16</span>
</div>
</div>
{/*  Card 4  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-3">
<div className="flex items-start justify-between gap-2">
<div className="w-10 h-10 rounded-lg bg-tertiary text-on-tertiary font-headline-sm text-headline-sm flex items-center justify-center font-bold">
              AU
            </div>
<span className="px-2 py-0.5 rounded-full bg-error/10 text-error font-label-sm text-label-sm font-semibold">
              Needs Donor Verification
            </span>
</div>
<div className="flex flex-col">
<h3 className="font-headline-sm text-headline-sm text-primary font-semibold line-clamp-1">Australia Awards Fellowship for Africa</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Australia • DFAT Consortium</span>
</div>
<div className="pt-2 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="text-primary font-semibold">Full Fellowship</span>
<span>Deadline: Dec 01</span>
</div>
</div>
</div>
</div>
{/*  Quick Link / Regulatory Compliance Notice Banner  */}
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<div className="flex items-center gap-3.5">
<div className="w-9 h-9 rounded-lg bg-primary text-on-primary flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-[20px]">verified</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-primary font-semibold">Compliance Notice</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Ethiopian Higher Education &amp; Foreign Fellowship Alignment Charter v2.4 actively enforced. All 1,428 listings verified against predatory fee prohibitions.
          </p>
</div>
</div>
<div className="flex items-center gap-3 flex-shrink-0 self-end md:self-center">
<Link className="font-label-sm text-label-sm text-secondary hover:underline font-semibold flex items-center gap-1" href="/admin/dashboard">
<span>Charter Documentation</span>
<span className="material-symbols-outlined text-[15px]">open_in_new</span>
</Link>
</div>
</div>
</div>
</div></div></AdminLayout>;
}
