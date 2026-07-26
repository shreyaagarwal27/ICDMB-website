"use client"

import { useEffect, useState } from "react"
import { Calendar, Download, FileText, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ActionBar() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const deadline = new Date("2026-10-08T00:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = deadline - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-gray-100 dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Countdown Timer */}
          <div className="flex flex-col items-center lg:items-start gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Clock className="w-4 h-4 text-primary" />
              <span>Time until Conference Start</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Mins" },
                { value: timeLeft.seconds, label: "Secs" },
              ].map((item, index) => (
                <div key={item.label} className="flex items-center gap-3 sm:gap-4">
                  <div className="text-center">
                    <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg px-3 sm:px-4 py-2 min-w-[60px] shadow-sm">
                      <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white font-mono">
                        {String(item.value).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block">{item.label}</span>
                  </div>
                  {index < 3 && <span className="text-2xl text-gray-400 dark:text-gray-600 font-light">:</span>}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25"
              asChild
            >
              <a href="https://forms.gle/4LxgxtVJSGgcxPRg9" target="_blank" rel="noopener noreferrer">
                <FileText className="w-5 h-5 mr-2" />
                Register Here
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 dark:hover:bg-primary/20 px-8 py-6 text-base font-semibold bg-white dark:bg-transparent"
              asChild
            >
              <a href="/brochure/ICDMB_2026_Brochure.pdf" download="ICDMB_2026_Brochure.pdf">
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </a>
            </Button>
          </div>
        </div>

        {/* Paper Submission Deadline */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-center gap-2 text-center">
            <FileText className="w-5 h-5 text-blue-500 flex-shrink-0" />
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              <span className="text-gray-900 dark:text-white font-semibold">Last Date for Full Paper Submission</span>
              <span className="mx-2">:</span>
              <span className="text-blue-600 dark:text-blue-400 font-semibold">30th August 2026</span>
            </p>
          </div>
        </div>

        {/* Venue & Date Info */}
        <div className="mt-4 flex items-center justify-center gap-2 text-center">
          <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            <span className="text-gray-900 dark:text-white font-semibold">08-09th October 2026</span>
            <span className="mx-2">|</span>
            Dept. of Mechanical Engineering, MANIT Bhopal - 462003, MP, India
          </p>
        </div>
      </div>
    </section>
  )
}
