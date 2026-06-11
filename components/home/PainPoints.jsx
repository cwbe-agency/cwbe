/* ==================== PAIN POINTS ==================== */
import { motion } from 'framer-motion'
import Container from '@/components/shared/Container'


const PAIN_POINTS = [
  { title: "Customers can't find you online", body: 'Most local searches end on websites — without one, you’re invisible to ready-to-buy customers.' },
  { title: 'Competitors look more professional', body: 'A polished website instantly shifts perception. Without it, you lose trust before the first call.' },
  { title: 'Outdated website experience', body: 'Slow, broken, or mobile-unfriendly sites push customers straight to your competition.' },
  { title: 'No online credibility', body: 'No website, no Google presence, no reviews — buyers second-guess every quote.' },
  { title: 'Too dependent on social media', body: 'Algorithms change. Your website is the only asset you actually own.' },
  { title: 'Losing enquiries every week', body: 'No clear CTA, no WhatsApp button, no contact form — leads slip away silently.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }),
}

const SectionHeading = ({ eyebrow, title, subtitle, align = 'center' }) => (
  <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} mb-12 md:mb-16`}>
    {eyebrow && (
      <div className={`inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-soft ${align === 'center' ? '' : ''}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
        {eyebrow}
      </div>
    )}
    <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl text-balance">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 text-pretty">{subtitle}</p>
    )}
  </div>
)

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