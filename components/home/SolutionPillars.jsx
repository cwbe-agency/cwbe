/* ==================== SOLUTION PILLARS ==================== */
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

import Container from '@/components/shared/Container';
import SectionHeading from "@/components/shared/SectionHeading";
import { ShieldCheck, TrendingUp, Search } from "lucide-react";

const PILLARS = [
  { icon: ShieldCheck, title: 'Build Trust', body: 'Professional design, clear messaging, and visible social proof so visitors believe in your business within seconds.' },
  { icon: TrendingUp, title: 'Generate Enquiries', body: 'Conversion-first layouts with WhatsApp, forms, and CTAs placed exactly where buyers decide.' },
  { icon: Search, title: 'Increase Visibility', body: 'Built-in SEO foundations and AI-search-ready structure so Google and ChatGPT can recommend you.' },
]

function SolutionPillars() {
  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50/60 border-y border-slate-200">
      <Container>
        <SectionHeading eyebrow="How CWBE Helps" title="Websites That Don't Just Look Good — They Win Customers." subtitle="Three pillars baked into every project we ship." />
        <div className="grid md:grid-cols-3 gap-5">
          {PILLARS.map((p, i) => (
            <motion.div key={p.title} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} variants={fadeUp} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-soft">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#1E293B] to-[#2563EB] flex items-center justify-center text-white">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default SolutionPillars;
