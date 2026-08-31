import Image from "next/image"
import { MapPin, Mail, BookOpen } from "lucide-react"

export function VenueSection() {
  return (
    <>
      {/* Sponsorship Category Section */}
      <section id="sponsorship" className="py-24 bg-gray-100 dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl font-bold gradient-heading">Sponsorship Category</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-md overflow-hidden">
            <div className="bg-primary px-6 py-5 text-center">
              <h3 className="font-serif text-2xl font-bold text-white">Support ICDMB 2026</h3>
              <p className="mt-1 text-sm text-white/80">Showcase your organization to a national and international audience</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 dark:divide-gray-800">
              {[
                {
                  name: "Platinum Sponsor",
                  amount: "₹ 1,50,000",
                  benefits: ["Logo on conference banner & materials", "Full-page color advertisement in proceedings", "5 complimentary delegate passes", "Prominent exhibit space"],
                },
                {
                  name: "Gold Sponsor",
                  amount: "₹ 1,00,000",
                  benefits: ["Logo on conference banner & materials", "Half-page color advertisement in proceedings", "3 complimentary delegate passes", "Exhibit space"],
                },
                {
                  name: "Silver Sponsor",
                  amount: "₹ 75,000",
                  benefits: ["Logo on conference banner & materials", "Quarter-page color advertisement in proceedings", "2 complimentary delegate passes"],
                },
                {
                  name: "Bronze Sponsor",
                  amount: "₹ 50,000",
                  benefits: ["Logo on conference banner & materials", "Half-page color advertisement in proceedings", "1 complimentary delegate pass"],
                },
              ].map((sponsor) => (
                <div key={sponsor.name} className="p-6">
                  <h4 className="font-semibold text-primary">{sponsor.name}</h4>
                  <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{sponsor.amount}</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    {sponsor.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-2 leading-relaxed">
                        <span className="text-primary" aria-hidden="true">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800 px-6 py-5">
              <h4 className="font-semibold text-gray-900 dark:text-white">Advertisement Opportunities</h4>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm sm:grid-cols-5">
                {[
                  ["Back Cover Page", "₹ 30,000"],
                  ["Full Page (Color)", "₹ 20,000"],
                  ["Half Page (Color)", "₹ 15,000"],
                  ["Full Page (Black & White)", "₹ 15,000"],
                  ["Half Page (Black & White)", "₹ 10,000"],
                ].map(([placement, amount]) => (
                  <div key={placement} className="rounded-lg bg-gray-100 dark:bg-gray-800 p-3">
                    <p className="text-gray-600 dark:text-gray-300">{placement}</p>
                    <p className="mt-1 font-bold text-primary">{amount}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Sponsors Section */}
      <section id="sponsors" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl font-bold gradient-heading">Our Sponsors</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Proud partners supporting ICDMB 2026</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* nbil */}
            <a
              href="https://nextbiginnovationlabs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/60 p-10 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex h-20 items-center justify-center rounded-lg bg-white px-6 py-4">
                <Image
                  src="/images/nbil-logo.png"
                  alt="Next Big Innovation Labs (nbil) logo"
                  width={180}
                  height={64}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <span className="text-xs font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400 text-center">
                Next Big Innovation Labs
              </span>
            </a>

            {/* Shiva Enterprises */}
            <div className="group flex flex-col items-center justify-center gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/60 p-10 transition-all hover:border-primary/50 hover:shadow-lg">
              <div className="flex h-20 items-center justify-center rounded-lg bg-white px-6 py-4">
                <span className="font-serif text-4xl font-bold italic tracking-tight bg-gradient-to-r from-orange-500 via-rose-500 to-red-600 bg-clip-text text-transparent">
                  Shiva
                </span>
              </div>
              <span className="text-xs font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400 text-center">
                Shiva Enterprises
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Venue & Details Section */}
      <section id="venue" className="py-24 bg-gray-100 dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl font-bold gradient-heading">Venue & Details</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          </div>

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
    </>
  )
}
