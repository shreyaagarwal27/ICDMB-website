"use client"

import { motion } from "framer-motion"
import { ArrowRight, BriefcaseBusiness, Lightbulb, Network, Sparkles } from "lucide-react"

const sessions = [
  {
    audience: "For B.Tech Students",
    title: "CAMPUS2CAREER CONNECT",
    subtitle: "Academia × Industry Networking Forum",
    description: "Explore career paths, higher studies, industry expectations, emerging technologies, and networking opportunities.",
    icon: BriefcaseBusiness,
    accent: "from-cyan-500 to-blue-600",
  },
  {
    audience: "For Research Scholars",
    title: "RESEARCH RESCUE: ASK THE EXPERT",
    subtitle: "My Research Is Stuck — What Next?",
    description: "Discuss your research challenges and get practical suggestions, new directions, and expert guidance.",
    icon: Lightbulb,
    accent: "from-indigo-500 to-violet-700",
  },
]

export function ExpertConnectSection() {
  return (
    <section id="expert-connect" className="relative overflow-hidden bg-slate-900 py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.16),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_42%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Expert Connect
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">ICDMB Events – Expert Connect</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Two special interactive sessions for learning, guidance, and networking.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {sessions.map((session, index) => {
            const Icon = session.icon
            return (
              <motion.article
                key={session.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] shadow-2xl backdrop-blur-sm"
              >
                <div className={`bg-gradient-to-r ${session.accent} p-6 sm:p-8`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-white/80">{session.audience}</p>
                      <h3 className="text-2xl font-black tracking-tight sm:text-3xl">{session.title}</h3>
                    </div>
                    <Icon className="h-10 w-10 shrink-0 text-white/90" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg font-semibold text-white/95">{session.subtitle}</p>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-base leading-8 text-slate-300 sm:text-lg">{session.description}</p>
                  <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-cyan-200 sm:text-base">
                    <Network className="h-5 w-5 shrink-0" aria-hidden="true" />
                    Interact with experts · Explore opportunities · Get guidance · Build connections
                    <ArrowRight className="ml-auto h-5 w-5 shrink-0" aria-hidden="true" />
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

