/* ==================== TRUST SIGNALS ==================== */
import  Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { FileCheck, Users, Eye, Rocket, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const TRUST_SIGNALS = [
  { icon: FileCheck, title: 'Transparent Pricing', body: 'Fixed packages. No hidden fees. No surprises at the end.' },
  { icon: Users, title: 'Direct Founder Communication', body: 'You speak to Aryan directly — every brief, every revision.' },
  { icon: Eye, title: 'Free Prototype First', body: 'No upfront commitment. Approve the design, then pay.' },
  { icon: Rocket, title: 'Modern Technologies', body: 'Next.js, React, Tailwind — same stack used by Stripe & Linear.' },
  { icon: Clock, title: 'Fast Delivery', body: 'Most websites delivered in under 14 days.' },
]

function TrustSignals() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Trust & Credibility" title="Why Businesses Choose CWBE." subtitle="We're new — but our standards aren't. Here's what's non-negotiable for every project." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {TRUST_SIGNALS.map((t, i) => (
            <motion.div key={t.title} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} variants={fadeUp} className="rounded-2xl border border-slate-200 bg-white p-5">
              <t.icon className="h-5 w-5 text-[#2563EB]" />
              <h3 className="mt-3 text-base font-semibold text-slate-900">{t.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">{t.body}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default TrustSignals;