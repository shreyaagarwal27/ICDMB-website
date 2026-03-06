import { BookOpen, Award } from "lucide-react"

export function PartnersSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-100 dark:from-gray-800 to-gray-50 dark:to-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-widest">Publishing Partners</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Proceedings to be Published by
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        

        <div className="mt-14 flex flex-col items-center justify-center gap-3">
          <div className="flex items-center justify-center gap-3 px-6 py-4 bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-primary/20">
            <Award className="w-6 h-6 text-primary" />
            <span className="text-lg sm:text-xl font-medium text-gray-900 dark:text-white">
              Selected papers will be published in <span className="text-primary font-semibold">Scopus-indexed</span>{" "}
              journals
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
