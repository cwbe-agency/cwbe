"use client";

import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FAQS } from "@/data/home/faqs";

export default function FAQ({
  eyebrow = "FAQ",
  title = "Questions, answered.",
  description = "Everything businesses want to know.",
  items = FAQS,
}) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          center
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <Accordion
            type="single"
            collapsible
            className="space-y-4"
          >
            {items.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-6
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-slate-300
                  hover:shadow-md
                "
              >
                <AccordionTrigger
                  className="
                    py-6
                    text-left
                    hover:no-underline
                  "
                >
                  <div className="flex items-start gap-4 text-left">
                    <span
                      className="
                        mt-0.5
                        text-sm
                        font-bold
                        text-[var(--primary)]
                        shrink-0
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="
                        text-lg
                        font-semibold
                        leading-snug
                        text-slate-900
                      "
                    >
                      {faq.q || faq.question}
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent
                  className="
                    pb-6
                    pl-10
                    pr-4
                    text-base
                    leading-7
                    text-slate-600
                  "
                >
                  {faq.a || faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}