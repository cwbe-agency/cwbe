import { useState, useEffect } from "react";
import { AnimatePresence, motion as fmMotion } from "framer-motion";

import { MessageCircle, ArrowRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

import { BRAND } from "@/data/brand";
import { waLink } from "@/lib/whatsapp";
import { NAV } from "@/data/navigation";
import Container from "../shared/Container";

/* ==================== NAVBAR ==================== */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`sticky top-0 z-50 w-full transition-all ${scrolled ? 'bg-white/85 backdrop-blur-xl border-b border-slate-200/70' : 'bg-white/0'}`}>
      <Container className="flex h-16 md:h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5" aria-label="CWBE Home">
          <img src={BRAND.icon} alt="CWBE" className="h-9 w-9 object-contain" />
          <span className="hidden sm:block text-lg font-bold tracking-tight text-slate-900">CWBE</span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors rounded-md">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={waLink()} target="_blank" rel="noreferrer" className="hidden sm:inline-flex h-9 items-center gap-1.5 px-3 text-sm font-medium text-slate-600 hover:text-slate-900">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a href="#free-prototype">
            <Button className="bg-[#1E293B] hover:bg-[#0f172a] text-white shadow-soft h-10 px-4 text-sm font-semibold">
              Get Free Prototype <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden ml-1 inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>
      <AnimatePresence>
        {open && (
          <fmMotion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden overflow-hidden border-t border-slate-200 bg-white">
            <div className="px-5 py-3 flex flex-col">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 text-base font-medium text-slate-700 border-b border-slate-100 last:border-0">
                  {n.label}
                </a>
              ))}
            </div>
          </fmMotion.div>
        )}
      </AnimatePresence>
    </header>
  )
}