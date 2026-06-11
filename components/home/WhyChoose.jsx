/* ==================== WHY CHOOSE ==================== */
import { Eye, Zap, Smartphone, Search, Bot, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";

const WHY_CHOOSE = [
  { icon: Eye, title: 'Free Homepage Prototype', body: 'See your actual homepage before paying a single rupee.' },
  { icon: Zap, title: 'Fast Turnaround', body: 'Live sites in 7–14 days — not months.' },
  { icon: Smartphone, title: 'Mobile Optimized', body: 'Pixel-perfect on every screen your customers use.' },
  { icon: Search, title: 'SEO Foundations', body: 'Clean code, schema, meta — indexed correctly from day one.' },
  { icon: Bot, title: 'AI Search Ready', body: 'Structured for ChatGPT, Gemini, Claude & Perplexity discovery.' },
  { icon: MessageCircle, title: 'Direct Communication', body: 'Talk to the founder. No account managers. No middlemen.' },
]

function WhyChoose() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Why CWBE" title="Built Differently. On Purpose." subtitle="What makes working with us different from generic agencies, templates and freelance marketplaces." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {WHY_CHOOSE.map((w, i) => (
            <motion.div key={w.title} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} variants={fadeUp} className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-card transition-all">
              <w.icon className="h-6 w-6 text-[#2563EB]" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{w.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{w.body}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default WhyChoose;