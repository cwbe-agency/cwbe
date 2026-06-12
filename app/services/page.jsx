"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import Process from "@/components/home/Process";
import FAQ from "@/components/home/FAQ";
import { SERVICES_FAQS } from "@/data/services/faq";
import PrototypeForm from "@/components/forms/PrototypeForm";
import FinalCTA from "@/components/home/FinalCTA";
import WhyCustomBuild from "@/components/services/WhyCustomBuild";


export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        <ServicesHero />
        <ServicesGrid />
        <WhyCustomBuild />
        <Process />
        <FAQ
          eyebrow="Service FAQ"
          title="Questions Before You Start."
          description="Everything businesses ask before building a website."
          items={SERVICES_FAQS}
        />
        <PrototypeForm />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}