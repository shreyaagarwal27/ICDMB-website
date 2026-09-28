"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const menuItems = [
  "Home",
  "About ICDMB",
  "Speakers",
  "Conference Themes",
  "Important Dates",
  "Registration",
]

const trailingMenuItems = ["Travel and Accommodation", "Contact Us"]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* ICDMB Logo - Extreme Left */}
          <div className="flex-shrink-0">
            <img
              src="/images/icdmb-logo.png"
              alt="ICDMB 2026 Logo"
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
            />
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={item === "Speakers" ? "#prominent-speakers" : item === "Travel and Accommodation" ? "#venue" : `#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-2 py-2 text-xs text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors relative group whitespace-nowrap"
              >
                {item}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all group-hover:w-3/4" />
              </Link>
            ))}
            <details className="group relative">
              <summary className="flex cursor-pointer list-none items-center gap-1 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-xs font-semibold text-primary transition-colors hover:border-primary/40 hover:bg-primary/10 dark:border-primary/30 dark:bg-primary/10">
                Authors
                <ChevronDown className="size-3 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <div className="absolute right-0 top-full z-10 mt-2 min-w-56 overflow-hidden rounded-xl border border-gray-200 bg-white p-1.5 shadow-xl ring-1 ring-black/5 dark:border-gray-800 dark:bg-gray-900">
                <Link href="/accommodation" className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-primary/10 hover:text-primary dark:text-gray-200">Accommodation</Link>
                <Link href="#submission" className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-primary/10 hover:text-primary dark:text-gray-200">Presentation Guide</Link>
              </div>
            </details>
            {trailingMenuItems.map((item) => (
              <Link key={item} href={item === "Travel and Accommodation" ? "#venue" : `#${item.toLowerCase().replace(/\s+/g, "-")}`} className="px-2 py-2 text-xs text-gray-600 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* MANIT Logo - Extreme Right */}
            <img
              src="/images/image-20-282-29.png"
              alt="MANIT Bhopal Logo"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
            />

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  href={item === "Speakers" ? "#prominent-speakers" : `#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-2 dark:border-gray-800">
                <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Authors</p>
                <Link href="/accommodation" className="block rounded-lg px-8 py-3 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary dark:text-gray-300" onClick={() => setMobileMenuOpen(false)}>Accommodation</Link>
                <Link href="#submission" className="block rounded-lg px-8 py-3 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary dark:text-gray-300" onClick={() => setMobileMenuOpen(false)}>Presentation Guide</Link>
              </div>
              {trailingMenuItems.map((item) => (
                <Link
                  key={item}
                  href={item === "Travel and Accommodation" ? "#venue" : `#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
