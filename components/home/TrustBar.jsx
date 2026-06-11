/* ==================== TRUST BAR ==================== */
import { Bot, Search, Smartphone, Sparkles, Zap } from 'lucide-react';
import Container from "@/components/shared/Container";

const TRUST_BADGES = [
  { icon: Sparkles, label: 'Free Homepage Prototype' },
  { icon: Smartphone, label: 'Mobile Optimized' },
  { icon: Search, label: 'SEO Ready' },
  { icon: Bot, label: 'AI Search Ready' },
  { icon: Zap, label: 'Fast Delivery' },
]

function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-slate-50/60 py-5">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-12">
          {TRUST_BADGES.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <Icon className="h-4 w-4 text-[#2563EB]" />
              {label}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default TrustBar;