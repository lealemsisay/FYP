'use client';

import Link from 'next/link';
import { AdminLayout } from '@/components/layout/AdminLayout';

export default function ScholarshipManagementPage() {
  return <AdminLayout><div className="relative  w-full px-gutter-desktop bg-surface min-h-screen"><div className="flex flex-col w-full pb-16">
{/*  Top Academic Sub-navigation & Live Metrics Strip  */}
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-4 mb-6">
<div className="flex flex-wrap items-center gap-3">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold px-2.5 py-1 bg-primary-fixed/40 rounded">Charter Registry</span>
<span className="text-outline-variant font-label-md text-label-md">/</span>
<span className="font-label-md text-label-md text-on-surface-variant">Central Curated Endowment Index</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm text-secondary font-semibold">Autonomous Indexer v4.8 Synchronized</span>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">Active Global Portfolios:</span>
<span className="font-label-md text-label-md font-semibold text-primary">1,428 charters</span>
</div>
<div className="h-4 w-px bg-surface-container-highest"></div>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">Cumulative Value:</span>
<span className="font-label-md text-label-md font-semibold text-secondary">$84.2M Allocated</span>
</div>
</div>
</div>
{/*  Page Header Title Area  */}
<div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 pb-6">
<div className="flex flex-col max-w-3xl">
<h1 className="font-headline-xl text-headline-xl text-primary font-medium tracking-tight">
        Scholarship Directory &amp; Management
      </h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl">
        Comprehensive repository of verified domestic and international scholarships, fellowship charters, and funding models with real-time academic validation pipelines.
      </p>
</div>
{/*  Top Right Primary Actions Group  */}
<div className="flex flex-wrap items-center gap-3">
{/*  Export CSV / Excel Button  */}
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-lowest text-primary shadow-sm hover:bg-surface-container-low transition-all font-label-lg text-label-lg group">
<span className="material-symbols-outlined text-[18px] text-secondary group-hover:-translate-y-0.5 transition-transform">download</span>
<span>Export CSV / Excel</span>
</button>
{/*  Batch Actions Dropdown Button  */}
<div className="relative">
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container-low transition-all font-label-lg text-label-lg" id="batchActionsBtn">
<span className="material-symbols-outlined text-[18px] text-outline">checklist</span>
<span>Batch Actions (1)</span>
<span className="material-symbols-outlined text-[16px] text-outline">expand_more</span>
</button>
</div>
{/*  Add New Scholarship Primary Forest Green Button  */}
<Link className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-primary text-on-primary shadow-md hover:bg-primary-container transition-all font-label-lg text-label-lg tracking-wide" href="/admin/scholarships/new">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
<span className="font-medium">+ Add New Scholarship</span>
</Link>
</div>
</div>
{/*  Visual Analytical KPI Tiers (Ivy Academic Aesthetics)  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
<div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Live Active Charters</span>
<span className="font-headline-md text-headline-md text-primary mt-1 font-semibold">1,214</span>
<span className="font-label-sm text-label-sm text-secondary mt-1 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">trending_up</span> +32 this cycle
        </span>
</div>
<div className="w-11 h-11 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">verified</span>
</div>
</div>
<div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Pending Compliance</span>
<span className="font-headline-md text-headline-md text-tertiary mt-1 font-semibold">89</span>
<span className="font-label-sm text-label-sm text-tertiary mt-1 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">schedule</span> 14 high priority
        </span>
</div>
<div className="w-11 h-11 rounded-xl bg-tertiary-fixed/30 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-[22px]">policy</span>
</div>
</div>
<div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Expiring Under 14d</span>
<span className="font-headline-md text-headline-md text-error mt-1 font-semibold">24</span>
<span className="font-label-sm text-label-sm text-error mt-1 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">alarm</span> Imminent intake lock
        </span>
</div>
<div className="w-11 h-11 rounded-xl bg-error-container/40 flex items-center justify-center text-error">
<span className="material-symbols-outlined text-[22px]">timer</span>
</div>
</div>
<div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Institutional Match Rate</span>
<span className="font-headline-md text-headline-md text-primary mt-1 font-semibold">94.6%</span>
<span className="font-label-sm text-label-sm text-secondary mt-1 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">check_circle</span> Automated verification
        </span>
</div>
<div className="w-11 h-11 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]">pie_chart</span>
</div>
</div>
</div>
{/*  Filter & Search Bar Toolbar  */}
<div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm mb-6 flex flex-col gap-4">
{/*  Top Filter Row: Broad Search & View Switcher  */}
<div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
{/*  Broad Search Box  */}
<div className="flex-1 relative">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
<input className="w-full pl-11 pr-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline" placeholder="Search by scholarship title, donor agency, university, country, or ID..." type="text" value="DAAD, Rhodes, Cambridge, MEXT" />
</div>
{/*  Right View Switcher & Result Counter  */}
<div className="flex items-center justify-between lg:justify-end gap-4">
<span className="font-label-md text-label-md text-on-surface-variant whitespace-nowrap">
          Showing <span className="font-semibold text-on-surface">1–8</span> of <span className="font-semibold text-on-surface">1,428</span> scholarships
        </span>
<div className="flex items-center p-1 bg-surface-container-low rounded-lg gap-1">
<button className="px-2.5 py-1.5 rounded-md bg-surface-container-lowest text-primary shadow-sm font-label-sm text-label-sm flex items-center gap-1.5 font-medium" title="Table View">
<span className="material-symbols-outlined text-[16px]">table_rows</span>
<span className="hidden sm:inline">Table</span>
</button>
<button className="px-2.5 py-1.5 rounded-md text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm flex items-center gap-1.5 font-medium transition-colors" title="Grid View">
<span className="material-symbols-outlined text-[16px]">grid_view</span>
<span className="hidden sm:inline">Cards</span>
</button>
</div>
</div>
</div>
{/*  Secondary Filter Bar Chips & Selectors  */}
<div className="flex flex-wrap items-center gap-2.5 pt-2">
{/*  Country Filter  */}
<div className="relative">
<select className="appearance-none pl-3 pr-8 py-1.5 bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md rounded-lg cursor-pointer focus:outline-none transition-colors">
<option>Host Country: All (142 Destinations)</option>
<option>Germany (84)</option>
<option>United Kingdom (215)</option>
<option>Switzerland (31)</option>
<option>Japan (62)</option>
<option>Multi-Region / Pan-African (94)</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-outline text-[16px]">expand_more</span>
</div>
{/*  Degree Level  */}
<div className="relative">
<select className="appearance-none pl-3 pr-8 py-1.5 bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md rounded-lg cursor-pointer focus:outline-none transition-colors">
<option>Degree Level: All Levels (Undergrad, Master's, PhD)</option>
<option>Postgraduate / Master's</option>
<option>Doctorate (PhD)</option>
<option>Postdoctoral Fellowship</option>
<option>Undergraduate</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-outline text-[16px]">expand_more</span>
</div>
{/*  Funding Package  */}
<div className="relative">
<select className="appearance-none pl-3 pr-8 py-1.5 bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md rounded-lg cursor-pointer focus:outline-none transition-colors">
<option>Funding Model: All Coverage (Full, Partial, Stipend)</option>
<option>100% Full Comprehensive (Tuition + Stipend)</option>
<option>Tuition Waiver Only</option>
<option>Monthly Living Stipend</option>
<option>Research Equipment Grant</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-outline text-[16px]">expand_more</span>
</div>
{/*  Status Filter  */}
<div className="relative">
<select className="appearance-none pl-3 pr-8 py-1.5 bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md rounded-lg cursor-pointer focus:outline-none transition-colors">
<option>Status: All Statuses</option>
<option>Active / Published</option>
<option>Under Review</option>
<option>Expiring Soon (&lt;14 Days)</option>
<option>Draft</option>
<option>Archived</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-outline text-[16px]">expand_more</span>
</div>
{/*  Quick Toggle Verified Only  */}
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary/15 font-label-md text-label-md font-medium transition-colors">
<span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
<span>Verified Only</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
</button>
{/*  Clear Filters Reset  */}
<button className="ml-auto inline-flex items-center gap-1 px-2.5 py-1.5 text-on-surface-variant hover:text-error font-label-sm text-label-sm transition-colors">
<span className="material-symbols-outlined text-[14px]">refresh</span>
<span>Reset Filters</span>
</button>
</div>
</div>
{/*  Primary Interactive Data Table Surface  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col relative">
<div className="overflow-x-auto min-h-[580px]">
<table className="w-full text-left border-collapse min-w-[1100px]">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider select-none">
<th className="py-3.5 px-4 w-12 text-center">
<input defaultChecked className="w-4 h-4 rounded text-primary accent-primary cursor-pointer focus:ring-0" type="checkbox" />
</th>
<th className="py-3.5 px-4 font-semibold hover:text-primary transition-colors cursor-pointer group">
<div className="flex items-center gap-1.5">
<span>Scholarship &amp; Institution</span>
<span className="material-symbols-outlined text-[16px] text-primary">arrow_upward</span>
</div>
</th>
<th className="py-3.5 px-4 font-semibold hover:text-primary transition-colors cursor-pointer group">
<div className="flex items-center gap-1.5">
<span>Host Region</span>
<span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">unfold_more</span>
</div>
</th>
<th className="py-3.5 px-4 font-semibold hover:text-primary transition-colors cursor-pointer group">
<div className="flex items-center gap-1.5">
<span>Degree Level</span>
<span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">unfold_more</span>
</div>
</th>
<th className="py-3.5 px-4 font-semibold hover:text-primary transition-colors cursor-pointer group">
<div className="flex items-center gap-1.5">
<span>Funding Package</span>
<span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">unfold_more</span>
</div>
</th>
<th className="py-3.5 px-4 font-semibold hover:text-primary transition-colors cursor-pointer group">
<div className="flex items-center gap-1.5">
<span>Application Deadline</span>
<span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">unfold_more</span>
</div>
</th>
<th className="py-3.5 px-4 font-semibold hover:text-primary transition-colors cursor-pointer group">
<div className="flex items-center gap-1.5">
<span>Status</span>
<span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">unfold_more</span>
</div>
</th>
<th className="py-3.5 px-4 text-right font-semibold w-16">
<span>Actions</span>
</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container">
{/*  ROW 1 (ACTIVE / SELECTED STATE WITH VISIBLE ACTION POPUP)  */}
<tr className="bg-primary-fixed/20 hover:bg-primary-fixed/30 transition-colors relative">
<td className="py-4 px-4 text-center">
<input defaultChecked className="w-4 h-4 rounded text-primary accent-primary cursor-pointer focus:ring-0" type="checkbox" />
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<Link className="font-headline-sm text-headline-sm text-primary hover:underline font-semibold leading-tight" href="/admin/scholarships/daad-helmut-schmidt-programme">
                    DAAD Helmut-Schmidt-Programme (PPGG)
                  </Link>
<span className="inline-flex items-center px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-mono text-label-sm font-semibold">
                    #EDL-2025-0891
                  </span>
</div>
<div className="flex items-center gap-2 mt-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Federal Ministry for Economic Cooperation &amp; Development (BMZ)</span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="font-label-sm text-label-sm text-secondary font-medium">Bonn Secretariat Verified</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<span className="text-[18px]">🇩🇪</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-medium leading-none">Germany</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">Bonn, Passau, Erfurt Consortia</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                Master's (Postgrad)
              </span>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-semibold text-on-surface">€11,208 / yr</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Full Tuition + Health Insurance</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col items-start gap-1">
<span className="font-body-sm text-body-sm font-medium text-on-surface">Oct 18, 2025</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[12px]">schedule</span> 13 days left
                </span>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary/15 text-secondary font-label-sm text-label-sm font-semibold">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                Active / Published
              </span>
</td>
<td className="py-4 px-4 text-right relative">
<button className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors" title="Manage row">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
{/*  OPEN INTERACTIVE ACTION DROPDOWN OVERLAY (Explicitly Displayed for Row 1)  */}
<div className="absolute right-4 top-12 z-30 w-56 p-1.5 rounded-xl bg-surface-container-lowest shadow-xl text-left flex flex-col gap-0.5 animate-fadeIn">
<div className="px-3 py-1.5 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                  Charter Ops
                </div>
<Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-on-surface hover:bg-surface-container-low font-label-md text-label-md transition-colors" href="/scholarships/daad-helmut-schmidt-programme">
<span className="material-symbols-outlined text-[18px] text-secondary">visibility</span>
<span>View Public Listing</span>
</Link>
<Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-on-surface hover:bg-surface-container-low font-label-md text-label-md transition-colors" href="/admin/scholarships/daad-helmut-schmidt-programme/edit">
<span className="material-symbols-outlined text-[18px] text-primary">edit</span>
<span>Edit Scholarship</span>
</Link>
<button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-on-surface hover:bg-surface-container-low font-label-md text-label-md transition-colors text-left">
<span className="material-symbols-outlined text-[18px] text-outline">toggle_off</span>
<span>Deactivate Listing</span>
</button>
<div className="h-px bg-surface-container my-1"></div>
<button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-error hover:bg-error-container/40 font-label-md text-label-md transition-colors text-left">
<span className="material-symbols-outlined text-[18px]">delete_forever</span>
<span className="font-semibold">Delete Listing</span>
</button>
</div>
</td>
</tr>
{/*  ROW 2  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-4 px-4 text-center">
<input className="w-4 h-4 rounded text-primary accent-primary cursor-pointer focus:ring-0" type="checkbox" />
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<Link className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors font-semibold leading-tight" href="/admin/scholarships">
                    Rhodes Scholarship for Global Candidates
                  </Link>
<span className="inline-flex items-center px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-mono text-label-sm font-semibold">
                    #EDL-2025-0142
                  </span>
</div>
<div className="flex items-center gap-2 mt-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">The Rhodes Trust, Oxford University</span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="font-label-sm text-label-sm text-secondary font-medium">Ivy-Tier Endowed</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<span className="text-[18px]">🇬🇧</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-medium leading-none">United Kingdom</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">Oxford University</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                Postgraduate Degree
              </span>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-semibold text-on-surface">£59,490 / yr</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">100% Tuition + £19,237 Stipend</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col items-start gap-1">
<span className="font-body-sm text-body-sm font-medium text-on-surface">Oct 14, 2025</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">
<span className="material-symbols-outlined text-[12px]">alarm</span> 9 days left
                </span>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary/15 text-secondary font-label-sm text-label-sm font-semibold">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                Active / Published
              </span>
</td>
<td className="py-4 px-4 text-right">
<button className="p-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant transition-colors">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
{/*  ROW 3  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-4 px-4 text-center">
<input className="w-4 h-4 rounded text-primary accent-primary cursor-pointer focus:ring-0" type="checkbox" />
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<Link className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors font-semibold leading-tight" href="/admin/scholarships">
                    Mastercard Foundation Scholars Program at Cambridge
                  </Link>
<span className="inline-flex items-center px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-mono text-label-sm font-semibold">
                    #EDL-2025-0319
                  </span>
</div>
<div className="flex items-center gap-2 mt-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Mastercard Foundation &amp; Cambridge Trust</span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="font-label-sm text-label-sm text-secondary font-medium">Pan-Africa Fellowship</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<span className="text-[18px]">🇬🇧</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-medium leading-none">United Kingdom</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">Cambridge University</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                Master's / PhD
              </span>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-semibold text-on-surface">100% Comprehensive</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Tuition + Flights + Laptop + Monthly</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col items-start gap-1">
<span className="font-body-sm text-body-sm font-medium text-on-surface">Jan 05, 2026</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-medium">
                  75 days left
                </span>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary/15 text-secondary font-label-sm text-label-sm font-semibold">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                Active / Published
              </span>
</td>
<td className="py-4 px-4 text-right">
<button className="p-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant transition-colors">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
{/*  ROW 4  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-4 px-4 text-center">
<input className="w-4 h-4 rounded text-primary accent-primary cursor-pointer focus:ring-0" type="checkbox" />
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<Link className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors font-semibold leading-tight" href="/admin/scholarships">
                    Chevening Leadership Fellowship
                  </Link>
<span className="inline-flex items-center px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-mono text-label-sm font-semibold">
                    #EDL-2025-0554
                  </span>
</div>
<div className="flex items-center gap-2 mt-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">UK Foreign, Commonwealth &amp; Development Office (FCDO)</span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="font-label-sm text-label-sm text-secondary font-medium">Governmental Charter</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<span className="text-[18px]">🇬🇧</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-medium leading-none">United Kingdom</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">National Consortium</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                1-Year Master's (MSc/MA)
              </span>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-semibold text-on-surface">100% Comprehensive</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Full Tuition + UK Flights + Living Grant</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col items-start gap-1">
<span className="font-body-sm text-body-sm font-medium text-on-surface">Nov 04, 2025</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[12px]">schedule</span> 28 days left
                </span>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary/15 text-secondary font-label-sm text-label-sm font-semibold">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                Active / Published
              </span>
</td>
<td className="py-4 px-4 text-right">
<button className="p-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant transition-colors">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
{/*  ROW 5  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-4 px-4 text-center">
<input className="w-4 h-4 rounded text-primary accent-primary cursor-pointer focus:ring-0" type="checkbox" />
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<Link className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors font-semibold leading-tight" href="/admin/scholarships">
                    ETH Zurich Excellence Scholarship (ESOP)
                  </Link>
<span className="inline-flex items-center px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-mono text-label-sm font-semibold">
                    #EDL-2025-0782
                  </span>
</div>
<div className="flex items-center gap-2 mt-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">ETH Zurich Foundation</span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="font-label-sm text-label-sm text-tertiary font-medium">Flagship STEM Grant</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<span className="text-[18px]">🇨🇭</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-medium leading-none">Switzerland</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">Zurich Main Campus</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                Master's CS / Eng
              </span>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-semibold text-on-surface">CHF 24,000 / yr</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Living Contribution + Tuition Waiver</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col items-start gap-1">
<span className="font-body-sm text-body-sm font-medium text-on-surface">Dec 01, 2025</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-medium">
                  56 days left
                </span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col gap-0.5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary/15 text-tertiary font-label-sm text-label-sm font-semibold">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
                  Under Review
                </span>
<span className="font-label-sm text-[10px] text-tertiary leading-none mt-0.5">Missing lang quota</span>
</div>
</td>
<td className="py-4 px-4 text-right">
<button className="p-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant transition-colors">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
{/*  ROW 6  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-4 px-4 text-center">
<input className="w-4 h-4 rounded text-primary accent-primary cursor-pointer focus:ring-0" type="checkbox" />
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<Link className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors font-semibold leading-tight" href="/admin/scholarships">
                    Swedish Institute Scholarships for Global Professionals (SISGP)
                  </Link>
<span className="inline-flex items-center px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-mono text-label-sm font-semibold">
                    #EDL-2025-0440
                  </span>
</div>
<div className="flex items-center gap-2 mt-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Swedish Institute &amp; Ministry of Foreign Affairs</span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="font-label-sm text-label-sm text-secondary font-medium">Nordic Innovation Trust</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<span className="text-[18px]">🇸🇪</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-medium leading-none">Sweden</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">Stockholm, Lund, Uppsala</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                Master's Degree
              </span>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-semibold text-on-surface">SEK 12,000 / mo</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">100% Tuition + SEK 15,000 Travel</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col items-start gap-1">
<span className="font-body-sm text-body-sm font-medium text-on-surface">Feb 28, 2026</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-medium">
                  120 days left
                </span>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary/15 text-secondary font-label-sm text-label-sm font-semibold">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                Active / Published
              </span>
</td>
<td className="py-4 px-4 text-right">
<button className="p-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant transition-colors">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
{/*  ROW 7  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-4 px-4 text-center">
<input className="w-4 h-4 rounded text-primary accent-primary cursor-pointer focus:ring-0" type="checkbox" />
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<Link className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors font-semibold leading-tight" href="/admin/scholarships">
                    Japanese Government (MEXT) Postgraduate Scholarship
                  </Link>
<span className="inline-flex items-center px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-mono text-label-sm font-semibold">
                    #EDL-2025-0611
                  </span>
</div>
<div className="flex items-center gap-2 mt-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Ministry of Education, Culture, Sports, Science &amp; Tech (MEXT)</span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="font-label-sm text-label-sm text-secondary font-medium">National Monbukagakusho</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<span className="text-[18px]">🇯🇵</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-medium leading-none">Japan</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">Tokyo, Kyoto, Osaka Consortia</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                Research / MSc / PhD
              </span>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-semibold text-on-surface">¥144,000 / mo</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Full Tuition + Round-trip Airfare</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col items-start gap-1">
<span className="font-body-sm text-body-sm font-medium text-on-surface">Mar 15, 2026</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-medium">
                  152 days left
                </span>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary/15 text-secondary font-label-sm text-label-sm font-semibold">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                Active / Published
              </span>
</td>
<td className="py-4 px-4 text-right">
<button className="p-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant transition-colors">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
{/*  ROW 8  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-4 px-4 text-center">
<input className="w-4 h-4 rounded text-primary accent-primary cursor-pointer focus:ring-0" type="checkbox" />
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<Link className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors font-semibold leading-tight" href="/admin/scholarships">
                    African Development Bank Post-Graduate Fellowship
                  </Link>
<span className="inline-flex items-center px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-mono text-label-sm font-semibold">
                    #EDL-2025-1029
                  </span>
</div>
<div className="flex items-center gap-2 mt-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">AfDB Development Fund &amp; Partner Universities</span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="font-label-sm text-label-sm text-outline font-medium">Awaiting Ministry Filing</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<span className="text-[18px]">🌍</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-medium leading-none">Multi-country</span>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">African Regional Centers</span>
</div>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                MSc AgEcon / Policy
              </span>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-semibold text-on-surface">$32,000 / yr</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Full Research &amp; Housing Coverage</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col items-start gap-1">
<span className="font-body-sm text-body-sm font-medium text-on-surface">Dec 15, 2025</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-medium">
                  70 days left
                </span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col gap-0.5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm font-semibold">
<span className="w-2 h-2 rounded-full bg-outline"></span>
                  Draft
                </span>
<span className="font-label-sm text-[10px] text-on-surface-variant leading-none mt-0.5">Pending accreditation</span>
</div>
</td>
<td className="py-4 px-4 text-right">
<button className="p-1.5 rounded-lg hover:bg-surface-container-high text-on-surface-variant transition-colors">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Bottom Academic Pagination & Summary Strip  */}
<div className="py-3 px-6 bg-surface-container-low flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="font-body-sm text-body-sm text-on-surface-variant">
          Showing <span className="font-semibold text-primary">1 to 8</span> of <span className="font-semibold text-primary">1,428 entries</span> (Filtered from 1,428 total recorded charters)
        </span>
</div>
<div className="flex items-center gap-6">
{/*  Rows Per Page Selector  */}
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">Rows per page:</span>
<div className="relative">
<select className="appearance-none pl-3 pr-7 py-1 bg-surface-container-lowest text-on-surface font-label-sm text-label-sm rounded-lg focus:outline-none cursor-pointer shadow-sm">
<option>8</option>
<option>16</option>
<option>32</option>
<option>50</option>
</select>
<span className="material-symbols-outlined absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none text-outline text-[14px]">expand_more</span>
</div>
</div>
{/*  Academic Pagination Numbers  */}
<div className="flex items-center gap-1">
<button className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-40" disabled>
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button className="w-8 h-8 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-semibold flex items-center justify-center shadow-sm">
            1
          </button>
<button className="w-8 h-8 rounded-lg text-on-surface hover:bg-surface-container font-label-sm text-label-sm flex items-center justify-center transition-colors">
            2
          </button>
<button className="w-8 h-8 rounded-lg text-on-surface hover:bg-surface-container font-label-sm text-label-sm flex items-center justify-center transition-colors">
            3
          </button>
<span className="px-1 text-on-surface-variant font-label-sm text-label-sm">...</span>
<button className="w-8 h-8 rounded-lg text-on-surface hover:bg-surface-container font-label-sm text-label-sm flex items-center justify-center transition-colors">
            179
          </button>
<button className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
{/*  MODAL: Confirmation for Deletion (Illustrated Interactive Overlay)  */}
<div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/40 backdrop-blur-sm hidden animate-fadeIn" id="deleteModal">
<div className="bg-surface-container-lowest max-w-lg w-full mx-4 rounded-xl shadow-2xl p-6 flex flex-col gap-4">
<div className="flex items-center justify-between pb-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-error-container flex items-center justify-center text-error">
<span className="material-symbols-outlined text-[22px]">warning</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Delete Scholarship Charter</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant">Critical Registry Action</span>
</div>
</div>
<button className="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
<div className="p-4 rounded-lg bg-surface-container-low flex flex-col gap-2">
<span className="font-label-md text-label-md font-semibold text-primary">DAAD Helmut-Schmidt-Programme (PPGG)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">ID: #EDL-2025-0891 · 318 active student applications tied to this record</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
        Are you certain you wish to purge this scholarship from the core ledger? Doing so will sever public AI discovery vectors, invalidate pending application drafts, and notify university liaison offices.
      </p>
<div className="flex items-center justify-end gap-3 pt-3">
<button className="px-4 py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors font-medium">
          Cancel &amp; Keep
        </button>
<button className="px-5 py-2 rounded-lg bg-error text-on-error font-label-md text-label-md hover:opacity-90 transition-opacity font-semibold flex items-center gap-1.5 shadow-sm">
<span className="material-symbols-outlined text-[18px]">delete</span>
<span>Confirm Permanent Deletion</span>
</button>
</div>
</div>
</div>
{/*  MODAL: Confirmation for Listing Deactivation  */}
<div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/40 backdrop-blur-sm hidden animate-fadeIn" id="deactivateModal">
<div className="bg-surface-container-lowest max-w-lg w-full mx-4 rounded-xl shadow-2xl p-6 flex flex-col gap-4">
<div className="flex items-center justify-between pb-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
<span className="material-symbols-outlined text-[22px]">pause_circle</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Deactivate Public Charter</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant">Temporal Intake Suspension</span>
</div>
</div>
<button className="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
        This listing will transition to an inactive archival state. Public match score calculations will omit this program until reactivation by an accredited institution trustee.
      </p>
<div className="flex items-center justify-end gap-3 pt-3">
<button className="px-4 py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors font-medium">
          Cancel
        </button>
<button className="px-5 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors font-semibold flex items-center gap-1.5 shadow-sm">
<span className="material-symbols-outlined text-[18px]">check</span>
<span>Confirm Deactivation</span>
</button>
</div>
</div>
</div>
</div></div></AdminLayout>;
}
