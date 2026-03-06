export function AboutICDMB() {
  return (
    <section id="about-icdmb" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold gradient-heading">About ICDMB 2026</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="space-y-6 flex-1 order-2 lg:order-1">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              The{" "}
              <span className="text-gray-900 dark:text-white font-semibold">
                International Conference on Advanced Design, Materials, and Biomedical Engineering (ICDMB 2026)
              </span>
              , hosted by the Department of Mechanical Engineering at MANIT Bhopal, brings together researchers,
              industry experts, academicians, and students to explore cutting-edge developments shaping modern
              engineering.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Key themes include <span className="text-primary">machine design</span>,{" "}
              <span className="text-primary">tribology</span>,
              <span className="text-primary"> computational mechanics</span>,{" "}
              <span className="text-primary">fracture mechanics</span>,
              <span className="text-primary"> vehicle dynamics</span>, and{" "}
              <span className="text-primary">product design & development</span>. The conference also highlights
              advances in <span className="text-primary">advanced composites & nano-materials</span>,
              <span className="text-primary"> materials characterization</span>, AI-driven robotics and automation in
              mechanical systems, and smart material design.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Biomedical engineering tracks will showcase innovations in{" "}
              <span className="text-primary">scaffold development</span> and
              <span className="text-primary"> implant biomechanics</span>. ICDMB 2026 aims to foster collaboration,
              facilitate high-impact research exchange, and inspire the technologies of tomorrow. Join us to contribute,
              connect, and catalyze innovation.
            </p>
          </div>

          {/* Logo Section - Right Side on desktop, Top on mobile */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 flex-shrink-0">
            <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-4 flex items-center justify-center">
              <img src="/images/icdmb-logo.png" alt="ICDMB 2026 logo" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
