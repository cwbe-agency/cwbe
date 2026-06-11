/* ==================== FINAL CTA ==================== */
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";
import { waLink } from "@/lib/whatsapp";

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

export default FinalCTA;