"use client"

import { ArrowRight } from "lucide-react"

export function LateSubmissionNotice() {
  return (
    <aside
      aria-label="ICDMB 2026 late paper submission announcement"
      className="fixed inset-x-0 top-20 z-[45] border-y border-amber-400/35 bg-[#0b1220] text-white shadow-lg shadow-black/30"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_50%,rgba(245,158,11,0.12),transparent_25%),radial-gradient(circle_at_88%_50%,rgba(30,64,175,0.18),transparent_30%)] motion-safe:animate-pulse" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-3 px-4 py-3 text-xs sm:px-6 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:px-8">
        <span className="mx-auto inline-flex min-h-full items-center justify-center whitespace-nowrap rounded-md border border-blue-300/50 bg-gradient-to-br from-blue-500/30 via-indigo-500/25 to-cyan-400/20 px-3 py-2 text-center text-[10px] font-bold leading-tight tracking-[0.14em] text-blue-100 shadow-sm shadow-blue-500/20 sm:px-4 lg:mx-0 lg:py-3">
          FINAL OPPORTUNITY
        </span>
        <div className="grid min-w-0 gap-1 text-center lg:text-left">
          <p className="font-semibold text-slate-100">ICDMB 2026 <span className="text-amber-300">·</span> Late paper submission opportunity</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-slate-300 lg:justify-start">
            <span>Deadline: <strong className="font-extrabold text-amber-300">05 October 2026</strong></span>
            <span>Fee: <strong className="font-extrabold text-amber-300">₹9,500/-</strong></span>
            <span className="basis-full text-slate-300">Published only on our Book volume Proceeding of ICDMB 2026 Advanced Design, Materials and Biomedical Engineering with ISBN 978-93-344-9268-2</span>
          </div>
        </div>
        <a
          href="https://cmt3.research.microsoft.com/ICDMB2026"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto inline-flex items-center gap-1.5 rounded-md border border-amber-300 bg-amber-400 px-4 py-2 text-xs font-extrabold text-slate-950 shadow-md shadow-amber-500/20 transition-colors hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200 lg:mx-0"
        >
          SUBMIT PAPER <ArrowRight className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </aside>
  )
}

