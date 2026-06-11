/* ==================== FOUNDER ==================== */
import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '@/components/shared/Container'
import { Button } from '@/components/ui/button'
import { waLink } from "@/lib/whatsapp";
import { BRAND } from "@/data/brand";

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

export default Founder;