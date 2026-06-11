/* ==================== WHATSAPP FLOATING ==================== */
import { AnimatePresence, motion as fmMotion } from "framer-motion";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/whatsapp";

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

export default WhatsAppFloat;