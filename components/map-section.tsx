"use client"

import { useEffect, useRef } from "react"
import { MapPin } from "lucide-react"

export function MapSection() {
  const mapContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (mapContainerRef.current && !mapContainerRef.current.querySelector("iframe")) {
      const iframe = document.createElement("iframe")
      iframe.src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.68002082211!2d77.40114387451046!3d23.82809897863163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c426cfdfd1ed5%3A0xf2a9c89ea39b58d3!2sMANIT%20Bhopal!5e0!3m2!1sen!2sin!4v1702140000000!5m2!1sen!2sin"
      iframe.width = "100%"
      iframe.height = "450"
      iframe.style.border = "0"
      iframe.allowFullscreen = true
      iframe.loading = "lazy"
      iframe.referrerPolicy = "no-referrer-when-downgrade"
      iframe.className = "w-full"
      iframe.title = "MANIT Bhopal Location"
      mapContainerRef.current.appendChild(iframe)
    }
  }, [])

  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl font-bold gradient-heading">Location Map</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        {/* Map Card */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
            <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white">MANIT Bhopal</h3>
          </div>

          {/* Embedded Google Map */}
          <div
            ref={mapContainerRef}
            className="w-full rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700 min-h-[450px] bg-gray-200 dark:bg-gray-800"
          />

          {/* Location Details */}
          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <span className="text-gray-900 dark:text-white font-medium">Department of Mechanical Engineering</span>
              <br />
              Maulana Azad National Institute of Technology (MANIT)
              <br />
              Bhopal – 462003, Madhya Pradesh, India
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
