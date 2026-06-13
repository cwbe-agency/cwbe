"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

import { CONTACT_CTA } from "@/data/contact/cta";
import { waLink } from "@/lib/whatsapp";

export default function ContactCTA() {
  return (
    <section className="py-20 md:py-28">
      <Container>

        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            bg-[#1E293B]
            px-8
            py-14
            text-center
            text-white
            md:px-14
            md:py-20
          "
        >
          {/* Glow */}

          <div
            className="
              absolute
              left-1/2
              top-0
              h-72
              w-72
              -translate-x-1/2
              rounded-full
              bg-blue-500/20
              blur-3xl
            "
          />

          <div className="relative z-10 mx-auto max-w-3xl">

            <h2 className="text-3xl font-bold md:text-5xl">
              {CONTACT_CTA.title}
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-lg
                leading-relaxed
                text-slate-300
              "
            >
              {CONTACT_CTA.description}
            </p>

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
              {CONTACT_CTA.benefits.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-slate-200
                  "
                >
                  <CheckCircle2 className="h-4 w-4 text-green-400" />

                  {item}
                </div>
              ))}
            </div>

            <div
              className="
                mt-10
                flex
                flex-col
                justify-center
                gap-4
                sm:flex-row
              "
            >
              <Button
                size="lg"
                className="
                  bg-white
                  text-slate-900
                  hover:bg-slate-100
                "
              >
                Get Free Prototype

                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="
                  border-white/30
                  bg-transparent
                  text-white
                  hover:bg-white/10
                "
              >
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat On WhatsApp
                </a>
              </Button>
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}