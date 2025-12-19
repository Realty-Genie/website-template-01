import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SplitRealtorStory } from "@/components/ui/split-realtor-story";
import Achievement from "@/components/ui/achievement";
import FeaturedListings from "@/components/FeaturedListings";
import FeaturedAreas from "@/components/FeaturedAreas";
import ServicesSection from "@/components/ServicesSection";
import VideoTestimonials from "@/components/VideoTestimonials";
import Testimonials from "@/components/testimonials";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <SplitRealtorStory />
      <ServicesSection />
      <Achievement />
      <FeaturedListings />
      <FeaturedAreas />
      <VideoTestimonials />
      <FAQ />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}
