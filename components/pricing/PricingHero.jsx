"use client";

import { ArrowRight, CheckCircle2, BadgeIndianRupee } from "lucide-react";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

import { PRICING_HERO } from "@/data/pricing/hero";

export default function PricingHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      <Container>

        <div className="py-20 md:py-28">

          <div className="mx-auto max-w-4xl text-center">

            {/* Badge */}

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">

              <BadgeIndianRupee className="h-4 w-4 text-[var(--primary)]" />

              {PRICING_HERO.badge}

            </div>

            {/* Heading */}

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">

              Simple Packages.

              <span className="block text-[var(--primary)]">
                {PRICING_HERO.highlight}
              </span>

            </h1>

            {/* Description */}

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">

              {PRICING_HERO.description}

            </p>

            {/* CTA */}

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              <Button
                size="lg"
                className="h-12 px-8"
              >
                Get Free Prototype

                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8"
              >
                Compare Packages
              </Button>

            </div>

            {/* Trust Points */}

            <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4">

              {PRICING_HERO.trustPoints.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-600"
                >
                  <CheckCircle2 className="h-4 w-4 text-green-600" />

                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}