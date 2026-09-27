import { BedDouble, Phone } from "lucide-react"

const contacts = [
  { name: "Mr. Ankit Srivastava", phone: "+91 82690 87517" },
  { name: "Deepak Mishra", phone: "+91 79-05248009" },
]

export function AccommodationSection() {
  return (
    <section id="accommodation" className="bg-gray-50 py-20 dark:bg-gray-900 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-lg dark:bg-gray-950">
          <div className="bg-primary px-6 py-6 text-center text-white sm:px-10">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
              <BedDouble className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">Accommodation</h2>
          </div>

          <div className="p-6 sm:p-10">
            <p className="text-center text-lg leading-8 text-gray-700 dark:text-gray-300 sm:text-xl">
              Institute accommodation in the Faculty Guest House is available on a first-come, first-served basis.
            </p>

            <div className="mt-6 rounded-xl bg-primary/5 p-5 text-center dark:bg-primary/10">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Room charges</p>
              <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">₹1,000 / night</p>
            </div>

            <div className="mt-8">
              <h3 className="text-center text-lg font-bold text-gray-900 dark:text-white">For booking, contact</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {contacts.map((contact) => (
                  <a
                    key={contact.phone}
                    href={`tel:${contact.phone.replace(/[^+\\d]/g, "")}`}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 p-4 transition-colors hover:border-primary/50 hover:bg-primary/5 dark:border-gray-800 dark:hover:bg-primary/10"
                  >
                    <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <span className="block font-semibold text-gray-900 dark:text-white">{contact.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{contact.phone}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
