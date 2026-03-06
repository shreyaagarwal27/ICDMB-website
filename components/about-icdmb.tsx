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
              The <span className="text-gray-900 dark:text-white font-semibold">Advanced Design, Materials, and Biomedical Engineering (ICDMB 2026)</span> conference at MANIT Bhopal brings together researchers, industry experts, and academicians to explore emerging innovations in mechanical and biomedical engineering.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The conference focuses on a wide range of themes including <span className="text-primary">machine design</span>, <span className="text-primary">tribology</span>, <span className="text-primary">computational mechanics</span>, <span className="text-primary">fracture mechanics</span>, <span className="text-primary">vehicle dynamics</span>, <span className="text-primary">product design and development</span>, <span className="text-primary">advanced composites</span>, <span className="text-primary">nanomaterials</span>, <span className="text-primary">materials characterization and processing</span>.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              It also highlights modern advancements in <span className="text-primary">artificial intelligence for mechanical systems</span>, <span className="text-primary">robotics and automation</span>, <span className="text-primary">smart material design</span>, and biomedical fields such as <span className="text-primary">scaffold development</span> and <span className="text-primary">implant biomechanics</span>. ICDMB 2026 aims to provide a collaborative platform for exchanging ideas, showcasing research, and inspiring future technologies.
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
