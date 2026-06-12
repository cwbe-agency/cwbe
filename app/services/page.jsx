"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        <ServicesHero />
        <ServicesGrid />
      </main>

      <Footer />
    </>
  );
}