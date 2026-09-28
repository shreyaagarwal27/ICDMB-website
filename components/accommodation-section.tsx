const contacts = [
  { name: "Mr. Ankit Srivastava", phone: "+91 82690 87517" },
  { name: "Deepak Mishra", phone: "+91 79-05248009" },
]

export function AccommodationSection() {
  return (
    <section id="accommodation" className="bg-gray-50 py-16 dark:bg-gray-950 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Accommodation</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
            Institute accommodation in the Faculty Guest House is available on a first-come, first-served basis.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-sm rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Room Charges</p>
          <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">₹1,000 / night</p>
        </div>

        <div className="mt-10">
          <h3 className="text-center text-lg font-bold text-gray-900 dark:text-white">For booking, contact</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {contacts.map((contact) => (
              <a
                key={contact.phone}
                href={`tel:${contact.phone.replace(/[^+\\d]/g, "")}`}
                className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
              >
                <span className="block font-semibold text-gray-900 dark:text-white">{contact.name}</span>
                <span className="mt-1 block text-sm text-gray-600 dark:text-gray-400">{contact.phone}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
