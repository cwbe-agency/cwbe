"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ContactHero from "@/components/contact/ContactHero";
import ContactMethods from "@/components/contact/ContactMethods";
import WhyWorkWithCWBE from "@/components/contact/WhyWorkWithCWBE";
import PrototypeForm from "@/components/forms/PrototypeForm";
import FAQ from "@/components/home/FAQ";
import {CONTACT_FAQS} from "@/data/contact/faq";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main>
        <ContactHero />
        <ContactMethods />
        <WhyWorkWithCWBE />
        <PrototypeForm />
        <FAQ
            eyebrow="Contact FAQ"
            title="Frequently Asked Questions"
            description="Answers to common questions about our contact process and services."
            items={CONTACT_FAQS}
        />
      </main>

      <Footer />
    </div>
  );
}