"use client"

import type React from "react"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setFormState("success")
    setFormData({ name: "", email: "", message: "" })

    // Reset after showing success
    setTimeout(() => setFormState("idle"), 3000)
  }

  return (
    <section id="contact-us" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-heading">Drop Your Message</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 lg:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-950 border border-gray-300 dark:border-gray-800 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="Your full name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-950 border border-gray-300 dark:border-gray-800 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="you@example.com"
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-950 border border-gray-300 dark:border-gray-800 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={formState !== "idle"}
              className={`w-full py-4 px-6 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 ${
                formState === "success"
                  ? "bg-green-600"
                  : "bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
              } disabled:cursor-not-allowed`}
            >
              {formState === "idle" && (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
              {formState === "submitting" && (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              )}
              {formState === "success" && (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Message Sent!
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
