import { BookOpen, ShieldCheck } from "lucide-react"
import { Header } from "@/components/header"

export const metadata = {
  title: "Author Guidelines | ICDMB 2026",
  description: "Publication ethics and malpractice statement for ICDMB 2026 authors.",
}

export default function AuthorGuidelinesPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-slate-950 pt-20 text-white">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>
        <section className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200">
            <BookOpen className="size-4" aria-hidden="true" />
            Author Resources
          </div>
          <div className="rounded-3xl border border-slate-700/80 bg-slate-900/75 p-6 shadow-2xl shadow-blue-950/20 backdrop-blur sm:p-10">
            <div className="mb-8 flex items-start gap-4">
              <div className="rounded-2xl bg-blue-500/15 p-3 text-blue-300">
                <ShieldCheck className="size-7" aria-hidden="true" />
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">ICDMB 2026</p>
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Author Guidelines</h1>
              </div>
            </div>
            <div className="border-t border-slate-700/80 pt-8">
              <h2 className="mb-5 text-xl font-semibold text-blue-200 sm:text-2xl">Publication Ethics and Malpractice Statement</h2>
              <p className="text-base leading-8 text-slate-300 sm:text-lg">
                ICDMB 2026 is committed to maintaining the highest standards of academic integrity, publication ethics, and professional conduct. All submitted manuscripts must be original and free from plagiarism, data fabrication, falsification, and duplicate publication. Authors, reviewers, and conference organizers are expected to uphold the principles of fairness, confidentiality, transparency, and ethical responsibility throughout the submission, peer-review, and publication processes. Any suspected academic misconduct will be addressed in accordance with established publication ethics guidelines.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
