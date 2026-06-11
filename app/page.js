'use client'

import { useState, useEffect, createElement } from 'react'
import { motion as fmMotion, AnimatePresence } from 'framer-motion'
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import { BRAND } from "@/data/brand";
import { waLink } from "@/lib/whatsapp";

// Shared components
import Container from '@/components/shared/Container';
import SectionHeading from "@/components/shared/SectionHeading";
import Field from "@/components/shared/Field";


// Hope Page Components
import TrustBar from "@/components/home/TrustBar";
import PainPoints from "@/components/home/PainPoints";
import SolutionPillars from "@/components/home/SolutionPillars";
import WhyChoose from "@/components/home/WhyChoose";
import Industries from "@/components/home/Industries";
import Projects from "@/components/home/Projects";
import Process from "@/components/home/Process";
import TrustSignals from "@/components/home/TrustSignals";
import Pricing from "@/components/home/Pricing";
import FAQ from "@/components/home/FAQ";
import Founder from "@/components/home/Founder";
import PrototypeForm from "@/components/home/PrototypeForm";

// Shim: render plain DOM elements, strip framer-motion animation props.
// (framer-motion's animate is not engaging in this environment, so we bypass it
// for static reveal content. Real fmMotion is used for AnimatePresence popups.)
const ANIM_PROPS = new Set(['initial','animate','whileInView','whileHover','whileTap','whileFocus','whileDrag','variants','viewport','transition','custom','exit','layout','layoutId','drag','dragConstraints','onAnimationStart','onAnimationComplete'])
const stripAnim = (props) => {
  const out = {}
  for (const k in props) if (!ANIM_PROPS.has(k)) out[k] = props[k]
  return out
}
const motion = new Proxy({}, {
  get(_, tag) {
    const C = (props) => createElement(tag, stripAnim(props))
    C.displayName = `m.${String(tag)}`
    return C
  },
})
import { toast } from 'sonner'
import {
  ArrowRight, Check, CheckCircle2, Sparkles, Zap, Search, Bot, Smartphone, ShieldCheck,
  Star, Menu, X, MessageCircle, Phone, Mail, MapPin, ChevronDown, Rocket, TrendingUp,
  Building2, UtensilsCrossed, Stethoscope, Store, Hammer, Globe, Eye, FileCheck, ArrowUpRight,
  Send, Clock, Users, Award, Linkedin, Instagram, Twitter,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

/* ==================== FINAL CTA ==================== */
function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-[#1E293B] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] bg-grid" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#2563EB]/20 blur-3xl -z-0" />
      <Container className="relative text-center max-w-3xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
          Ready to see your website <span className="text-[#60A5FA]">before paying?</span>
        </h2>
        <p className="mt-5 text-lg text-slate-300">No upfront cost. No commitment. Just a real homepage, designed for your business, in 2–3 days.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#free-prototype">
            <Button size="lg" className="h-12 px-6 bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-base font-semibold w-full sm:w-auto">
              Get Free Prototype <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a href={waLink()} target="_blank" rel="noreferrer">
            <Button size="lg" variant="outline" className="h-12 px-6 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white text-base font-semibold w-full sm:w-auto">
              <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Aryan
            </Button>
          </a>
        </div>
      </Container>
    </section>
  )
}

/* ==================== CONTACT MINI ==================== */
function ContactMini() {
  const [data, setData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const submit = async (e) => {
    e.preventDefault()
    if (!data.name || !data.email || !data.message) {
      toast.error('Please fill all fields')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, type: 'contact', source: 'contact_section' }),
      })
      if (!res.ok) throw new Error()
      toast.success('Message sent! We\u2019ll reply within 24 hours.')
      setData({ name: '', email: '', message: '' })
    } catch {
      toast.error('Something went wrong. Try WhatsApp.')
    } finally { setLoading(false) }
  }
  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50/60 border-y border-slate-200">
      <Container className="max-w-5xl">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10">
          <div>
            <SectionHeading eyebrow="Contact" title="Have a different question?" subtitle="Drop a message — or reach out via WhatsApp / email for faster replies." align="left" />
            <div className="space-y-3">
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 text-slate-700 hover:text-slate-900"><Mail className="h-5 w-5 text-[#2563EB]" /> {BRAND.email}</a>
              <a href={waLink()} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-700 hover:text-slate-900"><MessageCircle className="h-5 w-5 text-emerald-500" /> WhatsApp +91 89274 72571</a>
              <div className="flex items-center gap-3 text-slate-700"><MapPin className="h-5 w-5 text-[#2563EB]" /> {BRAND.location}</div>
            </div>
          </div>
          <form onSubmit={submit} className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-soft space-y-4">
            <Field label="Your Name"><Input value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} placeholder="Your name" /></Field>
            <Field label="Email"><Input type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} placeholder="you@email.com" /></Field>
            <Field label="Message"><Textarea value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })} rows={4} placeholder="How can we help?" /></Field>
            <Button type="submit" disabled={loading} className="w-full bg-slate-900 hover:bg-slate-800 text-white h-11 font-semibold">{loading ? 'Sending…' : (<>Send Message <Send className="ml-1.5 h-4 w-4" /></>)}</Button>
          </form>
        </div>
      </Container>
    </section>
  )
}

/* ==================== WHATSAPP FLOATING ==================== */
function WhatsAppFloat() {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {open && (
          <fmMotion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }} className="mb-3 w-72 rounded-2xl bg-white border border-slate-200 shadow-card overflow-hidden">
            <div className="bg-emerald-500 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center"><MessageCircle className="h-5 w-5" /></div>
                <div>
                  <div className="font-semibold text-sm">Aryan — CWBE</div>
                  <div className="text-xs text-emerald-50">Typically replies in minutes</div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="rounded-lg bg-slate-50 p-3 text-sm text-slate-700">Hi 👋 — I'd love to help you get online. Want a free homepage prototype?</div>
              <a href={waLink()} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                <Button className="mt-3 w-full bg-emerald-500 hover:bg-emerald-600 text-white"><MessageCircle className="mr-1.5 h-4 w-4" /> Start Chat</Button>
              </a>
            </div>
          </fmMotion.div>
        )}
      </AnimatePresence>
      <button onClick={() => setOpen(!open)} aria-label="WhatsApp chat" className="group relative h-14 w-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-card flex items-center justify-center transition-transform hover:scale-105">
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-25" />
        {open ? <X className="h-6 w-6 relative" /> : <MessageCircle className="h-6 w-6 relative" />}
      </button>
    </div>
  )
}

/* ==================== APP ==================== */
function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <PainPoints />
        <SolutionPillars />
        <WhyChoose />
        <Industries />
        <Projects />
        <Process />
        <TrustSignals />
        <Pricing />
        <FAQ />
        <Founder />
        <PrototypeForm />
        <ContactMini />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
