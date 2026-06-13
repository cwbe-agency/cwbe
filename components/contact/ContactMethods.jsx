"use client";

import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";

import { CONTACT_METHODS } from "@/data/contact/methods";

import { waLink } from "@/lib/whatsapp";

export default function ContactMethods() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <Container>

        <SectionHeading
          eyebrow="Get In Touch"
          title="Choose The Way You Prefer To Connect."
          description="Whether you prefer WhatsApp, email or a quick consultation, we're here to help."
          center
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {CONTACT_METHODS.map((item) => {
            const Icon = item.icon;

            let href = "#";

            if (item.type === "whatsapp") {
              href = waLink();
            }

            if (item.type === "email") {
              href = "mailto:cwbe.agency@gmail.com";
            }

            return (
              <div
                key={item.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-50
                  "
                >
                  <Icon className="h-6 w-6 text-[var(--primary)]" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-relaxed text-slate-600">
                  {item.description}
                </p>

                <a
                  href={href}
                  target={
                    item.type === "whatsapp"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.type === "whatsapp"
                      ? "noreferrer"
                      : undefined
                  }
                  className="
                    mt-6
                    inline-flex
                    items-center
                    font-medium
                    text-[var(--primary)]
                    transition-colors
                    hover:opacity-80
                  "
                >
                  {item.action} →
                </a>
              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}