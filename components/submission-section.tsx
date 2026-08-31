"use client"

import { FileText, Users, Download, CheckCircle2, ArrowRight } from "lucide-react"

const academiaSteps = [
  { step: 1, title: "Full Paper Submission", description: "Submit full paper (10-12 pages) in prescribed format via CMT portal mentioned in the submission bottom" },
  { step: 2, title: "Review Process", description: "Papers reviewed for high standards (Plagiarism < 15%, AI content = 0%)" },
  { step: 3, title: "Revised Manuscript", description: "Address review comments and submit revised manuscript" },
  { step: 4, title: "Final Acceptance", description: "Technical Committee reviews for final acceptance" },
]

export function SubmissionSection() {
  return (
    <section id="submission" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">Full Papers</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Submit your research contributions through our streamlined submission process
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Academia Track Card */}
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Research Paper Submission</h3>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Academia and student authors intending to present Research Papers must submit the full paper in the prescribed format with maximum <span className="text-primary font-semibold">10 to 12 pages</span> by email (<a href="mailto:icdmb2026@gmail.com" className="text-primary hover:underline">icdmb2026@gmail.com</a>).
            </p>

            {/* Submission Progress Stepper */}
            <div className="relative">
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gray-300 dark:bg-gray-700" />
              <div className="space-y-6">
                {academiaSteps.map((item, index) => (
                  <div key={item.step} className="flex items-start gap-4 relative">
                    <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center z-10 flex-shrink-0">
                      <span className="text-primary font-bold">{item.step}</span>
                    </div>
                    <div className="pt-2">
                      <h4 className="text-gray-900 dark:text-white font-semibold">{item.title}</h4>
                      <p className="text-gray-500 dark:text-gray-500 text-sm">{item.description}</p>
                    </div>
                    {index < academiaSteps.length - 1 && (
                      <ArrowRight className="absolute left-[52px] top-14 w-4 h-4 text-primary/50 rotate-90" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Industry Track Card */}
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Industry Personnel & Consultants</h3>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We welcome submissions from industry professionals, medical consultants, and practitioners sharing field
              experience, case studies, and emerging trends.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Separate scheduled sessions for industry presentations
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Dual panel peer review (Academia + Industry experts)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Case studies and real-world applications welcome
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300 text-sm">Focus on new trends and innovative practices</p>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Industry submissions undergo a specialized review process that values practical insights and real-world
                impact alongside academic rigor.
              </p>
            </div>
          </div>
        </div>

        {/* Submit via Email Card */}
        <div className="bg-gradient-to-r from-primary/10 to-transparent border border-primary/30 rounded-2xl p-8 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Submit Paper for ICDMB</h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://cmt3.research.microsoft.com/ICDMB2026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <FileText className="w-4 h-4" />
                Submit Full Paper
              </a>
              <a
                href="/templates/ICDMB_Paper_Template.pdf"
                download="ICDMB_Paper_Template.pdf"
                className="inline-flex items-center justify-center gap-2 border border-primary text-primary hover:bg-primary/10 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Paper Template
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
