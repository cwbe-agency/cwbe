/* ==================== FAQ ==================== */
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Container from '@/components/shared/Container'
import SectionHeading from '@/components/shared/SectionHeading'


const FAQS = [
  { q: 'How is the free homepage prototype actually free?', a: 'It’s a no-commitment design. We build a real homepage for your business so you can see how it would look before paying anything. You only pay if you approve and want to proceed with the full website.' },
  { q: 'How long does it take to launch a website?', a: 'Starter sites typically launch in 7 days, Business Growth in 10–14 days, and Pro in 2–3 weeks. We start the prototype within 48 hours of your request.' },
  { q: 'Do you provide hosting & domain?', a: 'We help you set up the best hosting (Vercel/managed) and connect your domain. Hosting costs are minimal and paid directly to the provider — full transparency.' },
  { q: 'Will my website rank on Google?', a: 'We build with strong SEO foundations — clean code, schema markup, meta tags, sitemaps and Google indexing setup. Ongoing ranking depends on content and local SEO, which Business Growth & Pro plans optimise further.' },
  { q: 'What is “AI Search Ready”?', a: 'ChatGPT, Gemini, Claude and Perplexity now recommend businesses to users. We structure your site with semantic HTML, schema and clear context so AI engines can discover and recommend you.' },
  { q: 'Can I update content myself?', a: 'Yes — Business Growth & Pro plans include Sanity CMS with admin access so you can edit blogs, pages and images without any coding.' },
  { q: 'How many revisions do I get?', a: 'Unlimited reasonable revisions during the design and development phase. We work until you’re genuinely happy.' },
  { q: 'Do you offer ongoing maintenance?', a: 'Every plan includes support (7–60 days). After that, monthly maintenance plans are available for updates, backups, monitoring and small changes.' },
  { q: 'Do you write the content?', a: 'We provide a structured content guide and can write basic homepage copy. For full blog or service copywriting, custom packages are available.' },
  { q: 'How do I get started?', a: 'Click “Get Free Prototype”, fill the short form (or WhatsApp Aryan directly). You’ll have your free homepage prototype in 2–3 business days.' },
]

function FAQ() {
  return (
    <section className="py-20 md:py-28">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Questions, answered." subtitle="Everything most business owners want to know before they enquire." />
        <Accordion type="single" collapsible className="w-full divide-y divide-slate-200 border-y border-slate-200">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-0">
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-slate-900 hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  )
}

export default FAQ;