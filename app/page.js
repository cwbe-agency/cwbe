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
import FinalCTA from "@/components/home/FinalCTA";
import WhatsAppFloat from "@/components/home/WhatsAppFloat";

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
