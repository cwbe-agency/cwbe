/* ==================== FREE PROTOTYPE FORM ==================== */
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { ArrowRight, Check, CheckCircle2, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea';
import Container from '@/components/shared/Container';
import Field from '@/components/shared/Field';
import { waLink } from '@/lib/whatsapp';
import { MessageCircle } from 'lucide-react'

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

export default PrototypeForm;