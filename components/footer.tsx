import { Mail, Phone, Globe } from "lucide-react"
import Link from "next/link"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About ICDMB", href: "#about-icdmb" },
  { label: "About MANIT", href: "#about-manit" },
  { label: "About Department", href: "#about-department" },
  { label: "Organizing Committee", href: "#organizing-committee" },
  { label: "Conference Themes", href: "#conference-themes" },
  { label: "Important Dates", href: "#important-dates" },
  { label: "Registration", href: "#registration" },
  { label: "Travel and Accomodation", href: "#travel-and-accomodation" },
]

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Branding */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img src="/images/icdmb-logo.png" alt="ICDMB 2026 Logo" className="w-14 h-14 object-contain" />
              <div>
                <h4 className="font-bold text-xl text-gray-900 dark:text-white">ICDMB 2026</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Advanced Design, Materials & Biomedical</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-md">
              The International Conference on Advanced Design, Materials & Biomedical Engineering brings together
              researchers, academicians, and industry professionals from around the globe to share cutting-edge research
              and innovations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold text-gray-900 dark:text-white mb-6 text-lg">Quick Links</h5>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-semibold text-gray-900 dark:text-white mb-6 text-lg">Contact Us</h5>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:icdmb2026@gmail.com"
                className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 group hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>icdmb2026@gmail.com</span>
              </a>
              <a
                href="tel:+919577839402"
                className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 group hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 95778 39402</span>
              </a>
              <a
                href="https://www.manit.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 group hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4 text-primary" />
                <span>www.manit.ac.in</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl">
              The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">© 2026 ICDMB | Designed for Academic Excellence</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
