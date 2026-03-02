import { Waves, Landmark, MapPin, Plane } from "lucide-react"

export function BhopalTile() {
  return (
    <section id="venue" className="py-20 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-slate-800 border-t-4 border-t-emerald-500 border border-slate-700 p-10 sm:p-14">
          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />

          {/* Wave pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
            <svg viewBox="0 0 200 200" className="w-full h-full text-emerald-500">
              <path fill="currentColor" d="M0,100 Q25,80 50,100 T100,100 T150,100 T200,100 V200 H0 Z" />
              <path fill="currentColor" opacity="0.5" d="M0,120 Q25,100 50,120 T100,120 T150,120 T200,120 V200 H0 Z" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500/20 rounded-2xl blur-xl" />
                <div className="relative w-28 h-28 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <Waves className="w-14 h-14 text-emerald-500" />
                </div>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-semibold text-emerald-400 uppercase tracking-widest">
                  Conference Venue
                </span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Bhopal — <span className="text-emerald-500">The City of Lakes</span>
              </h3>
              <p className="text-slate-400 leading-relaxed max-w-xl text-lg">
                Experience the cultural heritage and natural beauty of Madhya Pradesh&apos;s capital city. Known for its
                scenic lakes, rich history, and warm hospitality.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
                {[
                  { icon: Landmark, text: "UNESCO Heritage Sites" },
                  { icon: Waves, text: "Upper & Lower Lakes" },
                  { icon: Plane, text: "Well Connected" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-2 text-sm text-slate-400 bg-slate-900 px-4 py-2 rounded-full border border-slate-700 hover:border-emerald-500/50 transition-colors"
                  >
                    <item.icon className="w-4 h-4 text-emerald-500" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
