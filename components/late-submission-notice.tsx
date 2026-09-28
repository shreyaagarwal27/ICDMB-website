"use client"

import { useEffect, useState } from "react"
import { ArrowRight, X } from "lucide-react"

const DISMISSAL_KEY = "icdmb-late-submission-notice-dismissed"

export function LateSubmissionNotice() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(window.localStorage.getItem(DISMISSAL_KEY) !== "true")
  }, [])

  const dismiss = () => {
    window.localStorage.setItem(DISMISSAL_KEY, "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <aside
      aria-label="ICDMB 2026 late paper submission announcement"
      className="fixed inset-x-3 bottom-3 z-[60] sm:inset-x-auto sm:right-5 sm:bottom-5 sm:w-[min(30rem,calc(100vw-2rem))]"
    >
      <div className="relative overflow-hidden rounded-2xl border border-amber-400/60 bg-[#070d1a]/95 p-4 text-slate-100 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-5">
        <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-amber-400/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 left-8 size-28 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="relative">
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss late paper submission announcement"
            className="absolute right-0 top-0 rounded-full p-1 text-slate-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
          <div className="pr-7">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-red-400/40 bg-red-500/10 px-2.5 py-1 text-[10px] font-bold tracking-[0.16em] text-red-300">
              <span className="size-1.5 animate-pulse rounded-full bg-red-400" aria-hidden="true" />
              FINAL OPPORTUNITY
            </span>
            <h2 className="mt-3 text-sm font-bold tracking-wide text-amber-200 sm:text-base">ICDMB 2026 Late Paper Submission Open</h2>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="rounded-lg border border-amber-400/25 bg-amber-400/10 p-2.5">
              <span className="block text-[10px] uppercase tracking-wider text-amber-200/70">Deadline</span>
              <strong className="mt-0.5 block text-base text-amber-300 sm:text-lg">05 October 2026</strong>
            </div>
            <div className="rounded-lg border border-orange-400/25 bg-orange-400/10 p-2.5">
              <span className="block text-[10px] uppercase tracking-wider text-orange-200/70">Registration Fee</span>
              <strong className="mt-0.5 block text-base text-orange-200 sm:text-lg">₹9,500/-</strong>
            </div>
          </div>
          <p className="mt-3 rounded-lg border border-slate-700/70 bg-black/20 p-2.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
            <span className="font-semibold text-amber-200">Publication:</span> Selected papers will be published <strong className="text-white">ONLY in Advanced Design and Materials Engineering</strong>.
          </p>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-medium leading-relaxed text-slate-300">Don&apos;t miss this final opportunity to present your research at ICDMB 2026!</p>
            <a
              href="https://cmt3.research.microsoft.com/ICDMB2026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 px-3.5 py-2 text-xs font-bold text-slate-950 shadow-lg shadow-orange-500/20 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            >
              SUBMIT PAPER <ArrowRight className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}
