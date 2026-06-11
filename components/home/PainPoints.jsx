/* ==================== PAIN POINTS ==================== */
import { motion } from 'framer-motion'
import Container from '@/components/shared/Container'
import SectionHeading from '@/components/shared/SectionHeading'
import { fadeUp } from "@/lib/animations";
import { PAIN_POINTS } from '@/data/home/pain-points'

function PainPoints() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="The Problem" title="Is Your Business Missing Opportunities Online?" subtitle="Every day without a professional website, you're handing customers to competitors who simply look more trustworthy." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {PAIN_POINTS.map((p, i) => (
            <motion.div key={p.title} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} custom={i} variants={fadeUp} className="group rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-300 hover:shadow-soft transition-all">
              <div className="h-9 w-9 rounded-lg bg-rose-50 flex items-center justify-center text-rose-500 text-sm font-bold">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default PainPoints;