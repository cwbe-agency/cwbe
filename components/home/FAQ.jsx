/* ==================== FAQ ==================== */
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Container from '@/components/shared/Container'
import SectionHeading from '@/components/shared/SectionHeading'
import { FAQS } from '@/data/home/faqs'

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