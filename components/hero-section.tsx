import { MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img src="/images/manit-bakklir.jpg" alt="" className="w-full h-full object-cover opacity-30 dark:opacity-40" />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        {/* Logos */}
        <div className="flex items-center justify-center gap-5 sm:gap-8 md:gap-12 mb-10">
          <img
            src="/images/image-20-282-29.png"
            alt="MANIT Bhopal Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain drop-shadow-2xl"
          />
          <img
            src="/images/icdmb-logo.png"
            alt="ICDMB 2026 Logo"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 object-contain drop-shadow-2xl"
          />
        </div>

        <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium tracking-wide mb-4 max-w-4xl mx-auto text-balance">
          International Conference on Advanced Design, Materials, and Biomedical Engineering
        </p>

        {/* ICDMB 2026 - Large Impact */}
        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white">
          ICDMB 2026
        </h1>

        {/* First Announcement - No shadow, just colored text */}
        <p className="mt-8 text-lg sm:text-xl md:text-2xl font-semibold text-blue-500">
          First Announcement and Call for Papers
        </p>

        {/* Location */}
        <div className="mt-8 flex items-center justify-center gap-2 text-white/90">
          <MapPin className="w-5 h-5 text-blue-500" />
          <span className="text-base sm:text-lg">MANIT Bhopal, Madhya Pradesh, India</span>
        </div>

        <div className="mt-6 flex flex-col items-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-white/75">Sponsored by</span>
          <div className="rounded-lg bg-white px-5 py-3">
            <img
              src="/images/anrf-logo.jpeg"
              alt="Anusandhan National Research Foundation logo"
              className="h-16 w-40 object-contain sm:h-20 sm:w-52"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-7 h-12 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
