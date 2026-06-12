"use client";

import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";

import { CheckCircle2 } from "lucide-react";

import { WHO_IS_IT_FOR } from "@/data/pricing/who-is-it-for";

export default function WhoIsItFor() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>

        <SectionHeading
          eyebrow="Choose The Right Package"
          title="Which Package Is Right For You?"
          description="Not sure where to start? Here's a quick guide based on the type of business you run."
          center
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {WHO_IS_IT_FOR.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-50
                  "
                >
                  <Icon className="h-6 w-6 text-[var(--primary)]" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>

                <div className="mt-6 space-y-3">

                  {item.businesses.map((business) => (
                    <div
                      key={business}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />

                      <span className="text-sm text-slate-700">
                        {business}
                      </span>
                    </div>
                  ))}

                </div>
              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}