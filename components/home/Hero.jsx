import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Hammer,
  UtensilsCrossed,
  Store,
} from "lucide-react";

import Container from "@/components/shared/Container";

import { Button } from "@/components/ui/button";

/* ==================== HERO ==================== */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-12 md:pt-20 pb-16 md:pb-24">
      <div className="absolute inset-0 bg-grid bg-grid-fade" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 -z-0 h-[500px] bg-gradient-to-b from-blue-50/40 via-white to-transparent" aria-hidden="true" />
      <Container className="relative">
        <div className="grid lg:grid-cols-[1.1fr_1fr] items-center gap-12 lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <a href="#free-prototype" className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/60 px-3 py-1.5 text-xs font-semibold text-[#2563EB]">
              <Sparkles className="h-3.5 w-3.5" />
              Free Homepage Prototype — No Payment Required
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold leading-[1.05] tracking-tight text-slate-900 text-balance">
              Professional Websites That Help Local Businesses Get{' '}
              <span className="gradient-text">Found, Trusted & Chosen</span>.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl text-pretty">
              See your website <strong className="text-slate-900">before spending a single rupee</strong>. Get a free homepage prototype and discover how your business can stand out — on Google, on mobile, and on AI search.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#free-prototype">
                <Button size="lg" className="w-full sm:w-auto h-12 px-6 bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-base font-semibold shadow-soft">
                  Get Free Prototype <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#projects">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-6 border-slate-300 text-slate-800 hover:bg-slate-50 text-base font-semibold">
                  View Projects
                </Button>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
              <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> No upfront cost</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> 2–3 day delivery</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Direct founder access</div>
            </div>
          </motion.div>
          <HeroVisual />
        </div>
      </Container>
    </section>
  )
}

function HeroVisual() {
  const previews = [
    { title: 'Construction Co.', tag: 'Builders', accent: 'from-amber-200 to-orange-100', icon: Hammer },
    { title: 'Spice Route Café', tag: 'Restaurant', accent: 'from-rose-200 to-pink-100', icon: UtensilsCrossed },
    { title: 'Local Business', tag: 'Service', accent: 'from-blue-200 to-sky-100', icon: Store },
  ]
  return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="relative h-[480px] md:h-[540px]">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100/40 via-transparent to-transparent blur-2xl" />
      {previews.map((p, i) => {
        const Icon = p.icon
        const offsets = [
          'left-0 top-8 rotate-[-4deg] z-10',
          'right-0 top-0 rotate-[3deg] z-20',
          'left-8 bottom-0 rotate-[-2deg] z-30',
        ][i]
        return (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
            className={`absolute ${offsets} w-[78%] md:w-[72%] rounded-2xl border border-slate-200 bg-white shadow-card overflow-hidden`}
          >
            <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50/80 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              <span className="ml-3 text-[10px] font-mono text-slate-400">{p.title.toLowerCase().replace(/\s/g, '')}.in</span>
            </div>
            <div className="p-4">
              <div className={`h-28 w-full rounded-lg bg-gradient-to-br ${p.accent} flex items-center justify-center`}>
                <Icon className="h-9 w-9 text-slate-700/80" />
              </div>
              <div className="mt-3 space-y-2">
                <div className="h-3 w-2/3 rounded bg-slate-200" />
                <div className="h-2 w-full rounded bg-slate-100" />
                <div className="h-2 w-5/6 rounded bg-slate-100" />
              </div>
              <div className="mt-3 flex gap-2">
                <div className="h-7 w-20 rounded-md bg-[#2563EB]" />
                <div className="h-7 w-16 rounded-md border border-slate-200" />
              </div>
            </div>
          </motion.div>
        )
      })}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute -bottom-3 right-3 z-40 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-card">
        <Sparkles className="h-4 w-4 text-[#2563EB]" />
        Live prototype in 2–3 days
      </motion.div>
    </motion.div>
  )
}

export default Hero;