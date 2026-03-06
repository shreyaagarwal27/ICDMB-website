import { MapPin, Mail, BookOpen } from "lucide-react"

export function VenueSection() {
  return (
    <section id="venue" className="py-24 bg-gray-100 dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl font-bold gradient-heading">Venue & Details</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Venue & Accommodation Card */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 md:p-8 border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-colors">
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white">Venue & Accommodation</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              The conference will be held in hybrid mode. Detailed information regarding venue and accommodation will be
              updated in June 2026.
            </p>
          </div>

          {/* Publication Card */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 md:p-8 border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-colors">
            <div className="flex items-start gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white">Publication</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              All selected papers will be considered for publication in reputed Scopus-indexed journals. Further details
              will be updated soon.
            </p>
          </div>

          {/* Address for Correspondence Card */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 md:p-8 border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-colors">
            <div className="flex items-start gap-3 mb-4">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white">
                Address for Correspondence
              </h3>
            </div>

            {/* Organizing Secretaries */}
            <div className="mb-4">
              <p className="text-gray-900 dark:text-white font-medium">Dr. Emon Barua</p>
              <p className="text-gray-900 dark:text-white font-medium">Dr. Soumya R Guru</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Organizing Secretary, ICDMB 2026</p>
            </div>

            {/* Address Block */}
            <div className="border-l-4 border-l-primary pl-4 py-4">
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Department of Mechanical Engineering
                <br />
                MANIT Bhopal
                <br />
                Bhopal – 462003
                <br />
                Madhya Pradesh, India
              </p>
            </div>

            {/* Email */}
            <a
              href="mailto:icdmb2026@gmail.com"
              className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              icdmb2026@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
