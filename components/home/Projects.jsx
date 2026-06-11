/* ==================== PROJECTS ==================== */
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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

export default Projects;