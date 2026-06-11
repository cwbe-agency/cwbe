/* ==================== INDUSTRIES ==================== */
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Hammer, UtensilsCrossed, Store, Building2, Stethoscope } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";

export const INDUSTRIES = [
  { icon: Hammer, name: 'Construction Companies', tag: 'Builders, Contractors, Civil' },
  { icon: UtensilsCrossed, name: 'Restaurants & Cafés', tag: 'Menus, Bookings, Delivery' },
  { icon: Store, name: 'Local Businesses', tag: 'Retail, Services, Studios' },
  { icon: Building2, name: 'Architects & Interior Designers', tag: 'Portfolio, Projects, Leads' },
  { icon: Stethoscope, name: 'Clinics & Dentists', tag: 'Appointments, Trust, SEO' },
]



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

export default Industries;