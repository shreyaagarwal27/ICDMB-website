import { AccommodationSection } from "@/components/accommodation-section"
import { Header } from "@/components/header"

export default function AccommodationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-20 dark:bg-gray-950">
        <AccommodationSection />
      </main>
    </>
  )
}
