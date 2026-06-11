/* ==================== PROCESS ==================== */
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { PROCESS } from "@/data/home/process";

function Process() {
  return (
    <section className="py-20 md:py-28 bg-[#1E293B] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-grid" />
      <Container className="relative">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-blue-200">
            <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA]" />
            How We Work
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">A simple, transparent 4-step process.</h2>
          <p className="mt-4 text-lg text-slate-300">No long contracts. No agency bureaucracy. From request to launch in days, not months.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-5">
          {PROCESS.map((s, i) => (
            <motion.div key={s.n} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} variants={fadeUp} className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <div className="text-sm font-mono font-bold text-[#60A5FA]">{s.n}</div>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Process;