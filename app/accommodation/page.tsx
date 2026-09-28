import Link from "next/link"
import { AccommodationSection } from "@/components/accommodation-section"

export default function AccommodationPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20 dark:bg-gray-950">
      <div className="mx-auto flex max-w-5xl justify-end px-4 pt-6 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-medium text-primary hover:underline">
          Back to home
        </Link>
      </div>
      <AccommodationSection />
    </main>
  )
}
