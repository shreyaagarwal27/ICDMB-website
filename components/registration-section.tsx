"use client"

import { motion } from "framer-motion"
import { Sparkles, Building2, AlertCircle } from "lucide-react"

const registrationData = [
  {
    category: "Industry Professional / Scientist",
    earlyBird: "₹8,000",
    regular: "₹9,000",
    badge: null,
  },
  {
    category: "Academicians (Faculty / Post-doctorate)",
    earlyBird: "₹6,000",
    regular: "₹6,500",
    badge: null,
  },
  {
    category: "Research Scholars / Students",
    earlyBird: "₹5,000",
    regular: "₹6,000",
    badge: "Best Value",
  },
  {
    category: "Accompanying Person & Participant",
    earlyBird: "₹1,500",
    regular: "₹1,500",
    badge: null,
  },
  {
    category: "Academicians / Industrialist (Abroad)",
    earlyBird: "$150",
    regular: "$200",
    badge: null,
  },
]

export function RegistrationSection() {
  return (
    <section id="registration" className="relative py-20 bg-[#fafafa] dark:bg-gray-950">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100/50 dark:from-gray-900/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-heading">Registration</span> <span className="text-primary">Fees</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Secure your spot at ICDMB 2026. Early bird registration offers significant savings.
          </p>
        </motion.div>

        {/* Desktop Table View */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block"
        >
          <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl shadow-primary/5">
            {/* Table Header with blue glow */}
            <div className="relative">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
              <div className="grid grid-cols-3 bg-gray-50 dark:bg-gray-800">
                <div className="px-6 py-4 text-left">
                  <span className="font-semibold text-gray-900 dark:text-white text-lg">Category</span>
                </div>
                <div className="px-6 py-4 text-center bg-blue-50 dark:bg-primary/10 border-x border-primary/20">
                  <span className="font-semibold text-primary text-lg">Early Bird</span>
                  <p className="text-xs text-primary/60 mt-1">Recommended</p>
                </div>
                <div className="px-6 py-4 text-center">
                  <span className="font-semibold text-gray-900 dark:text-white text-lg">Regular</span>
                </div>
              </div>
            </div>

            {/* Table Body - White rows */}
            <div className="divide-y divide-gray-200 dark:divide-gray-800">
              {registrationData.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  <div className="px-6 py-5 flex items-center gap-3">
                    <span className="text-gray-700 dark:text-gray-200">{row.category}</span>
                    {row.badge && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-100 dark:bg-primary/20 border border-amber-300 dark:border-primary/30 text-amber-700 dark:text-primary text-xs font-medium">
                        <Sparkles className="w-3 h-3" />
                        {row.badge}
                      </span>
                    )}
                  </div>
                  <div className="px-6 py-5 text-center bg-blue-50/50 dark:bg-primary/5 border-x border-primary/10">
                    <span className="font-mono text-lg text-primary font-semibold">{row.earlyBird}</span>
                  </div>
                  <div className="px-6 py-5 text-center">
                    <span className="font-mono text-lg text-gray-600 dark:text-gray-300">{row.regular}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mobile Card View - White cards */}
        <div className="md:hidden space-y-4">
          {registrationData.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden"
            >
              {/* Card Header */}
              <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <span className="font-medium text-gray-900 dark:text-white">{row.category}</span>
                {row.badge && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-100 dark:bg-primary/20 border border-amber-300 dark:border-primary/30 text-amber-700 dark:text-primary text-xs font-medium">
                    <Sparkles className="w-3 h-3" />
                    {row.badge}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="grid grid-cols-2 divide-x divide-gray-200 dark:divide-gray-800">
                <div className="p-4 bg-blue-50/50 dark:bg-primary/5">
                  <p className="text-xs text-primary mb-1">Early Bird</p>
                  <p className="font-mono text-xl text-primary font-semibold">{row.earlyBird}</p>
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Regular</p>
                  <p className="font-mono text-xl text-gray-600 dark:text-gray-300">{row.regular}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Payment Account Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-xl shadow-primary/5 overflow-hidden">
            {/* Header with gradient background */}
            <div className="relative px-6 py-6 bg-gradient-to-r from-primary/10 via-blue-50/50 to-purple-50/30 dark:from-primary/20 dark:via-blue-950/40 dark:to-purple-950/30 border-b border-gray-200 dark:border-gray-700">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">Payment Account Details</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Bank transfer information for registration fee</p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-8">
              {/* Primary Bank Details - Featured Section */}
              <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-blue-50/50 dark:from-blue-950/40 dark:to-blue-900/20 border border-blue-200 dark:border-blue-800/40 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Bank Name</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">State Bank of India</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Account Holder</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">Director, MANIT Bhopal</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-blue-200 dark:border-blue-800/40">
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Account Number</p>
                    <p className="font-mono text-xl font-semibold text-gray-900 dark:text-white tracking-wider bg-white dark:bg-gray-800/50 px-4 py-3 rounded-lg inline-block">10020150107</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Name on Account</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">MANIT, Bhopal</p>
                  </div>
                </div>
              </div>

              {/* Secondary Details Grid */}
              <div className="mb-8">
                <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-4">International Transfer Details</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wide mb-2">IFSC Code</p>
                    <p className="font-mono text-lg font-bold text-gray-900 dark:text-white">SBIN0001608</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wide mb-2">SWIFT Code</p>
                    <p className="font-mono text-lg font-bold text-gray-900 dark:text-white">SBININBB</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wide mb-2">IBAN Number</p>
                    <p className="font-mono text-lg font-bold text-gray-900 dark:text-white">SBININBB268</p>
                  </div>
                </div>
              </div>

              {/* Important Note - Enhanced */}
              <div className="p-5 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/30 border-l-4 border-amber-500 dark:border-amber-600 rounded-lg flex items-start gap-4">
                <div className="p-2 bg-amber-100 dark:bg-amber-900/50 rounded-lg shrink-0">
                  <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                </div>
                <div>
                  <p className="font-bold text-amber-900 dark:text-amber-300 text-base">Important: Payment Remarks Required</p>
                  <p className="text-sm text-amber-800 dark:text-amber-200 mt-2">
                    Please mention <span className="font-mono font-bold bg-amber-200/50 dark:bg-amber-900/60 px-2 py-1 rounded">&quot;ICDMB26 Registration Fee&quot;</span> in the payment remarks/reference field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
