"use client"

import { useState } from "react"

const tracks = [
  {
    id: "design",
    title: "Advanced Design",
    image: "/industrial-robotic-arm-in-modern-manufacturing-fac.jpg",
    topics: ["Machine Design", "Tribology", "Computational Mechanics", "Robotics"],
  },
  {
    id: "materials",
    title: "Materials Engineering",
    image: "/close-up-carbon-fiber-composite-material-with-meta.jpg",
    topics: ["Nano-composites", "Materials Characterization", "Smart Materials", "Advanced Alloys"],
  },
  {
    id: "biomedical",
    title: "Biomedical Engineering",
    image: "/futuristic-prosthetic-hand-bionic-limb-medical-tec.jpg",
    topics: ["Biomaterials", "Scaffold Design", "Biomechanical Design", "Medical Devices"],
  },
]

export function ConferenceTracks() {
  const [hoveredTrack, setHoveredTrack] = useState<string | null>(null)

  return (
    <section id="conference-themes" className="py-24 bg-gray-100 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Call for Papers</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-bold gradient-heading">Conference Themes</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Submit your research in one of our three specialized tracks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tracks.map((track) => {
            const isHovered = hoveredTrack === track.id

            return (
              <div
                key={track.id}
                className={`group relative rounded-xl overflow-hidden border-2 transition-all duration-500 cursor-pointer ${
                  isHovered
                    ? "border-primary shadow-lg dark:shadow-primary/20"
                    : "border-gray-300 dark:border-gray-800 hover:border-primary/60"
                }`}
                onMouseEnter={() => setHoveredTrack(track.id)}
                onMouseLeave={() => setHoveredTrack(null)}
              >
                {/* Image container with zoom effect */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={track.image || "/placeholder.svg"}
                    alt={`${track.title} - Conference Theme`}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isHovered ? "scale-110" : "scale-100"
                    }`}
                  />
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

                  {/* Title on image - Using Subtle Gold accent for theme titles */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-sans text-2xl font-bold text-amber-300 drop-shadow-lg">{track.title}</h3>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-900 p-6">
                  <ul className="space-y-3">
                    {track.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-3">
                        <div
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            isHovered ? "bg-primary shadow-[0_0_8px_rgba(0,86,179,0.6)]" : "bg-primary/50"
                          }`}
                        />
                        <span className="text-gray-700 dark:text-gray-200 font-sans text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
