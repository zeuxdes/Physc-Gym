import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ConceptBar } from "@/components/gym/ConceptBar";
import { Navbar } from "@/components/gym/Navbar";
import { Hero } from "@/components/gym/Hero";
import { Stats } from "@/components/gym/Stats";
import { About } from "@/components/gym/About";
import { FacilityGallery } from "@/components/gym/FacilityGallery";
import { Programmes } from "@/components/gym/Programmes";
import { WhyChoose } from "@/components/gym/WhyChoose";
import { Trainers } from "@/components/gym/Trainers";
import { Memberships } from "@/components/gym/Memberships";
import { Transformations } from "@/components/gym/Transformations";
import { Branches } from "@/components/gym/Branches";
import { Testimonials } from "@/components/gym/Testimonials";
import { ContactSection } from "@/components/gym/ContactSection";
import { FinalCTA } from "@/components/gym/FinalCTA";
import { Footer } from "@/components/gym/Footer";
import { MobileStickyCTA } from "@/components/gym/MobileStickyCTA";
import { TrialForm } from "@/components/gym/TrialForm";
import { useGymTheme } from "@/components/gym/useGymTheme";
import { gymConfig } from "@/config/gym.config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${gymConfig.brand.name} — ${gymConfig.brand.tagline}` },
      { name: "description", content: `${gymConfig.brand.name} — premium strength, conditioning and group classes in ${gymConfig.hero.location}. Book your free trial today.` },
      { property: "og:title", content: `${gymConfig.brand.name} — ${gymConfig.brand.tagline}` },
      { property: "og:description", content: `Premium fitness experience at ${gymConfig.brand.name}. Expert trainers, modern equipment, real results.` },
      { property: "og:image", content: gymConfig.hero.imageUrl },
      { name: "twitter:image", content: gymConfig.hero.imageUrl },
    ],
  }),
  component: Index,
});

function Index() {
  useGymTheme();
  const [trialOpen, setTrialOpen] = useState(false);
  const openTrial = () => setTrialOpen(true);
  const closeTrial = () => setTrialOpen(false);

  return (
    <div className="min-h-screen bg-[var(--background)] text-white">
      <ConceptBar />
      <Navbar onBookTrial={openTrial} />
      <main>
        <Hero onBookTrial={openTrial} />
        <Stats />
        <About />
        <FacilityGallery />
        <Programmes onEnquire={openTrial} />
        <WhyChoose />
        <Trainers onBook={openTrial} />
        <Memberships onEnquire={openTrial} />
        <Transformations />
        <Branches />
        <Testimonials />
        <ContactSection />
        <FinalCTA onBook={openTrial} />
      </main>
      <Footer />
      <MobileStickyCTA onBook={openTrial} />
      <TrialForm open={trialOpen} onClose={closeTrial} />
    </div>
  );
}
