"use client"

import { Plane, Train, Bus, MapPin } from "lucide-react"

export function TravelAttractionsSection() {
  return (
    <>
      {/* How to Reach Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-5xl font-bold mb-3 gradient-heading">How to Reach MANIT Bhopal</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Multiple convenient transportation options to reach the institute
            </p>
          </div>

          {/* Transportation Options - Simple Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* By Air */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Plane className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white">By Air</h3>
              </div>
              <div className="space-y-5 text-sm">
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Airport</p>
                  <p className="text-gray-900 dark:text-white font-medium">Raja Bhoj Airport</p>
                  <p className="text-gray-600 dark:text-gray-400">16 km from MANIT</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Travel Time</p>
                  <p className="text-gray-600 dark:text-gray-400">25–35 minutes by taxi/cab</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Transport</p>
                  <p className="text-gray-600 dark:text-gray-400">Uber, Ola, airport taxis available</p>
                </div>
              </div>
            </div>

            {/* By Rail */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Train className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white">By Rail</h3>
              </div>
              <div className="space-y-5 text-sm">
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Main Stations</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">Bhopal Junction</p>
                      <p className="text-gray-600 dark:text-gray-400">7 km from MANIT</p>
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">Rani Kamlapati Station</p>
                      <p className="text-gray-600 dark:text-gray-400">5 km from MANIT</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Transport</p>
                  <p className="text-gray-600 dark:text-gray-400">Taxis, autos, app-based cabs available</p>
                </div>
              </div>
            </div>

            {/* By Road */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Bus className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white">By Road</h3>
              </div>
              <div className="space-y-5 text-sm">
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Location</p>
                  <p className="text-gray-900 dark:text-white font-medium">Link Road No. 3, Central Bhopal</p>
                  <p className="text-gray-600 dark:text-gray-400">Easy access from major highways</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                    Highway Connectivity
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">NH46/NH52 provide direct access</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Transport</p>
                  <p className="text-gray-600 dark:text-gray-400">Buses, autos, e-rickshaws, cabs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="py-24 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl font-bold gradient-heading">Nearby Attractions</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          {/* Attractions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Upper Lake */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-all duration-300 group">
              <div className="relative overflow-hidden h-40 bg-gray-200 dark:bg-gray-600">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2c/View_of_Upper_Lake_from_Van_Vihar_National_park_Bhopal_India.jpg"
                  alt="Upper Lake (Bada Talab)"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-white">
                    Upper Lake (Bada Talab)
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Scenic freshwater lake with boating facilities and stunning sunsets.
                </p>
              </div>
            </div>

            {/* Van Vihar National Park */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-all duration-300 group">
              <div className="relative overflow-hidden h-40 bg-gray-200 dark:bg-gray-600">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/62/Van_Vihar.jpg"
                  alt="Van Vihar National Park"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-white">
                    Van Vihar National Park
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Urban wildlife park located beside Upper Lake with diverse fauna and flora.
                </p>
              </div>
            </div>

            {/* Bharat Bhavan */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-all duration-300 group">
              <div className="relative overflow-hidden h-40 bg-gray-200 dark:bg-gray-600">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Bharat_Bhavan_Bhopal_inside2.JPG"
                  alt="Bharat Bhavan"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-white">Bharat Bhavan</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Contemporary arts complex featuring galleries, theaters, and cultural performances.
                </p>
              </div>
            </div>

            {/* Ratapani Jungle Lodge */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-all duration-300 group">
              <div className="relative overflow-hidden h-40 bg-gray-200 dark:bg-gray-600">
                <img
                  src="/images/ratapani-jungle-lodge.jpg"
                  alt="Ratapani Jungle Lodge"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-white">Ratapani Jungle Lodge</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  RJL is a Jungle & Wildlife Safari Lodge, situated barely 30 Kms from the City of Bhopal, on the fringes of the upcoming Ratapani Tiger Reserve.
                </p>
              </div>
            </div>

            {/* Bhimbetka Rock Shelters */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-all duration-300 group">
              <div className="relative overflow-hidden h-40 bg-gray-200 dark:bg-gray-600">
                <img
                  src="/images/bhimbetka-rock-shelters.jpg"
                  alt="Bhimbetka Rock Shelters"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-white">
                    Bhimbetka Rock Shelters
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  UNESCO World Heritage Site featuring ancient rock shelters with prehistoric cave paintings.
                </p>
              </div>
            </div>

            {/* Sanchi Stupa */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-all duration-300 group">
              <div className="relative overflow-hidden h-40 bg-gray-200 dark:bg-gray-600">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a6/The_Great_Stupa_at_Sanchi_in_Madhya_Pradesh.jpg"
                  alt="Sanchi Stupa"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-white">Sanchi Stupa</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  UNESCO World Heritage Site located 48 km away, a magnificent Buddhist monument dating back to the 3rd
                  century BC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
