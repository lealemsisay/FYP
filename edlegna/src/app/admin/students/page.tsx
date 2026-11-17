'use client';

import { AdminLayout } from '@/components/layout/AdminLayout';

export default function StudentManagementPage() {
  return <AdminLayout><div className="relative  w-full px-gutter-desktop bg-surface min-h-screen"><div className="flex flex-col w-full pb-16">
{/*  Top Academic Dossier Header & Breadcrumb Context  */}
<div className="flex flex-col gap-6 pt-6 pb-8">
<div className="flex flex-wrap items-center justify-between gap-4">
<div className="flex items-center gap-3">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Student &amp; Access Registry</span>
<span className="text-outline-variant font-label-md">/</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Academic Verification Queue</span>
<div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-secondary-container/20 text-on-secondary-container font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
<span>Registrar Sync: Active • 24,850 Records</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-lg text-label-lg transition-colors flex items-center gap-2 shadow-sm">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">download</span>
<span>Export Student Roster (CSV)</span>
</button>
<button className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all flex items-center gap-2 shadow-md">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span>Bulk Verification Audit</span>
</button>
</div>
</div>
<div className="flex flex-col gap-1 max-w-4xl">
<h1 className="font-headline-xl text-headline-xl text-primary tracking-tight">Student Management &amp; Academic Verification</h1>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
        Review institutional scholar dossiers, authenticate academic credentials via AAU, Jimma, and partner registrar nodes, calibrate GPA scale translations, and grant certified AI matching clearance.
      </p>
</div>
</div>
{/*  Telemetry / Registry Stat Cards  */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
{/*  Stat 1  */}
<div className="p-5 rounded-xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(31,58,48,0.04),0_4px_12px_rgba(31,58,48,0.02)] flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Total Registered Scholars</span>
<span className="font-headline-lg text-headline-lg text-primary font-bold mt-1">24,850</span>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">school</span>
</div>
</div>
<div className="mt-4 pt-3 flex items-center justify-between text-on-surface-variant font-label-md text-label-md">
<span className="flex items-center gap-1 text-secondary font-semibold">
<span className="material-symbols-outlined text-[16px]">trending_up</span> +1,240 this month
        </span>
<span>94.2% completed</span>
</div>
</div>
{/*  Stat 2 (Priority Alert)  */}
<div className="p-5 rounded-xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(31,58,48,0.04),0_4px_12px_rgba(31,58,48,0.02)] relative overflow-hidden flex flex-col justify-between">
<div className="absolute top-0 right-0 w-2 h-full bg-tertiary-container"></div>
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-tertiary font-bold uppercase tracking-wider">Awaiting Document Audit</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-headline-lg text-headline-lg text-on-surface font-bold">18</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">Priority Queue</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-tertiary-container/15 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-[22px]">pending_actions</span>
</div>
</div>
<div className="mt-4 pt-3 flex items-center gap-2 text-tertiary font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px]">priority_high</span>
<span>Registrar stamp confirmation pending</span>
</div>
</div>
{/*  Stat 3  */}
<div className="p-5 rounded-xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(31,58,48,0.04),0_4px_12px_rgba(31,58,48,0.02)] flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Verified Scholars</span>
<span className="font-headline-lg text-headline-lg text-primary font-bold mt-1">23,410</span>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]">verified_user</span>
</div>
</div>
<div className="mt-4 pt-3 flex items-center justify-between text-on-surface-variant font-label-md text-label-md">
<span className="text-secondary font-medium">94.2% verified</span>
<span>AAU • Jimma • Hawassa</span>
</div>
</div>
{/*  Stat 4  */}
<div className="p-5 rounded-xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(31,58,48,0.04),0_4px_12px_rgba(31,58,48,0.02)] flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Flagged Discrepancies</span>
<span className="font-headline-lg text-headline-lg text-error font-bold mt-1">42</span>
</div>
<div className="w-10 h-10 rounded-xl bg-error-container/40 flex items-center justify-center text-error">
<span className="material-symbols-outlined text-[22px]">flag</span>
</div>
</div>
<div className="mt-4 pt-3 flex items-center justify-between text-on-surface-variant font-label-md text-label-md">
<span className="text-error font-medium">Action Required</span>
<span>GPA mismatches / unsealed scans</span>
</div>
</div>
</div>
{/*  Priority Verification Action Hub (Split Preview Cards)  */}
<div className="p-6 rounded-2xl bg-surface-container-low mb-8 shadow-sm flex flex-col gap-4">
<div className="flex flex-wrap items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-tertiary-container/30 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Priority Transcript &amp; Credential Verification</h2>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">18 Awaiting Sign-off</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Fast-track high-probability scholarship applicants with pending registrar attestations.</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]">refresh</span> Refresh Stream
        </button>
<button className="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors flex items-center gap-1.5 shadow-sm">
<span>Batch Sign 3 Validated</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
{/*  Review Dossier Grid (3 High-priority applicants)  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-2">
{/*  Applicant 1  */}
<div className="p-4 rounded-xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(31,58,48,0.04)] flex flex-col justify-between gap-4">
<div className="flex flex-col gap-3">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-3">
<div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-on-primary font-headline-sm font-semibold flex-shrink-0 shadow-sm">
                ST
              </div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Selamawit Tadesse</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">#EDL-STU-8821</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed/70 text-on-tertiary-fixed font-label-sm text-label-sm font-semibold flex-shrink-0">
              DAAD &amp; Rhodes
            </span>
</div>
<div className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-2 font-label-md text-label-md">
<div className="flex items-center justify-between text-on-surface">
<span className="text-on-surface-variant">Institution:</span>
<span className="font-semibold text-right truncate">Addis Ababa University</span>
</div>
<div className="flex items-center justify-between text-on-surface">
<span className="text-on-surface-variant">Discipline &amp; Standing:</span>
<span className="font-medium text-right">B.Sc. SE • GPA <span className="font-bold text-secondary">3.92</span></span>
</div>
<div className="flex items-center justify-between text-on-surface">
<span className="text-on-surface-variant">Pending Document:</span>
<span className="flex items-center gap-1 text-primary font-semibold">
<span className="material-symbols-outlined text-[15px] text-tertiary">description</span> Official WES Transcript
              </span>
</div>
</div>
</div>
<div className="flex items-center gap-2 pt-1">
<button className="flex-1 py-1.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-medium transition-colors flex items-center justify-center gap-1 shadow-sm">
<span className="material-symbols-outlined text-[16px]">check</span>
            Approve Credentials
          </button>
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" title="View Dossier Document">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" title="Request Re-upload">
<span className="material-symbols-outlined text-[18px]">undo</span>
</button>
</div>
</div>
{/*  Applicant 2  */}
<div className="p-4 rounded-xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(31,58,48,0.04)] flex flex-col justify-between gap-4">
<div className="flex flex-col gap-3">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-3">
<div className="w-11 h-11 rounded-xl bg-primary-container flex items-center justify-center text-on-primary font-headline-sm font-semibold flex-shrink-0 shadow-sm">
                JV
              </div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Julian Vance</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">#EDL-STU-7904</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-container/30 text-on-secondary-container font-label-sm text-label-sm font-semibold flex-shrink-0">
              Erasmus Mundus
            </span>
</div>
<div className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-2 font-label-md text-label-md">
<div className="flex items-center justify-between text-on-surface">
<span className="text-on-surface-variant">Institution:</span>
<span className="font-semibold text-right truncate">Addis Ababa University</span>
</div>
<div className="flex items-center justify-between text-on-surface">
<span className="text-on-surface-variant">Discipline &amp; Standing:</span>
<span className="font-medium text-right">CS / Pub Health • GPA <span className="font-bold text-secondary">3.86</span></span>
</div>
<div className="flex items-center justify-between text-on-surface">
<span className="text-on-surface-variant">Pending Document:</span>
<span className="flex items-center gap-1 text-primary font-semibold">
<span className="material-symbols-outlined text-[15px] text-secondary">translate</span> IELTS 8.0 TRF Scorecard
              </span>
</div>
</div>
</div>
<div className="flex items-center gap-2 pt-1">
<button className="flex-1 py-1.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-medium transition-colors flex items-center justify-center gap-1 shadow-sm">
<span className="material-symbols-outlined text-[16px]">verified</span>
            Verify TRF Key
          </button>
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" title="View TRF Scan">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container text-error hover:bg-error-container/30 transition-colors" title="Flag Discrepancy">
<span className="material-symbols-outlined text-[18px]">flag</span>
</button>
</div>
</div>
{/*  Applicant 3  */}
<div className="p-4 rounded-xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(31,58,48,0.04)] flex flex-col justify-between gap-4">
<div className="flex flex-col gap-3">
<div className="flex items-start justify-between gap-2">
<div className="flex items-center gap-3">
<div className="w-11 h-11 rounded-xl bg-tertiary-container flex items-center justify-center text-on-tertiary-container font-headline-sm font-semibold flex-shrink-0 shadow-sm">
                DM
              </div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Dawit Mengistu</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">#EDL-STU-9102</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold flex-shrink-0">
              TU Munich Cand.
            </span>
</div>
<div className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-2 font-label-md text-label-md">
<div className="flex items-center justify-between text-on-surface">
<span className="text-on-surface-variant">Institution:</span>
<span className="font-semibold text-right truncate">Hawassa University</span>
</div>
<div className="flex items-center justify-between text-on-surface">
<span className="text-on-surface-variant">Discipline &amp; Standing:</span>
<span className="font-medium text-right">Mech. Eng. • GPA <span className="font-bold text-secondary">3.84</span></span>
</div>
<div className="flex items-center justify-between text-on-surface">
<span className="text-on-surface-variant">Pending Document:</span>
<span className="flex items-center gap-1 text-primary font-semibold">
<span className="material-symbols-outlined text-[15px] text-tertiary">history_edu</span> Degree Certificate Scan
              </span>
</div>
</div>
</div>
<div className="flex items-center gap-2 pt-1">
<button className="flex-1 py-1.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-medium transition-colors flex items-center justify-center gap-1 shadow-sm">
<span className="material-symbols-outlined text-[16px]">search</span>
            Match Registrar Stamp
          </button>
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" title="View Document">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" title="Message Student">
<span className="material-symbols-outlined text-[18px]">mail</span>
</button>
</div>
</div>
</div>
</div>
{/*  Search, Filter & View Controls  */}
<div className="flex flex-col gap-4 mb-6">
<div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
{/*  Search Input  */}
<div className="relative flex-1">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]">person_search</span>
<input className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest shadow-[0_1px_3px_rgba(31,58,48,0.06)] transition-all placeholder:text-on-surface-variant/70" placeholder="Search students by full name, ID, institutional email, university, or program..." type="text" />
</div>
{/*  Quick Filter Pills & Layout Modes  */}
<div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
<button className="px-3.5 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-medium whitespace-nowrap shadow-sm flex items-center gap-1.5">
<span>All Students</span>
<span className="px-1.5 py-0.2 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm">24,850</span>
</button>
<button className="px-3.5 py-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors flex items-center gap-1.5 shadow-sm">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span>Pending Verification</span>
<span className="px-1.5 py-0.2 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">18</span>
</button>
<button className="px-3.5 py-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors flex items-center gap-1.5 shadow-sm">
<span className="w-2 h-2 rounded-full bg-error"></span>
<span>Action Required</span>
<span className="px-1.5 py-0.2 rounded-full bg-error-container text-error font-label-sm text-label-sm font-bold">42</span>
</button>
<div className="h-6 w-px bg-surface-container-highest mx-1 hidden sm:block"></div>
<div className="flex items-center bg-surface-container-lowest rounded-lg p-0.5 shadow-sm">
<button className="p-1.5 rounded bg-surface-container text-primary" title="Table View">
<span className="material-symbols-outlined text-[18px]">table_rows</span>
</button>
<button className="p-1.5 rounded text-on-surface-variant hover:text-on-surface transition-colors" title="Grid Dossier View">
<span className="material-symbols-outlined text-[18px]">grid_view</span>
</button>
</div>
</div>
</div>
{/*  Parameter Filter Dropdown Bars  */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
{/*  University  */}
<div className="relative">
<select className="w-full appearance-none pl-3 pr-8 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm focus:outline-none cursor-pointer">
<option>All Partner Universities</option>
<option>Addis Ababa University (AAU)</option>
<option>Jimma University</option>
<option>Hawassa University</option>
<option>Bahir Dar University</option>
<option>Mekelle University</option>
<option>Arba Minch University</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">expand_more</span>
</div>
{/*  Department / Field  */}
<div className="relative">
<select className="w-full appearance-none pl-3 pr-8 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm focus:outline-none cursor-pointer">
<option>All Disciplines &amp; Faculties</option>
<option>Computer Science &amp; AI</option>
<option>Software &amp; Electrical Eng.</option>
<option>Medicine &amp; Public Health</option>
<option>Agronomy &amp; Earth Sciences</option>
<option>Economics &amp; Development</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">expand_more</span>
</div>
{/*  Level  */}
<div className="relative">
<select className="w-full appearance-none pl-3 pr-8 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm focus:outline-none cursor-pointer">
<option>All Academic Degrees</option>
<option>Undergraduate Finalist</option>
<option>Master's Candidate</option>
<option>Doctoral / Ph.D.</option>
<option>Postdoctoral Fellow</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">expand_more</span>
</div>
{/*  Verification Status  */}
<div className="relative">
<select className="w-full appearance-none pl-3 pr-8 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm focus:outline-none cursor-pointer">
<option>All Verification Statuses</option>
<option>Verified Dossier</option>
<option>Pending Verification</option>
<option>Needs Document Re-upload</option>
<option>Registrar Confirmed</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">expand_more</span>
</div>
</div>
</div>
{/*  Primary Student Directory Data Table Container  */}
<div className="w-full rounded-2xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(31,58,48,0.04),0_6px_20px_rgba(31,58,48,0.03)] overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-3.5 pl-5 pr-2 w-10">
<input className="rounded text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox" />
</th>
<th className="py-3.5 px-4 font-semibold">Scholar &amp; ID</th>
<th className="py-3.5 px-4 font-semibold">University &amp; Faculty</th>
<th className="py-3.5 px-4 font-semibold">Academic Standing</th>
<th className="py-3.5 px-4 font-semibold">Target Opportunities</th>
<th className="py-3.5 px-4 font-semibold">Verification Status</th>
<th className="py-3.5 px-4 font-semibold">Account State</th>
<th className="py-3.5 pr-5 pl-4 text-right font-semibold">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-high/60 font-body-sm text-body-sm text-on-surface">
{/*  Row 1: Selamawit Tadesse  */}
<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="py-4 pl-5 pr-2">
<input className="rounded text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox" />
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-on-primary font-headline-sm font-semibold text-[13px] flex-shrink-0">
                  ST
                </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Selamawit Tadesse</span>
<span className="material-symbols-outlined text-[16px] text-secondary" title="National Honor Scholar">workspace_premium</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="font-mono">#EDL-STU-8821</span>
<span>•</span>
<span className="truncate">selamawit.t@aau.edu.et</span>
</div>
</div>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="font-medium text-on-surface">Addis Ababa University</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">B.Sc. Software Eng • Class '25</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm font-bold text-secondary">
                    3.92 / 4.00
                  </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">DE: 1.1</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">IELTS: 8.5 • GRE: 328</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded-full bg-secondary-container/20 text-on-secondary-container font-label-sm text-label-sm font-semibold">
                  5 High Match
                </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">DAAD, Rhodes</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col gap-1">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold w-max">
<span className="material-symbols-outlined text-[14px]">pending</span>
                  Review (Transcript)
                </span>
<span className="font-label-sm text-label-sm text-tertiary">AAU stamp verification</span>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1.5 text-secondary font-label-md text-label-md font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                Active
              </span>
</td>
<td className="py-4 pr-5 pl-4 text-right">
<div className="flex items-center justify-end gap-1">
<button className="px-2.5 py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm hover:bg-surface-container-high transition-colors font-medium">
                  Review
                </button>
<button className="p-1 rounded text-on-surface-variant hover:text-on-surface transition-colors" title="More Options">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/*  Row 2: Julian Vance  */}
<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="py-4 pl-5 pr-2">
<input className="rounded text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox" />
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-primary-container flex items-center justify-center text-on-primary font-headline-sm font-semibold text-[13px] flex-shrink-0">
                  JV
                </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Julian Vance</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="font-mono">#EDL-STU-7904</span>
<span>•</span>
<span className="truncate">julian.v@postgrad.aau.et</span>
</div>
</div>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="font-medium text-on-surface">Addis Ababa University</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">M.Sc. Health Informatics • Class '24</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm font-bold text-on-surface">
                    3.86 / 4.00
                  </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">DE: 1.3</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">IELTS: 8.0</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
                  3 Saved
                </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Erasmus, Chevening</span>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container/20 text-on-secondary-container font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                Verified Dossier
              </span>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1.5 text-secondary font-label-md text-label-md font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                Active
              </span>
</td>
<td className="py-4 pr-5 pl-4 text-right">
<div className="flex items-center justify-end gap-1">
<button className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm hover:text-on-surface hover:bg-surface-container-high transition-colors font-medium">
                  View
                </button>
<button className="p-1 rounded text-on-surface-variant hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/*  Row 3: Dr. Hana Kebede  */}
<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="py-4 pl-5 pr-2">
<input className="rounded text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox" />
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-on-primary font-headline-sm font-semibold text-[13px] flex-shrink-0">
                  HK
                </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Dr. Hana Kebede</span>
<span className="px-1.5 py-0.2 rounded bg-tertiary-container/20 text-on-tertiary-container font-label-sm text-label-sm font-semibold">Postdoc</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="font-mono">#EDL-STU-6120</span>
<span>•</span>
<span className="truncate">hana.kebede@aau.med.et</span>
</div>
</div>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="font-medium text-on-surface">AAU School of Public Health</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">Epidemiology &amp; Biostats</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm font-bold text-secondary">
                    3.95 / 4.00
                  </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Summa Cum Laude</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">TOEFL: 114</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded-full bg-secondary-container/20 text-on-secondary-container font-label-sm text-label-sm font-semibold">
                  8 Matched
                </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Wellcome, Gates</span>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container/20 text-on-secondary-container font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">verified</span>
                Registrar Confirmed
              </span>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1.5 text-secondary font-label-md text-label-md font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                Active
              </span>
</td>
<td className="py-4 pr-5 pl-4 text-right">
<div className="flex items-center justify-end gap-1">
<button className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm hover:text-on-surface hover:bg-surface-container-high transition-colors font-medium">
                  View
                </button>
<button className="p-1 rounded text-on-surface-variant hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/*  Row 4: Bereket Yohannes  */}
<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="py-4 pl-5 pr-2">
<input className="rounded text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox" />
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-surface-container-high text-on-surface font-headline-sm font-semibold text-[13px] flex items-center justify-center flex-shrink-0">
                  BY
                </div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Bereket Yohannes</span>
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="font-mono">#EDL-STU-5541</span>
<span>•</span>
<span className="truncate">bereket.y@ju.edu.et</span>
</div>
</div>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="font-medium text-on-surface">Jimma University</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">Civil &amp; Environmental Eng</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm font-bold text-on-surface">
                    3.78 / 4.00
                  </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">DE: 1.4</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">IELTS: 7.5</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
                  2 Saved
                </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">DAAD Hydro</span>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container/20 text-on-secondary-container font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                Verified Dossier
              </span>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1.5 text-secondary font-label-md text-label-md font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                Active
              </span>
</td>
<td className="py-4 pr-5 pl-4 text-right">
<div className="flex items-center justify-end gap-1">
<button className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm hover:text-on-surface hover:bg-surface-container-high transition-colors font-medium">
                  View
                </button>
<button className="p-1 rounded text-on-surface-variant hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/*  Row 5: Blen Tessema  */}
<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="py-4 pl-5 pr-2">
<input className="rounded text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox" />
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-secondary-container/40 text-on-secondary-container font-headline-sm font-semibold text-[13px] flex items-center justify-center flex-shrink-0">
                  BT
                </div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Blen Tessema</span>
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="font-mono">#EDL-STU-9943</span>
<span>•</span>
<span className="truncate">blen.t@aau.edu.et</span>
</div>
</div>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="font-medium text-on-surface">Addis Ababa University</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">Biomechanical Eng • Senior</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm font-bold text-secondary">
                    3.88 / 4.00
                  </span>
</div>
<span className="font-label-sm text-label-sm text-tertiary">IELTS awaiting TRF verification</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded-full bg-secondary-container/20 text-on-secondary-container font-label-sm text-label-sm font-semibold">
                  4 High Match
                </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">ETH Zurich, Chalmers</span>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">hourglass_top</span>
                Pending (IELTS TRF)
              </span>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1.5 text-secondary font-label-md text-label-md font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                Active
              </span>
</td>
<td className="py-4 pr-5 pl-4 text-right">
<div className="flex items-center justify-end gap-1">
<button className="px-2.5 py-1 rounded bg-surface-container text-primary font-label-sm text-label-sm hover:bg-surface-container-high transition-colors font-medium">
                  Review
                </button>
<button className="p-1 rounded text-on-surface-variant hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/*  Row 6: Dawit Mengistu  */}
<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="py-4 pl-5 pr-2">
<input className="rounded text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox" />
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-tertiary-container text-on-tertiary-container font-headline-sm font-semibold text-[13px] flex items-center justify-center flex-shrink-0">
                  DM
                </div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Dawit Mengistu</span>
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="font-mono">#EDL-STU-9102</span>
<span>•</span>
<span className="truncate">dawit.m@hu.edu.et</span>
</div>
</div>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="font-medium text-on-surface">Hawassa University</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">Agronomy &amp; Data Systems</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm font-bold text-on-surface">
                    3.65 / 4.00
                  </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">DE: 1.7</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Duolingo: 135</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
                  1 Saved
                </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Wageningen Agri</span>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container/20 text-on-secondary-container font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                Verified Dossier
              </span>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1.5 text-secondary font-label-md text-label-md font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                Active
              </span>
</td>
<td className="py-4 pr-5 pl-4 text-right">
<div className="flex items-center justify-end gap-1">
<button className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm hover:text-on-surface hover:bg-surface-container-high transition-colors font-medium">
                  View
                </button>
<button className="p-1 rounded text-on-surface-variant hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/*  Row 7: Yonas Alemu (Action Required)  */}
<tr className="hover:bg-error-container/10 transition-colors group bg-error-container/5">
<td className="py-4 pl-5 pr-2">
<input className="rounded text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox" />
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-error-container text-error font-headline-sm font-semibold text-[13px] flex items-center justify-center flex-shrink-0">
                  YA
                </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Yonas Alemu</span>
<span className="material-symbols-outlined text-[16px] text-error">warning</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="font-mono">#EDL-STU-3329</span>
<span>•</span>
<span className="truncate">yonas.a@bdu.edu.et</span>
</div>
</div>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="font-medium text-on-surface">Bahir Dar University</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">Applied Mathematics</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-error-container/50 font-label-sm text-label-sm font-bold text-error">
                    3.70 / 4.00 (Conflict)
                  </span>
</div>
<span className="font-label-sm text-label-sm text-error">Transcript reads 3.42 GPA</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
                  0 Active
                </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Locked until clarified</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col gap-1">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-error-container text-error font-label-sm text-label-sm font-bold w-max">
<span className="material-symbols-outlined text-[14px]">flag</span>
                  Audit Required
                </span>
<span className="font-label-sm text-label-sm text-error">GPA Scale mismatch</span>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1.5 text-tertiary font-label-md text-label-md font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                Under Review
              </span>
</td>
<td className="py-4 pr-5 pl-4 text-right">
<div className="flex items-center justify-end gap-1">
<button className="px-2.5 py-1 rounded bg-error text-on-error font-label-sm text-label-sm hover:opacity-90 transition-opacity font-medium">
                  Resolve
                </button>
<button className="p-1 rounded text-on-surface-variant hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/*  Row 8: Meron Haile  */}
<tr className="hover:bg-surface-container-low/50 transition-colors group">
<td className="py-4 pl-5 pr-2">
<input className="rounded text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox" />
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-on-primary font-headline-sm font-semibold text-[13px] flex-shrink-0">
                  MH
                </div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Meron Haile</span>
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="font-mono">#EDL-STU-4418</span>
<span>•</span>
<span className="truncate">meron.h@mu.edu.et</span>
</div>
</div>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="font-medium text-on-surface">Mekelle University</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">Electrical &amp; Computer Eng</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm font-bold text-on-surface">
                    3.82 / 4.00
                  </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">DE: 1.3</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">TOEFL: 108</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded-full bg-secondary-container/20 text-on-secondary-container font-label-sm text-label-sm font-semibold">
                  6 Matched
                </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">KAIST, Fulbright</span>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container/20 text-on-secondary-container font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">verified</span>
                Verified Dossier
              </span>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center gap-1.5 text-secondary font-label-md text-label-md font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                Active
              </span>
</td>
<td className="py-4 pr-5 pl-4 text-right">
<div className="flex items-center justify-end gap-1">
<button className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm hover:text-on-surface hover:bg-surface-container-high transition-colors font-medium">
                  View
                </button>
<button className="p-1 rounded text-on-surface-variant hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Table Footer & Pagination Controls  */}
<div className="p-4 bg-surface-container-low/60 flex flex-wrap items-center justify-between gap-4">
<div className="flex items-center gap-4 text-on-surface-variant font-body-sm text-body-sm">
<span>Showing <strong className="text-on-surface font-semibold">1 to 8</strong> of <strong className="text-on-surface font-semibold">24,850</strong> registered scholars</span>
<span className="text-outline-variant">•</span>
<div className="flex items-center gap-2">
<span>Rows per page:</span>
<select className="rounded bg-surface-container-lowest px-2 py-1 font-label-md text-label-md text-on-surface focus:outline-none cursor-pointer">
<option>8</option>
<option>15</option>
<option>25</option>
<option>50</option>
</select>
</div>
</div>
{/*  Pagination Buttons  */}
<div className="flex items-center gap-1">
<button className="p-1.5 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container disabled:opacity-40 transition-colors" disabled>
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button className="w-8 h-8 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-medium">1</button>
<button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-md text-label-md transition-colors">2</button>
<button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-md text-label-md transition-colors">3</button>
<span className="px-1 text-on-surface-variant font-label-md">...</span>
<button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-md text-label-md transition-colors">3,107</button>
<button className="p-1.5 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>
{/*  Bottom Academic Registrar Integration Status Bar  */}
<div className="mt-8 p-5 rounded-2xl bg-surface-container-lowest shadow-[0_1px_3px_rgba(31,58,48,0.04)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary flex-shrink-0">
<span className="material-symbols-outlined text-[20px]">hub</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Institutional Student Information System (ISIS / HERQA) Bridge</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Connected to 6 Ethiopian Federal University registrar databases via SHA-256 encrypted credential pipelines.</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm font-semibold">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>All 6 Registrar Endpoints Online</span>
</div>
<button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors">
        Audit Registry Logs
      </button>
</div>
</div>
</div></div></AdminLayout>;
}
