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
          <div className="rounded-3xl border border-slate-700/80 bg-slate-900/75 p-6 shadow-2xl shadow-blue-950/20 backdrop-blur sm:p-10">
            <div className="mb-8 text-center">
              <h1 className="bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-5xl">Author Guidelines</h1>
            </div>
            <div className="border-t border-slate-700/80 pt-8">
              <h2 className="mb-5 bg-gradient-to-r from-blue-200 via-cyan-200 to-indigo-300 bg-clip-text text-center text-xl font-semibold text-transparent sm:text-2xl">Publication Ethics and Malpractice Statement</h2>
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
