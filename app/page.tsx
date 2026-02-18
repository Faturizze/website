'use client'

import HeroSection from "@/components/hero-section";
import Features from "@/components/features-7";
import StatsSection from "@/components/stats";
import FooterSection from "@/components/footer";
import Pricing from "@/components/pricing";
import CallToAction from "@/components/call-to-action";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <Pricing />
      <CallToAction />
      <FooterSection />
    </div>
  );
}
