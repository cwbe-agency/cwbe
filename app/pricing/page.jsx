"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import Pricing from "@/components/home/Pricing";
import WhoIsItFor from "@/components/pricing/WhoIsItFor";
import FAQ from "@/components/home/FAQ";
import { PRICING_FAQS } from "@/data/pricing/faq";
export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PricingHero />
        <Pricing />
        <WhoIsItFor />
        <FAQ
            eyebrow="Pricing FAQ"
            title="Questions Before You Decide."
            description="Everything most businesses want to know before choosing a package."
            items={PRICING_FAQS}
        />
      </main>
      <Footer />
    </>
  );
}