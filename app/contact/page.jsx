"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ContactHero from "@/components/contact/ContactHero";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main>
        <ContactHero />
      </main>

      <Footer />
    </div>
  );
}