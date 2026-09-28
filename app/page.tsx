import { HeroSection } from "@/components/hero-section"
import { ActionBar } from "@/components/action-bar"
import { PartnersSection } from "@/components/partners-section"
import { ChallengeSection } from "@/components/challenge-section"
import { ExpertConnectSection } from "@/components/expert-connect-section"
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
import { LateSubmissionNotice } from "@/components/late-submission-notice"

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen bg-[#0f172a] pt-16 sm:pt-[4.5rem]">
      <Header />
      <HeroSection />
      <ActionBar />
      <AboutICDMB />
      <ChallengeSection />
      <ExpertConnectSection />
      <PartnersSection />
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
      <LateSubmissionNotice />
    </main>
  )
}
