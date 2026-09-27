"use client"

import { motion } from "framer-motion"
import { Award, CalendarDays, Clock3, ExternalLink, Gift, Palette, Presentation, Users } from "lucide-react"

const registrationUrl = "https://forms.gle/qjYe6it6d7vaYvV1A"

const events = [
  {
    title: "Research2Impact 180",
    subtitle: "Application-Oriented Research in 3 Minutes",
    description: "Present your research in just three minutes, communicate its real-world application, and showcase its innovation, impact, and future potential.",
    icon: Presentation,
    accent: "from-violet-500 to-indigo-600",
    rewards: ["1st Prize: ₹5,000", "2nd Prize: ₹3,000", "3rd Prize: ₹2,000"],
  },
  {
    title: "Research Canvas 2026",
    subtitle: "Visual Research & Poster Challenge",
    description: "Turn your research into a creative poster. Highlight key findings and novelty while engaging with peers and experts.",
    icon: Palette,
    accent: "from-sky-500 to-blue-700",
    rewards: ["Certificates for all participants", "Exciting gifts for best posters"],
  },
  {
    title: "Idea2Impact 180",
    subtitle: "3-Minute Engineering Innovation Pitch",
    description: "Present your innovative engineering idea in just three minutes, demonstrate its creativity, feasibility, and real-world impact, and inspire the jury.",
    icon: Presentation,
    accent: "from-cyan-500 to-blue-600",
    rewards: ["1st Prize: ₹5,000", "2nd Prize: ₹3,000", "3rd Prize: ₹2,000"],
  },
  {
    title: "DesignX 2026",
    subtitle: "Engineering Design & Problem-Solving Challenge",
    description: "Solve a real-world engineering problem and present your concept through design thinking, analysis, creativity, and innovation.",
    icon: Palette,
    accent: "from-indigo-500 to-violet-700",
    rewards: ["Certificates for all participants", "Exciting gifts for best designs"],
  },
]

export function ChallengeSection() {
  return (
    <section id="challenge-competition" className="relative overflow-hidden bg-background py-20 text-foreground sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(77,141,246,0.12),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(0,86,179,0.08),transparent_38%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(77,141,246,0.18),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.16),transparent_38%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-primary">Showcase your research | Share your ideas | Inspire change</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">ICDMB Challenge and Competition</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Competitions designed for research scholars and undergraduate students to communicate bold ideas, demonstrate impact, and make research accessible.</p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {events.map((event, index) => {
            const Icon = event.icon
            return (
              <motion.article
                key={event.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg"
              >
                <div className={`bg-gradient-to-r ${event.accent} p-6 sm:p-8`}>
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/75">Competition {index + 1}</p>
                      <h3 className="text-2xl font-bold sm:text-3xl">{event.title}</h3>
                    </div>
                    <Icon className="h-10 w-10 shrink-0 text-white/90" aria-hidden="true" />
                  </div>
                  <p className="text-lg font-semibold text-white/95">{event.subtitle}</p>
                </div>
                <div className="space-y-6 p-6 sm:p-8">
                  <p className="leading-7 text-muted-foreground">{event.description}</p>
                  <div className="space-y-3">
                    {event.rewards.map((reward) => (
                      <div key={reward} className="flex items-center gap-3 text-sm font-medium text-card-foreground sm:text-base">
                        {index === 0 ? <Award className="h-5 w-5 text-sky-300" aria-hidden="true" /> : <Gift className="h-5 w-5 text-cyan-300" aria-hidden="true" />}
                        <span>{reward}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        <div className="mt-8 grid gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-card-foreground sm:grid-cols-3 sm:p-8 dark:bg-primary/10">
          <div className="flex items-center gap-3"><CalendarDays className="h-5 w-5 text-sky-300" aria-hidden="true" /><span><strong>Event:</strong> 08–09 October 2026</span></div>
          <div className="flex items-center gap-3"><Users className="h-5 w-5 text-sky-300" aria-hidden="true" /><span><strong>Eligibility:</strong> Ph.D., M.Tech., research scholars & B.Tech. students</span></div>
          <div className="flex items-center gap-3"><Clock3 className="h-5 w-5 text-sky-300" aria-hidden="true" /><span><strong>Register by:</strong> 30 September 2026</span></div>
        </div>

        <div className="mt-8 text-center">
          <a href={registrationUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3 font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950">
            Register for the competitions
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
