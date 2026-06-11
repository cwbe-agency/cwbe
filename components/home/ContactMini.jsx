/* ==================== CONTACT MINI ==================== */
import { useState } from "react"
import { toast } from 'sonner'
import { MapPin, Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import Container from '@/components/shared/Container';
import SectionHeading from "@/components/shared/SectionHeading";
import { BRAND } from "@/data/brand";
import { waLink } from "@/lib/whatsapp";
import Field from "@/components/shared/Field";

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

export default ContactMini;