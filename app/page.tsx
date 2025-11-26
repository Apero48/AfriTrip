import React from "react";
import HeroSection from "@/components/home/HeroSection";
import { TrustBanner } from "@/components/features/TrustBanner";
import { PromotionalBanner } from "@/components/features/PromotionalBanner";
import DestinationsSection from "@/components/home/DestinationsSection";
import { ThemedDestinationsGrid } from "@/components/features/ThemedDestinationsGrid";
import DealsSection from "@/components/home/DealsSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustBanner />
      <PromotionalBanner />
      <DestinationsSection />
      <ThemedDestinationsGrid />
      <DealsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
}
