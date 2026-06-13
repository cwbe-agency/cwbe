"use client";

import { CheckCircle2, MessageCircle, Mail } from "lucide-react";

import Container from "@/components/shared/Container";

import { CONTACT_HERO } from "@/data/contact/hero";

import { waLink } from "@/lib/whatsapp";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">

      {/* Background Grid */}

      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none" />

      <Container>

        <div className="py-20 md:py-28">

          <div className="mx-auto max-w-4xl text-center">

            {/* Badge */}

            <div
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-slate-200
                bg-white
                px-4
                py-2
                text-sm
                font-medium
                text-slate-600
                shadow-soft
              "
            >
              {CONTACT_HERO.badge}
            </div>

            {/* SEO H1 */}

            <h1
              className="
                mt-6
                text-4xl
                font-bold
                tracking-tight
                text-slate-900
                md:text-6xl
              "
            >
              Contact Our
              <span className="gradient-text block">
                Website Development &
                SEO Team
              </span>
            </h1>

            {/* SEO Description */}

            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-lg
                leading-relaxed
                text-slate-600
              "
            >
              {CONTACT_HERO.description}
            </p>

            {/* Trust Pills */}

            <div
              className="
                mt-10
                flex
                flex-wrap
                justify-center
                gap-x-8
                gap-y-4
              "
            >
              {CONTACT_HERO.trustPoints.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-slate-600
                  "
                >
                  <CheckCircle2 className="h-4 w-4 text-green-600" />

                  {item}
                </div>
              ))}
            </div>

            {/* Contact Quick Actions */}

            <div
              className="
                mt-12
                flex
                flex-col
                justify-center
                gap-4
                sm:flex-row
              "
            >
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#1E293B]
                  px-6
                  py-3
                  font-medium
                  text-white
                  transition-all
                  hover:bg-[#0f172a]
                "
              >
                <MessageCircle className="h-5 w-5" />

                Chat On WhatsApp
              </a>

              <a
                href="mailto:cwbe.agency@gmail.com"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-6
                  py-3
                  font-medium
                  text-slate-700
                  transition-all
                  hover:bg-slate-50
                "
              >
                <Mail className="h-5 w-5" />

                Send Email
              </a>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}