"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const menuItems = [
  "Home",
  "About ICDMB",
  "About MANIT",
  "About Department",
  "Organizing Committee",
  "Conference Themes",
  "Important Dates",
  "Registration",
  "Travel and Accomodation",
  "Contact Us",
]

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
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-2 py-2 text-xs text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors relative group whitespace-nowrap"
              >
                {item}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all group-hover:w-3/4" />
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
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
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
