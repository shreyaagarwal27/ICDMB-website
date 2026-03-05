export function AboutInstitute() {
  return (
    <section id="about-manit" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Our Institution</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-bold gradient-heading">About MANIT Bhopal</h2>
        </div>

        {/* Main Content - Flex Layout */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Text Content - Left Side */}
          <article className="flex-1 order-2 lg:order-1">
            {/* Full Version (160-220 words) */}
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Maulana Azad National Institute of Technology (MANIT), Bhopal, established in 1960, is a premier
                institution of national importance in technical education. It offers undergraduate, postgraduate, and
                doctoral programmes in Architecture, Planning, Engineering, Sciences, Computer Applications, and
                Management.
              </p>
              <p>
                The Institute collaborates with industries and international institutions and hosts Centres of
                Excellence in AI, Smart Manufacturing, Water Resource Management, and Cable Technology.
              </p>
              <p>
                Spread over a 650-acre campus, MANIT features advanced academic, research, and residential facilities,
                including a Central Computing and Research Facility, Data Centre, and an Incubation Centre promoting
                innovation and entrepreneurship.
              </p>
            </div>
          </article>

          {/* Image - Right Side */}
          <figure className="w-full lg:w-[400px] flex-shrink-0 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl shadow-primary/5">
              <img
                src="/images/manit-bakklir.jpg"
                alt="MANIT Bhopal main administrative building - a cream and red brick structure with the institute logo and name displayed on the facade, surrounded by palm trees with a reflection pool in front"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
              {/* Image Caption */}
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-medium">MANIT Bhopal Campus</p>
                <p className="text-white/70 text-xs">Main Administrative Building</p>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
