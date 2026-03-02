import { HeroSection } from "@/components/hero-section"
import { ActionBar } from "@/components/action-bar"
import { PartnersSection } from "@/components/partners-section"
import { AboutSection } from "@/components/about-section"
import { AboutICDMB } from "@/components/about-icdmb"
import { AboutInstitute } from "@/components/about-institute"
import { SubmissionSection } from "@/components/submission-section"
import { ConferenceTracks } from "@/components/conference-tracks"
import { ImportantDates } from "@/components/important-dates"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { RegistrationSection } from "@/components/registration-section"
import { CommitteesSection } from "@/components/committees-section"
import { VenueSection } from "@/components/venue-section"
import { MapSection } from "@/components/map-section"
import { TravelAttractionsSection } from "@/components/travel-attractions-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0f172a]">
      <Header />
      <HeroSection />
      <ActionBar />
      <PartnersSection />
      <AboutICDMB />
      <AboutInstitute />
      <AboutSection />
      <SubmissionSection />
      <ConferenceTracks />
      <CommitteesSection />
      <ImportantDates />
      <RegistrationSection />
      <div id="travel-and-accomodation">
        <VenueSection />
        <MapSection />
        <TravelAttractionsSection />
      </div>
      <ContactSection />
      <Footer />
    </main>
  )
}
