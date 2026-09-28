import { BedDouble, Phone } from "lucide-react"

const contacts = [
  { name: "Mr. Ankit Srivastava", phone: "+91 82690 87517" },
  { name: "Deepak Mishra", phone: "+91 79-05248009" },
]

export function AccommodationSection() {
  return (
    <section id="accommodation" className="bg-gray-50 py-16 dark:bg-gray-950 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="group grid overflow-hidden rounded-3xl border border-slate-700/70 bg-[#0b1220] shadow-2xl shadow-slate-950/20 transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-primary/10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#24185c] via-[#31206f] to-[#161b3d] p-8 sm:min-h-[390px] lg:p-12">
            <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:34px_34px]" />
            <div className="absolute -right-20 -top-20 size-64 rounded-full border border-white/15" />
            <div className="absolute -bottom-28 -left-20 size-64 rounded-full border border-white/15" />
            <div className="relative text-center text-white">
              <div className="mx-auto flex size-20 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-2xl backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                <BedDouble className="size-10 text-blue-200" aria-hidden="true" />
              </div>
              <h2 className="mt-7 font-serif text-4xl font-bold tracking-tight sm:text-5xl">Accommodation</h2>
              <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
            </div>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
            <p className="max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Institute accommodation in the Faculty Guest House is available on a first-come, first-served basis.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900/80 p-5 shadow-inner sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">Room charges</p>
              <p className="mt-2 text-3xl font-bold text-white sm:text-4xl">₹1,000 / night</p>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-white">For booking, contact</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {contacts.map((contact) => (
                  <a
                    key={contact.phone}
                    href={`tel:${contact.phone.replace(/[^+\\d]/g, "")}`}
                    className="group/contact flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/40 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/70 hover:bg-blue-500/10"
                  >
                    <Phone className="size-5 shrink-0 text-blue-300 transition-transform duration-300 group-hover/contact:scale-110" aria-hidden="true" />
                    <span>
                      <span className="block font-semibold text-white">{contact.name}</span>
                      <span className="text-sm text-slate-400">{contact.phone}</span>
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
