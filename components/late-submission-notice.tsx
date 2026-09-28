"use client"

import { ArrowRight } from "lucide-react"

export function LateSubmissionNotice() {
  return (
    <aside
      aria-label="ICDMB 2026 late paper submission announcement"
      className="fixed inset-x-0 top-20 z-[45] border-y border-violet-300/30 bg-gradient-to-r from-[#26104f] via-[#4c1d95] to-[#172554] text-white shadow-lg shadow-violet-950/30"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(167,139,250,0.2),transparent_32%)] motion-safe:animate-pulse" />
      <div className="relative mx-auto flex min-h-16 max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 py-2.5 text-xs sm:gap-x-5 sm:px-6 sm:text-sm lg:flex-nowrap lg:justify-between lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-center lg:justify-start lg:text-left">
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-red-300/50 bg-red-500/15 px-2.5 py-1 text-[10px] font-bold tracking-[0.14em] text-red-100">
            <span className="size-1.5 animate-pulse rounded-full bg-red-300" aria-hidden="true" />
            FINAL OPPORTUNITY
          </span>
          <span className="font-semibold text-violet-100">ICDMB 2026 — Late Paper Submission Open</span>
          <span className="hidden text-violet-300 lg:inline" aria-hidden="true">|</span>
          <span className="whitespace-nowrap text-violet-100">Deadline: <strong className="text-base font-extrabold text-cyan-200">05 October 2026</strong></span>
          <span className="hidden text-violet-300 lg:inline" aria-hidden="true">|</span>
          <strong className="whitespace-nowrap text-base font-extrabold text-cyan-200">₹9,500/-</strong>
          <span className="hidden text-violet-300 lg:inline" aria-hidden="true">|</span>
          <span className="text-violet-100">Published ONLY in <strong className="text-white">Advanced Design and Materials Engineering</strong></span>
        </div>
        <a
          href="https://cmt3.research.microsoft.com/ICDMB2026"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-cyan-300 px-3.5 py-2 text-xs font-extrabold text-slate-950 shadow-md shadow-cyan-500/20 transition-colors hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          SUBMIT PAPER <ArrowRight className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </aside>
  )
}

