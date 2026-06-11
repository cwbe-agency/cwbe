'use client'

import { useState, useEffect, createElement } from 'react'
import { motion as fmMotion, AnimatePresence } from 'framer-motion'
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import { BRAND } from "@/data/brand";
import { waLink } from "@/lib/whatsapp";
import { fadeUp } from "@/lib/animations";

// Shared components
import Container from '@/components/shared/container';
import SectionHeading from "@/components/shared/SectionHeading";
import Field from "@/components/shared/Field";

import { INDUSTRIES } from "@/data/industries";

// Hope Page Components
import TrustBar from "@/components/home/TrustBar";
import PainPoints from "@/components/home/PainPoints";
import SolutionPillars from "@/components/home/SolutionPillars";

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
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
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
import { Label } from '@/components/ui/label'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'

const WHY_CHOOSE = [
  { icon: Eye, title: 'Free Homepage Prototype', body: 'See your actual homepage before paying a single rupee.' },
  { icon: Zap, title: 'Fast Turnaround', body: 'Live sites in 7–14 days — not months.' },
  { icon: Smartphone, title: 'Mobile Optimized', body: 'Pixel-perfect on every screen your customers use.' },
  { icon: Search, title: 'SEO Foundations', body: 'Clean code, schema, meta — indexed correctly from day one.' },
  { icon: Bot, title: 'AI Search Ready', body: 'Structured for ChatGPT, Gemini, Claude & Perplexity discovery.' },
  { icon: MessageCircle, title: 'Direct Communication', body: 'Talk to the founder. No account managers. No middlemen.' },
]

const PROJECTS = [
  {
    title: 'Heritage Builders',
    industry: 'Construction',
    challenge: 'Established builder losing leads to flashier competitors with no online presence.',
    solution: 'Premium homepage with project gallery, trust signals & WhatsApp enquiry flow.',
    outcome: '4× more qualified enquiries in 30 days.',
    color: 'from-amber-50 to-orange-50',
  },
  {
    title: 'Spice Route Café',
    industry: 'Restaurant',
    challenge: 'Customers couldn’t see the menu or book tables online.',
    solution: 'Mobile-first site with digital menu, reservation form, Google Maps & social integration.',
    outcome: 'Bookings up 60% within the first month.',
    color: 'from-rose-50 to-pink-50',
  },
  {
    title: 'Dr. Sharma Dental Clinic',
    industry: 'Healthcare',
    challenge: 'Outdated site, no local SEO, walk-ins only.',
    solution: 'Modern clinic site with appointments, FAQ schema, local SEO & AI-search structure.',
    outcome: 'Ranking on page 1 for 8 local keywords.',
    color: 'from-sky-50 to-blue-50',
  },
]

const PROCESS = [
  { n: '01', title: 'Request Prototype', body: 'Fill the form. We design a real homepage prototype based on your business — free.' },
  { n: '02', title: 'Review & Approve', body: 'See your design live. Request changes. Approve only when you love it.' },
  { n: '03', title: 'Development', body: 'We build it fully responsive, SEO-ready, and AI-search-ready in 7–14 days.' },
  { n: '04', title: 'Launch & Support', body: 'Go live with hosting setup, Google indexing, analytics & ongoing support.' },
]

const TRUST_SIGNALS = [
  { icon: FileCheck, title: 'Transparent Pricing', body: 'Fixed packages. No hidden fees. No surprises at the end.' },
  { icon: Users, title: 'Direct Founder Communication', body: 'You speak to Aryan directly — every brief, every revision.' },
  { icon: Eye, title: 'Free Prototype First', body: 'No upfront commitment. Approve the design, then pay.' },
  { icon: Rocket, title: 'Modern Technologies', body: 'Next.js, React, Tailwind — same stack used by Stripe & Linear.' },
  { icon: Clock, title: 'Fast Delivery', body: 'Most websites delivered in under 14 days.' },
]

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

const FAQS = [
  { q: 'How is the free homepage prototype actually free?', a: 'It’s a no-commitment design. We build a real homepage for your business so you can see how it would look before paying anything. You only pay if you approve and want to proceed with the full website.' },
  { q: 'How long does it take to launch a website?', a: 'Starter sites typically launch in 7 days, Business Growth in 10–14 days, and Pro in 2–3 weeks. We start the prototype within 48 hours of your request.' },
  { q: 'Do you provide hosting & domain?', a: 'We help you set up the best hosting (Vercel/managed) and connect your domain. Hosting costs are minimal and paid directly to the provider — full transparency.' },
  { q: 'Will my website rank on Google?', a: 'We build with strong SEO foundations — clean code, schema markup, meta tags, sitemaps and Google indexing setup. Ongoing ranking depends on content and local SEO, which Business Growth & Pro plans optimise further.' },
  { q: 'What is “AI Search Ready”?', a: 'ChatGPT, Gemini, Claude and Perplexity now recommend businesses to users. We structure your site with semantic HTML, schema and clear context so AI engines can discover and recommend you.' },
  { q: 'Can I update content myself?', a: 'Yes — Business Growth & Pro plans include Sanity CMS with admin access so you can edit blogs, pages and images without any coding.' },
  { q: 'How many revisions do I get?', a: 'Unlimited reasonable revisions during the design and development phase. We work until you’re genuinely happy.' },
  { q: 'Do you offer ongoing maintenance?', a: 'Every plan includes support (7–60 days). After that, monthly maintenance plans are available for updates, backups, monitoring and small changes.' },
  { q: 'Do you write the content?', a: 'We provide a structured content guide and can write basic homepage copy. For full blog or service copywriting, custom packages are available.' },
  { q: 'How do I get started?', a: 'Click “Get Free Prototype”, fill the short form (or WhatsApp Aryan directly). You’ll have your free homepage prototype in 2–3 business days.' },
]

/* ==================== WHY CHOOSE ==================== */
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

/* ==================== INDUSTRIES ==================== */
function Industries() {
  return (
    <section className="py-20 md:py-28 bg-slate-50/60 border-y border-slate-200">
      <Container>
        <SectionHeading eyebrow="Industries We Serve" title="Local Businesses Across India." subtitle="Templates tailored to how customers actually search for your kind of business." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {INDUSTRIES.map((ind, i) => (
            <motion.a key={ind.name} href="#free-prototype" initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} variants={fadeUp} className="group rounded-2xl border border-slate-200 bg-white p-5 hover:border-[#2563EB] hover:shadow-card transition-all">
              <div className="h-11 w-11 rounded-xl bg-blue-50 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                <ind.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{ind.name}</h3>
              <p className="mt-1 text-xs text-slate-500">{ind.tag}</p>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ==================== PROJECTS ==================== */
function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Featured Work" title="Real Businesses. Real Results." subtitle="A glimpse at how we approach challenge → solution → outcome for every client." />
        <div className="grid md:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => (
            <motion.article key={p.title} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} variants={fadeUp} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-card transition-all">
              <div className={`h-44 bg-gradient-to-br ${p.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-x-6 top-6 h-3 rounded bg-white/80" />
                <div className="absolute inset-x-6 top-12 h-2 rounded bg-white/60 w-1/2" />
                <div className="absolute bottom-6 right-6 h-10 w-10 rounded-full bg-white/80 flex items-center justify-center">
                  <ArrowUpRight className="h-5 w-5 text-slate-700" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-slate-100 text-slate-700 font-medium">{p.industry}</Badge>
                </div>
                <h3 className="mt-3 text-xl font-bold text-slate-900">{p.title}</h3>
                <dl className="mt-4 space-y-2.5 text-sm">
                  <div><dt className="text-xs uppercase tracking-wider font-semibold text-slate-400">Challenge</dt><dd className="text-slate-600 mt-0.5">{p.challenge}</dd></div>
                  <div><dt className="text-xs uppercase tracking-wider font-semibold text-slate-400">Solution</dt><dd className="text-slate-600 mt-0.5">{p.solution}</dd></div>
                  <div><dt className="text-xs uppercase tracking-wider font-semibold text-slate-400">Outcome</dt><dd className="text-slate-900 font-medium mt-0.5">{p.outcome}</dd></div>
                </dl>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ==================== PROCESS ==================== */
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

/* ==================== TRUST SIGNALS ==================== */
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

/* ==================== PRICING ==================== */
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

/* ==================== FAQ ==================== */
function FAQ() {
  return (
    <section className="py-20 md:py-28">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Questions, answered." subtitle="Everything most business owners want to know before they enquire." />
        <Accordion type="single" collapsible className="w-full divide-y divide-slate-200 border-y border-slate-200">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-0">
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-slate-900 hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  )
}

/* ==================== FOUNDER ==================== */
function Founder() {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50/60 border-y border-slate-200">
      <Container>
        <div className="grid md:grid-cols-[1fr_1.3fr] gap-10 md:gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-100 to-transparent -z-10" />
            <img src={BRAND.founderImg} alt="Aryan — Founder of CWBE" className="w-full max-w-sm mx-auto rounded-3xl object-cover aspect-[4/5] shadow-card border border-slate-200" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" /> Meet the Founder
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-900 text-balance">
              Hi, I'm Aryan. I build websites that local businesses actually need.
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed text-pretty">
              I started <strong className="text-slate-900">CWBE — Code With Belief</strong> because I noticed something simple: most local businesses don't need fancy agencies. They need a clean, fast, conversion-focused website — built by someone who actually cares.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed text-pretty">
              No middlemen. No vague timelines. No upfront commitments. You see your homepage <em>before</em> paying anything. That's how I'd want to be treated as a business owner — so that's how I work.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={waLink("Hi Aryan, I'd like to discuss a project for my business.")} target="_blank" rel="noreferrer">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white"><MessageCircle className="mr-1.5 h-4 w-4" /> WhatsApp Aryan</Button>
              </a>
              <a href="#free-prototype">
                <Button variant="outline" className="border-slate-300">Request Free Prototype</Button>
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

/* ==================== FREE PROTOTYPE FORM ==================== */
const prototypeSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().min(7, 'Enter a valid phone number'),
  business: z.string().min(2, 'Tell us your business name'),
  industry: z.string().min(2, 'Pick your industry'),
  currentWebsite: z.string().optional(),
  message: z.string().optional(),
})

function PrototypeForm() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(prototypeSchema),
  })
  const onSubmit = async (data) => {
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, type: 'prototype', source: 'homepage_form' }),
      })
      if (!res.ok) throw new Error('Failed')
      toast.success('Request received! Aryan will reach out within 24 hours.')
      setSubmitted(true)
      reset()
    } catch (e) {
      toast.error('Something went wrong. Please try WhatsApp instead.')
    }
  }
  return (
    <section id="free-prototype" className="py-20 md:py-28">
      <Container className="max-w-6xl">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white to-blue-50/40 shadow-card overflow-hidden">
          <div className="grid md:grid-cols-[1fr_1.1fr]">
            <div className="p-8 md:p-12 bg-[#1E293B] text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.07] bg-grid" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold text-[#60A5FA]">
                  <Sparkles className="h-3.5 w-3.5" /> Free Homepage Prototype
                </div>
                <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight leading-tight text-balance">
                  See your website before paying a single rupee.
                </h2>
                <p className="mt-4 text-slate-300 leading-relaxed">
                  Fill the short form. Within 2–3 business days, Aryan will design a real homepage prototype tailored to your business. Approve only if you love it.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    'A real, custom homepage — not a stock template',
                    'Tailored to your industry and customers',
                    'No commitment, no upfront cost',
                    'Delivered in 2–3 business days',
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-slate-200">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 shrink-0" /> <span className="text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Prefer to chat?</p>
                  <a href={waLink()} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold">
                    <MessageCircle className="h-5 w-5" /> WhatsApp Aryan directly <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-12">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <div className="h-16 w-16 rounded-full bg-emerald-50 flex items-center justify-center">
                    <CheckCircle2 className="h-9 w-9 text-emerald-500" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-slate-900">Request received!</h3>
                  <p className="mt-2 max-w-sm text-slate-600">Aryan will WhatsApp / email you within 24 hours to confirm a few details and begin your free prototype.</p>
                  <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-6">Submit another</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900">Tell us about your business</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Your Name *" error={errors.name?.message}>
                      <Input {...register('name')} placeholder="e.g. Rohit Sharma" />
                    </Field>
                    <Field label="Business Name *" error={errors.business?.message}>
                      <Input {...register('business')} placeholder="e.g. Sharma Builders" />
                    </Field>
                    <Field label="Email *" error={errors.email?.message}>
                      <Input type="email" {...register('email')} placeholder="you@business.com" />
                    </Field>
                    <Field label="WhatsApp / Phone *" error={errors.phone?.message}>
                      <Input {...register('phone')} placeholder="+91 9xxxxxxxxx" />
                    </Field>
                    <Field label="Industry *" error={errors.industry?.message}>
                      <select {...register('industry')} className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB]">
                        <option value="">Select industry…</option>
                        <option>Construction</option>
                        <option>Restaurant / Café</option>
                        <option>Clinic / Dental</option>
                        <option>Architecture / Interior</option>
                        <option>Local Service Business</option>
                        <option>Retail / Store</option>
                        <option>Other</option>
                      </select>
                    </Field>
                    <Field label="Current website (if any)" error={errors.currentWebsite?.message}>
                      <Input {...register('currentWebsite')} placeholder="https://…" />
                    </Field>
                  </div>
                  <Field label="Anything specific you'd like in the prototype?">
                    <Textarea {...register('message')} rows={3} placeholder="Goals, inspiration sites, must-have sections…" />
                  </Field>
                  <Button type="submit" disabled={isSubmitting} className="w-full h-12 bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-base font-semibold">
                    {isSubmitting ? 'Sending…' : (<>Request My Free Prototype <ArrowRight className="ml-2 h-5 w-5" /></>)}
                  </Button>
                  <p className="text-xs text-slate-500 text-center">We respect your inbox. Zero spam. Reply or unsubscribe anytime.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

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
