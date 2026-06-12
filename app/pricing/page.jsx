"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import Pricing from "@/components/home/Pricing";
import WhoIsItFor from "@/components/pricing/WhoIsItFor";
export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PricingHero />
        <Pricing />
        <WhoIsItFor />
      </main>
      <Footer />
    </>
  );
}