"use client"

import { motion } from "framer-motion"
import { ArrowRight, BriefcaseBusiness, Lightbulb, Sparkles } from "lucide-react"

const sessions = [
  {
    audience: "For B.Tech Students",
    title: "CAMPUS2CAREER CONNECT",
    subtitle: "Academia × Industry Networking Forum",
    description: "Explore career paths, higher studies, industry expectations, emerging technologies, and networking opportunities.",
    icon: BriefcaseBusiness,
    accent: "from-cyan-500 to-blue-600",
    glow: "group-hover:shadow-cyan-500/20",
  },
  {
    audience: "For Research Scholars",
    title: "RESEARCH RESCUE: ASK THE EXPERT",
    subtitle: "My Research Is Stuck — What Next?",
    description: "Discuss your research challenges and get practical suggestions, new directions, and expert guidance.",
    icon: Lightbulb,
    accent: "from-indigo-500 to-violet-700",
    glow: "group-hover:shadow-violet-500/20",
  },
]

export function ExpertConnectSection() {
  return (
    <section id="expert-connect" className="relative overflow-hidden bg-background py-20 text-foreground sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(77,141,246,0.1),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(0,86,179,0.08),transparent_42%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.16),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_42%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary dark:bg-primary/10">
            <Sparkles className="size-4" aria-hidden="true" />
            Expert Connect
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">ICDMB Events – Expert Connect</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Two special interactive sessions for learning, guidance, and networking.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {sessions.map((session, index) => {
            const Icon = session.icon
            return (
              <motion.article
                key={session.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.12, ease: "easeOut" }}
                className={`group overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${session.glow}`}
              >
                <div className={`relative min-h-64 overflow-hidden bg-gradient-to-br ${session.accent} p-7 sm:min-h-72 sm:p-9`}>
                  <div className="absolute -right-20 -top-20 size-56 rounded-full border border-white/20 bg-white/10 transition-transform duration-700 group-hover:scale-125" />
                  <div className="absolute -bottom-24 -left-16 size-64 rounded-full border border-white/15 bg-black/10 transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_30%,rgba(255,255,255,0.12),transparent_65%)] opacity-60 transition-transform duration-700 group-hover:translate-x-8" />
                  <div className="relative flex h-full min-h-48 flex-col justify-between">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/80">{session.audience}</p>
                      <div className="rounded-2xl border border-white/25 bg-white/15 p-4 shadow-lg backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="size-9 text-white" aria-hidden="true" />
                      </div>
                    </div>
                    <h3 className="max-w-xl text-3xl font-black tracking-tight text-white sm:text-4xl">{session.title}</h3>
                  </div>
                </div>
                <div className="flex min-h-64 flex-col p-7 sm:min-h-72 sm:p-9">
                  <p className="text-xl font-semibold leading-snug text-foreground sm:text-2xl">{session.subtitle}</p>
                  <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">{session.description}</p>
                  <button type="button" className="mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-bold text-primary transition-all duration-300 group-hover:gap-3 sm:text-base">
                    Learn More <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

