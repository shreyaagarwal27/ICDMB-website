import { GraduationCap, Users, BookOpen, Microscope } from "lucide-react"

export function AboutSection() {
  const stats = [
    { icon: Users, label: "Students", value: "1000+" },
    { icon: GraduationCap, label: "B.Tech", value: "780" },
    { icon: BookOpen, label: "M.Tech", value: "180" },
    { icon: Microscope, label: "Ph.D. Scholars", value: "40+" },
  ]

  return (
    <section id="about-department" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          About <span className="text-primary">Mechanical Department</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start">
          {/* Left Side - Content */}
          <div className="animate-fade-in-up">
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-base">
              <p>
                The Department of Mechanical Engineering at MANIT Bhopal stands as a beacon of academic excellence and
                value-based education. Established alongside the institute in 1960, the department has consistently
                nurtured generations of engineers who have made significant contributions to industry and academia.
              </p>
              <p>
                With a commitment to fostering innovation and research, the department offers comprehensive
                undergraduate, postgraduate, and doctoral programs. Our distinguished faculty, state-of-the-art
                laboratories, and industry collaborations ensure that students receive world-class education in design,
                materials science, thermal engineering, and emerging technologies.
              </p>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white dark:bg-gray-900 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-800 text-center hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary transition-all duration-300 shadow-sm dark:shadow-none"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
