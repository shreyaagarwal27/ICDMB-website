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
        <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl motion-safe:animate-[drift_16s_ease-in-out_infinite]" />
          <div className="absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl motion-safe:animate-[drift-reverse_20s_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.06] via-transparent to-cyan-400/[0.08]" />
        </div>
        <section className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="rounded-3xl border border-slate-700/80 bg-slate-900/75 p-6 shadow-2xl shadow-blue-950/20 backdrop-blur sm:p-10">
            <div className="mb-8 text-center">
              <h1 className="animate-[gradient-shift_6s_ease_infinite] bg-[length:200%_auto] bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-5xl">Author Guidelines</h1>
            </div>
            <div className="border-t border-slate-700/80 pt-4 sm:pt-5">
              <h2 className="mb-4 animate-[gradient-shift_6s_ease_infinite] bg-[length:200%_auto] bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-center text-xl font-semibold text-transparent sm:text-2xl">Publication Ethics and Malpractice Statement</h2>
              <p className="mx-auto max-w-3xl text-center text-base leading-8 text-slate-300 sm:text-lg">
                ICDMB 2026 is committed to maintaining the highest standards of academic integrity, publication ethics, and professional conduct. All submitted manuscripts must be original and free from plagiarism, data fabrication, falsification, and duplicate publication. Authors, reviewers, and conference organizers are expected to uphold the principles of fairness, confidentiality, transparency, and ethical responsibility throughout the submission, peer-review, and publication processes. Any suspected academic misconduct will be addressed in accordance with established publication ethics guidelines.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
