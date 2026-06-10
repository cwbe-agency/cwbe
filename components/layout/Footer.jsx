/* ==================== FOOTER ==================== */
export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300">
      <Container className="py-14">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={BRAND.icon} alt="CWBE" className="h-10 w-10 object-contain" />
              <div>
                <div className="text-white text-lg font-bold tracking-tight">CWBE</div>
                <div className="text-xs text-slate-400">Code With Belief</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-400 max-w-sm leading-relaxed">Premium, conversion-focused websites for local businesses. See your homepage before paying a single rupee.</p>
            <div className="mt-5 flex items-center gap-3">
              <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/15" aria-label="WhatsApp"><MessageCircle className="h-4 w-4" /></a>
              <a href={`mailto:${BRAND.email}`} className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/15" aria-label="Email"><Mail className="h-4 w-4" /></a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/15" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/15" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
          <div>
            <div className="text-white font-semibold mb-3">Company</div>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white" href="#about">About</a></li>
              <li><a className="hover:text-white" href="#projects">Projects</a></li>
              <li><a className="hover:text-white" href="#pricing">Pricing</a></li>
              <li><a className="hover:text-white" href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-3">Industries</div>
            <ul className="space-y-2 text-sm">
              {INDUSTRIES.map((i) => (
                <li key={i.name}><a href="#free-prototype" className="hover:text-white">{i.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-3">Get in touch</div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5" /> +91 89274 72571</li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5" /> {BRAND.email}</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> {BRAND.location}</li>
            </ul>
            <a href="#free-prototype" className="mt-4 inline-flex">
              <Button className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white h-10 text-sm font-semibold">Get Free Prototype <ArrowRight className="ml-1.5 h-4 w-4" /></Button>
            </a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-400">
          <div>© {new Date().getFullYear()} CWBE — Code With Belief. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}