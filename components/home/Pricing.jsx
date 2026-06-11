/* ==================== PRICING ==================== */
import { Check, Star, ArrowRight } from 'lucide-react'
import Container from '@/components/shared/Container'
import SectionHeading from '@/components/shared/SectionHeading'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

const PRICING = [
  {
    name: 'Starter',
    price: '₹12,999',
    desc: 'Best for small businesses getting online.',
    cta: 'Get Started',
    features: [
      'Up to 6 Pages', 'Mobile Responsive Design', 'WhatsApp Integration',
      'Google Maps Integration', 'Contact Forms', 'Social Media Links',
      'Basic SEO Setup', 'Google Indexing Setup', 'AI Search Ready Structure',
      'SSL Security', 'Fast Loading Website', '7 Days Support',
    ],
  },
  {
    name: 'Business Growth',
    price: '₹17,999',
    desc: 'Most popular — for serious local businesses.',
    cta: 'Choose Growth',
    popular: true,
    features: [
      'Everything in Starter', 'Blog Integration', 'Sanity CMS',
      'Admin Access', 'Advanced SEO Setup', 'Local SEO Optimization',
      'FAQ Schema', 'Analytics Setup', 'Lead Capture System',
      'Email Notifications', 'Industry Landing Pages', '30 Days Support',
    ],
  },
  {
    name: 'Business Pro',
    price: '₹29,999',
    desc: 'For businesses ready to scale operations.',
    cta: 'Go Pro',
    features: [
      'Everything in Growth', 'Booking Systems', 'Advanced Forms',
      'CRM Integration', 'Performance Optimization', 'Priority Support',
      'Custom Workflows', 'Scalability Planning', '60 Days Support',
    ],
  },
  {
    name: 'Custom Solution',
    price: 'Custom Quote',
    desc: 'Web apps, dashboards, ecommerce & AI integrations.',
    cta: 'Request Quote',
    features: [
      'Web Applications', 'Dashboards & Portals', 'Ecommerce Platforms',
      'AI Integrations', 'Internal Tools', 'Custom Scope',
    ],
  },
]

function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-slate-50/60 border-y border-slate-200">
      <Container>
        <SectionHeading eyebrow="Transparent Pricing" title="Fixed Packages. No Surprises." subtitle="Pick the plan that fits today. Upgrade anytime. Pay only after you approve the prototype." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRICING.map((p, i) => (
            <motion.div key={p.name} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} variants={fadeUp} className={`relative rounded-2xl border bg-white p-6 flex flex-col ${p.popular ? 'border-[#2563EB] shadow-card ring-1 ring-[#2563EB]' : 'border-slate-200'}`}>
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-[#2563EB] px-3 py-1 text-[11px] font-semibold text-white">
                  <Star className="h-3 w-3 fill-white" /> Most Popular
                </div>
              )}
              <h3 className="text-lg font-bold text-slate-900">{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold tracking-tight text-slate-900">{p.price}</span>
              </div>
              <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
              <ul className="mt-5 space-y-2 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="h-4 w-4 mt-0.5 text-emerald-500 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#free-prototype" className="mt-6">
                <Button className={`w-full h-11 font-semibold ${p.popular ? 'bg-[#2563EB] hover:bg-[#1d4ed8] text-white' : 'bg-slate-900 hover:bg-slate-800 text-white'}`}>
                  {p.cta} <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-slate-500">All plans include free homepage prototype • SSL • Google indexing • mobile optimization.</p>
      </Container>
    </section>
  )
}

export default Pricing;