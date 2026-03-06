"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, CheckCircle, Clock } from "lucide-react"

const dates = [
  {
    date: "30th April 2026",
    title: "Full Paper Submission",
    description: "Full paper submission deadline",
    status: "upcoming",
  },
  {
    date: "5th July 2026",
    title: "Registration of Authors",
    description: "Author registration deadline",
    status: "upcoming",
  },
  {
    date: "30th July 2026",
    title: "Revised Paper Submission",
    description: "Final revised paper submission",
    status: "upcoming",
  },
  {
    date: "8th – 9th Oct 2026",
    title: "Conference Dates",
    description: "ICDMB 2026 at MANIT Bhopal",
    status: "highlight",
  },
]

export function ImportantDates() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [lineHeight, setLineHeight] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index].sort((a, b) => a - b)
              }
              return prev
            })
          }
        })
      },
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (visibleItems.length > 0) {
      const maxIndex = Math.max(...visibleItems)
      const percentage = ((maxIndex + 1) / dates.length) * 100
      setLineHeight(percentage)
    }
  }, [visibleItems])

  return (
    <section id="important-dates" className="py-20 bg-gray-100 dark:bg-gray-950 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Mark Your Calendar</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">Important Dates</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Key deadlines and milestones for ICDMB 2026. Plan your submissions accordingly.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative" ref={timelineRef}>
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-primary/20 dark:bg-gray-800 rounded-full" />

          {/* Animated Blue Line */}
          <div
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-primary to-primary/50 rounded-full transition-all duration-1000 ease-out"
            style={{ height: `${lineHeight}%` }}
          />

          {/* Timeline Items */}
          <div className="relative z-10 space-y-8 md:space-y-12">
            {dates.map((item, index) => {
              const isVisible = visibleItems.includes(index)
              const isLeft = index % 2 === 0
              const isHighlight = item.status === "highlight"
              const isNextDeadline = index === 0

              return (
                <div
                  key={index}
                  ref={(el) => {
                    itemRefs.current[index] = el
                  }}
                  data-index={index}
                  className={`flex items-center gap-4 md:gap-8 flex-row md:${isLeft ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className="relative flex items-center justify-center flex-shrink-0 md:order-none order-first">
                    <div
                      className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-4 transition-all duration-500 ${
                        isVisible
                          ? isHighlight
                            ? "bg-primary border-primary shadow-lg shadow-primary/50 scale-125"
                            : "bg-primary border-primary shadow-md shadow-primary/30"
                          : "bg-gray-300 dark:bg-gray-800 border-gray-400 dark:border-gray-700"
                      }`}
                    />
                    {isHighlight && isVisible && (
                      <div className="absolute w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary/30 animate-ping" />
                    )}
                  </div>

                  <div
                    className={`flex-1 md:w-[calc(50%-2rem)] md:flex-none transition-all duration-700 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : isLeft
                          ? "opacity-0 md:-translate-x-12"
                          : "opacity-0 md:translate-x-12"
                    }`}
                  >
                    <div
                      className={`p-4 md:p-6 rounded-xl backdrop-blur-md border transition-all duration-300 hover:scale-105 ${
                        isHighlight
                          ? "bg-primary/10 dark:bg-primary/20 border-primary shadow-lg shadow-primary/20"
                          : isNextDeadline
                            ? "bg-white dark:bg-gray-900 border-primary animate-pulse-border"
                            : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-start gap-3 md:gap-4">
                        <div
                          className={`p-2 rounded-lg flex-shrink-0 ${isHighlight ? "bg-primary/30" : "bg-primary/10"}`}
                        >
                          {isHighlight ? (
                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                          ) : (
                            <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-primary font-bold text-base md:text-lg mb-1">{item.date}</p>
                          <h3 className="text-gray-900 dark:text-white font-semibold text-lg md:text-xl mb-1 md:mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty space */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-border {
          0%, 100% {
            border-color: rgb(0 86 179 / 0.5);
            box-shadow: 0 0 0 0 rgb(0 86 179 / 0.4);
          }
          50% {
            border-color: rgb(0 86 179);
            box-shadow: 0 0 20px 0 rgb(0 86 179 / 0.3);
          }
        }
        .animate-pulse-border {
          animation: pulse-border 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
