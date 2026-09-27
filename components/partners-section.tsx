import { BookOpen } from "lucide-react"

export function PartnersSection() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-50 py-24 dark:from-gray-800 dark:to-gray-700">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-primary">
            <BookOpen className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-widest">Publication Partners</span>
          </div>
          <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Publication Partners
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-primary to-secondary" />
        </div>

        <div className="grid items-stretch gap-8 md:grid-cols-2">
          <div className="flex min-h-[320px] items-center justify-center rounded-xl border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-700 dark:bg-gray-800/80 sm:p-6">
            <img
              src="/images/atlantis-press-cover.png"
              alt="Atlantis Press publication cover"
              className="max-h-[360px] w-auto max-w-full object-contain"
            />
          </div>
          <div className="flex min-h-[320px] items-center justify-center rounded-xl border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-700 dark:bg-gray-800/80 sm:p-6">
            <img
              src="/images/icdmb-proceedings-cover.png"
              alt="Proceedings of ICDMB 2026 publication cover"
              className="max-h-[360px] w-auto max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
