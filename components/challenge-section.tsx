"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Award, CalendarDays, Clock3, ExternalLink, Gift, Palette, Presentation, Users } from "lucide-react"

const registrationUrl = "https://forms.gle/qjYe6it6d7vaYvV1A"

const events = [
  {
    title: "Research2Impact 180",
    subtitle: "Application-Oriented Research in 3 Minutes",
    description: "Present your research in just three minutes, communicate its real-world application, and showcase its innovation, impact, and future potential.",
    icon: Presentation,
    accent: "from-violet-500 to-indigo-600",
    glow: "rgba(139,92,246,0.34)",
    tag: "RESEARCH PITCH",
    rewards: ["1st Prize: ₹5,000", "2nd Prize: ₹3,000", "3rd Prize: ₹2,000"],
  },
  {
    title: "Research Canvas 2026",
    subtitle: "Visual Research & Poster Challenge",
    description: "Turn your research into a creative poster. Highlight key findings and novelty while engaging with peers and experts.",
    icon: Palette,
    accent: "from-sky-500 to-blue-700",
    glow: "rgba(14,165,233,0.34)",
    tag: "POSTER CHALLENGE",
    rewards: ["Certificates for all participants", "Exciting gifts for best posters"],
  },
  {
    title: "Idea2Impact 180",
    subtitle: "3-Minute Engineering Innovation Pitch",
    description: "Present your innovative engineering idea in just three minutes, demonstrate its creativity, feasibility, and real-world impact, and inspire the jury.",
    icon: Presentation,
    accent: "from-cyan-500 to-blue-600",
    glow: "rgba(6,182,212,0.34)",
    tag: "INNOVATION PITCH",
    rewards: ["1st Prize: ₹5,000", "2nd Prize: ₹3,000", "3rd Prize: ₹2,000"],
  },
  {
    title: "DesignX 2026",
    subtitle: "Engineering Design & Problem-Solving Challenge",
    description: "Solve a real-world engineering problem and present your concept through design thinking, analysis, creativity, and innovation.",
    icon: Palette,
    accent: "from-indigo-500 to-violet-700",
    glow: "rgba(99,102,241,0.34)",
    tag: "DESIGN CHALLENGE",
    rewards: ["Certificates for all participants", "Exciting gifts for best designs"],
  },
]

export function ChallengeSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const dragStart = useRef<number | null>(null)
  const event = events[activeIndex]
  const Icon = event.icon

  const navigate = useCallback((nextIndex: number) => {
    setDirection(nextIndex > activeIndex || (activeIndex === events.length - 1 && nextIndex === 0) ? 1 : -1)
    setActiveIndex(nextIndex)
    setTilt({ x: 0, y: 0 })
  }, [activeIndex])

  const move = useCallback((step: number) => navigate((activeIndex + step + events.length) % events.length), [activeIndex, navigate])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") move(-1)
      if (event.key === "ArrowRight") move(1)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [move])

  return (
    <section id="challenge-competition" className="relative overflow-hidden bg-background py-20 text-foreground sm:py-24" aria-labelledby="challenge-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(77,141,246,0.12),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(0,86,179,0.08),transparent_38%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(77,141,246,0.18),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.16),transparent_38%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-primary">Showcase your research | Share your ideas | Inspire change</p>
          <h2 id="challenge-heading" className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">ICDMB Challenge and Competition</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Competitions designed for research scholars and undergraduate students to communicate bold ideas, demonstrate impact, and make research accessible.</p>
        </motion.div>

        <div className="relative mx-auto max-w-6xl" onKeyDown={(event) => { if (event.key === "ArrowLeft") move(-1); if (event.key === "ArrowRight") move(1) }} tabIndex={0} aria-label="Competition carousel. Use left and right arrow keys to navigate.">
          <button type="button" onClick={() => move(-1)} aria-label="Previous competition" className="absolute left-0 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-card p-3 text-card-foreground shadow-lg transition hover:scale-110 hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary sm:block">
            <ArrowLeft className="size-5" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => move(1)} aria-label="Next competition" className="absolute right-0 top-1/2 z-20 hidden translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-card p-3 text-card-foreground shadow-lg transition hover:scale-110 hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary sm:block">
            <ArrowRight className="size-5" aria-hidden="true" />
          </button>

          <div className="overflow-hidden rounded-[2rem] px-0 py-2 sm:px-12" onTouchStart={(event) => { dragStart.current = event.touches[0].clientX }} onTouchEnd={(event) => { if (dragStart.current === null) return; const delta = event.changedTouches[0].clientX - dragStart.current; if (Math.abs(delta) > 40) move(delta > 0 ? -1 : 1); dragStart.current = null }}>
            <motion.article key={event.title} initial={{ opacity: 0, x: direction * 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.42, ease: "easeOut" }} className="grid overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-2xl lg:grid-cols-[0.95fr_1.05fr]" style={{ boxShadow: isHovering ? `0 24px 70px ${event.glow}` : undefined }}>
              <div className="group relative min-h-[300px] overflow-hidden bg-slate-950 p-7 sm:min-h-[390px] sm:p-10" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => { setIsHovering(false); setTilt({ x: 0, y: 0 }) }} onMouseMove={(mouseEvent) => { const rect = mouseEvent.currentTarget.getBoundingClientRect(); setTilt({ x: ((mouseEvent.clientY - rect.top) / rect.height - 0.5) * -5, y: ((mouseEvent.clientX - rect.left) / rect.width - 0.5) * 5 }) }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${event.accent} opacity-25`} />
                <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:34px_34px]" />
                <div className="absolute -right-10 -top-10 size-44 rounded-full border border-white/20 motion-safe:animate-pulse" />
                <div className="absolute -bottom-16 -left-10 size-48 rounded-full border border-white/10" />
                <div className="relative flex h-full flex-col justify-between" style={{ transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, transition: "transform 180ms ease-out" }}>
                  <div className="flex items-center justify-between text-xs font-bold tracking-[0.2em] text-white/70"><span>ICDMB 2026</span><span>0{activeIndex + 1} / 0{events.length}</span></div>
                  <div className="mx-auto flex max-w-sm flex-1 flex-col items-center justify-center text-center">
                    <div className={`mb-6 rounded-3xl bg-gradient-to-br ${event.accent} p-5 shadow-2xl transition-transform duration-500 group-hover:scale-110`}><Icon className="size-14 text-white" aria-hidden="true" /></div>
                    <p className="text-xs font-bold tracking-[0.3em] text-white/70">{event.tag}</p>
                    <h3 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">{event.title}</h3>
                  </div>
                  <div className="flex items-end justify-between text-xs text-white/70"><span>FEATURED CHALLENGE</span><span className="h-px w-20 bg-white/40" /></div>
                </div>
              </div>
              <div className="flex flex-col justify-between p-7 sm:p-10">
                <div>
                  <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary"><span className="size-2 rounded-full bg-primary motion-safe:animate-pulse" /> Featured challenge</div>
                  <p className="text-xl font-semibold text-card-foreground sm:text-2xl">{event.subtitle}</p>
                  <p className="mt-5 leading-7 text-muted-foreground">{event.description}</p>
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">{event.rewards.map((reward) => <div key={reward} className="flex items-center gap-3 rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm font-medium text-card-foreground"><Award className="size-5 shrink-0 text-primary" aria-hidden="true" /><span>{reward}</span></div>)}</div>
                </div>
                <a href={registrationUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-1 hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Register for this challenge <ExternalLink className="size-4" aria-hidden="true" /></a>
              </div>
            </motion.article>
          </div>
          <div className="mt-6 flex items-center justify-center gap-3 sm:hidden"><button type="button" onClick={() => move(-1)} aria-label="Previous competition" className="rounded-full border border-border p-2"><ArrowLeft className="size-4" /></button><span className="text-sm font-semibold text-muted-foreground">Swipe to explore</span><button type="button" onClick={() => move(1)} aria-label="Next competition" className="rounded-full border border-border p-2"><ArrowRight className="size-4" /></button></div>
          <div className="mt-6 flex items-center justify-center gap-2" aria-label="Choose competition">{events.map((item, index) => <button key={item.title} type="button" onClick={() => navigate(index)} aria-label={`Go to ${item.title}`} aria-current={index === activeIndex} className={`h-2 rounded-full transition-all ${index === activeIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-primary/60"}`} />)}</div>
        </div>

        <div className="mt-10 grid gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-card-foreground sm:grid-cols-3 sm:p-8 dark:bg-primary/10"><div className="flex items-center gap-3"><CalendarDays className="size-5 text-sky-300" aria-hidden="true" /><span><strong>Event:</strong> 08–09 October 2026</span></div><div className="flex items-center gap-3"><Users className="size-5 text-sky-300" aria-hidden="true" /><span><strong>Eligibility:</strong> Ph.D., M.Tech., research scholars &amp; B.Tech. students</span></div><div className="flex items-center gap-3"><Clock3 className="size-5 text-sky-300" aria-hidden="true" /><span><strong>Register by:</strong> 30 September 2026</span></div></div>
      </div>
    </section>
  )
}

